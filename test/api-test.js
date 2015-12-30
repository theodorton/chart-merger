import assert from 'assert';
import api from '../src/api';

const streamA = [
  { x: 1, y: 3 },
  { x: 2, y: 4 },
  { x: 3, y: 2 }
];
const streamB = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

describe('Merging two streams with data', function() {
  it('It should multiply y-axis', function() {
    const result = api.multiply(streamA, streamB);
    assert.deepEqual(result, [
      { x: 1, y: 6 },
      { x: 2, y: 12 },
      { x: 3, y: 8 }
    ]);
  });

  it('It should divide y-axis', function() {
    const result = api.divide(streamA, streamB);
    assert.deepEqual(result, [
      { x: 1, y: 1.5 },
      { x: 2, y: 1.33 },
      { x: 3, y: 0.5 }
    ]);
  });

  it('It should sum y-axis', function() {
    const result = api.sum(streamA, streamB);
    assert.deepEqual(result, [
      { x: 1, y: 5 },
      { x: 2, y: 7 },
      { x: 3, y: 6 }
    ]);
  });

  it('It should average y-axis', function() {
    const result = api.average(streamA, streamB);
    assert.deepEqual(result, [
      { x: 1, y: 2.5 },
      { x: 2, y: 3.5 },
      { x: 3, y: 3 }
    ]);
  });
});

const streamC = [
  { x: 1, y: 12 },
  { x: 2, y: 14 },
  { x: 3, y: 10 }
];
const streamD = [
  { x: 1, y: 54 },
  { x: 2, y: 42 },
  { x: 3, y: 32 },
];

describe('Merging four streams with data', function() {
  it('It should sum y-axis', function() {
    const result = api.sum(streamA, streamB, streamC, streamD);
    assert.deepEqual(result, [
      { x: 1, y: 71 },
      { x: 2, y: 63 },
      { x: 3, y: 48 }
    ]);
  });

  it('It should average y-axis', function() {
    const result = api.average(streamA, streamB);
    assert.deepEqual(result, [
      { x: 1, y: 2.5 },
      { x: 2, y: 3.5 },
      { x: 3, y: 3 }
    ]);
  });
});
