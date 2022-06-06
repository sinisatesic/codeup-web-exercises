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



// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// 2.      PRIORITY QUEUES

// Rest of content requires payment but code and transcript for proceeding lessons can be found:

// In this lesson, you'll learn how we can combine several queues to create a new data structure: a priority queue. 
// A priority queue allows the user to add items to the queue that are deemed to be high priority, and get moved ahead in the line. 
// This added complexity is simple to achieve and is a good example of how we can build up complexity through the use of data structures.


// Instructor: [00:00] We can easily make a PriorityQueue by using two queues, a high priority queue and a low priority queue, together.

// [00:07] Our API will be the same as a normal queue. We'll have an enqueue, dequeue, peek, and is-empty method, as well as a length property, but we'll make some modification.

// [00:17] First, we'll create two queues that we store in closure, a low priority queue and a high priority queue.

// [00:23] Next, our enqueue method receives a second argument to indicate that an item is high priority. We'll set it to false by default. If an item is deemed high priority, we put it in the high priority queue. Otherwise, it goes into the low priority queue. We'll use a turn area to determine which priority queue it should go into.

// [00:43] Next, our dequeue method will make sure that the high priority queue is empty before it dequeues from the low priority queue. This ensures that all high priority items are dequeued first. This time, we'll use an if statement to early return from the high priority queue, or otherwise return from the low priority queue.

// [01:04] Next, our peek method gets a similar change. Just like we dequeue from the high priority queue first, we're going to peek from the high priority queue first as well. In fact, I can copy-paste this code and just make a change to which method is being called.

// [01:18] Next, our length property is the addition of each queue's length property.

// [01:24] Lastly, our is-empty method is the conjunction of the two queues' is-empty methods.

// [01:30] Now that we've built our priority queue, let's try it out. Let's imagine your manager has given you a few tasks. A fix here, a bug there, and a new feature to build here. If we take a peek at our queue as it currently is, the item we should get back is a fix here.

// [01:48] Great. That's working as we expect. That fix here was pretty easy. Let's dequeue it and make sure that's worked as well. Great. We dequeued a fix here, and now we're on a bug there.

// [01:59] Let's say our manager comes to us with an emergency task, a task that needs to be done right away. Normally, we couldn't put something at the front of our queue. It has to wait in line, like every other task. But, using the second argument in our enqueue method, we can put it to the front of the tasks we need to do. If I save this and we take a peek at our queue now, that emergency task should be what comes up.

// [02:21] Let's say we've averted the crisis, we've solved our emergency task, and we're going to dequeue it. Let's make sure that's what we get back when we dequeue and see that we're back to a bug there being the thing we need to fix.

// [02:33] Great. We dequeued the emergency task, and a bug there is what we need to do. On with our tasks for the rest of the day.



const { createQueue } = require('../queues/index')

function createPriorityQueue() {
  const highPriorityQueue = createQueue()
  const lowPriorityQueue = createQueue()

  return {
    enqueue(item, isHighPriority = false) {
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue
      queue.enqueue(item)
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }

      return lowPriorityQueue.dequeue()
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek()
      }

      return lowPriorityQueue.peek()
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
    }
  }
}

const q = createPriorityQueue()

q.enqueue('A fix here')
q.enqueue('A bug there')
q.enqueue('A new feature')

q.dequeue()
q.enqueue('Emergency task!', true)
console.log(q.dequeue())
console.log(q.peek())

exports.createPriorityQueue = createPriorityQueue


// 3.      STACKS

// In this lesson, you'll learn how to create a stack data structure. 
// A stack is a collection of items that obeys the principle of "last in, first out". 
// Like a stack of plates, we can only access the topmost plate at any time. 
// We must remove that plate before we get down to other plates. 
// This is useful for function calls, hence why it's called a "call stack" in JavaScript.

// Instructor: [00:00] To create our stack data structure, we're going to use a factory function that returns our stack as a plain JavaScript object. A stack is a collection of items that obeys the principle of last in, first out.

// [00:13] When we place a new item onto the stack, we have to remove it first before we get to any other item in the stack that's there before. This data structure is used for handling things like nested function calls in JavaScript. Hence, why it's called a call stack.

// [00:26] Our stack will have several methods and properties, push, pop, peek, to look at what's next to be removed, length, and isEmpty. We'll start by creating an array held in closure to store our items.

// [00:40] We want to keep our collection in the correct order, so we always want to add and remove items from the same side of the array. We'll use the end of our array to make this happen. Thus, we'll use the array methods that match our stack methods, push and pop, to do this.

// [00:54] Using push, we place new items at the end of the array. With pop, we remove the final item from the array. This ensures we maintain order in our stack. Now we'll create our peek method by returning the last item in our array.

// [01:09] We can create a length property. In order to do this, we need to use a getter function. If we simply call .length on our stack, we'll get the value every time, because that's the length of the array when this object is created.

// [01:24] Using a getter always ensures we get the current array's length. Lastly, we'll add the isEmpty method to quickly tell if our stack has any items left in it.

// [01:33] Now that we have a stack, we can try it out. A strange but everyday example of a stack is the act of getting dressed. We have to put clothing on in a particular order. In order to change what we wear, we typically have to remove them in the reverse order.

// [01:48] Let's create a lower body stack for the clothing we put on our lower body. We could create another stack for our upper body, but we'll save that for another time.

// [01:57] I don't know about you, but the first thing I put on when getting dressed is some underwear, followed by socks. Then I throw on my pants, followed lastly by my shoes.

// [02:07] If we take a peek at a lower body stack, we should see that shoes is the first thing we need to remove. Great. Let's say it's time to get ready for bed. I need to pop my shoes off. Let's do that. Now that we've taken our shoes off, if we take a peek at our stack, it should say pants are what comes next. It does. Great.

// [02:27] Let's pop those off as well and check the length of our stack. Looks like we have two items left to remove. To keep this PG, I'll save the disrobing for a time when I'm not doing an Egghead lesson. At least we know our stack works the way it should.

