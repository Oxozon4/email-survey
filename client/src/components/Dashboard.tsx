import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link to="/survey/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
