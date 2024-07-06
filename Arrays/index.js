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
