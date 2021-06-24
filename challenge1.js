class Challenge1{
    constructor(){
this.bedroom=loadImage("bedroom challenge1.jpg");

this.lazyBoyImage=loadImage("challenge1 lazy boy.png");
var lazyBoy=createSprite(300,380,30,30);
lazyBoy.addImage(this.lazyBoyImage);
lazyBoy.scale=0.5;
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)
clock1 = new Clock(125,350,10,10)


    }
    display(){
        background(this.bedroom);
       drawSprites();

       clock1.display()
      
       

    }

    
}


