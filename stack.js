var arr = ["p1","p2","p3","p4"];

function Stack (){
    this.arr = [];

    this.length = 0;
}

Stack.prototype.pop = function(){
    return this.arr.pop();
}

Stack.prototype.push = function(data){
    return this.arr.push(data);
}
Stack.prototype.isEmpty = function(){
    return this.arr.length === 0;
}

Stack.prototype.peek = function (){
    return (this.arr[this.arr.length - 1])
}






plateStacker = new Stack();


plateStacker.push("p1")

plateStacker.push("p2")

console.log(plateStacker.peek())

//console.log(plateStacker.isEmpty())

// console.log(plateStacker.pop())

console.log(plateStacker)










// arr.pop();
// arr.pop();
// arr.push("glass")
// arr.pop();
// arr.pop();
// arr.push("cup")


// console.log(arr);