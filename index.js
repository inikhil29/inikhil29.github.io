console.log("---------------Hello World-----------------");

class Triangle{
	constructor(a, b, c){
		this.a = parseFloat(a);
		this.b = parseFloat(b);
		this.c = parseFloat(c);
	}
	perimeter(){
		// console.log("From Parent class :")
		// console.log("Values received  are "+this.a+", "+this.b+", "+this.c);
		//console.log("Values are "+isNaN(this.a)+", "+isNaN(this.b)+", "+isNaN(this.c));
		// console.log("END..")
		//console.log(this.a+this.b+this.c);
		return this.a + this.b + this.c;
	}
	area(){
		let S = this.perimeter()/2;
		//console.log(" S = "+S);
		return Math.sqrt(S * (S - this.a) * (S - this.b) * (S - this.c));
	}
	display(){
		console.log("Parimeter of the Triangle is "+this.perimeter())
		console.log("Area of the Triangle is "+this.area())
	}
}
class Equilateral extends Triangle{
	constructor(a){
		super()
		this.a = parseFloat(a);
	}
	perimeter(){
		return 3 * this.a;
	}
	area(){
		return (Math.sqrt(3)*this.a*this.a)/4;
	}
	display(){
		console.log("Parimeter of the Equilateral Triangle is "+this.perimeter())
		console.log("Area of the Equilateral Triangle is "+this.area())
	}
}
class Isosceles extends Triangle{
	constructor(a, b){
		super()
		this.a = parseFloat(a);
		this.b = parseFloat(b);
	}
	perimeter(){
		return this.a * 2 + this.b;
	}
	area(){
		let S = this.perimeter()/2;
		return Math.sqrt(S * (S - this.a) * (S - this.a) * (S - this.b));
	}
	display(){
		console.log("Parimeter of the Isoscelen Triangle is "+this.perimeter())
		console.log("Area of the Isoscelen Triangle is "+this.area())
	}
}
class Scalene extends Triangle{
	constructor(a, b, c){
		super(a, b, c);
	}

}