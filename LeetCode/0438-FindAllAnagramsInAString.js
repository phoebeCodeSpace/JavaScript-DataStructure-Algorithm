/**
 * @see {@link https://leetcode.com/problems/find-all-anagrams-in-a-string/description/}
 * @description 找出字符串s中p的相同字母异序词的位置
 * @example
 * ```
 * Input:
 *   s: "cbaebabacd"
 *   p: "abc"
 * Output: [0, 6] // cba & bac
 * ```
 */

 /**
  * @param {string} s
  * @param {string} p
  * @return {number[]}
  */

var findAnagrams = function(s, p) {

    const resultArray = [];
    const pLength = p.length;
    const sLength = s.length;

    // create two empty arrays with 0 inside
    const pWindow = new Array(26).fill(0);
    const sWindow = new Array(26).fill(0);

    //assume only a-z
    //TODO: add checker later if input has invalid characters
    [...p].forEach(character => {
        // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
        pWindow[character.charCodeAt(0) - 97]++
    });

    [...s].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= pLength) sWindow[s.charCodeAt(index - pLength) - 97]--
        sWindow[character.charCodeAt(0) - 97]++
        // compare two strings
        if (pWindow.join() === sWindow.join()) resultArray.push(index + 1 - pLength)
    });

    return resultArray
};