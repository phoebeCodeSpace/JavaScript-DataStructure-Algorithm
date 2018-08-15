/**
 * @see {@link https://leetcode.com/problems/most-common-word/description/}
 * @description 给一段话一组禁止的词语，求这段话除禁止的词语出现次数最多的词语，不区分大小写。
 */

 /**
  * @param {string} paragraph
  * @param {string[]} banned
  * @return {string}
  */


 var mostCommonWord = (paragraph, banned) => {
     const bset = new Set(banned);
     const parr = paragraph.toLowerCase().split(/\W+/);
     const counts = {};
     for (const w of parr) {
         counts[w] = (counts[w] || 0) + !bset.has(w);
     }
     return Object.entries(counts).reduce((res, arr) => arr[1] > res[1] ? arr : res, ['', -Infinity])[0];
 };


 var mostCommonWord = function(paragraph, banned) {
     //Split the paragraph into an array of words in lowercase
     const words = paragraph.toLowerCase().split(/\W/);
     //Create a map to act as histogram of words
     const mp = Object.create(null);
     //Filter out empty strings and make the histogram
     words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
     //Rather than deleting banned words, just set its value to a negative number
     banned.map(x => mp[x] = -1)
     //Return the word with the highest count in the histogram
     return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
 };