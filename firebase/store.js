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
  products.forEach((product) => {
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
    

    figure.appendChild(addToCart)
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