{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  class CoffeMachine implements CoffeMaker
  {
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

  const machine = new CoffeMachine(22);
  const latteMachine = new CaffeLatteCoffeMachine(22, '12312');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}