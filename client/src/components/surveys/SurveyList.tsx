import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { withRouter } from 'react-router-dom';

const SurveyList = () => {
  const { fetchSurveys } = useActions();

  useEffect(() => {
    fetchSurveys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>SurveyList</div>;
};

const mapStateToProps = ({ surveys }: any) => {
  return { surveys };
};

export default connect(mapStateToProps)(withRouter(SurveyList));
