import { getLevel } from './ContributionCalendar';

// Verbatim from a real /api/github?type=personal response. GitHub returns only
// the FOUR non-empty shades here — the empty square's #ebedf0 is absent.
const COLORS = ['#9be9a8', '#40c463', '#30a14e', '#216e39'];
const EMPTY = '#ebedf0';

describe('getLevel', () => {
  it('treats the empty-square colour as level 0', () => {
    expect(getLevel({ color: EMPTY, contributionCount: 0 }, COLORS)).toBe(0);
  });

  it('maps the four shades to levels 1-4, not 0-3', () => {
    // Regression: indexOf() alone put the lightest shade at LEVELS[0], the
    // empty-square style, so low-activity days rendered as blank squares.
    expect(getLevel({ color: '#9be9a8', contributionCount: 1 }, COLORS)).toBe(1);
    expect(getLevel({ color: '#40c463', contributionCount: 4 }, COLORS)).toBe(2);
    expect(getLevel({ color: '#30a14e', contributionCount: 8 }, COLORS)).toBe(3);
    expect(getLevel({ color: '#216e39', contributionCount: 16 }, COLORS)).toBe(
      4,
    );
  });

  it('spans exactly levels 0-4 across the real palette', () => {
    // In real responses the empty colour only ever pairs with a zero count.
    const days = [
      { color: EMPTY, contributionCount: 0 },
      ...COLORS.map((color) => ({ color, contributionCount: 1 })),
    ];
    expect(days.map((day) => getLevel(day, COLORS))).toEqual([0, 1, 2, 3, 4]);
  });

  it('falls back to a count bucket when colours are missing', () => {
    expect(getLevel({ color: '', contributionCount: 0 }, undefined)).toBe(0);
    expect(getLevel({ color: '', contributionCount: 2 }, undefined)).toBe(1);
    expect(getLevel({ color: '', contributionCount: 99 }, undefined)).toBe(4);
  });
});
