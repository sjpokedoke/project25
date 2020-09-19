class Paper {
    constructor(x,y,radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
    }
      this.body = Bodies.circle(x,y,radius/3, options);
      this.radius = radius;
      World.add(world, this.body);
      this.image = loadImage("paper.png");
      imageMode(CENTER);
    }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("red");
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
    }
  };