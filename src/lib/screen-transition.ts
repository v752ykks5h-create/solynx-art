export const TRANSITION_DURATION_MS = 1600;
export const SCROLL_PAUSE_VH = 60;

export function accumulateScrollPause(current: number, delta: number, viewportHeight: number, pauseVh: number = SCROLL_PAUSE_VH) {
  const distance = Math.sign(current) === Math.sign(delta) ? current + delta : delta;
  return { distance, ready: Math.abs(distance) >= viewportHeight * pauseVh / 100 };
}