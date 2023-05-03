---
title: "trees and graphs"
description: "Binary Search Trees, AVL Trees, and min/max heaps"
order: 4
---

## graph

a graph can be described mathematically as a set of objects that are in some sense
related. we can represent this relationship as a set of pairs of objects. These pairs
are are made up of vertices and edges, we can think as edges as the paths between are
nodes (vertices) i'll probably be using this terminology interchangeable throughout
this page

#### connected graph

-   contains paths between every pair of vertices; starting from any vertex, we can
    traverse the graph to reach any other vertex through a sequence of edges.
-   Formally, a graph $G=(V,E)$ is connected if for every pair $u$, $v$ that is an
    element of $V$, there exists a path in $G$ between $u$ and $v$.

#### connectivity components

-   Maximal connected subgraphs of a graph.
-   Each connectivity component represents a set of vertices that are all reachable
    from each other, but not from any vertex in another component.
-   It is not possible to add any more vertices or edges to the subgraph without
    disconnecting it from the rest of the graph.

![subgraph](/subgraph.jpg)

#### directed/undirected graph

directed graph is when a graph cares about the rules at which you are traversing two
nodes, in a directed graph you might be able to go from A to B but not from B to A or
vise versa or both!

while an undirected graph does not care about any of that nonsense

### kruskals

kruskals algorithm is a way to generate minimum spanning tree, in other words, it
generates an object that contains a way to traverse the graph using the smallest
possible weights.

You start by picking the smallest edge, then keep picking the smallest possible edge
that do no not create a cycle. a cycle is basically a path through the nodes where it
can start and end at the same node ie, a loop.

if there are multiple candidates for a given node to pick, you can pick any, as long
as it does not create a cycle like mentioned previously

<iframe 
    class='w-full'
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/71UQH7Pr9kU"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

this algorithm has a time complexity of $O(E\log E)$ where E is the number of edges
and they are sorted using merge sort by weight.

### prims

prims is another way to create an mst.

you start by creating an empty list called visited, this stores all the nodes on the
graph we have visited

then pick any node on the graph and add it to the new list. after this examine all
nodes reachable via this node. and pick the node which has the shortest traveling
weight. add this node to our visited list and recurse by looking at all nodes
visitable by the new nodes in our visited array. keep selecting the shortest path to
an unvisited node, when all nodes have been visited, the order of our visited nodes
is the mst

when using adjacency matrix the time complexity of prims is $O(v^2)$ where v is the
number of vertices (paths)

and when using an adjacency matrix and a binary heap the time complexity is
$O(V \log V + E \log E)$

<iframe 
    class='w-full'
    width="560"
    height="315" 
    src="https://www.youtube.com/embed/cplfcGZmX7I" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

### dijkstra's

dijkstra's algorithm generates a data structure that contains the shortest path from
one node to every other node

to begin, create a list with all of the *un*visited nodes in, this will come in
useful later.

create another table that tracks the different distances to every node, to begin all
nodes that have not been visited, can be assumed to have a distance of $\infty$

the next step is to examine the different edges leaving A, and update the distance to
the vertices that the edges lead to. (but do not mark them off the unvisited node
list yet!)

next, pick the node with the smallest distance and mark it off the unvisited node
list. now, using the nodes we have visited, update the distances using the same
procedure as earlier. and rinse and repeat, eventually you are left with no unvisited
nodes and the smallest possible distance from our first node to each of the others.

when selecting nodes, it does not matter which ones you pick, as long as it is the
smallest distance in our current list of node weights. unlike kruskals and prims you
do not need to worry about creating a cycle

<iframe 
    class='w-full'
    width="560"
    height="315" 
    src="https://www.youtube.com/embed/_lHSawdgXpI" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
></iframe>

the time complexity of this algorithm when using a fibonacci heap is
$O( \lvert E \rvert + \lvert V \rvert \log \lvert V \rvert )$

## tree

a tree is an undirected graph where by there is only one way to get to any node ie,
there are no cycles and no redundant paths. there are different types of trees and
this will be covered later

### traversing trees

#### BFS (breadth first search)

uses a fifo queue

iterates over each depth level of the graph, starting at the root at working its way
down,

going left to right, the queue structure would there for read right to left.

<iframe
    class='w-full'
    width="560"
    height="315" 
    src="https://www.youtube.com/embed/HZ5YTanv5QE" 
    title="YouTube video player"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
></iframe>

Time complexity: $O(\lvert V \rvert + \lvert E \rvert)$

#### DFS (depth first search)

search's all of the subtrees going left to right.

<iframe 
    class='w-full'
    width="560" 
    height="315"
    src="https://www.youtube.com/embed/Urx87-NMm6c" 
    title="YouTube video player" 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

Time complexity: $O(\lvert V \rvert + \lvert E \rvert)$
