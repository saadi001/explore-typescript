class Shape {
     getArea(): number{
          return 0;
     }
}

class Circle extends Shape{
     radius: number;
     constructor(radius: number){
          super();
          this.radius = radius;
     }
     getArea(): number {
          return Math.PI * this.radius * this.radius;
     }
}

class Rectangle extends Shape{
     width: number;
     height: number;
     constructor(width:number, height:number){
          super()
          this.width = width;
          this.height = height;
     }

     getArea(): number {
          return this.width * this.height;
     }
}

function getAreaOfShape(param:Shape){
     console.log(param.getArea())
}

getAreaOfShape(new Circle(5));
getAreaOfShape(new Rectangle(10,20))