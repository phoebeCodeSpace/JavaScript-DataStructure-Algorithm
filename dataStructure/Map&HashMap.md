# 字典和散列表

> 集合、字典和散列表可以存储不重复的值。在集合中，我们感兴趣的是每个值本身，并把它当作主要元素。在字典中，我们用[键，值]的形式来存储数据。在散列表中也是一样(也是以[键，值]对的形式来存储数据)。

## 字典

> 在字典中，存储的是[键，值] 对，其中键名是用来查询特定元素的。字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。字典也称作**映射**。

方法列表：

- `set(key,value)`: 向字典中添加新元素。
- `remove(key)`: 通过使用键值来从字典中移除键值对应的数据值。
- `has(key)`: 如果某个键值存在于这个字典中，则返回true，反之则返回false。
- `get(key)`: 通过键值查找特定的数值并返回。
- `clear()`: 将这个字典中的所有元素全部删除。
- `size()`: 返回字典所包含元素的数量。与数组的length属性类似。
- `keys()`: 将字典所包含的所有键名以数组形式返回。
- `values()`: 将字典所包含的所有数值以数组形式返回。

```js
function Dictionary(){
    var items = {};
    // 向字典中添加新元素
    this.set = function(key, value){
        items[key] = value;
    };
    // 通过使用键值来从字典中移除键值对应的数据值
    this.remove = function(key){
        if (this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    // 如果某个键值存在于这个字典中，则返回true，反之则返回false
    this.has = function(key){
        return items.hasOwnProperty(key);
    };
    // 通过键值查找特定的数值并返回
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    // 清空字典
    this.clear = function(){
        items = {};
    };
    // 返回字典所包含元素的数量
    this.size = function(){
        return Object.keys(items).length;
    };
    // 将字典所包含的所有键名以数组形式返回
    this.keys = function(){
        return Object.keys(items);
    };
    // 将字典所包含的所有数值以数组形式返回
    this.values = function(){
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.each = function(fn) {
        for (var k in items) {
            if (this.has(k)) {
                fn(k, items[k]);
            }
        }
    };
    // 返回items变量
    this.getItems = function(){
        return items;
    }
}
```

## 散列表

> 散列算法的作用是**尽可能快**地在数据结构中找到一个值。如果要在数据结构中获得一个值(使用get方法)，需要遍历整个数据结构来找到它。如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后返回值在表中的地址。

- `put(key,value)`: 向散列表增加一个新的项(也能更新散列表)。
- `get(key)`: 返回根据键值检索到的特定的值。
- `remove(key)`: 根据键值从散列表中移除值。
- `print()`: 输出散列表中的值。

```js
function HashTable() {
    var table = [];
    // 散列函数
    // 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // 为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数(mod)
        return hash % 37;
    };
    // 更好的散列函数
    // var djb2HashCode = function (key) {
    //     var hash = 5381;
    //     for (var i = 0; i < key.length; i++) {
    //         hash = hash * 33 + key.charCodeAt(i);
    //     }
    //     return hash % 1013;
    // };
    var hashCode = function (key) {
        return loseloseHashCode(key);
    };
    // 向散列表增加一个新的项(也能更新散列表)
    this.put = function (key, value) {
        //根据所给的key通过散列函数计算出它在表中的位置，进而作映射
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };
    // 从HashTable实例中查找一个值
    this.get = function (key) {
        return table[hashCode(key)];
    };
    // 从散列表中移除值
    this.remove = function(key){
        table[hashCode(key)] = undefined;
    };
    // 输出HashTable 中的值
    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };
}
```

### 处理散列表中的冲突

使用 loseloseHashCode 可能会存在相同的键值，此时，当我们通过相同的散列值去取属性值的时候会出现相互覆盖、数据丢失的情况。处理冲突有几种方法：分离链接，线性探查和双散列法，这里介绍前两种。

#### 分离链接

> 分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单的方法，但是它在HashTable实例之外还需要额外的存储空间。

```js
function HashTableSeparateChaining(){
    var table = [];
    // 新的辅助类来表示将要加入 LinkedList实例的元素
    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var hashCode = function(key){
        return loseloseHashCode(key);
    };
    this.put = function(key, value){
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        //验证是否被占据了
        if (table[position] == undefined) {
            // 如果这个位置是第一次被加入元素，在这个位置上初始化一个LinkedList类的实例
            table[position] = new LinkedList();
        }
        // append方法向LinkedList实例中添加一个ValuePair实例 (键和值)
        table[position].append(new ValuePair(key, value));
    };
    this.get = function(key) {
        var position = hashCode(key);
        // 确定在特定的位置上是否有元素存在
        if (table[position] !== undefined  && !table[position].isEmpty()){
            var current = table[position].getHead();
            //遍历链表来寻找键值(从链表的头部遍历到尾部)
            while(current.next){
                if (current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
            //检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key){
                return current.element.value;
            }
        }
        return undefined;
    };
    this.remove = function(key){
        var position = hashCode(key);
        if (table[position] !== undefined){
            var current = table[position].getHead();
            while(current.next){ //遍历
                if (current.element.key === key){
                    table[position].remove(current.element);
                    if (table[position].isEmpty()){
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key){
                table[position].remove(current.element);
                if (table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };
    this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
               console.log(table[i].toString());
            }
        }
    };
}
```

#### 线性探查

> 当想向表中某个位置加入一个新元素的时候，如果索引 为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试 index+2的位置，以此类推。

```js
function HashLinearProbing(){
    var table = [];
    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var hashCode = function(key){
        return loseloseHashCode(key);
    };
    this.put = function(key, value){
        // 先获得由散列函数生成的位置
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        // 验证这个位置是否有元素存在
        if (table[position] == undefined) {
            // 如果没有元素存在，就在这个位置加入新元素(一个ValuePair的实例)。
            table[position] = new ValuePair(key, value);
        } else {
            // 如果这个位置已经被占据了，需要找到下一个没有被占据的位置
            var index = ++position;
            while (table[index] != undefined){
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };
    this.get = function(key) {
        var position = hashCode(key);
        // 确定这个键是否存在
        if (table[position] !== undefined){
            // 检查要查找的值是否就是这个位置上的值
            if (table[position].key === key) {
                return table[position].value;
            } else {
                // 在散列表中的下一个位置继续查找，直到找到一个键值与要找的键值相同的元素
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key){
                    index++;
                }
                // 验证一下当前项就是要找的项
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined;
    };
    // remove方法和get方法基本相同，不同之处在于将要移除元素其赋值为undefined
    this.remove = function(key){
        var position = hashCode(key);
        if (table[position] !== undefined){
            if (table[position].key === key) {
                table[position] = undefined;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key){
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;
                }
            }
        }
    };
    this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ' -> ' + table[i].toString());
            }
        }
    };
}
```

### 创建更好的散列函数

我们实现的“lose lose”散列函数并不是一个表现良好的散列函数，因为它会产生太多的冲 突。如果我们使用这个函数的话，会产生各种各样的冲突。

一个表现良好的散列函数是由几个方面构成的:插入和检索元素的时间(即性能)，当然也包括较低的冲突可能性。

另一个可以实现的比“lose lose”更好的散列函数是djb2:

```js
var djb2HashCode = function (key) {
    // 它包括初始化一个hash变量并赋值为一个质数
    var hash = 5381;
    // 然后迭代参数key，将hash与33相乘(用来当作一个魔力数)，并和当前迭代到的字符的ASCII码值相加
    for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    // 将使用相加的和与另一个随机质数
    return hash % 1013;
};
```