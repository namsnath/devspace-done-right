
setTimeout(init,2000);

function init() {

    // $('.navbar').hide().fadeIn();


    $(function() {

            $('#pagepiling').pagepiling({
                menu: null,
                direction: 'vertical',
                verticalCentered: true,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: 'swing',
                loopBottom: false,
                loopTop: false,
                css3: true,
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#000',
                    'position': 'right',
                    'tooltips':['Landing','What To Expect','Speakers','Codespace','Sponsors','Register','FAQ','Meet Us']
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: true,
                sectionSelector: '.section',
                animateAnchor: false,

                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
        });     



        $.fn.pagepiling.moveSectionDown();
        setTimeout(deleteNode,200);
        $('.navbar').css("display","block");
    
    });
}

function deleteNode() {
    $('#intro-section').css("display","none");
    $.fn.pagepiling.moveSectionUp();
}