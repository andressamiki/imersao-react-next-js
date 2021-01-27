import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img className={className} src="https://static.wikia.nocookie.net/powerpuff/images/2/24/Ppg_tile1353.gif/revision/latest/scale-to-width-down/500?cb=20110729231400&path-prefix=pt-br" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  max-width: 245px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;