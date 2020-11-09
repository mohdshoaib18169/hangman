const hangman1=new hangman('shoaib khan',5);
document.querySelector('#word').textContent=hangman1.getpuzzle();
document.querySelector('#chance').textContent=hangman1.remainchances;
window.addEventListener('keypress',function(e)
{
    let g=String.fromCharCode(e.charCode);
      
       if(hangman1.remainchances>0&&hangman1.getpuzzle()!=hangman1.target.join(''))
       { 
           hangman1.getguess(g);
       document.querySelector('#word').textContent=hangman1.getpuzzle();
       document.querySelector('#chance').textContent=hangman1.remainchances;
       hangman1.conditions();
       console.log(hangman1.condition);
       if(hangman1.condition!=s)
       {
           document.querySelector('#chance').textContent=hangman1.condition;
       }
       }
       
})
//console.log(hangman1.getpuzzle());
