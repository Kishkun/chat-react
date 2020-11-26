import React from 'react';
import PropTypes from 'prop-types';
import { Input as BaseInput } from 'antd';
import classNames from 'classnames';

import './Input.scss'

const Input = (props) => {
  return  <BaseInput {...props}
                      className={classNames("button", props.className, {
                        "button__large": props.size === "large"
                      })}
  />
};

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
