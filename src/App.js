import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Posts from "./components/Posts";
import InfiniteScroll from 'react-infinite-scroll-component';
// import InfiniteScroll from 'react-infinite-scroller';
function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false)
const [currentPost, setCurrentPost] = useState([])
  useEffect( ()=> {
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    if(response.data){
      setPosts(response.data);
      setLoading(false)
      setCurrentPost(response.data.slice(0, perPage))
    }
    };
    fetchPosts();
    // const update = (p) => {
    //   console.log(p)
    //   const indexOfLastPost = p * perPage;
    //   const indexOfFirstPost = indexOfLastPost - perPage;
    //   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //   // console.log(currentPost.concat(currentPosts))
    //   setCurrentPost(currentPost.concat(currentPosts))
    //   // console.log(currentPost)
    // }
    // update(currentPage)


  }, [])


  const getMore = () => {
    // setCurrentPage(currentPage + 1)
  };
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setCurrentPage(currentPage + 1);
      const indexOfLastPost = currentPage * perPage;
      const indexOfFirstPost = indexOfLastPost - perPage;
      setCurrentPost(currentPost.concat(posts.slice(indexOfFirstPost, indexOfLastPost)))
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
