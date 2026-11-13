let cartCount = 0;

let cartItems = [];


function addToCart(productName, price) {

    cartCount++;

    cartItems.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText =
        cartCount;

    alert(
        productName +
        " added to your cart! 🛒"
    );
}


/* Search Products */

function searchProducts() {

    let input =
        document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let name =
            product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* Wishlist */

const hearts =
    document.querySelectorAll(".heart");

hearts.forEach(function(heart) {

    heart.addEventListener("click", function() {

        if (heart.innerText === "♡") {

            heart.innerText = "♥";

            heart.style.color = "#ff1744";

        } else {

            heart.innerText = "♡";

            heart.style.color = "#ff4081";

        }

    });

});