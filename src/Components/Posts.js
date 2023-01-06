import React, { useEffect, useState } from 'react';
import axios from 'axios';
const getUrl = 'https://codebuddy.review/posts' 

const Posts = () => {
    const [apiData, setApiData] = useState([]);

    const getData = () => {
        axios.get(getUrl)
        .then(res => setApiData(res))
    }
    useEffect(() => {
        getData();
    }, [])
    return(
        <div>
            {apiData}
        </div>
    )
}

export default Posts;