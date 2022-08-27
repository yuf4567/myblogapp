import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import axios from 'axios'

export default function Comment() {
    const [comments, setComments] = React.useState([]);
    const [isLoaded, setisLoaded] = React.useState(false);
    const [columns, setColumns] = React.useState([]);

    useEffect(
        //从后端获取数据
        () => {
            axios.get('/comment')
                .then(function (response) {
                    setComments(response.data)
                    setColumns([{
                        title: 'name',
                        dataIndex: 'name',
                        key: 'name',
                        render: text => <a>{text}</a>,
                        align: 'center'
                    },
                    {
                        title: 'descri',
                        dataIndex: 'descri',
                        key: 'descri',
                        align: 'center'
                    },
                    {
                        title: 'email',
                        dataIndex: 'email',
                        key: 'email',
                        align: 'center'
                    },
                    {
                        title: 'adress',
                        dataIndex: 'adress',
                        key: 'adress',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: 'time',
                        dataIndex: 'time',
                        key: 'time',
                        align: 'center'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        render: (text, record) => (
                            <Space size="middle">
                                <a>Edit</a>
                                <a>Delete</a>
                            </Space>
                        ),
                        align: 'center',
                        width: 100
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
        return (
            <div>
                <Table columns={columns} dataSource={comments} scroll={{ x: 1700, y: 400 }} />
            </div>
        )
    }
}
