import HomeTemplate from 'components/templates/Home';
import Link from '@ps/ui/components/Link';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import CenterChildrenX from '@ps/ui/components/CenterChildrenX';

export default function Home() {
  return (
    <>
      <CenterChildrenY ss="height:100vh;">
        <CenterChildrenX>
          <h2>Page Not Found</h2>
          <p>
            <Link href="/">Click here to go back to the homepage</Link>
          </p>
        </CenterChildrenX>
      </CenterChildrenY>
      <HomeTemplate />
    </>
  );
}
