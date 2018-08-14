/**
 * @see {@link  https://leetcode.com/problems/valid-parentheses/description/ }
 * @description 校验一串包含 '(', ')', '{', '}', '[' , ']'的字符串是否是符合规范的，符合规则的情况是：
 * 1. 左括号与右括号类型相同
 * 2. 左括号相对应的右括号必须在对应的位置上
 * 3. 如果是空字符串也是符合规则的
 * @example {
 * Input: "()[]{}"
 * Output: true
 * Input: "{[]}"
 * Output: true
 * Input: "([)]"
 * Output: false
 * }
 * @param {string} s
 * @return {boolean}
 */

 
/**
 * 方法1： 使用Map找出成对的字符串
 * 1. 创建Map
 * 2. 创建stack存放左括号
 * - 如果是 '()[]{}' 存在的情况，每第i个push的左括号在第i+1处pop
 * - 如果是 '{[()]}' 存在的情况，stack分别push左括号，再一次pop左括号
 * - 其他不符合的情况， stack 不会清空完全
 */
const MAP = {
    '(': ')',
    '[': ']',
    '{': '}',
};

var isValid = function(s) {
    let stack = [];
    for (let c of s) {
        if (MAP[c]) stack.push(c);
        else if (c !== MAP[stack.pop()]) return false;
    }
    return !stack.length;
};

/**
 * 方法2：根据index找出成对的字符串
 * 与方法1类似
 * 1. "({[]})"每个字符串代表一个序号，0对应5，1对应4，2对应3，即成对的两个字符串相加为5
 * 2. 创建stack存放序号
 * - 如果是 '()[]{}' 存在的情况，
 * - 如果是 '{[()]}' 存在的情况，stack分别push左括号，再一次pop左括号
 */
var isValid = function(s) {
    var stack = []
    for (var l of s)
        if ((i = "({[]})".indexOf(l)) > -1)
            if (stack[stack.length - 1] + i === 5)
                stack.length--;
            else
                stack.push(i);
    return stack.length === 0
};

/**
 * 方法3：正则
 * 1. 创建正则
 * 2. 两两抵消
 * - 如果是 '()[]{}' 存在的情况，从左至右依次两两抵消
 * - 如果是 '{[()]}' 存在的情况，从中间开始成对抵消
 */
var isValid = function(s) {
    var i = 0,
        r = /\(\)|\[\]|\{\}/g,
        length = s.length;
    if(length%2==1){return false;}
    while(i<length/2){
        s = s.replace(r,"");
        i++;
    }
    return s==="";
};