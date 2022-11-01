const li = document.querySelectorAll('.tabs__section__ul__li')
const hiddenContent = document.querySelectorAll('.tabs__section__ul__li__hidden-content')

const randomImgs = document.getElementsByClassName('seven-section__img-random-ul_li')
let i = 0;
window.setInterval(()=>{
    randomImgs[i].style.display="block"
    i++
    if(i > 5){
        for(let d = 0;d<randomImgs.length;d++){
            randomImgs[d].style.display="none"
        }
        i = 0
    }
},800)

// sixth-section

const quote = document.querySelector('.sixth-section__quote');
const backgroundChanges = document.querySelector('.sixth-section__left')
const backgroundChangesTwo = document.querySelector('.sixth-section__right')
const imgOne = document.querySelector('.img-one')


console.log(backgroundChanges);
// BUTTON ONE
const buttonOne = document.querySelector('.sixth-section__button-container__button-one')




// BUTTON TWO
const buttonTwo = document.querySelector('.sixth-section__button-container__button-two')



console.log(buttonTwo,buttonOne);

for(let i = 0; i<li.length; i++){
    li[i].addEventListener('click', (e)=>{
        if(li[i].classList.contains('oppend')){
            li[i].style.maxHeight="70px";
        }
        else{
            li[i].style.height="auto";
            li[i].style.maxHeight="999px";
        }
        li[i].classList.toggle('oppend');
    })
}
buttonTwo.addEventListener('click' , (e)=>{
    quote.innerText="“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”"
    imgOne.style.opacity="0";
    buttonTwo.classList.add('active')
    buttonOne.classList.remove('active')
    backgroundChanges.style.background="rgb(255,103,17)";
})
buttonOne.addEventListener('click' , (e)=>{
    quote.innerText=`"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.`;
    imgOne.style.opacity="1";
    buttonOne.classList.add('active')
    buttonTwo.classList.remove('active')
    backgroundChanges.style.background="rgba(255, 248, 4)";
})