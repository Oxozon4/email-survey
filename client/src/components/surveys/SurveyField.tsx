import { InjectedFormProps } from 'redux-form';

const SurveyField: React.FC<InjectedFormProps> = ({ input, label }: any) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
