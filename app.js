var animationElement =document.querySelectorAll('.show-scroll')

function checkViewWindow(element){
    var rect =element.getClientRects()[0];
    var heightScreen = window.innerHeight;
    //ktra có trong màm hình hay k
    if(!(rect.bottom<0|| rect.top>heightScreen)){
        //ben trong
        element.classList.add('active')
    }
    else{
        element.classList.remove('active')
    }
}

function checkAnimation(){
    animationElement.forEach(item=>{
        checkViewWindow(item)
    })
}
window.onscroll = checkAnimation