function createStack() {
    const stack = []
  
    return {
      push(x) {
        stack.push(x)
      },
      pop() {
        if (stack.length === 0) {
          return undefined
        }
        return stack.pop()
      },
      peek() {
        if (stack.length === 0) {
          return undefined
        }
        return stack[stack.length - 1]
      },
      get length() {
        return stack.length
      },
      isEmpty() {
        return stack.length === 0
      }
    }
  }
  
  const lowerBodyStack = createStack()
  
  lowerBodyStack.push('underwear')
  lowerBodyStack.push('socks')
  lowerBodyStack.push('pants')
  lowerBodyStack.push('shoes')
  
  lowerBodyStack.pop()
  lowerBodyStack.pop()
  console.log(lowerBodyStack.peek())
  console.log(lowerBodyStack.length)
  
  exports.createStack = createStack


  //4.     LINKED LISTS
  
//   A linked list is a collection of items where each item points to the next one in the list. 
//   Because of this structure, linked lists are very slow when searching for an item at a particular index. 
//   An array, by comparison, has quick gets when searching for an index, but a linked list must start at the beginning,
//    often called the "head", and loop through each item's next property until we arrive at the item. 
//    This makes gets in a linked list an operation that takes O(n) time.
//     While gets might be slow in a linked list, it's other operations, like push and delete come with some great benefits we will see in the lesson.


// Instructor: [00:00] A linked list is a collection of items where each item has a connection to the next item in the list, hence, the word "linked" in the name.

// [00:07] To make our linked list, we first want to create a node object for each item in our list. Our node has two properties -- the value stored at this node and a next property which gets pointed to the next item in our list. This property defaults to null.

// [00:22] Next, we want to make our list data structure. Our list will have several properties we want to keep track of -- a head property, a tail property, and a length property. We'll also want to create several methods for our list -- push, pop, get, delete, and is-empty.

// [00:37] Our head and tail will both start as null and our length will start as zero. We can also implement the is-empty method pretty quickly as it just returns whether or not the length is zero. Now we want to add our push method.

// [00:50] When we want to push a value onto our list, we need to first turn that value into a node using our create-node factory function. Push places a new node at the end of our list. Depending on the length of our list, we might need to take somewhat different actions in order to achieve this.

// [01:07] No matter what state our list is in, we know that eventually we need to update our tail property to this node that we've just created. We also know that we will need to increment our length property, so let's write that.

// [01:21] Now if our list does not have a head, that is the first item in the list, then we can also deduce that it doesn't have a tail, the last item in its list because the list is empty.

// [01:30] The opposite is also true. If our list has a head then we know that it has a tail as well because even a list of length one has a head and a tail.

// [01:39] If we don't currently have a head, our list head property is set to our new node. Since we didn't have a head, we also don't have a tail, and that needs to be set to this node as well. Since this is a special case, we increment the length here and return the node now.

// [01:54] However, in scenarios where our list does have a length, and thus has a head and a tail, our new node gets set to our current tail's next property. Then we reset the tail like I said and we increment the length, so the only thing we have left is to return the node.

// [02:09] Now we'll move on to our pop method. Things get a bit more complicated here. We need to reason out a few scenarios. How do we pop items when our list is empty, when our list has a length of one, and when our list has many items? An empty list is easy if there's nothing to pop. We'll just return null.

// [02:28] Now for our remaining scenarios, a list of length one and a list of a length greater than one. We're always going to return the tail node, so let's store that in a variable.

// [02:38] A list of length one means that our head and our tail are the same node, which means in order to pop this node off of our list, we also need to set our head and tail back to null. When we do this, we also need to reset our length to zero. Given that our length is one, we can just decrement it, and then we return the node that we've stored.

// [02:59] Now for all other scenarios, we need to set the item before our tail, the penultimate item, as the new tail with its next value set to null. How do we do this?

// [03:08] This is one of the inefficiencies of linked list. Whenever we have to find an item, we have to start at the head and continue to call next until we find that item. For our case, we're going to start by having a variable called current that we're going to set to the head. Then we're going to create a variable penultimate that will eventually set to the penultimate item.

// [03:28] Now while we have a current node, we need to check if that current's next property is equal to the tail. That's how we know we have our penultimate item.

// [03:38] Then we want to break our loop once we have our penultimate item. Otherwise, if we're not at that penultimate item, we set the item current to the current.next property to move on.

// [03:50] At this point, we should have our penultimate item, the one before the tail. We need to set its next property to null because it's going to become our tail. Now, because we're going to return a node, we need to decrement the length. Now we can return the node we stored before.

// [04:06] Now we can move on to our get method. Our get method receives an index as an argument. If the index that we're giving is less than zero, or greater than our length, then we can return null, as we know that there's no item in those bounds. If our index happens to be zero, we can just return the head.

// [04:25] For other scenarios, it's going to take considerably longer to get to the item in our list. Just like in our pop method, we're going to have to loop through each item, calling next on each one until we find the one we're looking for.

// [04:39] Similar to before, I'm going to create a variable current that we'll start by setting it to the head. We're also going to keep track of an iterator. When that iterator matches the index passed in, we know that we've gotten to the item that we need to retrieve.

// [04:51] We can use a while loop again to go through each of our items. Each loop through, we increment our iterator, and we set the current value to the next value. Once our loop is done, and we've got into the right index, we know we have the right item, so we can just return what current is currently set to.

// [05:09] Now we can implement delete, which is very similar to get. The delete method also receives an index as an argument. Just like get, if the index is less than zero, or greater than our length, we're just going to return null.

// [05:21] Now if index equals zero, we're going to return the head of our list. Because I need to make some small modifications, I'm going to store it in a variable.

// [05:31] We need to reset the head of our list to be the next item of our current head. We also need to decrement the length of our list. In this scenario, we can return our deleted node right away.

// [05:43] In all other scenarios, similar to the pop method and the get method, we're going to have to start from the beginning of our list and loop through each item until we find the item that we need to delete. I'll create a current variable and set it to the head, but I'll also need to store a previous node.

