import { useTypedSelector } from '../hooks/useTypedSelector';

const Header: React.FC = () => {
  const auth = useTypedSelector((state) => state.auth);

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Emaily
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
