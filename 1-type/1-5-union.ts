{
  /**
   * Union Types: OR
   * 발생할 수 있는 여러 개 케이스 중에 하나만 지정하고 싶을 때 사용
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up'); 

  type SuccessState = { 
    response: {
      body: string;
    }
  }

  type FailureState = { 
    reason: string;
  }

  type LogState = SuccessState | FailureState;

  function loing(): LogState {
    return {
      response: {
        body: 'loing'
      }
    }
  }
}