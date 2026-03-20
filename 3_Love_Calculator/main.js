const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Boy=document.getElementById("boy");
    const Girl=document.getElementById("girl")

    const len1=Boy.value.length;
    const len2=Girl.value.length;

    const result= Math.pow(len1+len2,3)%101;

    const ans=document.querySelector("h2");
    ans.textContent=`Result: ${result}%`;
    form.reset();
})