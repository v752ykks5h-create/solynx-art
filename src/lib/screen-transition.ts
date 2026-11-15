export const DESKTOP_TRANSITION_DURATION_MS = 1600;
export const MOBILE_TRANSITION_DURATION_MS = 1200;

export const DESKTOP_SCROLL_PAUSE_VH = 60;
export const MOBILE_SCROLL_PAUSE_VH = 20;

export const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export const getTransitionDuration = () => isMobile() ? MOBILE_TRANSITION_DURATION_MS : DESKTOP_TRANSITION_DURATION_MS;
export const getScrollPauseVh = () => isMobile() ? MOBILE_SCROLL_PAUSE_VH : DESKTOP_SCROLL_PAUSE_VH;

export function accumulateScrollPause(current: number, delta: number, viewportHeight: number, pauseVh: number = SCROLL_PAUSE_VH) {
  const distance = Math.sign(current) === Math.sign(delta) ? current + delta : delta;
  return { distance, ready: Math.abs(distance) >= viewportHeight * pauseVh / 100 };
}
