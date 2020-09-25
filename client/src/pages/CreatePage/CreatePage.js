import React, {useContext, useState} from 'react';
import styles from './CreatePage.module.css';
import {useHttp} from '../../hooks/http.hook';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
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
          },
          {Authorization: `Bearer ${auth.token}`},
      );
      history.push(`/main`);
    } catch (e) {
      console.log(e);
    }
  };

  const onFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.createFormContainer}>
      <form onSubmit={addPost}>
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
          <div>Описание поста</div>
          <textarea
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
          <textarea
            placeholder="Введите текст.."
            id="postText"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <label htmlFor="postText">Введите сообщение поста</label>
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

        <button type="submit">
          Добавить пост
        </button>

      </form>
    </div>
  );
};