// [05:58] We do this because a deletion in a linked list is simply taking a previous' next property and pointing it to the current node's next property, effectively, slicing out the current node from the list. We also need to store an iterator to check against the index passed in to make sure we've gotten to the current node. We'll use a while loop just like we did in the get method.

// [06:23] We need to increment our iterator. We'll set the previous value to the current value and our current value to the current's next property. When our while loop is complete, we know that our current value is the value that we're going to delete, so I'm going to store that in a variable.

// [06:40] Now we do the work of setting our previous' next property to our current's next property. This slices out the deleted node. Because we've now effectively deleted our node, we need to decrement the length. Finally, we return our deleted node.

// [06:57] Now I actually want to add one more method really quickly to our list. I want to add a print method so we can visualize it. For our print method, we'll create an array of values.

// [07:07] Just like all the other loops that we've done in our linked list, we'll need to start at the head and loop through, so I'll store a current variable set to the head.

// [07:15] While we have a current item, we're going to push it's value into our value's array. Then we'll set our current variable to our current's next property.

// [07:23] When this loop is done, we know we've gone through our entire list. We're going to call join on our values array. We're going to pass in an arrow symbol that will return us a string that looks like our values are linked together.

// [07:35] Now that we've created our linked list, let's actually try it out. I'm going to create some values, and we're going to push them onto our new list. Now let's verify that our linked list is not empty. It came back false because our list is full of items.

// [07:55] Now let's pop off the last item in our list and see that we get E back. We can verify that after E was popped that our tail is now set to D. Let's try our get method on the item at Index One.

// [08:09] We can see that we got the node with the value B -- which was the second value we passed in, which would be the first index -- and we can see all the connected nodes to B. Instead of getting it, let's delete it and then look at our list.

// [08:23] We'll do this by printing out our list. We see when we called delete that we got back that same node that we called with get. Then when we print it out, we see that we only have three nodes remaining and the values A is connected to C, which is connected to D.

// [08:37] This is a linked list. There are some modifications that you can make. There are doubly-linked lists where each node also points to the node previous to it. There's also lists that are cyclical in which the tail points to the head.

// [08:51] I leave these to you to work out on your own and try and make them yourself.


function createNode(value) {
    return {
      value,
      next: null
    }
  }
  
  function createLinkedList() {
    return {
      head: null,
      tail: null,
      length: 0,
  
      push(value) {
        const node = createNode(value)
  
        if (this.head === null) {
          this.head = node
          this.tail = node
          this.length++
          return node
        }
  
        this.tail.next = node
        this.tail = node
        this.length++
  
        return node
      },
  
      pop() {
        if (this.isEmpty()) {
          return null
        }
  
        const node = this.tail
  
        if (this.head === this.tail) {
          this.head = null
          this.tail = null
          this.length--
          return node
        }
  
        let current = this.head
        let penultimate
        while (current) {
          if (current.next === this.tail) {
            penultimate = current
            break
          }
  
          current = current.next
        }
  
        penultimate.next = null
        this.tail = penultimate
        this.length--
  
        return node
      },
  
      get(index) {
        if (index < 0 || index > this.length - 1) {
          return null
        }
  
        if (index === 0) {
          return this.head
        }
  
        let current = this.head
        let i = 0
        while (i < index) {
          i++
          current = current.next
        }
  
        return current
      },
  
      delete(index) {
        if (index < 0 || index > this.length - 1) {
          return null
        }
  
        if (index === 0) {
          const deleted = this.head
  
          this.head = this.head.next
          this.length--
  
          return deleted
        }
  
        let current = this.head
        let previous
        let i = 0
  
        while (i < index) {
          i++
          previous = current
          current = current.next
        }
  
        const deleted = current
        previous.next = current.next
  
        if (previous.next === null) {
          this.tail = previous
        }
  
        this.length--
  
        return deleted
      },
  
      isEmpty() {
        return this.length === 0
      },
  
      print() {
        const values = []
        let current = this.head
  
        while (current) {
          values.push(current.value)
          current = current.next
        }
  
        return values.join(' => ')
      }
    }
  }
  
  const list = createLinkedList()
  const values = ['a', 'b', 'c', 'd', 'e']
  const nodes = values.map(val => list.push(val))
  
  list.pop()
  console.log(list.delete(1))
  console.log(list.print())
  
  exports.createNode = createNode
  exports.createLinkedList = createLinkedList

  
  // 5.    GRAPHS

//   A graph is a data structure comprised of a set of nodes, also known as vertices, and a set of edges.
// Each node in a graph may point to any other node in the graph.
// This is very useful for things like describing networks, creating related nonhierarchical data, and as we will see in the lesson, describing the relationships within one's family.


// Instructor: [00:00] A graph is a collection made up of nodes, also known as vertices, that may or may not be connected to other nodes. These connections are called edges. To build our graph, we're going to start by creating our node factory function.

// [00:16] When we create a node, we need to give it a value that we can use to identify it. We'll call it a key. We'll describe adjacent nodes in our graph as neighbors, as there is no hierarchy implied by the data structure.

// [00:29] Lastly, we need a way to add neighbors to our node, so we'll add an addNeighbor method that pushes a node into our neighbors array.

// [00:37] Now we can create our graph factory function. createGraph receives an argument, directed. A directed graph's edges point in one particular direction, from one node to another. In order for two nodes to have symmetric edges, they must both point to each other.

// [00:54] In an undirected graph, we assume the symmetry of edges. We'll set directed to false by default. We'll return it in the object created by our factory function.

// [01:06] A graph is a collection of nodes and a collection of edges, so we'll create arrays for both of them in closure. We'll pass these references to our returned object as well.

// [01:17] Now we'll start adding methods to our graph. The first will be the addNode method. addNode receives a key as an argument and uses our createNode function to add a node to the nodes array.

// [01:30] We also want to be able to get nodes from our graph. We'll add a getNode method. getNode will search for a matching key and return the first one. We'll use array's find method to accomplish this.

// [01:43] Next, we need to be able to add edges between nodes. We'll create an addEdge method. addEdge receives two arguments, a key for the first node and a key for the second node. We'll use our getNode method to get those two nodes.

