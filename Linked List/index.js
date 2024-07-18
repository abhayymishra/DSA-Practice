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

// Problem-5 : Merge the two sorted linked list(Leetcode 21)

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let dummy = new ListNode(-1);
  let prev = dummy;
  let c1 = list1,
    c2 = list2;
  while (c1 !== null && c2 !== null) {
    if (c1.val < c2.val) {
      prev.next = c1;
      c1 = c1.next;
    } else {
      prev.next = c2;
      c2 = c2.next;
    }
    prev = prev.next;
  }
  if (c1 !== null) {
    prev.next = c1;
  }
  if (c2 !== null) {
    prev.next = c2;
  }
  return dummy.next;
};
