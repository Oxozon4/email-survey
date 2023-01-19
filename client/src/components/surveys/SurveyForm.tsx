import { reduxForm, Field } from 'redux-form';

const SurveyForm = () => {
  return (
    <div>
      <Field type="text" name="surveyTitle" component="input" />
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
