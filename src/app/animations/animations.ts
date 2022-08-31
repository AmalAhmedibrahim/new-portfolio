import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideUpTransition = transition(':enter', [
  style({
    opacity: 0,
    transform: 'translateY(25%)',
  }),
  animate(
    '1.8s ease',
    style({
      opacity: 1,
      transform: 'none',
    })
  ),
]);

export const slideRighTransition = transition(':enter', [
  style({
    opacity: 0,
    transform: 'skew(30deg) translateX(100%)',
  }),
  animate(
    '1.8s ease',
    style({
      opacity: 1,
      transform: 'none',
    })
  ),
]);

export const slideLeftTransition = transition(':enter', [
  style({
    transform: 'skew(30deg) translate3d(-100%, 0, 0)',
  }),
  animate(
    '1.8s ease',
    style({
      transform: 'none',
    })
  ),
]);

export const fadeInTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '2s ease',
    style({
      opacity: 1,
    })
  ),
]);

export const scaleUpTransition = transition(':enter', [
  style({
    opacity: 0,
    transform: 'scale(0.75)',
  }),
  animate(
    '2s linear',
    style({
      opacity: 1,
      transform: 'none',
    })
  ),
]);

export const slideUp = trigger('slideUp', [slideUpTransition]);
export const slideRight = trigger('slideRight', [slideRighTransition]);
export const slideLeft = trigger('slideLeft', [slideLeftTransition]);
export const fadeIn = trigger('fadeIn', [fadeInTransition]);
export const scaleUp = trigger('scaleUp', [scaleUpTransition]);
