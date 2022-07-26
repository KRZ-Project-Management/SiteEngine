$.urlParam = function(name){var results = new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null} return decodeURI(results[1]) || 0;};
function last_path(url){var rmvparam = url.split('?')[0]; var path = rmvparam.substring(rmvparam.lastIndexOf('/') + 1); return path;};
function getUriWithParam(baseUrl, params){
var Url = new URL(baseUrl); var urlParams = new URLSearchParams(Url.search); for (var key in params) { if (params[key] !== undefined) { urlParams.set(key, params[key]); } } Url.search = urlParams.toString(); return Url.toString();};