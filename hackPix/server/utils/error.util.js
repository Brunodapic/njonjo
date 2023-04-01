export class Err extends Error {
    constructor(code, context) {
        super(context);
        this.code = code;
        this.context = context;
    }
}