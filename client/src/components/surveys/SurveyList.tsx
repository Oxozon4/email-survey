import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface PathParamsType {
  param1: string;
}

type PropsType = RouteComponentProps<PathParamsType> & {
  surveys: {
    _id: string;
    title: string;
    body: string;
    dateSent: string;
    yes: string;
    no: string;
  }[];
};

const SurveyList = ({ surveys }: PropsType) => {
  const { fetchSurveys } = useActions();

  useEffect(() => {
    fetchSurveys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="/">Yes: {survey.yes || 0}</a>
            <a href="/">No: {survey.no || 0}</a>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

const mapStateToProps = ({ surveys }: any) => {
  return { surveys };
};

export default connect(mapStateToProps)(withRouter(SurveyList));
