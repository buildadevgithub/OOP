var arr = ["p1","p2","p3","p4"]; 

function Queue (){
    this.arr = []
    this.length = this.arr.length
}

Queue.prototype.push = function(data){
    this.arr.push(data);
}

Queue.prototype.pop = function(data){
    let newArr = []
    for (let i = 0; i < this.arr.length-1; i++){
        newArr[i] = this.arr[i+1]
    }
    returnVal = this.arr[0]
    this.arr = newArr

    return returnVal;
}

Queue.prototype.isEmpty = function(){
    return this.arr.length === 0;
}

groceryLine = new Queue();

groceryLine.push("p1");
groceryLine.push("p2");
groceryLine.push("p3");

console.log(groceryLine.pop())
console.log(groceryLine.pop())
console.log(groceryLine.pop())







console.log(groceryLine)