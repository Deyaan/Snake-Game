var snake, food,food2;
var area,tail;
function preload() {
	img = loadImage('game-over.png');
  }
function setup() {
    createCanvas(600,400);
    snake = createSprite(300, 140, 15, 15);
    snake.shapeColor = "red";
   food = createSprite(random(10,590), random(5,390), 15, 15);
   topwall = createSprite(0,0,2000,2);
   bottomwall = createSprite(0,400,2000,2);
   rightwall = createSprite(600,0,2,1000);
   leftwall = createSprite(0,0,2,1000);
   score=0;
}

function draw() {
    background("lightblue");
   
 text(score,10,10);
    //Moving with mouse
    if (keyDown("left")) {
        snake.x = snake.x - 8;
    }
    else if (keyDown("right")) {
        snake.x = snake.x + 8;
    }

    if (keyDown("up")) {
        snake.y = snake.y - 8;
    }

    else if (keyDown("down")) {
        snake.y = snake.y + 8;
    }

    if (isCollide(snake,food)) {
        score = score + 1;
        tail();
        foodlogic();
    }
    if (isCollide(snake,topwall)) {
        snake.scale=0;
        var gameover=createSprite(300,200);
        gameover.addImage(img);
    }
    if (isCollide(snake,rightwall)) {
        snake.scale=0;
        var gameover=createSprite(300,200);
        gameover.addImage(img);
    }
    if (isCollide(snake,bottomwall)) {
        snake.scale=0;
        var gameover=createSprite(300,200);
        gameover.addImage(img);
    }

    if (isCollide(snake,leftwall)) {
        snake.scale=0;
        var gameover=createSprite(300,200);
        gameover.addImage(img);
    }
///2
    if(score===7||score>7){
        if (keyDown("left")) {
            snake.x = snake.x - 9;
        }
        else if (keyDown("right")) {
            snake.x = snake.x +9;
         }
    
        if (keyDown("up")) {
            snake.y = snake.y - 9;
        }
    
        else if (keyDown("down")) {
            snake.y = snake.y + 9;
        }
    
    }
    //3
    if(score===14||score>14){
        if (keyDown("left")) {
            snake.x = snake.x - 9.5;
        }
        else if (keyDown("right")) {
            snake.x = snake.x +9.5;
         }
    
        if (keyDown("up")) {
            snake.y = snake.y - 9.5;
        }
    
        else if (keyDown("down")) {
            snake.y = snake.y + 9.5;
        }
    
    }
    //4
    if(score===21||score>21){
        if (keyDown("left")) {
            snake.x = snake.x - 10;
        }
        else if (keyDown("right")) {
            snake.x = snake.x +10;
         }
    
        if (keyDown("up")) {
            snake.y = snake.y - 10;
           }
    
        else if (keyDown("down")) {
            snake.y = snake.y + 10;
        }
    }
//5
    if(score===28||score>28){
        if (keyDown("left")) {
            snake.x = snake.x - 11;
        }
        else if (keyDown("right")) {
            snake.x = snake.x +11;
         }
    
        if (keyDown("up")) {
            snake.y = snake.y - 11;
        }
    
        else if (keyDown("down")) {
            snake.y = snake.y + 11;
        }
    }
    
    drawSprites();
}
function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}
function tail(){
    //snake.scale = snake.scale+1;
}
function foodlogic(){
food.scale=0;
food=createSprite(random(10, 590), random(5, 390), 15, 15);
}
