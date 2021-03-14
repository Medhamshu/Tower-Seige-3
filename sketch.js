const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variables
var engine, world;

var ground, backgroundImg;
var floor1, floor2;

var bg = "bg.png";

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;

var slingshot;
var polygon_img, polygon;

var score = 0;

function preload()
    {
        //loading images
        polygon_img=loadImage("polygon.png");

        // calling background function
        getBackgroundImg()
    }

function setup()
    {
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);

        // creating floor and ground
        ground = new Ground(width/2,height-20,width,10);
        floor1 = new Ground(450,270,250,10);
        floor2 = new Ground(900,220,190,10);

        // creating of blocks
        // level 1
        block1 = new Box(360,250,30,30);
        block2 = new Box(390,250,30,30);
        block3 = new Box(420,250,30,30);
        block4 = new Box(450,250,30,30);
        block5 = new Box(480,250,30,30);
        block6 = new Box(510,250,30,30);
        block7 = new Box(540,250,30,30);

        // level 2
        block8 = new Box(390,220,30,30);
        block9 = new Box(420,220,30,30);
        block10 = new Box(450,220,30,30);
        block11 = new Box(480,220,30,30);
        block12 = new Box(510,220,30,30);

        // level 3
        block13 = new Box(420,190,30,30);
        block14 = new Box(450,190,30,30);
        block15 = new Box(480,190,30,30);

        // level 4
        block16 = new Box(450,160,30,30);

        // level 1
        block17 = new Box(840,200,30,30);
        block18 = new Box(870,200,30,30);
        block19 = new Box(900,200,30,30);
        block20 = new Box(930,200,30,30);
        block21 = new Box(960,200,30,30);

        // level 2
        block22 = new Box(870,170,30,30);
        block23 = new Box(900,170,30,30);
        block24 = new Box(930,170,30,30);

        // level 3
        block25 = new Box(900,140,30,30);

        // creating a polygon
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);
    
        // creating a slingstot
        slingShot = new SlingShot(this.polygon,{x:200,y:200});
    }

function draw()
    {
        if(backgroundImg)
        background(backgroundImg);

        Engine.update(engine)

        // displaying text
        textSize(20);
        fill("lightyellow");
        text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

        textSize(20);
        fill("lightyellow");
        text("press space to get other chance",900,350);

        text("SCORE : "+score,1060,30);

        // displaying of objects
        ground.display()
        floor1.display()
        floor2.display()

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

        block16.display()

        block17.display()
        block18.display()
        block19.display()
        block20.display()
        block21.display()

        block22.display()
        block23.display()
        block24.display()

        block25.display()

        // calling score
        block1.Score()
        block2.Score()
        block3.Score()
        block4.Score()
        block5.Score()
        block6.Score()
        block7.Score()

        block8.Score()
        block9.Score()
        block10.Score()
        block11.Score()
        block12.Score()

        block13.Score()
        block14.Score()
        block15.Score()

        block16.Score()

        block17.Score()
        block18.Score()
        block19.Score()
        block20.Score()
        block21.Score()

        block22.Score()
        block23.Score()
        block24.Score()

        block25.Score()

        // displaying of polygon
        imageMode(CENTER)
        image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

        // displaying slingshot
        slingShot.display();

        
    }

// mouse dragged
function mouseDragged()
    {
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }

// mouse released
function mouseReleased()
    {
        slingShot.fly();
    }

// to attach polygon to slingshot
function keyPressed()
    {
        if(keyCode === 32)
            {
                Matter.Body.setPosition(this.polygon,{x:200, y:50});
                slingShot.attach(this.polygon);
            }
    }

    // API
async function getBackgroundImg()
    {
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);

        console.log(hour)
        
        if(hour>=06 && hour<=18)
            {
                bg = "bg.png";
            }
        else
            {
                bg = "bg2.jpg";
            }
    
        backgroundImg = loadImage(bg);
    }