import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
