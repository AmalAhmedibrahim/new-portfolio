import { animate, animation, keyframes, style } from '@angular/animations';

export const fadeInUp = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          opacity: 0,
          transform: 'translate3d(0, {{translate}}, 0)',
          easing: 'ease',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          easing: 'ease',
          offset: 1,
        }),
      ])
    ),
  ]);
