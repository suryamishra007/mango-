class Stone {
    constructor(x,y,r)
    {
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
           
        }
       
        this.x = x;
        this.y = y;
        this.r = r;
       

        this.body = Bodies.circle(this.x,this.y,this.r/2,option);
        this.image = loadImage("stone.png");
        
        World.add(world,this.body);
        
    }

        display()
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            imageMode(CENTER)    
            image(this.image,0,0,50,50)
            //ellipse(0,0,this.r,this.r)
            pop()
        }
    }
