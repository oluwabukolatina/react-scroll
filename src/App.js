import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Posts from "./components/Posts";
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
    // fetchPosts().then((res) => {
    //   console.log(res);
    //   setLoading(false)
    // }).catch(() => {
    //   setLoading(false)
    // });
  }, [])
  const lastPost = currentPage * perPage;
  const firstPost = lastPost - perPage;
  const currentPosts = posts.slice(firstPost, lastPost)
  return (
    <div className="container">
      <Posts posts={currentPosts} loading={loading}/>
    </div>
  );
}

export default App;
