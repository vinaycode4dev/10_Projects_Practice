const Body=document.querySelector("body");

Body.addEventListener('click',(e)=>{
    //Where is clicked
    // console.log(e.clientX,e.clientY);

    //creating element
    const circleElement=document.createElement('div');
    //add css class property & text content
    circleElement.classList.add('circle');
    //giving various welcome in various languages
    const welcome=["Hello","Namaste","Hola","Bonjour","Ciao","Konnichiwa","Hallo","Salaam","Nǐ hǎo","Olá"];
    circleElement.textContent=welcome[Math.floor(Math.random()*welcome.length)];
    //giving various color in the bubble
    const color=['red','green','yellow','blue','purple','orange','pink','purple'];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

    //maintaing position
    circleElement.style.top=`${e.clientY-25}px`;
    circleElement.style.left=`${e.clientX-25}px`;

    Body.append(circleElement);
    // console.log(Body);

    //Removing element after click 
    setTimeout(() => {//it runs only one time
        circleElement.remove();        
    },5000);
})
