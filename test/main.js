function countProd(n) {
    var n = Math.abs(n) % 100;
    let n1 = n % 10;
    let form = ['продукт', 'продукта', 'продуктов'];
    if (n > 10 && n < 20) { return form[2]; }
    if (n1 > 1 && n1 < 5) { return form[1]; }
    if (n1 == 1) { return form[0] }
    return form[2];
}

var app = new Vue({
    el: '#app',
    data: {
        products: [
            {"id":1,"name":"iPhone X","category":"Phone","brand":"Apple"},
            {"id":2,"name":"iPhone XR","category":"Phone","brand":"Apple"},
            {"id":3,"name":"iPad","category":"Tablet","brand":"Apple"},
            {"id":4,"name":"Galaxy Tab A","category":"Tablet","brand":"Samsung"},
            {"id":5,"name":"iPad Pro 11","category":"Tablet","brand":"Apple"},
            {"id":6,"name":"iPhone 11","category":"Phone","brand":"Apple"},
            {"id":7,"name":"Galaxy Tab S4","category":"Tablet","brand":"Samsung"},
            {"id":8,"name":"iPhone 11 Pro Max","category":"Phone","brand":"Apple"},
            {"id":9,"name":"Galaxy A50","category":"Phone","brand":"Samsung"},
            {"id":10,"name":"Redmi Note 7","category":"Phone","brand":"Xiaomi"},
            {"id":14,"name":"Redmi Note 6 Pro","category":"Phone","brand":"Xiaomi"},
            {"id":15,"name":"Reno 2","category":"Phone","brand":"Oppo"},
            {"id":16,"name":"MediaPad M5 Lite","category":"Tablet","brand":"Xiaomi"},
            {"id":17,"name":"Macbook Air","category":"Notebook","brand":"Apple"}
        ],
        brands: [0],
        categories: [0]
    },
    computed: {
        uniqBrands () {
            let brands = [];
            for (let str in this.products) {
                if (!brands.includes(this.products[str].brand)) {
                    brands.push(this.products[str].brand);
                }
            }
            return brands;
        },
        uniqCategories () {
            let categories = [];
            for (let str in this.products) {
                if (!categories.includes(this.products[str].category)) {
                    categories.push(this.products[str].category);
                }
            }
            return categories;
        },
        filterBy() {
            let filterItems = [];
            if ((this.brands[0] == '0') && (this.brands.length == 1)) {
                for (let i in this.uniqBrands) {
                    this.brands.push(this.uniqBrands[i]);
                }
                
            }
            if ((this.categories[0] == '0') && (this.categories.length == 1)) {
                for (let i in this.uniqCategories) {
                    this.categories.push(this.uniqCategories[i]);
                }
            }
            for (let i in this.products) {
                for (let j in this.brands ) {
                        if (((this.products[i].brand == this.brands[j]))) {
                            for (let x in this.categories ) {
                                if ((this.products[i].category == this.categories[x])) {
                                    let link = '/index.html/page.html?id=' + this.products[i].id;
                                    Object.assign(this.products[i],{ href: link});
                                    filterItems.push(this.products[i]);
                                }
                        }
                }
            }
        }   
            return filterItems;
        },
        output() {
            return countProd(this.filterBy.length);
        },
        showItem: function() {
            let id = window.location.search.replace(/[?id=]/g,'');
            for (let i in this.products) {
                if (this.products[i].id == id) {
                    return this.products[i];
                }
            }
        }
    },
    methods: {
    }
})
