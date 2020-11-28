import React from 'react';
import {Message} from '../../components';

import './Home.scss';

import boyAvatar from '../../assets/image/boy-avatar.png';
import girlAvatar from '../../assets/image/girl-avatar.png';
import pokemon1 from '../../assets/image/pokemon1.png';
import pokemon2 from '../../assets/image/pokemon2.png';
import pokemon3 from '../../assets/image/pokemon3.png';
import pokemon4 from '../../assets/image/pokemon4.png';
import pokemon5 from '../../assets/image/pokemon5.png';

const Home = () => {

  const attachments = [
    {
      id: '1',
      filename: 'pokemon1',
      url: pokemon1
    },
    {
      id: '2',
      filename: 'pokemon2',
      url: pokemon2
    },
    {
      id: '3',
      filename: 'pokemon3',
      url: pokemon3
    },
    {
      id: '4',
      filename: 'pokemon4',
      url: pokemon4
    },
    {
      id: '5',
      filename: 'pokemon5',
      url: pokemon5
    }
    ];

  return (
      <section className="home">
        <Message
            avatar={boyAvatar}
            text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐"
            date={new Date()}
            attachments={attachments}
        />
        <Message
            avatar={girlAvatar}
            text="Салам, брат Цезарь!"
            date={new Date()}
            isMe={true}
            isRead={true}
            attachments={attachments}
        />
      </section>
  )
};

export default Home;
