import React from 'react';
import PropTypes from 'prop-types';

import { textToLink } from '../../helpers/textToLink';

function TitleContent(props) {
  const { content } = props;

  return (
    <div>
      <props.headerType>{content.title}</props.headerType>
      {content.text.split('[/br]').map((item, index) => (
        <p
          key={`${content.title}-${index}`}
          dangerouslySetInnerHTML={textToLink(item)}
        />
      ))}
    </div>
  );
}

TitleContent.propTypes = {
  headerType: PropTypes.string,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

TitleContent.defaultProps = {
  headerType: 'h3',
};

export default TitleContent;
