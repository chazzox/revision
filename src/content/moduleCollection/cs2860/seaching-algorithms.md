---
title: "searching algorithms"
description: "linear and binary search."
order: 3
---

## Linear search

as the name suggest, linear search will simply loop through an array from the start,
until it reaches its the end or finds the value, it is looking for. its the simplest
algorithm avaible for the search.

Worst case: $O(n)$

Best case: $O(1)$

## Binary search

Binary search is a more complex algorithm, but it is also more efficient. The search
space must always be sorted first. it works by first splitting the search space in
half and checking to see if the middle value is the value. if the middle value is not
what we are looking for, the algorithm then recurses based on if the middle value is
greater then our targest search either the lower or the upper half. Eventually the
algorithm will either find the value or the search space will be empty.

Best case: $O(1)$
