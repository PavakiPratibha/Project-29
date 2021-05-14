class Slingshot { //class is generalized
    constructor(bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.001,
            length: 10
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world, this.sling); //connection between two bodies
    };
    fly(){
        this.sling.bodyA=null
    }
    display (){
        if(
            this.sling.bodyA
        )
    {
    

        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(4) //width of line
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
}