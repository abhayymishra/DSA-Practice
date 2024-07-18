// Problem-1 : Maximum subarray sum(Leetcode 53)

var maxSubArray = function (nums) {
  let len = nums.length;
  let cSum = nums[0];
  let oSum = nums[0];
  for (let i = 1; i < len; i++) {
    if (cSum >= 0) {
      cSum += nums[i];
    } else {
      cSum = nums[i];
    }
    if (cSum > oSum) {
      oSum = cSum;
    }
  }
  return oSum;
};

// Problem-2 : Search in rotated sorted array(Leetcode 33)

var pivotIdx = function (arr) {
  let len = arr.length;
  let left = 0,
    right = len - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

var binarySearch = function (left, right, arr, target) {
  let len = arr.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
var search = function (nums, target) {
  let len = nums.length;
  let pIdx = pivotIdx(nums);
  let ans = binarySearch(0, pIdx - 1, nums, target);
  if (ans !== -1) {
    return ans;
  }
  return binarySearch(pIdx, len - 1, nums, target);
};

// Problem - 3 : Segregate 0s and 1s in an array

class Solution {
  segregate0and1(arr) {
    // code here
    let i = 0,
      j = -1;
    while (i < arr.length) {
      if (arr[i] === 0) {
        j++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++;
    }
  }
}

// Problem-4 : Segregate 0s , 1s , 2s in an array

var swap = function (i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var segregateZeroesOnesTwoes = function (arr) {
  let len = arr.length;
  let i = 0,
    p1 = -1,
    p2 = len - 1;

  while (i <= p2) {
    if (arr[i] === 0) {
      swap(++p1, i++, arr);
    } else if (arr[i] === 2) {
      swap(p2--, i, arr);
    } else i++;
  }
};

// Problem-5 : Merge Intervals(leetcode 56)

var merge = function (intervals) {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  let [prevS, prevE] = intervals[0];
  for (let i = 1; i < len; i++) {
    let [nextS, nextE] = intervals[i];
    if (nextS <= prevE) {
      prevE = Math.max(prevE, nextE);
    } else {
      res.push([prevS, prevE]);
      [prevS, prevE] = intervals[i];
    }
  }
  res.push([prevS, prevE]);
  return res;
};

// Problem-6 : Find second largest element in an array(gfg)

class Solution {
  // Function returns the second largest element
  print2largest(arr) {
    // Code Here
    let len = arr.length;
    let maxm = -1,
      secondLargest = -1;
    for (let i = 0; i < len; i++) {
      if (arr[i] > maxm) {
        secondLargest = maxm;
        maxm = arr[i];
      }
      if (arr[i] > secondLargest && arr[i] < maxm) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
}

// Problem-7 : Kth largest element in an array

// Problem-8 : Counting Bits(Leetcode 338)

var countBits = function (n) {
  let result = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result[i] = result[Math.floor(i / 2)] + 1;
    } else {
      result[i] = result[i / 2];
    }
  }
  return result;
};