// [01:59] We then will add Node 2 as a neighbor to Node 1. This happens regardless of whether the graph is directed or undirected. The same goes for pushing our edge into the edges array. We'll simply pass a string of our two keys, adding a delimiter between them.

// [02:18] If the graph is undirected, we also want to add Node 1 as a neighbor of Node 2. We're not going to worry about adding a second edge because we don't want the number of edges in our graph to be misrepresented. If we were to add an edge here, we'd have to implement a way of resolving both edges as one were we ever to count them and provide an edge's length property.

// [02:41] Now that we can add nodes and edges, we'd probably like to be able to visualize our graph. We'll create a print method that will print out our nodes and neighbors in the console. We want to return a string derived from our nodes. I'm going to map over our nodes, gather some data about them, and return a result.

// [03:01] We'll start by destructuring the key and neighbors from each node. The string we're going to return will always start with the key. If there are any neighbors, we want to map over each one of them and concatenate that neighbor's key into our result.

// [03:19] Once that's done, we can return the result. We'll call a join with a new line on our array of strings. Now we can create a graph and try it out. I'm going to create a directed graph of the Shevlin family -- me, my wife, and our two cats, Krios and Tali. This graph will describe who loves whom in this household.

// [03:43] My wife and I love each other very much. We can add an edge between us going in both directions. We love our cats, her a tad more than me. I'm more of a dog person. We have no way of weighting our edges in this graph. Instead, we'll just add edges from me to both our cats and from Anna to both our cats.

// [04:03] Next, our cats have very little love for each other. They tolerate one another, but they do fight from time to time. We won't put any edges there.

// [04:11] Krios does love Anna. Tali shows some affection towards me. We'll add edges there. Now if we call the print method on our graph and run it in the terminal, we should see a printout of my family's relationships.

const { createQueue } = require('../queues/index.js')

function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(node) {
      children.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    },

    getNode(key) {
      return nodes.find(n => n.key === key)
    },

    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key)
      const node2 = this.getNode(node2Key)

      node1.addChild(node2)

      if (!directed) {
        node2.addChild(node1)
      }

      edges.push(`${node1Key}${node2Key}`)
    },

    print() {
      return nodes
        .map(({ children, key }) => {
          let result = `${key}`

          if (children.length) {
            result += ` => ${children
              .map(node => node.key)
              .join(' ')}`
          }

          return result
        })
        .join('\n')
    },

    bfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(
        startingNodeKey
      )
      const visitedHash = nodes.reduce(
        (acc, cur) => {
          acc[cur.key] = false
          return acc
        },
        {}
      )
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visitedHash[currentNode.key]) {
          visitFn(currentNode)
          visitedHash[currentNode.key] = true
        }

        currentNode.children.forEach(node => {
          if (!visitedHash[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },

    dfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(
        startingNodeKey
      )
      const visitedHash = nodes.reduce(
        (acc, cur) => {
          acc[cur.key] = false
          return acc
        },
        {}
      )

      function explore(node) {
        if (visitedHash[node.key]) {
          return
        }

        visitFn(node)
        visitedHash[node.key] = true

        node.children.forEach(child => {
          explore(child)
        })
      }

      explore(startingNode)
    }
  }
}

const graph = createGraph(true)

graph.addNode('Kyle')
graph.addNode('Anna')
graph.addNode('Krios')
graph.addNode('Tali')


graph.addEdge('Kyle', 'Anna')
graph.addEdge('Anna', 'Kyle')
graph.addEdge('Kyle', 'Krios')
graph.addEdge('Kyle', 'Tali')
graph.addEdge('Anna', 'Krios')
graph.addEdge('Anna', 'Tali')
graph.addEdge('Krios', 'Anna')
graph.addEdge('Tali', 'Kyle')

console.log(graph.print())

exports.createNode = createNode
exports.createGraph = createGraph



// 6.     BREADTH FIRST SEARCH

// Breadth first search is a graph search algorithm that starts at one node and visits neighboring nodes as widely as possible before going further down any other path. 
// This algorithm requires the use of a queue to keep track of which nodes to visit, so it might be worth your time to brush up on that data structure before watching this lesson.


// Instructor: [00:00] As the name implies, breadth-first search is a graph search algorithm that starts at one node and explores as widely as possible before going further down adjacent nodes. We'll add a breadth-first search method to our graph object.

// [00:15] We want to accept two arguments, a starting node key to find which node in our graph to start from and a visit function to call when we visit each node. The first thing we need to do is get the starting node using the getNode method.

// [00:30] Next, we need to keep track of which nodes we have visited and which ones we haven't. There are several ways we can do this. I'm going to do it through using an object.

// [00:40] I'm going to reduce our nodes down to an object where each key is the current node's key and the value is set to false, that I can set to true later on when we've visited that corresponding node.

// [00:52] Next, we'll need to keep track, in order, which nodes that we need to visit. We'll use a createQueue function I've imported from another lesson. The first node we need to visit is our starting node, so we'll enqueue it.

// [01:06] Now, while the queue is not empty, we want to perform our search algorithm. Part of our algorithm will enqueue more nodes. This will continue to go on until we've visited every node in our graph.

// [01:18] Each time we run through this loop, we want to dequeue the first item out of our queue and set that as the current node. If we haven't visited this node before, we need to call our visit function on it and set its corresponding value to true in our visited hash.

// [01:37] Now, we want to loop through each neighbor of our current node. If we haven't visited before, we want to add it to our queue. Now that we've implemented breadth-first search, let's try it out on a graph.

// [01:52] I've premade a graph for us that I'll copy-paste the code into our file. It looks like this. I want to use breadth-first search to print out the node keys as arrive at each one, into the console.

// [02:05] I'll start from node A. If I bring the graph back onto the screen and we compare it to the result in the terminal, we can see how we branched out from node A and visited all of its neighbors before proceeding down node B's neighbors.


const { createQueue } = require('../queues/index.js')

