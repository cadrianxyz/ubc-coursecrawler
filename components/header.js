import Link from 'next/link'

const Header = ({ showSearch = true }) => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
    {showSearch && <h1>search bar here</h1>}
  </header>
)

export default Header
