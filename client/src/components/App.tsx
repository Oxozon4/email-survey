import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App: React.FC = () => {
  const { fetchUser } = useActions();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/survey/new" component={SurveyNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
