import React, {useContext, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
  const [post, setPost] = useState('');
  const classes = useStyles();

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
      const data = await request(
          '/api/post/new',
          'POST',
          {
            content: post,
            title: title,
          },
          {Authorization: `Bearer ${auth.token}`},
      );
      history.push(`/main`);
    } catch (e) {
      console.log(e);
    }
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
                  Введите заголовок
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
                <input type="file"/>
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
