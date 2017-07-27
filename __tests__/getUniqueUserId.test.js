import 'react-native';
import React from 'react';
import generateUniqueUserId from '../src/helperFunctions/generateUniqueUserId';

test('generates a string', () => {
  expect(typeof generateUniqueUserId()).toBe('string')
})

