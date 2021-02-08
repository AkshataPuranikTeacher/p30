class Box {
    constructor(x, y, color) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25,30, options);
      this.width =25;
      this.height = 30;
      this.color = color;
      this.visibility = 255;      
      World.add(world, this.body );
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed > 3 ){
          World.remove(world, this.body);
          push();
         
         
          this.visibility -= 5;
          tint(255, this.visibility);
         
          pop();
    }

    else {
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(1);
          stroke("black");
          fill(this.color);
          rect(0, 0, this.width, this.height);
          pop();
    }
  }
  };
  