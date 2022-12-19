{
  /**
   * Type Assertions
   */
  // 함수 리턴값의 타입을 10000000%% 확신할 때 사용할 수 있음
  function jsStrFunc(): any {
    // return 'heeloooo';
    return 2;
  }

  const result = jsStrFunc();
  console.log((result as string).length);
}