# Homework 9 - Data Structures and Algorithms

## Description

Implementation of data structures - Stack, Queue, Graph, Binary Tree and Linked List - to solve provided algorithmical problems.

## Data Structures

Implementation of data structures is in the folder dataStructures.

### Node
Representation of a simple node structure. Node holds value.

### Stack
Representation of a stack structure. Stack contains a list of nodes, and methods for adding and removing nodes from the stack.
These methods are: push, pop and peek.

### Queue
Representation of a queue structure. Queue contains a list of nodes, and methods for adding and removing nodes from the queue.
These methods are: enqueue, dequeue and peek

### Binary Tree
Representation of a binary tree structure. Binary tree allows user to insert nodes and traverse the tree in in-order, post-order and pre-order direction. Every traverse method takes O(n) time.

### Graph
Representation of a graph structure. Graph contains a list of nodes and a list of edges connecting this nodes together. Graph contains methods for inserting nodes and edges, searching with depht-first search and breadth-first search. Both searching algorithms take O(V+E) time.

### Linked List
Representation of a linked list structure. Linked list contains a head node and methods for inserting, deleting and searching for nodes. 

## Algorithmic problems

### Min-Max Stack
Representation of a structure derived from a stack. Min-max stack additionally has methods for returning minimum and maximum value in a stack in O(1) time.

### Binary Search Tree
Method for binary tree that checks if the binary tree is a binary search tree. Method uses the fact that in-order traverse through binary search tree returns a sorted array. If the array is sorted the method returns true, else it returns false. Method works in O(n) time.

### Graph Algorithms
Implementation of two algorithms - Dijkstra algorithm and breadth-first algorithm for searching for a shortest path in a graph. Dijkstra algorithm works if every edge in graph has a cost/weight assinged to it. It takes O(V^2) time for regular graphs, O[(V+E)*(log V)] for binary heaps and O[V*(log V) + E] for fibonacci heaps. Breadth-first algorithm for searching for a shortest path works for graphs without cost or weight of their edges. It takes O(V+E) time.

### Linked List Cycle
Method for finding if the linked list has a cycle. Method uses Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm). It takes O(n) time.

## Demonstration
Demonstration of every class and every algorithm is located in the demonstration folder. 

## Documentation
Documentation of every class is located in the docs folder

