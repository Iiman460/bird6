class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imgage1 = loadImage("sprites/smoke.png");
    
  this.array = [];

  }

  display() {
    var pos = [this.body.position.x,this.body.position.y];
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (pos[0]>200&&this.body.speed > 5){
    this.array.push(pos);
    }
   // console.log(pos[0]);
    //console.log(pos[1]);

    for(var i = 0; i < this.array.length; i++){
      image(this.imgage1,this.array[i][0],this.array[i][1]);
    }
    super.display();
  }
}
