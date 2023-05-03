---
title: "Data Structures"
description:
    "a bunch of data structures, their time complexities, and their java
    implementations *maybe*"
order: 5
---

| ArrayList                | LinkedList                                                            |
| ------------------------ | --------------------------------------------------------------------- |
| Disadvantage: fixed size | Disadvantage: No random access (harder to navigate), uses more memory |
|                          | Advantage: easier to modify and extend Constant time $O(n)$           |

## bst

a binary search tree

### traversing binary trees

-   in order: like a cartesian tree
-   pre order: sub tree, rtl
-   post order: this is a weird one, its will do the lowest tree node trio 'in order'
    then move onto the next

### avl

## queues

-   think of it like a spotify queue or a line queue
-   both insert and delete operations are done in $O(1)$ when using a doublely linked
    list

## heaps

a type of tree

-   **min-heap:** value of $i \ge$ value of parent, they're also good for priority
    queue's
-   **max-heap:** value of $i \le$ value of parent max heapify running time
    $O(\log n)$

in an array to calculate the index of a nodes relative relations the following
formulae can be used

```
left(i) = 2*i
right(i) = 2*i + 1
parent(i) = floor(i/2)
```

### fibonacci heaps

-   implements a mergeable heap
-   collection of un connected min-heap trees

| Operation <br/> &nbsp; | Binary Heap <br/> _worst case_ | Fibonacci Heap <br/> _amortized_ |
| ---------------------- | ------------------------------ | -------------------------------- |
| make heap              | $O(1)$                         | $O(1)$                           |
| insert                 | $O(\log n)$                    | $O(1)$                           |
| minimum                | $O(1)$                         | $O(1)$                           |
| extract-min            | $O(\log n)$                    | $O(\log n)$                      |
| union                  | $O(\log n)$                    | $O(1)$                           |
| decrease key           | $O(\log n)$                    | $O(1)$                           |
| delete                 | $O(\log n)$                    | $O(\log n)$                      |

## hash tables

-   hash tables are incredibly useful for search
    -   average they compute in $O(1)$
    -   worst they compute in $O(n)$
-   also offer insert and delete functionality similar to heaps and queues/stack
