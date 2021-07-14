//  menu carrito desplegable
function openNav() {
    if (screen.width < 500) {
        document.getElementById("myCart").style.width = "350px";
    }
    else {
        document.getElementById("myCart").style.width = "500px";
    }
}
function closeNav() {
    document.getElementById("myCart").style.width = "0";
}

///////////////////////////////

function addToCart(id) {
    var product = products.getById(id)[0];
    shoppingCart.add(product);
}

function removeToCart(id){
    var product = products.getById(id)[0];
    shoppingCart.removing(product);
}
function removeallToCart(id){
    shoppingCart.deleteProducts(id);
}

window.onload = function () {

    var urlLocal = `https://diegojavierconchillowagner.github.io/MateAr/js/data.json`;

    $.ajax({
        method: "GET",
        url: urlLocal
    }).done(function(data){
        
        //products
        var dataProduct = data[0].dataProduct;
        products = new Products(data);
        products.init(dataProduct);
        products.buildList('products-container', 'dataProduct');

    }).fail(function(error){
        error = alert('no se establecio la conexion');
    })

    shoppingCart = new ShoppingCart();
    shoppingCart.populate();
    shoppingCart.buildCart('cart-container');
    shoppingCart.total('total');
    // products = new ProductsD(productos)
    // products.init(productos)
    // products.buildList('products-container1', 'productos') 
    
}
