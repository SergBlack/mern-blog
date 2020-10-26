import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './PostCard.module.css';

const PostCard = ({
  id,
  title,
  date,
  image,
  description,
  onClick,
  type,
}) => {
  return (
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
              src={image.path}
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
};

PostCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default PostCard;
