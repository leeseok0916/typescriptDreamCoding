{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean() :void;
  }

  class CoffeMachine implements CoffeMaker, CommercialCoffeeMaker
  {
    private static readonly BEANS_GRAM_PER_SHOT: number = 10
    private coffeeBeans: number = 0;

    constructor(coffeeBeansAmount: number) {
      this.coffeeBeans = coffeeBeansAmount;
    }

    static makeMachine(coffeeBeansAmount: number): CoffeMachine {
      return new CoffeMachine(coffeeBeansAmount);
    }

    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('0보다 작게 담을 수 없어')
      }

      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }

    clean(): void { }
  }

//   const coffeeMachine = new CoffeMachine(100);
//   const coffee = coffeeMachine.makeCoffee(2);
//   console.log(coffee);
  const simpleMachine = CoffeMachine.makeMachine(100);
  simpleMachine.makeCoffee(2);
  const redMachine = CoffeMachine.makeMachine(100);
  const blueMachine = CoffeMachine.makeMachine(100);
  const whiteMachine = CoffeMachine.makeMachine(100);

  // // 클래스 인스턴스를 인터페이스로 변환함
  // // 
  // const maker2: CommercialCoffeeMaker = CoffeMachine.makeMachine(99);
  // maker2.fillCoffeeBeans(10);
  // maker2.makeCoffee(2);
  // maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(60);
      this.machine.clean();
    }
  }

  // CoffeMachine 클래스는 CoffeMaker, CommercialCoffeeMaker 인터페이스를 상속 받아서 구현했고
  // AmateurUser 클래스의 생성자에 CoffeMaker 인스턴스를 넘기고
  // ProBarista 클래스의 생성자에 CommercialCoffeeMaker 인스턴스를 넘기고
  // 각 2개의 클래스에 동일한 인스턴스를 넘겼지만 각 클래스의 생성자에 선언된 것은 인터페이스이기 때문에
  // 각 인터페이스에 선언된 메서드만 호출할 수 있다
  const maker: CoffeMachine = CoffeMachine.makeMachine(99);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}