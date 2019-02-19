import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  return <h1 className="header-big">{props.title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
