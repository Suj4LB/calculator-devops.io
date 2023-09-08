//Java Script
var screen=document.querySelector('#screen');
  var btn=document.querySelectorAll('.btn');
  
   /*============ For getting the value of btn, Here we use for loop ============*/
    for(item of btn)
      {
        item.addEventListener('click',(e)=>{
          btntext=e.target.innerText;

          if(btntext == 'x')
          {
                btntext='*';
          }

          if(btntext=='÷')
          {
                btntext='/';
          }
          screen.value+=btntext;
          });
      }
