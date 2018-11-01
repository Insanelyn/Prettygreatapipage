export default {
    methods: {
        addToCart(article) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                let item = {
                    id: article._id,
                    name: article.product_name,
                    price: article.price,
                    subtotal: article.price*1,
                    qty: 1
                }
                cart.push(item);
                this.$store.commit('setCart', item);
                localStorage.setItem('cart', JSON.stringify(cart));

            } else {
                let item = cart.find(item => {
                    return item.id === article._id;
                });
                if (item) { // check if is not new item
                    item.qty++;
                    item.subtotal = item.price*item.qty
                    this.$store.commit('setQuantity', item);
                    this.$store.commit('setPrice', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    let item = {
                        id: article._id,
                        name: article.product_name,
                        price: article.price,
                        subtotal: article.price *1,
                        qty: 1
                    };
                    cart.push(item);
                    this.$store.commit('setCart', item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                }

            }

        }
    }
}
