class Platform{
  constructor(x,y,radius){
     var options = {
       isStaic : true
     }
     this.body = Bodies.rectangle(x,y,radius,options);
     this.radius = radius;

     World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
  }
}
