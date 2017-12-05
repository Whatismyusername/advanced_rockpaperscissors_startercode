$('document').ready(function(){
    
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    
    var space = window.innerWidth / 6;
    
    c.rect(window.innerWidth - space * 2, 0 + h, w, h);
    c.fill();
    
    var w = window.innerWidth / 6;
    var h = window.innerHeight / 2;
    function Stage(x, y){
        this.h = h;
        this.x = x;
        this.y = y;
        c.rect(this.x, this.y, w, this.h);
        c.fill();
    }
    function rpsImage(){
        let rock = new Image();
        rock.src = 'https://i.ytimg.com/vi/mixylW7OIOQ/maxresdefault.jpg';
        
        rock.onload = function (){
            c.drawImage(rock,10, 10, window.innerWidth / 1.2, window.innerHeight / 3);
        }
    }
    rpsImage();
    
    var stage1 = new Stage(space, h);
    var stage2 = new Stage(window.innerWidth - space * 2, h);
    var userChoice ="";
    var computerChoice = "";
    var winner = "";
    var choice = [
        "rock",
        "paper",
        "scissors",
        ];
    
})