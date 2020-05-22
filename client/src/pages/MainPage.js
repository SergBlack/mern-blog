import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader';
import {LinksList} from '../components/LinksList';
import {PostsList} from '../components/PostsList';

export const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const {loading, request} = useHttp();

  const fetchPosts = useCallback( async () => {
    try {
      const fetchedPosts = await request('/api/post/all', 'GET', null);
      setPosts(fetchedPosts);
    } catch (e) {

    }
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      { !loading && <PostsList posts={posts} />}
    </>
  );
};
