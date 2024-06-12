let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
//get totale

function getTotal() {
 if(price.value !=''){
    result =(+price.value + +taxes.value + +ads.value )- +discount.value 
    total.innerHTML = result
    total.style.background = "green"
 }
else{
    total.innerHTML = "0"
    total.style.background = "#d80d0d"}
}

// create product

let dataProduct 
if (localStorage.product !='' ) { // ou localStorage.length > 0
    dataProduct = JSON.parse(localStorage.product) // ou localStorage.getItem('product') 
    console.log(dataProduct)    
}else{
    dataProduct=[]
}
submit.onclick = function(){
    let newProduct ={
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
        }
        dataProduct.push(newProduct)
        console.log(dataProduct)
        localStorage.setItem('product',JSON.stringify(dataProduct))
        clearInputs()
}
 
// clear inputs

function clearInputs() {
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
}






