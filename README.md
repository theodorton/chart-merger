# chart-merger

Merge data from different streams of data with `x` and `y` keys.

## Multiply some streams

```javascript
var multiplyStreams = require('chart-merger').multiply;

var streamA = [
  { x: 1, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 2 }
];
var streamB = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

var multipliedStreams = multiplyStreams(streamA, streamB);

console.log(multipliedStreams);
// [
//   { x: 1, y: 6 },
//   { x: 2, y: 12 },
//   { x: 3, y: 8 }
// ]
```

## Divide some streams

```javascript
var dividedStreams = require('chart-merger').divide;

var streamA = [
  { x: 1, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 2 }
];
var streamB = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

var dividedStreams = divideStreams(streamA, streamB);

console.log(dividedStreams);
// [
//   { x: 1, y: 1.5 },
//   { x: 2, y: 1.33 },
//   { x: 3, y: 0.5 }
// ]
```

## Sum some streams

```javascript
var sumStreams = require('chart-merger').sum;

var streamA = [
  { x: 1, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 2 }
];
var streamB = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

var summedStreams = sumStreams(streamA, streamB);

console.log(summedStreams);
// [
//   { x: 1, y: 5 },
//   { x: 2, y: 7 },
//   { x: 3, y: 6 }
// ]
```

## Average some streams

```javascript
var averageStreams = require('chart-merger').average;

var streamA = [
  { x: 1, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 2 }
];
var streamB = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

var averagedStreams = averageStreams(streamA, streamB);

console.log(averagedStreams);
// [
//   { x: 1, y: 2.5 },
//   { x: 2, y: 3.5 },
//   { x: 3, y: 3 }
// ]
```
