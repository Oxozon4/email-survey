import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

interface Props {}

const SurveyForm: React.FC = ({ handleSubmit }: any) => {
  const renderFields = () => {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipient List"
          type="text"
          name="emails"
          component={SurveyField}
        />
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
