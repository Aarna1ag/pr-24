class dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
            
        }
        
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.x = x;
        this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }

display(){
    push ();
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};