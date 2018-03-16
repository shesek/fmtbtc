# fmtbtc

Format and convert bitcoin's display units (`msat`, `sat`, `bit`, `milli` and `btc`).

Operates on the numbers as strings using [move-decimal-point](https://github.com/shesek/move-decimal-point)
(the only dependency), so that it doesn't require a library for arbitrary-precision arithmetic.

The browserify bundle (including the `move-decimal-point` dependency) weights 1,781 bytes when minified
or 868 bytes when gzipped.

## Install

```bash
$ npm install fmtbtc
```

## Use

```js
// common case: convert from satoshis to btc
import fmtbtc from 'fmtbtc'
fmtbtc(100000000) // => 1
fmtbtc(100000005000) // => 1000.0005

// pretty print with commas separator
fmtbtc(100000005000, true) // => 1,000.0005

// with other base/target units
import { fmt, pfmt } from 'fmtbtc'
fmt(1, 'milli', 'sat') // => 100000
pfmt(1, 'milli', 'sat') // => 100,000

// using utility `{from}2{to}` functions
import { milli2sat, sat2milli } from 'fmtbtc'
sat2milli(100000) // => 1
milli2sat(1, true) // => 100,000

```

Using the browserify bundle (available at `dist/fmtbtc.bundle.min.js`),
which exposes the library at `window.fmtbtc`:

```html
<script src="fmtbtc.bundle.min.js"></script>
<script>
fmtbtc(100000000) // => 1
fmtbtc.sat2milli(100000) // => 1
</script>
```

## License

MIT
