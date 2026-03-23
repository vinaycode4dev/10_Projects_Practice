//Selecting
const form=document.getElementById("quizForm");
//storing answers
const answer={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5: "Muttiah Muralitharan"
}
//listening
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //Data
    const data=new FormData(form);
    let finalScore=0;  
    for(let [name, value] of data.entries()){
        if(answer[name]==value){
            finalScore++;
        }
    }

    //Score
    document.getElementById('out').textContent=`Your Score is ${finalScore} our of 5`;

})