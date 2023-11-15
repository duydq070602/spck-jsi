let products = [];
const productList = document.getElementById('tab-content')


const displayProducts = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
  const container = document.createElement('div');
  container.classList.add('all')
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

displayProducts()

let currentPage = 1;

const getProducts = async () => {
  const url = new URL("https://651ecb0544a3a8aa47690471.mockapi.io/products");
  // Phân trang với page là số trang muốn tới còn limit là giới hạn trong 1 trang
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", 8);
  // Sắp xếp các sản phẩm theo thứ tự giảm dần thời gian tạo (cái mới nhất thì lên đầu)
  url.searchParams.append("sortBy", "createdAt");
  url.searchParams.append("order", "asc");
  const response = await fetch(url);
  products = await response.json();
  displayProducts();
};

// if (window.location.href.indexOf("shop") > -1) {
//   const nextPageBtn = document.getElementById("next");
//   const previousPageBtn = document.getElementById("previous");
  
//   if (currentPage = 1) {
//     previousPageBtn.style.opacity = "0";
//     previousPageBtn.style.pointerEvents = "none";
//   }
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       currentPage ++;
//       console.log(currentPage);
//       if (currentPage !== 1) {
//         previousPageBtn.style.opacity = "1";
//         previousPageBtn.style.pointerEvents = "auto";
//       };
//       if (currentPage == totalPages) {
//         nextPageBtn.style.opacity = "0";
//         nextPageBtn.style.pointerEvents = "none";
//       };
//       getProducts();
//     }
//   };
  
//   nextPageBtn.addEventListener("click", handleNextPage);
  
//   const handlePreviousPage = () => {
//     if (currentPage <= totalPages) {
//       currentPage--;
//       console.log(currentPage);
//       if (currentPage === 1) {
//         previousPageBtn.style.opacity = "0";
//         previousPageBtn.style.pointerEvents = "none";
//       };
//       if (currentPage !== totalPages) {
//         nextPageBtn.style.opacity = "1";
//         nextPageBtn.style.pointerEvents = "auto";
//       };
//       getProducts();
//     }
//   };
//   previousPageBtn.addEventListener("click", handlePreviousPage);
// };
// getProducts();