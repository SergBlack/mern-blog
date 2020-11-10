import React from 'react';
import PropTypes from 'prop-types';
import SocialLinkButton from '../SocialIcon/SocialLinkButton';
import styles from './Sidebar.module.css';

const sidebarInfo = {
  title: 'Кратко о блоге',
  description:
    'Цель создания данного блога проста - ' +
    'создать доступный извне сайт, на котором можно будет ' +
    'тестировать, что-то из существующих технологий, ' +
    'пробовать внедрять фичи, а так же сохранять ' +
    'полезную информацию в виде постов. Ну и так, для истории...',
};

const Sidebar = () => {
  const socialLinksSprite = require('../assets/socialLinksSprite.svg');

  return (
    <div>
      <div className={styles.sidebarAbout}>
        <div className={styles.sidebarTitle}>
          {sidebarInfo.title}
        </div>
        <p className={styles.sidebarDescription}>
          {sidebarInfo.description}
        </p>
      </div>
      <div className={styles.sidebarContacts}>
        Контакты в соцсетях
      </div>
      <div className={styles.sidebarSocialLinks}>
        <SocialLinkButton
          href="https://vk.com/id2329393"
          xlinkHref={`${socialLinksSprite}#icon-vk`}
          color="blue"
          description="VKontakte"
        />
        <SocialLinkButton
          href="https://github.com/SergBlack"
          xlinkHref={`${socialLinksSprite}#icon-github`}
          color="blue"
          description="GitHub"
        />
        <SocialLinkButton
          href="https://linkedin.com/in/sergey-osipchuk"
          xlinkHref={`${socialLinksSprite}#icon-linkedin`}
          color="blue"
          description="LinkedIn"
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default Sidebar;
