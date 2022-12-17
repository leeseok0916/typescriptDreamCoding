{
  /**
   * Intersection Types: &
   * 타입 2개 이상을 가지는 타입
   */
  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    empolyeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker): void {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  }

  // 2개 타입의 속성들을 모두 넣어줘야 한다
  internWork({
    name: 'twostones',
    score: 1,
    empolyeeId: 1,
    work: () => {}
  })
}