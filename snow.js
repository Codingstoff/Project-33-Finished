class Snow {
    constructor(x, y,r) {
        var options = {
            density: 1,
            friction:1,
            isStatic: false
        }
        this.r=r
        this.body = Bodies.circle(x, y,this.r, options);
        this.image=loadImage("snow4.webp")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.r,this.r);
        

    }
};