// Data Structures and Algorithms in JavaScript

// Course intended to infrom/introduce queues, stacks, linked lists, graphs, trees,
// breadth-first, depth-first, tree traversal algorithms, and a variety of sorting algorithms.

// goal of content is to thinking differently/specifically about data structures - also to break
// down problems concerning data modification and access with JavaScript; a focus on their automic
// and algorithmic steps. 

// Content is intended to influence thinking divergently (drawing apart from a common point).

// Hopefully to understand multiple manners of getting a solution to the same problem, and the 
// difference in tradeoffs between them. 



// 1.   QUEUES 

// To create the queue data structure, will use a factory function
// Factory function will return queue as a plain JavaScript object


// ** IMP: A QUEUE IS A COLLECTION OF ITEMS THAT OBEYS THE PRINCIPLE OF FIRST IN, FIRST OUT **
// i.e. when an item is placed into the queue, it can only be retried when all the other items added BEFORE it have been removed


// the queue factory function solution here will have multiple methods and properties:

// add or enqueue method
// remove or dequeue method
// a peek method to look at what's next to be removed
// a length property
// an isEmpty() method

// in order to store items, an array in closure will be used 

const createQueue = () => {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

// NOTE!!! : when using es6 -- For functions that are effectively transforms (one-line-manipulations of arguments), return is implicit.
// For other operations (more than one-liners that require a block, return has to be explicit

// First : for equeue method, we want collection kept in correct order. Always want to add items from one end, and remove from other.
//      -- For our factory function, will use unshift method to add items to front of array

// Second : our dequeue will use Array.pop() method to remove final item from array. This ensures the order is maintained in the queue 

// Third : peek method will return item that's NEXT in line to be removed

// Fourth : next thing is to create a length property. A Getter is needed for this step.
// If we just associate queue.length with our length key, we will get value of zero.
//      -- This is because that's the value of queue.length when the object is created
//          -- Instead, we want to use a Getter function that ALWAYS returns the CURRENT queue's length

// Fifth : next is to create the isEmpty() method; checks whether queue is empty or not.

// NOTE: factory function should be assigned to a variable before trying to execute methods/check properties


