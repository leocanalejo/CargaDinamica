//!(function () {
    function sumar(a, b) {
        console.log(a+b);
    };

/*    function restar(a, b) {
        console.log(a-b);
    };*/

    function loadJS(js) {
        var s = document.createElement("script");
        s.language = "javascript";
        s.type = "text/javascript";
        s.url = js;
        document.body.appendChild(s);
    }

    function j(u) {
        var h = document.getElementsByTagName('head')[0], s = document.createElement('script');
        s.async = true; s.src = u;
        s.onload = s.onreadystatechange = function () {
            if (!s.readyState || /loaded|complete/.test(s.readyState)) {
                s.onload = s.onreadystatechange = null; if (h && s.parentNode) { h.removeChild(s) } s = undefined;
                //if (c) { c() }
            }
        };
        h.insertBefore(s, h.firstChild);
    }

    function restar(a, b) {
/*        $.getScript("uff/restar.js", function() {
                restarX(a,b);
            }
        );*/
        /*    var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'uff/restar.js';
            head.appendChild(script);
            restarX(a,b);*/
        //restar.restarX(a,b);

        //loadJS('uff/restar.js');
        j('uff/restar.js');

        restarX(a,b);
    }
//})();
