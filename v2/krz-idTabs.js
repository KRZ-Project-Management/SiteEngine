!function(){var e={jQuery:"https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"},t=function(){!function(e){e.fn.idTabs=function(){for(var t={},n=0;n<arguments.length;++n){var s=arguments[n];switch(s.constructor){case Object:e.extend(t,s);break;case Boolean:t.change=s;break;case Number:t.start=s;break;case Function:t.click=s;break;case String:"."==s.charAt(0)?t.selected=s:"!"==s.charAt(0)?t.event=s:t.start=s}}return"function"==typeof t["return"]&&(t.change=t["return"]),this.each(function(){e.idTabs(this,t)})},e.idTabs=function(t,n){var s=e.metadata?e(t).metadata():{},r=e.extend({},e.idTabs.settings,s,n);"."==r.selected.charAt(0)&&(r.selected=r.selected.substr(1)),"!"==r.event.charAt(0)&&(r.event=r.event.substr(1)),null==r.start&&(r.start=-1);var a=function(){if(e(this).is("."+r.selected))return r.change;var n="#"+this.href.split("#")[1],s=[],a=[];if(e("a",t).each(function(){this.href.match(/#/)&&(s.push(this),a.push("#"+this.href.split("#")[1]))}),r.click&&!r.click.apply(this,[n,a,t,r]))return r.change;for(i in s)e(s[i]).removeClass(r.selected);for(i in a)e(a[i]).hide();return e(this).addClass(r.selected),e(n).fadeIn(),r.change},c=e("a[href*='#']",t).unbind(r.event,a).bind(r.event,a);c.each(function(){e("#"+this.href.split("#")[1]).hide()});var h=!1;return(h=c.filter("."+r.selected)).length||"number"==typeof r.start&&(h=c.eq(r.start)).length||"string"==typeof r.start&&(h=c.filter("[href*='#"+r.start+"']")).length,h&&(h.removeClass(r.selected),h.trigger(r.event)),r},e.idTabs.settings={start:0,change:!1,click:null,selected:".selected",event:"!click"},e.idTabs.version="2.2"}(jQuery)},n=function(e,t){for(t=t.split(".");e&&t.length;)e=e[t.shift()];return e},s=document.getElementsByTagName("head")[0],r=function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,s.appendChild(t)},a=document.getElementsByTagName("script"),c=a[a.length-1].src,h=!0;for(d in e)n(this,d)||(h=!1,r(e[d]));return h?t():void r(c)}();
$(function(){$(".tabs").idTabs()});
$(function(){$(".tabs-special").idTabs()});