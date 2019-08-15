const Benchmark = require('benchmark');
const primeProduct = require('./prime-product');
const primeProductOptimized = require('./prime-product-optimized');
const primeProductEratosthenes = require('./prime-product-eratosthenes');
const primeProductGenerated = require('./prime-product-generated');

const suite = new Benchmark.Suite();

const generateNumbers = Array
    .from({ length: 1 })
    .map(() => Math.floor(Math.random() * 100000));

const generateTestCase = func => () => generateNumbers.map(number => func(number));

suite
    .add('primeProductGenerated', generateTestCase(primeProductGenerated))
    .add('primeProductEratosthenes', generateTestCase(primeProductEratosthenes))
    .add('primeProduct', generateTestCase(primeProduct))
    .add('primeProductOptimized', generateTestCase(primeProductOptimized))
    .on('cycle', event => console.log(String(event.target)))
    .on('complete', function () { console.log(`Fastest is ${this.filter('fastest').map('name')}`); })
    .run({});
