import React from 'react';

const Posts = ({posts, loading}) => {
    const displayPosts = () => {
       return posts.map((post) => (
            <div className="post" key={post.id}>
                <h1 className="post-name">{post.title}</h1>
                <p className="post-body">{post.body}</p>
            </div>
        ))
    }

    return (
        <div className="posts-container">
            {loading ? (
                <small>loading</small>
            ) : displayPosts()}
        </div>
    );
};

export default Posts;
