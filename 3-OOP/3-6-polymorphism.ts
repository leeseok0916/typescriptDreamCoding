{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  class CoffeMachine implements CoffeMaker  {
    protected static readonly BEANS_GRAM_PER_SHOT: number = 10
    protected coffeeBeans: number = 0;

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

  class CaffeLatteCoffeMachine extends CoffeMachine {
    // 자식 클래스에서 생성자를 만들 때는 반드시!!! 부모 클래스의 생성자를 호출해야한다
    constructor(coffeeBeansAmount: number, serialNumber: string) {
      super(coffeeBeansAmount);
    }
    private steamMilk() :void {
      console.log('Steaming some milk... 🥛')
    }
    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모의 함수를 이용하고 싶다면
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeMachine {
    constructor(coffeeBeansAmount: number) {
      super(coffeeBeansAmount);
    }

    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모의 함수를 이용하고 싶다면
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  // const machine = new CoffeMachine(22);
  // const latteMachine = new CaffeLatteCoffeMachine(22, '12312');
  // const coffee = latteMachine.makeCoffee(1);
  // console.log(coffee);

  const machines: CoffeMaker[] = [
    new CoffeMachine(22),
    new CaffeLatteCoffeMachine(22, '1'),
    new SweetCoffeeMaker(10),
    new CoffeMachine(22),
    new CaffeLatteCoffeMachine(22, '2'),
    new SweetCoffeeMaker(10),
  ]

  machines.forEach((machine) => {
    console.log('--------------------');
    machine.makeCoffee(1); 
  });

  // 다형성이란 하나의 인터페이스나 부모의 클래스를 상속받은 자식 클래스들이
  // 인터페이스나 부모 클래스의 함수들을 다른 방식으로 다양하게 구성하는 것
  // 인터페이스나 부모 클래스의 동일한 함수api 를 통해서 
  // 자식 클래스에 구현된 각각의 내부 구현 사항을 신경쓰지 않고
  // 약손된 함수 api 를 호출함으로써 사용하는 사람도 간편하게 다양한 기능을 사용할 수 있게 하는 것이 목표
}