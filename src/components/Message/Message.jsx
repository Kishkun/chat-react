import React from 'react';
import PropTypes from 'prop-types';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ru} from 'date-fns/locale'
import classNames from 'classnames';
import readIcon from '../../assets/image/is-read.svg'
import noReadIcon from '../../assets/image/no-read.svg'

import './Message.scss'

const Message = ({avatar, text, date, user, isMe, isRead, attachments}) => {

  const renderAttachment = (item) => {
    return (
        <div
            key={item.id}
            className="message__attachments-item">
          <img src={item.url} alt={item.filename}/>
        </div>
    );
  };

  return (
      <div className={classNames('message', {'message__isme': isMe})}>
        <div className="message__content">
          {isMe && isRead ?
              <img className="message__status" src={readIcon} alt="no-read-icon"/> :
              <img className="message__status" src={noReadIcon} alt="read-icon"/>
          }
          <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullName}`}/>
          </div>
          <div className="message__info">
            <div>
              <div className="message__bubble">
                <p className="message__text">{text}</p>
              </div>
              <span className="message__date">{formatDistanceToNow(date, {addSuffix: true, locale: ru})}</span>
            </div>

            {attachments &&
            <div className="message__attachments">
              {attachments.map(item => renderAttachment(item))}
            </div>
            }
          </div>
        </div>
      </div>
  )
};

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
};

export default Message;
