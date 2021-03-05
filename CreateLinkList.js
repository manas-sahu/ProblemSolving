class CreateLinkedList {
    constructor(value) {
        this.head = {
            data: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            data: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}

let myFirstLinkedList = new CreateLinkedList('Hello');
console.log(myFirstLinkedList);
myFirstLinkedList.append('Manas');
console.log(myFirstLinkedList);
myFirstLinkedList.append('Ranjan');
console.log(myFirstLinkedList);
myFirstLinkedList.append('Sahu');
console.log(myFirstLinkedList);
