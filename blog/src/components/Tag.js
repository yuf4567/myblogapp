import React, { useEffect } from 'react'
import '../style/tag.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'


export default function Tag() {
    const params = useParams();
    // const [tags, setTags] = React.useState([]);
    // const [isLoaded, setisLoaded] = React.useState(false);
    // useEffect(
    //     //从后端获取数据
    //     () => {
    //         axios.get('/tag')
    //             .then(function (response) {
    //                 setTags(response.data)
    //                 setisLoaded(true)
    //                 // console.log(response.data);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //                 setisLoaded(false)
    //             })
    //     }, []
    // )
    // let id = tags.findIndex((el) => {
    //     return el._id === params.id
    // })
    // console.log(params);
    // if (!isLoaded) {
    //     return <div className='loading'>Loading</div>
    //     // document.querySelector('.RightContentLeft').style.borderTop = '3px solid skyblue'
    // } else {
    return (
        <div className='tag'>tag {params.name}</div>
    )
    // }
}
