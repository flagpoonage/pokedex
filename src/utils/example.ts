import { getNumber } from '@pkdx-utils/test-import';

export interface Example {
  x: string;
  y: number;
}

export function exampleFunction(a: string, b: number): Example {
  return { x: a, y: b };
}

getNumber();
