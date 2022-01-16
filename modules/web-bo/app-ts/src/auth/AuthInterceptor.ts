import {ClientReadableStream} from "grpc-web";

class AuthInterceptor {
    private getAccessTokenSilently: any;

    constructor(getAccessTokenSilently: any) {
        this.getAccessTokenSilently = getAccessTokenSilently;
    }

    intercept(request: any,
              invoker: any):ClientReadableStream<any> {
        // we need to chain a token promise with a clientreadablestream

        // get the token promise
        let tokenPromise:Promise<string> = this.getAccessTokenSilently();
        // chain it with the invoker to get a promise of ClientReadableStream
        let clientStreamPromise:Promise<ClientReadableStream<any>> = tokenPromise.then((token) => {
            const metadata = request.getMetadata()
            metadata.Authorization = 'Bearer ' + token
            console.log("invoking request with authorization z " + token)
            return invoker(request)
        })
        // return a ClientReadableStream which propagates its method to the promised ClientReadableStream
        return {
            on(eventType: any, callback: any): ClientReadableStream<any> {
                clientStreamPromise.then((cs) => cs.on(eventType, callback));
                return this;
            },
            cancel(): void {
                clientStreamPromise.then((cs) => cs.cancel());
            },
            removeListener(eventType: any, callback: any): void {
                clientStreamPromise.then((cs) => cs.removeListener(eventType, callback));
            }
        };
    }
}

export default AuthInterceptor;
