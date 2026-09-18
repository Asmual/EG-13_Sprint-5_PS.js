/******** 01. Remove Duplicates from Sorted Array ********/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// console.log(removeDuplicates([1, 1, 2]));
// Expected Output: 2

/********** 02. Binary Search **********/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
// Expected Output: 4

/********** 03. Search Insert Position **********/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// Expected Output: 2

/********** 04. Maximum Depth of Binary Tree **********/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

// function TreeNode(val, left, right) { this.val = (val===undefined ? 0 : val); this.left = (left===undefined ? null : left); this.right = (right===undefined ? null : right); }
// const tree4 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(maxDepth(tree4));
// Expected Output: 3

/********** 05. Invert Binary Tree **********/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};

// function TreeNode(val, left, right) { this.val = (val===undefined ? 0 : val); this.left = (left===undefined ? null : left); this.right = (right===undefined ? null : right); }
// const tree5 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
// console.log(invertTree(tree5));
// Expected Output: Inverted Tree

/********** 06. Product of Array Except Self **********/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// Expected Output: [24, 12, 8, 6]

/********** 07. Rotate Array **********/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

// const nums7 = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums7, 3);
// console.log(nums7);
// Expected Output: [5, 6, 7, 1, 2, 3, 4]

/********** 08. Min Stack **********/
/**
 * @return {void}
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // Expected Output: -3
// minStack.pop();
// console.log(minStack.getMin()); // Expected Output: -2

