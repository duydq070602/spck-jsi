let products = [];
const productList = document.getElementById('product-list')

const getProducts = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
  products.forEach((product) => {
    const container = document.createElement('div');
    container.classList.add('col-md-3')

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const figure = document.createElement('figure');
    figure.classList.add('product-style');
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('product-item');

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


  })
  container.appendChild(productItem)
  productList.appendChild(container);

}


getProducts()