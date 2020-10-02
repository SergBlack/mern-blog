import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkdownBtnsPanel.module.css';

const MarkdownBtnsPanel = ({onSymbolSelect}) => {
  return (
    <div className={styles.btnPanel}>
      <button onClick={(e) => onSymbolSelect(e, '\n# ')}>H1</button>
      <button onClick={(e) => onSymbolSelect(e, '\n## ')}>H2</button>
      <button onClick={(e) => onSymbolSelect(e, '\n### ')}>H3</button>
      <button onClick={(e) => onSymbolSelect(e, '\n#### ')}>H4</button>
      <button onClick={(e) => onSymbolSelect(e, '\n##### ')}>H5</button>
      <button onClick={(e) => onSymbolSelect(e, '\n###### ')}>H6</button>
      <button onClick={(e) => onSymbolSelect(e, '\n- ')}>ul</button>
      <button onClick={(e) => onSymbolSelect(e, '\n> ')}>bq</button>
      <button
        onClick={
          (e) => onSymbolSelect(
              e,
              '\n[type name](http://type_url) - type description\n',
          )
        }
      >
        url
      </button>
      <button
        onClick={(e) => onSymbolSelect(e, '```js\n\n insert code \n\n```')}
      >
        code
      </button>

    </div>
  );
};

MarkdownBtnsPanel.propTypes = {
  onSymbolSelect: PropTypes.func,
}

export default MarkdownBtnsPanel;
