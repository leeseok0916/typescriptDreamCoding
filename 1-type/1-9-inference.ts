{
  /**
   * Type Inference
   */
  // 값을 할당함과 동시에 타입이 추론됨
  let text = 'hello';
  text = 1;

  // message 파라미터의 타입을 명시하지 않았지만 기본 값을 문자열로 했기때문에 자동으로 string 타입으로 됨
  function print(message = 'hello') {
    console.log(message);
  }

  print('hello');
  print(1);
}