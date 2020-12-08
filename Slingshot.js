class Slingshot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){

        
        var bodyPos = this.sling.bodyA.position;
        var pointPos = this.sling.pointB;
        fill("red")
        strokeWeight(4);
        line(bodyPos.x, bodyPos.y, pointPos.x, pointPos.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }

    
}