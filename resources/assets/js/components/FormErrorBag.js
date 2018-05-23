export default class FormErrorBag {

    constructor() {
        this.errors = {};
    }

    get size() {
        return Object.keys(this.errors).length;
    }

    has(field) {
        return Object.keys(this.errors).includes(field);
    }

    get(field) {
        if (this.has(field)) {
            return this.errors[field][0];
        }
    }

    set(field, value) {
        this.errors[field] = value;
    }

    fill(errors) {
        if (typeof errors === 'object') {
            //this.errors = errors;
            this.errors = Object.assign(this.errors, errors);
        } else {
            this.errors = {'field': ['Something went wrong. Please try again.']};
        }
    }

    isEmpty() {
        return this.size > 0;
    }

    clear() {
        this.errors = {};
    }
}