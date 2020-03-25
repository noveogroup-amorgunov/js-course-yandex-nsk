/**
js-course $ ts-node src/week2/prime-product.benchmark.ts
primeProductOptimized x 3,777 ops/sec ±0.94% (88 runs sampled)
primeProductGenerated x 0.18 ops/sec ±7.50% (5 runs sampled)
primeProductEratosthenes x 5.81 ops/sec ±1.56% (19 runs sampled)
primeProduct x 0.30 ops/sec ±3.29% (5 runs sampled)
Fastest is primeProductOptimized
 */

import Benchmark from 'benchmark';
import { primeProduct } from './prime-product';
import { primeProductOptimized } from './prime-product-optimized';
import { primeProductEratosthenes } from './prime-product-eratosthenes';
import { primeProductGenerated } from './prime-product-generated';

const suite = new Benchmark.Suite();

const generateNumbers = Array.from({ length: 100 }).map(() =>
    Math.floor(Math.random() * 100000),
);

const generateTestCase = (func: Function) => () =>
    generateNumbers.map(number => func(number));

suite
    .add('primeProductOptimized', generateTestCase(primeProductOptimized))
    .add('primeProductGenerated', generateTestCase(primeProductGenerated))
    .add('primeProductEratosthenes', generateTestCase(primeProductEratosthenes))
    .add('primeProduct', generateTestCase(primeProduct))
    .on('cycle', (event: Event) => console.log(String(event.target)))
    .on('complete', function complete() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    .run({ async: true });
