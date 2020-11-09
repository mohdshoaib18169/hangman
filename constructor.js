
const s='playing'
class hangman{
 constructor(target,chances)
{   // this.word =target.toLowerCase();
    this.target=target.toLowerCase().split('');
    this.remainchances=chances;
    this.guessed=[];
    this.condition=s;
  
}
//hangman.prototype.hasOwnProperty=() => 'hello';
conditions()
{
    if(this.getpuzzle()===this.target.join(''))
    {
        this.condition='YOU WIN CONGRATS , YOU GUESS IT RIGHT'

    }
    else
    if(this.remainchances==0)
    {
        this.condition=`TRY NEXT TIME , THE WORD WAS "${this.target.join('')}"`
    }
}
getpuzzle()
{ //let ct=0;
    let puzzle='';
    this.target.forEach((guess)=>
    {
        if(this.guessed.includes(guess)||guess===' ')
        {
            puzzle+=guess;
        }
        else{
            puzzle+=' * '
            //ct++;
        }
    })
    //this.reamainchances=ct;
    return puzzle;
}
getguess(c)
{
 c=c.toLowerCase();
 if(!this.guessed.includes(c)&&!this.target.includes(c))
 {
     this.remainchances=this.remainchances-1;
    // console.log('try another');
 }
else
// {
    // console.log('you are very cool at guessing')
 //}
 if(!this.guessed.includes(c))
 {
     this.guessed.push(c);
 }

 //console.log(hangman1.getpuzzle());
 
}
 
 //hangman1.getguess('c');
}
 //console.log(hangman1.getpuzzle());
 