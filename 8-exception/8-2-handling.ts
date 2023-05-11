{
    class NetworkClient {
        tryConnect(): void {
            throw new Error('네트워크 연결 실패');
        }
    }

    class UserService {
        constructor(private networkClient: NetworkClient) { }
        
        login() {
            try {
                this.networkClient.tryConnect();
            } catch (error) {
                console.log(error);
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