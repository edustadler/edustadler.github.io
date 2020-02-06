 window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,g,w,p,v,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var g=e.pageYOffset;d.header&&!w&&(w=document.querySelector(d.header)),p||(p=l(w));var v,y,A,E=f?t:c(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),S=E-g,I=u(),q=0,F=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(g<o&&e.innerHeight+a)>=I)return b.cancelScroll(),s(t,o,f),d.after(t,i),v=null,!0},O=function(t){v||(v=t),q+=t-v,y=q/parseInt(d.speed,10),y=y>1?1:y,A=g+S*r(d,y),e.scrollTo(0,Math.floor(A)),F(A,E)||(e.requestAnimationFrame(O),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(O)}};var A=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,g),h=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(i))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=a(decodeURIComponent(g.hash))}catch(e){n=a(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-down";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),A()))}},S=function(e){v||(v=setTimeout((function(){v=null,p=l(w)}),66))};return b.destroy=function(){m&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",S,!1),b.cancelScroll(),m=null,h=null,g=null,w=null,p=null,v=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),w=m.header?document.querySelector(m.header):null,p=l(w),document.addEventListener("click",E,!1),e.addEventListener("hashchange",A,!1),w&&e.addEventListener("resize",S,!1))},b.init(f),b}}));

 var scroll = new SmoothScroll('a[href*="#"]');

 //=====Parallax=====//

 function scrollBanner() {
   var scrollPos;
   var textIntro = document.querySelector('.ttext');;
   scrollPos = window.scrollY;

   if (scrollPos <= 600) {
     headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
     headerText.style.opacity = 1 - (scrollPos/600);

     textIntro.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
     textIntro.style.opacity = 1 - (scrollPos/600);
   }
 }

 window.addEventListener('scroll', scrollBanner);
 ;


 //-------------------//


 $(function(){
   for(i=0;i<4;i++){
     $('.buzzi_wrapper .ttext span').eq(0).clone().prependTo('.buzzi_wrapper .ttext');
   }
   for(i=0;i<10;i++){
     $('.buzzi_wrapper .sccanline').eq(0).clone().appendTo('.buzzi_wrapper');
   }
 });


 //-------------------//

 var owl = $('.owl-carousel');
 owl.owlCarousel({
   items:4,
   loop:true,
   margin:10,
   autoplay:true,
   autoplayTimeout:1000,
   autoplayHoverPause:true
 });
 $('.play').on('click',function(){
   owl.trigger('play.owl.autoplay',[1000])
 })
 $('.stop').on('click',function(){
   owl.trigger('stop.owl.autoplay')
 })

 //-------------------//
 $(function(){
   for(i=0;i<4;i++){
     $('.buzzz_wrapper .texxt span').eq(0).clone().prependTo('.buzzz_wrapper .texxt');
   }
   for(i=0;i<10;i++){
     $('.buzzz_wrapper .sscanline').eq(0).clone().appendTo('.buzzz_wrapper');
   }
 });


 $(function(){
   for(i=0;i<4;i++){
     $('.buzz_wrapper .text span').eq(0).clone().prependTo('.buzz_wrapper .text');
   }
   for(i=0;i<10;i++){
     $('.buzz_wrapper .scanline').eq(0).clone().appendTo('.buzz_wrapper');
   }
 });

 //-----------------//

 $(function() {
  $('.scroll-down').click (function() {
    $('html').animate({scrollTop: $('#introduction').offset() }, 'slow');
    return false;
  });
 });


 $( function() {
     $( ".gllitch" ).mgGlitch({
           // set 'true' to stop the plugin
       destroy : false, 
           // set 'false' to stop glitching
           glitch: true, 
           // set 'false' to stop scaling
           scale: true, 
           // set 'false' to stop glitch blending
           blend : true, 
           // select blend mode type
           blendModeType : 'hue',
           // set min time for glitch 1 elem
           glitch1TimeMin : 200, 
           // set max time for glitch 1 elem
           glitch1TimeMax : 400,
           // set min time for glitch 2 elem
           glitch2TimeMin : 10, 
           // set max time for glitch 2 elem
           glitch2TimeMax : 100, 
     });
 });

 ! function() {
     "use strict";
     var t, i = {
             screen: {
                 elem: null,
                 callback: null,
                 ctx: null,
                 width: 0,
                 height: 0,
                 left: 0,
                 top: 0,
                 init: function(t, i, s) {
                     return this.elem = document.getElementById(t), this.callback = i || null, "CANVAS" == this.elem.tagName && (this.ctx = this.elem.getContext("2d")), window.addEventListener("resize", function() {
                         this.resize()
                     }.bind(this), !1), this.elem.onselectstart = function() {
                         return !1
                     }, this.elem.ondrag = function() {
                         return !1
                     }, s && this.resize(), this
                 },
                 resize: function() {
                     var t = this.elem;
                     for (this.width = t.offsetWidth, this.height = t.offsetHeight, this.left = 0, this.top = 0; null != t; t = t.offsetParent) this.left += t.offsetLeft, this.top += t.offsetTop;
                     this.ctx && (this.elem.width = this.width, this.elem.height = this.height), this.callback && this.callback()
                 }
             }
         },
         s = function(t, i) {
             this.x = t, this.y = i, this.magnitude = t * t + i * i, this.computed = 0, this.force = 0
         };
     s.prototype.add = function(t) {
         return new s(this.x + t.x, this.y + t.y)
     };
     var h = function(t) {
         var i = .1,
             h = 1.5;
         this.vel = new s((Math.random() > .5 ? 1 : -1) * (.2 + .25 * Math.random()), (Math.random() > .5 ? 1 : -1) * (.2 + Math.random())), this.pos = new s(.2 * t.width + Math.random() * t.width * .6, .2 * t.height + Math.random() * t.height * .6), this.size = t.wh / 15 + (1.4 * Math.random() + .1) * (t.wh / 15), this.width = t.width, this.height = t.height
     };
     h.prototype.move = function() {
         this.pos.x >= this.width - this.size ? (this.vel.x > 0 && (this.vel.x = -this.vel.x), this.pos.x = this.width - this.size) : this.pos.x <= this.size && (this.vel.x < 0 && (this.vel.x = -this.vel.x), this.pos.x = this.size), this.pos.y >= this.height - this.size ? (this.vel.y > 0 && (this.vel.y = -this.vel.y), this.pos.y = this.height - this.size) : this.pos.y <= this.size && (this.vel.y < 0 && (this.vel.y = -this.vel.y), this.pos.y = this.size), this.pos = this.pos.add(this.vel)
     };
     var e = function(t, i, e, o, n) {
         this.step = 5, this.width = t, this.height = i, this.wh = Math.min(t, i), this.sx = Math.floor(this.width / this.step), this.sy = Math.floor(this.height / this.step), this.paint = !1, this.metaFill = r(t, i, t, o, n), this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1], this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0], this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1], this.grid = [], this.balls = [], this.iter = 0, this.sign = 1;
         for (var a = 0; a < (this.sx + 2) * (this.sy + 2); a++) this.grid[a] = new s(a % (this.sx + 2) * this.step, Math.floor(a / (this.sx + 2)) * this.step);
         for (var l = 0; l < e; l++) this.balls[l] = new h(this)
     };
     e.prototype.computeForce = function(t, i, s) {
         var h, e = s || t + i * (this.sx + 2);
         if (0 === t || 0 === i || t === this.sx || i === this.sy) h = .6 * this.sign;
         else {
             h = 0;
             for (var r = this.grid[e], o = 0, n; n = this.balls[o++];) h += n.size * n.size / (-2 * r.x * n.pos.x - 2 * r.y * n.pos.y + n.pos.magnitude + r.magnitude);
             h *= this.sign
         }
         return this.grid[e].force = h, h
     }, e.prototype.marchingSquares = function(t) {
         var i = t[0],
             s = t[1],
             h = t[2],
             e = i + s * (this.sx + 2);
         if (this.grid[e].computed === this.iter) return !1;
         for (var r, o = 0, n = 0; n < 4; n++) {
             var l = i + this.ix[n + 12] + (s + this.ix[n + 16]) * (this.sx + 2),
                 d = this.grid[l].force;
             (d > 0 && this.sign < 0 || d < 0 && this.sign > 0 || !d) && (d = this.computeForce(i + this.ix[n + 12], s + this.ix[n + 16], l)), Math.abs(d) > 1 && (o += Math.pow(2, n))
         }
         if (15 === o) return [i, s - 1, !1];
         5 === o ? r = 2 === h ? 3 : 1 : 10 === o ? r = 3 === h ? 0 : 2 : (r = this.mscases[o], this.grid[e].computed = this.iter);
         var p = this.step / (Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 2] + (s + this.ply[4 * r + 2]) * (this.sx + 2)].force) - 1) / Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 3] + (s + this.ply[4 * r + 3]) * (this.sx + 2)].force) - 1) + 1);
         return a.lineTo(this.grid[i + this.plx[4 * r] + (s + this.ply[4 * r]) * (this.sx + 2)].x + this.ix[r] * p, this.grid[i + this.plx[4 * r + 1] + (s + this.ply[4 * r + 1]) * (this.sx + 2)].y + this.ix[r + 4] * p), this.paint = !0, [i + this.ix[r + 4], s + this.ix[r + 8], r]
     }, e.prototype.renderMetaballs = function() {
         for (var t = 0, i; i = this.balls[t++];) i.move();
         for (this.iter++, this.sign = -this.sign, this.paint = !1, a.fillStyle = this.metaFill, a.beginPath(), t = 0; i = this.balls[t++];) {
             var s = [Math.round(i.pos.x / this.step), Math.round(i.pos.y / this.step), !1];
             do {
                 s = this.marchingSquares(s)
             } while (s);
             this.paint && (a.fill(), a.closePath(), a.beginPath(), this.paint = !1)
         }
     };
     var r = function(t, i, s, h, e) {
             var r = a.createRadialGradient(t / 1, i / 1, 0, t / 1, i / 1, s);
             return r.addColorStop(0, h), r.addColorStop(1, e), r
         },
         o = function() {
             requestAnimationFrame(o), a.clearRect(0, 0, n.width, n.height), t.renderMetaballs()
         },
         n = i.screen.init("liquid", null, !0),
         a = n.ctx;
     n.resize(), t = new e(n.width, n.height, 6, "#811b9a", "#811b9a"), o()
 }();
 $(document).ready(documentReady);

