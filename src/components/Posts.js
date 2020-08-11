import React from 'react';

const Posts = ({posts}) => {
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
             {displayPosts()}
        </div>
    );
};

export default Posts;
