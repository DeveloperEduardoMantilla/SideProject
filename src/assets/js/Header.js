window.addEventListener('load', function(){
    let MyHeader = document.getElementById("myHeader");
    const scrollPosition = window.scrollY;

    if(scrollPosition>=100){
        console.log("Entre");
        MyHeader.style.backgroundColor = scrollPosition > 100 ? "red" : "yellow";
    }
})