// import { auth } from './config.js';
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
    
//   }
// });


let products = [];
const productList = document.getElementById('product-list')


const getProducts = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
  const container = document.createElement('div');
  container.classList.add('container')
  const row = document.createElement('div');
  row.classList.add('row');

  const x = [];
  for(let i = 4 ; i<8 ;i++){
    x.push(products[i]);
  }


console.log(x);
  x.forEach((product) => {
    const col = document.createElement('div');
    col.classList.add('col-md-3');

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const figure = document.createElement('figure');
    figure.classList.add('product-style');
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('product-item');
    const addToCart = document.createElement('button');
    addToCart.classList.add('add-to-cart');
    addToCart.setAttribute('data-product-tile','add-to-cart')
    addToCart.textContent = 'Detailed information';
    const productLink = document.createElement("a");
    productLink.href = "";
    productLink.href = "./in4.html?productId=" + product.id;
    productLink.appendChild(addToCart);

    figure.appendChild(productLink);
    figure.appendChild(productImage)



    const figCaption = document.createElement('figcaption');
    const productCourse = document.createElement('h3');
    productCourse.textContent = product.course;
    const productName = document.createElement('span');
    productName.textContent = product.teacher;
    const productPrice = document.createElement('div');
    productPrice.textContent = `${product.price}$`;
    productPrice.classList.add('item-price');


    figCaption.appendChild(productCourse);
    figCaption.appendChild(productName);
    figCaption.appendChild(productPrice);

    
    productItem.appendChild(figCaption);
    productItem.appendChild(figure);
    col.appendChild(productItem)
    row.appendChild(col)

  })
  
  container.appendChild(row);
  productList.appendChild(container)

}

getProducts()










let offers = [];
const productOffer = document.getElementById('product-offer')


const getProductsOffer = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);


  const x = [];
  for(let i = 8 ; i<12 ;i++){
    x.push(products[i]);
  }

console.log(x);
  x.forEach((product) => {

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const figure = document.createElement('figure');
    figure.classList.add('product-style');
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('product-item');
    const addToCart = document.createElement('button');
    addToCart.classList.add('add-to-cart');
    addToCart.setAttribute('data-product-tile','add-to-cart')
    addToCart.textContent = 'Detailed information';
    const productLink = document.createElement("a");
    productLink.href = "";
    productLink.href = "./in4.html?productId=" + product.id;
    productLink.appendChild(addToCart);

    figure.appendChild(productLink);
    figure.appendChild(productImage)



    const figCaption = document.createElement('figcaption');
    const productCourse = document.createElement('h3');
    productCourse.textContent = product.course;
    const productName = document.createElement('span');
    productName.textContent = product.teacher;
    
    const productPrice = document.createElement('div');
    productPrice.classList.add('item-price');
    const spanPrice = document.createElement('span');
    spanPrice.textContent = `${product.price}$`;
    spanPrice.classList.add('prev-price');
    productPrice.appendChild(spanPrice);


    figCaption.appendChild(productCourse);
    figCaption.appendChild(productName);
    figCaption.appendChild(productPrice);

    
    productItem.appendChild(figCaption);
    productItem.appendChild(figure);
    productOffer.appendChild(productItem);


  })
  

}

getProductsOffer()