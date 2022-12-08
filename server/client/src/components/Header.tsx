import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header: React.FC = () => {
  const auth = useTypedSelector((state) => state.auth);
  const renderHeaderContent = () => {
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
        return [
          <li key="header-payment">
            <Payments />
          </li>,
          <li key="header-credits" style={{ margin: '0px 10px' }}>
            Credits: {(auth as any).credits}
          </li>,
          <li key="header-logout">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderHeaderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
