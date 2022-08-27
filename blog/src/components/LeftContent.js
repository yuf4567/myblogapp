import React from 'react'
import { Link } from 'react-router-dom'
import '../style/LeftContent.css'

export default function LeftContent() {
    const nav = [{
        icon: 'iconfont icon-box',
        link: '首页',
        router: ''
    },
    {
        icon: 'iconfont icon-hezi501',
        link: '归档',
        router: 'guidang'
    },
    {
        icon: 'iconfont icon-email',
        link: '留言',
        router: 'message'
    },
    {
        icon: 'iconfont icon-xiangce1',
        link: '相册',
        router: 'images'
    },
    {
        icon: 'iconfont icon-kafei',
        link: '关于',
        router: 'about'
    },
    {
        icon: 'iconfont icon-icon--',
        link: '链接',
        router: 'links'
    },
    ]
    let isopenfenlei = false
    let isopenyemian = false
    let isoenyoulian = false
    const fn = function (e) {
        // console.log(e.target.className);
        if (e.target.className === 'fenlei1') {
            if (isopenfenlei == true) {
                isopenfenlei = false
                document.querySelector('.fenlei').style.display = 'none'
                document.querySelector('.fenlei1>i').className = 'iconfont icon-xiangyou'
            }
            else {
                isopenfenlei = true
                isopenyemian = false
                isoenyoulian = false
                document.querySelector('.yemian1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.youlian1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.fenlei1>i').className = 'iconfont icon-xiala'
                document.querySelector('.fenlei').style.display = 'block'
                document.querySelector('.yemian').style.display = 'none'
                document.querySelector('.youlian').style.display = 'none'
            }
        }
        else if (e.target.className === 'yemian1') {
            if (isopenyemian == true) {
                isopenyemian = false
                document.querySelector('.yemian').style.display = 'none'
                document.querySelector('.yemian1>i').className = 'iconfont icon-xiangyou'
            }
            else {
                isopenfenlei = false
                isopenyemian = true
                isoenyoulian = false
                document.querySelector('.yemian1>i').className = 'iconfont icon-xiala'
                document.querySelector('.youlian1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.fenlei1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.fenlei').style.display = 'none'
                document.querySelector('.yemian').style.display = 'block'
                document.querySelector('.youlian').style.display = 'none'
            }
        }
        else {
            if (isoenyoulian == true) {
                isoenyoulian = false
                document.querySelector('.youlian').style.display = 'none'
                document.querySelector('.youlian1>i').className = 'iconfont icon-xiangyou'
            }
            else {
                isopenfenlei = false
                isopenyemian = false
                isoenyoulian = true
                document.querySelector('.yemian1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.youlian1>i').className = 'iconfont icon-xiala'
                document.querySelector('.fenlei1>i').className = 'iconfont icon-xiangyou'
                document.querySelector('.fenlei').style.display = 'none'
                document.querySelector('.yemian').style.display = 'none'
                document.querySelector('.youlian').style.display = 'block'
            }

        }
    }
    let isopenlogo = false
    const logoClick = function () {
        if (isopenlogo) {
            document.querySelector('.clickLogo').style.display = 'none'
            document.querySelector('.triangle').style.display = 'none'
            isopenlogo = false
        }
        else {
            document.querySelector('.clickLogo').style.display = 'block'
            document.querySelector('.triangle').style.display = 'block'
            isopenlogo = true
        }
    }

    return (
        <div className='LeftContent'>
            <div className='pic' onClick={logoClick}>
                <img src='https://www.guitu18.com/usr/images/author.jpg' alt='图片加载中..' />
                <span>夜月归途</span>
                <span className='iconfont icon-xiala'></span>
            </div>
            <div className='nav'>
                <div id='daohang'>
                    导航
                </div>
                <ul>
                    {
                        nav.map((item, index) => {
                            // 记得加上key
                            return <Link to={`/${item.router}`} key={index}>
                                <li key={index}>
                                    <span className={item.icon}></span>
                                    {item.link}
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </div>
            <div className='nav part'>
                <div id='daohang'>
                    组成
                </div>
                <ul>
                    <li onClick={fn} className='fenlei1'>
                        <span className='iconfont icon-Windows'></span>
                        分类
                        <i className='iconfont icon-xiangyou'></i>
                    </li>
                    <div className='fenlei'>
                        <ul>
                            <Link to={`/study`}>
                                <li>
                                    技能学习
                                    <span className='dot'>49</span>
                                </li>
                            </Link>
                            <Link to={`/life`}>
                                <li>
                                    生活随笔
                                    <span className='dot'>5</span>
                                </li>
                            </Link>
                            <Link to={`/images`}>
                                <li>
                                    旅行相册
                                    <span className='dot'>9</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <li onClick={fn} className='yemian1'>
                        <span className='iconfont icon-Paper_'></span>
                        页面
                        <i className='iconfont icon-xiangyou'></i>
                    </li>
                    <div className='fenlei yemian'>
                        <ul>
                            <Link to={`/cross`}>
                                <li>
                                    时光机
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <li onClick={fn} className='youlian1'>
                        <span className='iconfont icon-user2'></span>
                        友链
                        <i className='iconfont icon-xiangyou'></i>
                    </li>
                    <div className='fenlei youlian'>
                        <ul>
                            <a href='https://www.vpsor.cn/' target="_blank">
                                <li>
                                    硅云
                                </li>
                            </a>
                            <a href='http://www.python66.com/' target="_blank">
                                <li>
                                    Python教程
                                </li>
                            </a>
                            <a href='https://www.haowenbo.com/' target="_blank">
                                <li>
                                    Easy Blog
                                </li>
                            </a>
                            <a href='https://www.foreverblog.cn/' target="_blank">
                                <li>
                                    十年之约
                                </li>
                            </a>
                        </ul>
                    </div>
                </ul>
            </div>
            <div className='triangle'></div>
            <div className='clickLogo'>
                早上好，永远年轻，永远热泪盈眶
                <div>
                    <meter min='0' max='1000' value='350'></meter>
                </div>
            </div>
        </div>
    )
}
