let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let search = document.getElementById('search');

let mood = "create"
let temp ;


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
}else{
    dataProduct= []
}  
submit.onclick = function(){
    let newProduct ={
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
        }
        if (title.value!="" 
            && price.value!="" 
            && category.value!="" ){
            if (mood ==="create"){
                if (newProduct.count > 1) {
                    for (let i = 0; i < newProduct.count ; i++) {
                        dataProduct.push(newProduct) 
                          
                    }
        
                }
                else {
                    dataProduct.push(newProduct)
                }  
            }
                
                
                else{
                    dataProduct [temp]= newProduct
                    mood = "create"
                    submit.innerHTML = "Create"
                    count.style.display = "block"
                }
                clearInputs()   
        }
       
        
        localStorage.setItem('product',JSON.stringify(dataProduct))
        
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
    getTotal()
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
              <td><button onclick="updateData(${i})" id="update">update</button></td>
              <td><button onclick="deletData(${i})" id="delete">delete</button></td>
            </tr>`

        }
        document.getElementById('tbody').innerHTML = table;
       let deleteall = document.getElementById('deleteall')
        if (dataProduct.length > 0) {
    deleteall.innerHTML = ` <button onclick="deleteAll() ">  delete All (${dataProduct.length})</button>`
            
        } else{
            deleteall.innerHTML = 'no product'
        }

    }
 showData();
    

//delete product
   
      function deletData(i){
        dataProduct.splice(i,1)
        localStorage.product = JSON.stringify(dataProduct)
       showData()
       } 
    // delete all products


    function deleteAll(){
        localStorage.clear()
        dataProduct.splice(0)
        //localStorage.product = JSON.stringify(dataProduct)

        showData()

    }

    // count product
    // update products
    

    function updateData(i) {
        title.value = dataProduct[i].title
         price.value = dataProduct[i].price
         taxes.value = dataProduct[i].taxes
         ads.value =dataProduct[i].ads 
         discount.value = dataProduct[i].discount
          getTotal()
      category.value = dataProduct[i].category
      count.style.display = 'none'
      submit.innerHTML = 'update'
      mood = "update"
      temp = i
scroll({top : 0 , behavior : 'smooth'})

    }

    // search product
    let searchModd ='title'
    function getSearchMood(id) {
       // let search = getElementById("search")

        if (id =="searchTitle"){     
               searchModd = 'title';
               search.placeholder = "Search By title " 
        }  else{
            searchModd ="category";
            search.placeholder = "Search By category" 

        }
        search.focus()
        search.value = '';
        showData()
        
    };

    function searchData(value) {
        let table =''
    
if (searchModd=="title"){
    for (let i = 0; i< dataProduct.length; i++) {
      if (dataProduct[i].title.includes(search.value.toLowerCase()))
       {
        table += `<tr>
              <td>${i}</td>
              <td>${dataProduct[i].title}</td>
              <td>${dataProduct[i].price}</td>
              <td>${dataProduct[i].taxes}</td>
              <td>${dataProduct[i].ads}</td>
              <td>${dataProduct[i].discount}</td>
              <td>${dataProduct[i].total}</td>
              <td>${dataProduct[i].category}</td>
              <td><button onclick="updateData(${i})" id="update">update</button></td>
              <td><button onclick="deletData(${i})" id="delete">delete</button></td>
            </tr>`
       }
    }


} else if (searchModd=="category"){
    for (let i = 0; i < dataProduct.length; i++) {
        if(dataProduct[i].category.includes(search.value.toLowerCase())){
            {
                table += `<tr>
                      <td>${i}</td>
                      <td>${dataProduct[i].title}</td>
                      <td>${dataProduct[i].price}</td>
                      <td>${dataProduct[i].taxes}</td>
                      <td>${dataProduct[i].ads}</td>
                      <td>${dataProduct[i].discount}</td>
                      <td>${dataProduct[i].total}</td>
                      <td>${dataProduct[i].category}</td>
                      <td><button onclick="updateData(${i})" id="update">update</button></td>
                      <td><button onclick="deletData(${i})" id="delete">delete</button></td>
                    </tr>`
               }
        }
        
    }
}
document.getElementById('tbody').innerHTML = table;

    }