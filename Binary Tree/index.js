// Problem-1 : Top View of a Binary Tree(gfg)

class vPair {
  constructor(node, hl) {
    this.node = node;
    this.hl = hl;
  }
}

class Solution {
  // Function to return a list of nodes visible from the top view
  // from left to right in Binary Tree.
  width(node, hl, minMax) {
    if (node === null) return;
    minMax[0] = Math.min(minMax[0], hl);
    minMax[1] = Math.max(minMax[1], hl);

    this.width(node.left, hl - 1, minMax);
    this.width(node.right, hl + 1, minMax);
  }

  topView(root) {
    let ans = [];
    if (root === null) return ans;

    let minMax = [0, 0];
    this.width(root, 0, minMax);
    let len = minMax[1] - minMax[0] + 1;
    for (let i = 0; i < len; i++) ans.push(null);

    let queue = [];
    queue.push(new vPair(root, -minMax[0]));

    while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let pair = queue.shift();
        let node = pair.node;
        let hl = pair.hl;

        if (ans[hl] === null) ans[hl] = node.data;

        if (node.left !== null) queue.push(new vPair(node.left, hl - 1));
        if (node.right !== null) queue.push(new vPair(node.right, hl + 1));
      }
    }

    return ans;
  }
}

// Problem - 2 : Validate Binary Search Tree(Leetcode 98)

var isValidBST = function (root) {
  let prev = null;

  const inorder = function (node) {
    if (node === null) return true;

    if (!inorder(node.left)) return false;

    if (prev !== null && node.val <= prev.val) return false;
    prev = node;

    return inorder(node.right);
  };

  return inorder(root);
};
