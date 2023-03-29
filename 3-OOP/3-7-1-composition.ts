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

    constructor(coffeeBeansAmount: number, private milkFrother: MilkFrother, private sugarProvider: SugarProvider) {
      this.coffeeBeans = coffeeBeansAmount;
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
      const coffee = this.exract(shots);
      const sugarAdded = this.sugarProvider.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
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

  // 비싼 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('비싼 우유 데우기');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 비싼 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('찬 우유인데 거품 잘 남');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 비싼 우유 거품기
  class NoMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
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

  // 설탕 제조기2
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('질 좋은 설탕 가져오기');
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

  // 설탕 제조기2
  class NoSugarMixer implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }  
  
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilkMaker = new NoMilkSteamer();

  const candySuger = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugarMixer();

  const sweetCandyMachine = new CoffeMachine(100, noMilkMaker, candySuger);
  const sweetMachine = new CoffeMachine(100, noMilkMaker, sugar);

  const latteeMachine = new CoffeMachine(100, fancyMilkMaker, noSugar);
  const coldLatterMachine = new CoffeMachine(100, coldMilkMaker, noSugar);
  const sweetLatterMachine = new CoffeMachine(100, fancyMilkMaker, sugar);

  sweetLatterMachine.makeCoffee(10);
  // Composition
  // 이렇게 재료들을 넘겨서 그 재료들이 무엇이든 간에 만들어질 수 있게 구성하는 것
  
}