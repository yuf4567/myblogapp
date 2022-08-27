import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Col,
    Checkbox,
    Row
} from 'antd';
import axios from 'axios'
import { Alert } from 'antd';

export default function AddArticle() {

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post('/addarticle', {
            values: values
        })
            .then(function (response) {
                // console.log(response);
                alert('添加成功!!')
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    const [tags, setTags] = React.useState([]);
    const [isLoaded, setisLoaded] = React.useState(false);
    const [error, setError] = React.useState('');

    //接受tag数据
    useEffect(() => {
        let isMounted = true;
        axios.get('/tag').then((response) => {
            if (isMounted) {
                setTags(response.data)
                console.log(response.data);
                setisLoaded(true)
            }
        }).catch(function (error) {
            console.log(error);
            setError(error)
            setisLoaded(false)
        });
        return () => {
            isMounted = false;
        };
    }, []);



    if (!isLoaded) {
        return <div className='loading' style={{ fontSize: '50px', textAlign: 'center' }}>数据加载中......</div>
    } else {
        return (
            <div>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    onFinish={onFinish}
                    size='default'
                >
                    <Form.Item label="文章标题" name='title'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="文章介绍" name='intruduce'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="作者" name='author'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="时间" name='time'>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="文章分类" name='category_name'>
                        <Select>
                            <Select.Option value="skill">技能学习</Select.Option>
                            <Select.Option value="life">生活随笔</Select.Option>
                            <Select.Option value="image">旅行相册</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="tag_name" label="文章标签">
                        {/* JDK   PHP MySQL 生活 随笔 博客  Jenkins Maven  Servlet  Spring  Discuz Cglib SVN Class ClassLoader SpringBoot 设计模式 单例模式 */}
                        <Checkbox.Group>
                            <Row>
                                {
                                    tags.map((item, index) => {
                                        return <Col span={4} key={index}>
                                            <Checkbox value={item.name} style={{ lineHeight: '32px' }}>
                                                {item.name}
                                            </Checkbox>
                                        </Col>
                                    })
                                }

                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="是否为热门文章" valuePropName="checked" name='isHot'>
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否为随机文章" valuePropName="checked" name='isRandom'>
                        <Switch />
                    </Form.Item>
                    <Form.Item label="文章内容" name='content'>
                        <Input style={{ height: '300px' }} />
                    </Form.Item>

                    <Form.Item label="" style={{ marginLeft: '150px' }}>
                        <Button type="primary" htmlType="submit">增加文章</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}