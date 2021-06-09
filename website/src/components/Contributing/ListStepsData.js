import React from 'react';
import PropTypes from 'prop-types';

import { textToLink } from '../../helpers/textToLink';

function ListStepsData(props) {
  const { content } = props;

  return (
    <div>
      <h3>{content.title}</h3>
      <p dangerouslySetInnerHTML={textToLink(content.text)} />
      <ul className="list-unstyled">
        {content.list.map((item, index) => (
          <li key={`${content.title}-${index}`}>
            <span className="mr-2 font-weight-bold">{index+1} -</span>
            <span dangerouslySetInnerHTML={textToLink(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ListStepsData.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  })
}

export default ListStepsData;