function documentReady()
{

  var characterCollection   = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];

  var currentText       = $(".effect-text-container h1").text();

  var currentTextCollection   = new Array();

  var characterCount      = 0;

  var characterSpeed      = 500;

  pushCurrentTextChrachters();

  function pushCurrentTextChrachters () {

    for(var i = 0; i < currentText.length; i++)
    {

      var currentCharacter = currentText.slice(i, i+1);

      currentTextCollection.push(currentCharacter);

    }

  }

  var characterCountIncreaseInterval = setInterval(characterCountIncrease, characterSpeed);

  function characterCountIncrease () {

    if (characterCount == currentTextCollection.length)
    {

      clearInterval(characterCountIncreaseInterval);

      clearInterval(setRandomTextInterval);

    }

    characterCount++;

  }

  function getRandomText () {

    var result = "";

    if(characterCount == 0)
    {

      for(var i = 0; i < currentTextCollection.length; i++)
      {

        var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

        result += randomCharacter;

      }

    }
    else
    {

      result = currentText.slice(0, characterCount);

      for(var i = 0; i < currentTextCollection.length - characterCount; i++)
      {

        var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

        result += randomCharacter;

      }

    }

    return result;

  }

  var setRandomTextInterval = setInterval(setRandomText, 50);

  function setRandomText () {

    console.log(getRandomText());

    $(".effect-text-container h1").text(getRandomText());

  }

}
// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1, 'reset': true });
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});





//===============================

(function scrollReveal() {
  window.sr = ScrollReveal();
  
  sr.reveal('.marina', {
    scale      : 1,
    easing     : 'ease-in',
    origin     : 'left',
    reset      : false,
    scale      : 0.9,
    viewFactor : 0.2,
    viewOffset: { top: 80, right: 0, bottom: 0, left: 0 },
    afterReveal  : revealChildren,
  }, 150);
  
    var revealChildren = sr.reveal('.card1', {
    scale      : 1,
    origin     : 'right',
    reset      : false,
    easing     : 'ease-in',
    viewFactor : 0.8,
    useDelay: 'always',
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 },
  }, 75);
     var revealChildren = sr.reveal('.playerxd', {
    scale      : 1,
    origin     : 'bottom',
    reset      : false,
    easing     : 'ease-in',
    viewFactor : 0.2,
    useDelay: 'always',
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 },
  }, 75);
})();



 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
