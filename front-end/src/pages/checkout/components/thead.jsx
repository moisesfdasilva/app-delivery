import React from 'react';
import PropTypes from 'prop-types';

function THead({ header }) {
  return (
    <thead>
      <tr>
        { header.map((e, index) => <th key={ index }>{ e }</th>) }
      </tr>
    </thead>
  );
}

THead.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default THead;
