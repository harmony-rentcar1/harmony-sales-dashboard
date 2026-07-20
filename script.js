const $ = (id) => document.getElementById(id);

const fields = {
  date: $("dateInput"),
  car: $("carSelect"),
  fuel: $("fuelSelect"),
  trim: $("trimSelect"),
  color: $("colorSelect"),
  period: $("periodInput"),
  price: $("priceInput"),
  residual: $("residualInput"),
  deposit: $("depositInput"),
  rent: $("rentInput"),
  rentInputLabel: $("rentInputLabel"),
  previewRentLabel: $("previewRentLabel")
};

let optionCount = 0;
const maxOptionCount = 8;
const CUSTOM_OPTION_VALUE_PREFIX = "__custom__";
// 사용자가 직접 추가한 옵션 데이터 저장소: { [customKey]: { name, desc, image(dataURL) } }
const customOptionsData = {};

function optionSelects() {
  return Array.from(document.querySelectorAll(".option-select"));
}

function formatWon(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";

  // 이미 입력된 '원' 제거
  let text = raw.replace(/원$/g, "").trim();
  if (!text) return "";

  // 숫자와 쉼표만 있는 경우 3자리 단위 쉼표 자동 적용
  const numericOnly = text.replace(/,/g, "");
  if (/^\d+$/.test(numericOnly)) {
    text = Number(numericOnly).toLocaleString("ko-KR");
  }

  return `${text}원`;
}

function fillSelect(select, items, includeNone = false, labelFn = (item) => item) {
  select.innerHTML = "";
  if (includeNone) {
    const none = document.createElement("option");
    none.value = "미선택";
    none.textContent = "미선택";
    select.appendChild(none);
  }
  items.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = labelFn(item);
    select.appendChild(opt);
  });
}

function currentCar() { return dashboardData.cars[fields.car.value]; }
function currentFuel() { return currentCar()?.fuels?.[fields.fuel.value]; }
function currentTrim() { return currentFuel()?.trims?.[fields.trim.value]; }
function currentColors() { return currentTrim()?.colors || currentFuel()?.colors || currentCar()?.colors || {}; }

function isLeaseVehicle() {
  const carName = fields.car.value || "";
  if (carName.includes("포터")) return true;
  if (carName.includes("스타리아")) {
    const trimName = (fields.trim && fields.trim.value) || "";
    if (trimName.includes("카고")) return true;
  }
  return false;
}

function refreshRentLabel() {
  const label = isLeaseVehicle() ? "월리스료" : "월렌트료";
  if (fields.rentInputLabel) fields.rentInputLabel.textContent = label;
  if (fields.previewRentLabel) fields.previewRentLabel.textContent = label;
}


function init() {
  fields.date.value = new Date().toISOString().slice(0, 10);
  fillSelect(fields.car, Object.keys(dashboardData.cars));
  refreshFuel();
  bindEvents();
  applyPreview();
}

function refreshFuel() {
  const car = currentCar();
  fillSelect(fields.fuel, car ? Object.keys(car.fuels || {}) : []);
  refreshTrim();
  refreshColor();
}

function refreshTrim() {
  const fuel = currentFuel();
  fillSelect(fields.trim, fuel ? Object.keys(fuel.trims || {}) : []);
  refreshTrimData();
}

function refreshColor() {
  fillSelect(fields.color, Object.keys(currentColors()));
}

