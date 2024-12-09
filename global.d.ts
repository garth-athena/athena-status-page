export * from 'react';

type GlobalThisMouseEvent = MouseEvent;
type GlobalThisTouchEvent = TouchEvent;

declare module 'react' {
  export type MouseEvent = GlobalThisMouseEvent;
  export type TouchEvent = GlobalThisTouchEvent;
}