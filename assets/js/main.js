
$(window).on('load', function () {
  
  init();
  
});

function init() {
  


    // $('.navbar').hide().fadeIn();

    $(function() {

      // if ( $(window).width() > 768 ) {
  
            $('#pagepiling').pagepiling({
                menu: null,
                direction: 'vertical',
                verticalCentered: true,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: 'swing',
                css3: true,
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#000',
                    'position': 'right'
                },
                sectionSelector: '.section',
                animateAnchor: false,

                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
        });
      
      

        $('#text-hide').css("display","block");

        $.fn.pagepiling.moveSectionDown();
        setTimeout(deleteNode,200);
        $('.navbar').css("display","block");
      
      // else {
      //   $('#intro-section').css("display","none");    
      //   $('#text-hide').css("display","block");
      //   $('.navbar').css("display","block");
      // }
    });
}

function deleteNode() {
    $('#intro-section').css("display","none");
    $.fn.pagepiling.moveSectionUp();
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var x=0;
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
    x++;
    if(x%2!=0){
      $('.extend-right').addClass('transformHack');    }
    else {
      $('.extend-right').removeClass('transformHack');
    }

	});

  $("#bottom-arrow").click(function(){
    $.fn.pagepiling.moveSectionDown();
  });

  $('#landing_register').click(function(){
    $.fn.pagepiling.moveTo(6);
  });
});
