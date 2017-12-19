$('document').ready(function(){
    
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var c = canvas.getContext('2d');
    
    var space = window.innerWidth / 6;
    var w = window.innerWidth / 6;
    var h = window.innerHeight / 2;
    
    var choice = 1;
    
    var picWidth = 100;
    var picHeight = 100;
    var p1 = 0;
    var p2 = 0;
    
    var decreament = canvas/3 * 2;
    var choiceArray = null;
    var computerChoice = null;
    
    var choicePic = {
        x1: space + w,
        y1: h,
        x2: window.innerWidth - space * 2 - picWidth,
        y2: h
    };
    
    canvas.addEventListener('click', function(event){
        console.log(event.x, event.y);
        if(isMouseInside(rockButton)){
            console.log('rock');
            choiceArray = [scissorsImg, rockImg, paperImg];
            computerChoice = Math.floor(Math.random() * 3);
            VS(choiceArray, computerChoice);
        }
        if(isMouseInside(scissorsButton)){
            console.log('scissors');
            choiceArray = [paperImg, scissorsImg, rockImg];
            computerChoice = Math.floor(Math.random() * 3);
            VS(choiceArray, computerChoice);
        }
        if(isMouseInside(paperButton)){
            console.log('paper');
            choiceArray = [rockImg, paperImg, scissorsImg];
            computerChoice = Math.floor(Math.random() * 3);
            VS(choiceArray, computerChoice)
        }
        
    });
    
    function VS(choiceArray, computerChoice){
            
            console.log(choiceArray[choice], choicePic.x1);
            
            if (choice > computerChoice){
                console.log('You Won!');
                p2++;
                console.log(p2);
                
            } else if (choice === computerChoice){
                console.log('Draw');
            } else if (choice < computerChoice){
                console.log('Keep Trying!');
                p1++;
                console.log(p1);
            }
        }
    
    
    function Stage(x, y, p){
        this.h = h;
        this.x = x;
        this.y = y;
        this.p = p;
        
        this.draw = function(){
            c.rect(this.x, this.y, w, this.h);
            c.fill();
        }
        
        this.update = function(){
            if(this.p === 1){
                this.h = this.h - decreament;
            } else if(this.p === 2){
                this.h = this.h - decreament;
            }
            this.draw();
        }
    }

        
        
        var rockButton = {
            x: 0,
            y: 10,
            width: picWidth,
            height: picHeight
        };
        var scissorsButton = {
            x: 0,
            y: picHeight + 10,
            width: picWidth,
            height: picHeight
        };
        var paperButton = {
            x: 0,
            y: (picHeight + 10) * 2,
            width: picWidth,
            height: picHeight
        };
        
            var rockImg = new Image();
            rockImg.src = 'rock.png';
            
            var scissorsImg = new Image();
            scissorsImg.src = 'scissor.png';
            
            var paperImg = new Image();
            paperImg.src = 'paper.png';

    
        var isMouseInside = function(btn) {
                return (event.x >= btn.x &&
                        event.x <= (btn.x+btn.width) &&
                        event.y >= btn.y && 
                        event.y <= (btn.y+btn.height));
            };
            
            
        var stage1 = new Stage(space, h, p1);
        var stage2 = new Stage(window.innerWidth - space * 2, h, p2);

        
        function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
            
            stage1.update();
            stage2.update();
            
            
            c.drawImage(rockImg,rockButton.x, rockButton.y, rockButton.width, rockButton.height);
            c.drawImage(scissorsImg, scissorsButton.x, scissorsButton.y, scissorsButton.width, scissorsButton.height);
            c.drawImage(paperImg, paperButton.x, paperButton.y, paperButton.width, paperButton.height);
        
            c.drawImage(choiceArray[choice], choicePic.x1, choicePic.y1, picWidth, picHeight);
            c.drawImage(choiceArray[computerChoice], choicePic.x2, choicePic.y2, picWidth, picHeight);
        }
        animate();
    
})