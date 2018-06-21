var keys = [];

var keyPressed = function() {
    keys[keyCode] = true;
};

 var keyReleased = function() {
    keys[keyCode] = false;
 };



var player = function(x,y,speed,size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed - 4;
    this.update = function() {
      this.y = constrain(this.y, 360, height-2);
      
       if (keys[UP]){
           this.y = this.y - this.speed;
       }
        if (keys[DOWN]){
            this.y = this.y + this.speed;
        }
        if (keys[LEFT]){
            this.x = this.x - this.speed;
        }
        if (keys[RIGHT]) {
            this.x = this.x + this.speed;
        }
       
       //draw circle 
       noStroke();
       fill(8, 143, 240);
       ellipse(this.x,this.y,this.size,this.size);    
    };
};

var Dot = function(x, y, speed, size) {
   this.x = x;
   this.y = y;
   this.yVel = random(+ speed, speed);    
   this.speed = speed - 20;
   this.size = size;
   this.update = function() {
   this.y = this.y + this.yVel;
   fill(0, 250, 242);
   ellipse(this.x, this.y, this.size, this.size);
   
   };

   };

var baddot = function (x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.yVel = random(+ speed, speed);
    this.speed = speed - 20;
    this.size = size;
    this.update = function() {
    this.y = this.y + this.yVel;
    fill(252, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
    
    };
    
    };

var Player = new player(114,100,9,30);

var dots = [];
for (var i = 0; i < 25; i++){
    dots[i] = new Dot (random(28, 387),random(4, 160), random(0, 2), 6); }

var BadDot = [];
for (var i = 0; i < 0; i++){
    BadDot[i] = new baddot (random(28, 387),random(4, 160), random(0, 2), 6); }


var checkForCollisions = function (player,dots) {
    for (var i = 0; i < dots.length; i++) {
        var distance = dist(player.x, player.y, dots[i].x, dots[i].y);
        
        if (distance <= (player.size / 2 + dots[i].size / 2)) {
           
            // make dots disappear
            dots[i].x = dots[i].x - 40000; 
           
        }
    }
};

var update = function() {
baddot[i].update = function() {
    
};

    
};





draw = function() {
    background(255, 255, 255);
    Player.update();
    for (var i = 0; i < dots.length; i++){
        dots[i].update();
    
    }
    
    
    
    
    checkForCollisions(Player, dots);
};
