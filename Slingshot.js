class SlingShot
    {
        constructor(bodyA, pointB)
            {
                var options = 
                    {
                        bodyA: bodyA,
                        pointB: pointB,
                        stiffness: 0.03,
                        length: 1
                    }
                this.sling = Constraint.create(options);
                this.pointB=pointB;
                World.add(world, this.sling);

            }

        // to atatch body back to slingshot
        attach(body)
            {
                this.sling.bodyA = body;
            }

        // to realease the body if mouse is realesed
        fly()
            {
                this.sling.bodyA = null;
            }

        display()
        {
            if(this.sling.bodyA)
                {
                    var pointA = this.sling.bodyA.position;
                    var pointB = this.pointB;
                    
                    strokeWeight(4);
                    stroke("turquoise");
                    line(pointA.x, pointA.y, pointB.x, pointB.y);
                }
        }
        
    }