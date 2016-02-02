var expect = require('chai').expect;
var LinkedList = require('../linkedList');

describe('LinkedList', function () {
    describe('getLast()', function () {
        it('should get the last node', function () {
            // arrange
            var linkedList = new LinkedList();

            // act
            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            // assert
            expect(linkedList.getLast().value).to.be.equal(3);
        });
    });
    
    describe('getFirst()', function () {
        it('should get the first node', function () {
            var linkedList = new LinkedList();

            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            expect(linkedList.getFirst().value).to.be.equal(1);
        });
    });

    describe('getLength()', function () {
        it('should return the amount of nodes', function () {
            var linkedList = new LinkedList();

            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            expect(linkedList.getLength()).to.be.equal(3);
        });
    });
    
    describe('next', function () {
        it('should link all nodes', function () {
            var linkedList = new LinkedList();

            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            expect(linkedList.getFirst().value).to.be.equal(1);
            expect(linkedList.getFirst().next.value).to.be.equal(2);
            expect(linkedList.getFirst().next.next.value).to.be.equal(3);
        });
    });
    
    describe('getReversedList()', function () {
        it('should get the list in reversed order', function () {
            var linkedList = new LinkedList();

            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            expect(linkedList.getFirst().value).to.be.equal(3);
            expect(linkedList.getFirst().next.value).to.be.equal(2);
            expect(linkedList.getFirst().next.next.value).to.be.equal(1);
        });
    });
});