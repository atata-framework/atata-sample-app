module.exports = {
    template: require('./calculations.html'),
    data() {
        return {
            additionValue1: null,
            additionValue2: null
        };
    },
    computed: {
        additionResult() {
            var val1 = parseInt(this.additionValue1);
            var val2 = parseInt(this.additionValue2);
            return val1 && val2 ? val1 + val2 : null;
        }
    },
    route: {
        activate() {
            this.$root.title = 'Calculations'
        }
    }
}