function renderOptionInputs(selectedValues = []) {
  const wrap = $("optionInputList");
  wrap.innerHTML = "";

  const optionNames = currentTrim()?.options || [];

  for (let i = 1; i <= optionCount; i++) {
    const row = document.createElement("div");
    row.className = "option-row";

    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = `옵션 ${i}`;

    const select = document.createElement("select");
    select.className = "option-select";
    select.id = `option${i}Select`;
    fillSelect(select, optionNames, true, (item) => (item.includes("·") ? item.split("·").pop() : item));

    // "직접 입력" 항목 추가 (이 옵션 슬롯 전용 커스텀 키)
    const customKey = `${CUSTOM_OPTION_VALUE_PREFIX}${i}`;
    const customOpt = document.createElement("option");
    customOpt.value = customKey;
    customOpt.textContent = "➕ 직접 입력";
    select.appendChild(customOpt);

    const isCustomSelected = selectedValues[i - 1] === customKey;

    if (isCustomSelected) {
      select.value = customKey;
    } else if (selectedValues[i - 1] && optionNames.includes(selectedValues[i - 1])) {
      select.value = selectedValues[i - 1];
    } else if (i === 1 && optionNames.length) {
      select.value = optionNames[0];
    } else {
      select.value = "미선택";
    }

    label.appendChild(span);
    label.appendChild(select);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-option-btn";
    removeBtn.textContent = "×";
    removeBtn.title = "옵션 삭제";
    removeBtn.disabled = false;
    removeBtn.addEventListener("click", () => {
      delete customOptionsData[customKey];
      const currentValues = optionSelects().map((s) => s.value);
      currentValues.splice(i - 1, 1);
      optionCount = Math.max(0, optionCount - 1);
      renderOptionInputs(currentValues);
      applyPreview();
    });

    row.appendChild(label);
    row.appendChild(removeBtn);
    wrap.appendChild(row);

    // 커스텀 입력 패널 (옵션명 / 옵션 설명 / 이미지 업로드)
    const customPanel = document.createElement("div");
    customPanel.className = "custom-option-panel";
    customPanel.style.display = isCustomSelected ? "flex" : "none";
    customPanel.style.flexDirection = "column";
    customPanel.style.gap = "6px";
    customPanel.style.margin = "6px 0 10px";
    customPanel.style.padding = "10px";
    customPanel.style.border = "1px dashed #c9c9c9";
    customPanel.style.borderRadius = "8px";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "옵션 이름";
    nameInput.value = customOptionsData[customKey]?.name || "";

    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.placeholder = "옵션 설명";
    descInput.value = customOptionsData[customKey]?.desc || "";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    const ensureCustomEntry = () => {
      if (!customOptionsData[customKey]) {
        customOptionsData[customKey] = { name: "", desc: "", image: "" };
      }
      return customOptionsData[customKey];
    };

    nameInput.addEventListener("input", () => {
      ensureCustomEntry().name = nameInput.value;
      applyPreview();
    });
    descInput.addEventListener("input", () => {
      ensureCustomEntry().desc = descInput.value;
      applyPreview();
    });
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        ensureCustomEntry().image = reader.result;
        applyPreview();
      };
      reader.readAsDataURL(file);
    });

    customPanel.appendChild(nameInput);
    customPanel.appendChild(descInput);
    customPanel.appendChild(fileInput);
    wrap.appendChild(customPanel);

    select.addEventListener("input", () => {
      const showCustom = select.value === customKey;
      customPanel.style.display = showCustom ? "flex" : "none";
      if (showCustom) ensureCustomEntry();
      applyPreview();
    });
  }

  $("addOptionBtn").disabled = optionCount >= maxOptionCount;
}

function refreshTrimData() {
  const trim = currentTrim();
  if (!trim) {
    fields.price.value = "";
    refreshColor();
    optionCount = 0;
    renderOptionInputs([]);
    return;
  }
  fields.price.value = trim.price || "";
  if (trim.defaultResidual) fields.residual.value = trim.defaultResidual;
  if (trim.defaultDeposit) fields.deposit.value = trim.defaultDeposit;
  if (trim.defaultRent) fields.rent.value = trim.defaultRent;

  refreshColor();
  optionCount = 0;
  renderOptionInputs([]);
}

function getSelectedOptions() {
  const selected = optionSelects()
    .map((select) => select.value)
    .filter((name) => name && name !== "미선택");

  return [...new Set(selected)];
}

