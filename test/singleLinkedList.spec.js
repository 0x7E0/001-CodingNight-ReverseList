var expect = require('chai').expect;
var SingleLinkedList = require('../singleLinkedList');

describe('LinkedList', function () {
    describe('getLast()', function () {
        it('should get the last node', function () {
            // arrange
            var singleLinkedList = new SingleLinkedList();

            // act
            singleLinkedList.add(1);
            singleLinkedList.add(2);
            singleLinkedList.add(3);

            // assert
            expect(singleLinkedList.getLast().value).to.be.equal(3);
        });
    });
    
    describe('getFirst()', function () {
        it('should get the first node', function () {
            var singleLinkedList = new SingleLinkedList();

            singleLinkedList.add(1);
            singleLinkedList.add(2);
            singleLinkedList.add(3);

            expect(singleLinkedList.getFirst().value).to.be.equal(1);
        });
    });

    describe('getLength()', function () {
        it('should return the amount of nodes', function () {
            var singleLinkedList = new SingleLinkedList();

            singleLinkedList.add(1);
            singleLinkedList.add(2);
            singleLinkedList.add(3);

            expect(singleLinkedList.getLength()).to.be.equal(3);
        });
    });
    
    describe('next', function () {
        it('should link all nodes', function () {
            var singleLinkedList = new SingleLinkedList();

            singleLinkedList.add(1);
            singleLinkedList.add(2);
            singleLinkedList.add(3);

            expect(singleLinkedList.getFirst().value).to.be.equal(1);
            expect(singleLinkedList.getFirst().next.value).to.be.equal(2);
            expect(singleLinkedList.getFirst().next.next.value).to.be.equal(3);
        });
    });
    
    describe('reverseList()', function () {
        it('should get the list in reversed order', function () {
            var singleLinkedList = new SingleLinkedList();

            singleLinkedList.add(1);
            singleLinkedList.add(2);
            singleLinkedList.add(3);
            singleLinkedList.add(4);
            singleLinkedList.add(5);
            singleLinkedList.reverseList();

            expect(singleLinkedList.getFirst().value).to.be.equal(5);
            expect(singleLinkedList.getFirst().next.value).to.be.equal(4);
            expect(singleLinkedList.getFirst().next.next.value).to.be.equal(3);
            expect(singleLinkedList.getFirst().next.next.next.value).to.be.equal(2);
            expect(singleLinkedList.getFirst().next.next.next.next.value).to.be.equal(1);
        });
    });
});