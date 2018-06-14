import { ServerResponse } from './server-response';

export class AppError {
    constructor(public errorResponse? : ServerResponse) {
        console.log("Error is "+ JSON.stringify(errorResponse));
    }
}