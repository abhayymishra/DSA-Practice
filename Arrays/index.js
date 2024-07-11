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
