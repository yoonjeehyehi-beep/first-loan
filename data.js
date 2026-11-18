// 처음 열 때 불러오는 명단과 간식입니다.
// 아래는 모두 가짜 예시예요. 실제 학생 이름은 GitHub에 올리지 말고,
// 행사 당일 관리자 모드의 "엑셀 명단 붙여넣기"로 넣는 걸 권해요.
window.CHECKIN_DATA = {
  // 올해 아직 책을 빌리지 않은 학생 (grade=학년, cls=반, no=번호)
  students: [
    { grade: 1, cls: 1, no: 1, name: "홍길동" },
    { grade: 1, cls: 2, no: 5, name: "김철수" },
    { grade: 2, cls: 3, no: 12, name: "이영희" },
    { grade: 3, cls: 1, no: 8, name: "박민지" }
  ],

  // 간식 (qty=개수, pct=고정 확률 %. pct를 빼면 남은 개수에 비례해서 뽑혀요)
  snacks: [
    { name: "인기 과자", qty: 20, pct: 10 },
    { name: "젤리", qty: 30 },
    { name: "초콜릿", qty: 25 },
    { name: "감자칩", qty: 15 },
    { name: "사탕", qty: 40 }
  ]
};
