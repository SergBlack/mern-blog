import React, {useContext, useState} from 'react';
import styles from './CreatePage.module.css';
import {useHttp} from '../../hooks/http.hook';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';
import MarkdownBtnsPanel from
  '../../components/MarkdownBtnsPanel/MarkdownBtnsPanel';

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [technology, setTechnology] = useState('');
  const MAX_TITLE_LENGTH = 60;
  const MAX_DESC_LENGTH = 120;

  const addLink = async (event) => {
    event.preventDefault();
    try {
      const data = await request(
          '/api/link/generate',
          'POST',
          {from: link},
          {Authorization: `Bearer ${auth.token}`},
      );
      history.push(`/detail/${data.link._id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const addPost = async (event) => {
    event.preventDefault();
    try {
      const data = await request(
          '/api/post/new',
          'POST',
          {
            content: postContent,
            title,
            description,
            image,
            technology,
          },
          {Authorization: `Bearer ${auth.token}`},
      );
      history.push(`/post/${data.post._id}`);
    } catch (e) {
      console.log(e);
    }
  };

  // const updatePost = async (id) => {
  //   try {
  //     const data = await request(
  //       `/api/post/${id}/update`,
  //       'PUT',
  //       {
  //         content: postContent,
  //         id,
  //       },
  //       {Authorization: `Bearer ${auth.token}`},
  //     );
  //     setIsEditPost(false);
  //     setPostContent(data.content);
  //     history.push(`/post/${data._id}`);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onSymbolSelect = (event, symbol) => {
    event.preventDefault();
    setPostContent(`${postContent}${symbol}`);
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
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setTechnology(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
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
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
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
                alt="image"
              />
            }
          </div>
        </div>

        <button onClick={addPost}>
          Добавить пост
        </button>

      </form>
    </div>
  );
};

