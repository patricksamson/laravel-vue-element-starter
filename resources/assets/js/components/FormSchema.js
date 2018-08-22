export default class FormSchema {
    
    constructor() {
        this._title = '';
        this._fields = new Array();
    }

    set title(title) {
        this._title = title;
    }

    get title() {
        return this._title;
    }
}