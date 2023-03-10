{
  // javscript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript
  function typescriptAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // javscript π©
  // ν¨μ λ§¨ λ°μΌλ‘ κ°μ μ΄λ€ νμμ λ¦¬ν΄νλμ§ νμΈν΄μΌ ν¨
  function jsFetchNum(id) {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // typescript β¨
  function fetchNum(id: number): Promise<number> {
    // code..
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  // μ λ¬ν΄λ λκ³  μ λ¬νμ§ μμλ λλ μ΅μ νλΌλ―Έν°λ₯Ό λͺμνλ λ°©λ²
  // λ¬Όμνλ₯Ό μ¬μ©νλ€
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