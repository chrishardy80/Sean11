$(document).ready(function() {
  var page = "home";
  $('#scrollinnertwo').css('height', 0 + "vh");
  $('#about, #contact').hide();
  $('#arrowleft, #paragraphone, #paragraphonepointone, #paragraphtwo, #casarotto, #wme').css("opacity", 0);
  let top;
  let offset;
  let bodyHeight;
  let scrollHeightPX = $('#about').css('height').slice(0, -2) - ($(window).height()-360);
  let scrollHeightVH = scrollHeightPX/$(window).height()*100;
  var headerscroll;

  if ($(window).height() > 650) {
    bodyHeight = $(window).height()-$('body').css('padding-top').slice(0, -2)-$('body').css('padding-bottom').slice(0, -2);
    backgroundHeight = "90vh";
    $('#background').css('bottom', '0');
    $('#sideheader').show();
  }
  else {
    bodyHeight = 650;
    backgroundHeight = bodyHeight*0.9 + "px";
    $('#background').css('bottom', 'unset');
    $('#background').css('top', '71.703px');
    $('#sideheader').hide();
  }
  var centreImage = ($(window).width()/2)-($('#background').css("width").slice(0, -2)/2);
  var centreNav = ($(window).width()/2)-($('#navigation').css("width").slice(0, -2)/2);
  var positionSideHeader = (($(window).width()/2)-($('#sideheader').css("width").slice(0, -2)))*0.8;
  var positionRightArrowHorizontal = ($(window).width()/7);
  var positionRightArrowVertical = ($('#background').css("height").slice(0, -2)*0.08);
  var widthContact = centreImage;


  $('body').css("height", bodyHeight + "px");
  $('#background').css("height", backgroundHeight);
  $('#sideheader').css("left", positionSideHeader  + "px");
  $('#arrowright').css("right", positionRightArrowHorizontal + "px");
  $('#arrowleft').css("left", positionRightArrowHorizontal + "px");
  $('#arrowright, #arrowleft').css("bottom", positionRightArrowVertical + "px");
  var heightAbout = $('#arrowright').css("top").slice(0, -2) - $('#topbar').css("height").slice(0, -2)- 90;
  $('#about').css("height", heightAbout + "px");
  $('#contact').css("width", widthContact + "px");

  if(($(window).width()/2) > (parseFloat($('#navigation').css("width").slice(0, -2)/2)) + parseFloat($('.title').css("width").slice(0, -2)) +60 ) {
    $('#navigation').css("left", centreNav + "px");
    $('#navigation').css("right", "unset");
    $('#socialmedia').show();
  }
  else {
    $('#navigation').css("right", "40px");
    $('#navigation').css("left", "unset");
    $('#socialmedia').hide();
  }

  function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}





  $(window).on("scroll resize", function(){


    headerscroll = (inViewport($('#mobilelanding'))/$(window).height());
    offset = 120/$(window).height()*100;
    top = (inViewport($('#scrollinnerone')))/(inViewport($('#scroll')))*100;
    $('#about').css('top', (offset+top-100) + "vh");
    console.log(headerscroll);
    console.log($(window).height());
    var bodyHeight;
    let scrollHeightPX = $('#about').css('height').slice(0, -2) - ($(window).height()-360);
    let scrollHeightVH = scrollHeightPX/$(window).height()*100;
    if ($(window).height() > 650) {
      bodyHeight = $(window).height()-$('body').css('padding-top').slice(0, -2)-$('body').css('padding-bottom').slice(0, -2);
      backgroundHeight = "90vh";
      $('#background').css('bottom', '0');
      $('#sideheader').show();
    }
    else {
      bodyHeight = 650;
      backgroundHeight = bodyHeight*0.9 + "px";
      $('#background').css('bottom', 'unset');
      $('#background').css('top', '71.703px');
      $('#sideheader').hide();
    }
    var centreImage = ($(window).width()/2)-($('#background').css("width").slice(0, -2)/2);
    var centreNav = ($(window).width()/2)-($('#navigation').css("width").slice(0, -2)/2);
    var positionSideHeader = (($(window).width()/2)-($('#sideheader').css("width").slice(0, -2)))*0.8;
    var positionRightArrowHorizontal = ($(window).width()/7);
    var positionRightArrowVertical = ($('#background').css("height").slice(0, -2)*0.08);
    var widthParagraphOne = (centreImage*1.2) - $('body').css("padding-left").slice(0, -2);
    var heightParagraphOne = $('#sideheader').css("top").slice(0, -2)-$('#topbar').css("height").slice(0, -2)-$('body').css("padding-top").slice(0, -2);
    var widthParagraphOneP = centreImage - $('body').css("padding-left").slice(0, -2);
    var widthParagraphTwoP = (centreImage);
    var widthParagraphTwo = (centreImage)*1.2;
    var heightParagraphOnePointOne = parseFloat($('#sideheader').css("top").slice(0, -2)) + parseFloat($('#sideheader').css("height").slice(0, -2)/2);
    var widthContact = centreImage;


    $('body').css("height", bodyHeight + "px");
    $('#background').css("height", backgroundHeight);
    //$('#background').css("left", centreImage + "px");
    $('#sideheader').css("left", positionSideHeader  + "px");
    $('#arrowright').css("right", positionRightArrowHorizontal + "px");
    $('#arrowleft').css("left", positionRightArrowHorizontal + "px");
    $('#arrowright, #arrowleft').css("bottom", positionRightArrowVertical + "px");
    var heightParagraphTwo = $('#arrowright').css("top").slice(0, -2) - $('#topbar').css("height").slice(0, -2)- 60;
    $('#contact').css("width", widthContact + "px");

    if(($(window).width()/2) > (parseFloat($('#navigation').css("width").slice(0, -2)/2)) + parseFloat($('.title').css("width").slice(0, -2)) +60 ) {
      $('#navigation').css("left", centreNav + "px");
      $('#navigation').css("right", "unset");
      $('#socialmedia').show();

    }
    else {
      $('#navigation').css("right", "40px");
      $('#navigation').css("left", "unset");
      $('#socialmedia').hide();
    }
  });
  $("#arrowright").click(function(){
    if (page == "home") {
      $('#scrollinnertwo').css('height', scrollHeightVH + "vh");
      $('#dotone').html("<i class=\"far fa-circle\"></i>");
      $('#dottwo').html("<i class=\"fas fa-circle\"></i>");
      $('#homenav').addClass("inactive");
      $('#aboutnav').addClass("active");
      $('#homenav').removeClass("active");
      $('#aboutnav').removeClass("inactive");
      $('#about').show();
     anime({
        targets: '#paragraphone',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#paragraphonepointone',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: 300
      });
      anime({
        targets: '#paragraphtwo',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: 600
      });
      anime({
        targets: '#arrowleft',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      page = "about";
    }
    else if (page == "about") {
      $('#scrollinnertwo').css('height', 0 + "vh");
      $('#dottwo').html("<i class=\"far fa-circle\"></i>");
      $('#dotthree').html("<i class=\"fas fa-circle\"></i>");
      $('#aboutnav').addClass("inactive");
      $('#contactnav').addClass("active");
      $('#aboutnav').removeClass("active");
      $('#contactnav').removeClass("inactive");
      $('#contact').show();
      $('#about').delay(800).hide(0);
      anime({
        targets: '#arrowright',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
      anime({
         targets: '#paragraphtwo',
         opacity: 0,
         easing: 'easeInOutQuad'
       });
       anime({
         targets: '#paragraphonepointone',
         opacity: 0,
         easing: 'easeInOutQuad'

       });
       anime({
         targets: '#paragraphone',
         opacity: 0,
         easing: 'easeInOutQuad',

       });
       anime({
         targets: '#casarotto',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 600
       });
       anime({
         targets: '#wme',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 900
       });

       page = 'contact';

    }
  });

  $("#arrowleft").click(function(){
    if (page == "about") {
      $('#scrollinnertwo').css('height', 0 + "vh");
      $('#dotone').html("<i class=\"fas fa-circle\"></i>");
      $('#dottwo').html("<i class=\"far fa-circle\"></i>");
      $('#homenav').addClass("active");
      $('#aboutnav').addClass("inactive");
      $('#homenav').removeClass("inactive");
      $('#aboutnav').removeClass("active");

     anime({
        targets: '#paragraphtwo',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#paragraphonepointone',
        opacity: 0,
        easing: 'easeInOutQuad',
        delay: 300
      });
      anime({
        targets: '#paragraphone',
        opacity: 0,
        easing: 'easeInOutQuad',
        delay: 600
      });
      anime({
        targets: '#arrowleft',
        opacity: 0,
        easing: 'easeInOutQuad'

      });
      page = "home";
    }
    else if (page == "contact") {
      $('#scrollinnertwo').css('height', scrollHeightVH + "vh");
      $('#dottwo').html("<i class=\"fas fa-circle\"></i>");
      $('#dotthree').html("<i class=\"far fa-circle\"></i>");
      $('#aboutnav').addClass("active");
      $('#contactnav').addClass("inactive");
      $('#aboutnav').removeClass("inactive");
      $('#contactnav').removeClass("active");
      $('#about').delay(900).show(0);
      $('#contact').delay(1300).hide(0);
      anime({
        targets: '#arrowright',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#casarotto, #wme',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
      anime({
         targets: '#paragraphone',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 900
       });
       anime({
         targets: '#paragraphonepointone',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 1200
       });
       anime({
         targets: '#paragraphtwo',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 1500
       });
      page = "about";
    }
  });

  $("#homenav").click(function(){
    anime({
      targets: '#arrowleft',
      opacity: 0,
      easing: 'easeInOutQuad'
    });
    $('#scrollinnertwo').css('height', 0 + "vh");
    $('#dotone').html("<i class=\"fas fa-circle\"></i>");
    $('#dottwo').html("<i class=\"far fa-circle\"></i>");
    $('#dotthree').html("<i class=\"far fa-circle\"></i>");
    $('#homenav').addClass("active");
    $('#aboutnav').addClass("inactive");
    $('#contactnav').addClass("inactive");
    $('#homenav').removeClass("inactive");
    $('#aboutnav').removeClass("active");
    $('#contactnav').removeClass("active");

    if (page == "about") {

      $('#about').delay(1400).hide(0);
     anime({
        targets: '#paragraphtwo',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#paragraphonepointone',
        opacity: 0,
        easing: 'easeInOutQuad',
        delay: 300
      });
      anime({
        targets: '#paragraphone',
        opacity: 0,
        easing: 'easeInOutQuad',
        delay: 600
      });

    }
    else if (page == "contact") {

      $('#contact').delay(1300).hide(0);
      anime({
        targets: '#arrowright',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#casarotto, #wme',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
    }
    page = "home";

  });

  $("#aboutnav").click(function(){
      $('#scrollinnertwo').css('height', scrollHeightVH + "vh");
      $('#dotone').html("<i class=\"far fa-circle\"></i>");
      $('#dottwo').html("<i class=\"fas fa-circle\"></i>");
      $('#dotthree').html("<i class=\"far fa-circle\"></i>");
      $('#homenav').addClass("inactive");
      $('#aboutnav').addClass("active");
      $('#contactnav').addClass("inactive");
      $('#homenav').removeClass("active");
      $('#aboutnav').removeClass("inactive");
      $('#contactnav').removeClass("active");

    if(page == 'home' ) {
    $('#about').show();
     anime({
        targets: '#paragraphone',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#paragraphonepointone',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: 300
      });
      anime({
        targets: '#paragraphtwo',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: 600
      });
      anime({
        targets: '#arrowleft',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
    }
    else if (page == "contact") {
      $('#about').delay(900).show(0);
      $('#contact').delay(1300).hide(0);
      anime({
        targets: '#arrowright',
        opacity: 1,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '#casarotto, #wme',
        opacity: 0,
        easing: 'easeInOutQuad'
      });
      anime({
         targets: '#paragraphone',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 900
       });
       anime({
         targets: '#paragraphonepointone',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 1200
       });
       anime({
         targets: '#paragraphtwo',
         opacity: 1,
         easing: 'easeInOutQuad',
         delay: 1500
       });
    }
    page = "about";
  });
  $("#contactnav").click(function(){
    anime({
      targets: '#arrowright',
      opacity: 0,
      easing: 'easeInOutQuad'
    });
    $('#scrollinnertwo').css('height', 0 + "vh");
    $('#contact').show();
    $('#dotone').html("<i class=\"far fa-circle\"></i>");
    $('#dottwo').html("<i class=\"far fa-circle\"></i>");
    $('#dotthree').html("<i class=\"fas fa-circle\"></i>");
    $('#homenav').addClass("inactive");
    $('#aboutnav').addClass("inactive");
    $('#contactnav').addClass("active");
    $('#homenav').removeClass("active");
    $('#aboutnav').removeClass("active");
    $('#contactnav').removeClass("inactive");

  if(page == 'home') {
    anime({
      targets: '#arrowleft',
      opacity: 1,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '#casarotto',
      opacity: 1,
      easing: 'easeInOutQuad'

    });
    anime({
      targets: '#wme',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 300
    });

  }
  else if (page == 'about') {
    $('#about').delay(800).hide(0);
    anime({
      targets: '#arrowright',
      opacity: 0,
      easing: 'easeInOutQuad'
    });
    anime({
       targets: '#paragraphtwo',
       opacity: 0,
       easing: 'easeInOutQuad'
     });
     anime({
       targets: '#paragraphonepointone',
       opacity: 0,
       easing: 'easeInOutQuad'

     });
     anime({
       targets: '#paragraphone',
       opacity: 0,
       easing: 'easeInOutQuad',

     });
     anime({
       targets: '#casarotto',
       opacity: 1,
       easing: 'easeInOutQuad',
       delay: 600
     });
     anime({
       targets: '#wme',
       opacity: 1,
       easing: 'easeInOutQuad',
       delay: 900
     });
  }
  page = "contact";
  });

  $('#mobilebars').on('click',
  function() {
    $('.mobilenav').animate({'right': '0'});
});

$('#mobile').click(function(e) {
  if( $(e.target).closest("#mobilebars").length > 0 ) {
    return false;
}
    $('.mobilenav').animate({'right': '-190'});
});


$(window).scroll($.debounce( 250, true, function(){
  anime({

targets: '#mobilebanner',
translateY: -80,
easing: 'easeInOutQuad'
});
}));
$(window).scroll($.debounce( 250, function(){
  anime({

targets: '#mobilebanner',
translateY: 0,
easing: 'easeInOutQuad'
});
}));


});
