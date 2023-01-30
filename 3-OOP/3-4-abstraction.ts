{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public
  // private
  // protected
  class CoffeMachine 
  {
    private static readonly BEANS_GRAM_PER_SHOT: number = 10
    private coffeeBeans: number = 0;

    constructor(coffeeBeansAmount: number) {
      this.coffeeBeans = coffeeBeansAmount;
    }

    static makeMachine(coffeeBeansAmount: number): CoffeMachine {
      return new CoffeMachine(coffeeBeansAmount);
    }

    fillCoffeBeans(beans: number): void {
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
  }

//   const coffeeMachine = new CoffeMachine(100);
//   const coffee = coffeeMachine.makeCoffee(2);
//   console.log(coffee);
  const simpleMachine = CoffeMachine.makeMachine(100);
  simpleMachine.makeCoffee(2);
  const redMachine = CoffeMachine.makeMachine(100);
  const blueMachine = CoffeMachine.makeMachine(100);
  const whiteMachine = CoffeMachine.makeMachine(100);
}