function applyPreview() {
  refreshRentLabel();
  const car = currentCar();
  const fuel = currentFuel();
  const trim = currentTrim();

  $("previewDate").textContent = `기준일자 : ${fields.date.value || ""}`;
  $("previewCarName").textContent = fields.car.value || "";
  $("previewTrim").textContent = trim ? (trim.displayTrim || `${fuel?.displayFuel || ""} ${fields.trim.value}`) : "";
  $("previewCarImage").src = currentColors()[fields.color.value] || "";

  $("previewPeriod").textContent = fields.period.value;
  $("previewPrice").textContent = formatWon(fields.price.value);
  $("previewResidual").textContent = formatWon(fields.residual.value);
  $("previewDeposit").textContent = formatWon(fields.deposit.value);
  $("previewRent").textContent = formatWon(fields.rent.value);

  const chosen = getSelectedOptions();

  $("poster").dataset.optionCount = String(chosen.length);
  $("optionsTitle").style.display = chosen.length ? "flex" : "none";
  $("optionsArea").style.display = chosen.length ? "block" : "none";

  for (let i = 1; i <= 8; i++) {
    const card = $(`optionCard${i}`);
    const img = $(`optImg${i}`);
    const title = $(`optTitle${i}`);
    const desc = $(`optDesc${i}`);
    const name = chosen[i - 1];

    if (!name) {
      card.classList.add("hidden");
      img.removeAttribute("src");
      title.textContent = "";
      desc.textContent = "";
      continue;
    }

    card.classList.remove("hidden");

    if (name.startsWith(CUSTOM_OPTION_VALUE_PREFIX)) {
      // 사용자가 직접 추가한 옵션
      const custom = customOptionsData[name] || {};
      img.src = custom.image || "";
      const displayName = custom.name || "직접 입력 옵션";
      img.alt = displayName;
      title.textContent = displayName;
      desc.textContent = custom.desc || "";
      desc.style.display = custom.desc ? "" : "none";
      continue;
    }

    const data = optionLibrary[name];

    const optionKey = `${fields.car.value}|${fields.fuel.value}|${fields.trim.value}`;
    const overrideImage = trimOptionImageOverrides?.[optionKey]?.[name];
    img.src = overrideImage || data?.image || "";
    // 옵션 key가 "모델·엔진·트림·옵션명" 형식(기아 데이터)이면 마지막 옵션명만 화면에 표시
    const displayName = name.includes("·") ? name.split("·").pop() : name;
    img.alt = displayName;
    title.textContent = displayName;

    const rawDesc = trimOptionDetailOverrides?.[optionKey]?.[name] || data?.desc || "";
    const cleanedDesc = rawDesc
      .replace(/\s*※\s*/g, "\n※ ")
      .trim();
    desc.textContent = cleanedDesc;
    desc.style.display = cleanedDesc ? "" : "none";
  }
}

function bindEvents() {
  fields.car.addEventListener("change", () => { refreshFuel(); applyPreview(); });
  fields.fuel.addEventListener("change", () => { refreshTrim(); applyPreview(); });
  fields.trim.addEventListener("change", () => { refreshTrimData(); applyPreview(); });

  [fields.date, fields.color, fields.period, fields.price, fields.residual, fields.deposit, fields.rent]
    .forEach((el) => el.addEventListener("input", applyPreview));

  $("addOptionBtn").addEventListener("click", () => {
    if (optionCount >= maxOptionCount) return;
    const currentValues = optionSelects().map((s) => s.value);
    optionCount += 1;
    renderOptionInputs(currentValues);
    applyPreview();
  });

  $("downloadBtn").addEventListener("click", async () => {
    const canvas = await html2canvas($("poster"), {
      scale: 2,
      backgroundColor: "#f8f8f8",
      useCORS: true
    });
    const link = document.createElement("a");
    link.download = `car_poster_${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

init();
