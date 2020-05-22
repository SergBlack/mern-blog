import React from 'react';

export const PostsList = ({posts}) => {
  if (!posts.length) {
    return <p className="center">Постов пока нет</p>;
  }

  return (
    <div>
      { posts.map((post, i) => {
        return (
          <div key={post._id}>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="" alt="img"/>
                </div>
                <span className="card-title">{post.title}</span>
                <div className="card-content">
                  <p>{post.content}</p>
                </div>
                <div className="card-content right-align">
                  <p>Дата написания:
                    <strong>{new Date(post.date).toLocaleDateString()}</strong>
                  </p>
                  <p><strong>Прочитано: </strong>{post.reads}</p>
                </div>
                <div className="card-action">
                  <a href="#">Открыть</a>
                </div>
              </div>
            </div>

            {/* <div className="col">*/}
            {/*  <div className="col s12 m6">*/}
            {/*    <div className="card medium white darken-1">*/}
            {/*      <div className="card-content black-grey-text" >*/}
            {/*        <span className="card-title left-align">{post.title}</span>*/}
            {/*        <p>{post.content}</p>*/}
            {/*        <div className="card-content black-grey-text" >*/}
            {/*          <p>Дата написания: <strong>{new Date(post.date).toLocaleDateString()}</strong></p>*/}
            {/*          <p><strong>Прочитано: </strong>{post.reads}</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/* </div>*/}
          </div>
        );
      })}
    </div>
  );
};
