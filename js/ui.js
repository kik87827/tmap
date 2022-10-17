
document.addEventListener("DOMContentLoaded",()=>{
    layoutFunc();
});




function layoutFunc(){
    const btn_gotop = document.querySelector(".btn_gotop");
    if(btn_gotop !== null){
        btn_gotop.addEventListener("click",(e)=>{
            e.preventDefault();
            setTimeout(()=>{
                window.scrollTo(0,0);
            },30);
        });
    }

    window.addEventListener("scroll",(e)=>{
        if(scrollY>0){
            btn_gotop.classList.add("active");
        }else{
            btn_gotop.classList.remove("active");
        }
    });
}