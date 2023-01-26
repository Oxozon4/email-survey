import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import { formFields, InputFieldProps } from './formFields';

interface Props {
  onSurveySubmit: Function;
}

interface FormValues {
  [key: string]: string;
  body: string;
  recipients: string;
  subject: string;
  title: string;
}

interface FormErrors {
  [key: string]: string | undefined;
  body?: string;
  recipients?: string;
  subject?: string;
  title?: string;
}

const SurveyForm: React.FC = ({ handleSubmit, onSurveySubmit }: any) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }: InputFieldProps) => {
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
      <form onSubmit={handleSubmit(onSurveySubmit)}>
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

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
};

export default reduxForm<{}, Props>({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
