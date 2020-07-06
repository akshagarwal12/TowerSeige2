
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;
  player=new Player(200,200,50)
  rope= new Slingshot(player.body,{x:150,y:200})
  platform1=new Platform(500,400,290,10)
  platform2=new Platform(800,400,200,10)
  block1= new Box(800,350,50,60)
  block2=new Box(750,350,50,60)
  block3=new Box(850,350,50,60)
  block4=new Box(775,290,50,60)
  block5=new Box(825,290,50,60)
  block6=new Box(417.5,380,50,60)
  block7=new Box(472,380,50,60)
  block8= new Box(526,380,50,60)
  block9=new Box(578,380,50,60)
  block10= new Box(444,320,50,60)
  block11= new Box(497,320,50,60)
  block12= new Box(552,320,50,60)
  block13=new Box(470,260,50,60)
  block14=new Box(520,260,50,60)
  block15= new Box(497,200,50,60)

}

function draw() {
  background(255,255,255); 
  console.log(mouseX)
  Engine.update(engine)
  player.display();
  rope.display()
  platform1.display()
  platform2.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()

  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
}
function keyPressed(){
  if(keyCode==32){
    rope.attach(this.player.body)
  }
}