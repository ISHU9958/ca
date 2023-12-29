
// select the display element
const display=document.querySelector(".display");


const changeInnerText=(element)=>{
  display.value+=`${element.innerText}`;
}

const button1=document.querySelector("#button-1");
button1.addEventListener('click',(event)=>{
  changeInnerText(button1);
})

const button2=document.querySelector("#button-2");
button2.addEventListener('click',(event)=>{
  changeInnerText(button2);
})


const button3=document.querySelector("#button-3");
button3.addEventListener('click',(event)=>{
  changeInnerText(button3);
})


const button4=document.querySelector("#button-4");
button4.addEventListener('click',(event)=>{
  changeInnerText(button4);
})

const button5=document.querySelector("#button-5");
button5.addEventListener('click',(event)=>{
  changeInnerText(button5);
})

const button6=document.querySelector("#button-6");
button6.addEventListener('click',(event)=>{
  changeInnerText(button6);
})

const button7=document.querySelector("#button-7");
button7.addEventListener('click',(event)=>{
  changeInnerText(button7);
})

const button8=document.querySelector("#button-8");
button8.addEventListener('click',(event)=>{
  changeInnerText(button8);
})
const button9=document.querySelector("#button-9");
button9.addEventListener('click',(event)=>{
  changeInnerText(button9);
})
const button0=document.querySelector("#button-0");
button0.addEventListener('click',(event)=>{
  changeInnerText(button0);
})
const buttonc=document.querySelector("#button-c");
buttonc.addEventListener('click',(event)=>{
  display.value='';
})

const buttonplus=document.querySelector("#button-plus");
buttonplus.addEventListener('click',(event)=>{
  changeInnerText(buttonplus);
})
const buttonminus=document.querySelector("#button-minus");
buttonminus.addEventListener('click',(event)=>{
  changeInnerText(buttonminus);
})
const buttonmulti=document.querySelector("#button-multiply");
buttonmulti.addEventListener('click',(event)=>{
  changeInnerText(buttonmulti);
})
const buttondiv=document.querySelector("#button-divide");
buttondiv.addEventListener('click',(event)=>{
  changeInnerText(buttondiv);
})

const buttondot=document.querySelector("#button-dot");
buttondot.addEventListener('click',(event)=>{
  changeInnerText(buttondot);
})

const buttonequal=document.querySelector("#button-equal");
buttonequal.addEventListener('click',(event)=>{

  try{
    eval(display.value);
    display.value=`${eval(display.value)}`;
  }catch{
    display.value=`Synatx Error`;
  }
})


