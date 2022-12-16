{
  // Array 타입을 명시하는 방법
  const fruits: string[] = ['🍎', '🍉', '🍊']
  const score: Array<number> = [1,2,3,4];

  // Tuple -> interface, type alias, class 로 대체
  // 배열인데 서로 다른 타입을 가질 수 있다
  let student: [string, number];
  student = ['name', 123];
  student[0];
  student[1];
}