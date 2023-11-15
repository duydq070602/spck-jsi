// let products = [];
// const storeList = document.getElementById('store-list')


// const getProducts = async () => {
//   const response = await fetch(
//     "https://651ecb0544a3a8aa47690471.mockapi.io/products"
//   );
//   products = await response.json();
//   products.forEach((product) => {
//     const sliderItem = document.createElement('div');
//     sliderItem.classList.add('slider-item');

//     const bannerContent = document.createElement('div');
//     bannerContent.classList.add('banner-content');

//     const bannerTitle = document.createElement('h2');
//     bannerTitle.classList.add('banner-title');
//     bannerTitle.textContent = product.course;

//     const bannerDetail = document.createElement('p');
//     bannerDetail.textContent = product.description;

//     const bannerImage = document.createElement('img');
//     bannerImage.src = product.image;

//     bannerContent.appendChild(bannerTitle);
//     bannerContent.appendChild(bannerDetail);
    
//     sliderItem.appendChild(bannerContent);
//     sliderItem.appendChild(bannerImage);

//     storeList.appendChild(sliderItem);
//   })

// }

// getProducts()

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("productId");

const displayProduct = () => {
  
  document.getElementById("course-name").textContent = product.course;
  document.getElementById("course-image").src = product.image;
  document.getElementById('course-teacher').textContent = product.teacher
  document.getElementById("course-lesson").textContent = `${product.lesson} lessons`
  document.getElementById("course-description").textContent = product.description;
  document.getElementById("course-price").textContent = `${product.price} $`;
  const addBtn = document.getElementById("add-to-cart");
  addBtn.addEventListener("click", handleAddToCart);
};


const handleAddToCart = () => {
  const cartList = JSON.parse(localStorage.getItem("cartList"));
  if (cartList) {
    cartList.push(product);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  } else {
    localStorage.setItem("cartList", JSON.stringify([product]));
  }
};


const getProductDetail = () => {
  fetch(`https://651ecb0544a3a8aa47690471.mockapi.io/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      product = data;
      displayProduct();
    });
};

if (!productId) {
  alert("Khong co san pham nao duoc chon");
} else {
  getProductDetail();
}

const addToCart = document.getElementById('add-to-cart');
addToCart.addEventListener('click', function(){
  alert('Added to cart');
})

const purchase = document.getElementById('purchase');
purchase.addEventListener('click',function(){
  window.location = './cart.html';
})




let products = [];
const productList = document.getElementById('product-list')


const displayExtraProducts = async () => {
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
  for(let i = 0 ; i<4;i++){
    x.push(products[i]);
  }
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

displayExtraProducts()







