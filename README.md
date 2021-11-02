# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kfagnan/lotide`

**Require it:**

`const _ = require('@kfagnan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array): Returns the first element in an array.
* tail(array): Returns a newArray containing everything but the first element in the initial array.
* middle(array): Returns the middle of an array as a new array
* eqArrays(array1, array2): compares if arrays are equal.
* eqObjects(object1, object2): compares if objects are equal.
* assertEqual(actual, expected): Checks if the actual and expected arguements are equal.
* assertArraysEqual(array1, array2): compares if arrays are equal and returns assert message.
assertObjectsEqual(object1, object2): compares if objects are equal and returns assert message.
* countLetters(string): Counts the number of letters in a string. 
* findKey(obj, callback): Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* findKeyByValue(object, value): searches an object for a key when given its value
* map(array, callback): Creates a new array of values by running each element in array through the callback.
* countOnly(items): takes a collection of items and return counts for a specific subset of those items. 
* takeUntil(array, callback): collects items from a provided array until the callback provided returns a truthy value.
* without(array, itemsToRemove): Return a subset of a given array, removing unwanted elements.
* letterPositions(string): returns an array with all the positions in which a certain letter occurs.