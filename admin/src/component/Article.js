import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button } from 'antd';


export default function Article() {
    const [articles, setArticles] = React.useState([]);
    const [isLoaded, setisLoaded] = React.useState(false);
    const [columns, setColumns] = React.useState([]);

    //删除文章
    const removearticle = (id) => {
        console.log(id);
        axios.post('/removearticle', {
            id: id
        })
            .then(function (response) {
                // console.log(response);
                alert('删除成功!!')
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(
        //从后端获取数据
        () => {
            axios.get('/article')
                .then(function (response) {
                    setArticles(response.data)
                    setColumns([{
                        title: 'title',
                        dataIndex: 'title',
                        key: 'title',
                        render: text => <a>{text}</a>,
                        align: 'center'
                    },
                    {
                        title: 'author',
                        dataIndex: 'author',
                        key: 'author',
                        align: 'center'
                    },
                    {
                        title: 'time',
                        dataIndex: 'time',
                        key: 'time',
                        align: 'center'
                    },
                    {
                        title: 'comment',
                        dataIndex: 'comment',
                        key: 'comment',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: 'category_name',
                        dataIndex: 'category_name',
                        key: 'category_name',
                        align: 'center'
                    },
                    {
                        title: 'isHot',
                        dataIndex: 'isHot',
                        key: 'isHot',
                        align: 'center',
                        render: text => <>{text}</>
                    },
                    {
                        title: 'isRandom',
                        dataIndex: 'isRandom',
                        key: 'isRandom',
                        align: 'center'
                    },
                    {
                        title: 'Tags',
                        key: 'tag_name',
                        dataIndex: 'tag_name',
                        align: 'center'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        render: (text, record) => (
                            <Space size="middle">
                                <Link to='/editarticle'>Edit</Link>
                                {/* 下面必须用箭头函数！！！ */}
                                <a onClick={() => removearticle(text._id)}>Delete</a>
                            </Space>
                        ),
                        align: 'center'
                    },])
                    setisLoaded(true)
                    // console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    setisLoaded(false)
                })
        }
        , []);

    if (!isLoaded) {
        return <div className='loading' style={{ fontSize: '50px', textAlign: 'center' }}>数据加载中......</div>
    } else {
        // console.log(articles[0]);
        // console.log(columns);
        return (
            <div>
                <Link to='/addarticle'> <Button block style={{ width: '100px', margin: '20px' }}>+新增文章</Button></Link>
                <Table columns={columns} dataSource={articles} scroll={{ x: 1700, y: 400 }} />
            </div>
        )
    }
}
