(function($){
  
  (function(){
    $('.hamburger-icon').click(function(){
      $(this).toggleClass('open');
    });
  })();

  (function(){
    function mainMargin(){
      var headerHeight = $('.header').css('height');
      var main = $('.main');
      
      $(main).css('margin-top', headerHeight);
    }

    mainMargin();
    $(window).resize(function(){
      mainMargin();
    })
  })();

})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XHJcbiAgXHJcbiAgKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuaGFtYnVyZ2VyLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuICAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIG1haW5NYXJnaW4oKXtcclxuICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5jc3MoJ2hlaWdodCcpO1xyXG4gICAgICB2YXIgbWFpbiA9ICQoJy5tYWluJyk7XHJcbiAgICAgIFxyXG4gICAgICAkKG1haW4pLmNzcygnbWFyZ2luLXRvcCcsIGhlYWRlckhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbk1hcmdpbigpO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICBtYWluTWFyZ2luKCk7XHJcbiAgICB9KVxyXG4gIH0pKCk7XHJcblxyXG59KShqUXVlcnkpOyJdfQ==
