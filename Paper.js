class paper
{
    constructor(x,y,r)
    {
        var options = {
            isStatic: false,
            restitution: 0.6,
            friction: 0.5,
            density: 0.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);

        this.image = loadImage("paper.png");
    }

    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("#9c0b99")
        //ellipse(0,0,this.r, this.r);
        image(this.image,-50,-50, 100, 100);
        pop()
    }
}