const element = document.getElementById('element')
let products = []


const getProducts = async () => {
    const response = await fetch(
        "https://651ecb0544a3a8aa47690471.mockapi.io/products"
    );
    products = await response.json();

    const x = [];
    for (let i = 0; i < 4; i++) {
        x.push(products[i]);
    }
    x.forEach((product) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        const wrapper = document.createElement('div');
        wrapper.classList.add('media');


        const wrpImg = document.createElement('div');
        wrpImg.classList.add('d-flex')
        const wrapperImage = document.createElement('img');
        wrapperImage.src = product.image;
        wrpImg.appendChild(wrapperImage);

        const wrpText = document.createElement('div');
        wrpText.classList.add('media-body');
        const wrapperText = document.createElement('p');
        wrapperText.textContent = product.course;
        wrpText.appendChild(wrapperText);

        

        const td2 = document.createElement('td');
        const h2 = document.createElement('h2');
        h2.textContent = product.price
        td2.appendChild(h2)

        wrapper.appendChild(wrpImg);
        wrapper.appendChild(wrpText);
        td.appendChild(wrapper);
        


        tr.appendChild(td);
        tr.appendChild(td2);
        element.appendChild(tr)

    })



}

getProducts()



