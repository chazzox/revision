---
title: "sorting algorithms"
description:
    "quick, merge and bubble sort. complexities and implementation details included"
order: 2
---

## Quick sort

This algorithm is based on the device and conquer. Meaning it will device the problem
into smaller and smaller chunks. solve these smaller chunks individually, and then
combine the results until the solution is obtained.

At the core of the algorithm is the idea of the pivot, which is an element of the
sort space that we pick to compare all of elements of the sort space to. The pivot
can be selected using a number of criteria such as:

-   first element of the list
-   last element of the list
-   randomly select an element from the list
-   middle element of the list

When a pivot is picked, all values of the array are moved such that the smaller
values appear before and the greater values appear after. The array is then split and
the steps are continued. This is done recursively until the sub arrays are of size 1.
Then the last element in all of the sub arrays are combined to form the sorted array.

See the image below for a visual representation of the algorithm.

![quick sort](/QuickSort.png)

worst case: $O(n^2)$

good case: $O(nlog(n))$

## Merge sort

Merge sort, like quick sort, is also a divide and conquer algorithm. It works by
splitting a list into smaller and smaller sub lists, until the sub lists are of
length 2 or 1. The sub lists are then sorted, then combined and sorted again. The
process is repeated until the entire list is sorted.

See the image below for a visual representation of the algorithm.

![merge sort](/MergeSort.png)

for all cases, merge sort has time complexity of: $O(nlog(n))$

## Insertion sort

Unlike the previous two algorithms, insertion sort is not a divide and conquer.
Instead it works by iterating through the list left to right. It will compare element
in the current index to all elements to the left of it, Until the element is greater
then the element to the left of it it. Then it is in the correct position. The
algorithm does this for all elements in the list. And once it is complete the list is
sorted

![insertion sort](/insertionsort.png)

worst case: $O(n^2)$

best case: $O(n)$

## Selection sort

like insertion sort, selection sort works by iterating through a list. it maintains
two sub lits, one sorted and one unsorted. the algorithm will iterate through the
unsorted list, find the smallest element and push it to the sorted list and pop it
from the unsorted.

![selection sort](/SelectionSort.png)

for all cases, selection sort has time complexity of: $O(n^2)$
