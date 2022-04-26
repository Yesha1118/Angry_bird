class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.pathImage=loadImage("sprites/smoke.png");
  this.path=[];
  
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity.x);
 if(this.body.velocity.x>7&&this.body.position.x>200){
  var pos=[this.body.position.x,this.body.position.y];
  this.path.push(pos);
 }

   for(var i=0;i<this.path.length;i++){
       image(this.pathImage,this.path[i][0],this.path[i][1]);
   }
    
  }
}
