import { fireEvent, render, screen } from '../../test-utils';
import Button from '.';

const handeClick = jest.fn();

describe('Button', () => {
  it('onClick is called if button is not disabled', () => {
    render(
      <Button
        disabled={false}
        label="Test Button"
        onClick={handeClick}
        width={200}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handeClick).toHaveBeenCalled();
  });
});
