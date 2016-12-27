/**
 * 公共文件
 */

//后台接口访问基本路径
var debug=true;
//var debug=true;
 var baseAPIUri = 'http://open-test.dianjia.io:80/api/test/rs/';
 var hostNameUrl = 'http://open-test.dianjia.io:80';
// var baseAPIUri = 'http://open-pre.dianjia.io:80/api/product/rs/';
//var baseAPIUri = 'http://192.168.1.35：9000/openapp/rs/';
//计算根路径

//微信后台接口访问路径
// var enviroment = 'liu';
var enviroment = 'test';
 // var enviroment = 'product';
 // var enviroment = 'pre';
// var enviroment = 'heimu';
// var enviroment = 'baiying';
//var enviroment = 'xuhe';
// var baseAPIUri,enviroment = 'tudou';
 
var weixinAPIUri;
if (enviroment == 'test') {
    baseAPIUri = 'http://open-test.dianjia.io:80/api/test/rs/';
    hostNameUrl = 'http://shop.test.dianjia.io:80';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}
else if (enviroment == 'test1') {
    baseAPIUri = 'http://open-test.dianjia.io:80/api/test1/rs/';
    hostNameUrl = 'http://shop.test1.dianjia.io:80';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}
else if (enviroment == 'pre') {
    baseAPIUri = 'http://open-pre.dianjia.io/api/product/rs/';
    hostNameUrl = 'http://shop-pre.dianjia.io';
    weixinAPIUri = 'http://shop-pre.dianjia.io/';
}
else if (enviroment == 'product') {
    baseAPIUri = 'http://open.dianjia.io/api/product/rs/';
    hostNameUrl = 'http://shop.dianjia.io';
    weixinAPIUri = 'http://shop.dianjia.io/';
}
else if (enviroment == 'heimu') {
    baseAPIUri = 'http://192.168.1.54:9000/openapp/rs/';
    hostNameUrl = 'http://open-test.dianjia.io:80';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}
else if (enviroment == 'baiying') {
    baseAPIUri = 'http://192.168.1.46:9000/openapp/rs/';
    hostNameUrl = 'http://open-test.dianjia.io:80';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}else if (enviroment == 'liu') {
    baseAPIUri = 'http://wechat-api.dianjia.io/openapp/rs/';
    hostNameUrl = 'http://open-test.dianjia.io:80';
    weixinAPIUri = 'http://wechat.dianjia.io/';
}
else if (enviroment == 'xuhe') {
    baseAPIUri = 'http://192.168.1.64:9000/openapp/rs/';
    hostNameUrl = 'http://192.168.1.64:9000';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}else if(enviroment == 'tudou'){
    baseAPIUri = 'http://192.168.4.39:9000/openapp/rs/';
    hostNameUrl = 'http://192.168.4.39:9000';
    weixinAPIUri = 'http://shop.test.dianjia.io/';
}

function getRootPath(){
    var cuUrl=window.location.href;
    var position=cuUrl.indexOf("/page/")+6;
    return cuUrl.substring(0,   position);
}

var rootPath = getRootPath();

// Seajs依赖关系
seajs.config({
    base: '../../modules/',

    paths: {
        'common': '../../common',
        'modules': '../../modules'
    },

    alias: {
        'jquery': 'common/jquery/1.11.3/jquery.min',
        'doT': 'common/dot/1.0.1/doT.min',
        'utils': 'common/core/utils',
        'minetouch': 'common/touch/minetouch',
        'underscore': 'common/underscore/1.8.3/underscore',
        'backbone' : 'common/backbone/1.2.1/backbone',
        'abutment':'common/core/abutment',
        'uploadImg': 'common/core/uploadImg',
        'ajax': 'modules/ajax/ajax',
        'dialog': 'modules/dialog/dialog',
        'hint': 'modules/hint/hint',
        'validate': 'modules/validate/validate',
        'iscroll': 'common/iscroll/5.1.3/iscroll-probe',
        'iscroll-refrash': 'common/iscroll/5.1.3/iscroll-pull-refrash',
        'iscroll-refrash2': 'common/iscroll/5.1.3/pull-refrash',
        'fastclick': 'common/fastclick/1.0.6/fastclick',
        'template' : 'modules/template/template',   
        'lazyload':'common/lazyload/0.9.5/jquery.lazyload.min',
        'warn' : 'modules/alert/warn'
    },

    preload: ['jquery']
});


/**
* 自动设置高度    
*/
function setAutoHeight() {
    try {
        var heightautoEL = document.getElementsByClassName('heightauto')[0];
        var fixed_topEl = document.getElementsByClassName('fixed-top')[0];
        var documentHeight = document.body.clientHeight;
        var heightELHeight = heightautoEL.clientHeight;
        var fixedElHeight = fixed_topEl.clientHeight;
        /*heightautoEL.style.height = (documentHeight - fixedElHeight -10) + 'px';*/
        heightautoEL.style.height = (documentHeight - fixedElHeight) + 'px';
        heightautoEL.style.top = fixedElHeight + 'px';
    } catch (e) {
    }
}
/*点击效果事件*/
function touchSatrtFunc() {
    if(navigator.userAgent.indexOf('Android')>-1){
        return 'android';
    }else{
        /*return 'ios';*/
        touch = document.getElementsByClassName('tap-highlight-color'); 
    
        tapHighlightColor(touch);
        
        //点击透明按钮
        touch=document.getElementsByClassName('opacity-touch-btn');
        
        opacityTouchBtn(touch);
    }

    } 
    //背景变色按钮
   /* touch = document.getElementsByClassName('tap-highlight-color'); 
    
    tapHighlightColor(touch);
    
    //点击透明按钮
    touch=document.getElementsByClassName('opacity-touch-btn');
    
    opacityTouchBtn(touch);
}*/

function tapHighlightColor(touch){
    for(var i=0;i<touch.length;i++){
        touch[i].ontouchend = function(){
            this.style.background = '#fff';
        };
        touch[i].ontouchstart = function(){
            this.style.background = '#f1f1f1';
        };
    }
}

function opacityTouchBtn(touch,opacity){
    for( i=0;i<touch.length;i++){
        touch[i].ontouchend = function(){
            this.style.opacity = 1;
        };
        touch[i].ontouchstart = function(){
            if(opacity!=null){
                this.style.opacity = opacity;
            }else{
                this.style.opacity = 0.5;
            }
            
        };
    }
}

window.onload = setAutoHeight;


