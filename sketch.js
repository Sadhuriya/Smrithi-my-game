const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var challenge1;
var forms;
var gameState=0;
var clock1;
var score = 0;

function preload(){

}

function setup(){
    createCanvas(1350,640);

    engine = Engine.create();
    world = engine.world;

    form=new Form();
    challenge1=new Challenge1()
}

function draw(){
    Engine.update(engine);
    
    background("white");
    if(gameState===0){
        form.display();
    }else if(gameState===1){
        challenge1.display();
    }else if(gameSate === "win"){
        background("black")
    }
    if(score === 10){
        gameState = "win"
    }

}