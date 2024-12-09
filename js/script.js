"use strict"
const isMobile = {
Android: function() {
return navigator.userAgent.match(/Android/i);


Copy
},
BlackBerry:function(){
    return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function(){
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function(){
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function(){
return navigator.userAgent.match(/IEMobile/i);
},
any:function(){
return(
isMobile.Android()||
isMobile.BlackBerry()||
isMobile.iOS()||
isMobile.Opera()||
isMobile.Windows());
}
};

if (isMobile.any()){
document.body.classList.add("touch");

let menuArrows = document.querySelectorAll('.menu-arrow');
    if(menuArrows.length>0){
        for (let index = 0; index<menuArrows.length;index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click",function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else{
document.body.classList.add("pc");
}


const iconMenu =document.querySelector('.menu-icon');
const MenuBody=document.querySelector('.menu-body');
if(iconMenu){
    iconMenu.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        MenuBody.classList.toggle('_active');

    });
}


const menuLinks=document.querySelectorAll('.menu-link[data-goto], .menu-sub-link[data-goto]');
if (menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click",onMenuLinkClick);

        });

        function onMenuLinkClick(e){
            const menuLink=e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if(iconMenu.classList.contains('_active')){
                    document.body.classList.remove('_lock');
                        iconMenu.classList.remove('_active');
                        MenuBody.classList.remove('_active');
                 }
                
                
                
                            window.scrollTo({
                                top:gotoBlockValue,
                                behavior: "smooth"
                            });
                 e.preventDefault();
                    }
                 }
                }




                