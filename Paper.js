class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,20,options);
      this.image=loadImage('paper.png');
      
      World.add(world, this.body,this.image);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      fill('pink');
      ellipseMode(RADIUS);
      image(this.image,-20,-50,80,80);
      pop();
    }
  };
  