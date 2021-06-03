import React from 'react';

import { contributingData } from '../../data/contributing';
import ListStepsData from './ListStepsData';
import TitleContent from './TitleContent';

function Contributing() {
  return (
    <div className="p-4">
      <TitleContent headerType="h2" content={contributingData.guideline} />
      <ListStepsData content={contributingData.steps_to_contribute} />
      <ListStepsData content={contributingData.steps_to_PR} />
      <TitleContent content={contributingData.updating_PR} />
      <TitleContent content={contributingData.creating_issues} />
    </div>
  );
}

export default Contributing;
