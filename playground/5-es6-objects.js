const name = 'Andrew';
const userAge = 27;

const user = {
    
    name: name,
    age: userAge,
    location: 'Valencia'

}


const product = {

    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined

}


// const label = product.label
// const stock = product.stock

// const {label,stock} = product


const transaction = (type, {label, stock}) => {

    console.log(type,label,stock)
    

}

transaction('order',product)