const moveDec = require('move-decimal-point')
    , commas  = s => s.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const units = { msat: 1, sat: 4, bit: 6, milli: 9, btc: 12 }
    , names = Object.keys(units)

const fmt  = (n, from, to) => moveDec(n, units[from] - units[to])
    , pfmt = (n, f, t) => fmt(n, f, t).split('.').map((s, i) => i == 0 ? commas(s) : s).join('.')

module.exports = exports = (n, pretty) => (pretty ? pfmt : fmt)(n, 'sat', 'btc')

exports.fmt   = fmt
exports.pfmt  = pfmt
exports.units = units

names.forEach(from => names.filter(to => to != from).forEach(to =>
  exports[`${from}2${to}`] = (n, pretty) => (pretty ? pfmt : fmt)(n, from, to)
))
