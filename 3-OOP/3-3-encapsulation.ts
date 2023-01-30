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

  class User {
    // fullName: string;
    // constructor(public firstName: string, public lastName: string) {
    //   this.fullName = firstName + ' ' + lastName;
    // }

    private internalAge:number = 4;

    get age(): number {
      if (!this.internalAge) 
        return 0;
      return this.internalAge;
    }

    set age(num:number) {
      if (num < 0) {
        throw new Error('Not enough age!');
      }

      this.internalAge = num;
    }

    // 이렇게 하는 것이 좋다
    get fullName(): string {
      return this.fullName;
    }
    
    constructor(private firstName: string, private lastName: string) { }
  }

  const user = new User('lee', 'twostones');
  console.log(user.fullName);
  console.log(user.age);
}