function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(node) {
      children.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    },

    getNode(key) {
      return nodes.find(n => n.key === key)
    },

    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key)
      const node2 = this.getNode(node2Key)

      node1.addChild(node2)

      if (!directed) {
        node2.addChild(node1)
      }

      edges.push(`${node1Key}${node2Key}`)
    },

    print() {
      return nodes
        .map(({ children, key }) => {
          let result = `${key}`

          if (children.length) {
            result += ` => ${children.map(node => node.key).join(' ')}`
          }

          return result
        })
        .join('\n')
    },

    bfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false
        return acc
      }, {})
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visitedHash[currentNode.key]) {
          visitFn(currentNode)
          visitedHash[currentNode.key] = true
        }

        currentNode.children.forEach(node => {
          if (!visitedHash[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },

    dfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false
        return acc
      }, {})

      function explore(node) {
        if (visitedHash[node.key]) {
          return
        }

        visitFn(node)
        visitedHash[node.key] = true

        node.children.forEach(child => {
          explore(child)
        })
      }

      explore(startingNode)
    }
  }
}

const graph = createGraph(true)
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
]

nodes.forEach(node => {
  graph.addNode(node)
})

edges.forEach(nodes => {
  graph.addEdge(...nodes)
})

graph.bfs('a', node => {
  console.log(node.key)
})

exports.createNode = createNode
exports.createGraph = createGraph



// 7.    DEPTH FIRST SEARCH

// Depth first search is a graph search algorithm that starts at one node and uses recursion to travel as deeply down a path of neighboring nodes as possible, 
// before coming back up and trying other paths.

// Instructor: [00:00] As the name implies, depth first search is a graph search algorithm that explores as far as it can down a particular path before climbing back up and working down another one. We'll add a depth first search method to our graph object.

// [00:14] This method will receive two arguments, a starting node key to find which node in the graph to start the search from and a visiting function to be called as we visit each node for the first time. First, we need to get the starting node by using the get node method.

// [00:30] Next, we need to keep track of which nodes we have visited and which ones we haven't. There are several ways we can do this, but I'm going to do it by keeping a visited object where each key corresponds with a node's key, and the value starts as false. Now, depth first search involves a recursive algorithm.

// [00:49] Essentially, if there's another level to go down, we need to explore that one until we reach a dead end. I'm going to create an explore function that we will call on our nodes. If we visited this node, then return from the function immediately.

// [01:04] Otherwise, call the visiting function on the node and mark it as visited. Next, we want to loop through each of this node's neighbors and call explore on them. Lastly, we start our algorithm by calling explore on our starting node. Now that we've created our depth first search algorithm, let's use it.

// [01:24] I've pre-made a graph that I'll copy paste into the file that looks like this. I want to call depth first search on our graph starting at node A and logging out each key as we go. If I bring the graph back onto the screen and we call our search in the terminal, we could see that we went as far down the path of A we could before we climbed back up and went down another path.


const { createQueue } = require('../queues/index.js')

function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(node) {
      children.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    },

    getNode(key) {
      return nodes.find(n => n.key === key)
    },

    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key)
      const node2 = this.getNode(node2Key)

      node1.addChild(node2)

      if (!directed) {
        node2.addChild(node1)
      }

      edges.push(`${node1Key}${node2Key}`)
    },

    print() {
      return nodes
        .map(({ children, key }) => {
          let result = `${key}`

          if (children.length) {
            result += ` => ${children.map(node => node.key).join(' ')}`
          }

          return result
        })
        .join('\n')
    },

    bfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false
        return acc
      }, {})
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visitedHash[currentNode.key]) {
          visitFn(currentNode)
          visitedHash[currentNode.key] = true
        }

        currentNode.children.forEach(node => {
          if (!visitedHash[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },

    dfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false
        return acc
      }, {})

      function explore(node) {
        if (visitedHash[node.key]) {
          return
        }

        visitFn(node)
        visitedHash[node.key] = true

        node.children.forEach(child => {
          explore(child)
        })
      }

      explore(startingNode)
    }
  }
}

const graph = createGraph(true)
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
]

nodes.forEach(node => {
  graph.addNode(node)
})

edges.forEach(nodes => {
  graph.addEdge(...nodes)
})

graph.dfs('a', node => {
  console.log(node.key)
})

exports.createNode = createNode
exports.createGraph = createGraph




// 8.      BINARY TREES

// Instructor: [00:00] Binary trees are trees whose nodes can only have up to two children, hence, the word "binary." We'll use a function to create our binary node object. A binary node receives a key as an argument and has a left and right property set to null. It also has the methods add-left and add-right.

// [00:21] Add-left and add-right both receive a key. We create a new node from that key. We update the left and right properties respectively and then we return the new node. Now we can create our binary tree factory function.

// [00:37] Since trees must have a root, our function receives a root key as an argument. We can then create the root node using our node factory function when we pass this to the object we return from the function.

// [00:50] Now binary trees have three specific types of traversals -- in-order, pre-order, and post-order. I'm actually going to turn these traversals into an innumerable. Each item in our innumerable will represent the corresponding traversal type, and the value for each item will be a function that we can use to traverse our tree with.

// [01:12] Each of these traversals is quite similar. They each have the same function signature. They receive a node and a visiting function. Because these are called recursively, they each have the same guard statement. We only want to operate if we know that the node is not null.

// [01:29] We'll start with in-order traversal. In-order traversal starts by going as far down the left branch as possible, then visiting our current node, and then going down the right branch. The way we do this is to call our traversals in-order function recursively like so.

// [01:46] Pre-order traversal is very similar, but we change the order in which we visit our nodes, and we change which traversal method we're using to traverse those nodes. I'm going to copy/paste the code from the in-order method to the pre-order method and make those changes.

// [02:03] If pre-order means that we visit our current node first then it makes sense that post-order traversal means we visit our current node last. Allow me to copy/paste again to make those changes.

// [02:14] Now that we have our traversal methods, let's add a print method to our tree, so that we can use these different traversals and see their output. We'll pass a traversal type as an argument into our print method, but we'll default that value to in-order since it's the most common traversal.

