{
  /**
   * Type Aliases
   * 타입을 내가 정의할 수 있다라는 말
   */
  type Text = string;
  const name: Text = 'twostones';
  const address: Text = 'seoul';

  type Num = number;
  type Student = {
    name: string,
    age: number,
  }

  const twostones: Student = {
    name: 'twostones',
    age: 0,
  }

  /**
   * String Literal Typesc
   */
  type Name = 'twostones';
  let twostonesName: Name = 'seok';
  twostonesName = 'twostones';
}