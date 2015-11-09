var msgpack   = require('msgpack'),
    msgpackJs = require('msgpack-js'),
    msgpack5  = require('msgpack5')(),
    PSON      = require('pson'),
    pson      = new PSON.StaticPair()

function benchmark(name, data) {
  var testCount = 1e5,
      packed

  console.time(`${name} msgpack.pack`)
  for (var i = 0; i < testCount; i++)
    msgpack.pack(data)
  console.timeEnd(`${name} msgpack.pack`)

  encoded = msgpack.pack(data)
  console.time(`${name} msgpack.unpack`)
  for (var i = 0; i < testCount; i++)
    msgpack.unpack(encoded)
  console.timeEnd(`${name} msgpack.unpack`)

  console.time(`${name} msgpack-js.encode`)
  for (var i = 0; i < testCount; i++)
    msgpackJs.encode(data)
  console.timeEnd(`${name} msgpack-js.encode`)

  encoded = msgpackJs.encode(data)
  console.time(`${name} msgpack-js.decode`)
  for (var i = 0; i < testCount; i++)
    msgpackJs.decode(encoded)
  console.timeEnd(`${name} msgpack-js.decode`)

  console.time(`${name} pson.encode`)
  for (var i = 0; i < testCount; i++)
    pson.encode(data)
  console.timeEnd(`${name} pson.encode`)

  encoded = pson.toBuffer(data) // encoded data results in a "Error: Truncated"
  console.time(`${name} pson.decode`)
  for (var i = 0; i < testCount; i++)
    pson.decode(encoded)
  console.timeEnd(`${name} pson.decode`)

  console.time(`${name} JSON.stringify`)
  for (var i = 0; i < testCount; i++)
    JSON.stringify(data)
  console.timeEnd(`${name} JSON.stringify`)

  encoded = JSON.stringify(data)
  console.time(`${name} JSON.parse`)
  for (var i = 0; i < testCount; i++)
    JSON.parse(encoded)
  console.timeEnd(`${name} JSON.parse`)

  console.time(`${name} msgpack5.encode`)
  for (var i = 0; i < testCount; i++)
    msgpack5.encode(data)
  console.timeEnd(`${name} msgpack5.encode`)

  encoded = msgpack5.encode(data)
  console.time(`${name} msgpack5.decode`)
  for (var i = 0; i < testCount; i++)
    msgpack5.decode(encoded)
  console.timeEnd(`${name} msgpack5.decode`)
}

var dataWithBinary = { 'abcdef' : 1, 'qqq' : 13, '19' : [1, 2, 3, 4], buf: require('crypto').randomBytes(256) },
    dataPlain      = { 'abcdef' : 1, 'qqq' : 13, '19' : [1, 2, 3, 4] }

benchmark('no binary buffers', dataPlain)
benchmark('with binary buffers', dataWithBinary)
