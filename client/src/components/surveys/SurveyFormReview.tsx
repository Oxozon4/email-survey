import { connect } from 'react-redux';
import { formFields } from './formFields';
import _ from 'lodash';
import { useActions } from '../../hooks/useActions';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface PathParamsType {
  param1: string;
}

type PropsType = RouteComponentProps<PathParamsType> & {
  onCancel: () => void;
  formValues: any;
};

const SurveyFormReview = ({ onCancel, formValues, history }: PropsType) => {
  const { submitSurvey } = useActions();

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey({ values: formValues, history })}
      >
        Send Survey
        <i className="material-icons">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(withRouter(SurveyFormReview));
