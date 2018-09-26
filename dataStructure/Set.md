# 集合

> 集合是由一组无序且唯一(即不能重复)的项组成的。你也可以把集合想象成一个既**没有重复元素**也**没有顺序概念**的数组。

集合可以做如下操作：

- 并集: 对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
- 交集: 对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。
- 差集: 对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
- 子集: 验证一个给定集合是否是另一集合的子集

## 创建一个集合

方法列表：

- `add(value)`: 向集合添加一个新的项。
- `remove(value)`: 从集合移除一个值。
- `has(value)`: 如果值在集合中，返回true，否则返回false。
- `clear()`: 移除集合中的所有项。
- `size()`: 返回集合所包含元素的数量。
- `values()`: 返回一个包含集合中所有值的数组。
- `union()`: 并集
- `intersection()`: 交集
- `difference()`: 差集
- `subset()`: 子集

```js
function Set() {
    var items = {};
    //判定值是否在集合中
    this.has = function(value){
        return items.hasOwnProperty(value);
    };
    //向集合添加一个新的项
    this.add = function(value){
        if (!this.has(value)){  // 检查它是否存在于集合中
            items[value] = value; // 如果不存在，就把value添加到集合中，返回true
            return true;
        }
        return false; // 如果集合中已经有这个值，就返回false，表示没有添加它
    };
    //从集合移除一个值
    this.remove = function(value){
        if (this.has(value)){
            delete items[value];  // 如果存在，就从集合中移除，返回true，表示值被移除
            return true;
        }
        return false;
    };
    // 清空集合
    this.clear = function(){
        items = {};   // 把一个空对象重新赋值给它
    };
    // 集合元素的个数
    // this.size = function(){
    //     return Object.keys(items).length;
    // };
    this.size = function(){
        var count = 0;
        for(var prop in items) {
            if(items.hasOwnProperty(prop))
                ++count;
        }
        return count;
    };
    //集合所有值的数组
    // this.values = function(){
    //     return Object.keys(items);
    // };
    this.values = function(){
        var keys = [];
        for(var key in items){
            keys.push(key);
        }
        return keys;
    };
    //获取集合
    this.getItems = function(){
      return items;
    };
    //并集
    this.union = function(otherSet){
        var unionSet = new Set(); // 创建一个新的集合，代表两个集合的并集
        // 获取第一个集合所有的值(values)，遍历并全部添加到代表并集的集合中
        var values = this.values();
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        // 获取第二个集合所有的值(values)，遍历并全部添加到代表并集的集合中
        values = otherSet.values();
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //交集
    this.intersection = function(otherSet){
        var intersectionSet = new Set(); // 创建一个新的集合，存储两个集合的交集
        var values = this.values();
        for (var i=0; i<values.length; i++){
            // 遍历当前Set实例所有的值，验证它们是否也存在于otherSet实例
            // 如果存在，就将其添加到创建的intersectionSet变量中
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    //差集
    this.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for (var i=0; i<values.length; i++){
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    //子集
    this.subset = function(otherSet){
        // 验证的是当前Set实例的大小
        // 子集的元素个数要小于otherSet的元素个数
        if (this.size() > otherSet.size()){
            return false;
        } else {
            var values = this.values();
            for (var i=0; i<values.length; i++){
                if (!otherSet.has(values[i])){  //有一个没有返回false
                    return false;
                }
            }
            return true;
        }
    };
}
```