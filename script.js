function Area (l , w){ //paramteres

    //sonstructor
   
    this.length = l;
    this.width = w;

    this.calcArea = function (){
        //area = l * w
        return this.length * this.width ;

    }
}
Area.prototype.calcSquare = function(){
    return this.length * this.length;
}


//instances of our class
var square = new Area(5,5); //arguments



//console.log(square.calcArea());
console.log(square.calcSquare());

