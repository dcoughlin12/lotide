const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const reverse = require('./reverse');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const without = require('./without');

module.exports = {
	head: head, 
	tail: tail, 
	middle: middle,
	assertArraysEqual: assertArraysEqual,
	assertEqual: assertEqual,
	assertObjectEqual: assertObjectEqual,
	countLetters: countLetters, 
	countOnly: countOnly,
	letterPositions: letterPositions,
	map: map,
	reverse: reverse,
	takeUntil: takeUntil,
	findKey: findKey,
	findKeyByValue: findKeyByValue,
	flatten: flatten,
	without: without

};