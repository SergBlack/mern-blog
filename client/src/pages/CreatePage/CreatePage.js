import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './CreatePage.module.css';
import {useHttp} from '../../hooks/http.hook';
import {AuthContext} from '../../context/AuthContext';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import MarkdownBtnsPanel from
  '../../components/MarkdownBtnsPanel/MarkdownBtnsPanel';
import {
  addPost as addPostAction,
  updatePost as updatePostAction,
} from '../../redux/actions';

const CreatePage = ({addPost, updatePost, currentPost}) => {
  const history = useHistory();
  const {id} = useParams();
  const {token} = useContext(AuthContext);
  const {request} = useHttp();
  const postInitState = {
    title: '',
    description: '',
    content: '',
    image: null,
    technology: '',
  };
  const [link, setLink] = useState('');
  const [post, setPost] = useState(postInitState);
  const MAX_TITLE_LENGTH = 60;
  const MAX_DESC_LENGTH = 120;
  const {title, description, content, image, technology} = post;

  useEffect(() => {
    if (id && currentPost._id === id) {
      setPost(currentPost);
    } else {
      setPost(postInitState);
    }
  }, [currentPost, id]);

  const addLink = async (event) => {
    event.preventDefault();
    try {
      const data = await request(
          '/api/link/generate',
          'POST',
          {from: link},
          {Authorization: `Bearer ${token}`},
      );
      history.push(`/detail/${data.link._id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const onFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPost({...post, image: fileReader.result});
    };
    fileReader.readAsDataURL(file);
  };

  const onSymbolSelect = (event, symbol) => {
    event.preventDefault();
    const {content} = post;
    setPost({...post, content: `${content}${symbol}`});
  };

  const createPost = (e) => {
    e.preventDefault();
    addPost(
        token,
        post,
        (id) => {
          history.push(`/post/${id}`);
        },
    );
  };

  const updateCurrentPost = (e) => {
    e.preventDefault();
    updatePost(
        token,
        id,
        post,
        (id) => {
          history.push(`/post/${id}`);
        },
    );
  };

  return (
    <div className={styles.createFormContainer}>
      <form>
        <div>
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            type="submit"
            name="action"
            onClick={addLink}
          >
            Добавить ссылку
          </button>
        </div>

        <div>
          <div>Заголовок</div>
          <input
            id="post"
            type="text"
            value={title}
            onChange={(e) => setPost({...post, title: e.target.value})}
          />
          <label
            htmlFor="post"
          >
            Введите заголовок.
            Осталось знаков {MAX_TITLE_LENGTH - title.length}
          </label>
        </div>

        <div>
          <div>Технология</div>
          <input
            id="technology"
            type="text"
            value={technology}
            onChange={(e) => setPost({...post, technology: e.target.value})}
          />
          <label
            htmlFor="technology"
          >
            Введите используемые технологии
          </label>
        </div>

        <div>
          <div>Описание поста</div>
          <textarea
            className={styles.postDescriptionTextarea}
            cols={60}
            rows={2}
            maxLength={120}
            id="description"
            placeholder="Введите текст.."
            value={description}
            onChange={(e) => setPost({...post, description: e.target.value})}
          />
          <label
            htmlFor="description"
          >
            Введите описание.
            Осталось знаков {MAX_DESC_LENGTH - description.length}
          </label>
        </div>

        <div>
          <div>Текст поста</div>
          <MarkdownBtnsPanel onSymbolSelect={onSymbolSelect}/>
          <label htmlFor="postContent">Введите сообщение поста</label>
          <textarea
            className={styles.postContentTextarea}
            placeholder="Введите текст.."
            id="postContent"
            value={content}
            onChange={(e) => setPost({...post, content: e.target.value})}
          />
        </div>

        <div >
          <div>Файл</div>
          <input
            type="file"
            onChange={(e) => onFileChosen(e.target.files[0])}
            id="file"
          />
          <div>
            {
              image && <img
                src={image}
                style={{maxHeight: '250px'}}
                alt="background"
              />
            }
          </div>
        </div>

        {id ? (
          <button onClick={updateCurrentPost}>
            Обновить пост
          </button>
        ) : (
          <button onClick={createPost}>
            Добавить пост
          </button>)
        }
      </form>
    </div>
  );
};

CreatePage.propTypes = {
  addPost: PropTypes.func,
  updatePost: PropTypes.func,
  currentPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  currentPost: state.postsStore.currentPost,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (token, post, afterSuccess) => {
    dispatch(addPostAction(token, post, afterSuccess));
  },
  updatePost: (token, id, post, afterSuccess) => {
    dispatch(updatePostAction(token, id, post, afterSuccess));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
