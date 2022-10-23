const hamburguer = document.querySelector('.hamburguer')
const main = document.querySelector('.main')
const logo = document.querySelector('.logo')
const lists = document.querySelectorAll('.list')
const inputWrap = document.querySelector('.inputWrap')

hamburguer.addEventListener('click',closedAndOpen)

let control = true

function closedAndOpen ({target}){
  
  if (control == true){

    main.classList = 'main closed'
    logo.style.display = 'none'
    lists.forEach((list)=>{
      list.children[1].style.opacity='0'
    })

    inputWrap.classList = 'inputWrap closedInput'
    inputWrap.children[0].style.margin = '0'
    inputWrap.children[1].style.display = 'none'
    inputWrap.children[2].style.display = 'none'
    
    control = false
    
  }else{
    
    main.classList = 'main'
    logo.style.display = 'inline'
    lists.forEach((list)=>{
      list.children[1].style.opacity='1'
    })
    inputWrap.classList = 'inputWrap'
    inputWrap.children[0].style.marginRight = '15px'
    inputWrap.children[1].style.display = 'inline'
    inputWrap.children[2].style.display = 'inline'
    control = true
  }


}
