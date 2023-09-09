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
function sin()
    {
        screen.value=math.sin(screen.value);
    }

function cos()
    {
        screen.value=Math.cos(screen.value);
    }
function tan()
    {
        screen.value=Math.tan(screen.value);
    }
function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }
 function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }
function log()
    {
        screen.value=Math.log(screen.value);
    }
