import React from 'react';
import classNames from 'classnames';
import './Block.scss'

const Block = ({className, children}) => {
  return  (
      <div
          className={classNames("block", className)}
      >{children}</div>
  )
};

export default Block;
