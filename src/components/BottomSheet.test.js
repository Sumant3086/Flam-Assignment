import React from 'react';
import { render, screen } from '@testing-library/react';
import { getNearestSnapPoint } from './BottomSheet';

test('getNearestSnapPoint returns the closest value', () => {
  const snapPoints = [0, 300, 600];
  expect(getNearestSnapPoint(250, snapPoints)).toBe(300);
  expect(getNearestSnapPoint(100, snapPoints)).toBe(0);
  expect(getNearestSnapPoint(500, snapPoints)).toBe(600);
});
