import React, {useContext, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const addLink = async (event) => {
    // if (event.key === 'Enter') {
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
    // }
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
    <div className="col">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <input
          placeholder="Вставьте ссылку"
          id="link"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          // onKeyPress={pressHandler}
        />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={addLink}
        >
          Добавить ссылку
        </button>


      </div>
      <div className="col">
        <div className="col s12 m6">
          <div className="card medium white darken-1">
            <div className="card-content black-grey-text">
              <span className="card-title left-align">Заголовок</span>
              <div className="input-field">
                <input
                  id="post"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="post"
                  className="right-align"
                >
                  Введите заголовок
                </label>
              </div>
              <form className="col s12">
                <span className="card-title left-align">Текст поста</span>
                <div className="input-field">
                  <textarea
                    id="textPost"
                    className="materialize-textarea"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  />
                  <label htmlFor="textPost">Введите текст</label>
                </div>
              </form>
            </div>

            {/* <form action="#">*/}
            <div className="file-field input-field">
              <div className="btn">
                <span>Файл</span>
                <input type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
            {/* </form>*/}

            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={addPost}
            >
                Добавить пост
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
