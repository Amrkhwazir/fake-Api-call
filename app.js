
let cardImg = document.querySelector('.card-img-top')
let cardTitle = document.querySelector('.card-title')
let cardText = document.querySelector('.card-text')
let cardPrice = document.querySelector('.card-price')
let mainCont = document.querySelector('#main')

const uiCreation = (data) => {
    console.log(data, "==> products data")

    const {description,price,title,image} = data  
    // console.log(title)
    // console.log(image)

    const mappingData = data.map((product)=>{

        console.log(product)

       const everyProductData = `<div class="card">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <h6 class="card-price">$${product.price}</h6>
          <p class="card-text">${product.description}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>`

      return everyProductData
    })

    mainCont.innerHTML = mappingData.join();

}

const getProductData = () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => uiCreation(data))
}
getProductData()