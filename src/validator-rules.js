module.exports = {
    create: function() {
        var builder = {
            rules: {},

            build() {
                return this.rules;
            },
            required() {
                this.rules.required = { rule: true, initial: 'off', message: 'is required' }
                return builder;
            },
            minLength(value) {
                this.rules.minlength = { rule: value, initial: 'off', message: 'minimum length is ' + value }
                return builder;
            },
            maxLength(value) {
                this.rules.maxlength = { rule: value, initial: 'off', message: 'maximum length is ' + value }
                return builder;
            }
        };
        return builder;
    }
}