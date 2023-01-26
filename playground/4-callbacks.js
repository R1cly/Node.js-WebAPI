setTimeout(() => {




}, 2000)


const names = ['Andrew','Jen','Jess']

const shortNames = names.filter((name) =>{

    return name.length <= 4

})

const geocode = (address, callback) =>{

    setTimeout(()=>{

        
    const data = {

        latitude: 0,
        longitude: 0

    }

    callback(data)


    },2000)


}

geocode('Valencia', (data) => { 

    console.log(data)


})


const add = (number1, number2, callback) =>{

    setTimeout(()=>{

        callback(number1+number2)

    },2000)

}

add(1,4, (sum) =>{

    console.log(sum)

})