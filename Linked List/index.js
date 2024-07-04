// problem-1 : Reverse the linked list(Leetcode 206)

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let curr = head;
  let prev = null;
  while (curr !== null) {
    let forw = curr.next;
    curr.next = prev;
    prev = curr;
    curr = forw;
  }
  return prev;
};

// Problem-2 : Find the middle of the linked list(Leetcode 876)

var middleNode = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let curr = head;
  let forw = head;
  while (forw !== null && forw.next !== null) {
    forw = forw.next.next;
    curr = curr.next;
  }
  return curr;
};
