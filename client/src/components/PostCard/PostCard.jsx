import React from 'react';
import {array, string, func} from 'prop-types';
import cn from 'classnames';
import arrayBufferToBase64 from '../../utils/arrayBufferToBase64';
import styles from './PostCard.module.css';

const PostCard = ({
  id,
  title,
  date,
  image,
  description,
  onClick,
  type,
}) => (
  <div
    className={
      cn(
          styles.postCard,
            type === 'small' ? styles.postCardSmall : styles.postCardLarge,
      )
    }
  >
    <div
      className={styles.cardActionArea}
      onClick={(e) => onClick(e, id)}
    >
      <div className={styles.card}>
        <div
          className={
            cn(
                styles.cardTitle,
                  type === 'small' ?
                    styles.cardTitleSmall :
                    styles.cardTitleLarge,
            )
          }
        >
          {title}
        </div>
        <div
          className={
            cn(
                type === 'small' ?
                  styles.cardDataSmall :
                  styles.cardDataLarge,
            )
          }
        >
          {new Date(date).toLocaleDateString('ru-RU')}
        </div>
        <div className={styles.cardMedia}>
          {!!image && <img
            className={styles.cardImage}
            src={`data:image/jpeg;base64,${arrayBufferToBase64(image)}`}
            alt="cardImage"
          />}
        </div>
        <p
          className={
            cn(
                type === 'small' ?
                  styles.cardDescriptionSmall :
                  styles.cardDescriptionLarge,
            )
          }
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

PostCard.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  date: string.isRequired,
  image: array,
  description: string.isRequired,
  onClick: func.isRequired,
  type: string,
};

PostCard.defaultProps = {
  image: null,
  type: 'large',
};

export default PostCard;
