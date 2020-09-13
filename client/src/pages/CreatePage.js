import React, {useContext, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  textarea: {
    border: '1px solid grey',
  },
}));

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [post, setPost] = useState('');
  const [image, setImage] = useState(null);
  const classes = useStyles();
  const MAX_TITLE_LENGTH = 60;
  const MAX_DESC_LENGTH = 120;

  const addLink = async (event) => {
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
    try {
      console.log('image: ', image);
      const data = await request(
          '/api/post/new',
          'POST',
          {
            content: post,
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
    fileReader.onloadend = () => setImage(fileReader.result);
    fileReader.readAsDataURL(file);
    // const formData = new FormData();
    // formData.append('image', file)
    // setImage(file);
  };

  return (
    <div>
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

      <Paper>
        <div>
          <div>
            <div >
              <span>Заголовок</span>
              <div>
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
              <span>Описание поста</span>
              <div>
                <TextareaAutosize
                  id="description"
                  type="text"
                  rowsMin={3}
                  cols={80}
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
              <form>
                <span>Текст поста</span>
                <div>
                  <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={10}
                    cols={80}
                    placeholder="Введите текст.."
                    id="postText"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  />
                  <label htmlFor="postText">Введите сообщение поста</label>
                </div>
              </form>
            </div>
            <div>
              <div >
                <span>Файл</span>
                <input
                  type="file"
                  onChange={(e) => onFileChosen(e.target.files[0])}
                />
                {
                  image && <img src={image} style={{maxHeight: '250px'}}/>
                }
              </div>
              <div >
                <input type="text"/>
              </div>
            </div>
            <Button
              type="submit"
              name="action"
              variant="contained"
              color="primary"
              onClick={addPost}
            >
              Добавить пост
            </Button>
          </div>
        </div>
      </Paper>

    </div>
  );
};
