# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dcoughlin12/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

	head() : Given an array, returns the array[0]
	tail() : Given an array, returns everything after array[0]
	middle() : Given an arrat, returns the middle index. if there are two, it returns both.
	assertArraysEqual() : Assert test to see if arrays are equal- returns a message
	assertEqual() : Assersion test given actual and expected outcomes. writes to console
	assertObjectEqual() : Assertion test for objects. writes message to console
	countLetters() : Given a string it counts the occurance of each letter
	countOnly() : Given an array of strings, return how many instances of each string were found
	letterPositions() : Given a string, returns an object of arrays which shoes each indes position of each letter.
	map() : Given an array and a callback function, it returns the same array as a result of the callback
	reverse() : reverses a string (keeps the spaces between words)
	takeUntil() : Given an array and a callback function, it returns the value at each position until a condition is met
	findKey() : Given an object and a callback function, it returns the key at the point when the function condition is met
	findKeyByValue() : Given an Object and a value, it returns the key at the position of the value
	flatten() : given an array of arrays, it returns each value as one single array
	without() : Given an array and a value to remove, it removes the vlue from the array and returns the rest of the array. 