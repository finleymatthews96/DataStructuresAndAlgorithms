/* Hippo Onsite Interview
Implement lodash . get

const _ = require('lodash');

const o = {
  "a": 1,
  "b": 2,
  "c": {
    "d": 3, 
    }
  }
};

getDeepKeys(o) should equal ['a', 'b', 'c.d']
array of all leaves

*/

// O(n) T where n is amount of nodes
function getDeepKeys(o){
  if (typeof o !== 'object') return ['']
  let result = [];
  
  Object.keys(o).forEach((key) => {
    let nextBranch = getDeepKeys(o[key])
    nextBranch = nextBranch.map((combo) => {
      if (combo.length === 0) return key
      return key + '.' + combo;
    })
    nextBranch.forEach((newCombo) => result.push(newCombo));                            
  })
  
  return result;
}

/*
Now, instead, get a map of each leaf to its value. 

getFlatMap(o) should equal {'a': 1, 'b': 2, 'c.d': 3}

*/

// O(n) where n is amount of nodes
function getFlatMap(o){
  const array = getDeepKeysWithValues(o);
  let result = {};
  
  for (const subarray of array){
   result[subarray[0]] = subarray[1]; 
  }
  
  return result;
}

function getDeepKeysWithValues(o){
  if (typeof o !== 'object') return [['', o]]
  let result = [];
  
  Object.keys(o).forEach((key) => {
    let nextBranch = getDeepKeysWithValues(o[key])
    nextBranch = nextBranch.map((combo) => {
      if (combo[0].length === 0) {
        combo[0] = key;
      } else {
        combo[0] = key + '.' + combo[0]
      }
      return combo;
    })
    nextBranch.forEach((newCombo) => result.push(newCombo));                            
  })
  
  return result;
}
