import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

interface Props {}

interface InputFieldProps {
  label: string;
  name: string;
}

const FIELDS: InputFieldProps[] = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

const SurveyForm: React.FC = ({ handleSubmit }: any) => {
  const renderFields = () => {
    return _.map(FIELDS, ({ label, name }: InputFieldProps) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit((values: any) => console.log(values))}>
        {/* <Field type="text" name="surveyTitle" component="input" /> */}
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

export default reduxForm<{}, Props>({
  form: 'surveyForm',
})(SurveyForm);
