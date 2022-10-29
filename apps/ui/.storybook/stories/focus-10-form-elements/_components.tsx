// import Box from '@ps/ui/components/content/Box';
import { withButton } from '@ps/ui/components/focus/Button';
// import GithubFilled from '@ant-design/icons/GithubFilled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Buttons = (props) => {
  const Button = withButton({
    size: 'sm',
    ss: 'margin: 0 0.875rem 0.875rem 0;',
  });
  return (
    <>
      <Button loading>Loading</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="link" icon={<FontAwesomeIcon icon={faUser} />}>
        Link
      </Button>
      <Button round icon={<FontAwesomeIcon icon={faUser} />}>
        Round
      </Button>
      <Button
        round
        variant="primary"
        icon={<FontAwesomeIcon icon={faUser} />}
      />
    </>
  );
};
