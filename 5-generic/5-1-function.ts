{
  /**
   * 함수 제네릭
   */
  // function checkNotnull(arg: number | null) : number {
  //   if (arg === null) {
  //     throw new Error('not valid number');
  //   }

  //   return arg;
  // }

  // const result = checkNotnull(1234);
  // console.log(result);
  // checkNotnull(null);

  // function checkNotnullAny(arg: any | null) : any {
  //   if (arg === null) {
  //     throw new Error('not valid number');
  //   }

  //   return arg;
  // }

  // const result = checkNotnullAny(1234); // result 의 타입이 any가 된다
  // console.log(result);
  // checkNotnullAny(null);

  // 제네릭을 이용하면 어떤 타입이든지 받을 수 있고 함수가 호출될 때 타입이 결정된다
  function checkNotnull<G>(arg: G): G {
    if (arg === null) {
      throw new Error('not valid number');
    }

    return arg;
  }
  const result1 = checkNotnull(1234);
  console.log(result1);

  const result2 = checkNotnull('가나다가라');
  console.log(result2);

  const result3: boolean = checkNotnull(true);
  console.log(result3);

  checkNotnull(null);
}