const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
 
var engine, world;
var ground;
var particle;
var turn = 0;
var particles = [];
var plinkos = [];
var divisions = [];
var GameState = "Play";
var GameState = "End";

var divisionHeight=300;
var score = 0;

function setup() {

  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //particle = new Particle(240, 40, 10, 10);

  plinko1 = new Plinko(80, 400, 10, 10);
  
  plinko2 = new Plinko(160, 400, 10, 10);

  plinko3 = new Plinko(240, 400, 10, 10);

  plinko4 = new Plinko(320, 400, 10, 10);

  plinko5 = new Plinko(400, 400, 10, 10);

  plinko6 = new Plinko(40, 320, 10, 10);

  plinko7 = new Plinko(120, 320, 10, 10);

  plinko8 = new Plinko(200, 320, 10, 10);

  plinko9 = new Plinko(280, 320, 10, 10);

  plinko10 = new Plinko(360, 320, 10, 10);

  plinko11 = new Plinko(440, 320, 10, 10);

  plinko12 = new Plinko(80, 240, 10, 10);

  plinko13 = new Plinko(160, 240, 10, 10);

  plinko14 = new Plinko(240, 240, 10, 10);

  plinko15 = new Plinko(320, 240, 10, 10);

  plinko16 = new Plinko(400, 240, 10, 10);

  plinko17 = new Plinko(40, 160, 10, 10);

  plinko18 = new Plinko(120, 160, 10, 10);

  plinko19 = new Plinko(200, 160, 10, 10);

  plinko20 = new Plinko(280, 160, 10, 10);
    
  plinko21 = new Plinko(360, 160, 10, 10);

  plinko22 = new Plinko(440, 160, 10, 10);
       
}
 
function draw() {
  background("black");

  mousePressed();

  textSize(20)
  text("Score : "+score,20,30);

  text("10", 20, 500);
  text("10", 105, 500);
  text("100", 190, 500);
  text("100", 275, 500);
  text("50", 360, 500);
  text("50", 445, 500);

  if(particle != null){  

    console.log(particle.body.position.y);
    console.log(particle.body.position.x);

    if(particle.body.position.y>500){

      if(particle.body.position.x>160){
     
        console.log(particle.body.position.y+"in if");
        console.log(particle.body.position.x+"in if");

        score = score+100;
        
        particle = null;

      }

    }

    //particle.display();

  }

  mousePressed();

  Engine.update(engine);

  //particle.display();
 
  plinko1.display();

  plinko2.display();

  plinko3.display();

  plinko4.display();

  plinko5.display();

  plinko6.display();

  plinko7.display();

  plinko8.display();

  plinko9.display();

  plinko10.display();

  plinko11.display();

  plinko12.display();

  plinko13.display();

  plinko14.display();

  plinko15.display();

  plinko16.display();

  plinko17.display();

  plinko18.display();

  plinko19.display();

  plinko20.display();

  plinko21.display();

  plinko22.display();

  ground.display();
   
  if(frameCount % 60 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  }
 
  for (var j = 0; j < particles.length; j++) {
   
     

     if(particles[j] != null){  

      particles[j].display();

      if(particles[j].body.position.y>510){
  
        if(particles[j].body.position.x<160){
       
          score = score+10;
          
          particles[j] = null;

          if(turn>=5){

            GameState = "End";
        
          }
  
        }
  
      }
  
      //particle.display();
  
    }

    if(particles[j] != null){  

      particles[j].display();

      if(particles[j].body.position.y>510){
  
        if(particles[j].body.position.x>161&&particles[j].body.position.x<320){
       
          score = score+100;
          
          particles[j] = null;

          if(turn>=5){

            GameState = "End";
        
          }
  
        }
  
      }
  
      //particle.display();
  
    }

    if(particles[j] != null){  

      particles[j].display();

      if(particles[j].body.position.y>510){
  
        if(particles[j].body.position.x>321){
       
          score = score+50;
          
          particles[j] = null;

          if(turn>=5){

            GameState = "End";
        
          }
  
        }
  
      }
  
      //particle.display();
  
    }

  }

  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if(GameState !== "End"){

    turn++;

    particle = new Particle(mouseX, 10, 10, 10);

   }

}