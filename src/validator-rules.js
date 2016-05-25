module.exports = {
    'for': function(name) {
        var builder = {
            rules: {},

            build() {
                return this.rules;
            },
            required() {
                this.rules.required = { rule: true, message: name + ' is required' }
                return builder;
            },
            minLength(value) {
                this.rules.minlength = { rule: value, message: name + ' minimum length is ' + value }
                return builder;
            },
            maxLength(value) {
                this.rules.maxlength = { rule: value, message: name + 'maximum length is ' + value }
                return builder;
            }
        };
        return builder;
    }
}