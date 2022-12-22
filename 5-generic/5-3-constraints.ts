// 제네릭 조건 주기
// interface Employee {
//   pay(): void;
// }

// class FullTimeEmployee implements Employee {
//   pay(): void {
//     console.log('full time');
//   }

//   workFullTime(): void {}
// }

// class PartTimeEmployee implements Employee {
//   pay(): void {
//     console.log('part time');
//   }

//   workPartTime(): void {}
// }

// function pay(employee: Employee) : Employee {
//   employee.pay();
//   return employee;
// }

// const twostones = new FullTimeEmployee();
// const bob = new PartTimeEmployee();
// // 일하고
// twostones.workFullTime(); 
// bob.workPartTime(); 

// // 돈 받고
// const twostonesAfterPay = pay(twostones);
// const bobAfterPay = pay(bob);

// // 다시 일하려고 하는데 일을 할 수가 없음
// twostonesAfterPay.workFullTime();
// bobAfterPay.workPartTime();

// 제네릭인데 특정 클래스, 인터페이스를 확장한 것만 받을 수 있게 조건을 주는 것
// function pay<T extends Employee>(employee: T) : T {
//   employee.pay();
//   return employee;
// }

// // 표현식으로 사용할 때
// const pay2 = <T extends Employee>(employee: T): T => {
//   employee.pay();
//   return employee;
// }

// const twostones = new FullTimeEmployee();
// const bob = new PartTimeEmployee();
// // 일하고
// twostones.workFullTime(); 
// bob.workPartTime(); 

// // 돈 받고
// const twostonesAfterPay = pay(twostones);
// const bobAfterPay = pay(bob);

// // 다시 일하고
// twostonesAfterPay.workFullTime();
// bobAfterPay.workPartTime();

// // 돈 받고
// const twostonesAfterPay2 = pay(twostones);
// const bobAfterPay2 = pay(bob);


const obj1 = {
  name: 'twostones',
  age: 25,
}
const obj2 = {
  animal: 'tiger'
}

// K extends keyof T>: T 제네릭(object)의 key들 중 하나를 사용한다라는 뜻
// O[K] : T 제네릭(object)의 key에 해당하는 값을 리턴 === obj1['name']
function getValue<T, K extends keyof T>(obj: T, key: K) : T[K] {
  return obj[key];
}

console.log(getValue(obj1, 'name'));
console.log(getValue(obj2, 'animal'));


function AAAA1(para: string | number | boolean):  string | number | boolean {
  return para;
}

function AAAA2<T>(para:  T):  T {
  return para;
}