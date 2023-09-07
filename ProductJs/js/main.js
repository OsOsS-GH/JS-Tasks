class Product {
    constructor(name , id , price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
}


class ProductUi {
    static displayDummyProducts() {
        const products = [
            {name : "Mobile Phone" , id : 12478 ,  price : 8000 },
            {name : "PC" , id : 82671 ,  price : 30000 },
            {name : "Headset" , id : 68941 ,  price : 3000 }
        ]
        for(let product of products){
            ProductUi.displayProductsIntoTable(product)
        }
    }


    static deleteProduct(element) {
        if(element.classList.contains('delete-product')){
            element.parentElement.parentElement.remove();
        }
    }

    static displayProductsIntoTable(product){
        const tbody = document.querySelector('tbody'),
              row = document.createElement('tr')
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td>${product.price}</td>
            <td>
                <a href="#" class="btn btn-danger delete-product">delete</a>
            </td>
        `;
        tbody.appendChild(row)
    }

    static showMessages(textMessage, alertClass) {
        const div = document.createElement('div')
        div.className = `alert alert-${alertClass} my-2`;
        div.appendChild(document.createTextNode(textMessage))
        const form = document.querySelector('#add-product')
        const section = document.querySelector('.products')
        section.insertBefore(div , form)

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 4000);
    }

    static clearInputs(){
        document.querySelector('#name').value = '',
        document.querySelector('#id').value = '',
        document.querySelector('#price').value = ''
    }
}

document.addEventListener('DOMContentLoaded' , ProductUi.displayDummyProducts)

document.querySelector('#add-product').addEventListener('submit' , (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value,
          id = document.querySelector('#id').value,
          price = document.querySelector('#price').value

    if(name =='' || id =='' || price == '') {
        ProductUi.showMessages('All Inputs Are Required ...' , 'danger')
    }else if(price <= 0){
        ProductUi.showMessages('Enter a Valid Price' , 'warning')
    }
    else{

        const product = new Product(name , id , price)

        ProductUi.displayProductsIntoTable(product);

        ProductUi.clearInputs();

        ProductUi.showMessages('Product Added Successfully ✔' , 'success')
    }
})


document.querySelector('tbody').addEventListener('click' , (e)=>{
    ProductUi.deleteProduct(e.target)
})