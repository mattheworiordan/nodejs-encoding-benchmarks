# Node.js binary and string encoding library benchmarks

A simple benchmark test to measure the performance of the following Node.js modules vs JSON:

* [msgpack5](https://www.npmjs.com/package/msgpack5)
* [msgpack](https://www.npmjs.com/package/msgpack)
* [msgpack-js](https://www.npmjs.com/package/msgpack-js)
* [pson](https://www.npmjs.com/package/pson)

## Results

    $ node benchmark.js

    no binary buffers msgpack.pack: 443ms
    no binary buffers msgpack.unpack: 301ms

    no binary buffers msgpack-js.encode: 723ms
    no binary buffers msgpack-js.decode: 264ms

    no binary buffers pson.encode: 1541ms
    no binary buffers pson.decode: 280ms

    no binary buffers JSON.stringify: 135ms
    no binary buffers JSON.parse: 102ms

    no binary buffers msgpack5.encode: 29189ms
    no binary buffers msgpack5.decode: 14004ms

    ---

    with binary buffers msgpack.pack: 518ms
    with binary buffers msgpack.unpack: 547ms

    with binary buffers msgpack-js.encode: 941ms
    with binary buffers msgpack-js.decode: 396ms

    with binary buffers pson.encode: 1826ms
    with binary buffers pson.decode: 377ms

    with binary buffers JSON.stringify: 6045ms
    with binary buffers JSON.parse: 735ms

    with binary buffers msgpack5.encode: 43991ms
    with binary buffers msgpack5.decode: 15891ms

# About

We ran this simple benchmark test whilst reviewing Node.js encoding options at [Ably Real-time Messaging](https://www.ably.io)
