const addToCartBtn1 = document.getElementById('button1')
const addToCartBtn2 = document.getElementById('button2')
const pics = document.getElementById('pic')

buttonChange = (evt) => {
    evt.target.style.backgroundColor = 'yellow'
    evt.target.style.color = 'black'
    evt.target.style.width = '300px'
    evt.target.style.height = '100px'
    evt.target.style.transition = '.4s'
}

buttonRevert = (evt) => {
    evt.target.style.backgroundColor = ''
    evt.target.style.color = ''
    evt.target.style.width = ''
    evt.target.style.height = ''
}



addToCartBtn1.addEventListener('mouseover', buttonChange)
addToCartBtn2.addEventListener('mouseover', buttonChange)
addToCartBtn1.addEventListener('mouseout', buttonRevert)
addToCartBtn2.addEventListener('mouseout', buttonRevert)
