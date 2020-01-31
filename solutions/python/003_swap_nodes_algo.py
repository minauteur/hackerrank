# https://www.hackerrank.com/challenges/swap-nodes-algo/problem
import os
import sys
import collections

# Complete the swapNodes function below.
class Node:
    def __init__(self, d):
        self.data = d


def build_tree(indices):
    # collect the node values, substituting None for -1 (null)
    # otherwise instantiating a new node from the next available value
    def f(x): return None if x == -1 else Node(x)
    # mapping Node/null values for each child
    children = [list(map(f, x)) for x in indices]
    # for every child node/child node pair encountered, add to total nodes
    nodes = {n.data: n for n in filter(None, sum(children, []))}
    # root node will always be 1
    nodes[1] = Node(1)
    # enumerate over children by index/value
    for idx, child_pair in enumerate(children):
        # assign left and right values for each child_pair that exists (!= None)
        nodes[idx+1].left = child_pair[0]
        nodes[idx+1].right = child_pair[1]
    # return the current node
    return nodes[1]

# traverse tree in order


def inOrder(root):
    stack = []
    curr = root
    while stack or curr:
        if curr:
            stack.append(curr)
            curr = curr.left
        elif stack:
            curr = stack.pop()
            yield curr.data
            curr = curr.right
# swap nodes by traversing recursively by index, and reversing node order at depths
# where k % depth === 0
def swapNodes(indices, queries):
    root = build_tree(indices)
    for k in queries:
        h = 1
        q = collections.deque([root])
        while q:
            for _ in range(len(q)):
                node = q.popleft()
                if h % k == 0:
                    node.left, node.right = node.right, node.left
                q += filter(None, (node.left, node.right))
            h += 1
        yield inOrder(root)
