/* eslint-disable */ ! function (a) {
  var e, n = '<svg><symbol id="icon-bofanganniu" viewBox="0 0 1024 1024"><path d="M927.870095 571.688039 167.320423 1014.160886C121.562471 1041.981153 61.44 1007.279555 61.44 954.218179L61.44 68.595037C63.693916 16.802233 124.631347-17.041827 171.276012 8.961322L928.382003 451.43039C974.037627 479.202079 974.037627 543.611136 927.870095 571.688039Z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M268.97201558 114.31784297c73.21218086 0 132.56071902 59.34853814 132.56071901 132.560719v530.24287606c0 73.21218086-59.34853814 132.56071902-132.56071901 132.560719s-132.56071902-59.34853814-132.56071901-132.560719V246.87856197c0-73.21218086 59.34853814-132.56071902 132.56071901-132.560719z m486.05596884 0c73.21218086 0 132.56071902 59.34853814 132.56071901 132.560719v530.24287606c0 73.21218086-59.34853814 132.56071902-132.56071901 132.560719s-132.56071902-59.34853814-132.56071901-132.560719V246.87856197c0-73.21218086 59.34853814-132.56071902 132.56071901-132.560719z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  } ! function (e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function () {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (o = e, i = a.document, c = !1, (d = function () {
      try {
        i.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(d, 50)
      }
      n()
    })(), i.onreadystatechange = function () {
      "complete" == i.readyState && (i.onreadystatechange = null, n())
    });

    function n() {
      c || (c = !0, o())
    }
    var o, i, c, d
  }(function () {
    var e, t;
    (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
      t.firstChild ? function (e, t) {
        t.parentNode.insertBefore(e, t)
      }(e, t.firstChild) : t.appendChild(e)
    }(t, document.body))
  })
}(window);

// export default {
//   iconfont: this
// }
