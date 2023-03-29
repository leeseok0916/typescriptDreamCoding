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
      this.grindBeans(shots);
      this.preheat();
      return this.exract(shots);
    }

    private grindBeans(shots: number) {
      console.log(`grinding bean for ${shots}`);
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up....🔥')
    }

    private exract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
      }
    }

    clean(): void { }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('우유 데우기');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider{
    private getSugar() {
      console.log('설탕 가져오기 🍬');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class CaffeLatteCoffeMachine extends CoffeMachine {
    constructor(coffeeBeansAmount: number, serialNumber: string, private milkFother: CheapMilkSteamer) {
      super(coffeeBeansAmount);
    }
    
    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모의 함수를 이용하고 싶다면
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeMachine {
    constructor(beans: number, private sugar: CandySugarMixer) {
      super(beans);
    }
    
    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모의 함수를 이용하고 싶다면
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeMachine {
    constructor(beans: number, private sugar: CandySugarMixer, private milkFother: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sweetCoffee = this.sugar.addSugar(coffee);
      return this.milkFother.makeMilk(sweetCoffee);
    }
  }


  // const cheapMilkMaker = new CheapMilkSteamer();
  // const candySuger = new CandySugarMixer();
  // const sweetMachine = new SweetCoffeeMaker(12, candySuger);
  // const latteMachine = new CaffeLatteCoffeMachine(12, '1', cheapMilkMaker);
  // const sweetLatteMachine = new SweetCaffeLatteMachine(12, candySuger, cheapMilkMaker);
  // 재사용성이 떨어짐
  // 다른 설탕, 다른 우유를 사용하는 기계를 만들고 싶다면 그 기계를 새롭게 만들어야한다.
  // 그 말은 CoffeMachine 클래스를 상속받는 자식 클래스를 만들어야 한다.
  // 이렇게 하면 자식 클래스가 끝없이 늘어나는 수가 있다


}