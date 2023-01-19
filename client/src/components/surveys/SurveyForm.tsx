import { reduxForm, Field } from 'redux-form';

interface Props {}

const SurveyForm: React.FC = ({ handleSubmit }: any) => {
  return (
    <div>
      <form onSubmit={handleSubmit((values: any) => console.log(values))}>
        <Field type="text" name="surveyTitle" component="input" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm<{}, Props>({
  form: 'surveyForm',
})(SurveyForm);
