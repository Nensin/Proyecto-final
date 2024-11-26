const inputCantidad = document.querySelector('.input-cantidad')
const btnincrement = document.querySelector('#increment')
const btndicrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputCantidad.value)

//funciones

btnincrement.addEventListener('click', () => {
    //1=1+1
valueByDefault += 1

inputCantidad.value = valueByDefault
})
btndecrement.addEventListener('click', () => {
    //1=1+1
valueByDefault -= 1

inputCantidad.value = valueByDefault
})