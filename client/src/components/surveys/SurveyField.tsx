import { InjectedFormProps } from 'redux-form';

const SurveyField: React.FC<InjectedFormProps> = ({
  input,
  label,
  meta: { error, touched },
}: any) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};

export default SurveyField;
