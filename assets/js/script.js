console.log("test")

const women = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGvgGq0xlB6-VidQY-hHME562orcSLSkgILgC8dSTsaNupQl6p3AckCVC_9cmpJFwyzAOxv0&usqp=CAc",
        desc: "Summer Fashion",
        size: ["S", "M", "L", "XL"],
        price: "25",
        tag: "1w"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMkpSe558VOEW8xYkZuNvQtyRZHCrvDyQ97osWJil4FbTaubX9QamEqCgg&usqp=CAhttps://i.ebayimg.com/images/g/nacAAOSwDwJdNrR1/s-l300.jpgc",
        desc: "Autumn",
        size: ["S", "M", "L", "XL"],
        price: "34",
        tag: "2w"
    },
    {
        image: "https://s.shld.net/is/image/Sears/Womens_2020_February_Wk3_v1_5?$cq_width_500$&qlt=90,0&resMode=sharp&op_usm=0.9,0.5,0,0,&jpegSize=100&bgc=ffffff",
        desc: "Winter",
        size: ["S", "M", "L", "XL"],
        price: "29",
        tag: "3w"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1593123564816-UFP9N945KU782INM1BLV/ke17ZwdGBToddI8pDm48kKbYUC7ko4ep_M3O09c6DLZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyUjG47s4lQqa3kGWpoR_DitVobFN0LmU1WvG_uZkJwkPR2-Fb7zwugw-NXPqcoGjo/American-Made-Clothing-LACAUSA",
        desc: "Spring",
        size: ["S", "M", "L", "XL"],
        price: "18",
        tag: "4w"
    },
    {
        image: "https://contents.mediadecathlon.com/p1349904/k$4e08f475859c17ccd048a379f4eff56d/women-s-country-walking-sweatshirt-nh100-hybrid.jpg?format=auto&f=250x250",
        desc: "All session",
        size: ["S", "M", "L", "XL"],
        price: "30",
        tag: "5w"
    },
    {
        image: "https://i.ebayimg.com/images/g/xZ0AAOSw4bldidWc/s-l300.jpg",
        desc: "Winter Fashion",
        size: ["S", "M", "L", "XL"],
        price: "57.99",
        tag: "6w"
    }
];

const mens = [
    {
        image: "../assets/images/mens/1.jpg",
        desc: "Summer Fashion",
        size: ["S", "M", "L", "XL"],
        price: "25",
        tag: "1m"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMkpSe558VOEW8xYkZuNvQtyRZHCrvDyQ97osWJil4FbTaubX9QamEqCgg&usqp=CAc",
        desc: "Autumn",
        size: ["S", "M", "L", "XL"],
        price: "34",
        tag: "2m"
    },
    {
        image: "data:image/jpeg;base64,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",
        desc: "Winter",
        size: ["S", "M", "L", "XL"],
        price: "29",
        tag: "3m"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTEJ6hPki987-7rOqBykQaerUn1ynxYJ2ZLjebmtCgJxhG3JWwc0tGsUaphPclrD5_wxhvtI&usqp=CAc",
        desc: "Spring",
        size: ["S", "M", "L", "XL"],
        price: "18",
        tag: "4m",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3h0MBgTCij-jvDhnw8QI6oJY7p8aG15UZz0J1FsMKoj075kGPuiTpKJXAb2ccxFQuPJJwGg&usqp=CAc",
        desc: "All session",
        size: ["S", "M", "L", "XL"],
        price: "30",
        tag: "5m"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmPXjkCyfus7RSBQSxyXD4pNfOgJPJNImBA&usqp=CAU",
        desc: "Winter Fashion",
        size: ["S", "M", "L", "XL"],
        price: "57.99",
        tag: "6m"
    }
];

// variables to store orders by tag number in local storage
var milgaya;
var tag = [];

const shopBtn = document.querySelector('#shopBtn');
const mensBtn = document.querySelector('#mensBtn');
const womenBtn = document.querySelector('#womenBtn');

const mensProductDiv = document.querySelector('#product-men');
const womenProductDiv = document.querySelector('#product-women');

// if button is there
if (shopBtn) {
    shopBtn.addEventListener('click', showProduct);
}

function showProduct() {
    document.querySelector('.text-landing').classList.add('d-none');
    document.querySelector('#product-div').classList.remove('d-none');
}


const prodImage = document.querySelector('.prod-image');
const prodDesc = document.querySelector('.card-title')
const prodSize = document.querySelector('.card-text');
const prodPrice = document.querySelector('.card-price');


