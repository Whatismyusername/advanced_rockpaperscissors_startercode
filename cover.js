$('document').ready(function(){
    
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    
    var space = window.innerWidth / 6;
    var w = window.innerWidth / 6;
    var h = window.innerHeight / 2;
    c.rect(0 + space, 0 + h, w, h);
    c.rect(window.innerWidth - space * 2, 0 + h, w, h);
    c.fill();
    
    
})