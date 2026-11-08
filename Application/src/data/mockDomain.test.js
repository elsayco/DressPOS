import test from 'node:test';
import assert from 'node:assert/strict';
import {cashVariance,changeStock,settleCustody,stockVariance} from './mockDomain.js';

test('receiving and returning stock change on-hand quantity',()=>{
  const item={id:'p1',stock:10};
  assert.equal(changeStock(item,5).stock,15);
  assert.equal(changeStock(item,-4).stock,6);
  assert.equal(changeStock(item,-20).stock,0);
});
test('stocktake variance is physical minus recorded',()=>{
  assert.equal(stockVariance(12,9),-3);
  assert.equal(stockVariance(12,15),3);
  assert.throws(()=>stockVariance(12,NaN),TypeError);
});
test('custody settlement is capped at issued value and updates status',()=>{
  const partial=settleCustody({issued:500,settled:100,status:'جزئية'},200);
  assert.equal(partial.settled,300);
  assert.equal(partial.status,'جزئية');
  assert.equal(settleCustody(partial,900).status,'مغلقة');
});
test('cashier shift variance preserves shortage and surplus signs',()=>{
  assert.equal(cashVariance(1000,950),-50);
  assert.equal(cashVariance(1000,1050),50);
});
