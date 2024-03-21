(function(document) {

     const changeRadialGradient = function() {

          const gradientDiv = document.querySelector('.radial-gradient');
          windowWidth = window.innerWidth;
          windowHeight = window.innerHeight;

          const rect = gradientDiv.getBoundingClientRect();
            const x = gradientDiv.clientX - rect.left;
            const y = gradientDiv.clientY - rect.top;
          console.log(rect);
          console.log(x);
          console.log(y);
          mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
          mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

          gradientDiv.style.background = 'radial-gradient(600px at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(29, 78, 216, 0.15), transparent 80%';
     };
     
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

     window.addEventListener('load', function() {
        window.addEventListener("mousemove", changeRadialGradient, false);
     });      
})(document);
