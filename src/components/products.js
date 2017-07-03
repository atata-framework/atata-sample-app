module.exports = {
    template: require('./products.html'),
    data() {
        return {
            items: [
                { name: "Table", price: "$125.00", amount: 50 },
                { name: "Chair", price: "$35.00", amount: 120 },
                { name: "Desk", price: "$130.00", amount: 70 },
                { name: "Wardrobe", price: "$280.00", amount: 5 },
                { name: "Armchair", price: "$180.00", amount: 15 }
            ],
            bsDeletionItem: null
        };
    },
    computed: {
        isBSDeletion() {
            return this.bsDeletionItem != null
        }
    },
    route: {
        activate() {
            this.$root.title = 'Products'
        }
    },
    methods: {
        remove(item) {
            var index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        },
        deleteUsingJSConfirm(item) {
            if (confirm('Are you sure you want to delete \"' + item.name + '\" product?')) {
                this.remove(item);
            }
        },
        deleteUsingBSModal(item) {
            this.bsDeletionItem = item;
        },
        confirmBSDeletion() {
            this.remove(this.bsDeletionItem);
            this.bsDeletionItem = null;
        },
        cancelBSDeletion() {
            this.bsDeletionItem = null;
        },
        deleteUsingJQueryConfirm(item) {
            var self = this;

            $.confirm({
                title: 'Confirmation',
                type: 'orange',
                closeIcon: true,
                escapeKey: "cancel",
                content: 'Are you sure you want to delete \"<strong>' + item.name + '</strong>\" product?',
                buttons: {
                    "delete": function () {
                        self.remove(item);
                    },
                    cancel: function () {
                    }
                }
            });
        }
    }
}