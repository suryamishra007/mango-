class Mango {
    constructor(x,y,r)
    {
        var option = {
            isStatic:true,
            restitution:0,
            friction:1,
            
           
        }
       
        this.x = x;
        this.y = y;
        this.r = r;
       

        this.body = Bodies.circle(this.x,this.y,this.r/2,option);
        this.image = loadImage("mango.png");
        
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
           // ellipse(0,0,this.r,this.r)
            pop()
        }
  };