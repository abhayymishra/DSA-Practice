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

// Problem-3 : Detect linked list has a cycle(Leetcode 141)

var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

// Problem-4 : Remove duplicates from a sorted linked list(Leetcode 83)

var deleteDuplicates = function (head) {
  let dummy = new ListNode(-101);
  let itr = dummy;
  let curr = head;
  while (curr !== null) {
    if (itr.val !== curr.val) {
      itr.next = curr;
      itr = itr.next;
      curr = curr.next;
    } else if (curr.val === itr.val) {
      curr = curr.next;
    }
  }
  if (curr === null) itr.next = null;
  return dummy.next;
};
