class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class CreateLinkedList {
  constructor(value) {
      this.head = {
        data: value,
        next: null,
      };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printList();
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index !== 0 && index <= this.length) {
        let leader = this.getIndexValue(index-1);
        let preserveNode = leader.next;
        leader.next = newNode;
        newNode.next = preserveNode.next;
        this.printList();
    }
    if (index > this.length) {
      this.append(value);
    }
  }

  remove(index){
    if (index === 0) {
      this.head = this.head.next;
    }
    else if (index > this.length) {
      let leader = this.getIndexValue(this.length-2);
      leader.next = null;
    }
    else if (index <= this.length) {
      let leader = this.getIndexValue(index-1);
      let deletingNode = leader.next;
      leader.next = deletingNode.next;
      this.length--;
    }
    this.printList();
  }

  getIndexValue(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
      }
      return currentNode;
  }
  printList() {
      let currentValue = this.head;
      while (currentValue !== null) {
          console.log(currentValue.data);
          currentValue = currentValue.next;
      }
      console.log('-----------------');
  }
}

let myFirstLinkedList = new CreateLinkedList("Hello");
myFirstLinkedList.append("Manas");
myFirstLinkedList.append("Ranjan");
myFirstLinkedList.append("Sahu");
myFirstLinkedList.prepend("Mr.");
// myFirstLinkedList.printList();
myFirstLinkedList.insert(1, "Start");
// myFirstLinkedList.printList();
myFirstLinkedList.insert(6, "End");
myFirstLinkedList.remove(4);
// myFirstLinkedList.printList();