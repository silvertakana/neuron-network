var walls = []
function setup(){
    angleMode(DEGREES)
    nn = new Network([5,5,5,1],1,1,1);

    cnv = createCanvas(500,500);
    console.log()
    gui = createGui();
    b = createButton("Button", 50, 50);
    
}


function draw(){
    background(220)
    for(let i in walls){
        walls[i].render()
    }
     drawGui();

        if(b.isPressed) {
          print(b.label + " is pressed.");
        }
}
function createwalls(){
    walls[0] = new Wall(width,height/2+50,width-100,height/2+50)
    walls[1] = new Wall(width,height/2-50,width-100,height/2-50)
    walls[2] = new Wall(width-100,height/2+50,width-250,height/2+50+100)
    walls[3] = new Wall(width-100,height/2-50,width-250,height/2-50+100)
    walls[4] = new Wall(width-250,height/2+50+100,0,height/2+50)
    walls[5] = new Wall(width-250,height/2-50+100,0,height/2-50)
}