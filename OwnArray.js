class MyArray {
    constructor() {
        this.length = 0
        this.data = {};
    }
    get(index) {
        console.log(this.data[index]);
    }
    push(data){
        this.data[this.length] = data;
        this.length++;
    }
    pop(){
        delete this.data[this.length-1];
        this.length--;
    }
    remove(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[index] = this.data[index+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}


var manasArray = new MyArray();
manasArray.push('Hello');
manasArray.push('Hello1');
manasArray.push('Hello2');
manasArray.push('Hello3');
manasArray.push('Hello4');
manasArray.get(2);
console.log(manasArray.data);
manasArray.remove(3);
console.log(manasArray.data);
manasArray.pop();
console.log(manasArray.data);