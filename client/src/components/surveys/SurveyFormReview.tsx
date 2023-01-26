import { connect } from 'react-redux';

interface SurveyFormReviewProps {
  onCancel: () => void;
}

const SurveyFormReview = ({ onCancel }: SurveyFormReviewProps) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
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
