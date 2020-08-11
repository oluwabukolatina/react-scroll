import {useEffect, useState} from "react";
import axios from "axios";

export const usePosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [perPage] = useState(10);
    const [currentPost, setCurrentPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
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
    }, [perPage]);
    const getPosts = () => {
        setCurrentPage(currentPage + 1);
        const indexOfLastPost = (currentPage+1) * perPage;
        const indexOfFirstPost = indexOfLastPost - perPage;
        setCurrentPost(currentPost.concat(posts.slice(indexOfFirstPost, indexOfLastPost)))
    };
    const getPost = (param) => {
        if (currentPost.length >= posts.length) {
            setLoading(false)
            return;
        }
        setCurrentPage(param)
        const indexOfLastPost = param * perPage;
        const indexOfFirstPost = indexOfLastPost - perPage;
        setCurrentPost(currentPost.concat(posts.slice(indexOfFirstPost, indexOfLastPost)))
        console.log(currentPost.concat(posts.slice(indexOfFirstPost, indexOfLastPost)))
    }
    return {posts, currentPost, currentPage, perPage, loading, getPosts, getPost}
}
