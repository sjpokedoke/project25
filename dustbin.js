class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.Bottombody = Bodies.rectangle(x,y,options);
      this.Leftbody = Bodies.rectangle(x,y,options);
      this.Rightbody = Bodies.rectangle(x,y,options);
      World.add(world, this.Bottombody);
      World.add(world, this.Leftbody);
      World.add(world, this.Rightbody);
      this.image = loadImage("dustbingreen.png");
      imageMode(CENTER);
    } 
    display(){
      var posBottom=this.Bottombody.position;
			var posLeft=this.Leftbody.position;
			var posRight=this.Rightbody.position;
      push();
      translate(posBottom.x,posBottom.y)
      image(this.image, 700, 210, this.Dustbinwidth, this.Dustbinheight);
      this.Dustbinwidth = 100;
      this.Dustbinheight = 110;
      pop();
      push();
      translate(posLeft.x,posLeft.y)
      pop();
      push();
      translate(posRight.x,posRight.y)
      pop();
    }
  };