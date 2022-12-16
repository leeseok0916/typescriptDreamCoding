{
  // javscript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript
  function typescriptAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // javscript 💩
  // 함수 맨 밑으로 가서 어떤 타입을 리턴하는지 확인해야 함
  function jsFetchNum(id) {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // typescript ✨
  function fetchNum(id: number): Promise<number> {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  // 전달해도 되고 전달하지 않아도 되는 옵션 파라미터를 명시하는 방법
  // 물음표를 사용한다
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  printName('twostones', 'lee');
  printName('twostones');
  printName('twostones', undefined);


  // Default parameter
  function printMessage(message: string = 'hello'): void {
    console.log(message);
  }

  printMessage();


  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    if (numbers.length === 0) {
      return 0;
    }

    return numbers.reduce((prev: number, curr: number) => {
      return prev + curr;
    });
  }

  console.log(addNumbers());
  console.log(addNumbers(1));
  console.log(addNumbers(1,2));
  console.log(addNumbers(1,2,3,4));
  console.log(addNumbers(1,2,3,4,5,6,));
  
}