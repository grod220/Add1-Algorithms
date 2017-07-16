import * as manualAdding from './manualAdding.js';

describe('Adding one to Base 10 numbers', ()=>{
  test('works on simple inputs', ()=>{
    expect(manualAdding.add1([1,2,5]),10).toEqual([1,2,6]);
  });

  test('works on simple different lengths', ()=>{
    expect(manualAdding.add1([4,3,1,5],10)).toEqual([4,3,1,6]);
    expect(manualAdding.add1([2],10)).toEqual([3]);
    expect(manualAdding.add1([2,4],10)).toEqual([2,5]);
    expect(manualAdding.add1([1,1,1,1,1,1],10)).toEqual([1,1,1,1,1,2]);
  });

  test('can carry', ()=>{
    expect(manualAdding.add1([4,3,1,9],10)).toEqual([4,3,2,0]);
    expect(manualAdding.add1([4,3,2,9],10)).toEqual([4,3,3,0]);
    expect(manualAdding.add1([2,9,9],10)).toEqual([3,0,0]);
    expect(manualAdding.add1([2,2,9,9,9,9,9,9],10)).toEqual([2,3,0,0,0,0,0,0]);
  });

  test('can carry and add a digit if necessary', ()=>{
    expect(manualAdding.add1([9],10)).toEqual([1,0]);
    expect(manualAdding.add1([9,9],10)).toEqual([1,0,0]);
    expect(manualAdding.add1([9,9,9,9,9,9,9,9],10)).toEqual([1,0,0,0,0,0,0,0,0]);
  });
})

describe('Adding one to Base 2 numbers', ()=>{
  test('works on simple inputs', ()=>{
    expect(manualAdding.add1([1,1,0],2)).toEqual([1,1,1]);
  });

  test('works on simple different lengths', ()=>{
    expect(manualAdding.add1([1,0,1,0],2)).toEqual([1,0,1,1]);
    expect(manualAdding.add1([0],2)).toEqual([1]);
    expect(manualAdding.add1([1,0],2)).toEqual([1,1]);
    expect(manualAdding.add1([1,1,1,1,1,0],2)).toEqual([1,1,1,1,1,1]);
  });

  test('can carry', ()=>{
    expect(manualAdding.add1([1,0,1,1],2)).toEqual([1,1,0,0]);
    expect(manualAdding.add1([1,0,0,1],2)).toEqual([1,0,1,0]);
    expect(manualAdding.add1([0,1,1],2)).toEqual([1,0,0]);
    expect(manualAdding.add1([1,1,0,1,1,1],2)).toEqual([1,1,1,0,0,0]);
  });

  test('can carry and add a digit if necessary', ()=>{
    expect(manualAdding.add1([1],2)).toEqual([1,0]);
    expect(manualAdding.add1([1,1],2)).toEqual([1,0,0]);
    expect(manualAdding.add1([1,1,1,1,1,1,1,1],2)).toEqual([1,0,0,0,0,0,0,0,0]);
  });
})
