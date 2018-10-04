import Link from 'next/link';
import Header from './Header';

const Layout = (props) => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Header />
    {props.children}
  </div>
)

export default Layout;