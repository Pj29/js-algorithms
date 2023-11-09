const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insert("One");
linkedList.insert(2);

linkedList.insert(1.5, (node) => node.value === "One");

console.log(linkedList);
