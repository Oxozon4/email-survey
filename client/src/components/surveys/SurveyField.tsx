import { InjectedFormProps } from 'redux-form';

const SurveyField: React.FC<InjectedFormProps> = ({
  input,
  label,
  meta: { error, touched },
}: any) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
