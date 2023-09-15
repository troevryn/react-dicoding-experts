import React from 'react';
import PropTypes from 'prop-types';

function LabelCategory({ label }) {
  return (
    <div className="border px-4 py-2 w-fit border-gray-500 rounded-xl capitalize">
      #
      {' '}
      {label}
    </div>
  );
}

LabelCategory.propTypes = {

  label: PropTypes.string.isRequired,

};

export default LabelCategory;
