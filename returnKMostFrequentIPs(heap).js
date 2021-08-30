/* Return K Most Frequent IPs
Andrew got this on Amazon Interview

given list of logs
where log is object that contains IP address
and given a k integer that denotes the num of IPs to return
return array with K most frequent IPs

input:
[
{IP: '123.00.43.1'},
{IP: '123.00.43.1'},
{IP: '421.23.01.2'},
{IP: '945.92.14.8'},
{IP: '945.92.14.8'},
{IP: '945.92.14.8'},
{IP: '345.67.89.0'},
{IP: '345.67.89.0'},
{IP: '345.67.89.0'},
{IP: '345.67.89.0'}
]
k = 3

output (order does not matter):
[
'945.92.14.8',
'123.00.43.1',
'345.67.89.0'
]

*/

// pseudo-coded, O(nlogk) T | O(nlogk) S
function returnKMostFrequentIPs (log, k){
  // build memo of frequency of each IP

  let largest = Array(k).fill(0)

  Object.keys(memo).forEach((freq) => {
    if (freq > largest[0]){
      largest[0] = freq;
       siftDown(largest, 0)
     }
  })

  return largest(and their IPs)
}

function siftDown(array, index){
  while (2 * index < array.length && array[index] > Math.min(array[2 * index + 1], array[2 * index + 2]){
    let newIndex;
    if (array[2 * index + 1] < array[2 * index + 2] || 2 * index + 2 === array.length){
      newIndex = 2 * index + 1
    } else {
      newIndex = 2 * index + 2
    }

    let temp = array[newIndex]
    array[newIndex] = array[index]
    array[index] = temp

    index = newIndex
    }
}
