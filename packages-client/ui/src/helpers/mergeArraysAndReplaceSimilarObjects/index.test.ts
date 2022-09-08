import { mergeArraysAndReplaceSimilarObjects } from './index';

describe('Merging and replacing similar objects works', () => {
  it('Merges objects successfully keeping the same length', () => {
    const a = [
      { id: 0, name: 'Joe' },
      { id: 1, name: 'Jill' },
    ];

    const b = [{ id: 0, name: 'Joseph' }];

    const result = mergeArraysAndReplaceSimilarObjects(a, b, 'id');

    const target = result.find((i) => i.id === 0);

    expect(result.length).toBe(2);

    expect(target?.name).toBe('Joseph');
  });

  it('Merges arrays successfully with no common objects', () => {
    const a = [
      { id: 0, name: 'Joe' },
      { id: 1, name: 'Jill' },
    ];

    const b = [{ id: 2, name: 'Joseph' }];

    const result = mergeArraysAndReplaceSimilarObjects(a, b, 'id');

    const target = result.find((i) => i.id === 0);

    expect(result.length).toBe(3);

    expect(target?.name).toBe('Joe');
  });

  it('Merges objects successfully with multiple being replaced', () => {
    const a = [
      { id: 0, name: 'Joe' },
      { id: 1, name: 'Jill' },
    ];

    const b = [
      { id: 0, name: 'Joseph' },
      { id: 1, name: 'Jillian' },
    ];

    const result = mergeArraysAndReplaceSimilarObjects(a, b, 'id');

    const target = result.find((i) => i.id === 0);
    const targetTwo = result.find((i) => i.id === 1);

    expect(result.length).toBe(2);

    expect(target?.name).toBe('Joseph');
    expect(targetTwo?.name).toBe('Jillian');
  });
});
