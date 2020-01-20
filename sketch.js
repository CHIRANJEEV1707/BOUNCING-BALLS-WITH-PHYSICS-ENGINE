const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);
var ball_options={
    restitution:0.8
    }
    var ball2_options={
        restitution:1
    }
    var ball3_options={
        restitution:0.9
    }
    ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  ball2=Bodies.circle(250,150,25,ball2_options);
  World.add(world,ball2);
  ball3=Bodies.circle(275,175,30,ball3_options);
  World.add(world,ball3)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,25,25);
ellipseMode(RADIUS)
ellipse(ball3.position.x,ball3.position.y,50,50);
}