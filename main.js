let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
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


  let dataProduct ;
 if (localStorage.product !=null ) { // ou localStorage.length > 0
    dataProduct = JSON.parse(localStorage.product) // ou localStorage.getItem('product') 
    console.log(dataProduct)    
}else{
    dataProduct= []
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
        showData()

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

// read product

 function showData() {
let table =''
for (let i = 0; i < dataProduct.length; i++) {
  table += `<tr>
              <td>${i}</td>
              <td>${dataProduct[i].title}</td>
              <td>${dataProduct[i].price}</td>
              <td>${dataProduct[i].taxes}</td>
              <td>${dataProduct[i].ads}</td>
              <td>${dataProduct[i].discount}</td>
              <td>${dataProduct[i].total}</td>
              <td>${dataProduct[i].category}</td>
              <td><button  id="update">update</button></td>
              <td><button onclick="deletData(${i})" id="delete">delete</button></td>
            </tr>`

        }
        document.getElementById('tbody').innerHTML = table;
       let deleteall = document.getElementById('deleteall')
        if (dataProduct.length > 0) {
    deleteall.innerHTML = ` <button onclick="deleteAll()>  delete allll</button>`
            
        } else{
            deleteall.innerHTML = ''
        }

    }
 showData();
    

//delete product
   
      function deletData(i){
        dataProduct.splice(i,1)
        localStorage.product = JSON.stringify(dataProduct)
       showData()
       } 
    