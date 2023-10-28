const productList = document.getElementById('product-list')


const container = document.createElement('div');
container.classList.add('container');

const row = document.createElement('div')
row.classList.add('row');
const col = document.createElement('div')
col.classList.add('col-md-12');

const leftArrow = document.createElement('button');
leftArrow.classList.add('prev slick-arrow')
const iconLeft = document.createElement('i');
iconLeft.classList.add('icon-arrow-left')
leftArrow.appendChild(iconLeft);
col.appendChild(leftArrow);

const mainSlider = document.createElement('div');
mainSlider.classList.add('pattern-overlay')
col.appendChild(mainSlider);

const rightArrow = document.createElement('button');
rightArrow.classList.add('next slick-arrow')
const iconRight = document.createElement('i');
iconRight.classList.add('icon-arrow-right')
rightArrow.appendChild(iconRight);
col.appendChild(rightArrow);




const getProducts = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
  products.forEach((product) => {


    const sliderItem = document.createElement('div')
    sliderItem.classList.add('slider-item')

    

    const bannerContent = document.createElement('div')
    bannerContent.classList.add('banner-content')
    const bannerTitle = document.createElement('h2');
    bannerTitle.classList.add('banner-title');
    bannerTitle.textContent = product.course;
    const bannerInfo = document.createElement('p');
    bannerInfo.textContent = product.description;
    const bannerTeacher = document.createElement('p');
    bannerInfo.textContent = product.teacher;
    const bannerPrice = document.createElement('p');
    bannerInfo.textContent = product.price;
    const bannerImg = document.createElement('img');
    bannerImg.src = product.image;
    bannerImg.classList.add('banner-image');

    bannerContent.appendChild(bannerTitle);
    bannerContent.appendChild(bannerInfo);
    bannerContent.appendChild(bannerImg);
    bannerContent.appendChild(bannerTeacher);
    bannerContent.appendChild(bannerPrice);

    sliderItem.appendChild(bannerContent)

    mainSlider.appendChild(sliderItem)

})
row.appendChild(col);
container.appendChild(row);
productList.appendChild(container)


}


getProducts()