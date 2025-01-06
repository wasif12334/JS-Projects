const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
      if(e.target.id === "gray"){
        body.style.backgroundColor = e.target.id;
      }
      else  if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
      }
      else  if(e.target.id === "orange"){
        body.style.backgroundColor = e.target.id;
      }
      else  if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id;
      }

    })
});
