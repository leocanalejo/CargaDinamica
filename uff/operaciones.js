function sumar(a, b) {
    console.log(a + b);
};

/*    function restar(a, b) {
 console.log(a-b);
 };*/

function dl(u, f) {
    var x = document.getElementById(u);
    if (!x) {
        var h = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.async = false;
        s.src = u;
        s.id = u;
        s.onload = s.onreadystatechange = function () {
            f()
        };
        h.insertBefore(s, h.firstChild);
    } else {
        f()
    }
}

function restar(a, b) {
    /*$.getScript("uff/restarX.js", function() {
     restarX(a,b);
     }
     );*/
    dl('uff/restarX.js', function () {
        restarX(a, b)
    });
}