// displays mens product button is there
if (mensBtn) {
    mensBtn.addEventListener('click', mensProduct);
}
// populate Men product div 
function mensProduct() {
    localStorage.getItem("tag");
    mensProductDiv.innerHTML = ``;
    womenProductDiv.classList.add('d-none');
    mensProductDiv.classList.remove('d-none');
    for (var i = 0; i < mens.length; i++) {
        mensProductDiv.innerHTML += `<div class="mb-4 prod-display" style="width: 20rem;">
                        <img src="${mens[i].image}" class="card-img-top prod-image mt-3 info" id="cart-item" alt="...">
                        <div class="card-body">
                            <h5 class="card-title info">${mens[i].desc}</h5>
                            <p class="card-text info">Available Sizes: ${mens[i].size}</p>
                            <p class="card-text info">Price: $ ${mens[i].price}</p>
                            <p class="card-text info tag">${mens[i].tag}</p>
                            <button type="button" class="btn btn-primary cart">Add to cart</button>
                        </div>
                    </div>`;

        // select all elements with class cart
        var prodbtn = mensProductDiv.querySelectorAll('.cart');
    }
    // takes all add cart buttons and mens array
    getInfo(prodbtn, mens);
}

// if women product button is there
if (womenBtn) {
    womenBtn.addEventListener('click', womenProduct);
}

// populate women product div 
function womenProduct() {
    localStorage.getItem("tag");
    womenProductDiv.innerHTML = ``;
    mensProductDiv.classList.add('d-none')
    womenProductDiv.classList.remove('d-none');
    for (var i = 0; i < women.length; i++) {
        womenProductDiv.innerHTML += `
                                    <div class="mb-4 prod-display" style="width: 20rem;">
                                    <img src="${women[i].image}" class="card-img-top prod-image mt-3 info" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title info">${women[i].desc}</h5>
                                        <p class="card-text info">Available Sizes: ${women[i].size}</p>
                                        <p class="card-text info">Price: $ ${women[i].price}</p>
                                        <p class="card-text info tag">${women[i].tag}</p>
                                        <button type="button" class="btn btn-primary cart info">Add to cart</button>
                                    </div>
                                    </div>`;
        // select all elements with class cart
        var prodbtn = womenProductDiv.querySelectorAll('.cart');
    }
    getInfo(prodbtn, women);
}

// get the parent element of the clicked product
const cartIconText = document.querySelector('#cart-icon-text');

function getInfo(btn, gender) {
    // checks which add cart button is clicked
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            // adding btn clicked parent element inner text to get value of tag number
            // to save in local storage
            addProdToStorage(this.parentElement.innerText, gender);
        })
    }
}

// add quantity to local storage for cart 
function addProdToStorage(clothe, gender) {
    // converting elements inner text from parent element div to array
    milgaya = clothe.split("\n");
    console.log("the item click is", clothe);
    // checking if tag value match the product tag from arrays
    for (i = 0; i < gender.length; i++) {
        if (milgaya[6] == gender[i].tag) {
            tag.push(milgaya[6]);
            console.log(tag);
            localStorage.setItem("tag", JSON.stringify(tag));
            // document.querySelector('#cart-div').innerText = `${tag}`;
        }
        else {
            localStorage.setItem("tag", milgaya[6]);
            // document.querySelector('#cart-div').innerText = `${milgaya[6]}`;
        }
    }
    updateCart();
}

function updateCart() {
    document.querySelector('.cart-page').classList.remove('d-none');
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    cartIconText.style.color = 'green';
    if (productNumbers) {
        localStorage.setItem('tag', JSON.stringify(tag));
        localStorage.setItem('cartNumbers', productNumbers + 1);
        // document.querySelector('#cart-div').innerText = `${tag}`;
        cartIconText.innerText = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        localStorage.setItem('tag', JSON.stringify(milgaya[6]));
        // document.querySelector('#cart-div').innerText = `${tag}`;
        cartIconText.innerText = 1;
    }
    cartDisplay(mens);
}

document.querySelector('.cross').addEventListener('click',function(){
    document.querySelector('.cart-page').classList.add('d-none');
}) 
var basket = [];
function  cartDisplay(gender) {
    // console.log(typeof tag)
    document.querySelector('#cart-div').innerHTML=``;
    for ( j=0;j<tag.length;j++){
        for(t=0;t<gender.length;t++)
        if(tag[j] === gender[t].tag){
            basket.push(gender[t]);
            document.querySelector('#cart-div').innerHTML +=`<div class="card cart mb-4" style="width: 20rem;">
                                    <div class="ml-3">
                                    <img src="${gender[t].image}" 
                                    class="card-img-top mt-3 info" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text info">Price: $ ${gender[t].price}</p>
                                    </div>
                                    </div>`;
        }
    }

}
// const crossCart = document.querySelector('#cross-cart');
// const cartItem = document.querySelector('#cart-item');
// const cartDesc = document.querySelector('#cart-desc');
// const cartQuantity = document.querySelector('#cart-quantity');
// const cartSize = document.querySelector('#cart-size');
// const cartPrice = document.querySelector('#cart-price');
// const divCart = document.querySelector('#cart-div');
// load the local storage for shopping cart quantity

function onLoadCartNumbers() {
    localStorage.clear();
    cartIconText.innerText = "Empty";
    cartIconText.style.color = 'red';
}

// update the cart quantity on page loading from local storage
onLoadCartNumbers();
