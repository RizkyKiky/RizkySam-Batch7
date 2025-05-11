import './Header.css';

function Header() {
  return (
    <header class="header">
      <div>
        <a class="titleHeader" href="#">
          Taskify
        </a>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
