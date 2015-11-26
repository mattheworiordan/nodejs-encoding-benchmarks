# Node.js binary and string encoding library benchmarks

A simple benchmark test to measure the performance of the following Node.js modules vs JSON:

* [msgpack5](https://www.npmjs.com/package/msgpack5)
* [msgpack](https://www.npmjs.com/package/msgpack)
* [msgpack-js](https://www.npmjs.com/package/msgpack-js)
* [pson](https://www.npmjs.com/package/pson)
* [avsc](https://www.npmjs.com/package/avsc)

## Results

    $ node benchmark.js

    no binary buffers msgpack.pack: 446.188ms
    no binary buffers msgpack.unpack: 347.430ms

    no binary buffers msgpack-js.encode: 675.531ms
    no binary buffers msgpack-js.decode: 298.495ms

    no binary buffers pson.encode: 1208.759ms
    no binary buffers pson.decode: 276.973ms

    no binary buffers avsc.toBuffer: 57.868ms // See [1].
    no binary buffers avsc.fromBuffer: 20.666ms

    no binary buffers JSON.stringify: 93.410ms
    no binary buffers JSON.parse: 93.165ms

    no binary buffers msgpack5.encode: 22254.455ms
    no binary buffers msgpack5.decode: 12134.576ms

    ---

    with binary buffers msgpack.pack: 498.184ms
    with binary buffers msgpack.unpack: 541.152ms

    with binary buffers msgpack-js.encode: 878.312ms
    with binary buffers msgpack-js.decode: 420.872ms

    with binary buffers pson.encode: 1596.219ms
    with binary buffers pson.decode: 393.904ms

    with binary buffers avsc.toBuffer: 85.295ms
    with binary buffers avsc.fromBuffer: 75.181ms

    with binary buffers JSON.stringify: 5620.344ms // See [2].
    with binary buffers JSON.parse: 788.695ms

    with binary buffers msgpack5.encode: 33868.102ms
    with binary buffers msgpack5.decode: 11560.702ms


Notes:

1.  `avsc` expects the data's structure to be defined upfront using an Avro
    schema. See [here](https://github.com/mtth/avsc#examples) for examples and
    more information.
2.  JSON encoding binary buffers is not relevant as binary data should be
    encoded manually in another format. For completeness however, this has been
    left in.

# About

We ran this simple benchmark test whilst reviewing Node.js encoding options at [Ably Real-time Messaging](https://www.ably.io)
