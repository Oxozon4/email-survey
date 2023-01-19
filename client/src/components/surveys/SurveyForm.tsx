import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

interface Props {}

const SurveyForm: React.FC = ({ handleSubmit }: any) => {
  const renderFields = () => {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit((values: any) => console.log(values))}>
        {/* <Field type="text" name="surveyTitle" component="input" /> */}
        {renderFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm<{}, Props>({
  form: 'surveyForm',
})(SurveyForm);
