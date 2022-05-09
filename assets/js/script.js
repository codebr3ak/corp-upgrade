 // -----------menu click js----------

      $(document).ready(function(){
        $('.menu-toggle').click(function(){
          $('.menu-burger').toggleClass('active')
          $('.menu').toggleClass('active')
        });
      });

// ****header scroll function****

      $( () => {
    
        //On Scroll Functionality
        $(window).scroll( () => {
          var windowTop = $(window).scrollTop();
          windowTop > 50 ? $('header').addClass('og-hf') : $('header').removeClass('og-hf');
        });
      });

      var docWidth = document.documentElement.offsetWidth;

      [].forEach.call(
        document.querySelectorAll('*'),
        function(el) {
          if (el.offsetWidth > docWidth) {
            console.log(el);
          }
        }
      );

// new menu click
        var menuList = document.getElementById('menuList');

        menuList.style.maxHeight = "0px";

        function togglemenu(){

          if(menuList.style.maxHeight == "0px")
          {
            menuList.style.maxHeight = "130px"
          }
          else
          {
            menuList.style.maxHeight = "0px"
          }
        }