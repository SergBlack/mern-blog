import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkdownBtnsPanel.module.css';

const MarkdownBtnsPanel = ({onClick}) => {
  return (
    <div className={styles.btnPanel}>
      <button onClick={(e) => onClick(e, '# ')}>H1</button>
      <button onClick={(e) => onClick(e, '## ')}>H2</button>
      <button onClick={(e) => onClick(e, '### ')}>H3</button>
      <button onClick={(e) => onClick(e, '#### ')}>H4</button>
      <button onClick={(e) => onClick(e, '##### ')}>H5</button>
      <button onClick={(e) => onClick(e, '###### ')}>H6</button>
      <button onClick={(e) => onClick(e, '- ')}>List</button>
      <button onClick={(e) => onClick(e, '> ')}>Quote</button>
      <button onClick={(e) => onClick(e, '*текст*')}><em>I</em></button>
      <button onClick={(e) => onClick(e, '**текст**')}><b>B</b></button>
      <button onClick={(e) => onClick(e, '~~текст~~')}><del>S</del></button>
      <button
        onClick={(e) => onClick(e, '\n[название сайта](http://-url-) - описание\n')}
      >
        URL
      </button>
      <button
        onClick={(e) => onClick(e, '```js\n\n тут добавить код \n\n```')}
      >
        Code
      </button>
    </div>
  );
};

MarkdownBtnsPanel.propTypes = {
  onClick: PropTypes.func,
};

export default MarkdownBtnsPanel;
