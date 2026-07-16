const trimOptionImageOverrides = {
  "쏘나타 디 엣지|가솔린 2.0|에스": {
    "빌트인 캠 2, 증강현실 내비게이션": "images/options/g20_s_builtin_cam_ar.jpg",
    "익스테리어 디자인Ⅰ": "images/options/g20_s_exterior_design1.jpg",
    "파킹 어시스트Ⅰ": "images/options/g20_s_parking_assist1.jpg"
  },
  "쏘나타 디 엣지|가솔린 2.0|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "images/options/g20_premium_builtin_cam_ar.jpg",
    "익스테리어 디자인Ⅰ": "images/options/g20_premium_exterior_design1.jpg",
    "컴포트Ⅰ": "images/options/g20_premium_comfort1.jpg",
    "컴포트Ⅱ": "images/options/g20_premium_comfort2.jpg",
    "파킹 어시스트Ⅰ": "images/options/g20_premium_parking_assist1.jpg",
    "하이패스": "images/options/g20_premium_hipass.jpg",
    "현대 스마트센스Ⅰ": "images/options/g20_premium_smart_sense1.jpg"
  },
  "쏘나타 디 엣지|렌터카 LPG|비즈니스1": {
    "익스테리어 디자인Ⅲ": "images/options/lpi_business1_exterior_design3.jpg",
    "인포테인먼트 내비Ⅲ": "images/options/lpi_business1_infotainment_navi3.jpg",
    "컴포트Ⅰ": "images/options/lpi_business1_comfort1.jpg",
    "하이패스 + ECM 룸미러": "images/options/lpi_business1_hipass_ecm.jpg",
    "현대 스마트센스Ⅱ": "images/options/lpi_business1_smart_sense2.jpg"
  },
  "쏘나타 디 엣지|렌터카 LPG|비즈니스2": {
    "빌트인 캠 2 + 증강현실 내비게이션": "images/options/lpi_business2_builtin_cam2.jpg",
    "컴포트Ⅲ": "images/options/lpi_business2_comfort3.jpg",
    "파노라마 선루프": "images/options/lpi_business2_panorama_sunroof.jpg",
    "플래티넘Ⅱ": "images/options/lpi_business2_platinum2.jpg",
    "현대 스마트센스Ⅱ": "images/options/lpi_business2_smart_sense2.jpg"
  }
};

const optionLibrary = {
    "빌트인 캠 2, 증강현실 내비게이션": { price: "450,000원", image: "images/options/sonata_builtin_cam_ar.jpg", desc: "※ 내비게이션 선택 시 가능 ※ 주행/주차 중 녹화 지원" },
    "빌트인 캠 2 + 증강현실 내비게이션": { price: "420,000원", image: "images/options/builtin_cam_ar.jpg", desc: "※ 내비게이션 선택 시 가능 ※ 주행/주차 중 녹화 지원" },
    "인포테인먼트 내비Ⅰ": { price: "1,400,000원", image: "images/options/sonata_infotainment_navi1.jpg", desc: "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능" },
    "파킹 어시스트Ⅰ": { price: "1,680,000원", image: "images/options/sonata_parking_assist1.jpg", desc: "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능" },
    "현대 스마트센스Ⅰ": { price: "450,000원", image: "images/options/sonata_smart_sense1.jpg", desc: "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조" },
    "컴포트Ⅰ": { price: "640,000원", image: "images/options/sonata_comfort1.jpg", desc: "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)" },
    "컴포트Ⅱ": { price: "670,000원", image: "images/options/sonata_comfort2.jpg", desc: "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트" },
    "익스테리어 디자인Ⅰ": { price: "640,000원", image: "images/options/sonata_exterior_design1.jpg", desc: "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)" },
    "하이패스": { price: "200,000원", image: "images/options/sonata_hipass.jpg", desc: "하이패스 시스템 적용. 내비게이션 선택 시 e hi-pass 기능 사용 가능." },
    "플래티넘Ⅰ": { price: "1,300,000원", image: "images/options/platinum1.jpg", desc: "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)" },
    "파노라마 선루프": { price: "1,190,000원", image: "images/options/panorama_sunroof.jpg", desc: "개방감을 높여주는 파노라마 선루프." },
    "BOSE 프리미엄 사운드": { price: "640,000원", image: "images/options/bose.jpg", desc: "BOSE 프리미엄 사운드 12스피커 및 외장앰프." },
    "현대 스마트센스Ⅱ": { price: "730,000원", image: "images/options/smart_sense2.jpg", desc: "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조 ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함" },
    "인포테인먼트 내비Ⅲ": { price: "1,300,000원", image: "images/options/infotainment_navi3.jpg", desc: "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능" },
    "익스테리어 디자인Ⅲ": { price: "380,000원", image: "images/options/exterior_design3.jpg", desc: "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)" },
    "하이패스 + ECM 룸미러": { price: "230,000원", image: "images/options/hipass_ecm.jpg", desc: "하이패스 시스템 및 ECM 룸미러 적용. 내비게이션 적용 시 e hi-pass 기능 사용 가능." },
    "플래티넘Ⅱ": { price: "1,170,000원", image: "images/options/platinum2.jpg", desc: "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)" },
    "컴포트Ⅲ": { price: "540,000원", image: "images/options/comfort3.jpg", desc: "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)" },
    "2.5 터보 퍼포먼스": { price: "2,000,000원", image: "images/options/turbo25_performance.jpg", desc: "스마트스트림 가솔린 2.5 터보 엔진, 8단 습식 N DCT, N 파워 쉬프트, 레브 매칭, 듀얼 트윈팁 머플러 등." },
    "파킹 어시스트Ⅱ": { price: "1,380,000원", image: "images/options/parking_assist2.jpg", desc: "후방 주차 충돌방지 보조, 헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고." },
    "컴포트Ⅳ": { price: "640,000원", image: "images/options/comfort4.jpg", desc: "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩." }
};

const dashboardData = {
  cars: {
    "쏘나타 디 엣지": {
      colors: {
        "녹턴 그레이 메탈릭": "images/cars/car_1.png",
        "어비스 블랙 펄": "images/cars/car_2.png",
        "세레니티 화이트 펄": "images/cars/car_3.png",
        "녹턴 그레이 매트": "images/cars/car_4.png",
        "에어로 실버 매트": "images/cars/car_5.png"
      },
      fuels: {
        "가솔린 1.6 터보": {
          displayFuel: "가솔린 터보 1.6",
          trims: {
            "프리미엄": { displayTrim: "가솔린 1.6 터보 프리미엄", price: "29,330,000원", options: ["인포테인먼트 내비Ⅰ", "파킹 어시스트Ⅰ", "현대 스마트센스Ⅰ", "컴포트Ⅰ", "컴포트Ⅱ", "익스테리어 디자인Ⅰ", "하이패스", "빌트인 캠 2, 증강현실 내비게이션"] },
            "에스": { displayTrim: "가솔린 1.6 터보 에스", price: "30,650,000원", options: ["파킹 어시스트Ⅰ", "익스테리어 디자인Ⅰ", "빌트인 캠 2, 증강현실 내비게이션"] },
            "익스클루시브": { displayTrim: "가솔린 1.6 터보 익스클루시브", price: "33,730,000원", options: ["플래티넘Ⅰ", "컴포트Ⅱ", "익스테리어 디자인Ⅰ", "파노라마 선루프", "빌트인 캠 2, 증강현실 내비게이션"] },
            "인스퍼레이션": { displayTrim: "가솔린 1.6 터보 인스퍼레이션", price: "36,660,000원", options: ["파노라마 선루프", "BOSE 프리미엄 사운드", "빌트인 캠 2, 증강현실 내비게이션"] }
          }
        },
        "가솔린 2.0": {
          displayFuel: "가솔린 2.0",
          trims: {
            "프리미엄": { displayTrim: "가솔린 2.0 프리미엄", price: "28,660,000원", options: ["인포테인먼트 내비Ⅰ", "파킹 어시스트Ⅰ", "현대 스마트센스Ⅰ", "컴포트Ⅰ", "컴포트Ⅱ", "익스테리어 디자인Ⅰ", "하이패스", "빌트인 캠 2, 증강현실 내비게이션"] },
            "에스": { displayTrim: "가솔린 2.0 에스", price: "29,980,000원", options: ["파킹 어시스트Ⅰ", "익스테리어 디자인Ⅰ", "빌트인 캠 2, 증강현실 내비게이션"] },
            "익스클루시브": { displayTrim: "가솔린 2.0 익스클루시브", price: "33,060,000원", options: ["플래티넘Ⅰ", "컴포트Ⅱ", "익스테리어 디자인Ⅰ", "파노라마 선루프", "빌트인 캠 2, 증강현실 내비게이션"] },
            "인스퍼레이션": { displayTrim: "가솔린 2.0 인스퍼레이션", price: "36,000,000원", options: ["파노라마 선루프", "BOSE 프리미엄 사운드", "빌트인 캠 2, 증강현실 내비게이션"] }
          }
        },
        "렌터카 LPG": {
          displayFuel: "LPI 2.0 렌터카",
          trims: {
            "비즈니스1": { displayTrim: "LPI 2.0 렌터카 비즈니스1", price: "25,600,000원", defaultResidual: "17,750,000원", defaultDeposit: "1,000,000원", defaultRent: "675,000원", options: ["현대 스마트센스Ⅱ", "인포테인먼트 내비Ⅲ", "컴포트Ⅰ", "익스테리어 디자인Ⅲ", "하이패스 + ECM 룸미러"] },
            "비즈니스2": { displayTrim: "LPI 2.0 렌터카 비즈니스2", price: "29,840,000원", defaultResidual: "17,750,000원", defaultDeposit: "1,000,000원", defaultRent: "730,000원", options: ["현대 스마트센스Ⅱ", "플래티넘Ⅱ", "컴포트Ⅲ", "파노라마 선루프", "빌트인 캠 2 + 증강현실 내비게이션"] }
          }
        }
      }
    }
  }
};

/* v22: 추가 가격표 PDF 기반 차량/트림/옵션 데이터 */
Object.assign(optionLibrary, {
  "17인치 블랙 알로이 휠": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "17인치 알로이 휠 & 타이어Ⅰ": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "17인치 알로이 휠 & 타이어Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "17인치 알로이 휠 패키지": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "18인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "19인치 알로이 휠 & 미쉐린 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "20인치 알로이 휠 & 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "20인치 휠 & 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "6인승": {
    "price": "1,040,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "7인승": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "BOSE 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "BOSE 프리미엄 사운드 패키지": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "HTRAC": {
    "price": "2,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "HTRAC, 험로주행모드": {
    "price": "2,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "내비게이션 패키지": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "내비게이션 패키지Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "동승석 8way 전동시트": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "듀얼 와이드 선루프": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "듀얼 와이드 선루프 + 루프랙": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "디자인 플러스Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "디자인 플러스Ⅱ": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "라이프 스타일": {
    "price": "390,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "미쉐린 타이어": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "베스트 셀렉션": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "베스트 셀렉션Ⅰ": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "베스트 셀렉션Ⅲ(가솔린)": {
    "price": "1,220,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "베스트 셀렉션Ⅳ(HEV)": {
    "price": "1,520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "블랙 사이드스텝": {
    "price": "390,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "블랙잉크 플러스": {
    "price": "940,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "빌트인 공기청정기": {
    "price": "520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "빌트인 캠 2 Plus": {
    "price": "650,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "빌트인 캠 2 Plus,": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "빌트인 캠 2, 증강현실 내비게이션": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "빌트인 캠(보조배터리 포함)*": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "사이드 스텝": {
    "price": "340,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "사이드스텝": {
    "price": "430,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "선루프": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "세이지 그린 인테리어 컬러": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "스마트 비전 루프": {
    "price": "1,800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "스마트 카드키": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "스마트스트림 가솔린 3.5 엔진": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "스타일": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "스타일Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "시트 컴포트 플러스": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "시트 컴포트Ⅰ": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "시트 컴포트Ⅱ": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "시트플러스": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "실내 컬러 패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "실내 컬러 패키지(베이지/오렌지 브라운)": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "알칸타라 인테리어 패키지": {
    "price": "370,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "에코패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "와이드 선루프": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "익스테리어 디자인": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "익스테리어 디자인Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "익스테리어 디자인Ⅰ(HEV)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "익스테리어 디자인Ⅱ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "인조가죽 시트 + 1열 열선시트": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "인포테인먼트 내비": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "인포테인먼트 내비(HEV)": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "적외선 무릎 워머": {
    "price": "280,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컨비니언스": {
    "price": "380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컴포트": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컴포트 초이스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컴포트Ⅰ": {
    "price": "1,060,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "컴포트Ⅱ": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "클러스터(12.3인치 컬러 LCD)": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "테크": {
    "price": "350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "투톤 컬러 루프": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파노라마 선루프": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파노라마 선루프 + 루프랙": {
    "price": "1,160,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹 어시스트": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹 어시스트 플러스": {
    "price": "1,290,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹 어시스트 플러스Ⅰ": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹어시스트": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹어시스트Ⅰ(가솔린)": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹어시스트Ⅱ(HEV)": {
    "price": "1,530,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹어시스트Ⅲ(가솔린)": {
    "price": "830,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "파킹어시스트Ⅳ(HEV)": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "프리미엄 초이스": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "플래티넘": {
    "price": "2,050,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "플래티넘Ⅰ": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "하이패스": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "헤드업디스플레이": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "현대 스마트센스": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "현대 스마트센스Ⅰ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "현대 스마트센스Ⅱ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  },
  "현대 스마트센스Ⅲ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "가격표 기준 선택 품목입니다. 상세 구성은 해당 차량 가격표 원문을 확인하세요."
  }
});

Object.assign(dashboardData.cars, {
  "아반떼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "20,620,000원",
            "options": [
              "컨비니언스",
              "하이패스",
              "현대 스마트센스",
              "17인치 알로이 휠 & 타이어Ⅰ"
            ]
          },
          "모던": {
            "displayTrim": "가솔린 1.6 모던",
            "price": "23,880,000원",
            "options": [
              "선루프",
              "파킹 어시스트 플러스",
              "익스테리어 디자인",
              "현대 스마트센스",
              "컴포트Ⅰ",
              "17인치 알로이 휠 & 타이어Ⅱ",
              "세이지 그린 인테리어 컬러"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 인스퍼레이션",
            "price": "27,560,000원",
            "options": [
              "선루프",
              "빌트인 캠(보조배터리 포함)*",
              "세이지 그린 인테리어 컬러"
            ]
          }
        }
      }
    }
  },
  "더 뉴 그랜저": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "캘리그래피": {
            "displayTrim": "가솔린 캘리그래피",
            "price": "53,100,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 블랙 잉크",
            "price": "54,000,000원",
            "options": []
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "42,450,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 익스클루시브",
            "price": "46,940,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅰ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "스마트스트림 가솔린 3.5 엔진",
              "파노라마 선루프",
              "HTRAC",
              "빌트인 캠 2 Plus",
              "스마트 카드키"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "49,330,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "53,820,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "59,990,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "60,890,000원",
            "options": [
              "스마트 카드키"
            ]
          }
        }
      }
    }
  },
  "베뉴": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "19,940,000원",
            "options": [
              "하이패스",
              "내비게이션 패키지"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 프리미엄",
            "price": "22,920,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "스타일",
              "테크"
            ]
          },
          "플럭스": {
            "displayTrim": "가솔린 1.6 플럭스",
            "price": "24,400,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "17인치 블랙 알로이 휠",
              "적외선 무릎 워머",
              "인조가죽 시트 + 1열 열선시트"
            ]
          }
        }
      }
    }
  },
  "코나 하이브리드": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "30,380,000원",
            "options": [
              "내비게이션 패키지Ⅱ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "32,200,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "스타일Ⅰ",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "34,670,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "18인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "36,630,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "37,620,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "캐스퍼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.0": {
        "displayFuel": "가솔린 1.0",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.0 스마트",
            "price": "14,930,000원",
            "options": [
              "선루프",
              "17인치 알로이 휠 패키지"
            ]
          },
          "디 에센셜": {
            "displayTrim": "가솔린 1.0 디 에센셜",
            "price": "17,710,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.0 인스퍼레이션",
            "price": "20,170,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          }
        }
      }
    }
  },
  "투싼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "34,180,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ(HEV)",
              "인포테인먼트 내비(HEV)",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "36,650,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "37,490,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "40,170,000원",
            "options": [
              "베스트 셀렉션Ⅳ(HEV)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅳ(HEV)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "40,820,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝"
            ]
          }
        }
      },
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 1.6 터보 모던",
            "price": "28,440,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ",
              "인포테인먼트 내비",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "31,120,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 1.6 터보 H-Pick",
            "price": "32,010,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "34,560,000원",
            "options": [
              "베스트 셀렉션Ⅲ(가솔린)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅲ(가솔린)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "N Line": {
            "displayTrim": "가솔린 1.6 터보 N Line",
            "price": "35,410,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝",
              "HTRAC"
            ]
          }
        }
      }
    }
  },
  "싼타페": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "41,220,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "44,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅱ",
              "20인치 휠 & 타이어"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "46,730,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      },
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "36,570,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "39,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅰ"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 2.5 터보 H-Pick",
            "price": "42,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 2.5 터보 블랙 잉크",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      }
    }
  },
  "디 올 뉴 팰리세이드": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "49,820,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "55,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "61,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus,",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          }
        }
      },
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "43,830,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "49,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus,",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "55,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션"
            ]
          }
        }
      }
    }
  }
});

/* v23: 차량별/색상별 이미지 및 트림별 옵션 상세 설명 */
const vehicleColorOverrides = {
  "아반떼|가솔린 1.6": {
    "미라지 그린": "images/cars/vehicle_images/1_6_54d5dfc8.png",
    "사이버 그레이 메탈릭": "images/cars/vehicle_images/1_6_923c93b6.png",
    "아마존 그레이 메탈릭": "images/cars/vehicle_images/1_6_5aae8303.png",
    "아틀라스 화이트": "images/cars/vehicle_images/1_6_29895f3d.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/1_6_d88f70fc.png",
    "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/1_6_a3631ecb.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_60287587.png",
    "플루이드 그레이 메탈릭": "images/cars/vehicle_images/1_6_5fd56d70.png"
  },
  "더 뉴 그랜저|가솔린": {
    "녹턴 그레이 매트": "images/cars/vehicle_images/b633fcfe.png",
    "녹턴 그레이 메탈릭": "images/cars/vehicle_images/12589a83.png",
    "바이오필릭 블루 펄": "images/cars/vehicle_images/ab29d890.png",
    "세레니티 화이트 펄 블랙잉크": "images/cars/vehicle_images/a287322b.png",
    "세레니티 화이트 펄": "images/cars/vehicle_images/403dd5d6.png",
    "아티스널 버건디 매트": "images/cars/vehicle_images/ea1bc6d0.png",
    "아티스널 버건디 펄": "images/cars/vehicle_images/3962bbb0.png",
    "어비스 블랙 펄 블랙잉크": "images/cars/vehicle_images/1f326eb2.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/1f28d41e.png",
    "에어로 실버 메탈릭": "images/cars/vehicle_images/a6c233a9.png",
    "트랜스매션 블루 매트": "images/cars/vehicle_images/5981af6c.png",
    "트랜스미션 블루 펄": "images/cars/vehicle_images/7cad0df8.png"
  },
  "더 뉴 그랜저|하이브리드": {
    "녹턴 그레이 매트": "images/cars/vehicle_images/13940076.png",
    "녹턴 그레이 메탈릭": "images/cars/vehicle_images/9cf62590.png",
    "바이오필릭 블루 펄": "images/cars/vehicle_images/481fb321.png",
    "세레니티 화이트 펄 블랙잉크": "images/cars/vehicle_images/bc46a5d6.png",
    "세레니티 화이트 펄": "images/cars/vehicle_images/6ea3acf9.png",
    "아티스널 버건디 매트": "images/cars/vehicle_images/a1c6960f.png",
    "아티스널 버건디 펄": "images/cars/vehicle_images/16a8f54c.png",
    "어비스 블랙 펄 블랙잉크": "images/cars/vehicle_images/550244b5.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/a9b69a31.png",
    "에어로 실버 메탈릭": "images/cars/vehicle_images/242a3c43.png",
    "트랜스매션 블루 매트": "images/cars/vehicle_images/769f4e26.png",
    "트랜스미션 블루 펄": "images/cars/vehicle_images/ed444b42.png"
  },
  "베뉴|가솔린 1.6": {
    "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_3dce2a39.png",
    "미라지 그린": "images/cars/vehicle_images/1_6_ecbcce3c.png",
    "데님 블루 펄(초크 화이트 메탈릭)": "images/cars/vehicle_images/1_6_383fcf83.png",
    "데님 블루 펄": "images/cars/vehicle_images/1_6_41ef3379.png",
    "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_73968367.png",
    "사이버 그레이 메탈릭": "images/cars/vehicle_images/1_6_9cafe4c6.png",
    "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_74112707.png",
    "아틀라스 화이트": "images/cars/vehicle_images/1_6_8ed41ae7.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/1_6_65fd4a77.png",
    "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_fe442019.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_8f2905ab.png",
    "어비스 블랙 펄(초크 화이트 메탈릭)": "images/cars/vehicle_images/1_6_6c7cada8.png"
  },
  "코나 하이브리드|하이브리드": {
    "네오테릭 옐로우(어비스 블랙 펄)": "images/cars/vehicle_images/acab8f25.png",
    "네오테릭 옐로우": "images/cars/vehicle_images/e852da53.png",
    "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/ce8a374a.png",
    "미라지 그린": "images/cars/vehicle_images/aebe7902.png",
    "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/2eb1b202.png",
    "사이버 그레이 메탈릭": "images/cars/vehicle_images/7ba587ae.png",
    "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/10c4ece9.png",
    "아틀라스 화이트": "images/cars/vehicle_images/a14213f7.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/4a44a5d5.png",
    "얼티메이트 레드 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/b0fe29ac.png",
    "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/d2fc5660.png",
    "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/631310a8.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/61517c21.png"
  },
  "코나|가솔린": {
    "네오테릭 옐로우(어비스 블랙 펄)": "images/cars/vehicle_images/811670d3.png",
    "네오테릭 옐로우": "images/cars/vehicle_images/4677896c.png",
    "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/b12366e9.png",
    "미라지 그린": "images/cars/vehicle_images/8b7e6bd7.png",
    "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/986ee8d3.png",
    "사이버 그레이 메탈릭": "images/cars/vehicle_images/4b828471.png",
    "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/b6e82f0d.png",
    "아틀라스 화이트": "images/cars/vehicle_images/f313051c.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/8eca9624.png",
    "얼티메이트 레드 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/29f2870e.png",
    "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/67a64b60.png",
    "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/e00e158d.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/f26f70d1.png"
  },
  "캐스퍼|가솔린 1.0": {
    "비자림 카키 매트": "images/cars/vehicle_images/1_0_60fe4cab.png",
    "시에나 오렌지 메탈릭": "images/cars/vehicle_images/1_0_ba6c8bfd.png",
    "아틀라스 화이트": "images/cars/vehicle_images/1_0_7a2f7f1f.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/1_0_8e006415.png",
    "언블리치드 아이보리": "images/cars/vehicle_images/1_0_eafd1e98.png",
    "톰보이 카키": "images/cars/vehicle_images/1_0_963b5553.png"
  },
  "투싼|가솔린 1.6 터보": {
    "쉬머링 실버 메탈릭": "images/cars/vehicle_images/1_6_6d790d54.png",
    "아마존 그레이 메탈릭": "images/cars/vehicle_images/1_6_fc6b8eb5.png",
    "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/1_6_91f6878a.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_53992137.png",
    "오션 인디고 펄": "images/cars/vehicle_images/1_6_7087e5a5.png",
    "크리미 화이트 펄(블랙 익스테리어)": "images/cars/vehicle_images/1_6_535346f9.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/1_6_5a6663f0.png",
    "파인 그린 매트": "images/cars/vehicle_images/1_6_ca045998.png",
    "팬텀 블랙 펄(블랙 익스테리어)": "images/cars/vehicle_images/1_6_4062e72b.png",
    "팬텀 블랙 펄": "images/cars/vehicle_images/1_6_9b0ea4a0.png"
  },
  "투싼|하이브리드": {
    "쉬머링 실버 메탈릭": "images/cars/vehicle_images/62b061b8.png",
    "아마존 그레이 메탈릭": "images/cars/vehicle_images/e9c095bb.png",
    "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/7705fa3b.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/dab7a01a.png",
    "오션 인디고 펄": "images/cars/vehicle_images/cf5b5ce3.png",
    "크리미 화이트 펄(블랙 익스테리어)": "images/cars/vehicle_images/38e9bc53.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/43037729.png",
    "파인 그린 매트": "images/cars/vehicle_images/b19fbe22.png",
    "팬텀 블랙 펄(블랙 익스테리어)": "images/cars/vehicle_images/60b94a38.png",
    "팬텀 블랙 펄": "images/cars/vehicle_images/1e441345.png"
  },
  "싼타페|가솔린 2.5 터보": {
    "사이버 세이지 펄": "images/cars/vehicle_images/2_5_588fd0cb.png",
    "어비스 블랙펄(블랙잉크)": "images/cars/vehicle_images/2_5_c1d44732.png",
    "어비스 블랙펄": "images/cars/vehicle_images/2_5_6e3c65fd.png",
    "얼씨 브래스 메탈릭 매트": "images/cars/vehicle_images/2_5_7cca7595.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/2_5_945f8fe1.png",
    "오카도 그린 펄": "images/cars/vehicle_images/2_5_1449a517.png",
    "크리미 화이트 매트(블랙잉크)": "images/cars/vehicle_images/2_5_72e24683.png",
    "크리미 화이트 펄(블랙잉크)": "images/cars/vehicle_images/2_5_1897a400.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/2_5_04395e43.png",
    "페블 블루 펄": "images/cars/vehicle_images/2_5_3bf5b56a.png"
  },
  "싼타페|하이브리드": {
    "사이버 세이지 펄": "images/cars/vehicle_images/d3050d1e.png",
    "어비스 블랙 펄(블랙잉크)": "images/cars/vehicle_images/8058549c.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/f87c42b2.png",
    "얼씨 브래스 메탈릭 매트": "images/cars/vehicle_images/37a91270.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/8cd84ed0.png",
    "오카도 그린 펄": "images/cars/vehicle_images/ae9b6547.png",
    "크리미 화이트 매트(블랙잉크)": "images/cars/vehicle_images/d7736292.png",
    "크리미 화이트 펄(블랙잉크)": "images/cars/vehicle_images/4cf20fbc.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/02303380.png",
    "페블 블루 펄": "images/cars/vehicle_images/b95b703a.png"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보": {
    "갤럭시 마룬 펄": "images/cars/vehicle_images/2_5_b38459f9.png",
    "로버스트 에메랄드 펄": "images/cars/vehicle_images/2_5_6458e180.png",
    "쉬머링 실버 메탈릭": "images/cars/vehicle_images/2_5_a1835602.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/2_5_ffaecb58.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/2_5_8fa5fa49.png",
    "캐스트 아이언 브라운 펄": "images/cars/vehicle_images/2_5_23ccb85a.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/2_5_ba244718.png",
    "클래지 블루 펄": "images/cars/vehicle_images/2_5_72d5e3a1.png"
  },
  "디 올 뉴 팰리세이드|하이브리드": {
    "갤럭시 마룬 펄": "images/cars/vehicle_images/30b1f237.png",
    "로버스트 에메랄드 펄": "images/cars/vehicle_images/55ff0ce5.png",
    "쉬머링 실버 메탈릭": "images/cars/vehicle_images/f73984eb.png",
    "어비스 블랙 펄": "images/cars/vehicle_images/04fdd5f0.png",
    "에코트로닉 그레이 펄": "images/cars/vehicle_images/5ef61bd1.png",
    "캐스트 아이언 브라운 펄": "images/cars/vehicle_images/d483d044.png",
    "크리미 화이트 펄": "images/cars/vehicle_images/f84f3efe.png",
    "클래지 블루 펄": "images/cars/vehicle_images/d57203fb.png"
  }
};
Object.entries(vehicleColorOverrides).forEach(([key, colors]) => {
  const [carName, engineName] = key.split('|');
  if (dashboardData.cars?.[carName]?.fuels?.[engineName]) {
    dashboardData.cars[carName].fuels[engineName].colors = colors;
    dashboardData.cars[carName].colors = dashboardData.cars[carName].colors || colors;
  }
});

const trimOptionDetailOverrides = {
  "아반떼|가솔린 1.6|스마트": {
    "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함) 인포테인먼트 내비 10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
    "하이패스": "에는 장애인 통행료 자동 할인 기능이 없음 ※ 버튼 시동이 포함된 스마트 키는 원격 시동 버튼이 포함될 수 있음 ※ 주변 환경 및 주행 조건에 따라 기능이 원활히 작동하지 않을 수 있음 세부 사항은 취급 설명서 참조 ※ 상기 사양구성은 트림, 파워트레인 및 선택 사양에 따라 다르게 적용됨 ※ 본 가격표 상의 품목(사양, 컬러 등) 및 가격은 차량 성능 개선이나 관련 법규, 당사 사정에 따라 예고 없이 변경될 수 있음",
    "현대 스마트센스": "’ 동시 적용 시 포함 ※ 연료탱크(봄베) 충전가능 용량 53L(85% 충전 기준) ※ 컴포트 II 선택 시, LPi는 연료 실린더로 인해 2열 암레스트(컵홀더 포함), 2열 6:4 폴딩 적용 불가능 ※ 서라운드 뷰 모니터에는 리모트 360도 뷰(내 차 주변 영상)가 포함될 수 있음 ※ 고속도로 주행 보조 : 고속도로 및 자동차 전용도로 대응 ※ 주행시간이 배터리를 충전하기에 충분하지 않거나 배터리의 노후화에 따라 설정한 시간만큼 빌트인 캠의 주차 녹화가 작동되지 않을 수 있음 ※",
    "17인치 알로이 휠 & 타이어Ⅰ": "(15인치 → 17인치) Ⅱ 17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치)"
  },
  "아반떼|가솔린 1.6|모던": {
    "선루프": "선루프 파킹 어시스트 플러스 파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등 17인치 알로이 휠 & 타이어 Ⅰ",
    "현대 스마트센스": "’ 동시 적용 시 포함 ※ 연료탱크(봄베) 충전가능 용량 53L(85% 충전 기준) ※ 컴포트 II 선택 시, LPi는 연료 실린더로 인해 2열 암레스트(컵홀더 포함), 2열 6:4 폴딩 적용 불가능 ※ 서라운드 뷰 모니터에는 리모트 360도 뷰(내 차 주변 영상)가 포함될 수 있음 ※ 고속도로 주행 보조 : 고속도로 및 자동차 전용도로 대응 ※ 주행시간이 배터리를 충전하기에 충분하지 않거나 배터리의 노후화에 따라 설정한 시간만큼 빌트인 캠의 주차 녹화가 작동되지 않을 수 있음 ※",
    "컴포트Ⅰ": "1,060,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "17인치 알로이 휠 & 타이어Ⅱ": "(16인치 → 17인치)",
    "세이지 그린 인테리어 컬러": "150,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "선루프": "선루프 파킹 어시스트 플러스 파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "빌트인 캠(보조배터리 포함)*": "690,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "세이지 그린 인테리어 컬러": "150,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트 컴포트 플러스": "1,500,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "스마트 비전 루프": "1,800,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|가솔린|블랙 잉크": {},
  "더 뉴 그랜저|가솔린|프리미엄": {
    "현대 스마트센스Ⅰ": "1,400,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트": "1,700,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "프리미엄 초이스": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|가솔린|익스클루시브": {
    "플래티넘": "2,050,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "현대 스마트센스Ⅱ": "1,400,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트 컴포트Ⅰ": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드 패키지": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "20인치 알로이 휠 & 타이어": "250,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "스마트스트림 가솔린 3.5 엔진": "2,470,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "HTRAC": "2,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2 Plus": "는 음성 녹음 지원 및 주행 중(정차 시 포함) 영상 저장 및 주차 중 20시간 녹화 가능 ※ 주행시간이 배터리를 충전하기에 충분하지 않거나 배터리의 노후화에 따라 설정한 시간만큼 빌트인 캠의 주차녹화가 작동되지 않을 수 있음 ※ 안전 하차 보조 적용 시 세이프티 언락 포함 ※ 고속도로 주행 보조 : 고속도로 및 자동차 전용도로 대응 ※ 도어 글라스 통합 컨트롤 : 터널 진입 시, 공기청정모드 작동 시 자동 창문 닫힘, 스마트 키를 통한 원격 창문 닫힘 기능 제공 ※ 원격 스마트 주차 보조는 스마트 키 및 디지털 키 2를 활용하여 전진 및 후진 가능 ※ 가죽 및 나파 가죽 사양(시트, 가죽 감싸기 등)은 부분적으로 인조가죽 및 직물 등 기타 소재가 적용되어 있음 ※ 리얼 알루미늄 소재 내장재는 캘리그래피 내장 블랙 모노톤 및 블랙 잉크 사양에 적용(그 외 캘리그래피 내장은 리얼 우드 소재 적용) ※ 캘리그래피 버건디 원톤 내장에 필라 트림/선바이저에는 럭셔리 스웨이드 내장재 적용 ※",
    "스마트 카드키": "150,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|하이브리드|프리미엄": {
    "현대 스마트센스Ⅰ": "1,400,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트": "1,700,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "프리미엄 초이스": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|하이브리드|익스클루시브": {
    "플래티넘": "2,050,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "현대 스마트센스Ⅱ": "1,400,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트 컴포트Ⅱ": "1,850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드 패키지": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "20인치 알로이 휠 & 타이어": "250,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2 Plus": "는 음성 녹음 지원 및 주행 중(정차 시 포함) 영상 저장 및 주차 중 20시간 녹화 가능 ※ 주행시간이 배터리를 충전하기에 충분하지 않거나 배터리의 노후화에 따라 설정한 시간만큼 빌트인 캠의 주차녹화가 작동되지 않을 수 있음 ※ 안전 하차 보조 적용 시 세이프티 언락 포함 ※ 고속도로 주행 보조 : 고속도로 및 자동차 전용도로 대응 ※ 도어 글라스 통합 컨트롤 : 터널 진입 시, 공기청정모드 작동 시 자동 창문 닫힘, 스마트 키를 통한 원격 창문 닫힘 기능 제공 ※ 원격 스마트 주차 보조는 스마트 키 및 디지털 키 2를 활용하여 전진 및 후진 가능 ※ 가죽 및 나파 가죽 사양(시트, 가죽 감싸기 등)은 부분적으로 인조가죽 및 직물 등 기타 소재가 적용되어 있음 ※ 리얼 알루미늄 소재 내장재는 캘리그래피 내장 블랙 모노톤 및 블랙 잉크 사양에 적용(그 외 캘리그래피 내장은 리얼 우드 소재 적용) ※ 캘리그래피 버건디 원톤 내장에 필라 트림/선바이저에는 럭셔리 스웨이드 내장재 적용 ※"
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트 컴포트 플러스": "1,500,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "스마트 비전 루프": "1,800,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "더 뉴 그랜저|하이브리드|블랙 잉크": {
    "스마트 카드키": "150,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "베뉴|가솔린 1.6|스마트": {
    "하이패스": "에는 장애인 통행료 자동할인 기능이 없음 ※ 첨단 운전자 보조 시스템은 운전자의 조작을 보조하는 기능이므로, 항상 주의를 기울여 운전 필요 ※ 주변 환경 및 주행 조건에 따라 기능이 원활히 작동하지 않을 수 있음 세부 사항은 취급 설명서 참조 ※ 상기 사양구성은 트림, 파워트레인 및 선택 사양에 따라 다르게 적용됨 ※ FLUX 트림에 적용되는 C필러 뱃지는 장착되지 않고 지급품과 함께 별도 제공 ※ FLUX 트림 C필러 뱃지는 원톤 루프는 실버 컬러 적용,",
    "내비게이션 패키지": "500,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "베뉴|가솔린 1.6|프리미엄": {
    "선루프": "및 투톤 루프 컬러 동시 적용 불가 ※",
    "투톤 컬러 루프": "는 루프 컬러와 동일한 컬러 제공 ※ 아틀라스 화이트 및 아틀라스 화이트(투톤) 외장 컬러 선택 시, 컬러 대금 추가(100,000원)",
    "스타일": "550,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "테크": "350,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "베뉴|가솔린 1.6|플럭스": {
    "선루프": "및 투톤 루프 컬러 동시 적용 불가 ※",
    "투톤 컬러 루프": "는 루프 컬러와 동일한 컬러 제공 ※ 아틀라스 화이트 및 아틀라스 화이트(투톤) 외장 컬러 선택 시, 컬러 대금 추가(100,000원)",
    "17인치 블랙 알로이 휠": "상품은 17인치 휠 적용시에만 선택 가능합니다. ※ 프리미엄 스피커는 차량 도어 4곳에 적용되는 상품입니다. ※ 프리미엄 스피커는 6스피커 적용 시에만 선택 가능합니다. ※",
    "적외선 무릎 워머": "상품은 수동식 텔레스코픽 스티어링 휠 적용 시에만 선택 가능합니다. ※ 적외선 무릎워머 상품은 사용자의 자세와 체형에 따라 효과가 상이할 수 있습니다. ※ 적외선 무릎워머 상품의 발열부는 고온으로 신체 접촉 시 화상의 위험이 있으므로 닿지 않도록 주의 바랍니다. ※ 적외선 무릎워머 상품은 실내온도에 따라 발열 온도가 조절되며, 30분 연속 작동 됩니다. ※ C to USB-A, A to USB-C 변환 젠더는 현대자동차 전용 개발 제품으로 타 제품 및 타 자동차 브랜드에서는 작동을 보장하지 않습니다. ※ 현대샵(shop.hyundai.com) 현대브랜드관에서 다양한 애프터마켓 상품 구매가 가능합니다. 애프터마켓 전용 상품 플로어 매트 러기지 프로텍션 매트 프리미엄 스피커(케블라콘)",
    "인조가죽 시트 + 1열 열선시트": "250,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "코나 하이브리드|하이브리드|모던": {
    "내비게이션 패키지Ⅱ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프) 현대 스마트센스 Ⅰ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)"
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다. 내비게이션 패키지 Ⅱ 12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※",
    "현대 스마트센스Ⅲ": "+ 클러스터(12.3인치 컬러 LCD) ※",
    "클러스터(12.3인치 컬러 LCD)": "※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다. 내비게이션 패키지 Ⅱ 12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※",
    "스타일Ⅰ": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤),",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다. 내비게이션 패키지 Ⅱ 12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※",
    "현대 스마트센스Ⅲ": "+ 클러스터(12.3인치 컬러 LCD) ※",
    "클러스터(12.3인치 컬러 LCD)": "※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다. 내비게이션 패키지 Ⅱ 12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트 스타일 Ⅰ Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤),",
    "18인치 알로이 휠 & 타이어": ", 앰비언트 무드램프 파킹어시스트 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나 하이브리드|하이브리드|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "시스템(8스피커) : 센터 스피커(1개), 프런트 트위터 스피커(2개), 프런트 도어 스피커(2개), 리어 도어 스피커(2개), 우퍼 스피커(1개), 외장앰프 ※ 블루투스 핸즈프리 : 오디오 스트리밍 기능 포함 ■ 블루링크 ※ 원격제어, 안전 보안, 차량관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 원격 시동 및 원격 공조 기능은 버튼시동 & 스마트키 및 오토 에어컨 사양 적용 시에만 제공 ※ 블루링크 원격 공조 기능은 듀얼 풀오토 에어컨 사양 적용 시 사용 가능 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2 터치, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스(길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨(기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의",
    "투톤 컬러 루프": "적용 불가 * 상기 컬러는 인쇄된 것이므로 실제 차량의 컬러와는 다소 차이가 있을 수 있습니다. 2027 KONA",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버 2027 코나 하이브리드 ■ 12.3인치 내비게이션 ※ 고해상도 12.3인치 터치스크린, 고화질 DMB 수신 가능, 라디오, MP3재생, 서버 기반 길 안내, 3D 지도, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트 시 자동 다운로드 및 설치되며, 블루링크 가입 차량에 한하여 제공 (자세한 방법은 취급 설명서 참조) ※ 지상파 DMB는 320X240(표준 화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) - 디스플레이 터치 또는 음성을 통한 제어 가능 - 작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 내비게이션 지도 업데이트 서비스는 차량 단종 후 8년까지 보장되며, 이후 당사 사정에 의해 만료될 수 있음 ■ 인포테인먼트 ※"
  },
  "코나 하이브리드|하이브리드|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "시스템(8스피커) : 센터 스피커(1개), 프런트 트위터 스피커(2개), 프런트 도어 스피커(2개), 리어 도어 스피커(2개), 우퍼 스피커(1개), 외장앰프 ※ 블루투스 핸즈프리 : 오디오 스트리밍 기능 포함 ■ 블루링크 ※ 원격제어, 안전 보안, 차량관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 원격 시동 및 원격 공조 기능은 버튼시동 & 스마트키 및 오토 에어컨 사양 적용 시에만 제공 ※ 블루링크 원격 공조 기능은 듀얼 풀오토 에어컨 사양 적용 시 사용 가능 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2 터치, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스(길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨(기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의",
    "투톤 컬러 루프": "적용 불가 * 상기 컬러는 인쇄된 것이므로 실제 차량의 컬러와는 다소 차이가 있을 수 있습니다. 2027 KONA",
    "와이드 선루프": "590,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "하이패스": "추가 선택 시, e hi-pass 기능 사용 가능",
    "알칸타라 인테리어 패키지": "는 N Line 전용 상품입니다. ※ N Performance parts 선택 시 남양, 칠곡, 영남 출고센터에서만 출고가 가능합니다. EXTERIOR COLORS YY0 네오테릭 옐로우 YYY 어비스 블랙 펄 A2B R20 얼티메이트 레드 메탈릭 R2P PE0 에코트로닉 그레이 펄 PE2 C50 사이버 그레이 메탈릭 C5G SA0 아틀라스 화이트 SAW RR0 미라지 그린 RRR 애프터마켓 전용 상품 ※ 현대샵(shop.hyundai.com) 현대브랜드관에서 다양한 애프터마켓 상품 구매가 가능합니다. 멀티 커튼(전면/후면/1열/2열) 캠핑 트렁크 라이트 체어 캠핑 & 피크닉 ※ C to USB-A 변환 젠더는 현대자동차 전용 개발 제품으로 타 제품 및 타 자동차 브랜드에서는 작동을 보장하지 않습니다. ※ 스마트 카드키는 자외선 차단 기능이 있거나 자성이 강한 휴대폰 케이스(ex. 맥세이프)를 사용하면 정상적으로 동작하지 않을 수도 있습니다. ※ 차량에 한 번 등록된 카드키는 최초"
  },
  "캐스퍼|가솔린 1.0|스마트": {
    "선루프": "400,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "17인치 알로이 휠 패키지": "950,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "캐스퍼|가솔린 1.0|디 에센셜": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능, TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※"
  },
  "캐스퍼|가솔린 1.0|인스퍼레이션": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능, TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※"
  },
  "투싼|하이브리드|모던": {
    "파노라마 선루프 + 루프랙": "1,160,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅰ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅱ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON /// RECREATIONAL VEHICLE 2026 투싼 라이프스타일 [39만원] 빌트인 공기청정기 [40만원]",
    "인포테인먼트 내비(HEV)": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스 컴포트 Ⅰ 1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함 파킹어시스트 Ⅱ(HEV) 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|하이브리드|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅱ": "690,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "컴포트Ⅱ": "740,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함 파킹어시스트 Ⅱ(HEV) 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프 익스테리어 디자인 Ⅰ(HEV) Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅱ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON"
  },
  "투싼|하이브리드|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅱ": "690,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프 익스테리어 디자인 Ⅰ(HEV) Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅱ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON"
  },
  "투싼|하이브리드|인스퍼레이션": {
    "베스트 셀렉션Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹어시스트Ⅳ(HEV)": "+ BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "BOSE 프리미엄 사운드": "(8스피커) : 센터 스피커(1개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 서브우퍼(1개), 트위터 스피커(2개), 외장앰프 ■ 블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스(길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨(기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라 웨이브, 왓챠를 시작으로 다양한 OTT & 비디오",
    "19인치 알로이 휠 & 미쉐린 타이어": "250,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "투싼|하이브리드|N Line": {
    "미쉐린 타이어": "200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "라이프 스타일": "390,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "사이드 스텝": "어드벤처 라이트 체어 캠핑 트렁크 ※ C to USB-A 변환 젠더는 현대자동차 전용 개발 제품으로 타 제품 및 타 자동차 브랜드에서는 작동을 보장하지 않습니다. ※ 스마트 카드키는 자외선 차단 기능이 있거나 자성이 강한 휴대폰 케이스(ex. 맥세이프)를 사용하면 정상적으로 동작하지 않을 수도 있습니다. ※ 차량에 한 번 등록된 카드키는 최초 등록된 차량에만 해지 및 재등록이 가능하며, 다른 차량에 재등록 할 수 없습니다. ※ LED 테일게이트램프(터치방식)는 테일게이트 개폐량에 따라 눈부심이 발생합니다. ※ LED 도어스팟 램프는 1열에만 적용됩니다. ※ 빌트인 공기청정기 전용 에어필터의 권장 사용기간은 6개월이며(하루 2시간 사용 기준) 전용 에어필터 및 기타 애프터마켓 파츠는 현대샵(Shop.Hyundai.com) 현대브랜드관을 통하여 구매 가능합니다. ※ 프로텍션 매트 패키지Ⅰ& 프로텍션 매트 패키지Ⅱ는 하이브리드 차량에 적용 불가합니다. ※ 프로텍션 매트 패키지Ⅰ의 러기지 매트는 서브 우퍼 스피커 적용 기준으로 개발되어,",
    "블랙 사이드스텝": "390,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "투싼|가솔린 1.6 터보|모던": {
    "파노라마 선루프 + 루프랙": "1,160,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅰ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅰ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON /// RECREATIONAL VEHICLE 2026 투싼 라이프스타일 [39만원] 빌트인 공기청정기 [40만원]",
    "인포테인먼트 내비": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함), 레인센서, 하이패스 컴포트 Ⅰ 1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|가솔린 1.6 터보|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅱ": "690,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "컴포트Ⅱ": "740,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프 익스테리어 디자인 Ⅰ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅰ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON ///"
  },
  "투싼|가솔린 1.6 터보|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "익스테리어 디자인Ⅱ": "690,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프 익스테리어 디자인 Ⅰ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어 H Genuine Accessories 라이프스타일 LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅰ 선택 시 구매 가능 구매 가능 ※ 블루링크 스토어는 차량 인도 후, 필요에 따라 디지털 사양을 구매할 수 있는 온라인 스토어입니다. ※ 각 사양별 상세사항은 블루링크 스토어를 참고해주세요. ※ 신규 디스플레이 테마는 블루링크 스토어에서 확인 바랍니다. 포켓몬스터 디스플레이 테마(피카츄 전광석화, 메타몽 월드) 블루링크 스토어 스토어 바로가기 15 2026 TUCSON ///"
  },
  "투싼|가솔린 1.6 터보|인스퍼레이션": {
    "베스트 셀렉션Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파노라마 선루프": "1,090,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹어시스트Ⅲ(가솔린)": "+ BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "BOSE 프리미엄 사운드": "(8스피커) : 센터 스피커(1개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 서브우퍼(1개), 트위터 스피커(2개), 외장앰프 ■ 블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 원격 공조 기능은 버튼시동 & 스마트키 및 오토 에어컨 사양 적용 시에만 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스(길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨(기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과",
    "19인치 알로이 휠 & 미쉐린 타이어": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "투싼|가솔린 1.6 터보|N Line": {
    "미쉐린 타이어": "200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "라이프 스타일": "390,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "사이드 스텝": "어드벤처 라이트 체어 캠핑 트렁크 ※ C to USB-A 변환 젠더는 현대자동차 전용 개발 제품으로 타 제품 및 타 자동차 브랜드에서는 작동을 보장하지 않습니다. ※ 스마트 카드키는 자외선 차단 기능이 있거나 자성이 강한 휴대폰 케이스(ex. 맥세이프)를 사용하면 정상적으로 동작하지 않을 수도 있습니다. ※ 차량에 한 번 등록된 카드키는 최초 등록된 차량에만 해지 및 재등록이 가능하며, 다른 차량에 재등록 할 수 없습니다. ※ LED 테일게이트램프(터치방식)는 테일게이트 개폐량에 따라 눈부심이 발생합니다. ※ LED 도어스팟 램프는 1열에만 적용됩니다. ※ 빌트인 공기청정기 전용 에어필터의 권장 사용기간은 6개월이며(하루 2시간 사용 기준) 전용 에어필터 및 기타 애프터마켓 파츠는 현대샵(Shop.Hyundai.com) 현대브랜드관을 통하여 구매 가능합니다. ※ 프로텍션 매트 패키지Ⅰ& 프로텍션 매트 패키지Ⅱ는 하이브리드 차량에 적용 불가합니다. ※ 프로텍션 매트 패키지Ⅰ의 러기지 매트는 서브 우퍼 스피커 적용 기준으로 개발되어,",
    "블랙 사이드스텝": "390,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "HTRAC": "1,980,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "싼타페|하이브리드|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "990,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "동승석 8way 전동시트": "200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "헤드업디스플레이": "590,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트 플러스Ⅰ": ", 플래티넘Ⅰ” 개별 선택 불가 Prestige (프레스티지) 46,320,000 42,109,091(4,210,909) 싼타페 하이브리드 (2WD) 프레스티지 기본 품목 및 • 파워트레인/성능 : HTRAC, 험로주행모드",
    "플래티넘Ⅰ": "” 개별 선택 불가 Prestige (프레스티지) 46,320,000 42,109,091(4,210,909) 싼타페 하이브리드 (2WD) 프레스티지 기본 품목 및 • 파워트레인/성능 : HTRAC, 험로주행모드",
    "베스트 셀렉션Ⅰ": "선택 시, “파킹 어시스트 플러스Ⅰ,"
  },
  "싼타페|하이브리드|프레스티지": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "헤드업디스플레이": "590,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트플러스": "740,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트 플러스Ⅰ": ", 플래티넘Ⅰ” 개별 선택 불가 Prestige (프레스티지) 46,320,000 42,109,091(4,210,909) 싼타페 하이브리드 (2WD) 프레스티지 기본 품목 및 • 파워트레인/성능 : HTRAC, 험로주행모드",
    "디자인 플러스Ⅱ": "850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "20인치 휠 & 타이어": "490,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "싼타페|하이브리드|H-Pick": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라",
    "20인치 휠 & 타이어": "490,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "6인승": "/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_6인승/1,900kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.4km/ℓ(도심 : 8.2km/ℓ, 고속도로 : 11.3km/ℓ) l CO₂ 배출량 : 181g/km l 배기량 : 2,497cc l 공차중량 : 1,955kg_",
    "7인승": "/1,900kg_6인승/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_",
    "라이프 스타일": "패키지는 동시 선택이 불가합니다. ※"
  },
  "싼타페|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라"
  },
  "싼타페|하이브리드|블랙 잉크": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라",
    "블랙잉크 플러스": "패키지 [94만원] 프로텍션 매트 패키지Ⅱ [15만원] 러기지 패키지 [12만원] 플로어 매트 1, 2열 리버서블 러기지 매트 리버서블 러기지 매트 메탈 트랜스버스 트림 플로어 매트 1, 2열 LED 도어스팟 램프 러기지 네트, 러기지 스크린 LED 테일게이트 램프 차량 보호 필름Ⅰ [41만원] (프론트 범퍼 사이드 외) LED 테일게이트 램프 빌트인 공기청정기 2.0 [53만원] 리버서블 러기지 매트 차량 보호 필름Ⅱ [40만원] (도어 중앙부, 도어 엣지 외) 블랙잉크 전용 도어스팟램프 사이드스텝(블랙) [45만원] 블랙 사이드 스텝 사이드 스텝 [40만원] 메탈 트랜스버스 트림 신차 옵션 상품 EXTERIOR COLORS 어비스 블랙 펄 A2B 에코트로닉 그레이 펄 PE2 크리미 화이트 펄 WW2 사이버 세이지 펄 RS2 * 상기 컬러는 인쇄된 것이므로 실제 차량의 컬러와는 다소 차이가 있을 수 있습니다. 크리미 화이트 매트 ㅣ 무광 컬러 WWM 얼씨 브래스 매트 ㅣ 무광 컬러 YBM 현대브랜드관 이동 모바일 페이지 이동 RECREATIONAL VEHICLE /// 2026 SANTA FE 12 2026 SANTA FE 루프탑 텐트(아이캠퍼) ※ 애프터마켓 : 현대샵(Shop.Hyundai.com) 현대 브랜드관에서 구매 가능하며 상품",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "6인승": "/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_6인승/1,900kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.4km/ℓ(도심 : 8.2km/ℓ, 고속도로 : 11.3km/ℓ) l CO₂ 배출량 : 181g/km l 배기량 : 2,497cc l 공차중량 : 1,955kg_",
    "7인승": "/1,900kg_6인승/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_",
    "라이프 스타일": "패키지는 동시 선택이 불가합니다. ※"
  },
  "싼타페|가솔린 2.5 터보|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "990,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "동승석 8way 전동시트": "200,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "헤드업디스플레이": "590,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트 플러스Ⅰ": "1,190,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "플래티넘Ⅰ": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "베스트 셀렉션Ⅰ": "1,500,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "싼타페|가솔린 2.5 터보|프레스티지": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "헤드업디스플레이": "590,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "시트플러스": "740,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "파킹 어시스트 플러스Ⅰ": "1,190,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "디자인 플러스Ⅰ": "1,350,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요."
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라",
    "20인치 휠 & 타이어": "490,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "HTRAC, 험로주행모드": "2,230,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "6인승": "/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_6인승/1,900kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.4km/ℓ(도심 : 8.2km/ℓ, 고속도로 : 11.3km/ℓ) l CO₂ 배출량 : 181g/km l 배기량 : 2,497cc l 공차중량 : 1,955kg_",
    "7인승": "/1,900kg_6인승/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_",
    "라이프 스타일": "패키지는 동시 선택이 불가합니다. ※"
  },
  "싼타페|가솔린 2.5 터보|캘리그래피": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라"
  },
  "싼타페|가솔린 2.5 터보|블랙 잉크": {
    "듀얼 와이드 선루프": "890,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "BOSE 프리미엄 사운드": "(12스피커) : 센터 스피커(1개), 미드레인지 스피커(2개), 서라운드 스피커(2개), 프론트 도어 스피커(2개), 리어 도어 스피커(2개), 트위터(2개), 서브 우퍼(1개), 외장앰프 ■블루링크 ※ 원격 제어, 안전 보안, 차량 관리, 길 안내, 내비게이션 무선 업데이트 서비스 제공 ※ 차량 구매 후 블루링크 최초 가입 시 5년 무료 제공(라이트 서비스 추가 5년 무료 제공) ※ 라이트 서비스 기간에도 무선 소프트웨어 업데이트(OTA) 사용이 가능하며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 특정 기능(디지털 키 2, 인카페이먼트, 무선 소프트웨어 업데이트(OTA), 내비게이션 무선 업데이트 등)은 블루링크 가입 시에만 제공되며, 제공 가능한 기능은 차종별로 상이할 수 있음 ※ 12.3인치 디스플레이 오디오에 제공되는 블루링크에는 일부 서비스 (길 안내, 음성인식, 비디오 스트리밍 서비스 등)가 제공되지 않음 ※ 무료 제공 기간 종료 시 고객 동의를 거쳐 유료로 전환됨 (기본 : 월 11,000원, 1년 약정 : 월 5,500원) ※ 문의 : 블루링크 카카오톡 고객 센터(카카오톡 검색 창에서 ‘블루링크’ 입력 후 친구 추가) ■ 블루링크 스트리밍 서비스 ※ 차량 내에서 지니뮤직, 멜론, 팟빵과 같은 오디오 컨텐츠 뿐만 아니라",
    "블랙잉크 플러스": "패키지 [94만원] 프로텍션 매트 패키지Ⅱ [15만원] 러기지 패키지 [12만원] 플로어 매트 1, 2열 리버서블 러기지 매트 리버서블 러기지 매트 메탈 트랜스버스 트림 플로어 매트 1, 2열 LED 도어스팟 램프 러기지 네트, 러기지 스크린 LED 테일게이트 램프 차량 보호 필름Ⅰ [41만원] (프론트 범퍼 사이드 외) LED 테일게이트 램프 빌트인 공기청정기 2.0 [53만원] 리버서블 러기지 매트 차량 보호 필름Ⅱ [40만원] (도어 중앙부, 도어 엣지 외) 블랙잉크 전용 도어스팟램프 사이드스텝(블랙) [45만원] 블랙 사이드 스텝 사이드 스텝 [40만원] 메탈 트랜스버스 트림 신차 옵션 상품 EXTERIOR COLORS 어비스 블랙 펄 A2B 에코트로닉 그레이 펄 PE2 크리미 화이트 펄 WW2 사이버 세이지 펄 RS2 * 상기 컬러는 인쇄된 것이므로 실제 차량의 컬러와는 다소 차이가 있을 수 있습니다. 크리미 화이트 매트 ㅣ 무광 컬러 WWM 얼씨 브래스 매트 ㅣ 무광 컬러 YBM 현대브랜드관 이동 모바일 페이지 이동 RECREATIONAL VEHICLE /// 2026 SANTA FE 12 2026 SANTA FE 루프탑 텐트(아이캠퍼) ※ 애프터마켓 : 현대샵(Shop.Hyundai.com) 현대 브랜드관에서 구매 가능하며 상품",
    "빌트인 캠 2, 증강현실 내비게이션": "450,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "HTRAC, 험로주행모드": "2,230,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "6인승": "/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_6인승/1,900kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.4km/ℓ(도심 : 8.2km/ℓ, 고속도로 : 11.3km/ℓ) l CO₂ 배출량 : 181g/km l 배기량 : 2,497cc l 공차중량 : 1,955kg_",
    "7인승": "/1,900kg_6인승/1,860kg_5인승 l 8단 DCT(4등급) 스마트스트림 가솔린 2.5터보 AWD(20\") 복합 9.7km/ℓ(도심 : 8.5km/ℓ, 고속도로 : 11.6km/ℓ) l CO₂ 배출량 : 175g/km l 배기량 : 2,497cc l 공차중량 : 1,940kg_",
    "라이프 스타일": "패키지는 동시 선택이 불가합니다. ※"
  },
  "디 올 뉴 팰리세이드|하이브리드|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), 발수 적용 1열 유리, 스마트 파워 테일게이트 컴포트 플러스 (9인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 &"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "1,850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "원격 스마트 주차 보조": "660,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션 H Genuine Accessories 라이프 스타일 (9인승) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트 (7인승) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트, 220V 인버터 (HEV) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트, 실내 V2L ■ 12.3인치 내비게이션 ※ 고해상도 12.3인치 터치스크린, 고화질 DMB 수신 가능, 라디오, MP3 재생, TPEG 서비스(교통정보 및 위험지역 알림 기능), 다국어 지원(한국어/영어) ※ 내비게이션 무선 업데이트는 정기 업데이트 시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공 (자세한 방법은 취급 설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) - 디스플레이 터치 또는 음성을 통한 제어 가능 - 작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상), 원활한 구동을 위해서는 Android 6.0(Marshmallow)이상 버전의 스마트폰 권장 [애플 카플레이]",
    "듀얼 와이드 선루프": "850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2 Plus,": "660,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "사이드스텝": "430,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 공기청정기": "전용 에어필터의 권장 사용기간은 6개월이며(하루 2시간 사용 기준) 전용 에어필터 및 기타 애프터마켓 파츠는 현대샵(Shop.Hyundai.com) 현대 브랜드관을 통하여 구매 가능합니다. ※ H Genuine Accessories 신차 옵션 상품 선택 시 전차종 별도 명기되지않는한 혹은 남양, 칠곡, 영남 출고센터에서만 출고가 가능합니다. ※ H Genuine Accessories 신차 옵션 상품 선택 시 기존에 장착된 부품의 처리 비용은 해당 패키지 판매가격에 반영되어 있어 별도의 보상은 없습니다. 차량용 냉장고 스티어링 휠 테이블 트렁크매트 풀커버 빌트인 캠 2 전용 마이크로SD 카드 (128GB) 선바이저 선글라스 케이스 C to USB-A 변환 젠더 100W 충전 케이블 코일 카매트 스마트 카드키 시트백 오거나이저 2열 레그룸 박스 프로젝터 롤 스크린 목쿠션 어린이 헤드레스트 필드 벤치 1열 콘솔 쿠션 시트 보호매트 The all-new PALISADE"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), 발수 적용 1열 유리, 스마트 파워 테일게이트 컴포트 플러스 (9인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 &"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "1,850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "원격 스마트 주차 보조": "660,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "850,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 캠 2 Plus,": "660,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "사이드스텝": "430,000원 선택 품목입니다. 상세 구성은 해당 차량 가격표의 패키지 품목을 확인하세요.",
    "빌트인 공기청정기": "전용 에어필터의 권장 사용기간은 6개월이며(하루 2시간 사용 기준) 전용 에어필터 및 기타 애프터마켓 파츠는 현대샵(Shop.Hyundai.com) 현대 브랜드관을 통하여 구매 가능합니다. ※ H Genuine Accessories 신차 옵션 상품 선택 시 전차종 별도 명기되지않는한 혹은 남양, 칠곡, 영남 출고센터에서만 출고가 가능합니다. ※ H Genuine Accessories 신차 옵션 상품 선택 시 기존에 장착된 부품의 처리 비용은 해당 패키지 판매가격에 반영되어 있어 별도의 보상은 없습니다. 차량용 냉장고 스티어링 휠 테이블 트렁크매트 풀커버 빌트인 캠 2 전용 마이크로SD 카드 (128GB) 선바이저 선글라스 케이스 C to USB-A 변환 젠더 100W 충전 케이블 코일 카매트 스마트 카드키 시트백 오거나이저 2열 레그룸 박스 프로젝터 롤 스크린 목쿠션 어린이 헤드레스트 필드 벤치 1열 콘솔 쿠션 시트 보호매트 The all-new PALISADE"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션 H Genuine Accessories 라이프 스타일 (9인승) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트 (7인승) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트, 220V 인버터 (HEV) LED 테일게이트 램프, LED 도어 스팟 램프, 러기지 프로텍션 매트, 러기지 스크린, 러기지 네트, 실내 V2L ■ 12.3인치 내비게이션 ※ 고해상도 12.3인치 터치스크린, 고화질 DMB 수신 가능, 라디오, MP3 재생, TPEG 서비스(교통정보 및 위험지역 알림 기능), 다국어 지원(한국어/영어) ※ 내비게이션 무선 업데이트는 정기 업데이트 시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공 (자세한 방법은 취급 설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) - 디스플레이 터치 또는 음성을 통한 제어 가능 - 작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상), 원활한 구동을 위해서는 Android 6.0(Marshmallow)이상 버전의 스마트폰 권장 [애플 카플레이]"
  }
};

/* v25: 아반떼 가솔린 1.6 현대 스마트센스 설명 정정 */
[
  "아반떼|가솔린 1.6|스마트",
  "아반떼|가솔린 1.6|모던"
].forEach((key) => {
  trimOptionDetailOverrides[key] = trimOptionDetailOverrides[key] || {};
  trimOptionDetailOverrides[key]["현대 스마트센스"] = "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고";
});

/* v27: 가격표 PDF 기반 옵션 상세설명 정확화 */
const v27CarUpdates = {
  "아반떼": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "20,620,000원",
            "options": [
              "컨비니언스",
              "하이패스",
              "현대 스마트센스",
              "17인치 알로이 휠 & 타이어Ⅰ"
            ]
          },
          "모던": {
            "displayTrim": "가솔린 1.6 모던",
            "price": "23,880,000원",
            "options": [
              "선루프",
              "파킹 어시스트 플러스",
              "익스테리어 디자인",
              "현대 스마트센스",
              "컴포트Ⅰ",
              "17인치 알로이 휠 & 타이어Ⅱ",
              "세이지 그린 인테리어 컬러"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 인스퍼레이션",
            "price": "27,560,000원",
            "options": [
              "선루프",
              "빌트인 캠(보조배터리 포함)*",
              "세이지 그린 인테리어 컬러"
            ]
          }
        }
      }
    }
  },
  "더 뉴 그랜저": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "캘리그래피": {
            "displayTrim": "가솔린 캘리그래피",
            "price": "53,100,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 블랙 잉크",
            "price": "54,000,000원",
            "options": []
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "42,450,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 익스클루시브",
            "price": "46,940,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅰ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "스마트스트림 가솔린 3.5 엔진",
              "파노라마 선루프",
              "HTRAC",
              "빌트인 캠 2 Plus",
              "스마트 카드키"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "49,330,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "53,820,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "59,990,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "60,890,000원",
            "options": [
              "스마트 카드키"
            ]
          }
        }
      }
    }
  },
  "베뉴": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "19,940,000원",
            "options": [
              "하이패스",
              "내비게이션 패키지"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 프리미엄",
            "price": "22,920,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "스타일",
              "테크"
            ]
          },
          "플럭스": {
            "displayTrim": "가솔린 1.6 플럭스",
            "price": "24,400,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "17인치 블랙 알로이 휠",
              "적외선 무릎 워머",
              "인조가죽 시트 + 1열 열선시트"
            ]
          }
        }
      }
    }
  },
  "코나": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 모던",
            "price": "24,630,000원",
            "options": [
              "내비게이션 패키지Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 H-Pick",
            "price": "26,850,000원",
            "options": [
              "베스트 셀렉션",
              "스타일 Lite",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "29,150,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "19인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 인스퍼레이션",
            "price": "31,460,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 블랙 익스테리어",
            "price": "31,810,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 N Line",
            "price": "32,450,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "HTRAC(험로주행모드)",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "캐스퍼": {
    "fuels": {
      "가솔린 1.0": {
        "displayFuel": "가솔린 1.0",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.0 스마트",
            "price": "14,930,000원",
            "options": [
              "선루프",
              "17인치 알로이 휠 패키지"
            ]
          },
          "디 에센셜": {
            "displayTrim": "가솔린 1.0 디 에센셜",
            "price": "17,710,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.0 인스퍼레이션",
            "price": "20,170,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          }
        }
      }
    }
  },
  "코나 하이브리드": {
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "30,380,000원",
            "options": [
              "내비게이션 패키지Ⅱ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "32,200,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "스타일Ⅰ",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "34,670,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "18인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "36,630,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "36,980,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "37,620,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "투싼": {
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 1.6 터보 모던",
            "price": "28,440,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ",
              "인포테인먼트 내비",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "31,120,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 1.6 터보 H-Pick",
            "price": "32,010,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "34,560,000원",
            "options": [
              "베스트 셀렉션Ⅲ(가솔린)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅲ(가솔린)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 1.6 터보 블랙 익스테리어",
            "price": "35,010,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 1.6 터보 N Line",
            "price": "35,410,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝",
              "HTRAC"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "34,180,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ(HEV)",
              "인포테인먼트 내비(HEV)",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "36,650,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "37,490,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "40,170,000원",
            "options": [
              "베스트 셀렉션Ⅳ(HEV)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅳ(HEV)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "40,620,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "40,820,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝"
            ]
          }
        }
      }
    }
  },
  "싼타페": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "36,570,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "39,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅰ"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 2.5 터보 H-Pick",
            "price": "42,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 2.5 터보 블랙 익스테리어",
            "price": "42,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 2.5 터보 블랙 잉크",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "41,220,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "44,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅱ",
              "20인치 휠 & 타이어"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "46,730,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "47,080,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      }
    }
  },
  "디 올 뉴 팰리세이드": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "43,830,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "49,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "55,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "49,820,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "55,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "61,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          }
        }
      }
    }
  }
};

Object.entries(v27CarUpdates).forEach(([carName, carData]) => {
  dashboardData.cars[carName] = dashboardData.cars[carName] || { colors: {}, fuels: {} };
  dashboardData.cars[carName].fuels = dashboardData.cars[carName].fuels || {};
  Object.entries(carData.fuels || {}).forEach(([engineName, engineData]) => {
    const prevEngine = dashboardData.cars[carName].fuels[engineName] || {};
    dashboardData.cars[carName].fuels[engineName] = {
      ...prevEngine,
      ...engineData,
      colors: prevEngine.colors || engineData.colors
    };
  });
});
if (typeof vehicleColorOverrides !== "undefined") {
  Object.entries(vehicleColorOverrides).forEach(([key, colors]) => {
    const [carName, engineName] = key.split('|');
    if (dashboardData.cars?.[carName]?.fuels?.[engineName]) {
      dashboardData.cars[carName].fuels[engineName].colors = colors;
      dashboardData.cars[carName].colors = dashboardData.cars[carName].colors || colors;
    }
  });
}
const v27OptionLibraryUpdates = {
  "컨비니언스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 테일게이트, 스마트폰 무선 충전"
  },
  "하이패스": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스"
  },
  "현대 스마트센스": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림"
  },
  "17인치 알로이 휠 & 타이어Ⅰ": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치) Ⅱ 17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치) 빌트인 캠(보조배터리 포함) 빌트인 캠, 보조배터리"
  },
  "선루프": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시"
  },
  "파킹 어시스트 플러스": {
    "price": "1,290,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조"
  },
  "익스테리어 디자인": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등"
  },
  "컴포트Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "17인치 알로이 휠 & 타이어Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어Ⅱ"
  },
  "세이지 그린 인테리어 컬러": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2026 아반떼 가솔린"
  },
  "빌트인 캠(보조배터리 포함)*": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠(보조배터리 포함)*"
  },
  "20인치 알로이 휠 & 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 알로이 휠 & 타이어"
  },
  "시트 컴포트 플러스": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "시트 컴포트 플러스"
  },
  "스마트 비전 루프": {
    "price": "1,800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 비전 루프"
  },
  "현대 스마트센스Ⅰ": {
    "price": "1,100,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)"
  },
  "파킹 어시스트": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹 어시스트"
  },
  "프리미엄 초이스": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "프리미엄 초이스"
  },
  "플래티넘": {
    "price": "1,710,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "현대 스마트센스Ⅱ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅱ"
  },
  "시트 컴포트Ⅰ": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "시트 컴포트Ⅰ"
  },
  "BOSE 프리미엄 사운드 패키지": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드 패키지"
  },
  "스마트스트림 가솔린 3.5 엔진": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트스트림 가솔린 3.5 엔진"
  },
  "파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프"
  },
  "HTRAC": {
    "price": "1,980,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC"
  },
  "빌트인 캠 2 Plus": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2 Plus"
  },
  "스마트 카드키": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 카드키"
  },
  "시트 컴포트Ⅱ": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "시트 컴포트Ⅱ"
  },
  "내비게이션 패키지": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "내비게이션 패키지"
  },
  "투톤 컬러 루프": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "투톤 컬러 루프"
  },
  "스타일": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스타일"
  },
  "테크": {
    "price": "350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "테크"
  },
  "17인치 블랙 알로이 휠": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 블랙 알로이 휠"
  },
  "적외선 무릎 워머": {
    "price": "280,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "적외선 무릎 워머"
  },
  "인조가죽 시트 + 1열 열선시트": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트 + 1열 열선시트"
  },
  "내비게이션 패키지Ⅰ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "컴포트 초이스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "베스트 셀렉션": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "스타일 Lite": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)"
  },
  "현대 스마트센스Ⅲ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ"
  },
  "클러스터(12.3인치 컬러 LCD)": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD)"
  },
  "파킹어시스트": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "빌트인 캠 2, 증강현실 내비게이션": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "시트플러스": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "시트플러스"
  },
  "19인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 타이어"
  },
  "실내 컬러 패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "BOSE 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드"
  },
  "에코패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버 2027 코나 하이브리드"
  },
  "HTRAC(험로주행모드)": {
    "price": "2,030,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC(험로주행모드)"
  },
  "와이드 선루프": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "와이드 선루프"
  },
  "알칸타라 인테리어 패키지": {
    "price": "370,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "알칸타라 인테리어 패키지"
  },
  "17인치 알로이 휠 패키지": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "실내 컬러 패키지(베이지/오렌지 브라운)": {
    "price": "900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능, TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다."
  },
  "내비게이션 패키지Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "스타일Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프"
  },
  "18인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "18인치 알로이 휠 & 타이어"
  },
  "파노라마 선루프 + 루프랙": {
    "price": "1,160,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프 + 루프랙"
  },
  "익스테리어 디자인Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "인포테인먼트 내비": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함), 레인센서, 하이패스"
  },
  "익스테리어 디자인Ⅱ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "익스테리어 디자인Ⅱ"
  },
  "파킹어시스트Ⅰ(가솔린)": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "컴포트Ⅱ": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "컴포트Ⅱ"
  },
  "베스트 셀렉션Ⅲ(가솔린)": {
    "price": "1,220,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅲ(가솔린)": {
    "price": "830,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린)"
  },
  "19인치 알로이 휠 & 미쉐린 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "미쉐린 타이어": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "미쉐린 타이어"
  },
  "라이프 스타일": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "라이프 스타일"
  },
  "사이드 스텝": {
    "price": "340,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드 스텝"
  },
  "블랙 사이드스텝": {
    "price": "390,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙 사이드스텝"
  },
  "익스테리어 디자인Ⅰ(HEV)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "인포테인먼트 내비(HEV)": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스"
  },
  "파킹어시스트Ⅱ(HEV)": {
    "price": "1,530,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "베스트 셀렉션Ⅳ(HEV)": {
    "price": "1,520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅳ(HEV)": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV)"
  },
  "듀얼 와이드 선루프 + 루프랙": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 와이드 선루프 + 루프랙"
  },
  "동승석 8way 전동시트": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "동승석 8way 전동시트"
  },
  "헤드업디스플레이": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업디스플레이"
  },
  "파킹 어시스트 플러스Ⅰ": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹 어시스트 플러스Ⅰ"
  },
  "플래티넘Ⅰ": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "플래티넘Ⅰ"
  },
  "베스트 셀렉션Ⅰ": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "베스트 셀렉션Ⅰ"
  },
  "듀얼 와이드 선루프": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 와이드 선루프"
  },
  "디자인 플러스Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디자인 플러스Ⅰ"
  },
  "20인치 휠 & 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 휠 & 타이어"
  },
  "HTRAC, 험로주행모드": {
    "price": "2,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC, 험로주행모드"
  },
  "6인승": {
    "price": "1,040,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "6인승"
  },
  "7인승": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "7인승"
  },
  "블랙잉크 플러스": {
    "price": "940,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙잉크 플러스"
  },
  "디자인 플러스Ⅱ": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디자인 플러스Ⅱ"
  },
  "컴포트": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트"
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "원격 스마트 주차 보조"
  },
  "사이드스텝": {
    "price": "430,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드스텝"
  },
  "빌트인 공기청정기": {
    "price": "520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "[7인승 55만원 / 9인승 52만원]"
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  }
};
Object.assign(optionLibrary, v27OptionLibraryUpdates);
const v27TrimOptionDetailOverrides = {
  "아반떼|가솔린 1.6|스마트": {
    "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함) 인포테인먼트 내비 10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
    "하이패스": "하이패스",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "17인치 알로이 휠 & 타이어Ⅰ": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치) Ⅱ 17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치) 빌트인 캠(보조배터리 포함) 빌트인 캠, 보조배터리"
  },
  "아반떼|가솔린 1.6|모던": {
    "선루프": "선루프",
    "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "컴포트Ⅰ": "운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way), 현대 디지털 키 2 터치, 스마트폰 무선충전, 2열 열선시트, 2열 암레스트, 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓",
    "17인치 알로이 휠 & 타이어Ⅱ": "17인치 알로이 휠 & 타이어Ⅱ",
    "세이지 그린 인테리어 컬러": "2026 아반떼 가솔린"
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "선루프": "선루프",
    "빌트인 캠(보조배터리 포함)*": "빌트인 캠(보조배터리 포함)*",
    "세이지 그린 인테리어 컬러": "2026 아반떼 가솔린"
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 알로이 휠 & 타이어",
    "시트 컴포트 플러스": "시트 컴포트 플러스",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|가솔린|블랙 잉크": {},
  "더 뉴 그랜저|가솔린|프리미엄": {
    "현대 스마트센스Ⅰ": "현대 스마트센스Ⅰ",
    "파킹 어시스트": "파킹 어시스트",
    "프리미엄 초이스": "프리미엄 초이스"
  },
  "더 뉴 그랜저|가솔린|익스클루시브": {
    "플래티넘": "플래티넘",
    "현대 스마트센스Ⅱ": "현대 스마트센스Ⅱ",
    "시트 컴포트Ⅰ": "시트 컴포트Ⅰ",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함) 패키지 품목",
    "20인치 알로이 휠 & 타이어": "20인치 알로이 휠 & 타이어",
    "스마트스트림 가솔린 3.5 엔진": "스마트스트림 가솔린 3.5 엔진",
    "파노라마 선루프": "파노라마 선루프",
    "HTRAC": "HTRAC",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "스마트 카드키": "Essential Acc. 패키지 스마트 비전 루프 선쉐이드 20인치 고휘도 스퍼터링 휠 무선 청소기 차량 보호 필름 2 블랙 루프 스킨 빌트인 공기청정기 2.0 무선 에어건 카향수(쿨 아쿠아) * 위 연비는 표준모드에 의한 연비로서 도로상태, 운전방법, 차량적재, 정비상태 및 외기온도 등에 따라 실주행연비와 차이가 있습니다."
  },
  "더 뉴 그랜저|하이브리드|프리미엄": {
    "현대 스마트센스Ⅰ": "현대 스마트센스Ⅰ",
    "파킹 어시스트": "파킹 어시스트",
    "프리미엄 초이스": "프리미엄 초이스"
  },
  "더 뉴 그랜저|하이브리드|익스클루시브": {
    "플래티넘": "플래티넘",
    "현대 스마트센스Ⅱ": "현대 스마트센스Ⅱ",
    "시트 컴포트Ⅱ": "시트 컴포트Ⅱ",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드 패키지",
    "20인치 알로이 휠 & 타이어": "20인치 알로이 휠 & 타이어",
    "파노라마 선루프": "파노라마 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus"
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 알로이 휠 & 타이어",
    "시트 컴포트 플러스": "시트 컴포트 플러스",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|하이브리드|블랙 잉크": {
    "스마트 카드키": "스마트 카드키"
  },
  "베뉴|가솔린 1.6|스마트": {
    "하이패스": "하이패스",
    "내비게이션 패키지": "내비게이션 패키지"
  },
  "베뉴|가솔린 1.6|프리미엄": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "스타일": "스타일",
    "테크": "테크"
  },
  "베뉴|가솔린 1.6|플럭스": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "17인치 블랙 알로이 휠": "17인치 블랙 알로이 휠",
    "적외선 무릎 워머": "적외선 무릎 워머",
    "인조가죽 시트 + 1열 열선시트": "인조가죽 시트 + 1열 열선시트"
  },
  "코나|가솔린|모던": {
    "내비게이션 패키지Ⅰ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) 포함 Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나|가솔린|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "스타일 Lite": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나|가솔린|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "19인치 알로이 휠 & 타이어": "19인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나|가솔린|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버 스마트스트림 가솔린 1.6 터보 2WD (17\")"
  },
  "코나|가솔린|블랙 익스테리어": {},
  "코나|가솔린|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "HTRAC(험로주행모드)": "HTRAC(험로주행모드)",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "캐스퍼|가솔린 1.0|스마트": {
    "선루프": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시",
    "17인치 알로이 휠 패키지": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "캐스퍼|가솔린 1.0|디 에센셜": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능, TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다."
  },
  "캐스퍼|가솔린 1.0|인스퍼레이션": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능, TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경, DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다."
  },
  "코나 하이브리드|하이브리드|모던": {
    "내비게이션 패키지Ⅱ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "스타일Ⅰ": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "18인치 알로이 휠 & 타이어": "18인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나 하이브리드|하이브리드|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버 2027 코나 하이브리드"
  },
  "코나 하이브리드|하이브리드|블랙 익스테리어": {},
  "코나 하이브리드|하이브리드|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "투싼|가솔린 1.6 터보|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함), 레인센서, 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|가솔린 1.6 터보|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|인스퍼레이션": {
    "베스트 셀렉션Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|가솔린 1.6 터보|블랙 익스테리어": {},
  "투싼|가솔린 1.6 터보|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅰ 선택 시 구매 가능",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝",
    "HTRAC": "HTRAC"
  },
  "투싼|하이브리드|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비(HEV)": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|하이브리드|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|인스퍼레이션": {
    "베스트 셀렉션Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|하이브리드|블랙 익스테리어": {},
  "투싼|하이브리드|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트 디지털 사양 상세 가격 디지털 사양 별 구매 가능 조건 모던 프리미엄 H-Pick 인스퍼레이션 (블랙 익스테리어 /N Line) 피카츄 전광석화, 메타몽 월드 등 클러스터 및 인포테인먼트 디자인 테마 변경 평생이용 테마 별 상이 - 파킹어시스트Ⅱ 선택 시 구매 가능",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝"
  },
  "싼타페|가솔린 2.5 터보|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "파킹 어시스트 플러스Ⅰ",
    "플래티넘Ⅰ": "플래티넘Ⅰ",
    "베스트 셀렉션Ⅰ": "베스트 셀렉션Ⅰ"
  },
  "싼타페|가솔린 2.5 터보|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "시트플러스",
    "파킹 어시스트 플러스Ⅰ": "파킹 어시스트 플러스Ⅰ",
    "디자인 플러스Ⅰ": "디자인 플러스Ⅰ"
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|가솔린 2.5 터보|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "6인승",
    "7인승": "7인승",
    "라이프 스타일": "라이프 스타일"
  },
  "싼타페|가솔린 2.5 터보|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|가솔린 2.5 터보|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "블랙잉크 플러스",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "6인승",
    "7인승": "7인승",
    "라이프 스타일": "라이프 스타일"
  },
  "싼타페|하이브리드|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "파킹 어시스트 플러스Ⅰ",
    "플래티넘Ⅰ": "플래티넘Ⅰ",
    "베스트 셀렉션Ⅰ": "베스트 셀렉션Ⅰ"
  },
  "싼타페|하이브리드|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "시트플러스",
    "파킹 어시스트 플러스Ⅰ": "파킹 어시스트 플러스Ⅰ",
    "디자인 플러스Ⅱ": "디자인 플러스Ⅱ",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "6인승",
    "7인승": "7인승",
    "라이프 스타일": "라이프 스타일"
  },
  "싼타페|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|하이브리드|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "블랙잉크 플러스",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "6인승",
    "7인승": "7인승",
    "라이프 스타일": "라이프 스타일"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  },
  "디 올 뉴 팰리세이드|하이브리드|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트, 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  }
};
Object.assign(trimOptionDetailOverrides, v27TrimOptionDetailOverrides);

/* v28: 재첨부 가격표 기반 옵션 상세내용 팩트체크 반영 */
const v28CarUpdates = {
  "쏘나타 디 엣지": {
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "29,330,000원",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 1.6 터보 에스",
            "price": "30,650,000원",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 1.6 터보 익스클루시브",
            "price": "33,730,000원",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "36,660,000원",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "가솔린 2.0": {
        "displayFuel": "가솔린 2.0",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 2.0 프리미엄",
            "price": "29,330,000원",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 2.0 에스",
            "price": "30,650,000원",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 2.0 익스클루시브",
            "price": "33,730,000원",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 2.0 인스퍼레이션",
            "price": "36,660,000원",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "렌터카 LPG": {
        "displayFuel": "렌터카 LPG",
        "trims": {
          "Business 1": {
            "displayTrim": "렌터카 LPG Business 1",
            "price": "25,600,000원",
            "options": [
              "현대 스마트센스Ⅱ",
              "인포테인먼트 내비Ⅲ",
              "컴포트Ⅰ(1열 편의)",
              "익스테리어 디자인Ⅲ",
              "하이패스 + ECM 룸미러"
            ]
          },
          "Business 2": {
            "displayTrim": "렌터카 LPG Business 2",
            "price": "29,840,000원",
            "options": [
              "현대 스마트센스Ⅱ",
              "플래티넘Ⅱ",
              "컴포트Ⅲ(2열 편의)",
              "파노라마 선루프",
              "빌트인 캠 2 + 증강현실 내비게이션"
            ]
          }
        }
      }
    }
  },
  "아반떼": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "20,620,000원",
            "options": [
              "컨비니언스",
              "인포테인먼트 내비 추가 선택 가능",
              "하이패스",
              "현대 스마트센스",
              "17인치 알로이 휠 & 타이어Ⅰ"
            ]
          },
          "모던": {
            "displayTrim": "가솔린 1.6 모던",
            "price": "23,880,000원",
            "options": [
              "선루프",
              "파킹 어시스트 플러스",
              "익스테리어 디자인",
              "현대 스마트센스",
              "컴포트Ⅰ",
              "17인치 알로이 휠 & 타이어Ⅱ",
              "세이지 그린 인테리어 컬러"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 인스퍼레이션",
            "price": "27,560,000원",
            "options": [
              "선루프",
              "빌트인 캠(보조배터리 포함)*",
              "세이지 그린 인테리어 컬러"
            ]
          }
        }
      }
    }
  },
  "더 뉴 그랜저": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "캘리그래피": {
            "displayTrim": "가솔린 캘리그래피",
            "price": "53,100,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 블랙 잉크",
            "price": "54,000,000원",
            "options": []
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "42,450,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 익스클루시브",
            "price": "46,940,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅰ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "스마트스트림 가솔린 3.5 엔진",
              "파노라마 선루프",
              "HTRAC",
              "빌트인 캠 2 Plus",
              "스마트 카드키"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "49,330,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "53,820,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "59,990,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "60,890,000원",
            "options": [
              "스마트 카드키"
            ]
          }
        }
      }
    }
  },
  "베뉴": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "19,940,000원",
            "options": [
              "하이패스",
              "내비게이션 패키지"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 프리미엄",
            "price": "22,920,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "스타일",
              "테크"
            ]
          },
          "플럭스": {
            "displayTrim": "가솔린 1.6 플럭스",
            "price": "24,400,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "17인치 블랙 알로이 휠",
              "적외선 무릎 워머",
              "인조가죽 시트 + 1열 열선시트"
            ]
          }
        }
      }
    }
  },
  "코나": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 모던",
            "price": "24,630,000원",
            "options": [
              "내비게이션 패키지Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 H-Pick",
            "price": "26,850,000원",
            "options": [
              "베스트 셀렉션",
              "스타일 Lite",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "29,150,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "19인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 인스퍼레이션",
            "price": "31,460,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 블랙 익스테리어",
            "price": "31,810,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 N Line",
            "price": "32,450,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "HTRAC(험로주행모드)",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "코나 하이브리드": {
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "30,380,000원",
            "options": [
              "내비게이션 패키지Ⅱ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "32,200,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "스타일Ⅰ",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "34,670,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "18인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "36,630,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "36,980,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "37,620,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "캐스퍼": {
    "fuels": {
      "가솔린 1.0": {
        "displayFuel": "가솔린 1.0",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.0 스마트",
            "price": "14,930,000원",
            "options": [
              "선루프",
              "17인치 알로이 휠 패키지"
            ]
          },
          "디 에센셜": {
            "displayTrim": "가솔린 1.0 디 에센셜",
            "price": "17,710,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.0 인스퍼레이션",
            "price": "20,170,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          }
        }
      }
    }
  },
  "투싼": {
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 1.6 터보 모던",
            "price": "28,440,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ",
              "인포테인먼트 내비",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "31,120,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 1.6 터보 H-Pick",
            "price": "32,010,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "34,560,000원",
            "options": [
              "베스트 셀렉션Ⅲ(가솔린)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅲ(가솔린)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 1.6 터보 블랙 익스테리어",
            "price": "35,010,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 1.6 터보 N Line",
            "price": "35,410,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝",
              "HTRAC"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "34,180,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ(HEV)",
              "인포테인먼트 내비(HEV)",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "36,650,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "37,490,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "40,170,000원",
            "options": [
              "베스트 셀렉션Ⅳ(HEV)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅳ(HEV)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "40,620,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "40,820,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝"
            ]
          }
        }
      }
    }
  },
  "싼타페": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "36,570,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "39,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅰ"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 2.5 터보 H-Pick",
            "price": "42,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 2.5 터보 블랙 익스테리어",
            "price": "42,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 2.5 터보 블랙 잉크",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "41,220,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "44,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅱ",
              "20인치 휠 & 타이어"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "46,730,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "47,080,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      }
    }
  },
  "디 올 뉴 팰리세이드": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "43,830,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "49,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "55,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "49,820,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "55,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "61,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          }
        }
      }
    }
  }
};

Object.entries(v28CarUpdates).forEach(([carName, carData]) => {
  dashboardData.cars[carName] = dashboardData.cars[carName] || { colors: {}, fuels: {} };
  dashboardData.cars[carName].fuels = dashboardData.cars[carName].fuels || {};
  Object.entries(carData.fuels || {}).forEach(([engineName, engineData]) => {
    const prevEngine = dashboardData.cars[carName].fuels[engineName] || {};
    dashboardData.cars[carName].fuels[engineName] = {
      ...prevEngine,
      ...engineData,
      colors: prevEngine.colors || engineData.colors
    };
  });
});
if (typeof vehicleColorOverrides !== "undefined") {
  Object.entries(vehicleColorOverrides).forEach(([key, colors]) => {
    const [carName, engineName] = key.split('|');
    if (dashboardData.cars?.[carName]?.fuels?.[engineName]) {
      dashboardData.cars[carName].fuels[engineName].colors = colors;
      dashboardData.cars[carName].colors = dashboardData.cars[carName].colors || colors;
    }
  });
}
const v28OptionLibraryUpdates = {
  "인포테인먼트 내비Ⅰ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "파킹 어시스트Ⅰ": {
    "price": "1,680,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능"
  },
  "현대 스마트센스Ⅰ": {
    "price": "1,100,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)"
  },
  "컴포트Ⅰ(1열 편의)": {
    "price": "610,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)"
  },
  "컴포트Ⅱ(2열 편의)": {
    "price": "670,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트"
  },
  "익스테리어 디자인Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "하이패스": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스"
  },
  "플래티넘Ⅰ": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 스마트폰 무선충전(듀얼)"
  },
  "파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프"
  },
  "BOSE 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드"
  },
  "빌트인 캠 2, 증강현실 내비게이션": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "현대 스마트센스Ⅱ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 시스템(영상회의 지원)"
  },
  "인포테인먼트 내비Ⅲ": {
    "price": "1,300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그) 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "익스테리어 디자인Ⅲ": {
    "price": "380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "하이패스 + ECM 룸미러": {
    "price": "230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스 + ECM 룸미러"
  },
  "플래티넘Ⅱ": {
    "price": "1,170,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "컴포트Ⅲ(2열 편의)": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)"
  },
  "빌트인 캠 2 + 증강현실 내비게이션": {
    "price": "420,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2 + 증강현실 내비게이션"
  },
  "컨비니언스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 테일게이트, 스마트폰 무선 충전"
  },
  "인포테인먼트 내비 추가 선택 가능": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인포테인먼트 내비 추가 선택 가능"
  },
  "현대 스마트센스": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림"
  },
  "17인치 알로이 휠 & 타이어Ⅰ": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Ⅱ"
  },
  "선루프": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시"
  },
  "파킹 어시스트 플러스": {
    "price": "1,290,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조"
  },
  "익스테리어 디자인": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등"
  },
  "컴포트Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "17인치 알로이 휠 & 타이어Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BUSINESS CAR /// RENT A CAR 렌터카 Smart (스마트) 19,027,273(1,902,727) • 파워트레인/성능 : LPi 1.6 엔진, 6단 자동변속기, 디스크 브레이크, 통합주행모드 • 안전 : 8에어백 시스템(1열 어드밴스드/사이드, 2열 사이드, 전복대응 커튼), 유아용 시트 고정장치(2열 2개) 세이프티 언락, 타이어 응급처치 키트, 개별 타이어 공기압 경보장치, 실내 소화기 • 지능형 안전 기술 : 전방 충돌방지 보조(차량/보행자/자전거 탑승자/교차로 대향차/정면 대향차), 차로 유지 보조 차로 이탈방지 보조, 운전자 주의 경고, 하이빔 보조, 전방 차량 출발 알림, 지능형 속도 제한 보조 • 외관 : 네오트로닉 블랙 라디에이터 그릴, Full LED 헤드램프(MFR 타입), LED 주간주행등(DRL, 포지셔닝 포함), 보조제동등 15인치 알로이 휠 & 타이어, 아웃사이드 미러(열선, 전동접이, 전동조절, LED 방향지시등) • 내장 : 클러스터(4.2인치 컬러 LCD), 룸램프, 인조가죽 적용 내장(도어 센터트림) • 시트 : 인조가죽 시트, 운전석 수동 높이 조절, 2열 높이조절 헤드레스트(센터 제외) • 편의 : 버튼시동 & 스마트키, 스마트키 원격시동, 웰컴 시스템, 스마트 트렁크, 도어 포켓 라이팅(앞), 파워 윈도우 마이크로 에어 필터, 수동식 틸트 & 텔레스코픽 스티어링 휠, 스티어링 휠 리모컨, ECM 룸미러 USB-C 충전기(1열 1개, 2열 2개), 크루즈 컨트롤, 오토 라이트 컨트롤, 후석 승객 알림, 후방 모니터 (조향 연동, 주행 중 후방 뷰), 전방 주차 거리 경고, 후방 주차 거리 경고 • 인포테인먼트 : 8인치 디스플레이 오디오(6스피커, 라디오, MP3, 블루투스 핸즈프리, 무선 폰 프로젝션 포함) ▶ 컨비니언스 ┗ 인포테인먼트 내비 추가 선택 가능 [750,000] ▶ 하이패스 ▶ 현대 스마트센스 ▶ 17인치 알로이 휠 & 타이어Ⅰ (15인치 → 17인치) Modern (모던) 21,836,364(2,183,636) ▶ 스마트 기본 품목 및 • 지능형 안전 기술 : 고속도로 주행보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) • 외관 : 16인치 알로이 휠 & 타이어 • 내장 : 가죽 스티어링 휠(열선 포함), 가죽 변속기 노브, 선바이저 램프, 깊이 가변형 컵홀더, 앰비언트 무드램프 • 시트 : 1열 열선/통풍시트 • 편의 : 전동식 파킹 브레이크(오토홀드 포함), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/ 애프터블로우 포함), 운전석 공조 연동 자동 제어, 2열 에어벤트, 세이프티 파워 윈도우(운전석), 하이패스 • 인포테인먼트 : 10.25인치 내비게이션 (블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드) 내비게이션 무선 업데이트 ▶ 선루프 ▶ 파킹 어시스트 플러스 ▶ 익스테리어 디자인 ▶ 현대 스마트센스 ▶ 컴포트Ⅱ ▶ 17인치 알로이 휠 & 타이어Ⅱ (16인치 → 17인치)"
  },
  "세이지 그린 인테리어 컬러": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "세이지 그린 인테리어 컬러"
  },
  "빌트인 캠(보조배터리 포함)*": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠, 보조배터리"
  },
  "20인치 알로이 휠 & 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어"
  },
  "시트 컴포트 플러스": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) ※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용 패키지 품목 세레니티 화이트 펄 W6H 바이오필릭 블루 펄 XB9 어비스 블랙 펄 A2B 녹턴 그레이 메탈릭 T2G"
  },
  "스마트 비전 루프": {
    "price": "1,800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 비전 루프"
  },
  "파킹 어시스트": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조"
  },
  "프리미엄 초이스": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "플래티넘": {
    "price": "1,710,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "시트 컴포트Ⅰ": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)"
  },
  "BOSE 프리미엄 사운드 패키지": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14 스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)"
  },
  "스마트스트림 가솔린 3.5 엔진": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트스트림 가솔린 3.5 엔진"
  },
  "HTRAC": {
    "price": "1,980,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC"
  },
  "빌트인 캠 2 Plus": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2 Plus"
  },
  "스마트 카드키": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 카드키"
  },
  "시트 컴포트Ⅱ": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가"
  },
  "내비게이션 패키지": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "투톤 컬러 루프": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "투톤 컬러 루프"
  },
  "스타일": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 루프랙"
  },
  "테크": {
    "price": "350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2 터치 패키지 품목"
  },
  "17인치 블랙 알로이 휠": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 블랙 알로이 휠"
  },
  "적외선 무릎 워머": {
    "price": "280,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "적외선 무릎 워머"
  },
  "인조가죽 시트 + 1열 열선시트": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트 + 1열 열선시트"
  },
  "내비게이션 패키지Ⅰ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "컴포트 초이스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "베스트 셀렉션": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "스타일 Lite": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)"
  },
  "현대 스마트센스Ⅲ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ"
  },
  "클러스터(12.3인치 컬러 LCD)": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD)"
  },
  "파킹어시스트": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "시트플러스": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템"
  },
  "19인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 타이어"
  },
  "실내 컬러 패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "에코패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "HTRAC(험로주행모드)": {
    "price": "2,030,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC(험로주행모드)"
  },
  "와이드 선루프": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "와이드 선루프"
  },
  "알칸타라 인테리어 패키지": {
    "price": "370,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "알칸타라 인테리어 패키지"
  },
  "내비게이션 패키지Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "스타일Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프"
  },
  "18인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "18인치 알로이 휠 & 타이어"
  },
  "17인치 알로이 휠 패키지": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "실내 컬러 패키지(베이지/오렌지 브라운)": {
    "price": "900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "파노라마 선루프 + 루프랙": {
    "price": "1,160,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프 + 루프랙"
  },
  "인포테인먼트 내비": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함) 레인센서, 하이패스"
  },
  "익스테리어 디자인Ⅱ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "익스테리어 디자인Ⅱ"
  },
  "파킹어시스트Ⅰ(가솔린)": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "컴포트Ⅱ": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "컴포트Ⅱ"
  },
  "베스트 셀렉션Ⅲ(가솔린)": {
    "price": "1,220,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅲ(가솔린)": {
    "price": "830,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린)"
  },
  "19인치 알로이 휠 & 미쉐린 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "미쉐린 타이어": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "미쉐린 타이어"
  },
  "라이프 스타일": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "사이드 스텝": {
    "price": "340,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드 스텝"
  },
  "블랙 사이드스텝": {
    "price": "390,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙 사이드스텝"
  },
  "익스테리어 디자인Ⅰ(HEV)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "인포테인먼트 내비(HEV)": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스"
  },
  "파킹어시스트Ⅱ(HEV)": {
    "price": "1,530,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "베스트 셀렉션Ⅳ(HEV)": {
    "price": "1,520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅳ(HEV)": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV)"
  },
  "듀얼 와이드 선루프 + 루프랙": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 와이드 선루프 + 루프랙"
  },
  "동승석 8way 전동시트": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "동승석 8way 전동시트"
  },
  "헤드업디스플레이": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업디스플레이"
  },
  "파킹 어시스트 플러스Ⅰ": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "베스트 셀렉션Ⅰ": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "듀얼 와이드 선루프": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 와이드 선루프"
  },
  "디자인 플러스Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능 Ⅱ 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "20인치 휠 & 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 휠 & 타이어"
  },
  "HTRAC, 험로주행모드": {
    "price": "2,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC, 험로주행모드"
  },
  "6인승": {
    "price": "1,040,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "7인승": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "블랙잉크 플러스": {
    "price": "940,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)"
  },
  "디자인 플러스Ⅱ": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "컴포트": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트"
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "원격 스마트 주차 보조"
  },
  "사이드스텝": {
    "price": "430,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드스텝"
  },
  "빌트인 공기청정기": {
    "price": "520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "[7인승 55만원 / 9인승 52만원]"
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  }
};
Object.assign(optionLibrary, v28OptionLibraryUpdates);
const v28TrimOptionDetailOverrides = {
  "쏘나타 디 엣지|가솔린 1.6 터보|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스) Ⅱ(2열 편의) 2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "파노라마 선루프"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|인스퍼레이션": {
    "파노라마 선루프": "파노라마 선루프",
    "BOSE 프리미엄 사운드": "▶ 빌트인 캠 2 + 증강현실 내비게이션 ▶ 파킹 어시스트Ⅱ ▶ 컴포트Ⅲ(2열 편의) ▶ 익스테리어 디자인Ⅱ ▶ 파노라마 선루프 ▶ 나파가죽 시트 (카멜/그레이지/네이비) 왼손 왼발 장애 30,245,455(3,024,545) 우측방향지시기, 선회장치 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 왼손 오른발 장애 30,200,000(3,020,000) 우측방향지시기, 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른손 오른발 장애 30,200,000(3,020,000) 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른발 장애 30,254,545(3,025,455) 좌측 엑셀레이터 페달 *무릎 에어백 미적용 양발 장애 30,481,818(3,048,182) 브레이크 & 엑셀레이터조절장치 선회장치 *무릎 에어백, 수동식 틸트 & 텔레스코픽 스티어링 휠 운전석 공조 연동 자동 제어 미적용 오른손 장애 30,245,455(3,024,545) 선회장치 *운전석 공조 연동 자동 제어 미적용",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘나타 디 엣지|가솔린 2.0|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스) Ⅱ(2열 편의) 2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스"
  },
  "쏘나타 디 엣지|가솔린 2.0|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "쏘나타 디 엣지|가솔린 2.0|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "파노라마 선루프"
  },
  "쏘나타 디 엣지|가솔린 2.0|인스퍼레이션": {
    "파노라마 선루프": "파노라마 선루프",
    "BOSE 프리미엄 사운드": "▶ 빌트인 캠 2 + 증강현실 내비게이션 ▶ 파킹 어시스트Ⅱ ▶ 컴포트Ⅲ(2열 편의) ▶ 익스테리어 디자인Ⅱ ▶ 파노라마 선루프 ▶ 나파가죽 시트 (카멜/그레이지/네이비) 왼손 왼발 장애 30,245,455(3,024,545) 우측방향지시기, 선회장치 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 왼손 오른발 장애 30,200,000(3,020,000) 우측방향지시기, 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른손 오른발 장애 30,200,000(3,020,000) 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른발 장애 30,254,545(3,025,455) 좌측 엑셀레이터 페달 *무릎 에어백 미적용 양발 장애 30,481,818(3,048,182) 브레이크 & 엑셀레이터조절장치 선회장치 *무릎 에어백, 수동식 틸트 & 텔레스코픽 스티어링 휠 운전석 공조 연동 자동 제어 미적용 오른손 장애 30,245,455(3,024,545) 선회장치 *운전석 공조 연동 자동 제어 미적용",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 1": {
    "현대 스마트센스Ⅱ": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "인포테인먼트 내비Ⅲ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그) 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "익스테리어 디자인Ⅲ": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스 + ECM 룸미러": "하이패스 + ECM 룸미러"
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 2": {
    "현대 스마트센스Ⅱ": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "플래티넘Ⅱ": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)",
    "컴포트Ⅲ(2열 편의)": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)",
    "파노라마 선루프": "파노라마 선루프",
    "빌트인 캠 2 + 증강현실 내비게이션": "빌트인 캠 2 + 증강현실 내비게이션"
  },
  "아반떼|가솔린 1.6|스마트": {
    "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함) 인포테인먼트 내비 10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
    "인포테인먼트 내비 추가 선택 가능": "인포테인먼트 내비 추가 선택 가능",
    "하이패스": "하이패스",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "17인치 알로이 휠 & 타이어Ⅰ": "Ⅱ"
  },
  "아반떼|가솔린 1.6|모던": {
    "선루프": "선루프",
    "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "컴포트Ⅰ": "운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way), 현대 디지털 키 2 터치, 스마트폰 무선충전, 2열 열선시트, 2열 암레스트 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓",
    "17인치 알로이 휠 & 타이어Ⅱ": "BUSINESS CAR /// RENT A CAR 렌터카 Smart (스마트) 19,027,273(1,902,727) • 파워트레인/성능 : LPi 1.6 엔진, 6단 자동변속기, 디스크 브레이크, 통합주행모드 • 안전 : 8에어백 시스템(1열 어드밴스드/사이드, 2열 사이드, 전복대응 커튼), 유아용 시트 고정장치(2열 2개) 세이프티 언락, 타이어 응급처치 키트, 개별 타이어 공기압 경보장치, 실내 소화기 • 지능형 안전 기술 : 전방 충돌방지 보조(차량/보행자/자전거 탑승자/교차로 대향차/정면 대향차), 차로 유지 보조 차로 이탈방지 보조, 운전자 주의 경고, 하이빔 보조, 전방 차량 출발 알림, 지능형 속도 제한 보조 • 외관 : 네오트로닉 블랙 라디에이터 그릴, Full LED 헤드램프(MFR 타입), LED 주간주행등(DRL, 포지셔닝 포함), 보조제동등 15인치 알로이 휠 & 타이어, 아웃사이드 미러(열선, 전동접이, 전동조절, LED 방향지시등) • 내장 : 클러스터(4.2인치 컬러 LCD), 룸램프, 인조가죽 적용 내장(도어 센터트림) • 시트 : 인조가죽 시트, 운전석 수동 높이 조절, 2열 높이조절 헤드레스트(센터 제외) • 편의 : 버튼시동 & 스마트키, 스마트키 원격시동, 웰컴 시스템, 스마트 트렁크, 도어 포켓 라이팅(앞), 파워 윈도우 마이크로 에어 필터, 수동식 틸트 & 텔레스코픽 스티어링 휠, 스티어링 휠 리모컨, ECM 룸미러 USB-C 충전기(1열 1개, 2열 2개), 크루즈 컨트롤, 오토 라이트 컨트롤, 후석 승객 알림, 후방 모니터 (조향 연동, 주행 중 후방 뷰), 전방 주차 거리 경고, 후방 주차 거리 경고 • 인포테인먼트 : 8인치 디스플레이 오디오(6스피커, 라디오, MP3, 블루투스 핸즈프리, 무선 폰 프로젝션 포함) ▶ 컨비니언스 ┗ 인포테인먼트 내비 추가 선택 가능 [750,000] ▶ 하이패스 ▶ 현대 스마트센스 ▶ 17인치 알로이 휠 & 타이어Ⅰ (15인치 → 17인치) Modern (모던) 21,836,364(2,183,636) ▶ 스마트 기본 품목 및 • 지능형 안전 기술 : 고속도로 주행보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) • 외관 : 16인치 알로이 휠 & 타이어 • 내장 : 가죽 스티어링 휠(열선 포함), 가죽 변속기 노브, 선바이저 램프, 깊이 가변형 컵홀더, 앰비언트 무드램프 • 시트 : 1열 열선/통풍시트 • 편의 : 전동식 파킹 브레이크(오토홀드 포함), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/ 애프터블로우 포함), 운전석 공조 연동 자동 제어, 2열 에어벤트, 세이프티 파워 윈도우(운전석), 하이패스 • 인포테인먼트 : 10.25인치 내비게이션 (블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드) 내비게이션 무선 업데이트 ▶ 선루프 ▶ 파킹 어시스트 플러스 ▶ 익스테리어 디자인 ▶ 현대 스마트센스 ▶ 컴포트Ⅱ ▶ 17인치 알로이 휠 & 타이어Ⅱ (16인치 → 17인치)",
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "선루프": "선루프",
    "빌트인 캠(보조배터리 포함)*": "빌트인 캠, 보조배터리",
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "시트 컴포트 플러스": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) ※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용 패키지 품목",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|가솔린|블랙 잉크": {},
  "더 뉴 그랜저|가솔린|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "더 뉴 그랜저|가솔린|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행) 1열 모니터링 시스템(영상회의 지원)",
    "시트 컴포트Ⅰ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "스마트스트림 가솔린 3.5 엔진": "스마트스트림 가솔린 3.5 엔진",
    "파노라마 선루프": "파노라마 선루프",
    "HTRAC": "HTRAC",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "스마트 카드키": "Essential Acc. 패키지 스마트 비전 루프 선쉐이드 20인치 고휘도 스퍼터링 휠 무선 청소기 차량 보호 필름 2 블랙 루프 스킨 빌트인 공기청정기 2.0 무선 에어건 카향수(쿨 아쿠아)"
  },
  "더 뉴 그랜저|하이브리드|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "더 뉴 그랜저|하이브리드|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 시스템(영상회의 지원)",
    "시트 컴포트Ⅱ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14 스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "파노라마 선루프": "파노라마 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus"
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "시트 컴포트 플러스": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) ※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용 패키지 품목 세레니티 화이트 펄 W6H 바이오필릭 블루 펄 XB9 어비스 블랙 펄 A2B 녹턴 그레이 메탈릭 T2G",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|하이브리드|블랙 잉크": {
    "스마트 카드키": "스마트 카드키"
  },
  "베뉴|가솔린 1.6|스마트": {
    "하이패스": "하이패스",
    "내비게이션 패키지": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "베뉴|가솔린 1.6|프리미엄": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "스타일": "17인치 알로이 휠 & 타이어, 루프랙",
    "테크": "스마트폰 무선충전, 디지털 키 2 터치 패키지 품목"
  },
  "베뉴|가솔린 1.6|플럭스": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "17인치 블랙 알로이 휠": "17인치 블랙 알로이 휠",
    "적외선 무릎 워머": "적외선 무릎 워머",
    "인조가죽 시트 + 1열 열선시트": "인조가죽 시트 + 1열 열선시트"
  },
  "코나|가솔린|모던": {
    "내비게이션 패키지Ⅰ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) 포함 Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나|가솔린|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "스타일 Lite": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나|가솔린|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "19인치 알로이 휠 & 타이어": "19인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나|가솔린|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "코나|가솔린|블랙 익스테리어": {},
  "코나|가솔린|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "HTRAC(험로주행모드)": "HTRAC(험로주행모드)",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "코나 하이브리드|하이브리드|모던": {
    "내비게이션 패키지Ⅱ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "스타일Ⅰ": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "18인치 알로이 휠 & 타이어": "18인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나 하이브리드|하이브리드|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "코나 하이브리드|하이브리드|블랙 익스테리어": {},
  "코나 하이브리드|하이브리드|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "캐스퍼|가솔린 1.0|스마트": {
    "선루프": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시",
    "17인치 알로이 휠 패키지": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "캐스퍼|가솔린 1.0|디 에센셜": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "캐스퍼|가솔린 1.0|인스퍼레이션": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "투싼|가솔린 1.6 터보|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함) 레인센서, 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|가솔린 1.6 터보|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|인스퍼레이션": {
    "베스트 셀렉션Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|가솔린 1.6 터보|블랙 익스테리어": {},
  "투싼|가솔린 1.6 터보|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝",
    "HTRAC": "HTRAC"
  },
  "투싼|하이브리드|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비(HEV)": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|하이브리드|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|인스퍼레이션": {
    "베스트 셀렉션Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|하이브리드|블랙 익스테리어": {},
  "투싼|하이브리드|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝"
  },
  "싼타페|가솔린 2.5 터보|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "싼타페|가솔린 2.5 터보|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "디자인 플러스Ⅰ": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능 Ⅱ 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|가솔린 2.5 터보|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|가솔린 2.5 터보|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|가솔린 2.5 터보|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|하이브리드|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "싼타페|하이브리드|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "디자인 플러스Ⅱ": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "20인치 휠 & 타이어",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|하이브리드|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  },
  "디 올 뉴 팰리세이드|하이브리드|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  }
};
Object.assign(trimOptionDetailOverrides, v28TrimOptionDetailOverrides);



/* v29: 쏘나타 컴포트Ⅰ/Ⅱ/Ⅲ 상세내용 수동 팩트체크 정정
   근거: sonata-the-edge2026-price.pdf 패키지 품목 표
*/
(function () {
  const sonataKeys = Object.keys(trimOptionDetailOverrides || {})
    .filter((key) => key.startsWith("쏘나타 디 엣지|"));

  sonataKeys.forEach((key) => {
    trimOptionDetailOverrides[key] = trimOptionDetailOverrides[key] || {};

    if (Object.prototype.hasOwnProperty.call(trimOptionDetailOverrides[key], "컴포트Ⅰ(1열 편의)")) {
      trimOptionDetailOverrides[key]["컴포트Ⅰ(1열 편의)"] = "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)";
    }

    if (Object.prototype.hasOwnProperty.call(trimOptionDetailOverrides[key], "컴포트Ⅱ(2열 편의)")) {
      trimOptionDetailOverrides[key]["컴포트Ⅱ(2열 편의)"] = "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트";
    }

    if (Object.prototype.hasOwnProperty.call(trimOptionDetailOverrides[key], "컴포트Ⅲ(2열 편의)")) {
      trimOptionDetailOverrides[key]["컴포트Ⅲ(2열 편의)"] = "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)";
    }
  });

  if (optionLibrary["컴포트Ⅰ(1열 편의)"]) optionLibrary["컴포트Ⅰ(1열 편의)"].desc = "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)";
  if (optionLibrary["컴포트Ⅱ(2열 편의)"]) optionLibrary["컴포트Ⅱ(2열 편의)"].desc = "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트";
  if (optionLibrary["컴포트Ⅲ(2열 편의)"]) optionLibrary["컴포트Ⅲ(2열 편의)"].desc = "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)";
})();

/* v30: 전체 차량 옵션 상세내용 재검수 및 의심 문구 제거 */
const v30CarUpdates = {
  "쏘나타 디 엣지": {
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "29,330,000원",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 1.6 터보 에스",
            "price": "30,650,000원",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 1.6 터보 익스클루시브",
            "price": "33,730,000원",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "36,660,000원",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "가솔린 2.0": {
        "displayFuel": "가솔린 2.0",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 2.0 프리미엄",
            "price": "29,330,000원",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 2.0 에스",
            "price": "30,650,000원",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 2.0 익스클루시브",
            "price": "33,730,000원",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 2.0 인스퍼레이션",
            "price": "36,660,000원",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "렌터카 LPG": {
        "displayFuel": "렌터카 LPG",
        "trims": {
          "Business 1": {
            "displayTrim": "렌터카 LPG Business 1",
            "price": "25,600,000원",
            "options": [
              "현대 스마트센스Ⅱ",
              "인포테인먼트 내비Ⅲ",
              "컴포트Ⅰ(1열 편의)",
              "익스테리어 디자인Ⅲ",
              "하이패스 + ECM 룸미러"
            ]
          },
          "Business 2": {
            "displayTrim": "렌터카 LPG Business 2",
            "price": "29,840,000원",
            "options": [
              "현대 스마트센스Ⅱ",
              "플래티넘Ⅱ",
              "컴포트Ⅲ(2열 편의)",
              "파노라마 선루프",
              "빌트인 캠 2 + 증강현실 내비게이션"
            ]
          }
        }
      }
    }
  },
  "아반떼": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "20,620,000원",
            "options": [
              "컨비니언스",
              "인포테인먼트 내비 추가 선택 가능",
              "하이패스",
              "현대 스마트센스",
              "17인치 알로이 휠 & 타이어Ⅰ"
            ]
          },
          "모던": {
            "displayTrim": "가솔린 1.6 모던",
            "price": "23,880,000원",
            "options": [
              "선루프",
              "파킹 어시스트 플러스",
              "익스테리어 디자인",
              "현대 스마트센스",
              "컴포트Ⅰ",
              "17인치 알로이 휠 & 타이어Ⅱ",
              "세이지 그린 인테리어 컬러"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 인스퍼레이션",
            "price": "27,560,000원",
            "options": [
              "선루프",
              "빌트인 캠(보조배터리 포함)*",
              "세이지 그린 인테리어 컬러"
            ]
          }
        }
      }
    }
  },
  "더 뉴 그랜저": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "캘리그래피": {
            "displayTrim": "가솔린 캘리그래피",
            "price": "53,100,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 블랙 잉크",
            "price": "54,000,000원",
            "options": []
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "42,450,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 익스클루시브",
            "price": "46,940,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅰ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "스마트스트림 가솔린 3.5 엔진",
              "파노라마 선루프",
              "HTRAC",
              "빌트인 캠 2 Plus",
              "스마트 카드키"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "49,330,000원",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스"
            ]
          },
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "53,820,000원",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "59,990,000원",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "60,890,000원",
            "options": [
              "스마트 카드키"
            ]
          }
        }
      }
    }
  },
  "베뉴": {
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "19,940,000원",
            "options": [
              "하이패스",
              "내비게이션 패키지"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 프리미엄",
            "price": "22,920,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "스타일",
              "테크"
            ]
          },
          "플럭스": {
            "displayTrim": "가솔린 1.6 플럭스",
            "price": "24,400,000원",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "17인치 블랙 알로이 휠",
              "적외선 무릎 워머",
              "인조가죽 시트 + 1열 열선시트"
            ]
          }
        }
      }
    }
  },
  "코나": {
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 모던",
            "price": "24,630,000원",
            "options": [
              "내비게이션 패키지Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 H-Pick",
            "price": "26,850,000원",
            "options": [
              "베스트 셀렉션",
              "스타일 Lite",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "29,150,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "19인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 인스퍼레이션",
            "price": "31,460,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 블랙 익스테리어",
            "price": "31,810,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 N Line",
            "price": "32,450,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "HTRAC(험로주행모드)",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "코나 하이브리드": {
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "30,380,000원",
            "options": [
              "내비게이션 패키지Ⅱ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "32,200,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "스타일Ⅰ",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "34,670,000원",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "18인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "36,630,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "36,980,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "37,620,000원",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "와이드 선루프",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스",
              "알칸타라 인테리어 패키지"
            ]
          }
        }
      }
    }
  },
  "캐스퍼": {
    "fuels": {
      "가솔린 1.0": {
        "displayFuel": "가솔린 1.0",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.0 스마트",
            "price": "14,930,000원",
            "options": [
              "선루프",
              "17인치 알로이 휠 패키지"
            ]
          },
          "디 에센셜": {
            "displayTrim": "가솔린 1.0 디 에센셜",
            "price": "17,710,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.0 인스퍼레이션",
            "price": "20,170,000원",
            "options": [
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          }
        }
      }
    }
  },
  "투싼": {
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 1.6 터보 모던",
            "price": "28,440,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ",
              "인포테인먼트 내비",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "31,120,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 1.6 터보 H-Pick",
            "price": "32,010,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "34,560,000원",
            "options": [
              "베스트 셀렉션Ⅲ(가솔린)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅲ(가솔린)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 1.6 터보 블랙 익스테리어",
            "price": "35,010,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "가솔린 1.6 터보 N Line",
            "price": "35,410,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝",
              "HTRAC"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "34,180,000원",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ(HEV)",
              "인포테인먼트 내비(HEV)",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "36,650,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "37,490,000원",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "40,170,000원",
            "options": [
              "베스트 셀렉션Ⅳ(HEV)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅳ(HEV)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "40,620,000원",
            "options": []
          },
          "N Line": {
            "displayTrim": "하이브리드 N Line",
            "price": "40,820,000원",
            "options": [
              "미쉐린 타이어",
              "라이프 스타일",
              "사이드 스텝",
              "블랙 사이드스텝"
            ]
          }
        }
      }
    }
  },
  "싼타페": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "36,570,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "39,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅰ"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 2.5 터보 H-Pick",
            "price": "42,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 2.5 터보 블랙 익스테리어",
            "price": "42,440,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 2.5 터보 블랙 잉크",
            "price": "45,470,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "41,220,000원",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "44,090,000원",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅱ",
              "20인치 휠 & 타이어"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "46,730,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "47,080,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "49,770,000원",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        }
      }
    }
  },
  "디 올 뉴 팰리세이드": {
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "43,830,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "49,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "55,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "49,820,000원",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "55,360,000원",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "61,860,000원",
            "options": [
              "프리뷰 전자제어 서스펜션",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus",
              "사이드스텝",
              "빌트인 공기청정기"
            ]
          }
        }
      }
    }
  }
};

Object.entries(v30CarUpdates).forEach(([carName, carData]) => {
  dashboardData.cars[carName] = dashboardData.cars[carName] || { colors: {}, fuels: {} };
  dashboardData.cars[carName].fuels = dashboardData.cars[carName].fuels || {};
  Object.entries(carData.fuels || {}).forEach(([engineName, engineData]) => {
    const prevEngine = dashboardData.cars[carName].fuels[engineName] || {};
    dashboardData.cars[carName].fuels[engineName] = {
      ...prevEngine,
      ...engineData,
      colors: prevEngine.colors || engineData.colors
    };
  });
});
if (typeof vehicleColorOverrides !== "undefined") {
  Object.entries(vehicleColorOverrides).forEach(([key, colors]) => {
    const [carName, engineName] = key.split('|');
    if (dashboardData.cars?.[carName]?.fuels?.[engineName]) {
      dashboardData.cars[carName].fuels[engineName].colors = colors;
      dashboardData.cars[carName].colors = dashboardData.cars[carName].colors || colors;
    }
  });
}
const v30OptionLibraryUpdates = {
  "인포테인먼트 내비Ⅰ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "파킹 어시스트Ⅰ": {
    "price": "1,680,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능"
  },
  "현대 스마트센스Ⅰ": {
    "price": "1,100,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)"
  },
  "컴포트Ⅰ(1열 편의)": {
    "price": "610,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)"
  },
  "컴포트Ⅱ(2열 편의)": {
    "price": "670,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트"
  },
  "익스테리어 디자인Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "하이패스": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스"
  },
  "플래티넘Ⅰ": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 스마트폰 무선충전(듀얼)"
  },
  "파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프"
  },
  "BOSE 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드"
  },
  "빌트인 캠 2, 증강현실 내비게이션": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "현대 스마트센스Ⅱ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 시스템(영상회의 지원)"
  },
  "인포테인먼트 내비Ⅲ": {
    "price": "1,300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그) 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "익스테리어 디자인Ⅲ": {
    "price": "380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "하이패스 + ECM 룸미러": {
    "price": "230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스 + ECM 룸미러"
  },
  "플래티넘Ⅱ": {
    "price": "1,170,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "컴포트Ⅲ(2열 편의)": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)"
  },
  "빌트인 캠 2 + 증강현실 내비게이션": {
    "price": "420,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2 + 증강현실 내비게이션"
  },
  "컨비니언스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 테일게이트, 스마트폰 무선 충전"
  },
  "인포테인먼트 내비 추가 선택 가능": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인포테인먼트 내비 추가 선택 가능"
  },
  "현대 스마트센스": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림"
  },
  "17인치 알로이 휠 & 타이어Ⅰ": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Ⅱ"
  },
  "선루프": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시"
  },
  "파킹 어시스트 플러스": {
    "price": "1,290,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조"
  },
  "익스테리어 디자인": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등"
  },
  "컴포트Ⅰ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "17인치 알로이 휠 & 타이어Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BUSINESS CAR /// RENT A CAR 렌터카 Smart (스마트) 19,027,273(1,902,727) • 파워트레인/성능 : LPi 1.6 엔진, 6단 자동변속기, 디스크 브레이크, 통합주행모드 • 안전 : 8에어백 시스템(1열 어드밴스드/사이드, 2열 사이드, 전복대응 커튼), 유아용 시트 고정장치(2열 2개) 세이프티 언락, 타이어 응급처치 키트, 개별 타이어 공기압 경보장치, 실내 소화기 • 지능형 안전 기술 : 전방 충돌방지 보조(차량/보행자/자전거 탑승자/교차로 대향차/정면 대향차), 차로 유지 보조 차로 이탈방지 보조, 운전자 주의 경고, 하이빔 보조, 전방 차량 출발 알림, 지능형 속도 제한 보조 • 외관 : 네오트로닉 블랙 라디에이터 그릴, Full LED 헤드램프(MFR 타입), LED 주간주행등(DRL, 포지셔닝 포함), 보조제동등 15인치 알로이 휠 & 타이어, 아웃사이드 미러(열선, 전동접이, 전동조절, LED 방향지시등) • 내장 : 클러스터(4.2인치 컬러 LCD), 룸램프, 인조가죽 적용 내장(도어 센터트림) • 시트 : 인조가죽 시트, 운전석 수동 높이 조절, 2열 높이조절 헤드레스트(센터 제외) • 편의 : 버튼시동 & 스마트키, 스마트키 원격시동, 웰컴 시스템, 스마트 트렁크, 도어 포켓 라이팅(앞), 파워 윈도우 마이크로 에어 필터, 수동식 틸트 & 텔레스코픽 스티어링 휠, 스티어링 휠 리모컨, ECM 룸미러 USB-C 충전기(1열 1개, 2열 2개), 크루즈 컨트롤, 오토 라이트 컨트롤, 후석 승객 알림, 후방 모니터 (조향 연동, 주행 중 후방 뷰), 전방 주차 거리 경고, 후방 주차 거리 경고 • 인포테인먼트 : 8인치 디스플레이 오디오(6스피커, 라디오, MP3, 블루투스 핸즈프리, 무선 폰 프로젝션 포함) ▶ 컨비니언스 ┗ 인포테인먼트 내비 추가 선택 가능 [750,000] ▶ 하이패스 ▶ 현대 스마트센스 ▶ 17인치 알로이 휠 & 타이어Ⅰ (15인치 → 17인치) Modern (모던) 21,836,364(2,183,636) ▶ 스마트 기본 품목 및 • 지능형 안전 기술 : 고속도로 주행보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) • 외관 : 16인치 알로이 휠 & 타이어 • 내장 : 가죽 스티어링 휠(열선 포함), 가죽 변속기 노브, 선바이저 램프, 깊이 가변형 컵홀더, 앰비언트 무드램프 • 시트 : 1열 열선/통풍시트 • 편의 : 전동식 파킹 브레이크(오토홀드 포함), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/ 애프터블로우 포함), 운전석 공조 연동 자동 제어, 2열 에어벤트, 세이프티 파워 윈도우(운전석), 하이패스 • 인포테인먼트 : 10.25인치 내비게이션 (블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드) 내비게이션 무선 업데이트 ▶ 선루프 ▶ 파킹 어시스트 플러스 ▶ 익스테리어 디자인 ▶ 현대 스마트센스 ▶ 컴포트Ⅱ ▶ 17인치 알로이 휠 & 타이어Ⅱ (16인치 → 17인치)"
  },
  "세이지 그린 인테리어 컬러": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Inspiration (인스퍼레이션) 25,054,545(2,505,455) ▶ 모던 기본 품목 및 • 지능형 안전 기술 : 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 후방 주차 충돌방지 보조, 안전 하차 경고, 진동 경고 스티어링 휠 • 외관 : 17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프 LED 보조제동등, 크롬 벨트라인 몰딩, 에어로 타입 와이퍼, 이중접합 차음 유리(윈드실드) • 내장 : 파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스) LED 실내등(맵램프, 룸램프, 선바이저 램프), 소프트 페인트 내장재(동승석 크래시 패드 가니시, 도어 트림 상단) • 시트 : 천연가죽 시트, 운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way) 2열 열선시트, 2열 암레스트, 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓 • 편의 : 스마트폰 무선충전, 현대 디지털 키 2 터치, 서라운드 뷰 모니터, 후측방 모니터 • 인포테인먼트 : BOSE 프리미엄 사운드(8스피커, 외장앰프 포함) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)* ▶ 세이지 그린 인테리어 컬러 N Line (N 라인) 28,450,000 25,863,636(2,586,364) ▶ 인스퍼레이션 기본 품목 및 • 성능 : 후륜 멀티링크 서스펜션 • 외관 : N Line 전용 디자인(프론트/리어범퍼, 라디에이터 그릴, 18인치 알로이 휠 & 타이어 유광 블랙 DLO 몰딩(벨트라인 포함), 립타입 리어 스포일러, 사이드 스커트, 리어 디퓨저, 싱글 트윈 팁 머플러 블랙 아웃사이드 미러 커버, N Line 엠블럼) • 내장 : N Line 전용 내장 디자인(반펀칭 가죽 스티어링 휠(열선, 레드 스티치 포함), 가죽 변속기 노브(레드 스티치 포함) 블랙 헤드라이닝 & 선바이저 & 필라트림, 도어 센터트림 레드 스티치, 패들쉬프트, 메탈 페달 & 풋 레스트) • 시트 : N Line 전용 천연가죽 시트(레드 스티치 & 파이핑, 착좌면 N 로고 스웨이드 패치 적용) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)*"
  },
  "빌트인 캠(보조배터리 포함)*": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠, 보조배터리"
  },
  "20인치 알로이 휠 & 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어"
  },
  "시트 컴포트 플러스": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "▶ 스마트 비전 루프 ※ 파노라마 선루프 중복 선택 불가 블랙 잉크 (블랙 잉크) 60,890,000 55,354,545(5,535,455) 59,890,000 ▶ 캘리그래피 기본 품목 및 • 외관 : 블랙 잉크 전용 블랙 외관 디자인(라디에이터 그릴, 범퍼 그릴, 범퍼 몰딩, 램프 몰딩 사이드 가니시, 오토 플러시 도어 핸들 데코,DLO 몰딩, 엠블럼) 20인치 블랙 잉크 전용 블랙 알로이 휠 & 피렐리 타이어 • 내장 : 블랙 잉크 전용 블랙 내장 디자인(블랙 컬러 리얼 알루미늄 내장재 블랙 컬러 인조가죽 감싸기 및 스웨이드 내장재, 블랙 컬러 도어스텝, 스피커 그릴 등) ※ 외장 색상 : 어비스 블랙 펄, 세레니티 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 모노톤 ※ 20인치 알로이 휠 & 타이어(캘리그래피) 옵션 선택 불가 ※ 해당 세제혜택 후 가격은 『환경친화적 자동차의 개발 및 보급 촉진에 관한 법률』에 따른 친환경자동차 기준을 충족함을 전제로 세제혜택 효과를 반영한 대략적인 가격이며 친환경자동차 기준 충족 여부에 따라 차량 가격이 변경될 수 있습니다."
  },
  "스마트 비전 루프": {
    "price": "1,800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 비전 루프"
  },
  "파킹 어시스트": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조"
  },
  "프리미엄 초이스": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "플래티넘": {
    "price": "1,710,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "시트 컴포트Ⅰ": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)"
  },
  "BOSE 프리미엄 사운드 패키지": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14 스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)"
  },
  "스마트스트림 가솔린 3.5 엔진": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트스트림 가솔린 3.5 엔진"
  },
  "HTRAC": {
    "price": "1,980,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC"
  },
  "빌트인 캠 2 Plus": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2 Plus"
  },
  "스마트 카드키": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 카드키"
  },
  "시트 컴포트Ⅱ": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가"
  },
  "내비게이션 패키지": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "투톤 컬러 루프": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "투톤 컬러 루프"
  },
  "스타일": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 루프랙"
  },
  "테크": {
    "price": "350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2 터치 패키지 품목"
  },
  "17인치 블랙 알로이 휠": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 블랙 알로이 휠"
  },
  "적외선 무릎 워머": {
    "price": "280,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "적외선 무릎 워머"
  },
  "인조가죽 시트 + 1열 열선시트": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트 + 1열 열선시트"
  },
  "내비게이션 패키지Ⅰ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "컴포트 초이스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "베스트 셀렉션": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "스타일 Lite": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)"
  },
  "현대 스마트센스Ⅲ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ"
  },
  "클러스터(12.3인치 컬러 LCD)": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "▶ 현대 스마트센스Ⅲ ▶ 클러스터(12.3인치 컬러 LCD) ▶ 스타일Ⅰ ▶ 파킹어시스트 ※ 클러스터 선택 시 ▶ 컨비니언스 ▶ 빌트인 캠 2, 증강현실 내비게이션 Premium (프리미엄) 31,518,182 (3,151,818) ▶ H-Pick 기본 품목 및 • 외관 : 실버 스키드 플레이트, 다크그레이 컬러 도장 클래딩/사이드 몰딩/범퍼 벨트라인 크롬몰딩, 스포일러 가니쉬, 도어 포켓 라이팅(1열) Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤) • 내장 : 직물 루프 트림, 앰비언트 무드램프 • 시트 : 2열 암레스트 • 편의 : 하이패스, 커버링 쉘프, 스마트 파워 테일게이트, 스마트폰 무선 충전, 디지털 키 2 터치 터치타입 아웃사이드 도어 핸들(1열) ▶ 베스트 셀렉션 - 현대 스마트센스Ⅲ"
  },
  "파킹어시스트": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "시트플러스": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템"
  },
  "19인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 타이어"
  },
  "실내 컬러 패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "에코패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "HTRAC(험로주행모드)": {
    "price": "2,030,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC(험로주행모드)"
  },
  "와이드 선루프": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "와이드 선루프"
  },
  "알칸타라 인테리어 패키지": {
    "price": "370,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "알칸타라 인테리어 패키지"
  },
  "내비게이션 패키지Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "스타일Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프"
  },
  "18인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "18인치 알로이 휠 & 타이어"
  },
  "17인치 알로이 휠 패키지": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "실내 컬러 패키지(베이지/오렌지 브라운)": {
    "price": "900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "파노라마 선루프 + 루프랙": {
    "price": "1,160,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 선루프 + 루프랙"
  },
  "인포테인먼트 내비": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함) 레인센서, 하이패스"
  },
  "익스테리어 디자인Ⅱ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "익스테리어 디자인Ⅱ"
  },
  "파킹어시스트Ⅰ(가솔린)": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "컴포트Ⅱ": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "컴포트Ⅱ"
  },
  "베스트 셀렉션Ⅲ(가솔린)": {
    "price": "1,220,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅲ(가솔린)": {
    "price": "830,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린)"
  },
  "19인치 알로이 휠 & 미쉐린 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "미쉐린 타이어": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "미쉐린 타이어"
  },
  "라이프 스타일": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "사이드 스텝": {
    "price": "340,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드 스텝"
  },
  "블랙 사이드스텝": {
    "price": "390,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙 사이드스텝"
  },
  "익스테리어 디자인Ⅰ(HEV)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "인포테인먼트 내비(HEV)": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스"
  },
  "파킹어시스트Ⅱ(HEV)": {
    "price": "1,530,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "베스트 셀렉션Ⅳ(HEV)": {
    "price": "1,520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다."
  },
  "파킹어시스트Ⅳ(HEV)": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV)"
  },
  "듀얼 와이드 선루프 + 루프랙": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 와이드 선루프 + 루프랙"
  },
  "동승석 8way 전동시트": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "동승석 8way 전동시트"
  },
  "헤드업디스플레이": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업디스플레이"
  },
  "파킹 어시스트 플러스Ⅰ": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "베스트 셀렉션Ⅰ": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "듀얼 와이드 선루프": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "▶ 빌트인 캠 2 Plus 증강현실 내비게이션"
  },
  "디자인 플러스Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능 Ⅱ 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "20인치 휠 & 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Black Exterior (블랙 익스테리어) 42,800,000(4,280,000) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩 사이드 가니시, O/S 도어 핸들, C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드"
  },
  "HTRAC, 험로주행모드": {
    "price": "2,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "HTRAC, 험로주행모드"
  },
  "6인승": {
    "price": "1,040,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "7인승": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "블랙잉크 플러스": {
    "price": "940,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "공통 선택 품목 ▶ 빌트인 캠 2, 증강현실 내비게이션 ▶ 6인승 ▶ 7인승"
  },
  "디자인 플러스Ⅱ": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "컴포트": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트"
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "원격 스마트 주차 보조"
  },
  "사이드스텝": {
    "price": "430,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "사이드스텝"
  },
  "빌트인 공기청정기": {
    "price": "520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "[7인승 55만원 / 9인승 52만원]"
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  }
};
Object.assign(optionLibrary, v30OptionLibraryUpdates);
const v30TrimOptionDetailOverrides = {
  "쏘나타 디 엣지|가솔린 1.6 터보|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "파노라마 선루프"
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|인스퍼레이션": {
    "파노라마 선루프": "파노라마 선루프",
    "BOSE 프리미엄 사운드": "▶ 빌트인 캠 2 + 증강현실 내비게이션 ▶ 파킹 어시스트Ⅱ ▶ 컴포트Ⅲ(2열 편의) ▶ 익스테리어 디자인Ⅱ ▶ 파노라마 선루프 ▶ 나파가죽 시트 (카멜/그레이지/네이비) 왼손 왼발 장애 30,245,455(3,024,545) 우측방향지시기, 선회장치 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 왼손 오른발 장애 30,200,000(3,020,000) 우측방향지시기, 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른손 오른발 장애 30,200,000(3,020,000) 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른발 장애 30,254,545(3,025,455) 좌측 엑셀레이터 페달 *무릎 에어백 미적용 양발 장애 30,481,818(3,048,182) 브레이크 & 엑셀레이터조절장치 선회장치 *무릎 에어백, 수동식 틸트 & 텔레스코픽 스티어링 휠 운전석 공조 연동 자동 제어 미적용 오른손 장애 30,245,455(3,024,545) 선회장치 *운전석 공조 연동 자동 제어 미적용",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘나타 디 엣지|가솔린 2.0|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), 레인센서, 앰비언트 무드램프 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스"
  },
  "쏘나타 디 엣지|가솔린 2.0|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 ※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "쏘나타 디 엣지|가솔린 2.0|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "파노라마 선루프"
  },
  "쏘나타 디 엣지|가솔린 2.0|인스퍼레이션": {
    "파노라마 선루프": "파노라마 선루프",
    "BOSE 프리미엄 사운드": "▶ 빌트인 캠 2 + 증강현실 내비게이션 ▶ 파킹 어시스트Ⅱ ▶ 컴포트Ⅲ(2열 편의) ▶ 익스테리어 디자인Ⅱ ▶ 파노라마 선루프 ▶ 나파가죽 시트 (카멜/그레이지/네이비) 왼손 왼발 장애 30,245,455(3,024,545) 우측방향지시기, 선회장치 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 왼손 오른발 장애 30,200,000(3,020,000) 우측방향지시기, 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른손 오른발 장애 30,200,000(3,020,000) 선회장치 좌측 엑셀레이터 페달 *무릎 에어백, 운전석 공조 연동 자동 제어 미적용 오른발 장애 30,254,545(3,025,455) 좌측 엑셀레이터 페달 *무릎 에어백 미적용 양발 장애 30,481,818(3,048,182) 브레이크 & 엑셀레이터조절장치 선회장치 *무릎 에어백, 수동식 틸트 & 텔레스코픽 스티어링 휠 운전석 공조 연동 자동 제어 미적용 오른손 장애 30,245,455(3,024,545) 선회장치 *운전석 공조 연동 자동 제어 미적용",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 1": {
    "현대 스마트센스Ⅱ": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "인포테인먼트 내비Ⅲ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그) 레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "익스테리어 디자인Ⅲ": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스 + ECM 룸미러": "하이패스 + ECM 룸미러"
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 2": {
    "현대 스마트센스Ⅱ": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트 패키지 품목",
    "플래티넘Ⅱ": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)",
    "컴포트Ⅲ(2열 편의)": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)",
    "파노라마 선루프": "파노라마 선루프",
    "빌트인 캠 2 + 증강현실 내비게이션": "빌트인 캠 2 + 증강현실 내비게이션"
  },
  "아반떼|가솔린 1.6|스마트": {
    "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함) 인포테인먼트 내비 10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
    "인포테인먼트 내비 추가 선택 가능": "인포테인먼트 내비 추가 선택 가능",
    "하이패스": "하이패스",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "17인치 알로이 휠 & 타이어Ⅰ": "Ⅱ"
  },
  "아반떼|가솔린 1.6|모던": {
    "선루프": "선루프",
    "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "컴포트Ⅰ": "운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way), 현대 디지털 키 2 터치, 스마트폰 무선충전, 2열 열선시트, 2열 암레스트 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓",
    "17인치 알로이 휠 & 타이어Ⅱ": "BUSINESS CAR /// RENT A CAR 렌터카 Smart (스마트) 19,027,273(1,902,727) • 파워트레인/성능 : LPi 1.6 엔진, 6단 자동변속기, 디스크 브레이크, 통합주행모드 • 안전 : 8에어백 시스템(1열 어드밴스드/사이드, 2열 사이드, 전복대응 커튼), 유아용 시트 고정장치(2열 2개) 세이프티 언락, 타이어 응급처치 키트, 개별 타이어 공기압 경보장치, 실내 소화기 • 지능형 안전 기술 : 전방 충돌방지 보조(차량/보행자/자전거 탑승자/교차로 대향차/정면 대향차), 차로 유지 보조 차로 이탈방지 보조, 운전자 주의 경고, 하이빔 보조, 전방 차량 출발 알림, 지능형 속도 제한 보조 • 외관 : 네오트로닉 블랙 라디에이터 그릴, Full LED 헤드램프(MFR 타입), LED 주간주행등(DRL, 포지셔닝 포함), 보조제동등 15인치 알로이 휠 & 타이어, 아웃사이드 미러(열선, 전동접이, 전동조절, LED 방향지시등) • 내장 : 클러스터(4.2인치 컬러 LCD), 룸램프, 인조가죽 적용 내장(도어 센터트림) • 시트 : 인조가죽 시트, 운전석 수동 높이 조절, 2열 높이조절 헤드레스트(센터 제외) • 편의 : 버튼시동 & 스마트키, 스마트키 원격시동, 웰컴 시스템, 스마트 트렁크, 도어 포켓 라이팅(앞), 파워 윈도우 마이크로 에어 필터, 수동식 틸트 & 텔레스코픽 스티어링 휠, 스티어링 휠 리모컨, ECM 룸미러 USB-C 충전기(1열 1개, 2열 2개), 크루즈 컨트롤, 오토 라이트 컨트롤, 후석 승객 알림, 후방 모니터 (조향 연동, 주행 중 후방 뷰), 전방 주차 거리 경고, 후방 주차 거리 경고 • 인포테인먼트 : 8인치 디스플레이 오디오(6스피커, 라디오, MP3, 블루투스 핸즈프리, 무선 폰 프로젝션 포함) ▶ 컨비니언스 ┗ 인포테인먼트 내비 추가 선택 가능 [750,000] ▶ 하이패스 ▶ 현대 스마트센스 ▶ 17인치 알로이 휠 & 타이어Ⅰ (15인치 → 17인치) Modern (모던) 21,836,364(2,183,636) ▶ 스마트 기본 품목 및 • 지능형 안전 기술 : 고속도로 주행보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) • 외관 : 16인치 알로이 휠 & 타이어 • 내장 : 가죽 스티어링 휠(열선 포함), 가죽 변속기 노브, 선바이저 램프, 깊이 가변형 컵홀더, 앰비언트 무드램프 • 시트 : 1열 열선/통풍시트 • 편의 : 전동식 파킹 브레이크(오토홀드 포함), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/ 애프터블로우 포함), 운전석 공조 연동 자동 제어, 2열 에어벤트, 세이프티 파워 윈도우(운전석), 하이패스 • 인포테인먼트 : 10.25인치 내비게이션 (블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드) 내비게이션 무선 업데이트 ▶ 선루프 ▶ 파킹 어시스트 플러스 ▶ 익스테리어 디자인 ▶ 현대 스마트센스 ▶ 컴포트Ⅱ ▶ 17인치 알로이 휠 & 타이어Ⅱ (16인치 → 17인치)",
    "세이지 그린 인테리어 컬러": "Inspiration (인스퍼레이션) 25,054,545(2,505,455) ▶ 모던 기본 품목 및 • 지능형 안전 기술 : 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 후방 주차 충돌방지 보조, 안전 하차 경고, 진동 경고 스티어링 휠 • 외관 : 17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프 LED 보조제동등, 크롬 벨트라인 몰딩, 에어로 타입 와이퍼, 이중접합 차음 유리(윈드실드) • 내장 : 파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스) LED 실내등(맵램프, 룸램프, 선바이저 램프), 소프트 페인트 내장재(동승석 크래시 패드 가니시, 도어 트림 상단) • 시트 : 천연가죽 시트, 운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way) 2열 열선시트, 2열 암레스트, 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓 • 편의 : 스마트폰 무선충전, 현대 디지털 키 2 터치, 서라운드 뷰 모니터, 후측방 모니터 • 인포테인먼트 : BOSE 프리미엄 사운드(8스피커, 외장앰프 포함) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)* ▶ 세이지 그린 인테리어 컬러 N Line (N 라인) 28,450,000 25,863,636(2,586,364) ▶ 인스퍼레이션 기본 품목 및 • 성능 : 후륜 멀티링크 서스펜션 • 외관 : N Line 전용 디자인(프론트/리어범퍼, 라디에이터 그릴, 18인치 알로이 휠 & 타이어 유광 블랙 DLO 몰딩(벨트라인 포함), 립타입 리어 스포일러, 사이드 스커트, 리어 디퓨저, 싱글 트윈 팁 머플러 블랙 아웃사이드 미러 커버, N Line 엠블럼) • 내장 : N Line 전용 내장 디자인(반펀칭 가죽 스티어링 휠(열선, 레드 스티치 포함), 가죽 변속기 노브(레드 스티치 포함) 블랙 헤드라이닝 & 선바이저 & 필라트림, 도어 센터트림 레드 스티치, 패들쉬프트, 메탈 페달 & 풋 레스트) • 시트 : N Line 전용 천연가죽 시트(레드 스티치 & 파이핑, 착좌면 N 로고 스웨이드 패치 적용) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)*"
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "선루프": "선루프",
    "빌트인 캠(보조배터리 포함)*": "빌트인 캠, 보조배터리",
    "세이지 그린 인테리어 컬러": "Inspiration (인스퍼레이션) 25,054,545(2,505,455) ▶ 모던 기본 품목 및 • 지능형 안전 기술 : 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 후방 주차 충돌방지 보조, 안전 하차 경고, 진동 경고 스티어링 휠 • 외관 : 17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프 LED 보조제동등, 크롬 벨트라인 몰딩, 에어로 타입 와이퍼, 이중접합 차음 유리(윈드실드) • 내장 : 파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스) LED 실내등(맵램프, 룸램프, 선바이저 램프), 소프트 페인트 내장재(동승석 크래시 패드 가니시, 도어 트림 상단) • 시트 : 천연가죽 시트, 운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way) 2열 열선시트, 2열 암레스트, 2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓 • 편의 : 스마트폰 무선충전, 현대 디지털 키 2 터치, 서라운드 뷰 모니터, 후측방 모니터 • 인포테인먼트 : BOSE 프리미엄 사운드(8스피커, 외장앰프 포함) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)* ▶ 세이지 그린 인테리어 컬러 N Line (N 라인) 28,450,000 25,863,636(2,586,364) ▶ 인스퍼레이션 기본 품목 및 • 성능 : 후륜 멀티링크 서스펜션 • 외관 : N Line 전용 디자인(프론트/리어범퍼, 라디에이터 그릴, 18인치 알로이 휠 & 타이어 유광 블랙 DLO 몰딩(벨트라인 포함), 립타입 리어 스포일러, 사이드 스커트, 리어 디퓨저, 싱글 트윈 팁 머플러 블랙 아웃사이드 미러 커버, N Line 엠블럼) • 내장 : N Line 전용 내장 디자인(반펀칭 가죽 스티어링 휠(열선, 레드 스티치 포함), 가죽 변속기 노브(레드 스티치 포함) 블랙 헤드라이닝 & 선바이저 & 필라트림, 도어 센터트림 레드 스티치, 패들쉬프트, 메탈 페달 & 풋 레스트) • 시트 : N Line 전용 천연가죽 시트(레드 스티치 & 파이핑, 착좌면 N 로고 스웨이드 패치 적용) ▶ 선루프 ▶ 빌트인 캠(보조배터리 포함)*"
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "시트 컴포트 플러스": "▶ 스마트 비전 루프 ※ 파노라마 선루프 중복 선택 불가 블랙 잉크 (블랙 잉크) 54,000,000 49,090,909(4,909,091) ▶ 캘리그래피 기본 품목 및 • 외관 : 블랙 잉크 전용 블랙 외관 디자인(라디에이터 그릴, 범퍼 그릴, 범퍼 몰딩, 램프 몰딩, 사이드 가니시 오토 플러시 도어 핸들 데코, DLO 몰딩, 엠블럼), 20인치 블랙 잉크 전용 블랙 알로이 휠 & 피렐리 타이어 • 내장 : 블랙 잉크 전용 블랙 내장 디자인(블랙 컬러 리얼 알루미늄 내장재 블랙 컬러 인조가죽 감싸기 및 스웨이드 내장재, 블랙 컬러 도어스텝, 스피커 그릴 등) ※ 외장 색상 : 어비스 블랙 펄, 세레니티 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 모노톤 ※ 20인치 알로이 휠 & 타이어(캘리그래피) 옵션 선택 불가",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|가솔린|블랙 잉크": {},
  "더 뉴 그랜저|가솔린|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "더 뉴 그랜저|가솔린|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행) 1열 모니터링 시스템(영상회의 지원)",
    "시트 컴포트Ⅰ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "스마트스트림 가솔린 3.5 엔진": "스마트스트림 가솔린 3.5 엔진",
    "파노라마 선루프": "파노라마 선루프",
    "HTRAC": "HTRAC",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "스마트 카드키": "Essential Acc. 패키지 스마트 비전 루프 선쉐이드 20인치 고휘도 스퍼터링 휠 무선 청소기 차량 보호 필름 2 블랙 루프 스킨 빌트인 공기청정기 2.0 무선 에어건 카향수(쿨 아쿠아)"
  },
  "더 뉴 그랜저|하이브리드|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "더 뉴 그랜저|하이브리드|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 시스템(영상회의 지원)",
    "시트 컴포트Ⅱ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14 스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "파노라마 선루프": "파노라마 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus"
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "시트 컴포트 플러스": "▶ 스마트 비전 루프 ※ 파노라마 선루프 중복 선택 불가 블랙 잉크 (블랙 잉크) 60,890,000 55,354,545(5,535,455) 59,890,000 ▶ 캘리그래피 기본 품목 및 • 외관 : 블랙 잉크 전용 블랙 외관 디자인(라디에이터 그릴, 범퍼 그릴, 범퍼 몰딩, 램프 몰딩 사이드 가니시, 오토 플러시 도어 핸들 데코,DLO 몰딩, 엠블럼) 20인치 블랙 잉크 전용 블랙 알로이 휠 & 피렐리 타이어 • 내장 : 블랙 잉크 전용 블랙 내장 디자인(블랙 컬러 리얼 알루미늄 내장재 블랙 컬러 인조가죽 감싸기 및 스웨이드 내장재, 블랙 컬러 도어스텝, 스피커 그릴 등) ※ 외장 색상 : 어비스 블랙 펄, 세레니티 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 모노톤 ※ 20인치 알로이 휠 & 타이어(캘리그래피) 옵션 선택 불가 ※ 해당 세제혜택 후 가격은 『환경친화적 자동차의 개발 및 보급 촉진에 관한 법률』에 따른 친환경자동차 기준을 충족함을 전제로 세제혜택 효과를 반영한 대략적인 가격이며 친환경자동차 기준 충족 여부에 따라 차량 가격이 변경될 수 있습니다.",
    "스마트 비전 루프": "스마트 비전 루프"
  },
  "더 뉴 그랜저|하이브리드|블랙 잉크": {
    "스마트 카드키": "스마트 카드키"
  },
  "베뉴|가솔린 1.6|스마트": {
    "하이패스": "하이패스",
    "내비게이션 패키지": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "베뉴|가솔린 1.6|프리미엄": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "스타일": "17인치 알로이 휠 & 타이어, 루프랙",
    "테크": "스마트폰 무선충전, 디지털 키 2 터치 패키지 품목"
  },
  "베뉴|가솔린 1.6|플럭스": {
    "선루프": "선루프",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "17인치 블랙 알로이 휠": "17인치 블랙 알로이 휠",
    "적외선 무릎 워머": "적외선 무릎 워머",
    "인조가죽 시트 + 1열 열선시트": "인조가죽 시트 + 1열 열선시트"
  },
  "코나|가솔린|모던": {
    "내비게이션 패키지Ⅰ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) 포함 Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) ※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나|가솔린|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "스타일 Lite": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "▶ 스타일 Lite ▶ 현대 스마트센스Ⅲ ▶ 클러스터(12.3인치 컬러 LCD) ▶ 파킹어시스트 ※ 클러스터 선택 시 ▶ 컨비니언스 ▶ 빌트인 캠 2, 증강현실 내비게이션 Premium (프리미엄) 26,500,000(2,650,000) ▶ H-Pick 기본 품목 및 • 외관 : 실버 스키드 플레이트, 다크그레이 컬러 도장 클래딩/사이드 몰딩/범퍼, 벨트라인 크롬몰딩, 스포일러 가니쉬 도어 포켓 라이팅(1열), Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤) • 내장 : 직물 루프 트림, 앰비언트 무드램프 • 시트 : 2열 암레스트 • 편의 : 하이패스, 커버링 쉘프, 스마트 파워 테일게이트, 스마트폰 무선 충전, 디지털 키 2 터치 터치타입 아웃사이드 도어 핸들(1열) ▶ 베스트 셀렉션 - 현대 스마트센스Ⅲ",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나|가솔린|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "▶ 스타일 Lite ▶ 현대 스마트센스Ⅲ ▶ 클러스터(12.3인치 컬러 LCD) ▶ 파킹어시스트 ※ 클러스터 선택 시 ▶ 컨비니언스 ▶ 빌트인 캠 2, 증강현실 내비게이션 Premium (프리미엄) 26,500,000(2,650,000) ▶ H-Pick 기본 품목 및 • 외관 : 실버 스키드 플레이트, 다크그레이 컬러 도장 클래딩/사이드 몰딩/범퍼, 벨트라인 크롬몰딩, 스포일러 가니쉬 도어 포켓 라이팅(1열), Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤) • 내장 : 직물 루프 트림, 앰비언트 무드램프 • 시트 : 2열 암레스트 • 편의 : 하이패스, 커버링 쉘프, 스마트 파워 테일게이트, 스마트폰 무선 충전, 디지털 키 2 터치 터치타입 아웃사이드 도어 핸들(1열) ▶ 베스트 셀렉션 - 현대 스마트센스Ⅲ",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "19인치 알로이 휠 & 타이어": "19인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나|가솔린|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "코나|가솔린|블랙 익스테리어": {},
  "코나|가솔린|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "HTRAC(험로주행모드)": "HTRAC(험로주행모드)",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "코나 하이브리드|하이브리드|모던": {
    "내비게이션 패키지Ⅱ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서 ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조 안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) Ⅲ 진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트) LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "▶ 현대 스마트센스Ⅲ ▶ 클러스터(12.3인치 컬러 LCD) ▶ 스타일Ⅰ ▶ 파킹어시스트 ※ 클러스터 선택 시 ▶ 컨비니언스 ▶ 빌트인 캠 2, 증강현실 내비게이션 Premium (프리미엄) 31,518,182 (3,151,818) ▶ H-Pick 기본 품목 및 • 외관 : 실버 스키드 플레이트, 다크그레이 컬러 도장 클래딩/사이드 몰딩/범퍼 벨트라인 크롬몰딩, 스포일러 가니쉬, 도어 포켓 라이팅(1열) Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤) • 내장 : 직물 루프 트림, 앰비언트 무드램프 • 시트 : 2열 암레스트 • 편의 : 하이패스, 커버링 쉘프, 스마트 파워 테일게이트, 스마트폰 무선 충전, 디지털 키 2 터치 터치타입 아웃사이드 도어 핸들(1열) ▶ 베스트 셀렉션 - 현대 스마트센스Ⅲ",
    "스타일Ⅰ": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD) ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "현대 스마트센스Ⅲ": "현대 스마트센스Ⅲ",
    "클러스터(12.3인치 컬러 LCD)": "▶ 현대 스마트센스Ⅲ ▶ 클러스터(12.3인치 컬러 LCD) ▶ 스타일Ⅰ ▶ 파킹어시스트 ※ 클러스터 선택 시 ▶ 컨비니언스 ▶ 빌트인 캠 2, 증강현실 내비게이션 Premium (프리미엄) 31,518,182 (3,151,818) ▶ H-Pick 기본 품목 및 • 외관 : 실버 스키드 플레이트, 다크그레이 컬러 도장 클래딩/사이드 몰딩/범퍼 벨트라인 크롬몰딩, 스포일러 가니쉬, 도어 포켓 라이팅(1열) Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤) • 내장 : 직물 루프 트림, 앰비언트 무드램프 • 시트 : 2열 암레스트 • 편의 : 하이패스, 커버링 쉘프, 스마트 파워 테일게이트, 스마트폰 무선 충전, 디지털 키 2 터치 터치타입 아웃사이드 도어 핸들(1열) ▶ 베스트 셀렉션 - 현대 스마트센스Ⅲ",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "18인치 알로이 휠 & 타이어": "18인치 알로이 휠 & 타이어",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나 하이브리드|하이브리드|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트 스티어링 휠 키 컬러 및 포인트 컬러 가니쉬 ※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "코나 하이브리드|하이브리드|블랙 익스테리어": {},
  "코나 하이브리드|하이브리드|N Line": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "투톤 컬러 루프": "투톤 컬러 루프",
    "와이드 선루프": "와이드 선루프",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "하이패스": "하이패스",
    "알칸타라 인테리어 패키지": "알칸타라 인테리어 패키지"
  },
  "캐스퍼|가솔린 1.0|스마트": {
    "선루프": "선루프, A필라 블랙테이프 캐스퍼 액티브Ⅰ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크 인포테인먼트 내비 플러스Ⅰ 10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들 17인치 알로이 휠 & 타이어 17인치 알로이 휠 & 타이어 ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시 ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시",
    "17인치 알로이 휠 패키지": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크 현대 스마트센스Ⅰ 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조 컴포트Ⅰ 1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석) 익스테리어 디자인 Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프 스토리지 커스터마이징(러기지 볼팅, 동승석 시트백 보드) ※ 컴포트Ⅰ선택 시"
  },
  "캐스퍼|가솔린 1.0|디 에센셜": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "캐스퍼|가솔린 1.0|인스퍼레이션": {
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트) 캐스퍼 액티브Ⅱ 카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리 액티브 플러스 커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러) ※ 캐스퍼 액티브Ⅱ선택 시 ※ 고해상도 10.25인치 터치스크린, 후방 모니터, 고화질 DMB 수신 가능, 라디오, MP3 재생 기능 TPEG 서비스(교통정보 및 위험지역 알림기능), 3D 지도, 32GB, 다국어 지원(한국어/영어) ※ 무선 업데이트(OTA)는 정기 업데이트시 자동 다운로드 및 설치되며, 블루링크 가입차량에 한하여 제공됩니다.(자세한 방법은 취급설명서 참조) ※ 폰 프로젝션 기능 적용(구글 안드로이드 오토, 애플 카플레이) -디스플레이 터치 또는 음성을 통한 제어 가능 -작동 스마트폰 기종 : [안드로이드 오토] 기종 상관없음(Android 5.0 이상) [애플 카플레이] 아이폰5 이상(iOS 8.0 이상) 상세 내용은 현대자동차 홈페이지 참조 ※ 지상파DMB는 320X240(표준화질) 및 1,280X720(고화질) 해상도를 지원하나, 전파 수신 환경 DMB 방송 정책, DMB 사업자의 송출 방식 변경 등에 따라 수신이 불가할 수 있음 10.25인치 내비게이션 ※ 액티브 플러스 옵션 전용 리어 스포일러는 선택하신 외장 색상과 무관하게 블랙 유광 컬러가 적용됩니다. ※ 블랙 직물시트 일부는 인조가죽이 포함되어있음 ※ 하이패스에는 장애인 통행료 자동할인 기능 없음"
  },
  "투싼|가솔린 1.6 터보|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함) 레인센서, 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|가솔린 1.6 터보|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고 Ⅲ(가솔린) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|인스퍼레이션": {
    "베스트 셀렉션Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|가솔린 1.6 터보|블랙 익스테리어": {},
  "투싼|가솔린 1.6 터보|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝",
    "HTRAC": "HTRAC"
  },
  "투싼|하이브리드|모던": {
    "파노라마 선루프 + 루프랙": "파노라마 선루프 + 루프랙",
    "익스테리어 디자인Ⅰ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어 Ⅱ Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "인포테인먼트 내비(HEV)": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버 Ⅱ 운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "투싼|하이브리드|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "컴포트Ⅱ": "컴포트Ⅱ",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림 ※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "익스테리어 디자인Ⅱ": "익스테리어 디자인Ⅱ",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조 Ⅳ(HEV) 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|인스퍼레이션": {
    "베스트 셀렉션Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드 ※ 베스트 셀렉션은 고객들이 가장 선호하는 사양들에 가격적인 혜택을 더하여 제공하는 옵션 패키지입니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "파노라마 선루프": "파노라마 선루프",
    "파킹어시스트Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV)",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "19인치 알로이 휠 & 미쉐린 타이어": "19인치 알로이 휠 & 미쉐린 타이어"
  },
  "투싼|하이브리드|블랙 익스테리어": {},
  "투싼|하이브리드|N Line": {
    "미쉐린 타이어": "미쉐린 타이어",
    "라이프 스타일": "LED 도어스팟 램프(1열), LED 테일게이트 램프(터치방식), 러기지 매트",
    "사이드 스텝": "사이드 스텝",
    "블랙 사이드스텝": "블랙 사이드스텝"
  },
  "싼타페|가솔린 2.5 터보|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "싼타페|가솔린 2.5 터보|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "디자인 플러스Ⅰ": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능 Ⅱ 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "Black Exterior (블랙 익스테리어) 38,581,818(3,858,182) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩, 사이드 가니시, O/S 도어 핸들 C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드"
  },
  "싼타페|가솔린 2.5 터보|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "Black Exterior (블랙 익스테리어) 38,581,818(3,858,182) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩, 사이드 가니시, O/S 도어 핸들 C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|가솔린 2.5 터보|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|가솔린 2.5 터보|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "HTRAC, 험로주행모드": "HTRAC, 험로주행모드",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|하이브리드|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "듀얼 와이드 선루프 + 루프랙",
    "동승석 8way 전동시트": "동승석 8way 전동시트",
    "헤드업디스플레이": "헤드업디스플레이",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 패키지 품목"
  },
  "싼타페|하이브리드|프레스티지": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "헤드업디스플레이": "헤드업디스플레이",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트) 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조 디자인 플러스 Ⅰ 20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "디자인 플러스Ⅱ": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼 ※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "20인치 휠 & 타이어": "Black Exterior (블랙 익스테리어) 42,800,000(4,280,000) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩 사이드 가니시, O/S 도어 핸들, C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드"
  },
  "싼타페|하이브리드|H-Pick": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "Black Exterior (블랙 익스테리어) 42,800,000(4,280,000) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩 사이드 가니시, O/S 도어 핸들, C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드"
  },
  "싼타페|하이브리드|블랙 익스테리어": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "20인치 휠 & 타이어": "Black Exterior (블랙 익스테리어) 42,800,000(4,280,000) ▶ H-Pick 기본 품목 및 • 외관 : 블랙 익스테리어 전용 외관 디자인(라디에이터 그릴, 스키드플레이트, 범퍼 몰딩 사이드 가니시, O/S 도어 핸들, C필러 가니시, 루프랙, 엠블럼) ※ 외장 색상 : 어비스 블랙 펄, 크리미 화이트 펄 중 선택 가능 ※ 내장 색상 : 블랙 원톤, 그레이 투톤, 피칸 브라운 투톤 중 선택 가능 ※ 블랙 전용 휠 미포함 ▶ 듀얼 와이드 선루프 ▶ BOSE 프리미엄 사운드",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "싼타페|하이브리드|블랙 잉크": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드",
    "블랙잉크 플러스": "공통 선택 품목 ▶ 빌트인 캠 2, 증강현실 내비게이션 ▶ 6인승 ▶ 7인승",
    "빌트인 캠 2, 증강현실 내비게이션": "빌트인 캠 2, 증강현실 내비게이션",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "듀얼 와이드 선루프",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  },
  "디 올 뉴 팰리세이드|하이브리드|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함) 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스) 발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트 (7인승) 나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼 운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템 2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트 3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "▶ 빌트인 캠 2 Plus 증강현실 내비게이션",
    "빌트인 캠 2 Plus": "빌트인 캠 2 Plus",
    "사이드스텝": "사이드스텝",
    "빌트인 공기청정기": "[7인승 55만원 / 9인승 52만원]"
  }
};
Object.assign(trimOptionDetailOverrides, v30TrimOptionDetailOverrides);



/* v31: 오염된 옵션 설명 긴급 제거
   원인: PDF 선택품목 목록과 장애인용/가격표 테이블 행이 옵션 설명으로 이어붙은 자동추출 오류.
   조치: 오염 패턴(▶, 우측방향지시기, 좌측 액셀러레이터 등)이 포함된 설명은 표시하지 않음.
*/
const v31CleanupOverrides = {
  "쏘나타 디 엣지|가솔린 1.6 터보|인스퍼레이션": {
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "쏘나타 디 엣지|가솔린 2.0|인스퍼레이션": {
    "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드"
  },
  "아반떼|가솔린 1.6|모던": {
    "17인치 알로이 휠 & 타이어Ⅱ": "17인치 알로이 휠 & 타이어Ⅱ",
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "시트 컴포트 플러스": "시트 컴포트 플러스"
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "시트 컴포트 플러스": "시트 컴포트 플러스"
  },
  "코나|가솔린|H-Pick": {
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)"
  },
  "코나|가솔린|프리미엄": {
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)"
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)"
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "클러스터(12.3인치 컬러 LCD)": "클러스터(12.3인치 컬러 LCD)"
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|가솔린 2.5 터보|블랙 익스테리어": {
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|프레스티지": {
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|H-Pick": {
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|블랙 익스테리어": {
    "20인치 휠 & 타이어": "20인치 휠 & 타이어"
  },
  "싼타페|하이브리드|블랙 잉크": {
    "블랙잉크 플러스": "블랙잉크 플러스"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "컴포트 플러스(9인승)"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "컴포트 플러스(9인승)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "듀얼 와이드 선루프"
  }
};

Object.entries(v31CleanupOverrides).forEach(([key, optionMap]) => {
  trimOptionDetailOverrides[key] = trimOptionDetailOverrides[key] || {};
  Object.entries(optionMap).forEach(([optionName, fixedDesc]) => {
    trimOptionDetailOverrides[key][optionName] = fixedDesc;
    optionLibrary[optionName] = optionLibrary[optionName] || { price: "", image: "images/options/smart_sense1.jpg", desc: fixedDesc };
    optionLibrary[optionName].desc = fixedDesc;
  });
});

// 전역으로도 오염된 BOSE 설명이 보이지 않도록 정리
["BOSE 프리미엄 사운드", "BOSE 프리미엄 사운드 패키지"].forEach((name) => {
  if (optionLibrary[name]) optionLibrary[name].desc = name;
});
Object.values(trimOptionDetailOverrides).forEach((optionMap) => {
  Object.keys(optionMap || {}).forEach((name) => {
    const desc = String(optionMap[name] || "");
    if (
      desc.includes("▶") ||
      desc.includes("우측방향지시기") ||
      desc.includes("좌측 액셀러레이터") ||
      desc.includes("선회장치") ||
      desc.includes("운전석 공조 연동 자동 제어 미적용")
    ) {
      optionMap[name] = name;
    }
  });
});



/* v32: 옵션 설명 후처리 강화
   - 로마숫자만 표시되는 설명(예: II/Ⅱ) 제거
   - '인포테인먼트 내비 추가 선택 가능'처럼 제목과 설명이 똑같이 반복되는 문제 수정
   - 아반떼 17인치 휠/인포테인먼트 내비/컨비니언스 등 확인된 항목은 가격표 문구로 고정
*/
const v32VerifiedOptionText = {
  "인포테인먼트 내비 추가 선택 가능": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
  "17인치 알로이 휠 & 타이어Ⅰ": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치)",
  "17인치 알로이 휠 & 타이어 Ⅰ": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치)",
  "17인치 알로이 휠 & 타이어Ⅱ": "17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치)",
  "17인치 알로이 휠 & 타이어 Ⅱ": "17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치)",
  "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함)",
  "선루프": "선루프",
  "하이패스": "하이패스",
  "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러",
  "빌트인 캠(보조배터리 포함)": "빌트인 캠, 보조배터리",
  "빌트인 캠(보조배터리 포함)*": "빌트인 캠, 보조배터리",
  "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조"
};

function v32IsBadDesc(optionName, desc) {
  const s = String(desc || "").trim();
  if (!s) return true;
  if (/^(I|II|III|IV|Ⅰ|Ⅱ|Ⅲ|Ⅳ|1|2|3|4)$/.test(s)) return true;
  if (s === optionName && optionName.includes("추가 선택 가능")) return true;
  if (s.includes("우측방향지시기") || s.includes("좌측 액셀러레이터") || s.includes("선회장치")) return true;
  if (s.includes("▶") || s.includes("┗")) return true;
  return false;
}

Object.keys(v32VerifiedOptionText).forEach((optionName) => {
  optionLibrary[optionName] = optionLibrary[optionName] || { price: "", image: "images/options/smart_sense1.jpg", desc: "" };
  optionLibrary[optionName].desc = v32VerifiedOptionText[optionName];
});

Object.values(trimOptionDetailOverrides).forEach((optionMap) => {
  Object.keys(optionMap || {}).forEach((optionName) => {
    if (v32VerifiedOptionText[optionName]) {
      optionMap[optionName] = v32VerifiedOptionText[optionName];
      return;
    }
    if (v32IsBadDesc(optionName, optionMap[optionName])) {
      optionMap[optionName] = optionName;
    }
  });
});

// 제목/설명 동일 반복 방지: 설명이 제목과 완전히 같으면 빈 설명으로 표시되도록 마커 처리
// script.js에서 빈 문자열이면 문단 자체는 유지되지만 화면상 반복 텍스트가 사라짐.
Object.values(trimOptionDetailOverrides).forEach((optionMap) => {
  Object.keys(optionMap || {}).forEach((optionName) => {
    const desc = String(optionMap[optionName] || "").trim();
    if (desc === optionName && !optionName.includes("알로이") && !optionName.includes("선루프") && !optionName.includes("하이패스")) {
      optionMap[optionName] = "";
    }
  });
});



/* v33: 옵션명/설명 수동 정정
   - '인포테인먼트 내비 추가 선택 가능'은 옵션명이 아니라 조건 안내 문구이므로 '인포테인먼트 내비'로 표시
   - 반복/누락된 주요 패키지 설명을 가격표 패키지 품목 기준 문구로 보강
*/
const v33OptionRenameMap = {
  "인포테인먼트 내비 추가 선택 가능": "인포테인먼트 내비"
};
const v33VerifiedDetail = {
  "인포테인먼트 내비": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
  "인포테인먼트 내비 추가 선택 가능": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
  "시트 컴포트 플러스": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) ※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용",
  "시트 컴포트Ⅰ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)",
  "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
  "BOSE 프리미엄 사운드": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤",
  "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)",
  "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
  "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
  "플래티넘(LPG 3.5)": "인터랙티브 앰비언트 무드램프(순차 점등, 주행모드 연동 등), 19인치 알로이 휠 & 타이어, 2열 통풍 시트, 헤드업 디스플레이",
  "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
  "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 시스템(영상회의 지원)",
  "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
  "스마트 비전 루프": "스마트 비전 루프 ※ 파노라마 선루프 중복 선택 불가"
};

function v33RenameOptionName(name) {
  return v33OptionRenameMap[name] || name;
}

Object.values(dashboardData.cars || {}).forEach((car) => {
  Object.values(car.fuels || {}).forEach((fuel) => {
    Object.values(fuel.trims || {}).forEach((trim) => {
      trim.options = (trim.options || []).map(v33RenameOptionName);
      trim.options = [...new Set(trim.options)];
    });
  });
});

// optionLibrary 이름 병합
Object.entries(v33OptionRenameMap).forEach(([oldName, newName]) => {
  if (optionLibrary[oldName]) {
    optionLibrary[newName] = {
      ...(optionLibrary[oldName] || {}),
      ...(optionLibrary[newName] || {}),
      price: optionLibrary[oldName].price || optionLibrary[newName]?.price || "",
      image: optionLibrary[oldName].image || optionLibrary[newName]?.image || "images/options/smart_sense1.jpg",
      desc: v33VerifiedDetail[newName] || v33VerifiedDetail[oldName] || optionLibrary[oldName].desc || optionLibrary[newName]?.desc || ""
    };
  }
  delete optionLibrary[oldName];
});

// 트림별 설명 이름 병합
Object.values(trimOptionDetailOverrides || {}).forEach((optionMap) => {
  Object.entries(v33OptionRenameMap).forEach(([oldName, newName]) => {
    if (Object.prototype.hasOwnProperty.call(optionMap, oldName)) {
      optionMap[newName] = v33VerifiedDetail[newName] || v33VerifiedDetail[oldName] || optionMap[oldName];
      delete optionMap[oldName];
    }
  });
});

// 검증된 설명 보강
Object.entries(v33VerifiedDetail).forEach(([name, desc]) => {
  optionLibrary[name] = optionLibrary[name] || { price: "", image: "images/options/smart_sense1.jpg", desc: "" };
  optionLibrary[name].desc = desc;
});

Object.values(trimOptionDetailOverrides || {}).forEach((optionMap) => {
  Object.keys(optionMap || {}).forEach((name) => {
    if (v33VerifiedDetail[name]) optionMap[name] = v33VerifiedDetail[name];
    const desc = String(optionMap[name] || "").trim();
    // 제목과 설명이 같거나 비어 있으면, 검증된 설명이 없는 한 설명을 비워 반복 표시 방지
    if (!v33VerifiedDetail[name] && desc === name) optionMap[name] = "";
  });
});

/* v34: 사용자 작성 확정표 기준 최종 데이터 재구성
   - 기준: 업로드된 엑셀 첫 번째 시트(트림별_선택품목)
   - 차량가격/보증금/월렌트료는 반영하지 않음
   - 상세내용은 상세내용_사용자입력 칸만 사용, 빈 값은 빈 설명으로 유지
*/
const v34UserConfirmedCars = {
  "쏘나타 디 엣지": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 1.6 터보 에스",
            "price": "",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 1.6 터보 익스클루시브",
            "price": "",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "가솔린 2.0": {
        "displayFuel": "가솔린 2.0",
        "trims": {
          "프리미엄": {
            "displayTrim": "가솔린 2.0 프리미엄",
            "price": "",
            "options": [
              "인포테인먼트 내비Ⅰ",
              "파킹 어시스트Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트Ⅰ(1열 편의)",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "하이패스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "에스": {
            "displayTrim": "가솔린 2.0 에스",
            "price": "",
            "options": [
              "파킹 어시스트Ⅰ",
              "익스테리어 디자인Ⅰ",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 2.0 익스클루시브",
            "price": "",
            "options": [
              "플래티넘Ⅰ",
              "컴포트Ⅱ(2열 편의)",
              "익스테리어 디자인Ⅰ",
              "파노라마 선루프"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 2.0 인스퍼레이션",
            "price": "",
            "options": [
              "파노라마 선루프",
              "BOSE 프리미엄 사운드",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          }
        }
      },
      "렌터카 LPG": {
        "displayFuel": "렌터카 LPG",
        "trims": {
          "Business 1": {
            "displayTrim": "렌터카 LPG Business 1",
            "price": "",
            "options": [
              "현대 스마트센스Ⅱ",
              "인포테인먼트 내비Ⅲ",
              "컴포트Ⅰ(1열 편의)",
              "익스테리어 디자인Ⅲ",
              "하이패스 + ECM 룸미러"
            ]
          },
          "Business 2": {
            "displayTrim": "렌터카 LPG Business 2",
            "price": "",
            "options": [
              "현대 스마트센스Ⅱ",
              "플래티넘Ⅱ",
              "컴포트Ⅲ(2열 편의)",
              "파노라마 선루프",
              "빌트인 캠 2 + 증강현실 내비게이션"
            ]
          }
        }
      }
    }
  },
  "아반떼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "",
            "options": [
              "컨비니언스",
              "인포테인먼트 내비",
              "하이패스",
              "현대 스마트센스",
              "17인치 알로이 휠 & 타이어Ⅰ"
            ]
          },
          "모던": {
            "displayTrim": "가솔린 1.6 모던",
            "price": "",
            "options": [
              "선루프",
              "파킹 어시스트 플러스",
              "익스테리어 디자인",
              "현대 스마트센스",
              "컴포트Ⅰ",
              "17인치 알로이 휠 & 타이어Ⅱ",
              "세이지 그린 인테리어 컬러"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 인스퍼레이션",
            "price": "",
            "options": [
              "선루프",
              "빌트인 캠(보조배터리 포함)*",
              "세이지 그린 인테리어 컬러"
            ]
          }
        },
        "colors": {
          "미라지 그린": "images/cars/vehicle_images/1_6_54d5dfc8.png",
          "사이버 그레이 메탈릭": "images/cars/vehicle_images/1_6_923c93b6.png",
          "아마존 그레이 메탈릭": "images/cars/vehicle_images/1_6_5aae8303.png",
          "아틀라스 화이트": "images/cars/vehicle_images/1_6_29895f3d.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/1_6_d88f70fc.png",
          "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/1_6_a3631ecb.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_60287587.png",
          "플루이드 그레이 메탈릭": "images/cars/vehicle_images/1_6_5fd56d70.png"
        }
      }
    }
  },
  "더 뉴 그랜저": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "캘리그래피": {
            "displayTrim": "가솔린 캘리그래피",
            "price": "",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "익스클루시브": {
            "displayTrim": "가솔린 익스클루시브",
            "price": "",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅰ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          }
        },
        "colors": {
          "녹턴 그레이 매트": "images/cars/vehicle_images/b633fcfe.png",
          "녹턴 그레이 메탈릭": "images/cars/vehicle_images/12589a83.png",
          "바이오필릭 블루 펄": "images/cars/vehicle_images/ab29d890.png",
          "세레니티 화이트 펄 블랙잉크": "images/cars/vehicle_images/a287322b.png",
          "세레니티 화이트 펄": "images/cars/vehicle_images/403dd5d6.png",
          "아티스널 버건디 매트": "images/cars/vehicle_images/ea1bc6d0.png",
          "아티스널 버건디 펄": "images/cars/vehicle_images/3962bbb0.png",
          "어비스 블랙 펄 블랙잉크": "images/cars/vehicle_images/1f326eb2.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/1f28d41e.png",
          "에어로 실버 메탈릭": "images/cars/vehicle_images/a6c233a9.png",
          "트랜스매션 블루 매트": "images/cars/vehicle_images/5981af6c.png",
          "트랜스미션 블루 펄": "images/cars/vehicle_images/7cad0df8.png"
        }
      },
      "LPG 3.5": {
        "displayFuel": "LPG 3.5",
        "trims": {
          "프리미엄": {
            "displayTrim": "LPG 3.5 프리미엄",
            "price": "",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스",
              "파노라마 선루프",
              "빌트인 캠2 Plus"
            ]
          },
          "익스클루시브": {
            "displayTrim": "LPG 3.5 익스클루시브",
            "price": "",
            "options": [
              "플래티넘(LPG 3.5)",
              "현대 스마트센스Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "파노라마 선루프",
              "빌트인 캠2 Plus"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "",
            "options": [
              "현대 스마트센스Ⅰ",
              "파킹 어시스트",
              "프리미엄 초이스",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "",
            "options": [
              "플래티넘",
              "현대 스마트센스Ⅱ",
              "시트 컴포트Ⅱ",
              "BOSE 프리미엄 사운드 패키지",
              "20인치 알로이 휠 & 타이어",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "",
            "options": [
              "20인치 알로이 휠 & 타이어",
              "시트 컴포트 플러스",
              "스마트 비전 루프",
              "파노라마 선루프",
              "빌트인 캠 2 Plus"
            ]
          }
        },
        "colors": {
          "녹턴 그레이 매트": "images/cars/vehicle_images/13940076.png",
          "녹턴 그레이 메탈릭": "images/cars/vehicle_images/9cf62590.png",
          "바이오필릭 블루 펄": "images/cars/vehicle_images/481fb321.png",
          "세레니티 화이트 펄 블랙잉크": "images/cars/vehicle_images/bc46a5d6.png",
          "세레니티 화이트 펄": "images/cars/vehicle_images/6ea3acf9.png",
          "아티스널 버건디 매트": "images/cars/vehicle_images/a1c6960f.png",
          "아티스널 버건디 펄": "images/cars/vehicle_images/16a8f54c.png",
          "어비스 블랙 펄 블랙잉크": "images/cars/vehicle_images/550244b5.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/a9b69a31.png",
          "에어로 실버 메탈릭": "images/cars/vehicle_images/242a3c43.png",
          "트랜스매션 블루 매트": "images/cars/vehicle_images/769f4e26.png",
          "트랜스미션 블루 펄": "images/cars/vehicle_images/ed444b42.png"
        }
      }
    }
  },
  "베뉴": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6": {
        "displayFuel": "가솔린 1.6",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.6 스마트",
            "price": "",
            "options": [
              "하이패스",
              "내비게이션 패키지"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 프리미엄",
            "price": "",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "스타일",
              "테크"
            ]
          },
          "플럭스": {
            "displayTrim": "가솔린 1.6 플럭스",
            "price": "",
            "options": [
              "선루프",
              "투톤 컬러 루프",
              "17인치 블랙 알로이 휠"
            ]
          }
        },
        "colors": {
          "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_3dce2a39.png",
          "미라지 그린": "images/cars/vehicle_images/1_6_ecbcce3c.png",
          "데님 블루 펄(초크 화이트 메탈릭)": "images/cars/vehicle_images/1_6_383fcf83.png",
          "데님 블루 펄": "images/cars/vehicle_images/1_6_41ef3379.png",
          "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_73968367.png",
          "사이버 그레이 메탈릭": "images/cars/vehicle_images/1_6_9cafe4c6.png",
          "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_74112707.png",
          "아틀라스 화이트": "images/cars/vehicle_images/1_6_8ed41ae7.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/1_6_65fd4a77.png",
          "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/1_6_fe442019.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_8f2905ab.png",
          "어비스 블랙 펄(초크 화이트 메탈릭)": "images/cars/vehicle_images/1_6_6c7cada8.png"
        }
      }
    }
  },
  "코나": {
    "colors": {
      "기본": "images/cars/car_3.png"
    },
    "fuels": {
      "가솔린": {
        "displayFuel": "가솔린",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅰ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스",
              "하이패스"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 H-Pick",
            "price": "",
            "options": [
              "베스트 셀렉션",
              "스타일 Lite",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "하이패스"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 프리미엄",
            "price": "",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "19인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 인스퍼레이션",
            "price": "",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          }
        },
        "colors": {
          "네오테릭 옐로우(어비스 블랙 펄)": "images/cars/vehicle_images/811670d3.png",
          "네오테릭 옐로우": "images/cars/vehicle_images/4677896c.png",
          "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/b12366e9.png",
          "미라지 그린": "images/cars/vehicle_images/8b7e6bd7.png",
          "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/986ee8d3.png",
          "사이버 그레이 메탈릭": "images/cars/vehicle_images/4b828471.png",
          "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/b6e82f0d.png",
          "아틀라스 화이트": "images/cars/vehicle_images/f313051c.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/8eca9624.png",
          "얼티메이트 레드 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/29f2870e.png",
          "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/67a64b60.png",
          "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/e00e158d.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/f26f70d1.png"
        }
      }
    }
  },
  "코나 하이브리드": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅱ",
              "현대 스마트센스Ⅰ",
              "컴포트 초이스",
              "하이패스"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "스타일Ⅰ",
              "파킹어시스트",
              "컨비니언스",
              "빌트인 캠 2, 증강현실 내비게이션"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "",
            "options": [
              "베스트 셀렉션",
              "현대 스마트센스Ⅲ",
              "클러스터(12.3인치 컬러 LCD)",
              "파킹어시스트",
              "시트플러스",
              "18인치 알로이 휠 & 타이어",
              "실내 컬러 패키지"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "",
            "options": [
              "파킹어시스트",
              "BOSE 프리미엄 사운드",
              "투톤 컬러 루프",
              "실내 컬러 패키지",
              "에코패키지"
            ]
          }
        },
        "colors": {
          "네오테릭 옐로우(어비스 블랙 펄)": "images/cars/vehicle_images/acab8f25.png",
          "네오테릭 옐로우": "images/cars/vehicle_images/e852da53.png",
          "미라지 그린(어비스 블랙 펄)": "images/cars/vehicle_images/ce8a374a.png",
          "미라지 그린": "images/cars/vehicle_images/aebe7902.png",
          "사이버 그레이 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/2eb1b202.png",
          "사이버 그레이 메탈릭": "images/cars/vehicle_images/7ba587ae.png",
          "아틀라스 화이트(어비스 블랙 펄)": "images/cars/vehicle_images/10c4ece9.png",
          "아틀라스 화이트": "images/cars/vehicle_images/a14213f7.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/4a44a5d5.png",
          "얼티메이트 레드 메탈릭(어비스 블랙 펄)": "images/cars/vehicle_images/b0fe29ac.png",
          "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/d2fc5660.png",
          "에코트로닉 그레이 펄(어비스 블랙 펄)": "images/cars/vehicle_images/631310a8.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/61517c21.png"
        }
      }
    }
  },
  "캐스퍼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.0": {
        "displayFuel": "가솔린 1.0",
        "trims": {
          "스마트": {
            "displayTrim": "가솔린 1.0 스마트",
            "price": "",
            "options": [
              "선루프",
              "캐스퍼 액티브Ⅰ",
              "인포테인먼트 내비 플러스Ⅰ",
              "17인치 알로이 휠 & 타이어",
              "17인치 알로이 휠 패키지"
            ]
          },
          "디 에센셜": {
            "displayTrim": "가솔린 1.0 디 에센셜",
            "price": "",
            "options": [
              "캐스퍼 액티브Ⅰ",
              "현대 스마트센스Ⅰ",
              "익스테리어 디자인",
              "17인치 알로이 휠 & 타이어",
              "17인치 알로이 휠 패키지",
              "컴포트Ⅰ",
              "스토리지",
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.0 인스퍼레이션",
            "price": "",
            "options": [
              "캐스퍼 액티브Ⅱ",
              "액티브 플러스",
              "스토리지",
              "실내 컬러 패키지(베이지/오렌지 브라운)"
            ]
          }
        },
        "colors": {
          "비자림 카키 매트": "images/cars/vehicle_images/1_0_60fe4cab.png",
          "시에나 오렌지 메탈릭": "images/cars/vehicle_images/1_0_ba6c8bfd.png",
          "아틀라스 화이트": "images/cars/vehicle_images/1_0_7a2f7f1f.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/1_0_8e006415.png",
          "언블리치드 아이보리": "images/cars/vehicle_images/1_0_eafd1e98.png",
          "톰보이 카키": "images/cars/vehicle_images/1_0_963b5553.png"
        }
      }
    }
  },
  "투싼": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 1.6 터보": {
        "displayFuel": "가솔린 1.6 터보",
        "trims": {
          "모던": {
            "displayTrim": "가솔린 1.6 터보 모던",
            "price": "",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ",
              "인포테인먼트 내비",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "가솔린 1.6 터보 프리미엄",
            "price": "",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 1.6 터보 H-Pick",
            "price": "",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅰ(가솔린)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "가솔린 1.6 터보 인스퍼레이션",
            "price": "",
            "options": [
              "베스트 셀렉션Ⅲ(가솔린)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅲ(가솔린)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          }
        },
        "colors": {
          "쉬머링 실버 메탈릭": "images/cars/vehicle_images/1_6_6d790d54.png",
          "아마존 그레이 메탈릭": "images/cars/vehicle_images/1_6_fc6b8eb5.png",
          "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/1_6_91f6878a.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/1_6_53992137.png",
          "오션 인디고 펄": "images/cars/vehicle_images/1_6_7087e5a5.png",
          "크리미 화이트 펄(블랙 익스테리어)": "images/cars/vehicle_images/1_6_535346f9.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/1_6_5a6663f0.png",
          "파인 그린 매트": "images/cars/vehicle_images/1_6_ca045998.png",
          "팬텀 블랙 펄(블랙 익스테리어)": "images/cars/vehicle_images/1_6_4062e72b.png",
          "팬텀 블랙 펄": "images/cars/vehicle_images/1_6_9b0ea4a0.png"
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "모던": {
            "displayTrim": "하이브리드 모던",
            "price": "",
            "options": [
              "파노라마 선루프 + 루프랙",
              "익스테리어 디자인Ⅰ(HEV)",
              "인포테인먼트 내비(HEV)",
              "현대 스마트센스",
              "컴포트Ⅰ"
            ]
          },
          "프리미엄": {
            "displayTrim": "하이브리드 프리미엄",
            "price": "",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "컴포트Ⅱ",
              "현대 스마트센스",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "",
            "options": [
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "익스테리어 디자인Ⅱ",
              "파킹어시스트Ⅱ(HEV)",
              "플래티넘"
            ]
          },
          "인스퍼레이션": {
            "displayTrim": "하이브리드 인스퍼레이션",
            "price": "",
            "options": [
              "베스트 셀렉션Ⅳ(HEV)",
              "빌트인 캠 2, 증강현실 내비게이션",
              "파노라마 선루프",
              "파킹어시스트Ⅳ(HEV)",
              "BOSE 프리미엄 사운드",
              "19인치 알로이 휠 & 미쉐린 타이어"
            ]
          }
        },
        "colors": {
          "쉬머링 실버 메탈릭": "images/cars/vehicle_images/62b061b8.png",
          "아마존 그레이 메탈릭": "images/cars/vehicle_images/e9c095bb.png",
          "얼티메이트 레드 메탈릭": "images/cars/vehicle_images/7705fa3b.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/dab7a01a.png",
          "오션 인디고 펄": "images/cars/vehicle_images/cf5b5ce3.png",
          "크리미 화이트 펄(블랙 익스테리어)": "images/cars/vehicle_images/38e9bc53.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/43037729.png",
          "파인 그린 매트": "images/cars/vehicle_images/b19fbe22.png",
          "팬텀 블랙 펄(블랙 익스테리어)": "images/cars/vehicle_images/60b94a38.png",
          "팬텀 블랙 펄": "images/cars/vehicle_images/1e441345.png"
        }
      }
    }
  },
  "싼타페": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "",
            "options": [
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅰ"
            ]
          },
          "H-Pick": {
            "displayTrim": "가솔린 2.5 터보 H-Pick",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "가솔린 2.5 터보 블랙 익스테리어",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "가솔린 2.5 터보 블랙 잉크",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙 잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC, 험로주행모드",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        },
        "colors": {
          "사이버 세이지 펄": "images/cars/vehicle_images/2_5_588fd0cb.png",
          "어비스 블랙펄(블랙잉크)": "images/cars/vehicle_images/2_5_c1d44732.png",
          "어비스 블랙펄": "images/cars/vehicle_images/2_5_6e3c65fd.png",
          "얼씨 브래스 메탈릭 매트": "images/cars/vehicle_images/2_5_7cca7595.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/2_5_945f8fe1.png",
          "오카도 그린 펄": "images/cars/vehicle_images/2_5_1449a517.png",
          "크리미 화이트 매트(블랙잉크)": "images/cars/vehicle_images/2_5_72e24683.png",
          "크리미 화이트 펄(블랙잉크)": "images/cars/vehicle_images/2_5_1897a400.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/2_5_04395e43.png",
          "페블 블루 펄": "images/cars/vehicle_images/2_5_3bf5b56a.png"
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "",
            "options": [
              "듀얼 와이드 선루프 + 루프랙",
              "동승석 8way 전동시트",
              "헤드업디스플레이",
              "파킹 어시스트 플러스Ⅰ",
              "플래티넘Ⅰ",
              "베스트 셀렉션Ⅰ"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "헤드업디스플레이",
              "시트플러스",
              "파킹 어시스트 플러스Ⅰ",
              "디자인 플러스Ⅱ",
              "20인치 휠 & 타이어"
            ]
          },
          "H-Pick": {
            "displayTrim": "하이브리드 H-Pick",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어"
            ]
          },
          "블랙 익스테리어": {
            "displayTrim": "하이브리드 블랙 익스테리어",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "20인치 휠 & 타이어",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드"
            ]
          },
          "블랙 잉크": {
            "displayTrim": "하이브리드 블랙 잉크",
            "price": "",
            "options": [
              "듀얼 와이드 선루프",
              "BOSE 프리미엄 사운드",
              "블랙 잉크 플러스",
              "빌트인 캠 2, 증강현실 내비게이션",
              "6인승",
              "7인승",
              "라이프 스타일"
            ]
          }
        },
        "colors": {
          "사이버 세이지 펄": "images/cars/vehicle_images/d3050d1e.png",
          "어비스 블랙 펄(블랙잉크)": "images/cars/vehicle_images/8058549c.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/f87c42b2.png",
          "얼씨 브래스 메탈릭 매트": "images/cars/vehicle_images/37a91270.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/8cd84ed0.png",
          "오카도 그린 펄": "images/cars/vehicle_images/ae9b6547.png",
          "크리미 화이트 매트(블랙잉크)": "images/cars/vehicle_images/d7736292.png",
          "크리미 화이트 펄(블랙잉크)": "images/cars/vehicle_images/4cf20fbc.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/02303380.png",
          "페블 블루 펄": "images/cars/vehicle_images/b95b703a.png"
        }
      }
    }
  },
  "디 올 뉴 팰리세이드": {
    "colors": {
      "녹턴 그레이 메탈릭": "images/cars/car_1.png",
      "어비스 블랙 펄": "images/cars/car_2.png",
      "세레니티 화이트 펄": "images/cars/car_3.png",
      "녹턴 그레이 매트": "images/cars/car_4.png",
      "에어로 실버 매트": "images/cars/car_5.png"
    },
    "fuels": {
      "가솔린 2.5 터보": {
        "displayFuel": "가솔린 2.5 터보",
        "trims": {
          "익스클루시브": {
            "displayTrim": "가솔린 2.5 터보 익스클루시브",
            "price": "",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "가솔린 2.5 터보 프레스티지",
            "price": "",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus"
            ]
          },
          "캘리그래피": {
            "displayTrim": "가솔린 2.5 터보 캘리그래피",
            "price": "",
            "options": [
              "프리뷰 전자제어 서스펜션"
            ]
          }
        },
        "colors": {
          "갤럭시 마룬 펄": "images/cars/vehicle_images/2_5_b38459f9.png",
          "로버스트 에메랄드 펄": "images/cars/vehicle_images/2_5_6458e180.png",
          "쉬머링 실버 메탈릭": "images/cars/vehicle_images/2_5_a1835602.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/2_5_ffaecb58.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/2_5_8fa5fa49.png",
          "캐스트 아이언 브라운 펄": "images/cars/vehicle_images/2_5_23ccb85a.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/2_5_ba244718.png",
          "클래지 블루 펄": "images/cars/vehicle_images/2_5_72d5e3a1.png"
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "익스클루시브": {
            "displayTrim": "하이브리드 익스클루시브",
            "price": "",
            "options": [
              "현대 스마트센스",
              "컴포트"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "",
            "options": [
              "컴포트 플러스(9인승)",
              "원격 스마트 주차 보조",
              "플래티넘"
            ]
          },
          "캘리그래피": {
            "displayTrim": "하이브리드 캘리그래피",
            "price": "",
            "options": [
              "프리뷰 전자제어 서스펜션",
              "듀얼 와이드 선루프",
              "빌트인 캠 2 Plus"
            ]
          }
        },
        "colors": {
          "갤럭시 마룬 펄": "images/cars/vehicle_images/30b1f237.png",
          "로버스트 에메랄드 펄": "images/cars/vehicle_images/55ff0ce5.png",
          "쉬머링 실버 메탈릭": "images/cars/vehicle_images/f73984eb.png",
          "어비스 블랙 펄": "images/cars/vehicle_images/04fdd5f0.png",
          "에코트로닉 그레이 펄": "images/cars/vehicle_images/5ef61bd1.png",
          "캐스트 아이언 브라운 펄": "images/cars/vehicle_images/d483d044.png",
          "크리미 화이트 펄": "images/cars/vehicle_images/f84f3efe.png",
          "클래지 블루 펄": "images/cars/vehicle_images/d57203fb.png"
        }
      }
    }
  },
  "더 뉴 아이오닉 6": {
    "colors": {
      "기본": "images/cars/car_3.png"
    },
    "fuels": {
      "전기": {
        "displayFuel": "전기",
        "trims": {
          "E-Value+ 스탠다드": {
            "displayTrim": "전기 E-Value+ 스탠다드",
            "price": "",
            "options": [
              "컴포트 초이스",
              "현대 스마트센스Ⅰ"
            ]
          },
          "Exclusive 스탠다드": {
            "displayTrim": "전기 Exclusive 스탠다드",
            "price": "",
            "options": [
              "컨비니언스",
              "현대 스마트센스Ⅱ",
              "파킹 어시스트",
              "컴포트 플러스",
              "플래티넘",
              "빌트인 캠 2 Plus"
            ]
          },
          "Exclusive 롱레인지": {
            "displayTrim": "전기 Exclusive 롱레인지",
            "price": "",
            "options": [
              "컨비니언스",
              "현대 스마트센스Ⅱ",
              "파킹 어시스트",
              "컴포트 플러스",
              "플래티넘",
              "빌트인 캠 2 Plus",
              "HTRAC(전륜 모터)",
              "와이드 선루프",
              "20인치 휠 & 피렐리 타이어"
            ]
          },
          "Prestige 스탠다드": {
            "displayTrim": "전기 Prestige 스탠다드",
            "price": "",
            "options": [
              "디지털 사이드 미러",
              "하이테크 플러스",
              "빌트인 캠 2 Plus"
            ]
          },
          "Prestige 롱레인지": {
            "displayTrim": "전기 Prestige 롱레인지",
            "price": "",
            "options": [
              "디지털 사이드 미러",
              "하이테크 플러스",
              "빌트인 캠 2 Plus",
              "HTRAC(전륜 모터)",
              "와이드 선루프",
              "20인치 휠 & 피렐리 타이어"
            ]
          },
          "E-Lite 롱레인지": {
            "displayTrim": "전기 E-Lite 롱레인지",
            "price": "",
            "options": [
              "HTRAC(전륜 모터)",
              "20인치 휠 & 피렐리 타이어"
            ]
          }
        }
      }
    }
  },
  "아이오닉 5": {
    "colors": {
      "기본": "images/cars/car_3.png"
    },
    "fuels": {
      "전기": {
        "displayFuel": "전기",
        "trims": {
          "E-Value+ 스탠다드": {
            "displayTrim": "전기 E-Value+ 스탠다드",
            "price": "",
            "options": [
              "현대 스마트센스",
              "컴포트 초이스",
              "빌트인 캠 2 패키지"
            ]
          },
          "Long Range 모던": {
            "displayTrim": "전기 Long Range 모던",
            "price": "",
            "options": [
              "컴포트",
              "현대 스마트센스",
              "스타일",
              "파킹 어시스트",
              "하이패스 패키지",
              "빌트인 캠 2, 증강현실 내비게이션",
              "HTRAC"
            ]
          },
          "Long Range 프리미엄": {
            "displayTrim": "전기 Long Range 프리미엄",
            "price": "",
            "options": [
              "파킹 어시스트",
              "컴포트 플러스",
              "비전루프",
              "플래티넘",
              "디지털 센터 미러",
              "빌트인 캠 2, 증강현실 내비게이션",
              "20인치 휠 & 미쉐린 타이어",
              "HTRAC"
            ]
          },
          "Long Range 인스퍼레이션": {
            "displayTrim": "전기 Long Range 인스퍼레이션",
            "price": "",
            "options": [
              "디지털 사이드 미러",
              "비전루프",
              "디지털 센터 미러",
              "빌트인 캠 2, 증강현실 내비게이션",
              "20인치 휠 & 미쉐린 타이어",
              "HTRAC"
            ]
          },
          "E-Lite 롱레인지": {
            "displayTrim": "전기 E-Lite 롱레인지",
            "price": "",
            "options": [
              "HTRAC"
            ]
          }
        }
      }
    }
  },
  "포터 II": {
    "colors": {
      "기본": "images/cars/car_3.png"
    },
    "fuels": {
      "LPG 2.5 터보": {
        "displayFuel": "LPG 2.5 터보",
        "trims": {
          "2WD 슈퍼캡 초장축 스마트": {
            "displayTrim": "LPG 2.5 터보 2WD 슈퍼캡 초장축 스마트",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "내비게이션 패키지Ⅰ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 슈퍼캡 초장축 모던": {
            "displayTrim": "LPG 2.5 터보 2WD 슈퍼캡 초장축 모던",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "내비게이션 패키지Ⅱ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 슈퍼캡 초장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 2WD 슈퍼캡 초장축 프리미엄",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 더블캡 초장축 스마트": {
            "displayTrim": "LPG 2.5 터보 2WD 더블캡 초장축 스마트",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅰ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 더블캡 초장축 모던": {
            "displayTrim": "LPG 2.5 터보 2WD 더블캡 초장축 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅱ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 더블캡 초장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 2WD 더블캡 초장축 프리미엄",
            "price": "",
            "options": [
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 일반캡 초장축 스마트": {
            "displayTrim": "LPG 2.5 터보 2WD 일반캡 초장축 스마트",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "내비게이션 패키지Ⅰ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 일반캡 초장축 모던": {
            "displayTrim": "LPG 2.5 터보 2WD 일반캡 초장축 모던",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "내비게이션 패키지Ⅱ",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "2WD 일반캡 초장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 2WD 일반캡 초장축 프리미엄",
            "price": "",
            "options": [
              "중량짐용 후륜 현가장치",
              "PTO(Power Take Off)",
              "5단 자동변속기",
              "플라스틱 적재함 커버"
            ]
          },
          "4WD 슈퍼캡 장축 스마트": {
            "displayTrim": "LPG 2.5 터보 4WD 슈퍼캡 장축 스마트",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅰ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 슈퍼캡 장축 모던": {
            "displayTrim": "LPG 2.5 터보 4WD 슈퍼캡 장축 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅱ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 슈퍼캡 장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 4WD 슈퍼캡 장축 프리미엄",
            "price": "",
            "options": [
              "PTO(Power Take Off)"
            ]
          },
          "4WD 더블캡 장축 스마트": {
            "displayTrim": "LPG 2.5 터보 4WD 더블캡 장축 스마트",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅰ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 더블캡 장축 모던": {
            "displayTrim": "LPG 2.5 터보 4WD 더블캡 장축 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅱ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 더블캡 장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 4WD 더블캡 장축 프리미엄",
            "price": "",
            "options": [
              "PTO(Power Take Off)"
            ]
          },
          "4WD 일반캡 장축 스마트": {
            "displayTrim": "LPG 2.5 터보 4WD 일반캡 장축 스마트",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅰ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 일반캡 장축 모던": {
            "displayTrim": "LPG 2.5 터보 4WD 일반캡 장축 모던",
            "price": "",
            "options": [
              "내비게이션 패키지Ⅱ",
              "PTO(Power Take Off)"
            ]
          },
          "4WD 일반캡 장축 프리미엄": {
            "displayTrim": "LPG 2.5 터보 4WD 일반캡 장축 프리미엄",
            "price": "",
            "options": [
              "PTO(Power Take Off)"
            ]
          }
        }
      }
    }
  },
  "더 뉴 스타리아": {
    "colors": {
      "어비스 블랙 펄": "images/cars/스타리아 어비스 블랙 펄.png",
      "클래지 블루 펄": "images/cars/스타리아 클래지 블루 펄.png",
      "에코트로닉 그레이 펄": "images/cars/스타리아 에코트로닉 그레이 펄.png",
      "쉬머링 실버 메탈릭": "images/cars/스타리아 쉬머링 실버 메탈릭.png",
      "크리미 화이트": "images/cars/스타리아 크리미 화이트.png"
    },
    "fuels": {
      "LPG 3.5": {
        "displayFuel": "LPG 3.5",
        "trims": {
          "투어러 11인승 스마트": {
            "displayTrim": "LPG 3.5 투어러 11인승 스마트",
            "price": "",
            "options": [
              "멀티미디어 내비플러스Ⅰ"
            ]
          },
          "투어러 11인승 모던": {
            "displayTrim": "LPG 3.5 투어러 11인승 모던",
            "price": "",
            "options": [
              "빌트인 캠 2 PLUS, 증강현실 내비게이션",
              "듀얼 와이드 선루프 + LED 실내등",
              "멀티미디어 내비플러스Ⅱ",
              "익스테리어 디자인(11인승)",
              "컴포트",
              "테크Ⅰ",
              "테크Ⅱ",
              "트레일러 패키지"
            ]
          },
          "카고 3인승 스마트": {
            "displayTrim": "LPG 3.5 카고 3인승 스마트",
            "price": "",
            "options": [
              "멀티미디어 내비플러스Ⅰ",
              "슬라이딩 카고 베드",
              "트윈 스윙 도어"
            ]
          },
          "카고 3인승 모던": {
            "displayTrim": "LPG 3.5 카고 3인승 모던",
            "price": "",
            "options": [
              "빌트인 캠 2 PLUS, 증강현실 내비게이션",
              "윈도우 밴(3인승)",
              "멀티미디어 내비플러스Ⅱ",
              "익스테리어 디자인(3인승)",
              "컴포트(3인승)",
              "테크",
              "슬라이딩 카고 베드",
              "트윈 스윙 도어"
            ]
          },
          "카고 5인승 스마트": {
            "displayTrim": "LPG 3.5 카고 5인승 스마트",
            "price": "",
            "options": [
              "멀티미디어 내비플러스Ⅰ",
              "슬라이딩 카고 베드",
              "트윈 스윙 도어"
            ]
          },
          "카고 5인승 모던": {
            "displayTrim": "LPG 3.5 카고 5인승 모던",
            "price": "",
            "options": [
              "빌트인 캠 2 PLUS, 증강현실 내비게이션",
              "윈도우 밴(5인승)",
              "멀티미디어 내비플러스Ⅱ",
              "익스테리어 디자인(5인승)",
              "컴포트(5인승)",
              "테크",
              "슬라이딩 카고 베드",
              "트윈 스윙 도어"
            ]
          }
        }
      }
    }
  }
};
const v34UserConfirmedOptionLibrary = {
  "인포테인먼트 내비Ⅰ": {
    "price": "1,400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조,\n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그),  레인센서, 앰비언트 무드램프, \n크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "파킹 어시스트Ⅰ": {
    "price": "1,680,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 \n※ 내비게이션 적용 시, 선택 가능"
  },
  "현대 스마트센스Ⅰ": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "컴포트Ⅰ(1열 편의)": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)"
  },
  "컴포트Ⅱ(2열 편의)": {
    "price": "670,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트"
  },
  "익스테리어 디자인Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "하이패스": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스 시스템은 유료 도로로 진출입시 통행료가 자동 결제되는 장치입니다. 하이패스 시스템은 시동이 걸려있는 상태에서만 작동합니다."
  },
  "빌트인 캠 2, 증강현실 내비게이션": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "고해상도 전용 전·후방 카메라로 주/야간 화질이 우수하며 음성 녹음, 대용량 외장 메모리, OTA 기능, 차량 주행 정보 저장 및 재생 기능(지도 연동 등)이 적용되었습니다. 블루링크를 통해 주차 및 충격 감지 저장 영상 전송 및 빌트인 캠 상태 정보도 제공합니다."
  },
  "플래티넘Ⅰ": {
    "price": "1,300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)"
  },
  "파노라마 선루프": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다."
  },
  "BOSE 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12개의 고성능 스피커와 함께 적용된 BOSE 프리미엄 사운드 시스템으로 풍부한 음향을 즐기실 수 있습니다."
  },
  "현대 스마트센스Ⅱ": {
    "price": "730,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), \n후방 교차 충돌방지 보조, 안전 하차 보조 ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함"
  },
  "인포테인먼트 내비Ⅲ": {
    "price": "1,300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), \n레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "익스테리어 디자인Ⅲ": {
    "price": "380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)"
  },
  "하이패스 + ECM 룸미러": {
    "price": "230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "플래티넘Ⅱ": {
    "price": "1,170,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "컴포트Ⅲ(2열 편의)": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)"
  },
  "빌트인 캠 2 + 증강현실 내비게이션": {
    "price": "420,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "고해상도 전용 전·후방 카메라로 주/야간 화질이 우수하며 음성 녹음, 대용량 외장 메모리, OTA 기능, 차량 주행 정보 저장 및 재생 기능(지도 연동 등)이 적용되었습니다. 블루링크를 통해 주차 및 충격 감지 저장 영상 전송 및 빌트인 캠 상태 정보도 제공합니다."
  },
  "컨비니언스": {
    "price": "380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함)"
  },
  "인포테인먼트 내비": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프"
  },
  "현대 스마트센스": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고"
  },
  "17인치 알로이 휠 & 타이어Ⅰ": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치)"
  },
  "선루프": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "선루프"
  },
  "파킹 어시스트 플러스": {
    "price": "1,290,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조"
  },
  "익스테리어 디자인": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등"
  },
  "컴포트Ⅰ": {
    "price": "1,060,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way), 현대 디지털 키 2 터치, 스마트폰 무선충전, 2열 열선시트, 2열 암레스트, \n2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓"
  },
  "17인치 알로이 휠 & 타이어Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치)"
  },
  "세이지 그린 인테리어 컬러": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "세이지 그린 인테리어 컬러"
  },
  "빌트인 캠(보조배터리 포함)*": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠, 보조배터리"
  },
  "20인치 알로이 휠 & 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어"
  },
  "시트 컴포트 플러스": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) \n※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용"
  },
  "스마트 비전 루프": {
    "price": "1,800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "빌트인 캠 2 Plus": {
    "price": "650,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "파킹 어시스트": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조"
  },
  "프리미엄 초이스": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)"
  },
  "플래티넘": {
    "price": "2,050,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레"
  },
  "시트 컴포트Ⅰ": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)"
  },
  "BOSE 프리미엄 사운드 패키지": {
    "price": "1,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)"
  },
  "빌트인 캠2 Plus": {
    "price": "650,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "플래티넘(LPG 3.5)": {
    "price": "1,650,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인터랙티브 앰비언트 무드램프(순차 점등, 주행모드 연동 등), 19인치 알로이 휠 & 타이어, 2열 통풍 시트, 헤드업 디스플레이"
  },
  "시트 컴포트Ⅱ": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가"
  },
  "내비게이션 패키지": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "투톤 컬러 루프": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "스타일": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 루프랙"
  },
  "테크": {
    "price": "350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트폰 무선충전, 디지털 키 2 터치"
  },
  "17인치 블랙 알로이 휠": {
    "price": "540,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "내비게이션 패키지Ⅰ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서\n※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "컴포트 초이스": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), \nLED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)"
  },
  "베스트 셀렉션": {
    "price": "790,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD)"
  },
  "스타일 Lite": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)"
  },
  "현대 스마트센스Ⅲ": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)\n※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함"
  },
  "클러스터(12.3인치 컬러 LCD)": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "파킹어시스트": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "시트플러스": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트"
  },
  "19인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "실내 컬러 패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, \n스티어링 휠 키 컬러 및 포인트 컬러 가니쉬\n※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "에코패키지": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "내비게이션 패키지Ⅱ": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서\n※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능"
  },
  "스타일Ⅰ": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프"
  },
  "18인치 알로이 휠 & 타이어": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "캐스퍼 액티브Ⅰ": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크"
  },
  "인포테인먼트 내비 플러스Ⅰ": {
    "price": "1,250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들"
  },
  "17인치 알로이 휠 & 타이어": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어   ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시   ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시"
  },
  "17인치 알로이 휠 패키지": {
    "price": "600,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크"
  },
  "스토리지": {
    "price": "110,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "커스터마이징(러기지 볼팅, 동승석 시트백 보드)   ※ 컴포트Ⅰ선택 시"
  },
  "실내 컬러 패키지(베이지/오렌지 브라운)": {
    "price": "150,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트)"
  },
  "캐스퍼 액티브Ⅱ": {
    "price": "900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리"
  },
  "액티브 플러스": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러)   ※ 캐스퍼 액티브Ⅱ선택 시"
  },
  "파노라마 선루프 + 루프랙": {
    "price": "1,160,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "익스테리어 디자인Ⅱ": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어"
  },
  "파킹어시스트Ⅰ(가솔린)": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "컴포트Ⅱ": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트"
  },
  "베스트 셀렉션Ⅲ(가솔린)": {
    "price": "1,220,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드"
  },
  "파킹어시스트Ⅲ(가솔린)": {
    "price": "830,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "19인치 알로이 휠 & 미쉐린 타이어": {
    "price": "450,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "익스테리어 디자인Ⅰ(HEV)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어"
  },
  "인포테인먼트 내비(HEV)": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스"
  },
  "파킹어시스트Ⅱ(HEV)": {
    "price": "1,530,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "베스트 셀렉션Ⅳ(HEV)": {
    "price": "1,520,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드"
  },
  "파킹어시스트Ⅳ(HEV)": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "동승석 8way 전동시트": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "헤드업디스플레이": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "파킹 어시스트 플러스Ⅰ": {
    "price": "1,190,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조"
  },
  "베스트 셀렉션Ⅰ": {
    "price": "1,500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조"
  },
  "듀얼 와이드 선루프": {
    "price": "890,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "디자인 플러스Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, \n2열 수동식 도어커튼\n※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "20인치 휠 & 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "HTRAC, 험로주행모드": {
    "price": "2,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "6인승": {
    "price": "1,040,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "7인승": {
    "price": "690,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)"
  },
  "라이프 스타일": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "블랙 잉크 플러스": {
    "price": "940,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)"
  },
  "듀얼 와이드 선루프 + 루프랙": {
    "price": "990,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "디자인 플러스Ⅱ": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼\n※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "컴포트": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트"
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  },
  "컴포트 플러스": {
    "price": "680,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 럼버서포트, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트, \n어드밴스드 후석 승객 알림"
  },
  "HTRAC(전륜 모터)": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "20인치 휠 & 피렐리 타이어": {
    "price": "590,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "디지털 사이드 미러": {
    "price": "1,380,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "디지털 사이드 미러(카메라 및 OLED 모니터), 디지털 사이드 미러 일체형 대시보드"
  },
  "하이테크 플러스": {
    "price": "950,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 전기차 액티브 사운드 디자인(e-ASD), 디지털 키 2"
  },
  "빌트인 캠 2 패키지": {
    "price": "600,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 스마트 파워 테일게이트        \n※ 컴포트 초이스 선택 시"
  },
  "하이패스 패키지": {
    "price": "250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "하이패스, ECM 룸미러"
  },
  "HTRAC": {
    "price": "2,470,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "비전루프": {
    "price": "740,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "디지털 센터 미러": {
    "price": "500,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "20인치 휠 & 미쉐린 타이어": {
    "price": "490,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "중량짐용 후륜 현가장치": {
    "price": "60,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "PTO(Power Take Off)": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "5단 자동변속기": {
    "price": "1,130,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "플라스틱 적재함 커버": {
    "price": "630,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "멀티미디어 내비플러스Ⅰ": {
    "price": "1,900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n하이패스, 어드밴스드 후석 승객 알림, 풀오토 에어컨(미세먼지 센서/공기청정모드)"
  },
  "빌트인 캠 2 PLUS, 증강현실 내비게이션": {
    "price": "670,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "듀얼 와이드 선루프 + LED 실내등": {
    "price": "900,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "멀티미디어 내비플러스Ⅱ": {
    "price": "1,700,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n어드밴스드 후석 승객 알림, 풀오토 에어컨(미세먼지 센서/공기청정모드)"
  },
  "익스테리어 디자인(11인승)": {
    "price": "1,050,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프, 18인치 알로이 휠 & 타이어, 2열 플러쉬 글래스\n※ 11인승은 자동차 안전기준의 등화장치 설치기준에 따라 차량 앞면 중앙부 LED 포지셔닝 램프 미적용"
  },
  "테크Ⅰ": {
    "price": "1,350,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "서라운드 뷰 모니터, 측방 주차 거리 경고, 후측방 모니터, 스마트폰 무선충전, 후석 뷰, 후석 음성 인식          \n※ 멀티미디어 내비플러스Ⅱ 선택 시"
  },
  "테크Ⅱ": {
    "price": "1,250,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 슬라이딩 도어, 스마트 파워 테일게이트, 안전 하차 보조"
  },
  "트레일러 패키지": {
    "price": "1,270,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "슬라이딩 카고 베드": {
    "price": "1,330,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "트윈 스윙 도어": {
    "price": "400,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "윈도우 밴(3인승)": {
    "price": "300,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "익스테리어 디자인(3인승)": {
    "price": "550,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프"
  },
  "컴포트(3인승)": {
    "price": "800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 테일게이트, 1열 통풍시트     ※ 트윈 스윙 도어와 중복 선택 불가"
  },
  "윈도우 밴(5인승)": {
    "price": "200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "익스테리어 디자인(5인승)": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프, 2열 플러쉬 글래스"
  },
  "컴포트(5인승)": {
    "price": "1,050,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "스마트 파워 테일게이트, 1열 통풍시트, 운전석 전동시트(8way, 4way 럼버서포트)     ※ 트윈 스윙 도어와 중복 선택 불가"
  }
};
const v34UserConfirmedTrimOptionDetails = {
  "쏘나타 디 엣지|가솔린 1.6 터보|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조,\n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그),  레인센서, 앰비언트 무드램프, \n크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 \n※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스 시스템은 유료 도로로 진출입시 통행료가 자동 결제되는 장치입니다. 하이패스 시스템은 시동이 걸려있는 상태에서만 작동합니다.",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 \n※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다.",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|가솔린 1.6 터보|인스퍼레이션": {
    "파노라마 선루프": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다.",
    "BOSE 프리미엄 사운드": "12개의 고성능 스피커와 함께 적용된 BOSE 프리미엄 사운드 시스템으로 풍부한 음향을 즐기실 수 있습니다.",
    "빌트인 캠 2, 증강현실 내비게이션": "고해상도 전용 전·후방 카메라로 주/야간 화질이 우수하며 음성 녹음, 대용량 외장 메모리, OTA 기능, 차량 주행 정보 저장 및 재생 기능(지도 연동 등)이 적용되었습니다. 블루링크를 통해 주차 및 충격 감지 저장 영상 전송 및 빌트인 캠 상태 정보도 제공합니다."
  },
  "쏘나타 디 엣지|가솔린 2.0|프리미엄": {
    "인포테인먼트 내비Ⅰ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 고속도로 주행 보조,\n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그),  레인센서, 앰비언트 무드램프, \n크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 \n※ 내비게이션 적용 시, 선택 가능",
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스": "하이패스 시스템은 유료 도로로 진출입시 통행료가 자동 결제되는 장치입니다. 하이패스 시스템은 시동이 걸려있는 상태에서만 작동합니다.",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|가솔린 2.0|에스": {
    "파킹 어시스트Ⅰ": "헤드업 디스플레이, 서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 인조가죽 적용 내장(크래쉬패드), 측방 주차 거리 경고 \n※ 내비게이션 적용 시, 선택 가능",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|가솔린 2.0|익스클루시브": {
    "플래티넘Ⅰ": "헤드업 디스플레이, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, 인조가죽 적용 내장(크래쉬 패드)",
    "컴포트Ⅱ(2열 편의)": "2열 열선시트, 2열 수동식 도어커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 6:4 분할 폴딩, 2열 암레스트",
    "익스테리어 디자인Ⅰ": "18인치 알로이 휠 & 피렐리 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "파노라마 선루프": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다."
  },
  "쏘나타 디 엣지|가솔린 2.0|인스퍼레이션": {
    "파노라마 선루프": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다.",
    "BOSE 프리미엄 사운드": "12개의 고성능 스피커와 함께 적용된 BOSE 프리미엄 사운드 시스템으로 풍부한 음향을 즐기실 수 있습니다.",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 1": {
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), \n후방 교차 충돌방지 보조, 안전 하차 보조 ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "인포테인먼트 내비Ⅲ": "12.3인치 내비게이션(인카페이먼트), 파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 듀얼 풀오토 에어컨(미세먼지 센서/공기청정모드/오토 디포그), \n레인센서, 앰비언트 무드램프, 크롬 인사이드 도어 핸들, 멜란지 니트 내장재(헤드라이닝/필라) ※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "컴포트Ⅰ(1열 편의)": "1열 통풍시트, 운전석 자세 메모리 시스템, 동승석 전동시트(4way, 릴랙션 컴포트, 워크인 디바이스)",
    "익스테리어 디자인Ⅲ": "17인치 알로이 휠 & 타이어, Full LED 헤드램프(프로젝션 타입), 다이내믹 웰컴 라이트(앞/뒤), 순차 점등 방향지시등(앞)",
    "하이패스 + ECM 룸미러": ""
  },
  "쏘나타 디 엣지|렌터카 LPG|Business 2": {
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), \n후방 교차 충돌방지 보조, 안전 하차 보조 ※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "플래티넘Ⅱ": "스마트폰 무선충전, 디지털 키 2, 실내 지문 인증 시스템(시동/결제), 터치타입 아웃사이드 도어 핸들, BOSE 프리미엄 사운드(12스피커, 외장앰프)",
    "컴포트Ⅲ(2열 편의)": "2열 열선시트, 2열 수동식 도어 커튼, 뒷면 전동식 커튼, 2열 승객 알림, 2열 암레스트(스키쓰루 포함)",
    "파노라마 선루프": "넓은 채광 면적으로 뛰어난 개방감과 차별화된 외관 스타일을 연출합니다.",
    "빌트인 캠 2 + 증강현실 내비게이션": "고해상도 전용 전·후방 카메라로 주/야간 화질이 우수하며 음성 녹음, 대용량 외장 메모리, OTA 기능, 차량 주행 정보 저장 및 재생 기능(지도 연동 등)이 적용되었습니다. 블루링크를 통해 주차 및 충격 감지 저장 영상 전송 및 빌트인 캠 상태 정보도 제공합니다."
  },
  "아반떼|가솔린 1.6|스마트": {
    "컨비니언스": "듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함)",
    "인포테인먼트 내비": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리, 인카페이먼트, 발레모드), 내비게이션 무선 업데이트, 앰비언트 무드램프",
    "하이패스": "하이패스",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "17인치 알로이 휠 & 타이어Ⅰ": "17인치 알로이 휠 & 타이어Ⅰ(15인치 → 17인치)"
  },
  "아반떼|가솔린 1.6|모던": {
    "선루프": "선루프",
    "파킹 어시스트 플러스": "파노라마 디스플레이(클러스터(10.25인치 컬러 LCD), 클러스터/내비게이션 일체형 글라스), 서라운드 뷰 모니터, 후측방 모니터, 후방 주차 충돌방지 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞), LED 리어 콤비램프, LED 보조제동등",
    "현대 스마트센스": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고",
    "컴포트Ⅰ": "운전석 전동시트(8way, 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(4way), 현대 디지털 키 2 터치, 스마트폰 무선충전, 2열 열선시트, 2열 암레스트, \n2열 6:4 폴딩, 2열 높이조절 헤드레스트(센터), 동승석 시트백 포켓",
    "17인치 알로이 휠 & 타이어Ⅱ": "17인치 알로이 휠 & 타이어Ⅱ(16인치 → 17인치)",
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "아반떼|가솔린 1.6|인스퍼레이션": {
    "선루프": "선루프",
    "빌트인 캠(보조배터리 포함)*": "빌트인 캠, 보조배터리",
    "세이지 그린 인테리어 컬러": "세이지 그린 인테리어 컬러"
  },
  "더 뉴 그랜저|가솔린|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "시트 컴포트 플러스": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) \n※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용",
    "스마트 비전 루프": "",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 그랜저|가솔린|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 그랜저|가솔린|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), \n1열 모니터링 시스템(영상회의 지원)",
    "시트 컴포트Ⅰ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트)",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "20인치 알로이 휠 & 타이어": "20인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 그랜저|LPG 3.5|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)",
    "파노라마 선루프": "",
    "빌트인 캠2 Plus": ""
  },
  "더 뉴 그랜저|LPG 3.5|익스클루시브": {
    "플래티넘(LPG 3.5)": "인터랙티브 앰비언트 무드램프(순차 점등, 주행모드 연동 등), 19인치 알로이 휠 & 타이어, 2열 통풍 시트, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), \n1열 모니터링 시스템(영상회의 지원)",
    "BOSE 프리미엄 사운드 패키지": "BOSE 프리미엄 사운드(14스피커, 외장 앰프), 액티브 로드 노이즈 컨트롤, 2열 고급형 암레스트(오디오 컨트롤러 포함)",
    "파노라마 선루프": "",
    "빌트인 캠2 Plus": ""
  },
  "더 뉴 그랜저|하이브리드|프리미엄": {
    "현대 스마트센스Ⅰ": "후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 1열 모니터링 시스템(영상회의 지원)",
    "파킹 어시스트": "서라운드 뷰 모니터(차량 이미지 투명 표시), 후방 주차 충돌방지 보조, 후측방 모니터, 원격 스마트 주차 보조, 측방 주차 거리 경고, 기억 후진 보조",
    "프리미엄 초이스": "디지털 키 2, 천연 가죽 시트(퀼팅 적용), 스마트 파워 트렁크, 듀얼 스마트폰 무선 충전(맥세이프 호환, 일반 고속)",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 그랜저|하이브리드|익스클루시브": {
    "플래티넘": "인터랙티브 앰비언트 무드램프(순차 점등, 주행 모드 연동 등), 19인치 알로이 휠 & 타이어, 프리뷰 전자제어 서스펜션, 헤드업 디스플레이",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월 시 대향차/측방 접근차/회피 조향 보조), 고속도로 주행 보조 2, 어린이 탑승 감지(2열), 후측방 충돌방지 보조(주행), 1열 모니터링 \n시스템(영상회의 지원)",
    "시트 컴포트Ⅱ": "2열 리클라이닝 시트, 2열 통풍 시트, 동승석 에르고 모션 시트(4way 럼버 서포트), 빌트인 캠 2 Plus ※ 빌트인 캠 2 Plus 중복 선택 불가",
    "BOSE 프리미엄 사운드 패키지": "",
    "20인치 알로이 휠 & 타이어": "",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 그랜저|하이브리드|캘리그래피": {
    "20인치 알로이 휠 & 타이어": "",
    "시트 컴포트 플러스": "2열 리클라이닝 시트, 2열 전동식 도어커튼, 동승석 에르고 모션 시트(4way 럼버 서포트), 양문형 콘솔 암레스트(열선 포함) \n※ 리어 암레스트 커버 리얼 우드 소재 또는 리얼 알루미늄 소재 내장재 적용",
    "스마트 비전 루프": "",
    "파노라마 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "베뉴|가솔린 1.6|스마트": {
    "하이패스": "",
    "내비게이션 패키지": "8인치 내비게이션(블루링크, 폰 프로젝션, 블루투스 핸즈프리), 일반 오디오 시스템(6스피커)"
  },
  "베뉴|가솔린 1.6|프리미엄": {
    "선루프": "",
    "투톤 컬러 루프": "",
    "스타일": "17인치 알로이 휠 & 타이어, 루프랙",
    "테크": "스마트폰 무선충전, 디지털 키 2 터치"
  },
  "베뉴|가솔린 1.6|플럭스": {
    "선루프": "",
    "투톤 컬러 루프": "",
    "17인치 블랙 알로이 휠": ""
  },
  "코나|가솔린|모던": {
    "내비게이션 패키지Ⅰ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 듀얼 풀오토 에어컨(오토 디포그/미세먼지 센서/공기청정모드/애프터블로우 포함), ECM 룸미러, 레인센서\n※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, \n안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)\n※ 내비게이션 적용 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로) 포함",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), \nLED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)",
    "하이패스": ""
  },
  "코나|가솔린|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD)",
    "스타일 Lite": "앰비언트 무드램프, Full LED 헤드램프(프로젝션 타입), LED 방향지시등(앞/뒤)",
    "현대 스마트센스Ⅲ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)\n※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "클러스터(12.3인치 컬러 LCD)": "",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "하이패스": ""
  },
  "코나|가솔린|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD)",
    "현대 스마트센스Ⅲ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)\n※ 내비게이션 선택 시, 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "클러스터(12.3인치 컬러 LCD)": "",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "19인치 알로이 휠 & 타이어": "",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, \n스티어링 휠 키 컬러 및 포인트 컬러 가니쉬\n※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나|가솔린|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "",
    "투톤 컬러 루프": "",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, \n스티어링 휠 키 컬러 및 포인트 컬러 가니쉬\n※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "코나 하이브리드|하이브리드|모던": {
    "내비게이션 패키지Ⅱ": "12.3인치 내비게이션(인카페이먼트/e hi-pass), ECM 룸미러, 레인센서\n※ 하이패스 추가 선택 시, e hi-pass 기능 사용 가능",
    "현대 스마트센스Ⅰ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, \n안전 하차 경고, 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "컴포트 초이스": "인조가죽 시트(동승석 시트백 포켓 포함), 인조가죽 적용 내장(동승석 오픈 트레이, 도어 센터트림, 도어 암레스트), \nLED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)",
    "하이패스": ""
  },
  "코나 하이브리드|하이브리드|H-Pick": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD)",
    "현대 스마트센스Ⅲ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "클러스터(12.3인치 컬러 LCD)": "",
    "스타일Ⅰ": "Full LED 헤드램프(프로젝션 타입), LED 방향 지시등(앞/뒤), 18인치 알로이 휠 & 타이어, 앰비언트 무드램프",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "컨비니언스": "스마트 파워 테일게이트, 스마트폰 무선 충전",
    "빌트인 캠 2, 증강현실 내비게이션": ""
  },
  "코나 하이브리드|하이브리드|프리미엄": {
    "베스트 셀렉션": "현대 스마트센스Ⅲ + 클러스터(12.3인치 컬러 LCD)",
    "현대 스마트센스Ⅲ": "진동 경고 스티어링 휠, 전방 충돌방지 보조(교차로 대향차/정면 대향차), 고속도로 주행 보조, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(안전구간/곡선로)",
    "클러스터(12.3인치 컬러 LCD)": "",
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "시트플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트",
    "18인치 알로이 휠 & 타이어": "",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, \n스티어링 휠 키 컬러 및 포인트 컬러 가니쉬\n※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨"
  },
  "코나 하이브리드|하이브리드|인스퍼레이션": {
    "파킹어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "",
    "투톤 컬러 루프": "",
    "실내 컬러 패키지": "우븐 패브릭 감싸기 적용 내장(도어 트림, 오픈트레이), 1열 시트 디자인 펀칭 및 컬러 포인트, 에어벤트 노브 및 가니쉬 컬러 포인트, \n스티어링 휠 키 컬러 및 포인트 컬러 가니쉬\n※ 단, 베이지 컬러 패키지는 스티어링 휠 포인트 컬러 가니쉬 미적용되며, 블랙 헤드라이닝 적용됨",
    "에코패키지": "메쉬 타입 헤드레스트(1열), 친환경 스웨이드/친환경 천연가죽 콤비 시트, Recycled PET 원사 헤드라이닝, Recycled PET 원사 플로어 매트, BIO 페인트 혼커버"
  },
  "캐스퍼|가솔린 1.0|스마트": {
    "선루프": "",
    "캐스퍼 액티브Ⅰ": "카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크",
    "인포테인먼트 내비 플러스Ⅰ": "10.25인치 내비게이션(블루링크, 폰 프로젝션, 인카페이먼트, 블루투스 핸즈프리), 6스피커, 버튼시동 & 스마트키, 스마트키 원격시동, 리어 와이퍼 & 와셔, 1열 버튼 타입 아웃사이드 도어 핸들",
    "17인치 알로이 휠 & 타이어": "17인치 알로이 휠 & 타이어   ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시   ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시",
    "17인치 알로이 휠 패키지": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크"
  },
  "캐스퍼|가솔린 1.0|디 에센셜": {
    "캐스퍼 액티브Ⅰ": "카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리, 후륜 디스크 브레이크",
    "현대 스마트센스Ⅰ": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n전동식 파킹 브레이크(오토홀드 포함), 고속도로 주행 보조",
    "익스테리어 디자인": "Full LED 헤드램프(프로젝션 타입), 바디컬러 아웃사이드 미러(LED 방향지시등), LED 리어콤비램프",
    "17인치 알로이 휠 & 타이어": "17인치 알로이 휠 & 타이어   ※ 스마트 : 캐스퍼 액티브Ⅰ선택 시   ※ 디 에센셜 : 캐스퍼 액티브Ⅰ혹은 현대 스마트센스Ⅰ선택 시",
    "17인치 알로이 휠 패키지": "17인치 알로이 휠 & 타이어, 후륜 디스크 브레이크",
    "컴포트Ⅰ": "1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB C타입 단자(2열 충전 1개), 세이프티 파워 윈도우(동승석)",
    "스토리지": "커스터마이징(러기지 볼팅, 동승석 시트백 보드)   ※ 컴포트Ⅰ선택 시",
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트)"
  },
  "캐스퍼|가솔린 1.0|인스퍼레이션": {
    "캐스퍼 액티브Ⅱ": "카파 1.0 터보 엔진, 라디에이터 그릴 크롬 테두리",
    "액티브 플러스": "커스터마이징(17인치 다크 그레이 알로이 휠, 리어 스포일러)   ※ 캐스퍼 액티브Ⅱ선택 시",
    "스토리지": "커스터마이징(러기지 볼팅, 동승석 시트백 보드)   ※ 컴포트Ⅰ선택 시",
    "실내 컬러 패키지(베이지/오렌지 브라운)": "베이지/오렌지 브라운 내장(시트/스티어링 휠/크래쉬패드/센터 콘솔/도어트림/도어 암레스트/헤드라이닝/플로어 매트)"
  },
  "투싼|가솔린 1.6 터보|모던": {
    "파노라마 선루프 + 루프랙": "",
    "익스테리어 디자인Ⅰ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 타이어",
    "인포테인먼트 내비": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 듀얼 풀오토 에어컨(오토 디포그, 미세먼지 센서, 공기청정모드 포함), \n레인센서, 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림\n※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버"
  },
  "투싼|가솔린 1.6 터보|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "익스테리어 디자인Ⅱ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "컴포트Ⅱ": "운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림\n※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "익스테리어 디자인Ⅱ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "파킹어시스트Ⅰ(가솔린)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|가솔린 1.6 터보|인스퍼레이션": {
    "베스트 셀렉션Ⅲ(가솔린)": "파킹어시스트Ⅲ(가솔린) + BOSE 프리미엄 사운드",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "파킹어시스트Ⅲ(가솔린)": "후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고",
    "BOSE 프리미엄 사운드": "",
    "19인치 알로이 휠 & 미쉐린 타이어": ""
  },
  "투싼|하이브리드|모던": {
    "파노라마 선루프 + 루프랙": "",
    "익스테리어 디자인Ⅰ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 18인치 알로이 휠 & 컨티넨탈 타이어",
    "인포테인먼트 내비(HEV)": "12.3인치 내비게이션(인카페이먼트/e hi-pass), 실내 지문 인증 시스템(결제), 하이패스",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림\n※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "컴포트Ⅰ": "1열 통풍시트, 운전석 전동시트(8way), 2열 열선시트, 2열 폴딩레버"
  },
  "투싼|하이브리드|프리미엄": {
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "익스테리어 디자인Ⅱ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "컴포트Ⅱ": "운전석 전동시트(8way, 자세 메모리 시스템), 동승석 전동시트(8way, 워크인 디바이스), 2열 열선시트",
    "현대 스마트센스": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(스탑앤고 기능 포함), 어드밴스드 후석 승객 알림\n※ 인포테인먼트 내비 선택 시 : 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로) 포함",
    "파킹어시스트Ⅱ(HEV)": "파노라믹 커브드 디스플레이, 클러스터(12.3인치 컬러 LCD), 후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|H-Pick": {
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "익스테리어 디자인Ⅱ": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "파킹어시스트Ⅱ(HEV)": "Full LED 헤드램프(프로젝션 타입, 히든라이팅 주간주행등/지능형 헤드램프 포함), LED 리어콤비램프, 19인치 알로이 휠 & 타이어",
    "플래티넘": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 디지털 키 2, 앰비언트 무드램프"
  },
  "투싼|하이브리드|인스퍼레이션": {
    "베스트 셀렉션Ⅳ(HEV)": "파킹어시스트Ⅳ(HEV) + BOSE 프리미엄 사운드",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "파노라마 선루프": "",
    "파킹어시스트Ⅳ(HEV)": "후측방 모니터, 서라운드 뷰 모니터, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조",
    "BOSE 프리미엄 사운드": "",
    "19인치 알로이 휠 & 미쉐린 타이어": ""
  },
  "싼타페|가솔린 2.5 터보|익스클루시브": {
    "동승석 8way 전동시트": "",
    "헤드업디스플레이": "",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조"
  },
  "싼타페|가솔린 2.5 터보|프레스티지": {
    "듀얼 와이드 선루프": "",
    "헤드업디스플레이": "",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트), \n전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "디자인 플러스Ⅰ": "20인치 휠 & 타이어, 천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, \n2열 수동식 도어커튼\n※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능"
  },
  "싼타페|가솔린 2.5 터보|H-Pick": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "20인치 휠 & 타이어": ""
  },
  "싼타페|가솔린 2.5 터보|블랙 익스테리어": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "20인치 휠 & 타이어": "",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "HTRAC, 험로주행모드": "",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": ""
  },
  "싼타페|가솔린 2.5 터보|캘리그래피": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": ""
  },
  "싼타페|가솔린 2.5 터보|블랙 잉크": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "블랙 잉크 플러스": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "HTRAC, 험로주행모드": "",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": ""
  },
  "싼타페|하이브리드|익스클루시브": {
    "듀얼 와이드 선루프 + 루프랙": "",
    "동승석 8way 전동시트": "",
    "헤드업디스플레이": "",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "플래티넘Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼)",
    "베스트 셀렉션Ⅰ": "디지털 키 2, 스마트폰 무선충전(듀얼), 서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조"
  },
  "싼타페|하이브리드|프레스티지": {
    "듀얼 와이드 선루프": "",
    "헤드업디스플레이": "",
    "시트플러스": "운전석 에르고 모션 시트(18way, 4way 럼버 서포트, 자세 메모리 시스템, 스트레칭 모드), 동승석 워크인 디바이스, 1열 릴랙션 컴포트 시트(레그레스트), \n전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 스마트 자세제어 시스템",
    "파킹 어시스트 플러스Ⅰ": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조",
    "디자인 플러스Ⅱ": "천연가죽 시트, 인조가죽 적용 내장(멀티 트레이 커버, 도어 암레스트, 콘솔 사이드 부), 스웨이드 내장(헤드라이닝/필라), 앰비언트 무드램프, 2열 수동식 도어커튼\n※ 내장 컬러 : 블랙/그레이 투톤/피칸 브라운 투톤 중 선택 가능",
    "20인치 휠 & 타이어": ""
  },
  "싼타페|하이브리드|H-Pick": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "20인치 휠 & 타이어": ""
  },
  "싼타페|하이브리드|블랙 익스테리어": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "20인치 휠 & 타이어": "",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "싼타페|하이브리드|캘리그래피": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": ""
  },
  "싼타페|하이브리드|블랙 잉크": {
    "듀얼 와이드 선루프": "",
    "BOSE 프리미엄 사운드": "",
    "블랙 잉크 플러스": "블랙 사이드스텝, 라이프스타일 패키지(블랙잉크 플러스 전용 도어스팟램프 포함)",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "6인승": "2열 전동 독립시트(원터치 릴렉스, 윙타입 헤드레스트), 2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "7인승": "2열 원터치 워크인, 3열 시트(리클라이닝, 유아용 시트 고정 장치, USB C타입 충전 단자, 퍼스널 램프, 에어컨)",
    "라이프 스타일": "리버서블 러기지 매트, 메탈 트랜스버스 트림, LED 도어스팟 램프, LED 테일게이트 램프"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  },
  "디 올 뉴 팰리세이드|하이브리드|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "디 올 뉴 팰리세이드|하이브리드|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 아이오닉 6|전기|E-Value+ 스탠다드": {
    "컴포트 초이스": "인조가죽 시트, 1열 열선/통풍시트, 운전석 전동시트(8way, 럼버서포트), 레인센서, ECM 룸미러, 하이패스, 오토 플러시 도어 핸들",
    "현대 스마트센스Ⅰ": "전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 안전 하차 경고, \n스마트 크루즈 컨트롤(운전 스타일 연동 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후방 교차 충돌방지 보조, \n운전자 모니터링 시스템"
  },
  "더 뉴 아이오닉 6|전기|Exclusive 스탠다드": {
    "컨비니언스": "하이패스, 디지털 키 2, 스마트폰 무선충전",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 안전 하차 보조, \n스마트 크루즈 컨트롤(운전 스타일 연동 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후방 교차 충돌방지 보조, \n운전자 모니터링 시스템",
    "파킹 어시스트": "후측방 모니터, 서라운드 뷰 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조",
    "컴포트 플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 럼버서포트, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트, \n어드밴스드 후석 승객 알림",
    "플래티넘": "Full LED 헤드램프(프로젝션 타입), 지능형 헤드램프(IFS), 다이내믹 웰컴 라이트, 천연가죽 시트, 에코 프로세스 천연가죽 시트, Recycled 카펫/카매트, \n메탈 페달/도어스커프, 순차 점등 방향지시등(앞)",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 아이오닉 6|전기|Exclusive 롱레인지": {
    "컨비니언스": "하이패스, 디지털 키 2, 스마트폰 무선충전",
    "현대 스마트센스Ⅱ": "전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조), 후측방 충돌 경고(주행), 후측방 충돌방지 보조(전진 출차), 안전 하차 보조, \n스마트 크루즈 컨트롤(운전 스타일 연동 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후방 교차 충돌방지 보조, \n운전자 모니터링 시스템",
    "파킹 어시스트": "후측방 모니터, 서라운드 뷰 모니터, 측방 주차 거리 경고, 후방 주차 충돌방지 보조",
    "컴포트 플러스": "운전석 전동시트(릴랙션 컴포트, 자세 메모리 시스템), 동승석 전동시트(8way, 럼버서포트, 릴랙션 컴포트, 워크인 디바이스), 2열 열선시트, \n어드밴스드 후석 승객 알림",
    "플래티넘": "Full LED 헤드램프(프로젝션 타입), 지능형 헤드램프(IFS), 다이내믹 웰컴 라이트, 천연가죽 시트, 에코 프로세스 천연가죽 시트, Recycled 카펫/카매트, \n메탈 페달/도어스커프, 순차 점등 방향지시등(앞)",
    "빌트인 캠 2 Plus": "",
    "HTRAC(전륜 모터)": "",
    "와이드 선루프": "",
    "20인치 휠 & 피렐리 타이어": ""
  },
  "더 뉴 아이오닉 6|전기|Prestige 스탠다드": {
    "디지털 사이드 미러": "디지털 사이드 미러(카메라 및 OLED 모니터), 디지털 사이드 미러 일체형 대시보드",
    "하이테크 플러스": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 전기차 액티브 사운드 디자인(e-ASD), 디지털 키 2",
    "빌트인 캠 2 Plus": ""
  },
  "더 뉴 아이오닉 6|전기|Prestige 롱레인지": {
    "디지털 사이드 미러": "디지털 사이드 미러(카메라 및 OLED 모니터), 디지털 사이드 미러 일체형 대시보드",
    "하이테크 플러스": "BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 전기차 액티브 사운드 디자인(e-ASD), 디지털 키 2",
    "빌트인 캠 2 Plus": "",
    "HTRAC(전륜 모터)": "",
    "와이드 선루프": "",
    "20인치 휠 & 피렐리 타이어": ""
  },
  "더 뉴 아이오닉 6|전기|E-Lite 롱레인지": {
    "HTRAC(전륜 모터)": "",
    "20인치 휠 & 피렐리 타이어": ""
  },
  "아이오닉 5|전기|E-Value+ 스탠다드": {
    "현대 스마트센스": "전방 충돌방지 보조(교차차량/추월시 대향차/측방 접근차,회피 조향 보조 기능 포함),후측방 충돌방지 보조(주행, 전진출차), 안전 하차 보조, \n스마트 크루즈 컨트롤(운전 스타일 연동 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로 포함), 고속도로 주행 보조 2, 후방 교차 충돌방지 보조, 전자식 차일드 락",
    "컴포트 초이스": "인조가죽 시트, 운전석 전동시트(8way, 럼버서포트), 1열 통풍/열선시트, 가죽 스티어링 휠(열선, 인터랙티브 픽셀 라이트 포함), 하이패스, 레인센서, ECM 룸미러",
    "빌트인 캠 2 패키지": "빌트인 캠 2, 증강현실 내비게이션, 스마트 파워 테일게이트        \n※ 컴포트 초이스 선택 시"
  },
  "아이오닉 5|전기|Long Range 모던": {
    "컴포트": "운전석 전동시트(8way, 럼버서포트, 레그레스트, 릴랙션 컴포트), 동승석 전동시트(8way, 럼버서포트, 레그레스트, 릴랙션 컴포트), 1열 통풍시트, \n2열 전동 슬라이딩 시트(암레스트 포함), 2열 열선시트, 전좌석 시트 메모리 시스템, 동승석 워크인 디바이스",
    "현대 스마트센스": "전방 충돌방지 보조(교차차량/추월시 대향차/측방 접근차,회피 조향 보조 기능 포함),후측방 충돌방지 보조(주행, 전진출차), 안전 하차 보조, \n스마트 크루즈 컨트롤(운전 스타일 연동 포함), 내비게이션 기반 스마트 크루즈 컨트롤(진출입로 포함), 고속도로 주행 보조 2, 후방 교차 충돌방지 보조, 전자식 차일드 락",
    "스타일": "Full LED 헤드램프(프로젝션 타입), 지능형 헤드램프(IFS), 가니쉬 히든 라이팅(충전 표시등 포함), LED 방향지시등, \n외장 고급화(메탈페인트 범퍼하단/도어 사이드, 도어 사이드 크롬 몰딩)",
    "파킹 어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 전방/측방/후방 주차 충돌방지 보조, 원격 스마트 주차 보조 2",
    "하이패스 패키지": "하이패스, ECM 룸미러",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "HTRAC": ""
  },
  "아이오닉 5|전기|Long Range 프리미엄": {
    "파킹 어시스트": "서라운드 뷰 모니터, 후측방 모니터, 측방 주차 거리 경고, 전방/측방/후방 주차 충돌방지 보조, 원격 스마트 주차 보조 2",
    "컴포트 플러스": "동승석 전동시트(레그 레스트, 릴랙션 컴포트), 동승석 워크인 디바이스, 전좌석 시트 메모리 시스템, 2열 전동 슬라이딩 시트, 어드밴스드 후석 승객 알림, \n2열 수동식 도어 커튼",
    "비전루프": "",
    "플래티넘": "디지털 키 2, BOSE 프리미엄 사운드(8스피커, 외장앰프 포함), 전기차 액티브 사운드 디자인(e-ASD)",
    "디지털 센터 미러": "",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "20인치 휠 & 미쉐린 타이어": "",
    "HTRAC": ""
  },
  "아이오닉 5|전기|Long Range 인스퍼레이션": {
    "디지털 사이드 미러": "디지털 사이드 미러(카메라 및 OLED 모니터)\n※ N Line에서는 파킹 어시스트 선택 시 선택 가능",
    "비전루프": "",
    "디지털 센터 미러": "",
    "빌트인 캠 2, 증강현실 내비게이션": "",
    "20인치 휠 & 미쉐린 타이어": "",
    "HTRAC": ""
  },
  "아이오닉 5|전기|E-Lite 롱레인지": {
    "HTRAC": ""
  },
  "포터 II|LPG 2.5 터보|2WD 슈퍼캡 초장축 스마트": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, \nUSB 충전기(1열 1개)",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 슈퍼캡 초장축 모던": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "내비게이션 패키지Ⅱ": "",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 슈퍼캡 초장축 프리미엄": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 더블캡 초장축 스마트": {
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, \nUSB 충전기(1열 1개)",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 더블캡 초장축 모던": {
    "내비게이션 패키지Ⅱ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 풀오토 에어컨, 하이패스",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 더블캡 초장축 프리미엄": {
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 일반캡 초장축 스마트": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, USB 충전기(1열 1개)",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 일반캡 초장축 모던": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "내비게이션 패키지Ⅱ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 풀오토 에어컨, 하이패스",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|2WD 일반캡 초장축 프리미엄": {
    "중량짐용 후륜 현가장치": "",
    "PTO(Power Take Off)": "",
    "5단 자동변속기": "",
    "플라스틱 적재함 커버": ""
  },
  "포터 II|LPG 2.5 터보|4WD 슈퍼캡 장축 스마트": {
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, \nUSB 충전기(1열 1개)",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 슈퍼캡 장축 모던": {
    "내비게이션 패키지Ⅱ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 풀오토 에어컨, 하이패스",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 슈퍼캡 장축 프리미엄": {
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 더블캡 장축 스마트": {
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, \nUSB 충전기(1열 1개)",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 더블캡 장축 모던": {
    "내비게이션 패키지Ⅱ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 풀오토 에어컨, 하이패스",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 더블캡 장축 프리미엄": {
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 일반캡 장축 스마트": {
    "내비게이션 패키지Ⅰ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 후방 모니터, 풀오토 에어컨, 하이패스, \nUSB 충전기(1열 1개)",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 일반캡 장축 모던": {
    "내비게이션 패키지Ⅱ": "10.25인치 내비게이션(폰 프로젝션, 블루링크 포함), 내비게이션 무선 업데이트, 버튼시동 & 스마트키, 풀오토 에어컨, 하이패스",
    "PTO(Power Take Off)": ""
  },
  "포터 II|LPG 2.5 터보|4WD 일반캡 장축 프리미엄": {
    "PTO(Power Take Off)": ""
  },
  "더 뉴 스타리아|LPG 3.5|투어러 11인승 스마트": {
    "멀티미디어 내비플러스Ⅰ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n하이패스, 어드밴스드 후석 승객 알림, 풀오토 에어컨(미세먼지 센서/공기청정모드)"
  },
  "더 뉴 스타리아|LPG 3.5|투어러 11인승 모던": {
    "빌트인 캠 2 PLUS, 증강현실 내비게이션": "",
    "듀얼 와이드 선루프 + LED 실내등": "",
    "멀티미디어 내비플러스Ⅱ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n어드밴스드 후석 승객 알림, 풀오토 에어컨(미세먼지 센서/공기청정모드)",
    "익스테리어 디자인(11인승)": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프, 18인치 알로이 휠 & 타이어, 2열 플러쉬 글래스\n※ 11인승은 자동차 안전기준의 등화장치 설치기준에 따라 차량 앞면 중앙부 LED 포지셔닝 램프 미적용",
    "컴포트": "1열 통풍시트, 운전석 전동시트(8way, 4way 럼버서포트)",
    "테크Ⅰ": "서라운드 뷰 모니터, 측방 주차 거리 경고, 후측방 모니터, 스마트폰 무선충전, 후석 뷰, 후석 음성 인식          \n※ 멀티미디어 내비플러스Ⅱ 선택 시",
    "테크Ⅱ": "스마트 파워 슬라이딩 도어, 스마트 파워 테일게이트, 안전 하차 보조",
    "트레일러 패키지": ""
  },
  "더 뉴 스타리아|LPG 3.5|카고 3인승 스마트": {
    "멀티미디어 내비플러스Ⅰ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n하이패스, 풀오토 에어컨(미세먼지 센서/공기청정모드)",
    "슬라이딩 카고 베드": "",
    "트윈 스윙 도어": ""
  },
  "더 뉴 스타리아|LPG 3.5|카고 3인승 모던": {
    "빌트인 캠 2 PLUS, 증강현실 내비게이션": "",
    "윈도우 밴(3인승)": "",
    "멀티미디어 내비플러스Ⅱ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n풀오토 에어컨(미세먼지 센서/공기청정모드)",
    "익스테리어 디자인(3인승)": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프",
    "컴포트(3인승)": "스마트 파워 테일게이트, 1열 통풍시트     ※ 트윈 스윙 도어와 중복 선택 불가",
    "테크": "서라운드 뷰 모니터, 측방 주차 거리 경고, 후측방 모니터, 스마트폰 무선충전     ※ 트윈 스윙 도어와 중복 선택 불가     ※ 멀티미디어 내비플러스Ⅱ 선택 시",
    "슬라이딩 카고 베드": "",
    "트윈 스윙 도어": ""
  },
  "더 뉴 스타리아|LPG 3.5|카고 5인승 스마트": {
    "멀티미디어 내비플러스Ⅰ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n하이패스, 풀오토 에어컨(미세먼지 센서/공기청정모드)",
    "슬라이딩 카고 베드": "",
    "트윈 스윙 도어": ""
  },
  "더 뉴 스타리아|LPG 3.5|카고 5인승 모던": {
    "빌트인 캠 2 PLUS, 증강현실 내비게이션": "",
    "윈도우 밴(5인승)": "",
    "멀티미디어 내비플러스Ⅱ": "클러스터(12.3인치 컬러 LCD), 12.3인치 내비게이션(인카페이먼트, e hi-pass), 고속도로 주행 보조, 내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로), \n풀오토 에어컨(미세먼지 센서/공기청정모드)",
    "익스테리어 디자인(5인승)": "LED 헤드램프(MFR 타입), LED 주간주행등, LED 포지셔닝 램프, 2열 플러쉬 글래스",
    "컴포트(5인승)": "스마트 파워 테일게이트, 1열 통풍시트, 운전석 전동시트(8way, 4way 럼버서포트)     ※ 트윈 스윙 도어와 중복 선택 불가",
    "테크": "서라운드 뷰 모니터, 측방 주차 거리 경고, 후측방 모니터, 스마트폰 무선충전     ※ 트윈 스윙 도어와 중복 선택 불가     ※ 멀티미디어 내비플러스Ⅱ 선택 시",
    "슬라이딩 카고 베드": "",
    "트윈 스윙 도어": ""
  }
};

Object.keys(dashboardData.cars).forEach((key) => delete dashboardData.cars[key]);
Object.assign(dashboardData.cars, v34UserConfirmedCars);

Object.keys(optionLibrary).forEach((key) => delete optionLibrary[key]);
Object.assign(optionLibrary, v34UserConfirmedOptionLibrary);

Object.keys(trimOptionDetailOverrides).forEach((key) => delete trimOptionDetailOverrides[key]);
Object.assign(trimOptionDetailOverrides, v34UserConfirmedTrimOptionDetails);

/* v35: 팰리세이드 9인승/7인승 구분 */
const v35PalisadeSplit = {
  "fuels": {
    "가솔린 2.5 터보 9인승": {
      "displayFuel": "가솔린 2.5 터보 9인승",
      "trims": {
        "익스클루시브": {
          "displayTrim": "가솔린 2.5 터보 9인승 익스클루시브",
          "price": "",
          "options": [
            "현대 스마트센스",
            "컴포트"
          ]
        },
        "프레스티지": {
          "displayTrim": "가솔린 2.5 터보 9인승 프레스티지",
          "price": "",
          "options": [
            "컴포트 플러스(9인승)",
            "원격 스마트 주차 보조",
            "플래티넘",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        },
        "캘리그래피": {
          "displayTrim": "가솔린 2.5 터보 9인승 캘리그래피",
          "price": "",
          "options": [
            "프리뷰 전자제어 서스펜션",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        }
      }
    },
    "가솔린 2.5 터보 7인승": {
      "displayFuel": "가솔린 2.5 터보 7인승",
      "trims": {
        "익스클루시브": {
          "displayTrim": "가솔린 2.5 터보 7인승 익스클루시브",
          "price": "",
          "options": [
            "현대 스마트센스",
            "컴포트"
          ]
        },
        "프레스티지": {
          "displayTrim": "가솔린 2.5 터보 7인승 프레스티지",
          "price": "",
          "options": [
            "컴포트 플러스(7인승)",
            "2열 다이내믹 바디케어 시트",
            "원격 스마트 주차 보조",
            "플래티넘",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        },
        "캘리그래피": {
          "displayTrim": "가솔린 2.5 터보 7인승 캘리그래피",
          "price": "",
          "options": [
            "2열 다이내믹 바디케어 시트",
            "프리뷰 전자제어 서스펜션",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        }
      }
    },
    "하이브리드 9인승": {
      "displayFuel": "하이브리드 9인승",
      "trims": {
        "익스클루시브": {
          "displayTrim": "하이브리드 9인승 익스클루시브",
          "price": "",
          "options": [
            "현대 스마트센스",
            "컴포트"
          ]
        },
        "프레스티지": {
          "displayTrim": "하이브리드 9인승 프레스티지",
          "price": "",
          "options": [
            "컴포트 플러스(9인승)",
            "원격 스마트 주차 보조",
            "플래티넘",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        },
        "캘리그래피": {
          "displayTrim": "하이브리드 9인승 캘리그래피",
          "price": "",
          "options": [
            "프리뷰 전자제어 서스펜션",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        }
      }
    },
    "하이브리드 7인승": {
      "displayFuel": "하이브리드 7인승",
      "trims": {
        "익스클루시브": {
          "displayTrim": "하이브리드 7인승 익스클루시브",
          "price": "",
          "options": [
            "현대 스마트센스",
            "컴포트"
          ]
        },
        "프레스티지": {
          "displayTrim": "하이브리드 7인승 프레스티지",
          "price": "",
          "options": [
            "컴포트 플러스(7인승)",
            "2열 다이내믹 바디케어 시트",
            "원격 스마트 주차 보조",
            "플래티넘",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        },
        "캘리그래피": {
          "displayTrim": "하이브리드 7인승 캘리그래피",
          "price": "",
          "options": [
            "2열 다이내믹 바디케어 시트",
            "프리뷰 전자제어 서스펜션",
            "듀얼 와이드 선루프",
            "빌트인 캠 2 Plus"
          ]
        }
      }
    }
  }
};
const v35PalisadeOptionUpdates = {
  "컴포트 플러스(9인승)": {
    "price": "1,850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트"
  },
  "컴포트 플러스(7인승)": {
    "price": "2,200,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "2열 다이내믹 바디케어 시트": {
    "price": "800,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "원격 스마트 주차 보조": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "플래티넘": {
    "price": "1,710,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)"
  },
  "듀얼 와이드 선루프": {
    "price": "850,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "빌트인 캠 2 Plus": {
    "price": "660,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": ""
  },
  "프리뷰 전자제어 서스펜션": {
    "price": "1,230,000원",
    "image": "images/options/smart_sense1.jpg",
    "desc": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션"
  }
};
const v35PalisadeDetailOverrides = {
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 9인승|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 9인승|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 9인승|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 7인승|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 7인승|프레스티지": {
    "컴포트 플러스(7인승)": "",
    "2열 다이내믹 바디케어 시트": "",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|가솔린 2.5 터보 7인승|캘리그래피": {
    "2열 다이내믹 바디케어 시트": "",
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|하이브리드 9인승|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드 9인승|프레스티지": {
    "컴포트 플러스(9인승)": "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 6:4 분할 시트(전동 폴딩, 수동 슬라이딩, 전동 리클라이닝, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|하이브리드 9인승|캘리그래피": {
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|하이브리드 7인승|익스클루시브": {
    "현대 스마트센스": "클러스터(12.3인치 컬러 LCD), 파노라믹 커브드 디스플레이, 전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차/회피 조향 보조 기능 포함), \n내비게이션 기반 스마트 크루즈 컨트롤(진출입로), 고속도로 주행 보조 2, 후측방 충돌방지 보조(주행), 어드밴스드 후석 승객 알림",
    "컴포트": "천연가죽 시트, 전동식 틸트 & 텔레스코픽 스티어링 휠, 운전석 전동시트(4way 럼버서포트, 자세 메모리 시스템), 동승석 전동시트(럼버서포트, 워크인 디바이스), \n발수 적용 1열 유리, 스마트 파워 테일게이트"
  },
  "디 올 뉴 팰리세이드|하이브리드 7인승|프레스티지": {
    "컴포트 플러스(7인승)": "",
    "2열 다이내믹 바디케어 시트": "",
    "원격 스마트 주차 보조": "",
    "플래티넘": "BOSE 프리미엄 사운드(14스피커, 외장앰프 포함), 헤드업 디스플레이, 디지털 키 2, 다이내믹 웰컴/에스코트 라이트(1종)",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  },
  "디 올 뉴 팰리세이드|하이브리드 7인승|캘리그래피": {
    "2열 다이내믹 바디케어 시트": "",
    "프리뷰 전자제어 서스펜션": "21인치 캘리그래피 전용 알로이 휠 & 피렐리 타이어, 프리뷰 전자제어 서스펜션",
    "듀얼 와이드 선루프": "",
    "빌트인 캠 2 Plus": ""
  }
};

(function applyV35PalisadeSplit(){
  const carName = "디 올 뉴 팰리세이드";
  const car = dashboardData.cars[carName];
  if (!car) return;
  const oldGasColors = car.fuels?.["가솔린 2.5 터보"]?.colors || car.colors || {};
  const oldHevColors = car.fuels?.["하이브리드"]?.colors || car.colors || {};
  const newFuels = {};
  Object.entries(v35PalisadeSplit.fuels).forEach(([fuelName, fuelData]) => {
    newFuels[fuelName] = {
      ...fuelData,
      colors: fuelName.includes("하이브리드") ? oldHevColors : oldGasColors
    };
  });
  car.fuels = newFuels;
  Object.assign(optionLibrary, v35PalisadeOptionUpdates);
  Object.entries(v35PalisadeDetailOverrides).forEach(([key, optionMap]) => {
    trimOptionDetailOverrides[key] = optionMap;
  });
})();

/* v36: 팰리세이드 컴포트 플러스(7인승) 상세내용 반영 */
const v36PalisadeComfort7Detail = "나파가죽 시트, 스웨이드 내장재(헤드라이닝/필라/선바이저), 메탈 트랜스버스 트림, 메탈 페달, 2열 수동식 도어 커튼, \n운전석 에르고 모션 시트(18way, 4way 럼버서포트, 볼스터 전동조절, 스트레칭 모드), 1열 릴랙션 컴포트 시트(레그레스트), 운전석 스마트 자세제어 시스템, \n2열 전동 독립시트(폴딩, 슬라이딩, 리클라이닝, 릴랙션 컴포트, 윙아웃 헤드레스트), 2열 리모트 폴딩 & 언폴딩, 2열 전동식 틸팅형 워크인, 2열 통풍시트, \n3열 전동 6:4 분할 시트(폴드 & 다이브, 슬라이딩, 리클라이닝), 3열 열선시트";

(function applyV36PalisadeComfort7Detail(){
  const optionName = "컴포트 플러스(7인승)";
  optionLibrary[optionName] = optionLibrary[optionName] || { price: "2,200,000원", image: "images/options/smart_sense1.jpg", desc: "" };
  optionLibrary[optionName].price = optionLibrary[optionName].price || "2,200,000원";
  optionLibrary[optionName].desc = v36PalisadeComfort7Detail;

  Object.keys(trimOptionDetailOverrides || {}).forEach((key) => {
    if (key.includes("디 올 뉴 팰리세이드") && key.includes("7인승")) {
      trimOptionDetailOverrides[key] = trimOptionDetailOverrides[key] || {};
      if (Object.prototype.hasOwnProperty.call(trimOptionDetailOverrides[key], optionName)) {
        trimOptionDetailOverrides[key][optionName] = v36PalisadeComfort7Detail;
      }
    }
  });
})();

/* v38: 포터 II 초장축 슈퍼캡/일반캡 차량 이미지 추가 */
const v38PorterTrimColorImages = {
  "super": {
    "크리미 화이트": "images/cars/porter2_supercab_creamy_white.png",
    "오닉스 블루": "images/cars/porter2_supercab_onyx_blue.png",
    "슬레이트 브라운": "images/cars/porter2_supercab_slate_brown.png"
  },
  "regular": {
    "크리미 화이트": "images/cars/porter2_regularcab_creamy_white.png",
    "오닉스 블루": "images/cars/porter2_regularcab_onyx_blue.png",
    "슬레이트 브라운": "images/cars/porter2_regularcab_slate_brown.png"
  }
};

(function applyV38PorterTrimColorImages(){
  const porter = dashboardData?.cars?.["포터 II"];
  const fuel = porter?.fuels?.["LPG 2.5 터보"];
  if (!fuel || !fuel.trims) return;

  const superTrims = [
    "2WD 슈퍼캡 초장축 스마트",
    "2WD 슈퍼캡 초장축 모던",
    "2WD 슈퍼캡 초장축 프리미엄"
  ];
  const regularTrims = [
    "2WD 일반캡 초장축 스마트",
    "2WD 일반캡 초장축 모던",
    "2WD 일반캡 초장축 프리미엄"
  ];

  superTrims.forEach((name) => {
    if (fuel.trims[name]) fuel.trims[name].colors = { ...v38PorterTrimColorImages.super };
  });
  regularTrims.forEach((name) => {
    if (fuel.trims[name]) fuel.trims[name].colors = { ...v38PorterTrimColorImages.regular };
  });
})();


/* v40: 포터 II 더블캡 차량 이미지 추가 (현재 확보 이미지: 크리미 화이트 1종) */
(function applyV40PorterDoublecabImages(){
  const porter = dashboardData?.cars?.["포터 II"];
  const fuel = porter?.fuels?.["LPG 2.5 터보"];
  if (!fuel || !fuel.trims) return;

  const doublecabMap = {
    "크리미 화이트": "images/cars/porter2_doublecab_creamy_white.png"
  };

  Object.keys(fuel.trims).forEach((trimName) => {
    if (trimName.includes("더블캡")) {
      fuel.trims[trimName].colors = { ...doublecabMap };
    }
  });
})();

// ============================================================
// 기아(Kia) 차량 데이터 — 하모니렌트카 대시보드용
// 생성 기준: 기아 가격표(PDF). X-Line 트림 및 색상별 추가금액은 제외
// 옵션 key는 '모델·트림·옵션명' 형식으로 전역 고유화(가격 충돌 방지)
// ============================================================
Object.assign(optionLibrary, {
  "카니발·3.5 가솔린 9인승·프레스티지·컨비니언스": {
    "price": "1,100,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "하이패스 자동결제 시스템(e hi-pass 기능 포함), 스마트폰 무선충전 시스템, 스마트 파워 슬라이딩 도어"
  },
  "카니발·3.5 가솔린 9인승·프레스티지·스타일": {
    "price": "1,000,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 235/55 R19 외산 타이어 & 전면가공 휠"
  },
  "카니발·3.5 가솔린 9인승·프레스티지·12.3인치 클러스터": {
    "price": "600,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "카니발·3.5 가솔린 9인승·프레스티지·드라이브 와이즈": {
    "price": "1,200,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고 ※ 스마트 파워 슬라이딩 도어 동시 적용 시 안전 하차 보조 기능 지원"
  },
  "카니발·3.5 가솔린 9인승·프레스티지·모니터링 팩": {
    "price": "900,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "카니발·3.5 가솔린 9인승·노블레스·스타일": {
    "price": "1,000,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·3.5 가솔린 9인승·노블레스·컴포트": {
    "price": "1,400,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 가죽시트"
  },
  "카니발·3.5 가솔린 9인승·노블레스·스마트 커넥트": {
    "price": "750,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·3.5 가솔린 9인승·노블레스·드라이브 와이즈": {
    "price": "750,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·3.5 가솔린 9인승·노블레스·모니터링 팩": {
    "price": "1,200,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·3.5 가솔린 9인승·노블레스·HUD+빌트인캠2": {
    "price": "1,200,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·3.5 가솔린 9인승·노블레스·듀얼 선루프": {
    "price": "800,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·3.5 가솔린 9인승·시그니처·스타일": {
    "price": "700,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트 LED 턴시그널램프"
  },
  "카니발·3.5 가솔린 9인승·시그니처·컴포트": {
    "price": "1,400,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 나파가죽시트"
  },
  "카니발·3.5 가솔린 9인승·시그니처·스마트 커넥트": {
    "price": "750,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·3.5 가솔린 9인승·시그니처·드라이브 와이즈": {
    "price": "750,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·3.5 가솔린 9인승·시그니처·모니터링 팩": {
    "price": "1,200,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·3.5 가솔린 9인승·시그니처·HUD+빌트인캠2": {
    "price": "1,200,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·3.5 가솔린 9인승·시그니처·BOSE 프리미엄 사운드": {
    "price": "900,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "BOSE 프리미엄 사운드(12스피커, 외장앰프) ※ 7인승 선택 시 도어타입 러기지 트레이 미적용"
  },
  "카니발·3.5 가솔린 9인승·시그니처·듀얼 선루프": {
    "price": "800,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·3.5 가솔린 7인승·노블레스·스타일": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·3.5 가솔린 7인승·노블레스·컴포트": {
    "price": "1,190,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 가죽시트"
  },
  "카니발·3.5 가솔린 7인승·노블레스·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·3.5 가솔린 7인승·노블레스·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·3.5 가솔린 7인승·노블레스·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·3.5 가솔린 7인승·노블레스·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·3.5 가솔린 7인승·노블레스·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_노블레스_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·스타일": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·3.5 가솔린 7인승·아웃도어·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_아웃도어_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·3.5 가솔린 7인승·시그니처·스타일": {
    "price": "470,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트 LED 턴시그널램프"
  },
  "카니발·3.5 가솔린 7인승·시그니처·컴포트": {
    "price": "1,190,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 나파가죽시트"
  },
  "카니발·3.5 가솔린 7인승·시그니처·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·3.5 가솔린 7인승·시그니처·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·3.5 가솔린 7인승·시그니처·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·3.5 가솔린 7인승·시그니처·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·3.5 가솔린 7인승·시그니처·BOSE 프리미엄 사운드": {
    "price": "950,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_BOSE_프리미엄_사운드.jpg",
    "desc": "BOSE 프리미엄 사운드(12스피커, 외장앰프) ※ 7인승 선택 시 도어타입 러기지 트레이 미적용"
  },
  "카니발·3.5 가솔린 7인승·시그니처·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_3_5_가솔린_7인승_시그니처_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·터보 하이브리드 9인승·프레스티지·컨비니언스": {
    "price": "1,100,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_프레스티지_컨비니언스.jpg",
    "desc": "하이패스 자동결제 시스템(e hi-pass 기능 포함), 스마트폰 무선충전 시스템, 스마트 파워 슬라이딩 도어"
  },
  "카니발·터보 하이브리드 9인승·프레스티지·스타일": {
    "price": "1,000,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_프레스티지_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 235/55 R19 외산 타이어 & 전면가공 휠"
  },
  "카니발·터보 하이브리드 9인승·프레스티지·12.3인치 클러스터": {
    "price": "600,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "카니발·터보 하이브리드 9인승·프레스티지·드라이브 와이즈": {
    "price": "1,200,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고 ※ 스마트 파워 슬라이딩 도어 동시 적용 시 안전 하차 보조 기능 지원"
  },
  "카니발·터보 하이브리드 9인승·프레스티지·모니터링 팩": {
    "price": "900,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_프레스티지_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고"
  },
  "카니발·터보 하이브리드 9인승·노블레스·스타일": {
    "price": "1,000,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·터보 하이브리드 9인승·노블레스·컴포트": {
    "price": "1,400,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 가죽시트"
  },
  "카니발·터보 하이브리드 9인승·노블레스·스마트 커넥트": {
    "price": "750,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·터보 하이브리드 9인승·노블레스·드라이브 와이즈": {
    "price": "750,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·터보 하이브리드 9인승·노블레스·모니터링 팩": {
    "price": "1,200,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·터보 하이브리드 9인승·노블레스·HUD+빌트인캠2": {
    "price": "1,200,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·터보 하이브리드 9인승·노블레스·듀얼 선루프": {
    "price": "800,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_노블레스_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·터보 하이브리드 9인승·시그니처·스타일": {
    "price": "700,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트 LED 턴시그널램프"
  },
  "카니발·터보 하이브리드 9인승·시그니처·컴포트": {
    "price": "1,400,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 나파가죽시트"
  },
  "카니발·터보 하이브리드 9인승·시그니처·스마트 커넥트": {
    "price": "750,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·터보 하이브리드 9인승·시그니처·드라이브 와이즈": {
    "price": "750,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·터보 하이브리드 9인승·시그니처·모니터링 팩": {
    "price": "1,200,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·터보 하이브리드 9인승·시그니처·HUD+빌트인캠2": {
    "price": "1,200,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·터보 하이브리드 9인승·시그니처·BOSE 프리미엄 사운드": {
    "price": "900,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_BOSE_프리미엄_사운드.jpg",
    "desc": "BOSE 프리미엄 사운드(12스피커, 외장앰프) ※ 7인승 선택 시 도어타입 러기지 트레이 미적용"
  },
  "카니발·터보 하이브리드 9인승·시그니처·듀얼 선루프": {
    "price": "800,000원",
    "image": "images/options/카니발_터보_하이브리드_9인승_시그니처_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·터보 하이브리드 7인승·노블레스·스타일": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·터보 하이브리드 7인승·노블레스·컴포트": {
    "price": "1,190,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 가죽시트"
  },
  "카니발·터보 하이브리드 7인승·노블레스·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·터보 하이브리드 7인승·노블레스·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·터보 하이브리드 7인승·노블레스·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·터보 하이브리드 7인승·노블레스·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·터보 하이브리드 7인승·노블레스·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_노블레스_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·스타일": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·터보 하이브리드 7인승·아웃도어·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_아웃도어_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "카니발·터보 하이브리드 7인승·시그니처·스타일": {
    "price": "470,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, LED 포그램프, 프론트 LED 턴시그널램프"
  },
  "카니발·터보 하이브리드 7인승·시그니처·컴포트": {
    "price": "1,190,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_컴포트.jpg",
    "desc": "2열 통풍시트, 2열 파워 리클라이닝시트(풀플랫 포함, 워크인 기능 미적용), 확장형 센터콘솔, 3열 C타입 USB 단자(충전용, 2개), UV-C 살균 암레스트 수납함, 에어컨 광촉매 살균 시스템, 항균 처리 고성능 콤비 필터, 나파가죽시트"
  },
  "카니발·터보 하이브리드 7인승·시그니처·스마트 커넥트": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "카니발·터보 하이브리드 7인승·시그니처·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입), 후측방 충돌방지 보조(주행)"
  },
  "카니발·터보 하이브리드 7인승·시그니처·모니터링 팩": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_모니터링_팩.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "카니발·터보 하이브리드 7인승·시그니처·HUD+빌트인캠2": {
    "price": "1,270,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "카니발·터보 하이브리드 7인승·시그니처·BOSE 프리미엄 사운드": {
    "price": "950,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_BOSE_프리미엄_사운드.jpg",
    "desc": "BOSE 프리미엄 사운드(12스피커, 외장앰프) ※ 7인승 선택 시 도어타입 러기지 트레이 미적용"
  },
  "카니발·터보 하이브리드 7인승·시그니처·듀얼 선루프": {
    "price": "840,000원",
    "image": "images/options/카니발_터보_하이브리드_7인승_시그니처_듀얼_선루프.jpg",
    "desc": "1열/2열 듀얼 선루프"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·스타일": {
    "price": "1,240,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 루프랙 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·12.3인치 클러스터": {
    "price": "590,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.5 가솔린 터보·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프 ※ 스타일 선택 시 파노라마 선루프 선택 가능"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·스타일": {
    "price": "1,140,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·스마트 커넥트": {
    "price": "800,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_스마트_커넥트.jpg",
    "desc": "220V 인버터, 지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·2.5 가솔린 터보·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·컴포트": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_컴포트.jpg",
    "desc": "퀼팅 나파가죽 시트, 운전석 4WAY 에어셀타입 허리지지대/동승석 전동식 허리지지대, 1열 파워 레그서포트, 동승석 이지 억세스, 운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 1열 릴렉션 컴포트시트, 스웨이드 내장재, 운전석 스마트 자세제어 시스템"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·스마트 커넥트": {
    "price": "700,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·2.5 가솔린 터보·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_5_가솔린_터보_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·2.2 디젤·프레스티지·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.2 디젤·프레스티지·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·프레스티지·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·프레스티지·스타일": {
    "price": "1,240,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 루프랙 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·2.2 디젤·프레스티지·12.3인치 클러스터": {
    "price": "590,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "쏘렌토·2.2 디젤·프레스티지·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.2 디젤·프레스티지·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.2 디젤·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_2_디젤_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프 ※ 스타일 선택 시 파노라마 선루프 선택 가능"
  },
  "쏘렌토·2.2 디젤·노블레스·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.2 디젤·노블레스·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·노블레스·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·노블레스·스타일": {
    "price": "1,140,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·2.2 디젤·노블레스·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.2 디젤·노블레스·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.2 디젤·노블레스·스마트 커넥트": {
    "price": "800,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_스마트_커넥트.jpg",
    "desc": "220V 인버터, 지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·2.2 디젤·노블레스·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·2.2 디젤·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_2_디젤_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·2.2 디젤·시그니처·전자식 4WD": {
    "price": "2,320,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "쏘렌토·2.2 디젤·시그니처·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·시그니처·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·2.2 디젤·시그니처·컴포트": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_컴포트.jpg",
    "desc": "퀼팅 나파가죽 시트, 운전석 4WAY 에어셀타입 허리지지대/동승석 전동식 허리지지대, 1열 파워 레그서포트, 동승석 이지 억세스, 운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 1열 릴렉션 컴포트시트, 스웨이드 내장재, 운전석 스마트 자세제어 시스템"
  },
  "쏘렌토·2.2 디젤·시그니처·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·2.2 디젤·시그니처·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·2.2 디젤·시그니처·스마트 커넥트": {
    "price": "700,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·2.2 디젤·시그니처·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·2.2 디젤·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_2_2_디젤_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·스타일": {
    "price": "1,140,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 루프랙 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·12.3인치 클러스터": {
    "price": "590,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 2WD·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프 ※ 스타일 선택 시 파노라마 선루프 선택 가능"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·스타일": {
    "price": "1,040,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·스마트 커넥트": {
    "price": "800,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_스마트_커넥트.jpg",
    "desc": "220V 인버터, 지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·터보 하이브리드 2WD·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·컴포트": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_컴포트.jpg",
    "desc": "퀼팅 나파가죽 시트, 운전석 4WAY 에어셀타입 허리지지대/동승석 전동식 허리지지대, 1열 파워 레그서포트, 동승석 이지 억세스, 운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 1열 릴렉션 컴포트시트, 스웨이드 내장재, 운전석 스마트 자세제어 시스템"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·스마트 커넥트": {
    "price": "700,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·터보 하이브리드 2WD·시그니처·19인치 휠": {
    "price": "300,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_2WD_시그니처_19인치_휠.jpg",
    "desc": "235/55 R19 국산 타이어&전면가공 휠(하이브리드 限) ※ X-Line은 235/55 R19 국산 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·스타일": {
    "price": "1,140,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프, 루프랙 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·12.3인치 클러스터": {
    "price": "590,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 4WD·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프 ※ 스타일 선택 시 파노라마 선루프 선택 가능"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·스타일": {
    "price": "1,040,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_스타일.jpg",
    "desc": "255/45 R20 컨티넨탈 타이어&전면가공 휠, 프로젝션 LED 헤드램프(시퀀셜 턴시그널), 프론트/리어 LED 턴시그널램프, LED 리어 콤비네이션램프 ※ 하이브리드는 235/60 R18 컨티넨탈 타이어&블랙 알로이 휠 적용"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·스마트 커넥트": {
    "price": "800,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_스마트_커넥트.jpg",
    "desc": "220V 인버터, 지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·터보 하이브리드 4WD·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·6인승": {
    "price": "840,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_6인승.jpg",
    "desc": "2열 독립시트(슬라이딩, 리클라이닝), 2열 윙아웃 헤드레스트, 3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·7인승": {
    "price": "690,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_7인승.jpg",
    "desc": "3열 시트(5:5 폴딩, 유아용 시트 고정 장치), 2열 원터치 워크인, 후석 매뉴얼 에어컨(후석 보조 에어컨 필터 포함), C타입 USB 단자(충전용, 3열 2개)"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·컴포트": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_컴포트.jpg",
    "desc": "퀼팅 나파가죽 시트, 운전석 4WAY 에어셀타입 허리지지대/동승석 전동식 허리지지대, 1열 파워 레그서포트, 동승석 이지 억세스, 운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 1열 릴렉션 컴포트시트, 스웨이드 내장재, 운전석 스마트 자세제어 시스템"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·드라이브 와이즈": {
    "price": "1,290,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·HUD+빌트인캠2": {
    "price": "1,190,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·스마트 커넥트": {
    "price": "700,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_스마트_커넥트.jpg",
    "desc": "지문 인증 시스템, 디지털 센터 미러"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·KRELL 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12 스피커, 외장앰프), 후석 대화모드 ※ 2.5 가솔린 터보 선택 시 액티브 엔진 사운드 적용"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "쏘렌토·터보 하이브리드 4WD·시그니처·19인치 휠": {
    "price": "300,000원",
    "image": "images/options/쏘렌토_터보_하이브리드_4WD_시그니처_19인치_휠.jpg",
    "desc": "235/55 R19 국산 타이어&전면가공 휠(하이브리드 限) ※ X-Line은 235/55 R19 국산 타이어&블랙 알로이 휠 적용"
  },
  "스포티지·1.6 가솔린 터보·프레스티지·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·1.6 가솔린 터보·프레스티지·스타일": {
    "price": "690,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_프레스티지_스타일.jpg",
    "desc": "235/60 R18 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트"
  },
  "스포티지·1.6 가솔린 터보·프레스티지·12.3인치 내비게이션": {
    "price": "890,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_프레스티지_12_3인치_내비게이션.jpg",
    "desc": "12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 하이패스 자동결제 시스템(e hi-pass 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 안전구간/곡선로), 고속도로 주행 보조, 1열 통풍시트, 기아 AI 어시스턴트"
  },
  "스포티지·1.6 가솔린 터보·프레스티지·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_프레스티지_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·1.6 가솔린 터보·프레스티지·파노라마 선루프": {
    "price": "1,190,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 루프랙"
  },
  "스포티지·1.6 가솔린 터보·노블레스·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·1.6 가솔린 터보·노블레스·스타일": {
    "price": "890,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_스타일.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, LED 포그램프"
  },
  "스포티지·1.6 가솔린 터보·노블레스·컴포트": {
    "price": "490,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_컴포트.jpg",
    "desc": "동승석 파워시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 2열 열선시트, 2열 리모트 폴딩 레버"
  },
  "스포티지·1.6 가솔린 터보·노블레스·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·1.6 가솔린 터보·노블레스·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·1.6 가솔린 터보·노블레스·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·1.6 가솔린 터보·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·1.6 가솔린 터보·노블레스·스마트 커넥트": {
    "price": "1,190,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_스마트_커넥트.jpg",
    "desc": "헤드업 디스플레이, 기아 디지털 키 2, 지문 인증 시스템, 터치타입 아웃사이드 도어핸들"
  },
  "스포티지·1.6 가솔린 터보·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "스포티지·1.6 가솔린 터보·시그니처·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·1.6 가솔린 터보·시그니처·19인치 전면가공 휠": {
    "price": "250,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_19인치_전면가공_휠.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠"
  },
  "스포티지·1.6 가솔린 터보·시그니처·프리미엄": {
    "price": "590,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_프리미엄.jpg",
    "desc": "메탈 페달, 메탈 도어스커프, 퀼팅 가죽/스웨이드 시트 ※ 블랙 또는 네이비 그레이 인테리어 중 선택(라운지 브라운 인테리어 적용 불가)"
  },
  "스포티지·1.6 가솔린 터보·시그니처·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·1.6 가솔린 터보·시그니처·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·1.6 가솔린 터보·시그니처·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·1.6 가솔린 터보·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·1.6 가솔린 터보·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/스포티지_1_6_가솔린_터보_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "스포티지·2.0 LPG·프레스티지·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·2.0 LPG·프레스티지·스타일": {
    "price": "690,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "235/60 R18 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트"
  },
  "스포티지·2.0 LPG·프레스티지·12.3인치 내비게이션": {
    "price": "890,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 하이패스 자동결제 시스템(e hi-pass 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 안전구간/곡선로), 고속도로 주행 보조, 1열 통풍시트, 기아 AI 어시스턴트"
  },
  "스포티지·2.0 LPG·프레스티지·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·2.0 LPG·프레스티지·파노라마 선루프": {
    "price": "1,190,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프, 루프랙"
  },
  "스포티지·2.0 LPG·노블레스·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·2.0 LPG·노블레스·스타일": {
    "price": "890,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, LED 포그램프"
  },
  "스포티지·2.0 LPG·노블레스·컴포트": {
    "price": "490,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "동승석 파워시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 2열 열선시트, 2열 리모트 폴딩 레버"
  },
  "스포티지·2.0 LPG·노블레스·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·2.0 LPG·노블레스·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·2.0 LPG·노블레스·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·2.0 LPG·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·2.0 LPG·노블레스·스마트 커넥트": {
    "price": "1,190,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "헤드업 디스플레이, 기아 디지털 키 2, 지문 인증 시스템, 터치타입 아웃사이드 도어핸들"
  },
  "스포티지·2.0 LPG·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "스포티지·2.0 LPG·시그니처·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·2.0 LPG·시그니처·19인치 전면가공 휠": {
    "price": "250,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠"
  },
  "스포티지·2.0 LPG·시그니처·프리미엄": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "메탈 페달, 메탈 도어스커프, 퀼팅 가죽/스웨이드 시트 ※ 블랙 또는 네이비 그레이 인테리어 중 선택(라운지 브라운 인테리어 적용 불가)"
  },
  "스포티지·2.0 LPG·시그니처·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·2.0 LPG·시그니처·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·2.0 LPG·시그니처·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·2.0 LPG·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·2.0 LPG·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "스포티지·터보 하이브리드·프레스티지·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·터보 하이브리드·프레스티지·스타일": {
    "price": "690,000원",
    "image": "images/options/스포티지_터보_하이브리드_프레스티지_스타일.jpg",
    "desc": "235/60 R18 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트"
  },
  "스포티지·터보 하이브리드·프레스티지·12.3인치 내비게이션": {
    "price": "890,000원",
    "image": "images/options/스포티지_터보_하이브리드_프레스티지_12_3인치_내비게이션.jpg",
    "desc": "12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 하이패스 자동결제 시스템(e hi-pass 기능 포함), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 안전구간/곡선로), 고속도로 주행 보조, 1열 통풍시트, 기아 AI 어시스턴트"
  },
  "스포티지·터보 하이브리드·프레스티지·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_터보_하이브리드_프레스티지_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·터보 하이브리드·프레스티지·파노라마 선루프": {
    "price": "1,190,000원",
    "image": "images/options/스포티지_터보_하이브리드_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 루프랙"
  },
  "스포티지·터보 하이브리드·노블레스·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·터보 하이브리드·노블레스·스타일": {
    "price": "890,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_스타일.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, LED 포그램프"
  },
  "스포티지·터보 하이브리드·노블레스·컴포트": {
    "price": "490,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_컴포트.jpg",
    "desc": "동승석 파워시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 2열 열선시트, 2열 리모트 폴딩 레버"
  },
  "스포티지·터보 하이브리드·노블레스·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·터보 하이브리드·노블레스·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·터보 하이브리드·노블레스·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·터보 하이브리드·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·터보 하이브리드·노블레스·스마트 커넥트": {
    "price": "1,190,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_스마트_커넥트.jpg",
    "desc": "헤드업 디스플레이, 기아 디지털 키 2, 지문 인증 시스템, 터치타입 아웃사이드 도어핸들"
  },
  "스포티지·터보 하이브리드·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/스포티지_터보_하이브리드_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "스포티지·터보 하이브리드·시그니처·전자식 4WD": {
    "price": "2,230,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(오토/스노우/머드/샌드)"
  },
  "스포티지·터보 하이브리드·시그니처·19인치 전면가공 휠": {
    "price": "250,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "235/55 R19 타이어&전면가공 휠"
  },
  "스포티지·터보 하이브리드·시그니처·프리미엄": {
    "price": "590,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_프리미엄.jpg",
    "desc": "메탈 페달, 메탈 도어스커프, 퀼팅 가죽/스웨이드 시트 ※ 블랙 또는 네이비 그레이 인테리어 중 선택(라운지 브라운 인테리어 적용 불가)"
  },
  "스포티지·터보 하이브리드·시그니처·드라이브 와이즈": {
    "price": "1,240,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차충돌 방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 경고, 후석 승객 알림(센서 타입), 운전자 전방 주시 경고 카메라"
  },
  "스포티지·터보 하이브리드·시그니처·빌트인 캠2": {
    "price": "450,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_빌트인_캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "스포티지·터보 하이브리드·시그니처·모니터링": {
    "price": "1,140,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 원격 스마트 주차 보조, 측방 주차 거리 경고"
  },
  "스포티지·터보 하이브리드·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(8스피커, 외장앰프) ※ 하이브리드는 액티브 엔진 사운드 포함"
  },
  "스포티지·터보 하이브리드·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/스포티지_터보_하이브리드_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "니로·하이브리드·트렌디·컨비니언스": {
    "price": "650,000원",
    "image": "images/options/니로_하이브리드_트렌디_컨비니언스.jpg",
    "desc": "인조가죽시트, 1열 열선시트, 1열 통풍시트, 1열 시트백 포켓, 열선 스티어링 휠, 운전석 자동쾌적 제어"
  },
  "니로·하이브리드·트렌디·18인치 휠": {
    "price": "490,000원",
    "image": "images/options/니로_하이브리드_트렌디_18인치_휠.jpg",
    "desc": "225/45 R18 콘티넨탈 타이어&전면가공 휠"
  },
  "니로·하이브리드·트렌디·드라이브 와이즈I": {
    "price": "420,000원",
    "image": "images/options/니로_하이브리드_트렌디_드라이브_와이즈I.jpg",
    "desc": "후측방 충돌 경고(전진 출차/주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 전자식 차일드락 ※ 드라이브 와이즈 II와 중복 선택 불가"
  },
  "니로·하이브리드·트렌디·12.3인치 클러스터 팩": {
    "price": "1,150,000원",
    "image": "images/options/니로_하이브리드_트렌디_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 기아 AI 어시스턴트, 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 안전구간/곡선로), 고속도로 주행 보조, 하이패스 자동결제 시스템(e hi-pass 기능 포함)"
  },
  "니로·하이브리드·트렌디·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/니로_하이브리드_트렌디_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "니로·하이브리드·프레스티지·스타일": {
    "price": "970,000원",
    "image": "images/options/니로_하이브리드_프레스티지_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널 램프, LED 후진등, LED 포그램프, 블랙 하이그로시(휠아치 몰딩&사이드 가니쉬, 그릴 가니쉬, 프론트/리어 범퍼, 서라운드 몰딩, B/C필라 가니쉬, 후드 어퍼 가니쉬, 윈드쉴드 사이드 가니쉬), 크롬 스키드 플레이트"
  },
  "니로·하이브리드·프레스티지·18인치 휠": {
    "price": "490,000원",
    "image": "images/options/니로_하이브리드_프레스티지_18인치_휠.jpg",
    "desc": "225/45 R18 콘티넨탈 타이어&전면가공 휠"
  },
  "니로·하이브리드·프레스티지·프리미엄": {
    "price": "1,240,000원",
    "image": "images/options/니로_하이브리드_프레스티지_프리미엄.jpg",
    "desc": "프리미엄 스티어링 휠, 스웨이드 내장재(헤드라이닝, 필라트림, 선바이저), 앰비언트 라이트, 메탈 페달/풋레스트, 메탈 도어 스커프, 후석 승객 알림(센서 타입), 220V 인버터, 가죽시트, 2열 열선시트, 2열 센터 암레스트 ※ 블루 그레이 인테리어 선택 불가"
  },
  "니로·하이브리드·프레스티지·드라이브 와이즈I": {
    "price": "420,000원",
    "image": "images/options/니로_하이브리드_프레스티지_드라이브_와이즈I.jpg",
    "desc": "후측방 충돌 경고(전진 출차/주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 전자식 차일드락 ※ 드라이브 와이즈 II와 중복 선택 불가"
  },
  "니로·하이브리드·프레스티지·12.3인치 클러스터 팩": {
    "price": "400,000원",
    "image": "images/options/니로_하이브리드_프레스티지_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이"
  },
  "니로·하이브리드·프레스티지·드라이브 와이즈II": {
    "price": "990,000원",
    "image": "images/options/니로_하이브리드_프레스티지_드라이브_와이즈II.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌 경고(전진 출차/주행), 후측방 충돌방지 보조(전진 출차, 주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락 ※ 드라이브 와이즈 I과 중복 선택 불가"
  },
  "니로·하이브리드·프레스티지·HUD": {
    "price": "590,000원",
    "image": "images/options/니로_하이브리드_프레스티지_HUD.jpg",
    "desc": "헤드업 디스플레이"
  },
  "니로·하이브리드·프레스티지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/니로_하이브리드_프레스티지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "니로·하이브리드·프레스티지·컴포트": {
    "price": "750,000원",
    "image": "images/options/니로_하이브리드_프레스티지_컴포트.jpg",
    "desc": "운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 1열 이지 억세스, 후진연동 자동하향 아웃사이드미러, 동승석 파워시트, 1열 릴렉션 컴포트시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 전자식 변속 다이얼, 크롬 인사이드 도어핸들, 패드 프린트 가니쉬(크래쉬패드, 1열 도어 센터트림, 콘솔 어퍼커버), 2열 도어 암레스트 인조가죽 감싸기"
  },
  "니로·하이브리드·프레스티지·스마트 커넥트": {
    "price": "850,000원",
    "image": "images/options/니로_하이브리드_프레스티지_스마트_커넥트.jpg",
    "desc": "기아 디지털 키 2, 크롬&터치타입 아웃사이드 도어핸들, 100W C타입 USB 단자(충전용, 1열 1개/정품 충전 케이블 1개), 스마트 파워테일게이트"
  },
  "니로·하이브리드·프레스티지·선루프+LED실내등": {
    "price": "450,000원",
    "image": "images/options/니로_하이브리드_프레스티지_선루프_LED실내등.jpg",
    "desc": "선루프, LED 실내등(맵램프, 룸램프, 러기지램프)"
  },
  "니로·하이브리드·시그니처·스타일": {
    "price": "970,000원",
    "image": "images/options/니로_하이브리드_시그니처_스타일.jpg",
    "desc": "프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널 램프, LED 후진등, LED 포그램프, 블랙 하이그로시(휠아치 몰딩&사이드 가니쉬, 그릴 가니쉬, 프론트/리어 범퍼, 서라운드 몰딩, B/C필라 가니쉬, 후드 어퍼 가니쉬, 윈드쉴드 사이드 가니쉬), 크롬 스키드 플레이트"
  },
  "니로·하이브리드·시그니처·18인치 휠": {
    "price": "490,000원",
    "image": "images/options/니로_하이브리드_시그니처_18인치_휠.jpg",
    "desc": "225/45 R18 콘티넨탈 타이어&전면가공 휠"
  },
  "니로·하이브리드·시그니처·프리미엄": {
    "price": "1,240,000원",
    "image": "images/options/니로_하이브리드_시그니처_프리미엄.jpg",
    "desc": "프리미엄 스티어링 휠, 스웨이드 내장재(헤드라이닝, 필라트림, 선바이저), 앰비언트 라이트, 메탈 페달/풋레스트, 메탈 도어 스커프, 후석 승객 알림(센서 타입), 220V 인버터, 가죽시트, 2열 열선시트, 2열 센터 암레스트 ※ 블루 그레이 인테리어 선택 불가"
  },
  "니로·하이브리드·시그니처·드라이브 와이즈I": {
    "price": "420,000원",
    "image": "images/options/니로_하이브리드_시그니처_드라이브_와이즈I.jpg",
    "desc": "후측방 충돌 경고(전진 출차/주행), 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조, 전자식 차일드락 ※ 드라이브 와이즈 II와 중복 선택 불가"
  },
  "니로·하이브리드·시그니처·드라이브 와이즈II": {
    "price": "990,000원",
    "image": "images/options/니로_하이브리드_시그니처_드라이브_와이즈II.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌 경고(전진 출차/주행), 후측방 충돌방지 보조(전진 출차, 주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락 ※ 드라이브 와이즈 I과 중복 선택 불가"
  },
  "니로·하이브리드·시그니처·HUD": {
    "price": "590,000원",
    "image": "images/options/니로_하이브리드_시그니처_HUD.jpg",
    "desc": "헤드업 디스플레이"
  },
  "니로·하이브리드·시그니처·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/니로_하이브리드_시그니처_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "니로·하이브리드·시그니처·컴포트": {
    "price": "550,000원",
    "image": "images/options/니로_하이브리드_시그니처_컴포트.jpg",
    "desc": "운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 1열 이지 억세스, 후진연동 자동하향 아웃사이드미러, 동승석 파워시트, 1열 릴렉션 컴포트시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대"
  },
  "니로·하이브리드·시그니처·스마트 커넥트": {
    "price": "850,000원",
    "image": "images/options/니로_하이브리드_시그니처_스마트_커넥트.jpg",
    "desc": "기아 디지털 키 2, 크롬&터치타입 아웃사이드 도어핸들, 100W C타입 USB 단자(충전용, 1열 1개/정품 충전 케이블 1개), 스마트 파워테일게이트"
  },
  "니로·하이브리드·시그니처·하만카돈 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/니로_하이브리드_시그니처_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프)"
  },
  "니로·하이브리드·시그니처·선루프+LED실내등": {
    "price": "450,000원",
    "image": "images/options/니로_하이브리드_시그니처_선루프_LED실내등.jpg",
    "desc": "선루프, LED 실내등(맵램프, 룸램프, 러기지램프)"
  },
  "셀토스·1.6 가솔린 터보·트렌디·전자식 4WD": {
    "price": "1,980,000원",
    "image": "images/options/generated_4wd_icon.jpg",
    "desc": "전자식 4WD, 터레인 모드(스노우/머드/샌드), 후륜 멀티링크 서스펜션"
  },
  "셀토스·1.6 가솔린 터보·트렌디·스타일": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_스타일.jpg",
    "desc": "215/55 R18 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·1.6 가솔린 터보·트렌디·컨비니언스": {
    "price": "640,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_컨비니언스.jpg",
    "desc": "프리미엄 바이오 인조가죽시트, 1열 통풍시트, 1열 시트백 포켓, 하이패스 자동결제 시스템 ※ 내비게이션 적용 시, e hi-pass 기능 지원"
  },
  "셀토스·1.6 가솔린 터보·트렌디·12.3인치 내비게이션": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_12_3인치_내비게이션.jpg",
    "desc": "12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 파노라믹 와이드 디스플레이(인포/공조 통합형), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로 內 안전구간/곡선로), 고속도로 주행 보조, 컬럼 타입 전자식 변속 레버, 패들 쉬프트, 스마트폰 무선충전 시스템, 레인센서, 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 기아 AI 어시스턴트 ※ 하이패스 적용 시, e hi-pass 기능 지원"
  },
  "셀토스·1.6 가솔린 터보·트렌디·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·1.6 가솔린 터보·트렌디·12.3인치 클러스터": {
    "price": "450,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD)"
  },
  "셀토스·1.6 가솔린 터보·트렌디·스마트 커넥트": {
    "price": "690,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_스마트_커넥트.jpg",
    "desc": "오토 플러시 도어 핸들, 기아 디지털 키 2, 100W C타입 USB 단자(충전용, 1열 2개/정품 충전 케이블 1개)"
  },
  "셀토스·1.6 가솔린 터보·트렌디·드라이브 와이즈": {
    "price": "1,190,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_트렌디_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 운전자 전방 주시 경고 카메라, 전자식 차일드락"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·스타일": {
    "price": "890,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_스타일.jpg",
    "desc": "235/45 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·12.3인치 클러스터": {
    "price": "400,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD)"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·스마트 커넥트": {
    "price": "690,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_스마트_커넥트.jpg",
    "desc": "오토 플러시 도어 핸들, 기아 디지털 키 2, 100W C타입 USB 단자(충전용, 1열 2개/정품 충전 케이블 1개)"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·드라이브 와이즈": {
    "price": "1,190,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 운전자 전방 주시 경고 카메라, 전자식 차일드락"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·컴포트": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_컴포트.jpg",
    "desc": "1열 이중접합 차음 글라스, 앰비언트 라이트, 러기지 커버링 쉘프, 동승석 파워시트, 동승석 전동식 허리지지대, 2열 열선시트, 2열 센터 암레스트 슬라이딩 컵홀더, 2열 에어벤트, 스마트 파워테일게이트"
  },
  "셀토스·1.6 가솔린 터보·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 니트 헤드라이닝 ※ 투톤 루프와 중복 선택 불가"
  },
  "셀토스·1.6 가솔린 터보·시그니처·스타일": {
    "price": "890,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_스타일.jpg",
    "desc": "235/45 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·1.6 가솔린 터보·시그니처·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·1.6 가솔린 터보·시그니처·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(주행), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 운전자 전방 주시 경고 카메라"
  },
  "셀토스·1.6 가솔린 터보·시그니처·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "셀토스·1.6 가솔린 터보·시그니처·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "셀토스·1.6 가솔린 터보·시그니처·컴포트": {
    "price": "450,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_컴포트.jpg",
    "desc": "1열 이중접합 차음 글라스, 앰비언트 라이트, 러기지 커버링 쉘프, 2열 열선시트, 2열 센터 암레스트 슬라이딩 컵홀더, 2열 에어벤트"
  },
  "셀토스·1.6 가솔린 터보·시그니처·하만카돈 프리미엄 사운드": {
    "price": "890,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프), 1열 바이브로 사운드 시트"
  },
  "셀토스·1.6 가솔린 터보·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_1_6_가솔린_터보_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 니트 헤드라이닝 ※ 투톤 루프와 중복 선택 불가"
  },
  "셀토스·1.6 가솔린 터보·시그니처·투톤 루프": {
    "price": "300,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "투톤 루프 ※ 파노라마 선루프와 중복 선택 불가"
  },
  "셀토스·하이브리드·트렌디·스타일": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_스타일.jpg",
    "desc": "215/55 R18 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·하이브리드·트렌디·컨비니언스": {
    "price": "640,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_컨비니언스.jpg",
    "desc": "프리미엄 바이오 인조가죽시트, 1열 통풍시트, 1열 시트백 포켓, 하이패스 자동결제 시스템 ※ 내비게이션 적용 시, e hi-pass 기능 지원"
  },
  "셀토스·하이브리드·트렌디·12.3인치 내비게이션": {
    "price": "540,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_12_3인치_내비게이션.jpg",
    "desc": "12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 파노라믹 와이드 디스플레이(인포/공조 통합형), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로 內 안전구간/곡선로), 고속도로 주행 보조, 컬럼 타입 전자식 변속 레버, 패들 쉬프트, 스마트폰 무선충전 시스템, 레인센서, 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 기아 AI 어시스턴트 ※ 하이패스 적용 시, e hi-pass 기능 지원"
  },
  "셀토스·하이브리드·트렌디·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·하이브리드·트렌디·12.3인치 클러스터": {
    "price": "400,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD)"
  },
  "셀토스·하이브리드·트렌디·스마트 커넥트": {
    "price": "690,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_스마트_커넥트.jpg",
    "desc": "오토 플러시 도어 핸들, 기아 디지털 키 2, 100W C타입 USB 단자(충전용, 1열 2개/정품 충전 케이블 1개)"
  },
  "셀토스·하이브리드·트렌디·드라이브 와이즈": {
    "price": "1,190,000원",
    "image": "images/options/셀토스_하이브리드_트렌디_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 운전자 전방 주시 경고 카메라, 전자식 차일드락"
  },
  "셀토스·하이브리드·프레스티지·스타일": {
    "price": "890,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_스타일.jpg",
    "desc": "235/45 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·하이브리드·프레스티지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·하이브리드·프레스티지·12.3인치 클러스터": {
    "price": "400,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_12_3인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD)"
  },
  "셀토스·하이브리드·프레스티지·스마트 커넥트": {
    "price": "690,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_스마트_커넥트.jpg",
    "desc": "오토 플러시 도어 핸들, 기아 디지털 키 2, 100W C타입 USB 단자(충전용, 1열 2개/정품 충전 케이블 1개)"
  },
  "셀토스·하이브리드·프레스티지·드라이브 와이즈": {
    "price": "1,190,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 운전자 전방 주시 경고 카메라, 전자식 차일드락"
  },
  "셀토스·하이브리드·프레스티지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "셀토스·하이브리드·프레스티지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "셀토스·하이브리드·프레스티지·컴포트": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_컴포트.jpg",
    "desc": "1열 이중접합 차음 글라스, 앰비언트 라이트, 러기지 커버링 쉘프, 동승석 파워시트, 동승석 전동식 허리지지대, 2열 열선시트, 2열 센터 암레스트 슬라이딩 컵홀더, 2열 에어벤트, 스마트 파워테일게이트"
  },
  "셀토스·하이브리드·프레스티지·실내 V2L": {
    "price": "690,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_실내_V2L.jpg",
    "desc": "실내 V2L 콘센트, 러기지 언더트레이"
  },
  "셀토스·하이브리드·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_하이브리드_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 니트 헤드라이닝 ※ 투톤 루프와 중복 선택 불가"
  },
  "셀토스·하이브리드·시그니처·스타일": {
    "price": "890,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_스타일.jpg",
    "desc": "235/45 R19 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트/리어 LED 턴시그널램프, 다이내믹 웰컴 라이트, 프리미엄 LED 주간 주행등, LED 포그램프"
  },
  "셀토스·하이브리드·시그니처·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "셀토스·하이브리드·시그니처·드라이브 와이즈": {
    "price": "790,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(주행), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 운전자 전방 주시 경고 카메라"
  },
  "셀토스·하이브리드·시그니처·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 측방 주차 거리 경고, 후방 주차 충돌방지 보조, 원격 스마트 주차 보조"
  },
  "셀토스·하이브리드·시그니처·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "셀토스·하이브리드·시그니처·컴포트": {
    "price": "450,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_컴포트.jpg",
    "desc": "1열 이중접합 차음 글라스, 앰비언트 라이트, 러기지 커버링 쉘프, 2열 열선시트, 2열 센터 암레스트 슬라이딩 컵홀더, 2열 에어벤트"
  },
  "셀토스·하이브리드·시그니처·하만카돈 프리미엄 사운드": {
    "price": "890,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프), 1열 바이브로 사운드 시트"
  },
  "셀토스·하이브리드·시그니처·실내 V2L": {
    "price": "690,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_실내_V2L.jpg",
    "desc": "실내 V2L 콘센트, 러기지 언더트레이"
  },
  "셀토스·하이브리드·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/셀토스_하이브리드_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프, 니트 헤드라이닝 ※ 투톤 루프와 중복 선택 불가"
  },
  "셀토스·하이브리드·시그니처·투톤 루프": {
    "price": "300,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "투톤 루프 ※ 파노라마 선루프와 중복 선택 불가"
  },
  "K8·터보 하이브리드·노블레스라이트·스타일": {
    "price": "1,190,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스라이트_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/45 R18 타이어&전면가공 휠, 실버라이닝 다크 우드그레인 내장재"
  },
  "K8·터보 하이브리드·노블레스라이트·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스라이트_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "K8·터보 하이브리드·노블레스라이트·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스라이트_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·터보 하이브리드·베스트셀렉션·스타일": {
    "price": "1,780,000원",
    "image": "images/options/K8_터보_하이브리드_베스트셀렉션_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·터보 하이브리드·베스트셀렉션·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_터보_하이브리드_베스트셀렉션_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·터보 하이브리드·베스트셀렉션·드라이브 와이즈": {
    "price": "640,000원",
    "image": "images/options/K8_터보_하이브리드_베스트셀렉션_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·터보 하이브리드·베스트셀렉션·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_터보_하이브리드_베스트셀렉션_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·터보 하이브리드·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·터보 하이브리드·노블레스·스타일": {
    "price": "1,980,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·터보 하이브리드·노블레스·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·터보 하이브리드·노블레스·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·터보 하이브리드·노블레스·프리미엄": {
    "price": "690,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·터보 하이브리드·노블레스·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·터보 하이브리드·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·터보 하이브리드·시그니처·프리뷰 전자제어 서스펜션I": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처_프리뷰_전자제어_서스펜션I.jpg",
    "desc": "245/40 R19 미쉐린 타이어&전면가공 휠, 프리뷰 전자제어 서스펜션"
  },
  "K8·터보 하이브리드·시그니처·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·터보 하이브리드·시그니처·프리미엄": {
    "price": "690,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·터보 하이브리드·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·터보 하이브리드·시그니처블랙·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처블랙_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·터보 하이브리드·시그니처블랙·프리미엄": {
    "price": "690,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처블랙_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·터보 하이브리드·시그니처블랙·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_터보_하이브리드_시그니처블랙_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·2.5 가솔린·노블레스라이트·스타일": {
    "price": "1,190,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스라이트_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/45 R18 타이어&전면가공 휠, 실버라이닝 다크 우드그레인 내장재"
  },
  "K8·2.5 가솔린·노블레스라이트·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스라이트_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "K8·2.5 가솔린·노블레스라이트·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스라이트_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·2.5 가솔린·베스트셀렉션·스타일": {
    "price": "1,780,000원",
    "image": "images/options/K8_2_5_가솔린_베스트셀렉션_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·2.5 가솔린·베스트셀렉션·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_2_5_가솔린_베스트셀렉션_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·2.5 가솔린·베스트셀렉션·드라이브 와이즈": {
    "price": "640,000원",
    "image": "images/options/K8_2_5_가솔린_베스트셀렉션_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·2.5 가솔린·베스트셀렉션·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_2_5_가솔린_베스트셀렉션_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·2.5 가솔린·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·2.5 가솔린·노블레스·스타일": {
    "price": "1,980,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·2.5 가솔린·노블레스·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·2.5 가솔린·노블레스·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·2.5 가솔린·노블레스·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·2.5 가솔린·노블레스·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·2.5 가솔린·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·2.5 가솔린·시그니처·프리뷰 전자제어 서스펜션I": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처_프리뷰_전자제어_서스펜션I.jpg",
    "desc": "245/40 R19 미쉐린 타이어&전면가공 휠, 프리뷰 전자제어 서스펜션"
  },
  "K8·2.5 가솔린·시그니처·프리뷰 전자제어 서스펜션II": {
    "price": "1,290,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처_프리뷰_전자제어_서스펜션II.jpg",
    "desc": "245/40 R20 피렐리 타이어&전면가공 휠, 프리뷰 전자제어 서스펜션"
  },
  "K8·2.5 가솔린·시그니처·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·2.5 가솔린·시그니처·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·2.5 가솔린·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·2.5 가솔린·시그니처블랙·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처블랙_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·2.5 가솔린·시그니처블랙·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처블랙_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·2.5 가솔린·시그니처블랙·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_2_5_가솔린_시그니처블랙_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 가솔린·노블레스라이트·AWD": {
    "price": "1,980,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "AWD"
  },
  "K8·3.5 가솔린·노블레스라이트·스타일": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스라이트_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/45 R18 타이어&전면가공 휠, 실버라이닝 다크 우드그레인 내장재"
  },
  "K8·3.5 가솔린·노블레스라이트·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스라이트_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드락, 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 가솔린·노블레스라이트·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스라이트_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 가솔린·베스트셀렉션·스타일": {
    "price": "1,780,000원",
    "image": "images/options/K8_3_5_가솔린_베스트셀렉션_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 가솔린·베스트셀렉션·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_3_5_가솔린_베스트셀렉션_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·3.5 가솔린·베스트셀렉션·드라이브 와이즈": {
    "price": "640,000원",
    "image": "images/options/K8_3_5_가솔린_베스트셀렉션_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 가솔린·베스트셀렉션·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_3_5_가솔린_베스트셀렉션_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·3.5 가솔린·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 가솔린·노블레스·스타일": {
    "price": "1,980,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 가솔린·노블레스·헤드업 디스플레이": {
    "price": "840,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "K8·3.5 가솔린·노블레스·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·3.5 가솔린·노블레스·AWD": {
    "price": "2,180,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "AWD"
  },
  "K8·3.5 가솔린·노블레스·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·3.5 가솔린·노블레스·스마트 커넥트": {
    "price": "540,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_스마트_커넥트.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K8·3.5 가솔린·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 가솔린·시그니처·프리뷰 전자제어 서스펜션I": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처_프리뷰_전자제어_서스펜션I.jpg",
    "desc": "245/40 R19 미쉐린 타이어&전면가공 휠, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 가솔린·시그니처·프리뷰 전자제어 서스펜션II": {
    "price": "1,290,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처_프리뷰_전자제어_서스펜션II.jpg",
    "desc": "245/40 R20 피렐리 타이어&전면가공 휠, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 가솔린·시그니처·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·3.5 가솔린·시그니처·AWD": {
    "price": "2,180,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "AWD"
  },
  "K8·3.5 가솔린·시그니처·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·3.5 가솔린·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 가솔린·시그니처블랙·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처블랙_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·3.5 가솔린·시그니처블랙·AWD": {
    "price": "2,180,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "AWD"
  },
  "K8·3.5 가솔린·시그니처블랙·프리미엄": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처블랙_프리미엄.jpg",
    "desc": "후면 전동 선커튼, 뒷좌석 다기능 센터 암레스트, 에어컨 광촉매 살균 시스템, 3존 공조(뒷좌석 온도 제어)"
  },
  "K8·3.5 가솔린·시그니처블랙·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_가솔린_시그니처블랙_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 LPG·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_LPG_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 LPG·프레스티지·전자식룸미러+하이패스+18인치휠": {
    "price": "590,000원",
    "image": "images/options/K8_3_5_LPG_프레스티지_전자식룸미러_하이패스_18인치휠.jpg",
    "desc": "운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 운전석 릴렉션 컴포트 시트, 운전석 전동 익스텐션 시트, 운전자세 메모리 시스템(운전석 시트, 스티어링 휠, 아웃사이드 미러, 스마트 자세 제어 포함), 운전석 이지 억세스, 후진연동 자동하향 아웃사이드 미러, 전동식 틸트&텔레스코픽 스티어링 휠, 스티어링 휠 진동경고, 스마트폰 무선충전 시스템(듀얼)"
  },
  "K8·3.5 LPG·프레스티지·컴포트": {
    "price": "1,040,000원",
    "image": "images/options/K8_3_5_LPG_프레스티지_컴포트.jpg",
    "desc": "운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 운전석 릴렉션 컴포트 시트, 운전석 전동 익스텐션 시트, 운전자세 메모리 시스템(운전석 시트, 스티어링 휠, 아웃사이드 미러, 스마트 자세 제어 포함), 운전석 이지 억세스, 후진연동 자동하향 아웃사이드 미러, 전동식 틸트&텔레스코픽 스티어링 휠, 스티어링 휠 진동경고, 스마트폰 무선충전 시스템(듀얼)"
  },
  "K8·3.5 LPG·프레스티지·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_LPG_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 LPG·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 LPG·노블레스·메리디안 프리미엄 사운드": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·3.5 LPG·노블레스·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 LPG·노블레스·컨비니언스": {
    "price": "1,780,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_컨비니언스.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 3존 공조(뒷좌석 온도 제어), 뒷좌석 통풍시트, 스마트 파워 트렁크, 뒷좌석 이중접합 차음 글라스"
  },
  "K8·3.5 LPG·노블레스·스타일": {
    "price": "1,680,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 LPG·노블레스·헤드업디스플레이+스마트커넥트": {
    "price": "1,780,000원",
    "image": "images/options/K8_3_5_LPG_노블레스_헤드업디스플레이_스마트커넥트.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템, 기아 디지털 키 2, 터치타입 아웃사이드 도어핸들"
  },
  "K8·3.5 LPG 렌터카·프레스티지·파노라마 선루프": {
    "price": "1,030,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 LPG 렌터카·프레스티지·컴포트+전자식룸미러+하이패스": {
    "price": "1,220,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_프레스티지_컴포트_전자식룸미러_하이패스.jpg",
    "desc": "운전석 에르고 모션 시트(볼스터 전동조절, 컴포트 스트레칭 포함), 운전석 릴렉션 컴포트 시트, 운전석 전동 익스텐션 시트, 운전자세 메모리 시스템(운전석 시트, 스티어링 휠, 아웃사이드 미러, 스마트 자세 제어 포함), 운전석 이지 억세스, 후진연동 자동하향 아웃사이드 미러, 전동식 틸트&텔레스코픽 스티어링 휠, 스티어링 휠 진동경고, 스마트폰 무선충전 시스템(듀얼), 전자식 룸미러, 하이패스 자동결제 시스템(e hi-pass 기능 포함)"
  },
  "K8·3.5 LPG 렌터카·프레스티지·드라이브 와이즈": {
    "price": "1,030,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 LPG 렌터카·노블레스·파노라마 선루프": {
    "price": "1,030,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K8·3.5 LPG 렌터카·노블레스·메리디안 프리미엄 사운드": {
    "price": "1,030,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_메리디안_프리미엄_사운드.jpg",
    "desc": "메리디안 프리미엄 사운드(14스피커, 외장앰프), 액티브 로드 노이즈 컨트롤"
  },
  "K8·3.5 LPG 렌터카·노블레스·드라이브 와이즈": {
    "price": "1,030,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 후석 승객 알림(센서 타입)"
  },
  "K8·3.5 LPG 렌터카·노블레스·컨비니언스": {
    "price": "1,690,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_컨비니언스.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 원격 스마트 주차 보조, 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 3존 공조(뒷좌석 온도 제어), 뒷좌석 통풍시트, 스마트 파워 트렁크, 뒷좌석 이중접합 차음 글라스"
  },
  "K8·3.5 LPG 렌터카·노블레스·스타일": {
    "price": "1,600,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_스타일.jpg",
    "desc": "순차점등 턴시그널램프(리어), 지능형 헤드램프(IFS), 다이내믹 앰비언트 라이트, 다이내믹 웰컴/에스코트 라이트, 245/40 R19 미쉐린 타이어&전면가공 휠, 실버 라이닝 다크 우드그레인 내장재, 프리뷰 전자제어 서스펜션"
  },
  "K8·3.5 LPG 렌터카·노블레스·헤드업디스플레이+스마트커넥트": {
    "price": "1,690,000원",
    "image": "images/options/K8_3_5_LPG_렌터카_노블레스_헤드업디스플레이_스마트커넥트.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템, 기아 디지털 키 2, 터치타입 아웃사이드 도어핸들"
  },
  "K5·하이브리드·프레스티지·스타일": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_프레스티지_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·하이브리드·프레스티지·컴포트": {
    "price": "990,000원",
    "image": "images/options/K5_하이브리드_프레스티지_컴포트.jpg",
    "desc": "앞좌석 파워시트, 앞좌석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입)"
  },
  "K5·하이브리드·프레스티지·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_하이브리드_프레스티지_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·하이브리드·프레스티지·12.3인치 클러스터 팩": {
    "price": "690,000원",
    "image": "images/options/K5_하이브리드_프레스티지_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·하이브리드·프레스티지·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·하이브리드·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·하이브리드·베스트셀렉션·스타일": {
    "price": "700,000원",
    "image": "images/options/K5_하이브리드_베스트셀렉션_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·하이브리드·베스트셀렉션·빌트인캠2": {
    "price": "450,000원",
    "image": "images/options/K5_하이브리드_베스트셀렉션_빌트인캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·하이브리드·베스트셀렉션·모니터링": {
    "price": "1,150,000원",
    "image": "images/options/K5_하이브리드_베스트셀렉션_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "K5·하이브리드·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·하이브리드·노블레스·스타일": {
    "price": "890,000원",
    "image": "images/options/K5_하이브리드_노블레스_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·하이브리드·노블레스·컴포트": {
    "price": "890,000원",
    "image": "images/options/K5_하이브리드_노블레스_컴포트.jpg",
    "desc": "동승석 파워시트, 동승석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입), 뒷좌석 측면 수동 선커튼"
  },
  "K5·하이브리드·노블레스·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_하이브리드_노블레스_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·하이브리드·노블레스·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·하이브리드·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_하이브리드_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·하이브리드·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·하이브리드·시그니처·스타일": {
    "price": "200,000원",
    "image": "images/options/K5_하이브리드_시그니처_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠 ※ 스타일 적용 시 블랙 핏 선택 불가"
  },
  "K5·하이브리드·시그니처·컴포트": {
    "price": "400,000원",
    "image": "images/options/K5_하이브리드_시그니처_컴포트.jpg",
    "desc": "뒷좌석 6:4 폴딩시트, 후석 승객 알림(센서 타입) ※ 컴포트 적용 시 스키쓰루 미적용"
  },
  "K5·하이브리드·시그니처·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·하이브리드·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_하이브리드_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·하이브리드·시그니처·블랙 핏": {
    "price": "690,000원",
    "image": "images/options/K5_하이브리드_시그니처_블랙_핏.jpg",
    "desc": "235/45 R18 피렐리 타이어&전용 블랙 휠, 블랙 아웃사이드 미러, 다크 건메탈 리어 스키드 플레이트/머플러 팁, 전용 블랙 인테리어, 블랙 스웨이드 헤드라이닝&A/B필라 ※ 블랙 핏 적용 시 스타일, 마션브라운/샌드 인테리어 선택 불가"
  },
  "K5·하이브리드·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_하이브리드_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 가솔린·스마트셀렉션·12.3인치 클러스터 팩": {
    "price": "1,300,000원",
    "image": "images/options/K5_2_0_가솔린_스마트셀렉션_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·2.0 가솔린·스마트셀렉션·드라이브 와이즈": {
    "price": "1,140,000원",
    "image": "images/options/K5_2_0_가솔린_스마트셀렉션_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 가솔린·스마트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_스마트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 가솔린·프레스티지·스타일": {
    "price": "890,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·2.0 가솔린·프레스티지·컴포트": {
    "price": "990,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_컴포트.jpg",
    "desc": "앞좌석 파워시트, 앞좌석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입)"
  },
  "K5·2.0 가솔린·프레스티지·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 가솔린·프레스티지·12.3인치 클러스터 팩": {
    "price": "1,040,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·2.0 가솔린·프레스티지·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 가솔린·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 가솔린·베스트셀렉션·스타일": {
    "price": "400,000원",
    "image": "images/options/K5_2_0_가솔린_베스트셀렉션_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·2.0 가솔린·베스트셀렉션·빌트인캠2": {
    "price": "450,000원",
    "image": "images/options/K5_2_0_가솔린_베스트셀렉션_빌트인캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 가솔린·베스트셀렉션·모니터링": {
    "price": "1,150,000원",
    "image": "images/options/K5_2_0_가솔린_베스트셀렉션_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "K5·2.0 가솔린·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 가솔린·노블레스·스타일": {
    "price": "890,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·2.0 가솔린·노블레스·컴포트": {
    "price": "890,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_컴포트.jpg",
    "desc": "동승석 파워시트, 동승석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입), 뒷좌석 측면 수동 선커튼"
  },
  "K5·2.0 가솔린·노블레스·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 가솔린·노블레스·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 가솔린·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·2.0 가솔린·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 가솔린·시그니처·컴포트": {
    "price": "400,000원",
    "image": "images/options/K5_2_0_가솔린_시그니처_컴포트.jpg",
    "desc": "뒷좌석 6:4 폴딩시트, 후석 승객 알림(센서 타입) ※ 컴포트 적용 시 스키쓰루 미적용"
  },
  "K5·2.0 가솔린·시그니처·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 가솔린·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_2_0_가솔린_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·2.0 가솔린·시그니처·블랙 핏": {
    "price": "490,000원",
    "image": "images/options/K5_2_0_가솔린_시그니처_블랙_핏.jpg",
    "desc": "235/45 R18 피렐리 타이어&전용 블랙 휠, 블랙 아웃사이드 미러, 다크 건메탈 리어 스키드 플레이트/머플러 팁, 전용 블랙 인테리어, 블랙 스웨이드 헤드라이닝&A/B필라 ※ 블랙 핏 적용 시 스타일, 마션브라운/샌드 인테리어 선택 불가"
  },
  "K5·2.0 가솔린·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_2_0_가솔린_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·1.6 가솔린 터보·프레스티지·스타일": {
    "price": "1,190,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·1.6 가솔린 터보·프레스티지·컴포트": {
    "price": "990,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_컴포트.jpg",
    "desc": "앞좌석 파워시트, 앞좌석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입)"
  },
  "K5·1.6 가솔린 터보·프레스티지·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·1.6 가솔린 터보·프레스티지·12.3인치 클러스터 팩": {
    "price": "1,040,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·1.6 가솔린 터보·프레스티지·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·1.6 가솔린 터보·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_프레스티지_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·1.6 가솔린 터보·베스트셀렉션·스타일": {
    "price": "700,000원",
    "image": "images/options/K5_1_6_가솔린_터보_베스트셀렉션_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·1.6 가솔린 터보·베스트셀렉션·빌트인캠2": {
    "price": "450,000원",
    "image": "images/options/K5_1_6_가솔린_터보_베스트셀렉션_빌트인캠2.jpg",
    "desc": "빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·1.6 가솔린 터보·베스트셀렉션·모니터링": {
    "price": "1,150,000원",
    "image": "images/options/K5_1_6_가솔린_터보_베스트셀렉션_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "K5·1.6 가솔린 터보·베스트셀렉션·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_베스트셀렉션_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·1.6 가솔린 터보·노블레스·스타일": {
    "price": "790,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠, 프로젝션 LED 헤드램프, 프론트 LED 턴시그널 램프, LED 리어 콤비네이션램프 ※ 마션 브라운 인테리어 선택 가능"
  },
  "K5·1.6 가솔린 터보·노블레스·컴포트": {
    "price": "890,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_컴포트.jpg",
    "desc": "동승석 파워시트, 동승석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입), 뒷좌석 측면 수동 선커튼"
  },
  "K5·1.6 가솔린 터보·노블레스·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·1.6 가솔린 터보·노블레스·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·1.6 가솔린 터보·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·1.6 가솔린 터보·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_노블레스_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·1.6 가솔린 터보·시그니처·스타일": {
    "price": "300,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_스타일.jpg",
    "desc": "235/45 R18 피렐리 타이어&전면가공 휠 ※ 스타일 적용 시 블랙 핏 선택 불가"
  },
  "K5·1.6 가솔린 터보·시그니처·컴포트": {
    "price": "400,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_컴포트.jpg",
    "desc": "뒷좌석 6:4 폴딩시트, 후석 승객 알림(센서 타입) ※ 컴포트 적용 시 스키쓰루 미적용"
  },
  "K5·1.6 가솔린 터보·시그니처·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_HUD_빌트인캠2.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·1.6 가솔린 터보·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_KRELL_프리미엄_사운드.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·1.6 가솔린 터보·시그니처·블랙 핏": {
    "price": "790,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_블랙_핏.jpg",
    "desc": "235/45 R18 피렐리 타이어&전용 블랙 휠, 블랙 아웃사이드 미러, 다크 건메탈 리어 스키드 플레이트/머플러 팁, 전용 블랙 인테리어, 블랙 스웨이드 헤드라이닝&A/B필라 ※ 블랙 핏 적용 시 스타일, 마션브라운/샌드 인테리어 선택 불가"
  },
  "K5·1.6 가솔린 터보·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/K5_1_6_가솔린_터보_시그니처_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 LPG·프레스티지·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 LPG·프레스티지·12.3인치 클러스터 팩": {
    "price": "1,190,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·2.0 LPG·프레스티지·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 LPG·노블레스·컴포트": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "동승석 파워시트, 동승석 전동식 허리지지대, 동승석 워크인 디바이스, 동승석 릴렉션 컴포트시트, 동승석 이지 억세스, 뒷좌석 열선시트, 뒷좌석 6:4 폴딩시트, 뒷좌석 높이조절식 헤드레스트, 뒷좌석 센터 암레스트, 후석 승객 알림(센서 타입), 뒷좌석 측면 수동 선커튼"
  },
  "K5·2.0 LPG·노블레스·드라이브 와이즈": {
    "price": "450,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 LPG·노블레스·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 LPG·노블레스·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·2.0 LPG·노블레스·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 LPG·시그니처·컴포트": {
    "price": "490,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "뒷좌석 6:4 폴딩시트, 후석 승객 알림(센서 타입) ※ 컴포트 적용 시 스키쓰루 미적용"
  },
  "K5·2.0 LPG·시그니처·HUD+빌트인캠2": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "헤드업 디스플레이, 빌트인 캠 2, 증강현실 내비게이션"
  },
  "K5·2.0 LPG·시그니처·KRELL 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "KRELL 프리미엄 사운드(12스피커, 외장앰프)"
  },
  "K5·2.0 LPG·시그니처·파노라마 선루프": {
    "price": "1,090,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 LPG 렌터카·트렌디·컴포트": {
    "price": "540,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_트렌디_컴포트.jpg",
    "desc": "뒷좌석 6:4 폴딩시트, 후석 승객 알림(센서 타입) ※ 컴포트 적용 시 스키쓰루 미적용"
  },
  "K5·2.0 LPG 렌터카·트렌디·애프터마켓용 컬렉션": {
    "price": "250,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, PVC 카페트, 프로텍션 매트"
  },
  "K5·2.0 LPG 렌터카·트렌디·하이패스 시스템": {
    "price": "200,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_트렌디_하이패스_시스템.jpg",
    "desc": "하이패스 자동결제 시스템(e hi-pass)"
  },
  "K5·2.0 LPG 렌터카·트렌디·SBW 팩": {
    "price": "480,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_트렌디_SBW_팩.jpg",
    "desc": "전자식 변속 다이얼, 패들 쉬프트, 전자식 파킹 브레이크(오토홀드 포함), 블랙하이그로시 센터 콘솔"
  },
  "K5·2.0 LPG 렌터카·트렌디·드라이브 와이즈": {
    "price": "700,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_트렌디_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 LPG 렌터카·트렌디·파노라마 선루프": {
    "price": "1,030,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_트렌디_파노라마_선루프.jpg",
    "desc": "파노라마 선루프"
  },
  "K5·2.0 LPG 렌터카·프레스티지·애프터마켓용 컬렉션": {
    "price": "250,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, PVC 카페트, 프로텍션 매트"
  },
  "K5·2.0 LPG 렌터카·프레스티지·SBW 팩": {
    "price": "480,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "전자식 변속 다이얼, 패들 쉬프트, 전자식 파킹 브레이크(오토홀드 포함), 블랙하이그로시 센터 콘솔"
  },
  "K5·2.0 LPG 렌터카·프레스티지·드라이브 와이즈": {
    "price": "700,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 보조"
  },
  "K5·2.0 LPG 렌터카·프레스티지·12.3인치 클러스터 팩": {
    "price": "700,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_프레스티지_12_3인치_클러스터_팩.jpg",
    "desc": "슈퍼비전 클러스터(12.3인치 풀사이즈 칼라 TFT LCD), 파노라믹 커브드 디스플레이, 하이패스 자동결제 시스템(e hi-pass), 레인센서, 터치타입 독립제어 풀오토 에어컨(운전석/동승석), 공기청정 시스템(미세먼지 센서 포함), 오토디포그, 12.3인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트)"
  },
  "K5·2.0 LPG 렌터카·프레스티지·스마트 커넥트": {
    "price": "1,030,000원",
    "image": "images/options/K5_2_0_LPG_렌터카_프레스티지_스마트_커넥트.jpg",
    "desc": "스마트폰 무선충전 시스템, 기아 디지털 키 2, 터치타입 아웃사이드 도어핸들, 빌트인 캠 2, 증강현실 내비게이션, 지문 인증 시스템"
  },
  "K5·2.0 LPG 렌터카·프레스티지·파노라마 선루프": {
    "price": "1,030,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "파노라마 선루프"
  },
  "레이·1.0 가솔린·트렌디·스타일": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_스타일.jpg",
    "desc": "프로젝션 헤드램프, LED 주간 주행등, LED 리어 콤비네이션램프, LED 보조제동등"
  },
  "레이·1.0 가솔린·트렌디·15인치 전면가공 휠": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_15인치_전면가공_휠.jpg",
    "desc": "175/50 R15 타이어&전면가공 휠, 전자식 파킹 브레이크(오토홀드 포함)"
  },
  "레이·1.0 가솔린·트렌디·컴포트I": {
    "price": "600,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_컴포트I.jpg",
    "desc": "인조가죽시트, 앞좌석 열선시트, 운전석 통풍시트, 운전석 풀 폴딩시트, 운전석 시트 높이조절장치, 운전석 시트벨트 높이조절장치, 운전석 시트백 포켓"
  },
  "레이·1.0 가솔린·트렌디·드라이브 와이즈": {
    "price": "300,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고"
  },
  "레이·1.0 가솔린·트렌디·8인치 디스플레이 오디오": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_8인치_디스플레이_오디오.jpg",
    "desc": "8인치 디스플레이 오디오, 후방 모니터, 샤크핀 안테나 ※ 8인치 내비게이션과 중복 선택 불가"
  },
  "레이·1.0 가솔린·트렌디·8인치 내비게이션": {
    "price": "1,450,000원",
    "image": "images/options/레이_1_0_가솔린_트렌디_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커, 풀오토 에어컨, 공기청정 모드, 전자식 룸미러, 하이패스 자동결제 시스템, 후방 모니터, 샤크핀 안테나 ※ 8인치 디스플레이 오디오와 중복 선택 불가"
  },
  "레이·1.0 가솔린·프레스티지·스타일": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_프레스티지_스타일.jpg",
    "desc": "프로젝션 헤드램프, LED 주간 주행등, LED 리어 콤비네이션램프, LED 보조제동등"
  },
  "레이·1.0 가솔린·프레스티지·15인치 전면가공 휠": {
    "price": "400,000원",
    "image": "images/options/레이_1_0_가솔린_프레스티지_15인치_전면가공_휠.jpg",
    "desc": "175/50 R15 타이어&전면가공 휠, 전자식 파킹 브레이크(오토홀드 포함)"
  },
  "레이·1.0 가솔린·프레스티지·컴포트II": {
    "price": "300,000원",
    "image": "images/options/레이_1_0_가솔린_프레스티지_컴포트II.jpg",
    "desc": "뒷좌석 열선시트, 고급형 센터콘솔, 운전석 세이프티 파워윈도우, 뒷좌석 C타입 USB 단자(충전용)"
  },
  "레이·1.0 가솔린·프레스티지·드라이브 와이즈": {
    "price": "300,000원",
    "image": "images/options/레이_1_0_가솔린_프레스티지_드라이브_와이즈.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고"
  },
  "레이·1.0 가솔린·프레스티지·8인치 내비게이션": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_프레스티지_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커"
  },
  "레이·1.0 가솔린·시그니처·스타일": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_시그니처_스타일.jpg",
    "desc": "프로젝션 헤드램프, LED 주간 주행등, LED 리어 콤비네이션램프, LED 보조제동등"
  },
  "레이·1.0 가솔린·시그니처·드라이브 와이즈": {
    "price": "300,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "후측방 충돌 경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고"
  },
  "레이·1.0 가솔린·시그니처·8인치 내비게이션": {
    "price": "500,000원",
    "image": "images/options/레이_1_0_가솔린_시그니처_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커"
  },
  "모닝·1.0 가솔린·트렌디·버튼시동 PACK": {
    "price": "500,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_버튼시동_PACK.jpg",
    "desc": "버튼시동 스마트키 시스템(원격시동 포함), 하이패스 자동결제 시스템"
  },
  "모닝·1.0 가솔린·트렌디·스타일": {
    "price": "900,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_스타일.jpg",
    "desc": "LED 헤드램프, 프론트 LED 턴시그널램프, LED 주간 주행등, LED 리어 콤비네이션램프, 14인치 알로이 휠, LED 리피터 일체형 아웃사이드 미러"
  },
  "모닝·1.0 가솔린·트렌디·16인치 전면가공 휠": {
    "price": "500,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_16인치_전면가공_휠.jpg",
    "desc": "195/45 R16 타이어&전면가공 휠, 후륜 디스크 브레이크"
  },
  "모닝·1.0 가솔린·트렌디·컴포트": {
    "price": "300,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_컴포트.jpg",
    "desc": "인조가죽시트(블랙), 앞좌석 열선시트, 운전석 시트 암레스트, 운전석 시트 높이조절장치, 앞좌석 시트벨트 높이조절장치, 동승석 시트백 포켓"
  },
  "모닝·1.0 가솔린·트렌디·컨비니언스": {
    "price": "150,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_컨비니언스.jpg",
    "desc": "인조가죽 스티어링 휠, 가죽 변속기 노브, 열선 스티어링 휠"
  },
  "모닝·1.0 가솔린·트렌디·8인치 내비게이션": {
    "price": "800,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커, 전자식 룸미러, 풀오토 에어컨"
  },
  "모닝·1.0 가솔린·트렌디·10.25인치 클러스터": {
    "price": "300,000원",
    "image": "images/options/모닝_1_0_가솔린_트렌디_10_25인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(10.25인치 풀사이즈 칼라 TFT LCD)"
  },
  "모닝·1.0 가솔린·프레스티지·스타일": {
    "price": "850,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_스타일.jpg",
    "desc": "LED 헤드램프, 프론트 LED 턴시그널램프, LED 주간 주행등, LED 리어 콤비네이션램프, 프론트 LED 센터 포지셔닝 램프"
  },
  "모닝·1.0 가솔린·프레스티지·16인치 전면가공 휠": {
    "price": "650,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_16인치_전면가공_휠.jpg",
    "desc": "195/45 R16 타이어&전면가공 휠, 후륜 디스크 브레이크, 전자식 파킹 브레이크(오토홀드 포함)"
  },
  "모닝·1.0 가솔린·프레스티지·컨비니언스": {
    "price": "150,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_컨비니언스.jpg",
    "desc": "인조가죽 스티어링 휠, 가죽 변속기 노브, 열선 스티어링 휠"
  },
  "모닝·1.0 가솔린·프레스티지·드라이브 와이즈": {
    "price": "500,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차로 대향차/정면 대향차), 스마트 크루즈 컨트롤(정차&재출발), 후측방 충돌경고, 후측방 충돌방지 보조(전진 출차), 후방 교차 충돌방지 보조, 안전 하차 경고 ※ 내비게이션 적용 시 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 안전구간/곡선로), 고속도로 주행 보조 기능 지원"
  },
  "모닝·1.0 가솔린·프레스티지·8인치 내비게이션": {
    "price": "700,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커, 전자식 룸미러"
  },
  "모닝·1.0 가솔린·프레스티지·10.25인치 클러스터": {
    "price": "300,000원",
    "image": "images/options/모닝_1_0_가솔린_프레스티지_10_25인치_클러스터.jpg",
    "desc": "슈퍼비전 클러스터(10.25인치 풀사이즈 칼라 TFT LCD)"
  },
  "모닝·1.0 가솔린·시그니처·스타일": {
    "price": "850,000원",
    "image": "images/options/모닝_1_0_가솔린_시그니처_스타일.jpg",
    "desc": "LED 헤드램프, 프론트 LED 턴시그널램프, LED 주간 주행등, LED 리어 콤비네이션램프, 프론트 LED 센터 포지셔닝 램프"
  },
  "모닝·1.0 가솔린·시그니처·8인치 내비게이션": {
    "price": "700,000원",
    "image": "images/options/모닝_1_0_가솔린_시그니처_8인치_내비게이션.jpg",
    "desc": "8인치 내비게이션(기아 커넥트, 폰 프로젝션, 인카페이먼트), 내비게이션 무선 업데이트, 6스피커, 전자식 룸미러"
  },
  "모닝·1.0 가솔린·시그니처·선루프": {
    "price": "400,000원",
    "image": "images/options/모닝_1_0_가솔린_시그니처_선루프.jpg",
    "desc": "선루프"
  },
  "EV4·전기·에어 스탠다드·스타일": {
    "price": "740,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_스타일.jpg",
    "desc": "스몰 큐브 프로젝션 LED 헤드램프, 다이내믹 웰컴/에스코트 라이트, 지능형 헤드램프(IFS)"
  },
  "EV4·전기·에어 스탠다드·컴포트": {
    "price": "890,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_컴포트.jpg",
    "desc": "앞좌석 파워시트, 앞좌석 전동식 허리 지지대, 앞좌석 통풍 시트, 운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 운전석 이지 억세스, 후진연동 자동하향 아웃사이드 미러"
  },
  "EV4·전기·에어 스탠다드·컨비니언스": {
    "price": "890,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_컨비니언스.jpg",
    "desc": "스마트 파워 트렁크, 기아 디지털 키 2, 동승석/뒷좌석 세이프티 파워 윈도우"
  },
  "EV4·전기·에어 스탠다드·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV4·전기·에어 스탠다드·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV4·전기·에어 스탠다드·드라이브 와이즈": {
    "price": "1,280,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드 락, 운전자 전방 주시 경고 카메라"
  },
  "EV4·전기·에어 스탠다드·유틸리티": {
    "price": "400,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_유틸리티.jpg",
    "desc": "실내 V2L 콘센트, 실외 V2L 커넥터"
  },
  "EV4·전기·에어 스탠다드·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_와이드_선루프.jpg",
    "desc": "와이드 선루프"
  },
  "EV4·전기·에어 스탠다드·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV4·전기·에어 스탠다드·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV4_전기_에어_스탠다드_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV4·전기·에어 롱레인지·스타일": {
    "price": "740,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_스타일.jpg",
    "desc": "스몰 큐브 프로젝션 LED 헤드램프, 다이내믹 웰컴/에스코트 라이트, 지능형 헤드램프(IFS)"
  },
  "EV4·전기·에어 롱레인지·컴포트": {
    "price": "890,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_컴포트.jpg",
    "desc": "앞좌석 파워시트, 앞좌석 전동식 허리 지지대, 앞좌석 통풍 시트, 운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 운전석 이지 억세스, 후진연동 자동하향 아웃사이드 미러"
  },
  "EV4·전기·에어 롱레인지·컨비니언스": {
    "price": "890,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_컨비니언스.jpg",
    "desc": "스마트 파워 트렁크, 기아 디지털 키 2, 동승석/뒷좌석 세이프티 파워 윈도우"
  },
  "EV4·전기·에어 롱레인지·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV4·전기·에어 롱레인지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV4·전기·에어 롱레인지·드라이브 와이즈": {
    "price": "1,280,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드 락, 운전자 전방 주시 경고 카메라"
  },
  "EV4·전기·에어 롱레인지·유틸리티": {
    "price": "400,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_유틸리티.jpg",
    "desc": "실내 V2L 콘센트, 실외 V2L 커넥터"
  },
  "EV4·전기·에어 롱레인지·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_와이드_선루프.jpg",
    "desc": "와이드 선루프"
  },
  "EV4·전기·에어 롱레인지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV4·전기·에어 롱레인지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV4_전기_에어_롱레인지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV4·전기·에어 롱레인지·듀얼 모터 4WD": {
    "price": "2,270,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "듀얼 모터 4WD(19인치 휠&타이어 적용 시 선택 가능)"
  },
  "EV4·전기·에어 롱레인지·애프터마켓용 컬렉션": {
    "price": "150,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, 프로텍션 매트"
  },
  "EV4·전기·어스 스탠다드·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV4·전기·어스 스탠다드·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV4·전기·어스 스탠다드·드라이브 와이즈": {
    "price": "1,280,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드 락, 운전자 전방 주시 경고 카메라"
  },
  "EV4·전기·어스 스탠다드·유틸리티": {
    "price": "400,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_유틸리티.jpg",
    "desc": "실내 V2L 콘센트, 실외 V2L 커넥터"
  },
  "EV4·전기·어스 스탠다드·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_와이드_선루프.jpg",
    "desc": "와이드 선루프"
  },
  "EV4·전기·어스 스탠다드·하만카돈 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프), 액티브 사운드 디자인(e-ASD)"
  },
  "EV4·전기·어스 스탠다드·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV4·전기·어스 스탠다드·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV4_전기_어스_스탠다드_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV4·전기·어스 롱레인지·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV4·전기·어스 롱레인지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV4·전기·어스 롱레인지·드라이브 와이즈": {
    "price": "1,280,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함), 안전 하차 보조, 전자식 차일드 락, 운전자 전방 주시 경고 카메라"
  },
  "EV4·전기·어스 롱레인지·유틸리티": {
    "price": "400,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_유틸리티.jpg",
    "desc": "실내 V2L 콘센트, 실외 V2L 커넥터"
  },
  "EV4·전기·어스 롱레인지·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_와이드_선루프.jpg",
    "desc": "와이드 선루프"
  },
  "EV4·전기·어스 롱레인지·하만카돈 프리미엄 사운드": {
    "price": "640,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프), 액티브 사운드 디자인(e-ASD)"
  },
  "EV4·전기·어스 롱레인지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV4·전기·어스 롱레인지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV4_전기_어스_롱레인지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV4·전기·어스 롱레인지·듀얼 모터 4WD": {
    "price": "2,270,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "듀얼 모터 4WD(19인치 휠&타이어 적용 시 선택 가능)"
  },
  "EV4·전기·어스 롱레인지·애프터마켓용 컬렉션": {
    "price": "150,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, 프로텍션 매트"
  },
  "EV3·전기·에어 스탠다드·스타일": {
    "price": "940,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_스타일.jpg",
    "desc": "스몰 큐브 프로젝션 LED 헤드램프, 다이내믹 웰컴 라이트, 고급형 LED 리어 콤비네이션 램프, 리어 LED 턴시그널 램프, 리어 LED 센터램프, 블랙하이그로시 서라운드 몰딩, 루프랙"
  },
  "EV3·전기·에어 스탠다드·컴포트I": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_컴포트I.jpg",
    "desc": "운전석 파워시트, 운전석 전동식 허리지지대, 1열 통풍시트"
  },
  "EV3·전기·에어 스탠다드·컴포트II": {
    "price": "890,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_컴포트II.jpg",
    "desc": "동승석 파워시트, 1열 릴렉션 컴포트시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 2열 열선시트, 운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 1열 이지 억세스, 후진연동 자동하향 아웃사이드 미러, 패브릭 감싸기(도어 암레스트, 크래쉬패드), 소프트 재질 도어 센터트림"
  },
  "EV3·전기·에어 스탠다드·컨비니언스": {
    "price": "1,290,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_컨비니언스.jpg",
    "desc": "실내 V2L 콘센트, 스마트폰 무선충전 시스템(듀얼), 기아 디지털 키 2, 스마트 파워테일게이트"
  },
  "EV3·전기·에어 스탠다드·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV3·전기·에어 스탠다드·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV3·전기·에어 스탠다드·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함)"
  },
  "EV3·전기·에어 스탠다드·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_와이드_선루프.jpg",
    "desc": "와이드 선루프, 니트 헤드라이닝"
  },
  "EV3·전기·에어 스탠다드·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV3·전기·에어 스탠다드·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_에어_스탠다드_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV3·전기·에어 롱레인지·스타일": {
    "price": "940,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_스타일.jpg",
    "desc": "스몰 큐브 프로젝션 LED 헤드램프, 다이내믹 웰컴 라이트, 고급형 LED 리어 콤비네이션 램프, 리어 LED 턴시그널 램프, 리어 LED 센터램프, 블랙하이그로시 서라운드 몰딩, 루프랙"
  },
  "EV3·전기·에어 롱레인지·컴포트I": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_컴포트I.jpg",
    "desc": "운전석 파워시트, 운전석 전동식 허리지지대, 1열 통풍시트"
  },
  "EV3·전기·에어 롱레인지·컴포트II": {
    "price": "890,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_컴포트II.jpg",
    "desc": "동승석 파워시트, 1열 릴렉션 컴포트시트, 동승석 워크인 디바이스, 동승석 전동식 허리지지대, 2열 열선시트, 운전자세 메모리 시스템(운전석 시트, 아웃사이드 미러), 1열 이지 억세스, 후진연동 자동하향 아웃사이드 미러, 패브릭 감싸기(도어 암레스트, 크래쉬패드), 소프트 재질 도어 센터트림"
  },
  "EV3·전기·에어 롱레인지·컨비니언스": {
    "price": "1,290,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_컨비니언스.jpg",
    "desc": "실내 V2L 콘센트, 스마트폰 무선충전 시스템(듀얼), 기아 디지털 키 2, 스마트 파워테일게이트"
  },
  "EV3·전기·에어 롱레인지·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV3·전기·에어 롱레인지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV3·전기·에어 롱레인지·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함)"
  },
  "EV3·전기·에어 롱레인지·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_와이드_선루프.jpg",
    "desc": "와이드 선루프, 니트 헤드라이닝"
  },
  "EV3·전기·에어 롱레인지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV3·전기·에어 롱레인지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_에어_롱레인지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV3·전기·에어 롱레인지·애프터마켓용 컬렉션": {
    "price": "150,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, 프로텍션 매트 ※ 적용 시 와이드 선루프, 듀얼 모터 4WD는 동시 선택이 불가함"
  },
  "EV3·전기·에어 롱레인지·듀얼 모터 4WD": {
    "price": "2,270,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "듀얼 모터 4WD(19인치 휠&타이어 적용 시 선택 가능)"
  },
  "EV3·전기·어스 스탠다드·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV3·전기·어스 스탠다드·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV3·전기·어스 스탠다드·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함)"
  },
  "EV3·전기·어스 스탠다드·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_와이드_선루프.jpg",
    "desc": "와이드 선루프, 니트 헤드라이닝"
  },
  "EV3·전기·어스 스탠다드·하만카돈 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프)"
  },
  "EV3·전기·어스 스탠다드·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV3·전기·어스 스탠다드·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_어스_스탠다드_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV3·전기·어스 롱레인지·19인치 휠&타이어": {
    "price": "490,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_19인치_휠_타이어.jpg",
    "desc": "215/50 R19 타이어&전면가공 휠"
  },
  "EV3·전기·어스 롱레인지·모니터링": {
    "price": "1,040,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_모니터링.jpg",
    "desc": "서라운드 뷰 모니터, 후측방 모니터, 리모트 360도 뷰(내 차 주변 영상), 후방 주차 충돌방지 보조, 측방 주차 거리 경고, 원격 스마트 주차 보조"
  },
  "EV3·전기·어스 롱레인지·드라이브 와이즈": {
    "price": "1,090,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_드라이브_와이즈.jpg",
    "desc": "전방 충돌방지 보조(교차 차량/측방 접근차/추월시 대향차/회피 조향 보조 기능 포함), 후측방 충돌방지 보조(전진 출차/주행), 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트 크루즈 컨트롤(운전 스타일 연동), 내비게이션 기반 스마트 크루즈 컨트롤(고속도로/자동차 전용도로 內 진출입로), 고속도로 주행 보조 2(차로변경 보조 기능 포함)"
  },
  "EV3·전기·어스 롱레인지·와이드 선루프": {
    "price": "640,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_와이드_선루프.jpg",
    "desc": "와이드 선루프, 니트 헤드라이닝"
  },
  "EV3·전기·어스 롱레인지·하만카돈 프리미엄 사운드": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_하만카돈_프리미엄_사운드.jpg",
    "desc": "하만카돈 프리미엄 사운드(8스피커, 외장앰프)"
  },
  "EV3·전기·어스 롱레인지·빌트인캠2플러스": {
    "price": "450,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_빌트인캠2플러스.jpg",
    "desc": "빌트인 캠 2 플러스, 증강현실 내비게이션"
  },
  "EV3·전기·어스 롱레인지·헤드업 디스플레이": {
    "price": "590,000원",
    "image": "images/options/EV3_전기_어스_롱레인지_헤드업_디스플레이.jpg",
    "desc": "헤드업 디스플레이"
  },
  "EV3·전기·어스 롱레인지·애프터마켓용 컬렉션": {
    "price": "150,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "애프터마켓 용품(빈차등/갓등/미터기 등) 장착용 와이어링, 프로텍션 매트 ※ 적용 시 와이드 선루프, 듀얼 모터 4WD는 동시 선택이 불가함"
  },
  "EV3·전기·어스 롱레인지·듀얼 모터 4WD": {
    "price": "2,270,000원",
    "image": "images/options/placeholder.jpg",
    "desc": "듀얼 모터 4WD(19인치 휠&타이어 적용 시 선택 가능)"
  }
});

Object.assign(dashboardData.cars, {
  "카니발": {
    "colors": {
      "스노우 화이트 펄": "images/cars/카니발 스노우 화이트 펄.png",
      "아이보리 실버": "images/cars/카니발 아이보리 실버.png",
      "오로라 블랙 펄": "images/cars/카니발 오로라 블랙 펄.png",
      "판테라 메탈": "images/cars/카니발 판테라 메탈.png",
      "스노우 화이트 펄 (하이브리드)": "images/cars/카니발 하이브리드 스노우 화이트 펄.png",
      "아이보리 실버 (하이브리드)": "images/cars/카니발 하이브리드 아이보리 실버.png",
      "오로라 블랙 펄 (하이브리드)": "images/cars/카니발 하이브리드 오로라 블랙 펄.png",
      "판테라 메탈 (하이브리드)": "images/cars/카니발 하이브리드 판테라 메탈.png"
    },
    "fuels": {
      "3.5 가솔린 9인승": {
        "displayFuel": "3.5 가솔린 9인승",
        "trims": {
          "프레스티지": {
            "displayTrim": "3.5 가솔린 9인승 프레스티지",
            "price": "36,360,000원",
            "options": [
              "카니발·3.5 가솔린 9인승·프레스티지·컨비니언스",
              "카니발·3.5 가솔린 9인승·프레스티지·스타일",
              "카니발·3.5 가솔린 9인승·프레스티지·12.3인치 클러스터",
              "카니발·3.5 가솔린 9인승·프레스티지·드라이브 와이즈",
              "카니발·3.5 가솔린 9인승·프레스티지·모니터링 팩"
            ]
          },
          "노블레스": {
            "displayTrim": "3.5 가솔린 9인승 노블레스",
            "price": "40,710,000원",
            "options": [
              "카니발·3.5 가솔린 9인승·노블레스·스타일",
              "카니발·3.5 가솔린 9인승·노블레스·컴포트",
              "카니발·3.5 가솔린 9인승·노블레스·스마트 커넥트",
              "카니발·3.5 가솔린 9인승·노블레스·드라이브 와이즈",
              "카니발·3.5 가솔린 9인승·노블레스·모니터링 팩",
              "카니발·3.5 가솔린 9인승·노블레스·HUD+빌트인캠2",
              "카니발·3.5 가솔린 9인승·노블레스·듀얼 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "3.5 가솔린 9인승 시그니처",
            "price": "44,260,000원",
            "options": [
              "카니발·3.5 가솔린 9인승·시그니처·스타일",
              "카니발·3.5 가솔린 9인승·시그니처·컴포트",
              "카니발·3.5 가솔린 9인승·시그니처·스마트 커넥트",
              "카니발·3.5 가솔린 9인승·시그니처·드라이브 와이즈",
              "카니발·3.5 가솔린 9인승·시그니처·모니터링 팩",
              "카니발·3.5 가솔린 9인승·시그니처·HUD+빌트인캠2",
              "카니발·3.5 가솔린 9인승·시그니처·BOSE 프리미엄 사운드",
              "카니발·3.5 가솔린 9인승·시그니처·듀얼 선루프"
            ]
          }
        }
      },
      "3.5 가솔린 7인승": {
        "displayFuel": "3.5 가솔린 7인승",
        "trims": {
          "노블레스": {
            "displayTrim": "3.5 가솔린 7인승 노블레스",
            "price": "43,260,000원",
            "options": [
              "카니발·3.5 가솔린 7인승·노블레스·스타일",
              "카니발·3.5 가솔린 7인승·노블레스·컴포트",
              "카니발·3.5 가솔린 7인승·노블레스·스마트 커넥트",
              "카니발·3.5 가솔린 7인승·노블레스·드라이브 와이즈",
              "카니발·3.5 가솔린 7인승·노블레스·모니터링 팩",
              "카니발·3.5 가솔린 7인승·노블레스·HUD+빌트인캠2",
              "카니발·3.5 가솔린 7인승·노블레스·듀얼 선루프"
            ]
          },
          "아웃도어": {
            "displayTrim": "3.5 가솔린 7인승 아웃도어",
            "price": "42,270,000원",
            "options": [
              "카니발·3.5 가솔린 7인승·아웃도어·스타일",
              "카니발·3.5 가솔린 7인승·아웃도어·스마트 커넥트",
              "카니발·3.5 가솔린 7인승·아웃도어·드라이브 와이즈",
              "카니발·3.5 가솔린 7인승·아웃도어·모니터링 팩",
              "카니발·3.5 가솔린 7인승·아웃도어·HUD+빌트인캠2",
              "카니발·3.5 가솔린 7인승·아웃도어·듀얼 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "3.5 가솔린 7인승 시그니처",
            "price": "47,020,000원",
            "options": [
              "카니발·3.5 가솔린 7인승·시그니처·스타일",
              "카니발·3.5 가솔린 7인승·시그니처·컴포트",
              "카니발·3.5 가솔린 7인승·시그니처·스마트 커넥트",
              "카니발·3.5 가솔린 7인승·시그니처·드라이브 와이즈",
              "카니발·3.5 가솔린 7인승·시그니처·모니터링 팩",
              "카니발·3.5 가솔린 7인승·시그니처·HUD+빌트인캠2",
              "카니발·3.5 가솔린 7인승·시그니처·BOSE 프리미엄 사운드",
              "카니발·3.5 가솔린 7인승·시그니처·듀얼 선루프"
            ]
          }
        }
      },
      "터보 하이브리드 9인승": {
        "displayFuel": "터보 하이브리드 9인승",
        "trims": {
          "프레스티지": {
            "displayTrim": "터보 하이브리드 9인승 프레스티지",
            "price": "40,910,000원",
            "options": [
              "카니발·터보 하이브리드 9인승·프레스티지·컨비니언스",
              "카니발·터보 하이브리드 9인승·프레스티지·스타일",
              "카니발·터보 하이브리드 9인승·프레스티지·12.3인치 클러스터",
              "카니발·터보 하이브리드 9인승·프레스티지·드라이브 와이즈",
              "카니발·터보 하이브리드 9인승·프레스티지·모니터링 팩"
            ]
          },
          "노블레스": {
            "displayTrim": "터보 하이브리드 9인승 노블레스",
            "price": "45,260,000원",
            "options": [
              "카니발·터보 하이브리드 9인승·노블레스·스타일",
              "카니발·터보 하이브리드 9인승·노블레스·컴포트",
              "카니발·터보 하이브리드 9인승·노블레스·스마트 커넥트",
              "카니발·터보 하이브리드 9인승·노블레스·드라이브 와이즈",
              "카니발·터보 하이브리드 9인승·노블레스·모니터링 팩",
              "카니발·터보 하이브리드 9인승·노블레스·HUD+빌트인캠2",
              "카니발·터보 하이브리드 9인승·노블레스·듀얼 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 9인승 시그니처",
            "price": "48,810,000원",
            "options": [
              "카니발·터보 하이브리드 9인승·시그니처·스타일",
              "카니발·터보 하이브리드 9인승·시그니처·컴포트",
              "카니발·터보 하이브리드 9인승·시그니처·스마트 커넥트",
              "카니발·터보 하이브리드 9인승·시그니처·드라이브 와이즈",
              "카니발·터보 하이브리드 9인승·시그니처·모니터링 팩",
              "카니발·터보 하이브리드 9인승·시그니처·HUD+빌트인캠2",
              "카니발·터보 하이브리드 9인승·시그니처·BOSE 프리미엄 사운드",
              "카니발·터보 하이브리드 9인승·시그니처·듀얼 선루프"
            ]
          }
        }
      },
      "터보 하이브리드 7인승": {
        "displayFuel": "터보 하이브리드 7인승",
        "trims": {
          "노블레스": {
            "displayTrim": "터보 하이브리드 7인승 노블레스",
            "price": "47,760,000원",
            "options": [
              "카니발·터보 하이브리드 7인승·노블레스·스타일",
              "카니발·터보 하이브리드 7인승·노블레스·컴포트",
              "카니발·터보 하이브리드 7인승·노블레스·스마트 커넥트",
              "카니발·터보 하이브리드 7인승·노블레스·드라이브 와이즈",
              "카니발·터보 하이브리드 7인승·노블레스·모니터링 팩",
              "카니발·터보 하이브리드 7인승·노블레스·HUD+빌트인캠2",
              "카니발·터보 하이브리드 7인승·노블레스·듀얼 선루프"
            ]
          },
          "아웃도어": {
            "displayTrim": "터보 하이브리드 7인승 아웃도어",
            "price": "46,770,000원",
            "options": [
              "카니발·터보 하이브리드 7인승·아웃도어·스타일",
              "카니발·터보 하이브리드 7인승·아웃도어·스마트 커넥트",
              "카니발·터보 하이브리드 7인승·아웃도어·드라이브 와이즈",
              "카니발·터보 하이브리드 7인승·아웃도어·모니터링 팩",
              "카니발·터보 하이브리드 7인승·아웃도어·HUD+빌트인캠2",
              "카니발·터보 하이브리드 7인승·아웃도어·듀얼 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 7인승 시그니처",
            "price": "51,520,000원",
            "options": [
              "카니발·터보 하이브리드 7인승·시그니처·스타일",
              "카니발·터보 하이브리드 7인승·시그니처·컴포트",
              "카니발·터보 하이브리드 7인승·시그니처·스마트 커넥트",
              "카니발·터보 하이브리드 7인승·시그니처·드라이브 와이즈",
              "카니발·터보 하이브리드 7인승·시그니처·모니터링 팩",
              "카니발·터보 하이브리드 7인승·시그니처·HUD+빌트인캠2",
              "카니발·터보 하이브리드 7인승·시그니처·BOSE 프리미엄 사운드",
              "카니발·터보 하이브리드 7인승·시그니처·듀얼 선루프"
            ]
          }
        }
      }
    }
  },
  "쏘렌토": {
    "colors": {
      "볼캐닉 샌드 브라운": "images/cars/쏘렌토 볼캐닉 샌드 브라운.png",
      "스노우 화이트 펄": "images/cars/쏘렌토 스노우 화이트 펄.png",
      "시티스케이프 그린": "images/cars/쏘렌토 시티스케이프 그린.png",
      "오로라 블랙 펄": "images/cars/쏘렌토 오로라 블랙 펄.png",
      "볼캐닉 샌드 브라운 (하이브리드)": "images/cars/쏘렌토 하이브리드 볼캐닉 샌드 브라운.png",
      "스노우 화이트 펄 (하이브리드)": "images/cars/쏘렌토 하이브리드 스노우 화이트 펄.png",
      "시티스케이프 그린 (하이브리드)": "images/cars/쏘렌토 하이브리드 시티스케이프 그린.png",
      "오로라 블랙 펄 (하이브리드)": "images/cars/쏘렌토 하이브리드 오로라 블랙 펄.png",
      "인터스텔라 그레이 (하이브리드)": "images/cars/쏘렌토 하이브리드 인터스텔라 그레이.png",
      "인터스텔라 그레이": "images/cars/쏘렌트 인터스텔라 그레이.png"
    },
    "fuels": {
      "2.5 가솔린 터보": {
        "displayFuel": "2.5 가솔린 터보",
        "trims": {
          "프레스티지": {
            "displayTrim": "2.5 가솔린 터보 프레스티지",
            "price": "36,310,000원",
            "options": [
              "쏘렌토·2.5 가솔린 터보·프레스티지·전자식 4WD",
              "쏘렌토·2.5 가솔린 터보·프레스티지·6인승",
              "쏘렌토·2.5 가솔린 터보·프레스티지·7인승",
              "쏘렌토·2.5 가솔린 터보·프레스티지·스타일",
              "쏘렌토·2.5 가솔린 터보·프레스티지·12.3인치 클러스터",
              "쏘렌토·2.5 가솔린 터보·프레스티지·드라이브 와이즈",
              "쏘렌토·2.5 가솔린 터보·프레스티지·HUD+빌트인캠2",
              "쏘렌토·2.5 가솔린 터보·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.5 가솔린 터보 노블레스",
            "price": "39,460,000원",
            "options": [
              "쏘렌토·2.5 가솔린 터보·노블레스·전자식 4WD",
              "쏘렌토·2.5 가솔린 터보·노블레스·6인승",
              "쏘렌토·2.5 가솔린 터보·노블레스·7인승",
              "쏘렌토·2.5 가솔린 터보·노블레스·스타일",
              "쏘렌토·2.5 가솔린 터보·노블레스·드라이브 와이즈",
              "쏘렌토·2.5 가솔린 터보·노블레스·HUD+빌트인캠2",
              "쏘렌토·2.5 가솔린 터보·노블레스·스마트 커넥트",
              "쏘렌토·2.5 가솔린 터보·노블레스·KRELL 프리미엄 사운드",
              "쏘렌토·2.5 가솔린 터보·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.5 가솔린 터보 시그니처",
            "price": "42,270,000원",
            "options": [
              "쏘렌토·2.5 가솔린 터보·시그니처·전자식 4WD",
              "쏘렌토·2.5 가솔린 터보·시그니처·6인승",
              "쏘렌토·2.5 가솔린 터보·시그니처·7인승",
              "쏘렌토·2.5 가솔린 터보·시그니처·컴포트",
              "쏘렌토·2.5 가솔린 터보·시그니처·드라이브 와이즈",
              "쏘렌토·2.5 가솔린 터보·시그니처·HUD+빌트인캠2",
              "쏘렌토·2.5 가솔린 터보·시그니처·스마트 커넥트",
              "쏘렌토·2.5 가솔린 터보·시그니처·KRELL 프리미엄 사운드",
              "쏘렌토·2.5 가솔린 터보·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "2.2 디젤": {
        "displayFuel": "2.2 디젤",
        "trims": {
          "프레스티지": {
            "displayTrim": "2.2 디젤 프레스티지",
            "price": "38,040,000원",
            "options": [
              "쏘렌토·2.2 디젤·프레스티지·전자식 4WD",
              "쏘렌토·2.2 디젤·프레스티지·6인승",
              "쏘렌토·2.2 디젤·프레스티지·7인승",
              "쏘렌토·2.2 디젤·프레스티지·스타일",
              "쏘렌토·2.2 디젤·프레스티지·12.3인치 클러스터",
              "쏘렌토·2.2 디젤·프레스티지·드라이브 와이즈",
              "쏘렌토·2.2 디젤·프레스티지·HUD+빌트인캠2",
              "쏘렌토·2.2 디젤·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.2 디젤 노블레스",
            "price": "41,190,000원",
            "options": [
              "쏘렌토·2.2 디젤·노블레스·전자식 4WD",
              "쏘렌토·2.2 디젤·노블레스·6인승",
              "쏘렌토·2.2 디젤·노블레스·7인승",
              "쏘렌토·2.2 디젤·노블레스·스타일",
              "쏘렌토·2.2 디젤·노블레스·드라이브 와이즈",
              "쏘렌토·2.2 디젤·노블레스·HUD+빌트인캠2",
              "쏘렌토·2.2 디젤·노블레스·스마트 커넥트",
              "쏘렌토·2.2 디젤·노블레스·KRELL 프리미엄 사운드",
              "쏘렌토·2.2 디젤·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.2 디젤 시그니처",
            "price": "44,000,000원",
            "options": [
              "쏘렌토·2.2 디젤·시그니처·전자식 4WD",
              "쏘렌토·2.2 디젤·시그니처·6인승",
              "쏘렌토·2.2 디젤·시그니처·7인승",
              "쏘렌토·2.2 디젤·시그니처·컴포트",
              "쏘렌토·2.2 디젤·시그니처·드라이브 와이즈",
              "쏘렌토·2.2 디젤·시그니처·HUD+빌트인캠2",
              "쏘렌토·2.2 디젤·시그니처·스마트 커넥트",
              "쏘렌토·2.2 디젤·시그니처·KRELL 프리미엄 사운드",
              "쏘렌토·2.2 디젤·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "터보 하이브리드 2WD": {
        "displayFuel": "터보 하이브리드 2WD",
        "trims": {
          "프레스티지": {
            "displayTrim": "터보 하이브리드 2WD 프레스티지",
            "price": "40,530,000원",
            "options": [
              "쏘렌토·터보 하이브리드 2WD·프레스티지·6인승",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·7인승",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·스타일",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·12.3인치 클러스터",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 2WD·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "터보 하이브리드 2WD 노블레스",
            "price": "43,790,000원",
            "options": [
              "쏘렌토·터보 하이브리드 2WD·노블레스·6인승",
              "쏘렌토·터보 하이브리드 2WD·노블레스·7인승",
              "쏘렌토·터보 하이브리드 2WD·노블레스·스타일",
              "쏘렌토·터보 하이브리드 2WD·노블레스·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 2WD·노블레스·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 2WD·노블레스·스마트 커넥트",
              "쏘렌토·터보 하이브리드 2WD·노블레스·KRELL 프리미엄 사운드",
              "쏘렌토·터보 하이브리드 2WD·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 2WD 시그니처",
            "price": "46,310,000원",
            "options": [
              "쏘렌토·터보 하이브리드 2WD·시그니처·6인승",
              "쏘렌토·터보 하이브리드 2WD·시그니처·7인승",
              "쏘렌토·터보 하이브리드 2WD·시그니처·컴포트",
              "쏘렌토·터보 하이브리드 2WD·시그니처·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 2WD·시그니처·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 2WD·시그니처·스마트 커넥트",
              "쏘렌토·터보 하이브리드 2WD·시그니처·KRELL 프리미엄 사운드",
              "쏘렌토·터보 하이브리드 2WD·시그니처·파노라마 선루프",
              "쏘렌토·터보 하이브리드 2WD·시그니처·19인치 휠"
            ]
          }
        }
      },
      "터보 하이브리드 4WD": {
        "displayFuel": "터보 하이브리드 4WD",
        "trims": {
          "프레스티지": {
            "displayTrim": "터보 하이브리드 4WD 프레스티지",
            "price": "42,850,000원",
            "options": [
              "쏘렌토·터보 하이브리드 4WD·프레스티지·6인승",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·7인승",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·스타일",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·12.3인치 클러스터",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 4WD·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "터보 하이브리드 4WD 노블레스",
            "price": "46,100,000원",
            "options": [
              "쏘렌토·터보 하이브리드 4WD·노블레스·6인승",
              "쏘렌토·터보 하이브리드 4WD·노블레스·7인승",
              "쏘렌토·터보 하이브리드 4WD·노블레스·스타일",
              "쏘렌토·터보 하이브리드 4WD·노블레스·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 4WD·노블레스·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 4WD·노블레스·스마트 커넥트",
              "쏘렌토·터보 하이브리드 4WD·노블레스·KRELL 프리미엄 사운드",
              "쏘렌토·터보 하이브리드 4WD·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 4WD 시그니처",
            "price": "48,630,000원",
            "options": [
              "쏘렌토·터보 하이브리드 4WD·시그니처·6인승",
              "쏘렌토·터보 하이브리드 4WD·시그니처·7인승",
              "쏘렌토·터보 하이브리드 4WD·시그니처·컴포트",
              "쏘렌토·터보 하이브리드 4WD·시그니처·드라이브 와이즈",
              "쏘렌토·터보 하이브리드 4WD·시그니처·HUD+빌트인캠2",
              "쏘렌토·터보 하이브리드 4WD·시그니처·스마트 커넥트",
              "쏘렌토·터보 하이브리드 4WD·시그니처·KRELL 프리미엄 사운드",
              "쏘렌토·터보 하이브리드 4WD·시그니처·파노라마 선루프",
              "쏘렌토·터보 하이브리드 4WD·시그니처·19인치 휠"
            ]
          }
        }
      }
    }
  },
  "스포티지": {
    "colors": {
      "그래비티 그레이": "images/cars/스포티지 그래비티 그레이.png",
      "베스타 블루": "images/cars/스포티지 베스타 블루.png",
      "스노우 화이트 펄": "images/cars/스포티지 스노우 화이트 펄.png",
      "울프 그레이": "images/cars/스포티지 울프 그레이.png",
      "퓨전 블랙": "images/cars/스포티지 퓨전 블랙.png",
      "그래비티 그레이 (하이브리드)": "images/cars/스포티지 하이브리드 그래비티 그레이.png",
      "베스타 블루 (하이브리드)": "images/cars/스포티지 하이브리드 베스타 블루.png",
      "스노우 화이트 펄 (하이브리드)": "images/cars/스포티지 하이브리드 스노우 화이트 펄.png",
      "울프 그레이 (하이브리드)": "images/cars/스포티지 하이브리드 울프 그레이.png",
      "퓨전 블랙 (하이브리드)": "images/cars/스포티지 하이브리드 퓨전 블랙.png",
      "헤리티지 블루 (하이브리드)": "images/cars/스포티지 하이브리드 헤리티지 블루.png",
      "헤리티지 블루": "images/cars/스포티지 헤리티지 블루.png"
    },
    "fuels": {
      "1.6 가솔린 터보": {
        "displayFuel": "1.6 가솔린 터보",
        "trims": {
          "프레스티지": {
            "displayTrim": "1.6 가솔린 터보 프레스티지",
            "price": "29,030,000원",
            "options": [
              "스포티지·1.6 가솔린 터보·프레스티지·전자식 4WD",
              "스포티지·1.6 가솔린 터보·프레스티지·스타일",
              "스포티지·1.6 가솔린 터보·프레스티지·12.3인치 내비게이션",
              "스포티지·1.6 가솔린 터보·프레스티지·빌트인 캠2",
              "스포티지·1.6 가솔린 터보·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "1.6 가솔린 터보 노블레스",
            "price": "32,420,000원",
            "options": [
              "스포티지·1.6 가솔린 터보·노블레스·전자식 4WD",
              "스포티지·1.6 가솔린 터보·노블레스·스타일",
              "스포티지·1.6 가솔린 터보·노블레스·컴포트",
              "스포티지·1.6 가솔린 터보·노블레스·드라이브 와이즈",
              "스포티지·1.6 가솔린 터보·노블레스·빌트인 캠2",
              "스포티지·1.6 가솔린 터보·노블레스·모니터링",
              "스포티지·1.6 가솔린 터보·노블레스·KRELL 프리미엄 사운드",
              "스포티지·1.6 가솔린 터보·노블레스·스마트 커넥트",
              "스포티지·1.6 가솔린 터보·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "1.6 가솔린 터보 시그니처",
            "price": "35,070,000원",
            "options": [
              "스포티지·1.6 가솔린 터보·시그니처·전자식 4WD",
              "스포티지·1.6 가솔린 터보·시그니처·19인치 전면가공 휠",
              "스포티지·1.6 가솔린 터보·시그니처·프리미엄",
              "스포티지·1.6 가솔린 터보·시그니처·드라이브 와이즈",
              "스포티지·1.6 가솔린 터보·시그니처·빌트인 캠2",
              "스포티지·1.6 가솔린 터보·시그니처·모니터링",
              "스포티지·1.6 가솔린 터보·시그니처·KRELL 프리미엄 사운드",
              "스포티지·1.6 가솔린 터보·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "2.0 LPG": {
        "displayFuel": "2.0 LPG",
        "trims": {
          "프레스티지": {
            "displayTrim": "2.0 LPG 프레스티지",
            "price": "29,680,000원",
            "options": [
              "스포티지·2.0 LPG·프레스티지·전자식 4WD",
              "스포티지·2.0 LPG·프레스티지·스타일",
              "스포티지·2.0 LPG·프레스티지·12.3인치 내비게이션",
              "스포티지·2.0 LPG·프레스티지·빌트인 캠2",
              "스포티지·2.0 LPG·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.0 LPG 노블레스",
            "price": "33,070,000원",
            "options": [
              "스포티지·2.0 LPG·노블레스·전자식 4WD",
              "스포티지·2.0 LPG·노블레스·스타일",
              "스포티지·2.0 LPG·노블레스·컴포트",
              "스포티지·2.0 LPG·노블레스·드라이브 와이즈",
              "스포티지·2.0 LPG·노블레스·빌트인 캠2",
              "스포티지·2.0 LPG·노블레스·모니터링",
              "스포티지·2.0 LPG·노블레스·KRELL 프리미엄 사운드",
              "스포티지·2.0 LPG·노블레스·스마트 커넥트",
              "스포티지·2.0 LPG·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.0 LPG 시그니처",
            "price": "35,720,000원",
            "options": [
              "스포티지·2.0 LPG·시그니처·전자식 4WD",
              "스포티지·2.0 LPG·시그니처·19인치 전면가공 휠",
              "스포티지·2.0 LPG·시그니처·프리미엄",
              "스포티지·2.0 LPG·시그니처·드라이브 와이즈",
              "스포티지·2.0 LPG·시그니처·빌트인 캠2",
              "스포티지·2.0 LPG·시그니처·모니터링",
              "스포티지·2.0 LPG·시그니처·KRELL 프리미엄 사운드",
              "스포티지·2.0 LPG·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "터보 하이브리드": {
        "displayFuel": "터보 하이브리드",
        "trims": {
          "프레스티지": {
            "displayTrim": "터보 하이브리드 프레스티지",
            "price": "34,950,000원",
            "options": [
              "스포티지·터보 하이브리드·프레스티지·전자식 4WD",
              "스포티지·터보 하이브리드·프레스티지·스타일",
              "스포티지·터보 하이브리드·프레스티지·12.3인치 내비게이션",
              "스포티지·터보 하이브리드·프레스티지·빌트인 캠2",
              "스포티지·터보 하이브리드·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "터보 하이브리드 노블레스",
            "price": "38,230,000원",
            "options": [
              "스포티지·터보 하이브리드·노블레스·전자식 4WD",
              "스포티지·터보 하이브리드·노블레스·스타일",
              "스포티지·터보 하이브리드·노블레스·컴포트",
              "스포티지·터보 하이브리드·노블레스·드라이브 와이즈",
              "스포티지·터보 하이브리드·노블레스·빌트인 캠2",
              "스포티지·터보 하이브리드·노블레스·모니터링",
              "스포티지·터보 하이브리드·노블레스·KRELL 프리미엄 사운드",
              "스포티지·터보 하이브리드·노블레스·스마트 커넥트",
              "스포티지·터보 하이브리드·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 시그니처",
            "price": "40,880,000원",
            "options": [
              "스포티지·터보 하이브리드·시그니처·전자식 4WD",
              "스포티지·터보 하이브리드·시그니처·19인치 전면가공 휠",
              "스포티지·터보 하이브리드·시그니처·프리미엄",
              "스포티지·터보 하이브리드·시그니처·드라이브 와이즈",
              "스포티지·터보 하이브리드·시그니처·빌트인 캠2",
              "스포티지·터보 하이브리드·시그니처·모니터링",
              "스포티지·터보 하이브리드·시그니처·KRELL 프리미엄 사운드",
              "스포티지·터보 하이브리드·시그니처·파노라마 선루프"
            ]
          }
        }
      }
    }
  },
  "니로": {
    "colors": {
      "스노우 화이트 펄": "images/cars/니로 스노우 화이트 펄.png",
      "스틸 그레이": "images/cars/니로 스틸 그레이.png",
      "시티스케이프 그린": "images/cars/니로 시티스케이프 그린.png",
      "오로라 블랙 펄": "images/cars/니로 오로라 블랙 펄.png",
      "인터스텔라 그레이": "images/cars/니로 인터스텔라 그레이.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "트렌디": {
            "displayTrim": "하이브리드 트렌디",
            "price": "30,270,000원",
            "options": [
              "니로·하이브리드·트렌디·컨비니언스",
              "니로·하이브리드·트렌디·18인치 휠",
              "니로·하이브리드·트렌디·드라이브 와이즈I",
              "니로·하이브리드·트렌디·12.3인치 클러스터 팩",
              "니로·하이브리드·트렌디·빌트인캠2플러스"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "33,420,000원",
            "options": [
              "니로·하이브리드·프레스티지·스타일",
              "니로·하이브리드·프레스티지·18인치 휠",
              "니로·하이브리드·프레스티지·프리미엄",
              "니로·하이브리드·프레스티지·드라이브 와이즈I",
              "니로·하이브리드·프레스티지·12.3인치 클러스터 팩",
              "니로·하이브리드·프레스티지·드라이브 와이즈II",
              "니로·하이브리드·프레스티지·HUD",
              "니로·하이브리드·프레스티지·빌트인캠2플러스",
              "니로·하이브리드·프레스티지·컴포트",
              "니로·하이브리드·프레스티지·스마트 커넥트",
              "니로·하이브리드·프레스티지·선루프+LED실내등"
            ]
          },
          "시그니처": {
            "displayTrim": "하이브리드 시그니처",
            "price": "36,150,000원",
            "options": [
              "니로·하이브리드·시그니처·스타일",
              "니로·하이브리드·시그니처·18인치 휠",
              "니로·하이브리드·시그니처·프리미엄",
              "니로·하이브리드·시그니처·드라이브 와이즈I",
              "니로·하이브리드·시그니처·드라이브 와이즈II",
              "니로·하이브리드·시그니처·HUD",
              "니로·하이브리드·시그니처·빌트인캠2플러스",
              "니로·하이브리드·시그니처·컴포트",
              "니로·하이브리드·시그니처·스마트 커넥트",
              "니로·하이브리드·시그니처·하만카돈 프리미엄 사운드",
              "니로·하이브리드·시그니처·선루프+LED실내등"
            ]
          }
        }
      }
    }
  },
  "셀토스": {
    "colors": {
      "그래비티 그레이": "images/cars/셀토스 그래비티 그레이.png",
      "스노우 화이트 펄": "images/cars/셀토스 스노우 화이트 펄.png",
      "아이보리 실버": "images/cars/셀토스 아이보리 실버.png",
      "아이스버그 그린": "images/cars/셀토스 아이스버그 그린.png",
      "퓨전 블랙": "images/cars/셀토스 퓨전 블랙.png",
      "프로스트 블루": "images/cars/셀토스 프로스트 블루.png"
    },
    "fuels": {
      "1.6 가솔린 터보": {
        "displayFuel": "1.6 가솔린 터보",
        "trims": {
          "트렌디": {
            "displayTrim": "1.6 가솔린 터보 트렌디",
            "price": "25,120,000원",
            "options": [
              "셀토스·1.6 가솔린 터보·트렌디·전자식 4WD",
              "셀토스·1.6 가솔린 터보·트렌디·스타일",
              "셀토스·1.6 가솔린 터보·트렌디·컨비니언스",
              "셀토스·1.6 가솔린 터보·트렌디·12.3인치 내비게이션",
              "셀토스·1.6 가솔린 터보·트렌디·빌트인캠2플러스",
              "셀토스·1.6 가솔린 터보·트렌디·12.3인치 클러스터",
              "셀토스·1.6 가솔린 터보·트렌디·스마트 커넥트",
              "셀토스·1.6 가솔린 터보·트렌디·드라이브 와이즈"
            ]
          },
          "프레스티지": {
            "displayTrim": "1.6 가솔린 터보 프레스티지",
            "price": "28,800,000원",
            "options": [
              "셀토스·1.6 가솔린 터보·프레스티지·스타일",
              "셀토스·1.6 가솔린 터보·프레스티지·빌트인캠2플러스",
              "셀토스·1.6 가솔린 터보·프레스티지·12.3인치 클러스터",
              "셀토스·1.6 가솔린 터보·프레스티지·스마트 커넥트",
              "셀토스·1.6 가솔린 터보·프레스티지·드라이브 와이즈",
              "셀토스·1.6 가솔린 터보·프레스티지·모니터링",
              "셀토스·1.6 가솔린 터보·프레스티지·헤드업 디스플레이",
              "셀토스·1.6 가솔린 터보·프레스티지·컴포트",
              "셀토스·1.6 가솔린 터보·프레스티지·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "1.6 가솔린 터보 시그니처",
            "price": "31,450,000원",
            "options": [
              "셀토스·1.6 가솔린 터보·시그니처·스타일",
              "셀토스·1.6 가솔린 터보·시그니처·빌트인캠2플러스",
              "셀토스·1.6 가솔린 터보·시그니처·드라이브 와이즈",
              "셀토스·1.6 가솔린 터보·시그니처·모니터링",
              "셀토스·1.6 가솔린 터보·시그니처·헤드업 디스플레이",
              "셀토스·1.6 가솔린 터보·시그니처·컴포트",
              "셀토스·1.6 가솔린 터보·시그니처·하만카돈 프리미엄 사운드",
              "셀토스·1.6 가솔린 터보·시그니처·파노라마 선루프",
              "셀토스·1.6 가솔린 터보·시그니처·투톤 루프"
            ]
          }
        }
      },
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "트렌디": {
            "displayTrim": "하이브리드 트렌디",
            "price": "30,400,000원",
            "options": [
              "셀토스·하이브리드·트렌디·스타일",
              "셀토스·하이브리드·트렌디·컨비니언스",
              "셀토스·하이브리드·트렌디·12.3인치 내비게이션",
              "셀토스·하이브리드·트렌디·빌트인캠2플러스",
              "셀토스·하이브리드·트렌디·12.3인치 클러스터",
              "셀토스·하이브리드·트렌디·스마트 커넥트",
              "셀토스·하이브리드·트렌디·드라이브 와이즈"
            ]
          },
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "33,550,000원",
            "options": [
              "셀토스·하이브리드·프레스티지·스타일",
              "셀토스·하이브리드·프레스티지·빌트인캠2플러스",
              "셀토스·하이브리드·프레스티지·12.3인치 클러스터",
              "셀토스·하이브리드·프레스티지·스마트 커넥트",
              "셀토스·하이브리드·프레스티지·드라이브 와이즈",
              "셀토스·하이브리드·프레스티지·모니터링",
              "셀토스·하이브리드·프레스티지·헤드업 디스플레이",
              "셀토스·하이브리드·프레스티지·컴포트",
              "셀토스·하이브리드·프레스티지·실내 V2L",
              "셀토스·하이브리드·프레스티지·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "하이브리드 시그니처",
            "price": "36,200,000원",
            "options": [
              "셀토스·하이브리드·시그니처·스타일",
              "셀토스·하이브리드·시그니처·빌트인캠2플러스",
              "셀토스·하이브리드·시그니처·드라이브 와이즈",
              "셀토스·하이브리드·시그니처·모니터링",
              "셀토스·하이브리드·시그니처·헤드업 디스플레이",
              "셀토스·하이브리드·시그니처·컴포트",
              "셀토스·하이브리드·시그니처·하만카돈 프리미엄 사운드",
              "셀토스·하이브리드·시그니처·실내 V2L",
              "셀토스·하이브리드·시그니처·파노라마 선루프",
              "셀토스·하이브리드·시그니처·투톤 루프"
            ]
          }
        }
      }
    }
  },
  "K8": {
    "colors": {
      "문스케이프 매트 그레이": "images/cars/k8 문스케이프 매트 그레이.png",
      "선셋 베이지": "images/cars/k8 선셋 베이지.png",
      "스노우 화이트 펄": "images/cars/k8 스노우 화이트 펄.png",
      "아이보리 실버": "images/cars/k8 아이보리 실버.png",
      "오로라 블랙 펄": "images/cars/k8 오로라 블랙 펄.png",
      "인터스텔라 그레이": "images/cars/k8 인터스텔라 그레이.png"
    },
    "fuels": {
      "터보 하이브리드": {
        "displayFuel": "터보 하이브리드",
        "trims": {
          "노블레스라이트": {
            "displayTrim": "터보 하이브리드 노블레스라이트",
            "price": "43,670,000원",
            "options": [
              "K8·터보 하이브리드·노블레스라이트·스타일",
              "K8·터보 하이브리드·노블레스라이트·드라이브 와이즈",
              "K8·터보 하이브리드·노블레스라이트·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "터보 하이브리드 베스트셀렉션",
            "price": "45,200,000원",
            "options": [
              "K8·터보 하이브리드·베스트셀렉션·스타일",
              "K8·터보 하이브리드·베스트셀렉션·헤드업 디스플레이",
              "K8·터보 하이브리드·베스트셀렉션·드라이브 와이즈",
              "K8·터보 하이브리드·베스트셀렉션·스마트 커넥트",
              "K8·터보 하이브리드·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "터보 하이브리드 노블레스",
            "price": "47,780,000원",
            "options": [
              "K8·터보 하이브리드·노블레스·스타일",
              "K8·터보 하이브리드·노블레스·헤드업 디스플레이",
              "K8·터보 하이브리드·노블레스·메리디안 프리미엄 사운드",
              "K8·터보 하이브리드·노블레스·프리미엄",
              "K8·터보 하이브리드·노블레스·스마트 커넥트",
              "K8·터보 하이브리드·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "터보 하이브리드 시그니처",
            "price": "51,380,000원",
            "options": [
              "K8·터보 하이브리드·시그니처·프리뷰 전자제어 서스펜션I",
              "K8·터보 하이브리드·시그니처·메리디안 프리미엄 사운드",
              "K8·터보 하이브리드·시그니처·프리미엄",
              "K8·터보 하이브리드·시그니처·파노라마 선루프"
            ]
          },
          "시그니처블랙": {
            "displayTrim": "터보 하이브리드 시그니처블랙",
            "price": "52,750,000원",
            "options": [
              "K8·터보 하이브리드·시그니처블랙·메리디안 프리미엄 사운드",
              "K8·터보 하이브리드·시그니처블랙·프리미엄",
              "K8·터보 하이브리드·시그니처블랙·파노라마 선루프"
            ]
          }
        }
      },
      "2.5 가솔린": {
        "displayFuel": "2.5 가솔린",
        "trims": {
          "노블레스라이트": {
            "displayTrim": "2.5 가솔린 노블레스라이트",
            "price": "37,310,000원",
            "options": [
              "K8·2.5 가솔린·노블레스라이트·스타일",
              "K8·2.5 가솔린·노블레스라이트·드라이브 와이즈",
              "K8·2.5 가솔린·노블레스라이트·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "2.5 가솔린 베스트셀렉션",
            "price": "38,850,000원",
            "options": [
              "K8·2.5 가솔린·베스트셀렉션·스타일",
              "K8·2.5 가솔린·베스트셀렉션·헤드업 디스플레이",
              "K8·2.5 가솔린·베스트셀렉션·드라이브 와이즈",
              "K8·2.5 가솔린·베스트셀렉션·스마트 커넥트",
              "K8·2.5 가솔린·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.5 가솔린 노블레스",
            "price": "41,430,000원",
            "options": [
              "K8·2.5 가솔린·노블레스·스타일",
              "K8·2.5 가솔린·노블레스·헤드업 디스플레이",
              "K8·2.5 가솔린·노블레스·메리디안 프리미엄 사운드",
              "K8·2.5 가솔린·노블레스·프리미엄",
              "K8·2.5 가솔린·노블레스·스마트 커넥트",
              "K8·2.5 가솔린·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.5 가솔린 시그니처",
            "price": "45,020,000원",
            "options": [
              "K8·2.5 가솔린·시그니처·프리뷰 전자제어 서스펜션I",
              "K8·2.5 가솔린·시그니처·프리뷰 전자제어 서스펜션II",
              "K8·2.5 가솔린·시그니처·메리디안 프리미엄 사운드",
              "K8·2.5 가솔린·시그니처·프리미엄",
              "K8·2.5 가솔린·시그니처·파노라마 선루프"
            ]
          },
          "시그니처블랙": {
            "displayTrim": "2.5 가솔린 시그니처블랙",
            "price": "46,600,000원",
            "options": [
              "K8·2.5 가솔린·시그니처블랙·메리디안 프리미엄 사운드",
              "K8·2.5 가솔린·시그니처블랙·프리미엄",
              "K8·2.5 가솔린·시그니처블랙·파노라마 선루프"
            ]
          }
        }
      },
      "3.5 가솔린": {
        "displayFuel": "3.5 가솔린",
        "trims": {
          "노블레스라이트": {
            "displayTrim": "3.5 가솔린 노블레스라이트",
            "price": "40,430,000원",
            "options": [
              "K8·3.5 가솔린·노블레스라이트·AWD",
              "K8·3.5 가솔린·노블레스라이트·스타일",
              "K8·3.5 가솔린·노블레스라이트·드라이브 와이즈",
              "K8·3.5 가솔린·노블레스라이트·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "3.5 가솔린 베스트셀렉션",
            "price": "41,720,000원",
            "options": [
              "K8·3.5 가솔린·베스트셀렉션·스타일",
              "K8·3.5 가솔린·베스트셀렉션·헤드업 디스플레이",
              "K8·3.5 가솔린·베스트셀렉션·드라이브 와이즈",
              "K8·3.5 가솔린·베스트셀렉션·스마트 커넥트",
              "K8·3.5 가솔린·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "3.5 가솔린 노블레스",
            "price": "44,300,000원",
            "options": [
              "K8·3.5 가솔린·노블레스·스타일",
              "K8·3.5 가솔린·노블레스·헤드업 디스플레이",
              "K8·3.5 가솔린·노블레스·메리디안 프리미엄 사운드",
              "K8·3.5 가솔린·노블레스·AWD",
              "K8·3.5 가솔린·노블레스·프리미엄",
              "K8·3.5 가솔린·노블레스·스마트 커넥트",
              "K8·3.5 가솔린·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "3.5 가솔린 시그니처",
            "price": "47,890,000원",
            "options": [
              "K8·3.5 가솔린·시그니처·프리뷰 전자제어 서스펜션I",
              "K8·3.5 가솔린·시그니처·프리뷰 전자제어 서스펜션II",
              "K8·3.5 가솔린·시그니처·메리디안 프리미엄 사운드",
              "K8·3.5 가솔린·시그니처·AWD",
              "K8·3.5 가솔린·시그니처·프리미엄",
              "K8·3.5 가솔린·시그니처·파노라마 선루프"
            ]
          },
          "시그니처블랙": {
            "displayTrim": "3.5 가솔린 시그니처블랙",
            "price": "49,470,000원",
            "options": [
              "K8·3.5 가솔린·시그니처블랙·메리디안 프리미엄 사운드",
              "K8·3.5 가솔린·시그니처블랙·AWD",
              "K8·3.5 가솔린·시그니처블랙·프리미엄",
              "K8·3.5 가솔린·시그니처블랙·파노라마 선루프"
            ]
          }
        }
      },
      "3.5 LPG": {
        "displayFuel": "3.5 LPG",
        "trims": {
          "프레스티지": {
            "displayTrim": "3.5 LPG 프레스티지",
            "price": "37,770,000원",
            "options": [
              "K8·3.5 LPG·프레스티지·파노라마 선루프",
              "K8·3.5 LPG·프레스티지·전자식룸미러+하이패스+18인치휠",
              "K8·3.5 LPG·프레스티지·컴포트",
              "K8·3.5 LPG·프레스티지·드라이브 와이즈"
            ]
          },
          "노블레스": {
            "displayTrim": "3.5 LPG 노블레스",
            "price": "41,610,000원",
            "options": [
              "K8·3.5 LPG·노블레스·파노라마 선루프",
              "K8·3.5 LPG·노블레스·메리디안 프리미엄 사운드",
              "K8·3.5 LPG·노블레스·드라이브 와이즈",
              "K8·3.5 LPG·노블레스·컨비니언스",
              "K8·3.5 LPG·노블레스·스타일",
              "K8·3.5 LPG·노블레스·헤드업디스플레이+스마트커넥트"
            ]
          }
        }
      },
      "3.5 LPG 렌터카": {
        "displayFuel": "3.5 LPG 렌터카",
        "trims": {
          "프레스티지": {
            "displayTrim": "3.5 LPG 렌터카 프레스티지",
            "price": "35,910,000원",
            "options": [
              "K8·3.5 LPG 렌터카·프레스티지·파노라마 선루프",
              "K8·3.5 LPG 렌터카·프레스티지·컴포트+전자식룸미러+하이패스",
              "K8·3.5 LPG 렌터카·프레스티지·드라이브 와이즈"
            ]
          },
          "노블레스": {
            "displayTrim": "3.5 LPG 렌터카 노블레스",
            "price": "39,550,000원",
            "options": [
              "K8·3.5 LPG 렌터카·노블레스·파노라마 선루프",
              "K8·3.5 LPG 렌터카·노블레스·메리디안 프리미엄 사운드",
              "K8·3.5 LPG 렌터카·노블레스·드라이브 와이즈",
              "K8·3.5 LPG 렌터카·노블레스·컨비니언스",
              "K8·3.5 LPG 렌터카·노블레스·스타일",
              "K8·3.5 LPG 렌터카·노블레스·헤드업디스플레이+스마트커넥트"
            ]
          }
        }
      }
    }
  },
  "K5": {
    "colors": {
      "스노우 화이트 펄": "images/cars/k5 스노우 화이트 펄.png",
      "오로라 블랙펄": "images/cars/k5 오로라 블랙펄.png",
      "울프그레이": "images/cars/k5 울프그레이.png",
      "인터스텔라 그레이": "images/cars/k5 인터스텔라 그레이.png"
    },
    "fuels": {
      "하이브리드": {
        "displayFuel": "하이브리드",
        "trims": {
          "프레스티지": {
            "displayTrim": "하이브리드 프레스티지",
            "price": "34,340,000원",
            "options": [
              "K5·하이브리드·프레스티지·스타일",
              "K5·하이브리드·프레스티지·컴포트",
              "K5·하이브리드·프레스티지·드라이브 와이즈",
              "K5·하이브리드·프레스티지·12.3인치 클러스터 팩",
              "K5·하이브리드·프레스티지·HUD+빌트인캠2",
              "K5·하이브리드·프레스티지·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "하이브리드 베스트셀렉션",
            "price": "35,430,000원",
            "options": [
              "K5·하이브리드·베스트셀렉션·스타일",
              "K5·하이브리드·베스트셀렉션·빌트인캠2",
              "K5·하이브리드·베스트셀렉션·모니터링",
              "K5·하이브리드·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "하이브리드 노블레스",
            "price": "37,700,000원",
            "options": [
              "K5·하이브리드·노블레스·스타일",
              "K5·하이브리드·노블레스·컴포트",
              "K5·하이브리드·노블레스·드라이브 와이즈",
              "K5·하이브리드·노블레스·HUD+빌트인캠2",
              "K5·하이브리드·노블레스·KRELL 프리미엄 사운드",
              "K5·하이브리드·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "하이브리드 시그니처",
            "price": "40,640,000원",
            "options": [
              "K5·하이브리드·시그니처·스타일",
              "K5·하이브리드·시그니처·컴포트",
              "K5·하이브리드·시그니처·HUD+빌트인캠2",
              "K5·하이브리드·시그니처·KRELL 프리미엄 사운드",
              "K5·하이브리드·시그니처·블랙 핏",
              "K5·하이브리드·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "2.0 가솔린": {
        "displayFuel": "2.0 가솔린",
        "trims": {
          "스마트셀렉션": {
            "displayTrim": "2.0 가솔린 스마트셀렉션",
            "price": "27,630,000원",
            "options": [
              "K5·2.0 가솔린·스마트셀렉션·12.3인치 클러스터 팩",
              "K5·2.0 가솔린·스마트셀렉션·드라이브 와이즈",
              "K5·2.0 가솔린·스마트셀렉션·파노라마 선루프"
            ]
          },
          "프레스티지": {
            "displayTrim": "2.0 가솔린 프레스티지",
            "price": "28,920,000원",
            "options": [
              "K5·2.0 가솔린·프레스티지·스타일",
              "K5·2.0 가솔린·프레스티지·컴포트",
              "K5·2.0 가솔린·프레스티지·드라이브 와이즈",
              "K5·2.0 가솔린·프레스티지·12.3인치 클러스터 팩",
              "K5·2.0 가솔린·프레스티지·HUD+빌트인캠2",
              "K5·2.0 가솔린·프레스티지·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "2.0 가솔린 베스트셀렉션",
            "price": "30,140,000원",
            "options": [
              "K5·2.0 가솔린·베스트셀렉션·스타일",
              "K5·2.0 가솔린·베스트셀렉션·빌트인캠2",
              "K5·2.0 가솔린·베스트셀렉션·모니터링",
              "K5·2.0 가솔린·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.0 가솔린 노블레스",
            "price": "32,440,000원",
            "options": [
              "K5·2.0 가솔린·노블레스·스타일",
              "K5·2.0 가솔린·노블레스·컴포트",
              "K5·2.0 가솔린·노블레스·드라이브 와이즈",
              "K5·2.0 가솔린·노블레스·HUD+빌트인캠2",
              "K5·2.0 가솔린·노블레스·KRELL 프리미엄 사운드",
              "K5·2.0 가솔린·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.0 가솔린 시그니처",
            "price": "35,580,000원",
            "options": [
              "K5·2.0 가솔린·시그니처·컴포트",
              "K5·2.0 가솔린·시그니처·HUD+빌트인캠2",
              "K5·2.0 가솔린·시그니처·KRELL 프리미엄 사운드",
              "K5·2.0 가솔린·시그니처·블랙 핏",
              "K5·2.0 가솔린·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "1.6 가솔린 터보": {
        "displayFuel": "1.6 가솔린 터보",
        "trims": {
          "프레스티지": {
            "displayTrim": "1.6 가솔린 터보 프레스티지",
            "price": "29,730,000원",
            "options": [
              "K5·1.6 가솔린 터보·프레스티지·스타일",
              "K5·1.6 가솔린 터보·프레스티지·컴포트",
              "K5·1.6 가솔린 터보·프레스티지·드라이브 와이즈",
              "K5·1.6 가솔린 터보·프레스티지·12.3인치 클러스터 팩",
              "K5·1.6 가솔린 터보·프레스티지·HUD+빌트인캠2",
              "K5·1.6 가솔린 터보·프레스티지·파노라마 선루프"
            ]
          },
          "베스트셀렉션": {
            "displayTrim": "1.6 가솔린 터보 베스트셀렉션",
            "price": "30,950,000원",
            "options": [
              "K5·1.6 가솔린 터보·베스트셀렉션·스타일",
              "K5·1.6 가솔린 터보·베스트셀렉션·빌트인캠2",
              "K5·1.6 가솔린 터보·베스트셀렉션·모니터링",
              "K5·1.6 가솔린 터보·베스트셀렉션·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "1.6 가솔린 터보 노블레스",
            "price": "33,680,000원",
            "options": [
              "K5·1.6 가솔린 터보·노블레스·스타일",
              "K5·1.6 가솔린 터보·노블레스·컴포트",
              "K5·1.6 가솔린 터보·노블레스·드라이브 와이즈",
              "K5·1.6 가솔린 터보·노블레스·HUD+빌트인캠2",
              "K5·1.6 가솔린 터보·노블레스·KRELL 프리미엄 사운드",
              "K5·1.6 가솔린 터보·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "1.6 가솔린 터보 시그니처",
            "price": "36,370,000원",
            "options": [
              "K5·1.6 가솔린 터보·시그니처·스타일",
              "K5·1.6 가솔린 터보·시그니처·컴포트",
              "K5·1.6 가솔린 터보·시그니처·HUD+빌트인캠2",
              "K5·1.6 가솔린 터보·시그니처·KRELL 프리미엄 사운드",
              "K5·1.6 가솔린 터보·시그니처·블랙 핏",
              "K5·1.6 가솔린 터보·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "2.0 LPG": {
        "displayFuel": "2.0 LPG",
        "trims": {
          "프레스티지": {
            "displayTrim": "2.0 LPG 프레스티지",
            "price": "29,610,000원",
            "options": [
              "K5·2.0 LPG·프레스티지·드라이브 와이즈",
              "K5·2.0 LPG·프레스티지·12.3인치 클러스터 팩",
              "K5·2.0 LPG·프레스티지·파노라마 선루프"
            ]
          },
          "노블레스": {
            "displayTrim": "2.0 LPG 노블레스",
            "price": "33,230,000원",
            "options": [
              "K5·2.0 LPG·노블레스·컴포트",
              "K5·2.0 LPG·노블레스·드라이브 와이즈",
              "K5·2.0 LPG·노블레스·HUD+빌트인캠2",
              "K5·2.0 LPG·노블레스·KRELL 프리미엄 사운드",
              "K5·2.0 LPG·노블레스·파노라마 선루프"
            ]
          },
          "시그니처": {
            "displayTrim": "2.0 LPG 시그니처",
            "price": "35,480,000원",
            "options": [
              "K5·2.0 LPG·시그니처·컴포트",
              "K5·2.0 LPG·시그니처·HUD+빌트인캠2",
              "K5·2.0 LPG·시그니처·KRELL 프리미엄 사운드",
              "K5·2.0 LPG·시그니처·파노라마 선루프"
            ]
          }
        }
      },
      "2.0 LPG 렌터카": {
        "displayFuel": "2.0 LPG 렌터카",
        "trims": {
          "트렌디": {
            "displayTrim": "2.0 LPG 렌터카 트렌디",
            "price": "25,170,000원",
            "options": [
              "K5·2.0 LPG 렌터카·트렌디·컴포트",
              "K5·2.0 LPG 렌터카·트렌디·애프터마켓용 컬렉션",
              "K5·2.0 LPG 렌터카·트렌디·하이패스 시스템",
              "K5·2.0 LPG 렌터카·트렌디·SBW 팩",
              "K5·2.0 LPG 렌터카·트렌디·드라이브 와이즈",
              "K5·2.0 LPG 렌터카·트렌디·파노라마 선루프"
            ]
          },
          "프레스티지": {
            "displayTrim": "2.0 LPG 렌터카 프레스티지",
            "price": "27,840,000원",
            "options": [
              "K5·2.0 LPG 렌터카·프레스티지·애프터마켓용 컬렉션",
              "K5·2.0 LPG 렌터카·프레스티지·SBW 팩",
              "K5·2.0 LPG 렌터카·프레스티지·드라이브 와이즈",
              "K5·2.0 LPG 렌터카·프레스티지·12.3인치 클러스터 팩",
              "K5·2.0 LPG 렌터카·프레스티지·스마트 커넥트",
              "K5·2.0 LPG 렌터카·프레스티지·파노라마 선루프"
            ]
          }
        }
      }
    }
  },
  "레이": {
    "colors": {
      "밀키베이지": "images/cars/레이 밀키베이지.png",
      "스모크 블루": "images/cars/레이 스모크 블루.png",
      "아스트로 그레이": "images/cars/레이 아스트로 그레이.png",
      "아쿠아 민트": "images/cars/레이 아쿠아 민트.png",
      "오로라 블랙 펄": "images/cars/레이 오로라 블랙 펄.png",
      "클리어 화이트": "images/cars/레이 클리어 화이트.png"
    },
    "fuels": {
      "1.0 가솔린": {
        "displayFuel": "1.0 가솔린",
        "trims": {
          "트렌디": {
            "displayTrim": "1.0 가솔린 트렌디",
            "price": "15,550,000원",
            "options": [
              "레이·1.0 가솔린·트렌디·스타일",
              "레이·1.0 가솔린·트렌디·15인치 전면가공 휠",
              "레이·1.0 가솔린·트렌디·컴포트I",
              "레이·1.0 가솔린·트렌디·드라이브 와이즈",
              "레이·1.0 가솔린·트렌디·8인치 디스플레이 오디오",
              "레이·1.0 가솔린·트렌디·8인치 내비게이션"
            ]
          },
          "프레스티지": {
            "displayTrim": "1.0 가솔린 프레스티지",
            "price": "18,150,000원",
            "options": [
              "레이·1.0 가솔린·프레스티지·스타일",
              "레이·1.0 가솔린·프레스티지·15인치 전면가공 휠",
              "레이·1.0 가솔린·프레스티지·컴포트II",
              "레이·1.0 가솔린·프레스티지·드라이브 와이즈",
              "레이·1.0 가솔린·프레스티지·8인치 내비게이션"
            ]
          },
          "시그니처": {
            "displayTrim": "1.0 가솔린 시그니처",
            "price": "19,550,000원",
            "options": [
              "레이·1.0 가솔린·시그니처·스타일",
              "레이·1.0 가솔린·시그니처·드라이브 와이즈",
              "레이·1.0 가솔린·시그니처·8인치 내비게이션"
            ]
          }
        }
      }
    }
  },
  "모닝": {
    "colors": {
      "밀키베이지": "images/cars/모닝 밀키베이지.png",
      "스파클링 실버": "images/cars/모닝 스파클링 실버.png",
      "시그널 레드": "images/cars/모닝 시그널 레드.png",
      "아스트로 그레이": "images/cars/모닝 아스트로 그레이.png",
      "어드벤쳐러스 그린": "images/cars/모닝 어드벤쳐러스 그린.png",
      "오로라 블랙 펄": "images/cars/모닝 오로라 블랙 펄.png",
      "클리어 화이트": "images/cars/모닝 클리어 화이트.png"
    },
    "fuels": {
      "1.0 가솔린": {
        "displayFuel": "1.0 가솔린",
        "trims": {
          "트렌디": {
            "displayTrim": "1.0 가솔린 트렌디",
            "price": "14,210,000원",
            "options": [
              "모닝·1.0 가솔린·트렌디·버튼시동 PACK",
              "모닝·1.0 가솔린·트렌디·스타일",
              "모닝·1.0 가솔린·트렌디·16인치 전면가공 휠",
              "모닝·1.0 가솔린·트렌디·컴포트",
              "모닝·1.0 가솔린·트렌디·컨비니언스",
              "모닝·1.0 가솔린·트렌디·8인치 내비게이션",
              "모닝·1.0 가솔린·트렌디·10.25인치 클러스터"
            ]
          },
          "프레스티지": {
            "displayTrim": "1.0 가솔린 프레스티지",
            "price": "16,010,000원",
            "options": [
              "모닝·1.0 가솔린·프레스티지·스타일",
              "모닝·1.0 가솔린·프레스티지·16인치 전면가공 휠",
              "모닝·1.0 가솔린·프레스티지·컨비니언스",
              "모닝·1.0 가솔린·프레스티지·드라이브 와이즈",
              "모닝·1.0 가솔린·프레스티지·8인치 내비게이션",
              "모닝·1.0 가솔린·프레스티지·10.25인치 클러스터"
            ]
          },
          "시그니처": {
            "displayTrim": "1.0 가솔린 시그니처",
            "price": "18,160,000원",
            "options": [
              "모닝·1.0 가솔린·시그니처·스타일",
              "모닝·1.0 가솔린·시그니처·8인치 내비게이션",
              "모닝·1.0 가솔린·시그니처·선루프"
            ]
          }
        }
      }
    }
  },
  "EV4": {
    "colors": {
      "마그마 레드": "images/cars/ev4 마그마 레드.png",
      "모닝 헤이즈": "images/cars/ev4 모닝 헤이즈.png",
      "셰일 그레이": "images/cars/ev4 셰일 그레이.png",
      "스노우 화이트 펄": "images/cars/ev4 스노우 화이트 펄.png",
      "아이보리 매트 실버": "images/cars/ev4 아이보리 매트 실버.png",
      "아이보리 실버": "images/cars/ev4 아이보리 실버.png",
      "오로라 블랙 펄": "images/cars/ev4 오로라 블랙 펄.png"
    },
    "fuels": {
      "전기": {
        "displayFuel": "전기",
        "trims": {
          "에어 스탠다드": {
            "displayTrim": "전기 에어 스탠다드",
            "price": "42,520,000원",
            "options": [
              "EV4·전기·에어 스탠다드·스타일",
              "EV4·전기·에어 스탠다드·컴포트",
              "EV4·전기·에어 스탠다드·컨비니언스",
              "EV4·전기·에어 스탠다드·19인치 휠&타이어",
              "EV4·전기·에어 스탠다드·모니터링",
              "EV4·전기·에어 스탠다드·드라이브 와이즈",
              "EV4·전기·에어 스탠다드·유틸리티",
              "EV4·전기·에어 스탠다드·와이드 선루프",
              "EV4·전기·에어 스탠다드·빌트인캠2플러스",
              "EV4·전기·에어 스탠다드·헤드업 디스플레이"
            ]
          },
          "에어 롱레인지": {
            "displayTrim": "전기 에어 롱레인지",
            "price": "46,940,000원",
            "options": [
              "EV4·전기·에어 롱레인지·스타일",
              "EV4·전기·에어 롱레인지·컴포트",
              "EV4·전기·에어 롱레인지·컨비니언스",
              "EV4·전기·에어 롱레인지·19인치 휠&타이어",
              "EV4·전기·에어 롱레인지·모니터링",
              "EV4·전기·에어 롱레인지·드라이브 와이즈",
              "EV4·전기·에어 롱레인지·유틸리티",
              "EV4·전기·에어 롱레인지·와이드 선루프",
              "EV4·전기·에어 롱레인지·빌트인캠2플러스",
              "EV4·전기·에어 롱레인지·헤드업 디스플레이",
              "EV4·전기·에어 롱레인지·듀얼 모터 4WD",
              "EV4·전기·에어 롱레인지·애프터마켓용 컬렉션"
            ]
          },
          "어스 스탠다드": {
            "displayTrim": "전기 어스 스탠다드",
            "price": "47,350,000원",
            "options": [
              "EV4·전기·어스 스탠다드·19인치 휠&타이어",
              "EV4·전기·어스 스탠다드·모니터링",
              "EV4·전기·어스 스탠다드·드라이브 와이즈",
              "EV4·전기·어스 스탠다드·유틸리티",
              "EV4·전기·어스 스탠다드·와이드 선루프",
              "EV4·전기·어스 스탠다드·하만카돈 프리미엄 사운드",
              "EV4·전기·어스 스탠다드·빌트인캠2플러스",
              "EV4·전기·어스 스탠다드·헤드업 디스플레이"
            ]
          },
          "어스 롱레인지": {
            "displayTrim": "전기 어스 롱레인지",
            "price": "51,770,000원",
            "options": [
              "EV4·전기·어스 롱레인지·19인치 휠&타이어",
              "EV4·전기·어스 롱레인지·모니터링",
              "EV4·전기·어스 롱레인지·드라이브 와이즈",
              "EV4·전기·어스 롱레인지·유틸리티",
              "EV4·전기·어스 롱레인지·와이드 선루프",
              "EV4·전기·어스 롱레인지·하만카돈 프리미엄 사운드",
              "EV4·전기·어스 롱레인지·빌트인캠2플러스",
              "EV4·전기·어스 롱레인지·헤드업 디스플레이",
              "EV4·전기·어스 롱레인지·듀얼 모터 4WD",
              "EV4·전기·어스 롱레인지·애프터마켓용 컬렉션"
            ]
          }
        }
      }
    }
  },
  "EV3": {
    "colors": {
      "셰일 그레이": "images/cars/ev3 셰일 그레이.png",
      "스노우 화이트 펄": "images/cars/ev3 스노우 화이트 펄.png",
      "아이보리 매트 실버": "images/cars/ev3 아이보리 매트 실버.png",
      "아이보리 실버": "images/cars/ev3 아이보리 실버.png",
      "어벤쳐린 그린": "images/cars/ev3 어벤쳐린 그린.png",
      "오로라 블랙 펄": "images/cars/ev3 오로라 블랙 펄.png",
      "프로스트 블루": "images/cars/ev3 프로스트 블루.png"
    },
    "fuels": {
      "전기": {
        "displayFuel": "전기",
        "trims": {
          "에어 스탠다드": {
            "displayTrim": "전기 에어 스탠다드",
            "price": "42,030,000원",
            "options": [
              "EV3·전기·에어 스탠다드·스타일",
              "EV3·전기·에어 스탠다드·컴포트I",
              "EV3·전기·에어 스탠다드·컴포트II",
              "EV3·전기·에어 스탠다드·컨비니언스",
              "EV3·전기·에어 스탠다드·19인치 휠&타이어",
              "EV3·전기·에어 스탠다드·모니터링",
              "EV3·전기·에어 스탠다드·드라이브 와이즈",
              "EV3·전기·에어 스탠다드·와이드 선루프",
              "EV3·전기·에어 스탠다드·빌트인캠2플러스",
              "EV3·전기·에어 스탠다드·헤드업 디스플레이"
            ]
          },
          "에어 롱레인지": {
            "displayTrim": "전기 에어 롱레인지",
            "price": "46,450,000원",
            "options": [
              "EV3·전기·에어 롱레인지·스타일",
              "EV3·전기·에어 롱레인지·컴포트I",
              "EV3·전기·에어 롱레인지·컴포트II",
              "EV3·전기·에어 롱레인지·컨비니언스",
              "EV3·전기·에어 롱레인지·19인치 휠&타이어",
              "EV3·전기·에어 롱레인지·모니터링",
              "EV3·전기·에어 롱레인지·드라이브 와이즈",
              "EV3·전기·에어 롱레인지·와이드 선루프",
              "EV3·전기·에어 롱레인지·빌트인캠2플러스",
              "EV3·전기·에어 롱레인지·헤드업 디스플레이",
              "EV3·전기·에어 롱레인지·애프터마켓용 컬렉션",
              "EV3·전기·에어 롱레인지·듀얼 모터 4WD"
            ]
          },
          "어스 스탠다드": {
            "displayTrim": "전기 어스 스탠다드",
            "price": "46,180,000원",
            "options": [
              "EV3·전기·어스 스탠다드·19인치 휠&타이어",
              "EV3·전기·어스 스탠다드·모니터링",
              "EV3·전기·어스 스탠다드·드라이브 와이즈",
              "EV3·전기·어스 스탠다드·와이드 선루프",
              "EV3·전기·어스 스탠다드·하만카돈 프리미엄 사운드",
              "EV3·전기·어스 스탠다드·빌트인캠2플러스",
              "EV3·전기·어스 스탠다드·헤드업 디스플레이"
            ]
          },
          "어스 롱레인지": {
            "displayTrim": "전기 어스 롱레인지",
            "price": "50,600,000원",
            "options": [
              "EV3·전기·어스 롱레인지·19인치 휠&타이어",
              "EV3·전기·어스 롱레인지·모니터링",
              "EV3·전기·어스 롱레인지·드라이브 와이즈",
              "EV3·전기·어스 롱레인지·와이드 선루프",
              "EV3·전기·어스 롱레인지·하만카돈 프리미엄 사운드",
              "EV3·전기·어스 롱레인지·빌트인캠2플러스",
              "EV3·전기·어스 롱레인지·헤드업 디스플레이",
              "EV3·전기·어스 롱레인지·애프터마켓용 컬렉션",
              "EV3·전기·어스 롱레인지·듀얼 모터 4WD"
            ]
          }
        }
      }
    }
  }
});