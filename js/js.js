
var myString = 'ABCDEF';
    console.log(myString.charAt(myString.length-1));
    console.log(myString.length);
    console.log(myString);

var newSrting='';
    for(var i=0; i<=myString.length-1; i++){
        newSrting += myString[myString.length-1-i];
    }
    console.log(newSrting);
//another way
var arrSrting=[''];
    for(var a = myString.length-1; a>=0; a--){
        arrSrting[0] = arrSrting[0]+ myString[a];
        var newmySrting = arrSrting.join('');
    }
console.log(arrSrting);
console.log(newmySrting);



window.addEventListener( 'load', fotterBotoom);

var wrap = $('.wrapper');
var footer = $('footer');
var contentBox =$('.main_content');
var wrapHeight, footerHeight, contentBoxHeight;

function fotterBotoom() {
    wrapHeight = wrap.outerHeight();
    footerHeight = footer.outerHeight();
    contentBoxHeight = contentBox.outerHeight();
    console.log('wrapper'+ wrapHeight);
    console.log('footer'+ footerHeight);
    console.log('contentBox'+ contentBoxHeight);
    console.log(contentBoxHeight+footerHeight);
    if (wrapHeight > (contentBoxHeight+footerHeight)){
        contentBox.css('margin-bottom',footerHeight);
        footer.addClass('footer-bottom');
    }
}
fotterBotoom();

// сокращенная запись
// window.onresize = fotterBotoom;


// развернутая запись
window.onresize = function () {
    contentBox.css('margin-bottom','50px');
    footer.removeClass('footer-bottom');
    fotterBotoom();
};