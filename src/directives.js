import Vue from 'vue'

Vue.directive('show-modal', function (newValue) {
    $(this.el).modal(newValue ? 'show' : 'hide')
})

Vue.directive('date-picker', function (newValue) {
    if (newValue) {
        $(this.el).datepicker({
            autoclose: true
        })
    }
})