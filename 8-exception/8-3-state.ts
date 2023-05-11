{
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState =  {
        result: 'success';
    }

    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnect(): ResultState {
            try {
                // const result: SuccessState = {
                //     result: 'success'
                // }
                // return result;
                throw new Error('Connection')
            } catch (error) {
                const result: NetworkErrorState = {
                    result: 'fail',
                    reason: 'down'
                }
                return result;
            }
         }
    }

    class UserService {
        constructor(private networkClient: NetworkClient) { }
        
        login() {
            // try {
            //     this.networkClient.tryConnect();
            // } catch (error) {
            //     console.log(error);
            // }
            const connected = this.networkClient.tryConnect();
            if (connected.result === 'fail') {
                console.log(connected.reason);
            }
        }
    }

    class App {
        constructor(private userService: UserService) { }

        run() {
            this.userService.login();
        }
    }

    const network = new NetworkClient();
    const user = new UserService(network);
    const app = new App(user);
    app.run();
}