var ListNode = require('./listNode');

function LinkedList() {
    var first;
    var last;
    var length = 0;

    return {
        add: add,
        getFirst: getFirst,
        getLast: getLast,
        getLength: getLength,
        getReversedList: getReversedList
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

    function getReversedList() {
        return this;
    }
}
module.exports = LinkedList;