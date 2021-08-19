/* LRU Cache 
LeetCode Medium / Algo Expert Very Hard

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

*/

class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
		this.cache = {};
		this.currentSize = 0;
		this.mostRecent = new DoublyLinkedList();
  }

  insertKeyValuePair(key, value) {
    if (!(key in this.cache)){
			if (this.currentSize === this.maxSize){
				this.evictLeastRecent()
			} else {
				this.currentSize++;
			}
			this.cache[key] = new Node(key, value)
		} else {
			this.replaceKey(key, value);
		}
		this.updateMostRecent(this.cache[key]);
  }
	
	getValueFromKey(key) {
		if (!(key in this.cache)) return null;
		this.updateMostRecent(this.cache[key]);
		return this.cache[key].value;
	}

  getMostRecentKey() {
    if (!this.mostRecent.head) return;
		return this.mostRecent.head.key;
  }
	
	evictLeastRecent (){
		const keyToRemove = this.mostRecent.tail.key;
		this.mostRecent.removeTail()
		delete this.cache[keyToRemove]
	}
	
	updateMostRecent(node){
		this.mostRecent.setHeadTo(node);
	}
	
	replaceKey(key, value){
		if (!key in this.cache){
			throw new Error("The provided key isn't in the cache");
		}
		this.cache[key].value = value;
	}
}

class DoublyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
	}
	
	setHeadTo(node) {
		if (this.head === node) return
		if (this.head === null){
			this.head = node;
			this.tail = node;
		} else if (this.head === this.tail){
			this.tail.prev = node;
			this.head = node;
			this.head.next = this.tail;
		} else if (this.head !== node) {
			if (this.tail === node) this.removeTail();
			node.removeBindings();
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
	}
	
	removeTail() {
		if (this.tail === null) return;
		if (this.tail === this.head){
			this.head = null;
			this.tail = null;
			return;
		} 
		this.tail = this.tail.prev
		this.tail.next = null;
	}
}

class Node {
	constructor(key, value){
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
	
	removeBindings() {
		if (this.prev != null){
			this.prev.next = this.next
		}
		if (this.next !== null){
			this.next.prev = this.prev;
		}
		this.prev = null;
		this.next = null;
	}
}
