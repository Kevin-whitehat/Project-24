class PlayerArcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/playerArcher.png");

        Matter.Body.setAngle(this.body, -PI / 2)
        this.angle = 0;

        World.add(world, this.body);
    }


    display() {
        if (keyIsDown(UP_ARROW) && this.angle < 1.77) {

            this.angle -= 0.01;
            //Matter.Body.setAngle(this.body, this.angle)
            //console.log("worked")
            //console.log(this.angle)

        }
        //if (this.angle > -0.76) {
        //this.angle = 0
        //}
        if (keyIsDown(DOWN_ARROW) && this.angle > -1.47) {

            this.angle += 0.01;
            //Matter.Body.setAngle(this.body, this.angle)
            //console.log("worked")
            //console.log(this.angle)
        }
        if (this.angle > 0.76) {
            this.angle = 0
        }
        if (this.angle < -0.76) {
            this.angle = 0;
        }



        var pos = this.body.position;
        //var angle = this.body.angle;
        //Matter.body.setAngle(this.body, -90)
        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //arc(this.x - 30, this.y + 30, 140, 200, PI, TWO_PI)
        pop();
        console.log(this.angle)

    }
}