var expect = require('chai').expect;
var jsc = require("jsverify");
var SingleLinkedList = require('../singleLinkedList');

describe('LinkedList Properties', function () {

    /* Test properties of our LinkedList */

    /* Return a Linked List containing the given array of numbers */
    function linkedListOfNaturalNumbers(ns) {
        // DEBUG: console.info(['Generated list: '].concat(ns));
        var singleLinkedList = new SingleLinkedList();
        ns.forEach(function(n) {singleLinkedList.add(n)});
        return singleLinkedList;
    }

    /* Return the value of a node (unless it is undefined) */
    function valueOrNull(node) {
        if (node !== undefined) {
            return node.value;
        } else {
            return null;
        }
    }

    jsc.property("reversing a linked list keeps the length the same", "array nat", function (ns) {
        var singleLinkedList = linkedListOfNaturalNumbers(ns);
        var lengthBefore = singleLinkedList.getLength();

        singleLinkedList.reverseList();

        return singleLinkedList.getLength() === lengthBefore;
    });

    jsc.property("reversing a linked list swaps the first and last elements", "array nat", function (ns) {
        var singleLinkedList = linkedListOfNaturalNumbers(ns);
        var firstValueBefore = valueOrNull(singleLinkedList.getFirst());
        var lastValueBefore  = valueOrNull(singleLinkedList.getLast());

        singleLinkedList.reverseList();

        return (valueOrNull(singleLinkedList.getFirst()) === lastValueBefore) &&
               (valueOrNull(singleLinkedList.getLast())  === firstValueBefore)

        // TODO how to use nicer assertions with jsveryify?
        //expect(valueOrNull(singleLinkedList.getFirst())).to.be.equal(lastValueBefore);
        //expect(valueOrNull(singleLinkedList.getLast())).to.be.equal(firstValueBefore);            
    });

    jsc.property("double reversing a linked list gives you the original list", "array nat", function (ns) {
        var singleLinkedList = linkedListOfNaturalNumbers(ns);

        singleLinkedList.reverseList();
        singleLinkedList.reverseList();

        for(var i=0; i < ns.length; i++ ) {
            // TODO             
            return false;
        }
    });

});