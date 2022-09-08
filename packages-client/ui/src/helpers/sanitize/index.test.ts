import { sanitize } from '.';

const test = {
  address: {
    state: ' NM   ',
    street: '  Hi there  ',
  },
  data: ['  Hi   ', { id: '   ID  ' }, 2, [1, { id: '   HELLO ' }]],
  id: ' hi ',
  n: 10,
};

describe('Helpers: Sanitize', () => {
  it('Works', () => {
    expect(sanitize(test, [])).toStrictEqual({
      address: { state: 'NM', street: 'Hi there' },
      data: ['Hi', { id: 'ID' }, 2, [1, { id: 'HELLO' }]],
      id: 'hi',
      n: 10,
    });
  });

  it('Ignore works', () => {
    const shouldIgnore = ['password', 'confirmPassword'];

    const data = {
      a: [{ hi: '  ', password: '1234   ' }],
      hi: 'hello   ',
      o: {
        confirmPassword: '1234    ',
      },
      password: '1234    ',
    };
    expect(sanitize(data, shouldIgnore)).toStrictEqual({
      a: [{ hi: '', password: '1234   ' }],
      hi: 'hello',
      o: { confirmPassword: '1234    ' },
      password: '1234    ',
    });
  });
});
