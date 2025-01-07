
let form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
let wieght = parseInt(document.querySelector('#wieght').value);
let height = parseInt(document.querySelector('#height').value);
const result = document.querySelector('.result');
if(height===' '|| height<0 || isNaN(height)){
    result.innerHTML = "Please provide a valid Hieght";
}
else if(wieght===' '|| wieght<0 || isNaN(wieght)){
    result.innerHTML = "Please provide a valid wieght";
    }
else {
 const BMI =  (wieght/height*height/10000).toFixed(2);
 result.innerHTML =`<span>${ BMI}</span>`;
 let message = document.querySelector('.message');
  if(BMI<18.6){
    message.innerHTML = "Your BMI is Under Wieght"
  }
  else if(BMI>18.6 || BMI <24.9){
    message.innerHTML = "Your BMI is Normal"

  }
  else if(BMI>24.9)
{
    message.innerHTML = "Your BMI is Over-Wieght"

}
}
})
