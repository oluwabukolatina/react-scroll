import React, {useEffect, useState, useCallback} from 'react';
import './App.css';
import axios from 'axios'
import Posts from "./components/Posts";
import InfiniteScroll from 'react-infinite-scroll-component';
function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false)


  useEffect( ()=> {
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(response.data);
      setLoading(false)
    };
    fetchPosts();
  }, [])
  const detectBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      // console.log('hello')
  }
  }
  detectBottom()

  const lastPost = currentPage * perPage;
  const firstPost = lastPost - perPage;
  // const [currentPosts, setCurrentPosts] = useState([])
  // setCurrentPosts(posts.slice(firstPost, lastPost))
  const currentPosts = posts.slice(firstPost, lastPost);
  // setCurrentsPosts(posts.slice(firstPost, lastPost))
  // console.log(currentPosts)


  // console.log(currentPosts)
  // console.log(firstPost)
  // console.log(currentPosts)
  // console.log(lastPost)
  // console.log(firstPost)
  // console.log(currentPosts)
  const getMore = () => {
    //show loading spinner and make fetch request to api
    // setCurrentPage((currentPage + 1) * perPage)
    // console.log(currentPage)
    // console.log(currentPage * perPage)
    setCurrentPage(currentPage + 1 )
    console.log(currentPage)



  }
  const [g, setG] = useState([])
  const [c, setC] = useState([])
  console.log(currentPage)
//   const getMoree = () => {
//     // const v = posts.slice(firstPost, lastPost);
//     setCurrentPage(currentPage + 1)
//
//     console.log(currentPage)
//     // const lastPos = currentPage * perPage;
//   // const firstPos = lastPos - perPage;
//
//     // console.log(firstPos)
//     // console.log(lastPos)
//     // setC(...currentPosts)
//     // console.log(posts.slice(firstPos, lastPos))
//     // setG([posts.slice(firstPos, lastPos), currentPosts])
//     // setG(posts.slice(firstPos, lastPos).push(currentPosts))
//     // const k = posts.slice(firstPos, lastPos)
//     // setG([k, currentPosts])
//     // console.log(g)
//
//
// // console.log(posts.slice(firstPos, lastPos))
//     // const o = posts.slice(firstPos, lastPos).concat(c)
//     // console.log(currentPosts)
//     console.log(g)
//   }

  return (
    <div className="container">
      <p onClick={getMore} style={{textAlign: 'center'}}>
        Scroll
      </p>
      {currentPage}
      <InfiniteScroll dataLength={posts.length} next={getMore} hasMore={true} loader={loading}>
      <Posts posts={currentPosts}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;
