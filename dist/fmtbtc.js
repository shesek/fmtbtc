'use strict';

var moveDec = require('move-decimal-point'),
    commas = function commas(s) {
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var units = { msat: 1, sat: 4, bit: 6, milli: 9, btc: 12 },
    names = Object.keys(units);

var fmt = function fmt(n, from, to) {
    return moveDec(n, units[from] - units[to]);
},
    pfmt = function pfmt(n, f, t) {
    return fmt(n, f, t).split('.').map(function (s, i) {
        return i == 0 ? commas(s) : s;
    }).join('.');
};

module.exports = exports = function exports(n, pretty) {
    return (pretty ? pfmt : fmt)(n, 'sat', 'btc');
};

exports.fmt = fmt;
exports.pfmt = pfmt;
exports.units = units;

names.forEach(function (from) {
    return names.filter(function (to) {
        return to != from;
    }).forEach(function (to) {
        return exports[from + '2' + to] = function (n, pretty) {
            return (pretty ? pfmt : fmt)(n, from, to);
        };
    });
});

