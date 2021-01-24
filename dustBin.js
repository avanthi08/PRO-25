class Dustbin {
  constructor(boxX,boxY) {
    this.left = Bodies.rectangle(boxX,boxY,20,100,{isStatic:true});
    this.base = Bodies.rectangle(boxX+110,boxY+80,200,20,{isStatic:true});
    this.right = Bodies.rectangle(boxX+200,boxY,100,20,{isStatic:true});
    this.image=loadImage('dustBin1.png');
    World.add(world, this.left);
    World.add(world, this.base);
    World.add(world, this.right);
   


  }
  display(){
    var lpos =this.left.position;
    var bpos =this.base.position;
    var rpos =this.right.position;
   
    push()
    fill('white')
    image(this.image,1007.5,185,185,185);
    rect(lpos.x,lpos.y,20,180)
    rect(bpos.x,bpos.y,200,20)
    rect(rpos.x,rpos.y,20,180)
    pop();
  }
}
