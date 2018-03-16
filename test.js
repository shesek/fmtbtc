const { equal: eq } = require('assert')
    , fmt = require('.')

const testcases = {
  sat2msat: { 1: 1000, 0.001: 1  }
, sat2bit: { 100: 1, 450: 4.5, 987123: 9871.23 }
, sat2milli: { 100: 0.001, 450: 0.0045, 987123: 9.87123 }
, sat2btc: { 100000000: 1 }

, msat2sat: { 1000: 1, 500: 0.5 }
, msat2milli: { 100: 0.000001, 450: 0.0000045, 987123: 0.00987123 }
, msat2btc: { 100000000: 0.001 }
}

Object.entries(testcases).forEach(([ fn, tests ]) => {
  Object.entries(tests).forEach(([ n, expected ]) => {
    console.log(`test ${fn}(${n}) == ${expected}`)
    eq(fmt[fn](n), expected.toString(), `${fn} ${n} => ${expected}`)
  })
})

console.log('test success')
