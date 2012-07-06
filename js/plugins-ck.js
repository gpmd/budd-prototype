/*
 * Uniform Start
 */(function(e){e.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:!0,idPrefix:"uniform",resetSelector:!1,autoHide:!0},elements:[]};e.browser.msie&&e.browser.version<7?e.support.selectOpacity=!1:e.support.selectOpacity=!0;e.fn.uniform=function(t){function r(t){$el=e(t);$el.addClass($el.attr("type"));c(t)}function i(t){e(t).addClass("uniform");c(t)}function s(n){var r=e(n),i=e("<div>"),s=e("<span>");i.addClass(t.buttonClass);t.useID&&r.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+r.attr("id"));var o;if(r.is("a")||r.is("button"))o=r.text();else if(r.is(":submit")||r.is(":reset")||r.is("input[type=button]"))o=r.attr("value");o=o==""?r.is(":reset")?"Reset":"Submit":o;s.html(o);r.css("opacity",0);r.wrap(i);r.wrap(s);i=r.closest("div");s=r.closest("span");r.is(":disabled")&&i.addClass(t.disabledClass);i.bind({"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass);i.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(t){if(e(t.target).is("span")||e(t.target).is("div"))if(n[0].dispatchEvent){var r=document.createEvent("MouseEvents");r.initEvent("click",!0,!0);n[0].dispatchEvent(r)}else n[0].click()}});n.bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)}});e.uniform.noSelect(i);c(n)}function o(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide();i.addClass(t.selectClass);t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id"));var o=n.find(":selected:first");o.length==0&&(o=n.find("option:first"));s.html(o.html());n.css("opacity",0);n.wrap(i);n.before(s);i=n.parent("div");s=n.siblings("span");n.bind({"change.uniform":function(){s.text(n.find(":selected").html());i.removeClass(t.activeClass)},"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass);i.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass);i.removeClass(t.activeClass)},"keyup.uniform":function(){s.text(n.find(":selected").html())}});e(n).attr("disabled")&&i.addClass(t.disabledClass);e.uniform.noSelect(s);c(n)}function u(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide();i.addClass(t.checkboxClass);t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id"));e(n).wrap(i);e(n).wrap(s);s=n.parent();i=s.parent();e(n).css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){e(n).attr("checked")?s.addClass(t.checkedClass):s.removeClass(t.checkedClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass);i.removeClass(t.activeClass)}});e(n).attr("checked")&&s.addClass(t.checkedClass);e(n).attr("disabled")&&i.addClass(t.disabledClass);c(n)}function f(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide();i.addClass(t.radioClass);t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id"));e(n).wrap(i);e(n).wrap(s);s=n.parent();i=s.parent();e(n).css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){if(!e(n).attr("checked"))s.removeClass(t.checkedClass);else{var r=t.radioClass.split(" ")[0];e("."+r+" span."+t.checkedClass+":has([name='"+e(n).attr("name")+"'])").removeClass(t.checkedClass);s.addClass(t.checkedClass)}},"mousedown.uniform touchend.uniform":function(){e(n).is(":disabled")||i.addClass(t.activeClass)},"mouseup.uniform touchbegin.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform touchend.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass);i.removeClass(t.activeClass)}});e(n).attr("checked")&&s.addClass(t.checkedClass);e(n).attr("disabled")&&i.addClass(t.disabledClass);c(n)}function l(n){var r=e(n),i=e("<div />"),s=e("<span>"+t.fileDefaultText+"</span>"),o=e("<span>"+t.fileBtnText+"</span>");!r.css("display")=="none"&&t.autoHide&&i.hide();i.addClass(t.fileClass);s.addClass(t.filenameClass);o.addClass(t.fileBtnClass);t.useID&&r.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+r.attr("id"));r.wrap(i);r.after(o);r.after(s);i=r.closest("div");s=r.siblings("."+t.filenameClass);o=r.siblings("."+t.fileBtnClass);if(!r.attr("size")){var u=i.width();r.attr("size",u/10)}var f=function(){var e=r.val();if(e==="")e=t.fileDefaultText;else{e=e.split(/[\/\\]+/);e=e[e.length-1]}s.text(e)};f();r.css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"mousedown.uniform":function(){e(n).is(":disabled")||i.addClass(t.activeClass)},"mouseup.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass);i.removeClass(t.activeClass)}});e.browser.msie?r.bind("click.uniform.ie7",function(){setTimeout(f,0)}):r.bind("change.uniform",f);r.attr("disabled")&&i.addClass(t.disabledClass);e.uniform.noSelect(s);e.uniform.noSelect(o);c(n)}function c(t){t=e(t).get();t.length>1?e.each(t,function(t,n){e.uniform.elements.push(n)}):e.uniform.elements.push(t)}t=e.extend(e.uniform.options,t);var n=this;t.resetSelector!=0&&e(t.resetSelector).mouseup(function(){function t(){e.uniform.update(n)}setTimeout(t,10)});e.uniform.restore=function(t){t==undefined&&(t=e(e.uniform.elements));e(t).each(function(){if(e(this).is(":checkbox"))e(this).unwrap().unwrap();else if(e(this).is("select")){e(this).siblings("span").remove();e(this).unwrap()}else if(e(this).is(":radio"))e(this).unwrap().unwrap();else if(e(this).is(":file")){e(this).siblings("span").remove();e(this).unwrap()}else e(this).is("button, :submit, :reset, a, input[type='button']")&&e(this).unwrap().unwrap();e(this).unbind(".uniform");e(this).css("opacity","1");var n=e.inArray(e(t),e.uniform.elements);e.uniform.elements.splice(n,1)})};e.uniform.noSelect=function(t){function n(){return!1}e(t).each(function(){this.onselectstart=this.ondragstart=n;e(this).mousedown(n).css({MozUserSelect:"none"})})};e.uniform.update=function(n){n==undefined&&(n=e(e.uniform.elements));n=e(n);n.each(function(){var r=e(this);if(r.is("select")){var i=r.siblings("span"),s=r.parent("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass);i.html(r.find(":selected").html());r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":checkbox")){var i=r.closest("span"),s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass);i.removeClass(t.checkedClass);r.is(":checked")&&i.addClass(t.checkedClass);r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":radio")){var i=r.closest("span"),s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass);i.removeClass(t.checkedClass);r.is(":checked")&&i.addClass(t.checkedClass);r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":file")){var s=r.parent("div"),o=r.siblings(t.filenameClass);btnTag=r.siblings(t.fileBtnClass);s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass);o.text(r.val());r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":submit")||r.is(":reset")||r.is("button")||r.is("a")||n.is("input[type=button]")){var s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass);r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}})};return this.each(function(){if(e.support.selectOpacity){var t=e(this);t.is("select")?t.attr("multiple")!=1&&(t.attr("size")==undefined||t.attr("size")<=1)&&o(t):t.is(":checkbox")?u(t):t.is(":radio")?f(t):t.is(":file")?l(t):t.is(":text, :password, input[type='email']")?r(t):t.is("textarea")?i(t):(t.is("a")||t.is(":submit")||t.is(":reset")||t.is("button")||t.is("input[type=button]"))&&s(t)}})}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return t==0?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;o||(o=i*.3*1.5);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return t<1?-0.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n:u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return(t/=i/2)<1?r/2*t*t*(((s*=1.525)+1)*t-s)+n:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*7.5625*t*t+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n:jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});(function(e,t,n,r,i){var s=e(r),o="waypoint.reached",u=function(e,n){e.element.trigger(o,n);e.options.triggerOnce&&e.element[t]("destroy")},a=function(e,t){if(!t)return-1;var n=t.waypoints.length-1;while(n>=0&&t.waypoints[n].element[0]!==e[0])n-=1;return n},f=[],l=function(t){e.extend(this,{element:e(t),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:e.proxy(function(){var t=this.element.scrollTop(),r=t>this.oldScroll,i=this,s=e.grep(this.waypoints,function(e,n){return r?e.offset>i.oldScroll&&e.offset<=t:e.offset<=i.oldScroll&&e.offset>t}),o=s.length;(!this.oldScroll||!t)&&e[n]("refresh");this.oldScroll=t;if(!o)return;r||s.reverse();e.each(s,function(e,t){(t.options.continuous||e===o-1)&&u(t,[r?"down":"up"])})},this)});e(t).bind("scroll.waypoints",e.proxy(function(){if(!this.didScroll){this.didScroll=!0;r.setTimeout(e.proxy(function(){this.doScroll();this.didScroll=!1},this),e[n].settings.scrollThrottle)}},this)).bind("resize.waypoints",e.proxy(function(){if(!this.didResize){this.didResize=!0;r.setTimeout(e.proxy(function(){e[n]("refresh");this.didResize=!1},this),e[n].settings.resizeThrottle)}},this));s.load(e.proxy(function(){this.doScroll()},this))},c=function(t){var n=null;e.each(f,function(e,r){if(r.element[0]===t){n=r;return!1}});return n},h={init:function(r,i){this.each(function(){var s=e.fn[t].defaults.context,u,h=e(this);i&&i.context&&(s=i.context);e.isWindow(s)||(s=h.closest(s)[0]);u=c(s);if(!u){u=new l(s);f.push(u)}var p=a(h,u),d=p<0?e.fn[t].defaults:u.waypoints[p].options,v=e.extend({},d,i);v.offset=v.offset==="bottom-in-view"?function(){var t=e.isWindow(s)?e[n]("viewportHeight"):e(s).height();return t-e(this).outerHeight()}:v.offset;p<0?u.waypoints.push({element:h,offset:null,options:v}):u.waypoints[p].options=v;r&&h.bind(o,r);i&&i.handler&&h.bind(o,i.handler)});e[n]("refresh");return this},remove:function(){return this.each(function(t,n){var r=e(n);e.each(f,function(e,t){var n=a(r,t);if(n>=0){t.waypoints.splice(n,1);if(!t.waypoints.length){t.element.unbind("scroll.waypoints resize.waypoints");f.splice(e,1)}}})})},destroy:function(){return this.unbind(o)[t]("remove")}},p={refresh:function(){e.each(f,function(t,r){var i=e.isWindow(r.element[0]),s=i?0:r.element.offset().top,o=i?e[n]("viewportHeight"):r.element.height(),a=i?0:r.element.scrollTop();e.each(r.waypoints,function(e,t){if(!t)return;var n=t.options.offset,i=t.offset;if(typeof t.options.offset=="function")n=t.options.offset.apply(t.element);else if(typeof t.options.offset=="string"){var f=parseFloat(t.options.offset);n=t.options.offset.indexOf("%")?Math.ceil(o*(f/100)):f}t.offset=t.element.offset().top-s+a-n;if(t.options.onlyOnScroll)return;i!==null&&r.oldScroll>i&&r.oldScroll<=t.offset?u(t,["up"]):i!==null&&r.oldScroll<i&&r.oldScroll>=t.offset?u(t,["down"]):!i&&r.element.scrollTop()>t.offset&&u(t,["down"])});r.waypoints.sort(function(e,t){return e.offset-t.offset})})},viewportHeight:function(){return r.innerHeight?r.innerHeight:s.height()},aggregate:function(){var t=e();e.each(f,function(n,r){e.each(r.waypoints,function(e,n){t=t.add(n.element)})});return t}};e.fn[t]=function(n){if(h[n])return h[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="function"||!n)return h.init.apply(this,arguments);if(typeof n=="object")return h.init.apply(this,[null,n]);e.error("Method "+n+" does not exist on jQuery "+t)};e.fn[t].defaults={continuous:!0,offset:0,triggerOnce:!1,context:r};e[n]=function(e){return p[e]?p[e].apply(this):p.aggregate()};e[n].settings={resizeThrottle:200,scrollThrottle:100};s.load(function(){e[n]("refresh")})})(jQuery,"waypoint","waypoints",window);