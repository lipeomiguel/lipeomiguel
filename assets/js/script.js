function OpenMenuMobile(){
    let menu = document.querySelectorAll('[id^="header-menu-mobile"]')
    menu.forEach((element)=>{
        element.addEventListener('click',()=>{
            var menu_id = element.getAttribute('id');
            var menu_header = document.querySelector('header');
            var menu_open = document.querySelector('[id="header-menu-mobile-open"]');
            var menu_close = document.querySelector('[id="header-menu-mobile-close"]');
            var menu_mobile = document.querySelector('[class="header-menu-mobile"]');
            if(menu_id=="header-menu-mobile-open"){
                menu_open.style.display = "none";
                menu_close.style.display = "flex";
                menu_mobile.style.display = "inline-block";
                menu_header.style.background = "#fafafa";
                menu_header.style.borderBottom = "1px solid #efefef";
            }else{
                menu_close.style.display = "none";
                menu_mobile.style.display = "none";
                menu_open.style.display = "flex";
                menu_header.style.background = "#fff";
                menu_header.style.borderBottom = "0px solid transparent";
            }
        });
    })
}