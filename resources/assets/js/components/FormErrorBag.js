export default class FormErrorBag {

    constructor() {
        this.errors = {};
    }

    /**
     * Determine how many fields have at least one error.
     *
     * @return {int} The number of fields having at least one error.
     */
    get size() {
        return Object.keys(this.errors).length;
    }

    /**
     * Determine if the given field has an error.
     *
     * @param  {String}  field The field name.
     *
     * @return {Boolean}       Whether the field has an error.
     */
    has(field) {
        return Object.keys(this.errors).includes(field);
    }

    /**
     * Get the first error message for the given field.
     *
     * @param  {String} field The field name.
     *
     * @return {String}       The first error message for the given field.
     */
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

    /**
     * Dtermine if this form has any error.
     *
     * @return {Boolean} Whether the form has an error or not.
     */
    isEmpty() {
        return this.size > 0;
    }

    /**
     * Clear all the errors from this ErrorBag.
     */
    clear() {
        this.errors = {};
    }
}