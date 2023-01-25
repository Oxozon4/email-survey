import { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew: React.FC = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  return (
    <div>
      {showFormReview ? (
        <SurveyFormReview />
      ) : (
        <SurveyForm
          onSurveySubmit={() => {
            setShowFormReview(true);
          }}
        />
      )}
    </div>
  );
};

export default SurveyNew;
