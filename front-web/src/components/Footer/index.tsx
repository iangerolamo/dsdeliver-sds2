import React from 'react';
import { Baseboard } from './styles';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';

const Footer: React.FC = () => (
  <Baseboard>
    <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</p>
    <div>
      <a href="https://www.youtube.com/?hl=pt&gl=BR" target="_new">
        <YoutubeIcon />
      </a>
      <a href="https://www.linkedin.com" target="_new">
        <LinkedinIcon />
      </a>
      <a href="https://www.instagram.com" target="_new">
        <InstagramIcon />
      </a>
    </div>
  </Baseboard>
);

export default Footer;
