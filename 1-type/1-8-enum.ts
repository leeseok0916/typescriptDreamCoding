{
  /**
   * Enum
   */
  // Javascript 에서 상수 정의 예시
  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // 여러 가지 상수 값들을 한 곳에 모아서 타입이 보장되고 타입이 변하지 않고 
  // 안전하게 사용할 수 있다
  enum Days {
    // Monday = 1,  // 값을 0부터 시작이 아니라 지정 수부터 시작 가능하게 설정 가능
    // Monday = 'Monday', // 문자열로도 설정 가능
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(Days.Saturday);
  let day = Days.Monday;
  // const day: Days = Days.Monday;
  console.log(day);

  // 쓰지마라
  // day 변수에 다른 값을 할당할 수 있다.
  day = 10;
  console.log(day);

  // enum을 사용하지 않고 union 타입을 사용 권장
}