import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import InfiniteScroll from 'react-infinite-scroll-component';
import {usePosts} from "./hooks/usePosts";
function App() {
  const {currentPost, getPost, currentPage, loading} = usePosts();
  const getMore = () => {
    getPost(currentPage + 1);
      
  };
  return (
    <div className="container">
      <p style={{textAlign: 'center'}}>
        Scroll
      </p>
      <InfiniteScroll
          dataLength={currentPost.length}
          next={getMore}
          hasMore={true}
          loader={<h4>loading</h4>}
      >
      <Posts posts={currentPost}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;
