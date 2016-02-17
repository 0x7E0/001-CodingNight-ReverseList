var ListNode = require('./listNode');

function SingleLinkedList() {
    var first;
    var last;
    var length = 0;

    return {
        add: add,
        getFirst: getFirst,
        getLast: getLast,
        getLength: getLength,
        reverseList: reverseList
    };

    function add(value) {
        var newNode = new ListNode(value);

        if (length === 0) {
            first = newNode;
            last = first;
        }

        last.next = newNode;
        last = newNode;
        length++;
    }

    function getFirst() {
        return first;
    }

    function getLast() {
        return last;
    }

    function getLength() {
        return length;  
    }

    function reverseList() {
        var current = first;
        var previous = null;

        while (current) {
            // save next or you lose it
            var next = current.next;
            // reverse pointer
            current.next = previous;
            // increment previous to current node
            previous = current;
            // increment node to next node or null at end of list
            current = next;
        }

        first = previous;
    }
}
module.exports = SingleLinkedList;