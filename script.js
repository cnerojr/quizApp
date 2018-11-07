var questions=[];

class Questions {
    constructor(prompt,answer) {
this.prompt = prompt;
this.answer= answer;

}
}
var score= 0;

const q1 = new Questions(
    "How many ninja tutles are there?\n(a) four\n\
  (b) three\n(c) one",
    "a"
      );
      questions.push(q1);

      const q2 = new Questions(
        "What is the name of the turtles enemy?\n(a) Razor\n\
      (b) Shredder\n(c) Splinter",
        "b"
          );
          questions.push(q2);    
         
          const q3 = new Questions(
            "In the Secret of the Ooze', what rapper sang 'Go ninja, go ninja GO!'?\n(a) 2Pac\n\
          (b) Katy Perry\n(c) Vanila Ice",
            "c"
              );
              questions.push(q3);

              const q4 = new Questions(
                "this quote spoken by Michelangelo? Wise man say, 'Forgiveness is divine, but never pay full price for _________'.?\n(a) plane tickets\n\
              (b) late pizza\n(c) Uber",
                "b"
                  );
                  questions.push(q4);            
    
                  const q5 = new Questions(
                    "Who does the voice of Donatello?\n(a) Corey Feldman\n\
                  (b) Morgan Freeman\n(c) Johnny Depp",
                    "a"
                      );
                      questions.push(q5);
                
                      for(i=0; i<questions.length; i++) {
                           var response= window.prompt(questions[i].prompt)
                           if(response=== questions[i].answer)
                        {
                            alert ("correct!!");
                            score++;
                        }else{
                            alert ("try again");
                        }
                      }
                      if(score==5){
                          alert("You got 5 out of 5!!");
                      }else if(score==4){
                        alert("You got 4 out of 5!!");
                
                      }else if(score==3){
                        alert("You got 3 out of 5!!");
                
                      }
                      
                      else if(score==2){
                        alert("You got 2 out of 5 !!");    
                      
                      } else if(score==1){
                        alert("You got 1 out of 5!!");
                
                      }else if(score==0){
                        alert("You got 0 out of 5!!");
                
                      };
              
          
          
      
      