// [02:31] We'll keep our print method pretty simple. We want to return a string, so we'll start by creating a result variable set to an empty string. Now we'll create a visiting function that when it visits each node, it'll concatenate the key onto our result string.

// [02:46] We'll add a little touch where if there is no length in the current result, we only return the key. Otherwise, we'll attach a delimiter to our key.

// [02:54] Now we can use the traversal type passed in on our traversals innumerable to get the right method to be used. Finally, we'll return a result.

// [03:03] Now that we have a print method, let's try it out on a tree. I'm going to copy/paste some code in here to make a tree that looks like this.

// [03:11] As you can see, our tree is a collection of letters from the alphabet. Why don't we try calling the print method on our tree and logging out the results with our different types of traversals.

// [03:20] We'll start with the in-order traversal. If you remember, we defaulted it to in-order, so we don't have to pass in an argument. As you can see, we went all the way down to our left-most node, the H node, and then we began to work our way back up. It's why the A node comes in the middle because we visited that before we then traversed down the right side of our tree.

// [03:41] Let's change our traversal type to pre-order and see the difference. As you can see with pre-order, the first node we printed is the first node we visited, the A node. We then went down the left side of the tree -- going all the way down B, D, and H -- going down each left branch before coming back and then going down the right branches.

// [03:59] Now let's do our last traversal type and do post-order and see that difference. As you can see, we went all the way down the left-most branch getting to the H node again. We also went all the way down the right branch before we visited our current node A, which comes last.

// Binary Trees and Tree Traversal

// Binary trees are trees whose nodes can only have up to two children

function createBinaryNode(key) {
    return {
      key,
      left: null,
      right: null,
      addLeft(leftKey) {
        const newLeft = createBinaryNode(leftKey)
        this.left = newLeft
        return newLeft
      },
      addRight(rightKey) {
        const newRight = createBinaryNode(rightKey)
        this.right = newRight
        return newRight
      }
    }
  }
  
  const TRAVERSALS = {
    IN_ORDER: (node, visitFn) => {
      if (node !== null) {
        TRAVERSALS.IN_ORDER(node.left, visitFn)
        visitFn(node)
        TRAVERSALS.IN_ORDER(node.right, visitFn)
      }
    },
    PRE_ORDER: (node, visitFn) => {
      if (node !== null) {
        visitFn(node)
        TRAVERSALS.PRE_ORDER(node.left, visitFn)
        TRAVERSALS.PRE_ORDER(node.right, visitFn)
      }
    },
    POST_ORDER: (node, visitFn) => {
      if (node !== null) {
        TRAVERSALS.POST_ORDER(node.left, visitFn)
        TRAVERSALS.POST_ORDER(node.right, visitFn)
        visitFn(node)
      }
    }
  }
  
  function createBinaryTree(rootKey) {
    const root = createBinaryNode(rootKey)
  
    return {
      root,
      print(traversalType = 'IN_ORDER') {
        let result = ''
  
        const visit = node => {
          result += result.length === 0 ? node.key : ` => ${node.key}`
        }
  
        TRAVERSALS[traversalType](this.root, visit)
  
        return result
      }
    }
  }
  
  const tree = createBinaryTree('a')
  const b = tree.root.addLeft('b')
  const c = tree.root.addRight('c')
  const d = b.addLeft('d')
  const e = b.addRight('e')
  const f = c.addLeft('f')
  const g = c.addRight('g')
  const h = d.addLeft('h')
  const i = d.addRight('i')
  
  console.log('IN_ORDER: ', tree.print())
  
  console.log('PRE_ORDER: ', tree.print('PRE_ORDER'))
  
  console.log('POST_ORDER: ', tree.print('POST_ORDER'))
  
  exports.createBinaryNode = createBinaryNode
  exports.createBinaryTree = createBinaryTree



  // 9.     BUBBLE SORT

//   Bubble sort is often one of the first sorting algorithms people learn because it closely resembles how we might physically sort a collection of items. 
//   We loop through our list of items, comparing our current item with the next one. 
//   If our current item is less than the next one, we swap them. 
//   We continue looping through the list until we make a loop without any swaps.

// This is a very inefficient algorithm with a time complexity of O(n^2). 
// Given a list of length n, we must compare each item against every other item in the list, which gives us n * n, or rather n^2. 
// That means for a list of length 10, our worst case scenario will require 100 loops to sort our list. 
// A list just twice as long will take 4x as many loops to solve.

// Instructor: [00:00] To write the bubble sort algorithm, let's create a function that accepts an array, mutates that array for sorting and then returns that array. Bubble sort works by looping over the array as many times as necessary to get it sorted.

// [00:14] Each time we iterate over the array, we check if the current item is greater than the next item. If it is, we swap it in place, and we indicate that we've made a swap during this iteration.

// [00:25] Then if we've made a swap, we loop through the array again. We continue looping until we make a pass where no items have been swapped.

// [00:33] Since the way we know that an array is sorted is that no swaps occurred during it, we need to at least iterate over the array once in order to determine that it's sorted. This is a perfect situation for a do/while loop in our algorithm.

// [00:48] Since the condition we're going to test is whether or not a swap occurred in each iteration, we need to store a variable that holds that swap state for us. We can pass it as the condition into our while portion of our do/while loop.

// [01:02] The first thing we need to do in our do/block is reset the swap value. This prevents any bugs from occurring from setting swap to true in the previous iteration and forgetting to reset it.

// [01:14] Now we want to iterate over each item in our array, so we'll use array.foreach for that. Foreach receives a callback function. The arguments given to that callback function that we need are the item and the index of that item.

// [01:29] The condition that we're checking is if this item is greater than the next item, so we can use array-index-plus-one. If this condition is met, what we want to do is temporarily store our current item in a variable. We'll then set the current array index to the next item and set the next array index to our temporarily stored item.

// [01:52] This has swapped our two items, and thus, we can now set swap to true. That's our bubble sort algorithm in total.

