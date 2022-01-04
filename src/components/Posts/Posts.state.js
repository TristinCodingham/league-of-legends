import React from 'react';

export default function PostsState() {
    const [posts, setPosts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    function getPosts() {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => {
                if(res.ok) return res.json();
                throw res;
            })
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(err => setError(err));
    }

    return { posts, getPosts, isLoading, error };
}
