import { InjectedFormProps } from 'redux-form';

const SurveyField: React.FC<InjectedFormProps> = ({ input, meta }: any) => {
  return (
    <div>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