// [02:01] I want to add something that helps us visualize what the algorithm does through each iteration, so I'm going to use the Print Array utility that I've imported into this file to display the state of the array before each comparison. Now I'm going to create an array of unsorted numbers.

// [02:20] We can pass that numbers array into our bubble sort function. If I log this into our terminal, we'll get to see the array as it transforms through each comparison and swap.

// [02:30] If we scroll all the way out, we can see how our array was sorted. Now this was happening before each comparison. The 10 quickly moved all the way to the right because it's greater than every current item.

// [02:41] We begin to see less drastic movements of items as the array becomes more and more sorted, all the way until we get to the end and we see what appears to be about 19 redundant passes through the array.

// [02:53] This happens because of the two swaps with the one in the very last iteration here, and then we go through all the rest of the iterations, the nine iterations of our array with swapped being true.

// [03:05] Then we need to make one more pass through the array even though we know it's sorted because we need to guarantee that nothing gets swapped.

const { printArray } = require('../utils')

function bubbleSort(array) {
  let swapped = false
  let i
  let count = 0

  do {
    swapped = false

    array.forEach((item, index) => {
      printArray(array)
      count++

      if (item > array[index + 1]) {
        const temporary = item

        array[index] = array[index + 1]
        array[index + 1] = temporary

        swapped = true
      }
    })
  } while (swapped)

  printArray(array)
  console.log(`Iterations: ${count}`)

  return array
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

bubbleSort(numbers)

exports.bubbleSort = bubbleSort



// 10.    INSERTION SORT

// Insertion sort is another sorting algorithm that closely resembles how we might sort items in the physical world. 
// We start at the second item in our collection and make the assumption that this item is a sorted list of length 1. 
// We then compare all the items before it and determine if it needs to be "inserted" to the left or right of our item. 
// We then move onto the second item, again comparing it to every item before it in the list, inserting those items correctly.

// Because this algorithm requires two loops, one inside the other, the worst case scenario of our algorithm still requires a time complexity of O(n^2). 
// This is also an inefficient sorting algorithm, but if our list is mostly sorted already, it will perform a slight bit better than bubble sort.

// Instructor: [00:00] To create our insertion sort algorithm, we'll create a function accepts an array, sorts it, and then returns it. Insertion sort works by using a nested loop. We'll take the first item in the list and assume we have a sorted list of length one. We'll then compare the next item to it and place it before or after it depending on which item is greater.

// [00:23] Since we'll have two loops going, we need to create two iteration variables. We'll use I and J. Next, our outer loop will start at the second element in the array, thus I will start at the value of one. This loop will loop through the entire length of the array from the second item. We can use I is less than array.length, and we can increment I.

// [00:49] We'll have an inner loop that starts at the first item in our list, so J will start at zero. We only want to loop up to the current item being iterated over in our outer loop, so our second statement in this is J is less than I. Here, we want to increment J.

// [01:07] Remember, this inner loop will reset each time our outer loop advances to the next number. What we want to do inside our two loops is compare the item at array index I to array index J. If item I is less than item J, then we want to move the item I to the position of item J.

// [01:28] I'm going to use array destructuring to get an item variable. I'm going to use the splice method to get it. We want to splice at the index of I. We want to only get one item deleted and given back to us. I'm going to use the splice method again to insert that item at the J position.

// [01:48] That's the insertion sort algorithm, but we want to be able to visualize it. I'm going to use the print array utility method I've brought into the file in order to print each time we make a comparison. I want to add one more print array before we return the array.

// [02:04] This way, we'll get to see the array in its final sorted form. Now that I have that, I can create an array of unsorted numbers and pass those numbers to our insertion sort function. If I save that and print that to the terminal, we can examine how the algorithm worked through each iteration.

// [02:24] If we scroll up, we could see how 10 moved one spot during the first one, a few more spots each time afterwards. What this reveals to us is how the inner loop of J was comparing more numbers each time I got a little bit bigger. Eventually, we could see 10's moved all the way to the right and that our list is sorted and organized.

const { printArray } = require('../utils')

function insertionSort(array) {
  let i
  let j
  let count = 0

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      printArray(array)
      count++

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1)
        array.splice(j, 0, item)
      }
    }
  }

  printArray(array)
  console.log(`Iterations: ${count}`)

  return array
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

insertionSort(numbers)

exports.insertionSort = insertionSort


// 11.       MERGE SORT

// Merge sort is a "divide and conquer" algorithm. 
// That is, we break the array down into smaller arrays that are easier and faster to sort; 
// then we stitch the results of calling merge sort on these smaller arrays back together to get our final sorted list.

// This is a recursive algorithm, which dramatically improves the efficiency of our sort compared to bubble or insertion sort. 
// The worst case scenario for our list is O(n log(n)), that is, we must go through every item at least once, hence the first n, but with each recursive call we operate on half the data set. 
// This means that when we double n, we only get one more operation, instead of n number of operations like in bubble or insertion sort.

// Instructor: [00:00] Merge sort is a recursive sorting algorithm. If you don't understand recursion, I recommend finding a resource to learn it. In brief, recursion is the act of a function calling itself. Thus, merge sort is accomplished by the algorithm calling itself to provide a solution.

// [00:17] Merge sort divides the given array into two halves, a left half and a right half. We call merge sort on these sub-arrays. We continue to split our sub-arrays until we get arrays whose length is less than two. We then begin to stitch our small arrays back together, sorting them on the way up.

// [00:36] This is an efficient algorithm because we start by sorting very small arrays. By the time we reach our larger ones, they are already mostly sorted, saving us the need for expensive loops. To create our algorithm, we'll actually need two functions, our merge sort function and a merge function that does the combining and sorting of our sub-arrays.

// [00:58] Merge sort receives an array as an argument. Since this function will be called recursively, we want to start with our base case scenario, that is the scenario in which we want to return right away rather than call it recursively. In our case, if the array we received has a length that's less than two, we need to return that array.

// [01:18] There's no further splitting that we need to do. Otherwise, if the array is longer than two, we need to divide it into left and right halves. I'm going to do that by finding the middle using math.flor and dividing the array length by two. This will give me an index I can use to divide the array into two sub-arrays.

