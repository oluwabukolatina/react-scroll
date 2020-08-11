import React, {useEffect, useState, useCallback} from 'react';
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
  const [start, setStart] = useState(1)
  const [count, setCount] = useState(10)
  useEffect( ()=> {
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    if(response.data){
      setPosts(response.data);
      setLoading(false)
      setCurrentPost(response.data.slice(0, count))
      // setCurrentsPosts(posts.slice(firstPost, lastPost))

    }
    };
    fetchPosts();
    console.log(start)
    setCurrentPost(      currentPost.concat( posts.slice(start, (start * perPage))))
    console.log(currentPost)

  }, [start])
  const detectBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      console.log('hello')
  }
  }
  detectBottom()

  const lastPost = currentPage * perPage;
  const firstPost = lastPost - perPage;
  // const [currentPosts, setCurrentPosts] = useState([])
  // setCurrentPosts(posts.slice(firstPost, lastPost))
  // const currentPosts = posts.slice(firstPost, lastPost);
  // setCurrentsPosts(posts.slice(firstPost, lastPost))
  // console.log(currentPosts)


  // console.log(currentPosts)
  // console.log(firstPost)
  // console.log(currentPosts)
  // console.log(lastPost)
  // console.log(firstPost)
  // console.log(currentPosts)
    // console.log(currentPage)
    // console.log(perPage)
    // console.log(posts)
    // console.log(posts.slice(currentPage, currentPage * perPage))
    const getMore = () => {
      console.log(count, start)
      // this.setState({ start: this.state.start + count });
      setStart(start+ count)
      console.log(start);
      setCurrentPage(currentPage + 1);
      console.log(currentPage * perPage)
        // setCurrentPost(posts.slice(currentPage, currentPage * perPage))
console.log(currentPost)


        setCurrentPost(      currentPost.concat( posts.slice(currentPage, (currentPage * perPage))))

      // setCurrentPost(currentPost.concat( posts.slice(currentPage, currentPage * perPage)));
      // console.log((currentPage +1) * perPage)



      // console.log(currentPost)
    const lastPost = currentPage * perPage;
    const firstPost = lastPost - perPage;

    // setCurrentPost(response.data.slice(0, currentPage * perPage))
    // console.log()


    // setCurrentPage(currentPage+ 1)
    // console.log(posts.slice(10, 20))
      // console.log(currentPost.concat( posts.slice(10, 20)))
    // console.log(currentPage)
    // const [currentPosts, setCurrentPosts] = useState([])
    // setCurrentPosts(posts.slice(firstPost, lastPost))
    // const currentPosts = posts.slice(firstPost, lastPost);
    // setCurrentsPosts(posts.slice(firstPost, lastPost))
    // setCurrentPost([])
    //show loading spinner and make fetch request to api
    // setCurrentPage((currentPage + 1) * perPage)
    // console.log(currentPage)
    // console.log(currentPage * perPage)
  }
  const [g, setG] = useState([])
  const [c, setC] = useState([])
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
     length: {currentPost.length}
      <InfiniteScroll
          dataLength={posts.length}
          next={getMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
      >
      {/*    <InfiniteScroll*/}
      {/*        pageStart={10}*/}
      {/*        loadMore={() => getMore}*/}
      {/*        hasMore={true}*/}
      {/*        loader={<div className="loader" key={0}>Loading ...</div>}*/}
      {/*    >*/}
      <Posts posts={currentPost}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;
