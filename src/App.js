import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import InfiniteScroll from 'react-infinite-scroll-component';
import {usePosts} from "./hooks/usePosts";
function App() {
  const {posts, currentPost, getPosts} = usePosts();
  const getMore = () => {
  };
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     getPosts()
    }
  };
  return (
    <div className="container">
      <p style={{textAlign: 'center'}}>
        Scroll
      </p>
      <InfiniteScroll
          dataLength={posts.length}
          next={getMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
      >
      <Posts posts={currentPost}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;
