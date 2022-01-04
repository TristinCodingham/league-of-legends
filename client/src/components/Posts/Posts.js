import React from 'react';

import PostsState from './Posts.state';
import Post from '../Post/Post';

export default function Posts() {
    const { posts, getPosts, isLoading, error } = PostsState();

    React.useEffect(() => {
        getPosts();
    }, [getPosts]);

    if(error !== null) return "Error";
    if(isLoading) return "Loading";

    const Posts = () => <ul>{posts.map(post => <Post post={post} key={post.id} />)}</ul>;
    
    return (
        <Posts />
    );
}
