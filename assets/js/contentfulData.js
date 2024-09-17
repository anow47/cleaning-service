const client = contentful.createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    space: "uw4y8izjnc3s",
    accessToken: '28V2bK-eAHXNNnGQHmrsgmv1WMJiAOIRLQo4f_eSX1E',
})

// getting the products
class Products {
    async getProducts() {
        try {
            let contentful = await client.getEntries({
                // content_type: "ecommerce-products"
            })
            // Use 'contentful' to fecth data romotely from contentful 

            let products =  contentful.items
            products = products.map(item => {
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url
                return { title, price, id, image }
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }
}
// display products
class UI {
    diplayProducts(products) {
        let result = ''
        products.forEach(product => {
            result += `
            <!----- Single Product----->
            <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" class="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to cart
                    </button>
                    <h3>${product.title}</h3>
                    <h4>$${product.price}</h4>
                </div>
            </article>
            <!----- End Single Product----->
            `
        })
        document.querySelector('.services-dom').innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    //get all products
    products.getProducts().then(products => {
        ui.diplayProducts(products)
        console.log(products)
    })
})