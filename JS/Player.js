class Player {
  constructor(x,y,width,height){
     var options = {
      'speed' : 3
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("images/player.png");

     World.add(world,this.body)
  }
  display(){
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height)
    pop();
  }

}
