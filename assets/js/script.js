var menu_header = document.querySelectorAll(".link_menu");
var menu_section_header = document.querySelectorAll("[class^='btn-section-menu']");
menu_header.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        var get_menu_show = document.querySelector('.menu-show');
        get_menu_show.className = "link_menu";
        item.className = " menu-show";
        if(item.getAttribute("id")=="About"){
            var about = document.querySelector('.btn-section-menu-about').setAttribute("id","show_menu_section");
            var service = document.querySelector('.btn-section-menu-service').removeAttribute("id");
            var portfolio = document.querySelector('.btn-section-menu-portfolio').removeAttribute("id");
            var testimonials = document.querySelector('.btn-section-menu-test').removeAttribute("id");
            var Contato = document.querySelector('.btn-section-menu-contato').removeAttribute("id");
        }else if(item.getAttribute("id")=="Services"){
            var about = document.querySelector('.btn-section-menu-about').removeAttribute("id");
            var service = document.querySelector('.btn-section-menu-service').setAttribute("id","show_menu_section");
            var portfolio = document.querySelector('.btn-section-menu-portfolio').removeAttribute("id");
            var testimonials = document.querySelector('.btn-section-menu-test').removeAttribute("id");
            var Contato = document.querySelector('.btn-section-menu-contato').removeAttribute("id");
        }else if(item.getAttribute("id")=="Portfolio"){
            var about = document.querySelector('.btn-section-menu-about').removeAttribute("id");
            var service = document.querySelector('.btn-section-menu-service').removeAttribute("id");
            var portfolio = document.querySelector('.btn-section-menu-portfolio').setAttribute("id","show_menu_section");
            var testimonials = document.querySelector('.btn-section-menu-test').removeAttribute("id");
            var Contato = document.querySelector('.btn-section-menu-contato').removeAttribute("id");
        }else if(item.getAttribute("id")=="Testimonials"){
            var about = document.querySelector('.btn-section-menu-about').removeAttribute("id");
            var service = document.querySelector('.btn-section-menu-service').removeAttribute("id");
            var portfolio = document.querySelector('.btn-section-menu-portfolio').removeAttribute("id");
            var testimonials = document.querySelector('.btn-section-menu-test').setAttribute("id","show_menu_section");
            var Contato = document.querySelector('.btn-section-menu-contato').removeAttribute("id");
        }else if(item.getAttribute("id")=="Contato"){
            var about = document.querySelector('.btn-section-menu-about').removeAttribute("id");
            var service = document.querySelector('.btn-section-menu-service').removeAttribute("id");
            var portfolio = document.querySelector('.btn-section-menu-portfolio').removeAttribute("id");
            var testimonials = document.querySelector('.btn-section-menu-test').removeAttribute("id");
            var Contato = document.querySelector('.btn-section-menu-contato').setAttribute("id","show_menu_section");
        }
    });
});
menu_section_header.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        var show_menu_section = document.querySelector('#show_menu_section');
        show_menu_section.removeAttribute("id")
        item.setAttribute("id", "show_menu_section");
        var show_menu_section_attr = item.getAttribute('class');
        if(show_menu_section_attr=="btn-section-menu-about"){
            var about = document.querySelector('#About').className = "menu-show";
            var service = document.querySelector('#Services').className = "link_menu";
            var portfolio = document.querySelector('#Portfolio').className = "link_menu";
            var testimonials = document.querySelector('#Testimonials').className = "link_menu";
            var Contato = document.querySelector('#Contato').className = "link_menu";
        }else if(show_menu_section_attr=="btn-section-menu-service"){
            var about = document.querySelector('#About').className = "link_menu";
            var service = document.querySelector('#Services').className = "menu-show";
            var portfolio = document.querySelector('#Portfolio').className = "link_menu";
            var testimonials = document.querySelector('#Testimonials').className = "link_menu";
            var Contato = document.querySelector('#Contato').className = "link_menu";
        }else if(show_menu_section_attr=="btn-section-menu-portfolio"){
            var about = document.querySelector('#About').className = "link_menu";
            var service = document.querySelector('#Services').className = "link_menu";
            var portfolio = document.querySelector('#Portfolio').className = "menu-show";
            var testimonials = document.querySelector('#Testimonials').className = "link_menu";
            var Contato = document.querySelector('#Contato').className = "link_menu";
        }else if(show_menu_section_attr=="btn-section-menu-test"){
            var about = document.querySelector('#About').className = "link_menu";
            var service = document.querySelector('#Services').className = "link_menu";
            var portfolio = document.querySelector('#Portfolio').className = "link_menu";
            var testimonials = document.querySelector('#Testimonials').className = "menu-show";
            var Contato = document.querySelector('#Contato').className = "link_menu";
        }else if(show_menu_section_attr=="btn-section-menu-contato"){
            var about = document.querySelector('#About').className = "link_menu";
            var service = document.querySelector('#Services').className = "link_menu";
            var portfolio = document.querySelector('#Portfolio').className = "link_menu";
            var testimonials = document.querySelector('#Testimonials').className = "link_menu";
            var Contato = document.querySelector('#Contato').className = "menu-show";
        }
    });
});