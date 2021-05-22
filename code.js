//Корзина
let basket = {
    'rklm10' : 0,
    'rklm11' : 0,
    'rklm12' : 0,

    'rklm20' : 0,
    'rklm21' : 0,
    'rklm22' : 0,

    'rklm30' : 0,
    'rklm31' : 0,
    'rklm32' : 0,
}

//Привязка кнопок
document.onclick = event => {
    if(event.target.classList.contains('plusBTN')){
        plusFunction(event.target)

    }
    if (event.target.classList.contains('minusBTN')){
        minusFunction(event.target)
    }
    if (event.target.classList.contains('buyBTN')){
        buyFunction(event.target)
    }
}

//Увеличение количества товара
const plusFunction = target =>{
    basket[target.dataset.id]++
    
    renderCount(target, basket[target.dataset.id])
    updateBasket()
}

//Уменьшение количества товара
const minusFunction = target =>{
    if(basket[target.dataset.id] - 1 == 0 ){
        deleteAdvertising(target.dataset.id)
        return true
    }
    basket[target.dataset.id]--
    
    renderCount(target, basket[target.dataset.id])
    updateBasket()
}

const modalBuyFunction = id => {
    if(basket[id] >= 0){
        updateAdvertising()
        updateBasket()
        return true
    }
}

//Покупка товара
const buyFunction = target =>{
    basket[target.dataset.id] = 0
    renderCount(target, basket[target.dataset.id])
}

//Удаление товара
const deleteAdvertising = id =>{
    delete basket[id]
    updateBasket()
}

//Обновление товара
const updateAdvertising = target =>{
    basket[target.dataset.id] = 0
    updateBasket()
}

//Вывод
let updateBasket = () =>{
    console.log(basket)
}

// Количество товара 
let renderCount = (event, value) => {
    event.parentElement.querySelector('p').innerHTML = value
}

//Корзина
let renderBasket = () => {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-window">
    <div class="modal-header">
        <h1>Basket <span class="modal-close" > &times;</span></h1> 
    </div>
    <div class="modal-nav">
        <div class="basket-element">
            <span class="element-name">1 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">2 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">3 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">4 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">5 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">6 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">7 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">8 Element</span>
            <span class="element-count">0</span>
        </div>
        <div class="basket-element">
            <span class="element-name">9 Element</span>
            <span class="element-count">0</span>
        </div>
    </div>
    <div class="modal-footer">
        <div class="box">
        <span></span>
        <button class="modal-buy" onclick="resetBasket(this)"> Buy </button>
        </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)

    let basketElementCount = document.querySelectorAll('.element-count')
    let pArray = document.querySelectorAll('.quantity')

    for (let index = 0; index < pArray.length; index++) {
       basketElementCount[index].innerHTML = pArray[index].innerHTML
    }
   
}

// Обнуление корзины
let resetBasket = (self) => {
    for (const iterator in basket) {
        basket[iterator] = 0
    }
    document.querySelectorAll('.quantity').forEach(element => {
        element.innerHTML = 0
    })
    self.parentElement.querySelectorAll('.element-count').forEach(element => {
        element.innerHTML = 0  
    })
}

window.onclick = function (event) {

    let close = document.querySelector('.modal-close')

    if(event.target == close){
        document.querySelector('.modal-overlay').remove()
    }
}

