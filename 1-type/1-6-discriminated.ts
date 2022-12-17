{
  // type SuccessState = { 
  //   response: {
  //     body: string;
  //   }
  // }

  // type FailureState = { 
  //   reason: string;
  // }

  // type LogState = SuccessState | FailureState;

  // function printLoginState(state: LogState) {
  //   if ('response' in state) {
  //     console.log(`${state.response.body}`);
  //   } else {
  //     console.log(`${state.reason}`)
  //   }
  // }

  // 
  type SuccessState = {
    result: 'success',
    response: {
      body: string;
    }
  }

  type FailureState = {
    result: 'fail',
    reason: string;
  }

  type LogState = SuccessState | FailureState;

  function printLoginState(state: LogState) {
    if (state.result === 'success') {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`)
    }
  }
}