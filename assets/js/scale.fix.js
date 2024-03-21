(function(document) {

     const gradientDiv = document.querySelector('.radial-gradient');
     gradientDiv.addEventListener('mousemove', event => {
       windowWidth = window.innerWidth;
       windowHeight = window.innerHeight;

          console.log(windowWidth);
          console.log(windowHeight);
          
       mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
       mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

          console.log(mouseXpercentage);
          console.log(mouseYpercentage);
          
       gradientDiv.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(29, 78, 216, 0.15), transparent 80%';
     });
     
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };

    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);
