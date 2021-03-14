class Box
  {
    constructor(x, y, width, height, angle) 
      {
          var options = 
            {
                'restitution':0.8,
                'friction':0.8
            }
          this.visibility = 255;
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("box.png");
          World.add(world, this.body);
      }

    display()
      {
        if(this.body.speed < 4)
          {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
          // removing of block if speed of block is less than 4
        else
          {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            pop();
          }
    }
  

    // score function to increase score
    Score() 
      {
        if(this.visibility < 0 && this.visibility > -105)
          {
            score++;
          }
      } 

  }
