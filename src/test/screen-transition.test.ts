import { describe, expect, it } from "vitest";
import { accumulateScrollPause, TRANSITION_DURATION_MS } from "@/lib/screen-transition";

describe("Screen transition", () => {
  it("keeps the fade at 1600 milliseconds", () => {
    expect(TRANSITION_DURATION_MS).toBe(1600);
  });

  it("waits for 60 vh of scrolling before advancing", () => {
    expect(accumulateScrollPause(0, 599, 1000).ready).toBe(false);
    expect(accumulateScrollPause(599, 1, 1000).ready).toBe(true);
    expect(accumulateScrollPause(0, 479, 800).ready).toBe(false);
    expect(accumulateScrollPause(479, 1, 800).ready).toBe(true);
  });

  it("applies the pause when scrolling back from hello to about", () => {
    expect(accumulateScrollPause(0, -599, 1000).ready).toBe(false);
    expect(accumulateScrollPause(-599, -1, 1000).ready).toBe(true);
    expect(accumulateScrollPause(500, -100, 1000).distance).toBe(-100);
  });
});