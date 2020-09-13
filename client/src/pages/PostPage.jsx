import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {useHttp} from '../hooks/http.hook';
import ReactMarkdown from 'react-markdown';
import {CodeBlock} from '../utils/markdown';

const PostPage = ({match}) => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();

  const fetchPosts = useCallback( async () => {
    try {
      const fetchedPosts = await request('/api/post/all', 'GET', null);
      setPosts(fetchedPosts.reverse());
    } catch (e) {

    }
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  let currentPost = '';
  posts.forEach((post) => {
    if (post._id === match.params.id) {
      currentPost = post;
    }
  });

  return (
    <div>
      <ReactMarkdown
        source={currentPost.content}
        renderers={{code: CodeBlock}}
      />
    </div>
  );
};

PostPage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(PostPage);
