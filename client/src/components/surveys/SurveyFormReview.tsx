import { connect } from 'react-redux';
import { formFields } from './formFields';

interface SurveyFormReviewProps {
  onCancel: () => void;
  formValues: any;
}

const SurveyFormReview = ({ onCancel, formValues }: SurveyFormReviewProps) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{formFields.map()}</div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);