// [01:38] We'll create our left array by using slice from zero to middle. We'll create our right array by using slice starting at the middle. Now that we have our left and right sub-arrays, as I explained before, what we're going to do is return a merged function that's calling merge sort on the left half and the right half.

// [01:59] Now that we have our merge sort function created, we need to create the merging function that will actually take our two sub-arrays and sort them out and stitch them back together. Our merge function needs an array that we can store our sorted items into. We'll create that first.

// [02:19] Now what we want to do is compare the first items in both the left and the right arrays. If the left item is less, we push that into our sorted array. If the right item is less, we push that into our sorted array. Since we're comparing these items and stashing them into the sorted array, we actually want to remove them from the left and the right arrays.

// [02:41] In this case since we're pulling from the beginning, we'll use the shift method. Now as we're doing this, we're changing the length of our arrays. We only want to compare them when we know that we have values in both arrays. We should do this during a while loop that makes sure that we have length in both arrays.

// [02:59] Now we need to consider a situation in which we've depleted the left or the right array but there are still items in the remaining array. What we want to do is we want to stitch together our sorted results and then place the remaining items in either the left or the right into a new array and return that.

// [03:18] I'm going to call this array results, and we'll use the spread operator to spread our sorted array then the left array and the right array. If the left or the right array is empty, it'll spread nothing. Then if the other one still has items, it'll spread the remaining items into it. To add some interest to this as we watch the algorithm take place, I want to actually log out the results for each merge.

// [03:42] Now that we have our merge sort function completed, let's create an array of unsorted numbers and call merge sort on them. Let's try logging out the results of our merge sort. You can see one stack merged 5 and 10, the next, 7 and 8, the next, put 4, 7, and 8 in the right places, then 4, 5, 7, 8, and 10 as it merged those all together.

// [04:04] Then, we got to the right half of our array. We had one and two got sorted, which were two and one, six and nine got sorted, then three, six, nine. Then, one, two, three, six, nine. Then we combine our two lengths of 5 together to end up with our sorted array, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

const { printArray } = require('../utils')

let count = 0

function merge(left, right) {
  count++
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  const results = [...sorted, ...left, ...right]

  console.log(results)
  console.log(count)

  return results
}

function mergeSort(array) {
  console.log(array)
  count++
  const { length } = array

  if (length < 2) {
    return array
  }

  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

mergeSort(numbers)

exports.mergeSort = mergeSort



// 12.      QUICK SORT

// Quick sort is another "divide and conquer" algorithm, calling itself recursively to sort our list. 
// With quick sort, we pick an index of our array to be the "pivot". 
// Every item is compared to the pivot, and pushed into a left or right array depending on that comparison. 
// Quick sort is then called on these left and right arrays.

// This is an efficient algorithm and uses less memory than merge sort. 
// The time complexity of quick sort is O(n log(n)). 
// Sorting any list requires at least one pass through the entire list, hence n, but increasing the size of our list doesn't lead to a linear or quadratic increase in operations. 
// Each doubling in size only results in one more level of operations.

// Instructor: [00:01] QuickSort is a recursive sorting algorithm. We take our original array, breaking it down into smaller arrays to sort, calling QuickSort again on the smaller arrays. In particular, QuickSort uses the concept of a pivot.

// [00:14] We pick one item. It could be at the head or the tail or somewhere in the array -- so long as it's consistent -- and then we compare each item to that pivot. If it's less than the pivot, we're going to push it into a left array. If it's more than the pivot, we're going to push it into a right array.

// [00:30] We then call QuickSort on those sub-arrays, merging them together, returning the array that's the result of QuickSort on the left, the pivot, and QuickSort on the right.

// [00:39] We'll make a function QuickSort to create our algorithm. QuickSort receives an array as an argument and will return an array as well. In this algorithm, we'll return a new array of sorted items, so for now, we'll return an empty array.

// [00:53] Next, since we know we will call QuickSort recursively, we need to establish our base case to prevent a stack overflow. If the array length is less than two, we want to return that array.

// [01:06] Now that we've finished our base case, what we want to do is establish our pivot. We'll use the last item in the array as our pivot. Since I'll need the pivot index later in the algorithm, I'm going to store that as a variable and derive the pivot from that.

// [01:20] I'll also create empty arrays for our left and right sub-arrays. We're going to push items into these arrays in just a moment. We'll create a four-loop that will iterate through every item in the array up to the pivot, hence, why we stored the pivot index.

// [01:35] For each item in our loop, we want to compare that current item to our pivot item. I'm going to store our current item as a variable. If the current item is less than the pivot, we'll push it into the left array, otherwise, we'll push it into the right array. With our loop done, we now want to call QuickSort recursively on our left and right arrays, placing our pivot in the middle.

// [02:00] Now that we've finished our algorithm, I want to add a way to visualize what's going on within it. I'm going to use the Print Array utility that I've imported at the top of this file and place it inside of QuickSort.

// [02:13] Now that we can visualize what's taking place in our algorithm, let's create an array of unsorted numbers and pass that to QuickSort. We'll save that and log it into our terminal and see what happens. Our first printout of the array is the complete unsorted array, and our pivot was four because it's the last item.

// [02:32] The first array we see called recursively is all the items less than four -- that's three, two, one. The pivot was one, thus we got three, two. The pivot was two, and we ended up with three as the final one because it was the only one we had available.

// [02:45] The next sub-array was everything left that was put into the right array -- 10, 6, 7, 9, 8, 5. Five is our pivot. Everything is greater than that, so that was put into another array, and it continues to break down. What this doesn't show us, though, is what our sorted array was.

// [03:02] A quick way for us to fix this is to store our returned array as a variable and log out that returned array and just see that again. I'm going to call this one more time. We can see how it starts to stitch them back together.

// [03:17] If we come back out, we see how they were divided, continue to be divided. Now that we get down to 10, we start to see them get stitched back up.

// [03:26] You can even see that four wasn't used in any of these iterations until the very final one, because it was the original pivot of our whole algorithm.