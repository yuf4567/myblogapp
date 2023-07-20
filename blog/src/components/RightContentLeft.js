import React, { useEffect } from 'react'
import '../style/RightContentLeft.css'
import { Link } from 'react-router-dom';
import axios from 'axios'


export default function RightContentLeft() {
  // const articleList = [
  //   {
  //     title: 'SSH公钥登录和RSA非对称加密',
  //     intruduce: 'SSH登录方式接触过Linux服务器的同学肯定用过SSH协议登录系统，通常SSH协议都有两种登录方式：密码口令登录和公钥登陆。一、密码口令（类似于账号密码登录） 1.客户端连接服务器，服务器把公钥发给客户端 2.客户端输入登录口令，并用服务器公钥加密后提交给服务器 3.服务器用私钥解密，结果匹配，则允许登录 二、公钥登录（一般用RSA非对称加密） 1...',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: 'MongoDB常用查询语法及与MySQL对比示例',
  //     intruduce: 'MongoDB和MySQL的一些常用的查询语句对比，MongoDB的一些语法及其查询示例。',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: '自建Git服务器 - 创建属于你自己的代码仓库',
  //     intruduce: '最近有线上朋友私信问我怎么搭建个人博客，也有咨询我个人项目的代码是如何保管的，还有一个朋友问我买了服务器玩了一段时间，等新鲜感过了就不知道做什么了。关于这些问题并没有一个标准答案，每个人都有自己的使用习惯，找到适合你的才是最好的。关于博客搭建及使用的工具或服务在我博客的关于页里已经写的比较详细了，如果有人想看具体步骤我可以专门写一篇详细的教程，本篇先来讲讲我的个人项目代码是如何保管的。',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: 'Docker虚拟化管理：30分钟教你学会用Docker',
  //     intruduce: '关于Docker的官方介绍网上太多了我就不贴了，就实际体验来说Docker可以极大的简化环境搭建及服务部署的操作流程，大大降低部署的时间成本，解放你的双手。本文不会深入讲解Docker底层架构及运行原理，也不会有一堆架构图贴在这里。该篇旨在让你以最快的速度学会使用Docker，关于Docker的架构及其底层的一些知识，你可以在学会Docker的基本使用之后再去了解。开门见山讲架构聊底层有点容...',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: 'Shiro权限管理框架（五）：自定义Filter实现及其问题排查记录',
  //     intruduce: '明确需求在使用Shiro的时候，鉴权失败一般都是返回一个错误页或者登录页给前端，特别是后台系统，这种模式用的特别多。但是现在的项目越来越多的趋向于使用前后端分离的方式开发，这时候就需要响应Json数据给前端了，前端再根据状态码做相应的操作。那么Shiro框架能不能在鉴权失败的时候直接返回Json数据呢？答案当然是可以。其实Shiro的自定义过滤器功能特别强大，可以实现很多实用的功能，向前端返...',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: '感恩2019，你好2020。新年快乐！',
  //     intruduce: '2020年1月1日，元旦快乐，新年快乐！记忆中，杭州每年的12月31日都会有一个跨年活动，每个商圈都会有相应的活动安排，“武林跨年活动”、“湖滨之夜跨年音乐嘉年华”、“嘉里中心新年狂响活动”、“湖滨步行街音乐节”等等太多了。17年和18年两次跨年我都因为懒散没去现场瞧瞧，第二天看着朋友圈里各种晒跨年现场图的，还是挺遗憾没去凑凑热闹了。今年这次跨年决定要去现场感受一下氛围，选定的目标是武林广场...',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  //   {
  //     title: '通过Shell脚本以FTP方式上传文件到虚拟主机实现Hexo博客自动发',
  //     intruduce: '写这篇是因为最近将博客从服务器迁移到虚拟主机上了，我需要在Linux服务器上将我的Hexo博客编译后的静态页面上传至虚拟主机上，我的虚拟主机上传文件有且仅有一种方式：FTP。先说下我想实现的自动部署流程，我在Jenkins上做了监听，一旦我的Hexo代码仓库有新的提交，会触发任务脚本执行发布操作。具体要做的事都写在Shell脚本上，主要流程如下：脚本配置，配置Hexo工作目录，静态文件上传目...',
  //     author: '夜月归途',
  //     time: '2020 年 05 月 01 日',
  //     comment: '4 条评论'
  //   },
  // ]
  const [articles, setArticles] = React.useState([]);
  const [isLoaded, setisLoaded] = React.useState(false);
  const [error, setError] = React.useState('');
  const toTop = () => {//返回顶部
    // console.log(111)
    window.scrollTo(0, 0)
  }

  //分页
  const [currentPage, setcurrentPage] = React.useState(1);//当前页码
  // let a = articles.length;
  // let a = articles.length;
  // console.log(a);
  // const [totalPage, settotalPage] = React.useState(1);
  useEffect(
    //从后端获取数据
    () => {
      axios.get('/homeapi/article')
        .then(function (response) {
          setArticles(response.data)
          // console.log(parseInt(articles.length / 10) + 1);
          // settotalPage(parseInt(articles.length / 10) + 1)
          setisLoaded(true)
          // console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(error)
          setisLoaded(false)
        })
    }
    , []);


  //分页
  // let arr = []
  // settotalPage(parseInt(articles.length / 10) + 1)//总页码（每一页10个数据）
  // console.log(totalPage);
  // for (let i = 1; i <= totalPage; i++) {
  //   arr.push(i)
  // }

  const backfn = () => {

    window.scrollTo(0, 0)
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll('.fenye>ul>li')[i].style.backgroundColor = 'white'
      document.querySelectorAll('.fenye>ul>li')[i].style.color = 'black'
    }
    document.querySelectorAll('.fenye>ul>li')[currentPage - 1].style.backgroundColor = 'black'
    document.querySelectorAll('.fenye>ul>li')[currentPage - 1].style.color = 'white'
    // console.log(document.querySelectorAll('.fenye>ul>li')[2]);
    setcurrentPage(currentPage - 1);
    // console.log(currentPage);
  }
  const frontfn = () => {

    window.scrollTo(0, 0)
    document.querySelectorAll('.fenye>ul>li')[currentPage].style.backgroundColor = 'black'
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll('.fenye>ul>li')[i].style.backgroundColor = 'white'
      document.querySelectorAll('.fenye>ul>li')[i].style.color = 'black'
    }
    document.querySelectorAll('.fenye>ul>li')[currentPage + 1].style.backgroundColor = 'black'
    document.querySelectorAll('.fenye>ul>li')[currentPage + 1].style.color = 'white'
    setcurrentPage(currentPage + 1);
    // console.log(currentPage);
  }
  const centerfn = function (e) {
    for (let i = 0; i < 7; i++) {
      document.querySelectorAll('.fenye>ul>li')[i].style.backgroundColor = 'white'
      document.querySelectorAll('.fenye>ul>li')[i].style.color = 'black'
    }
    setcurrentPage(parseInt(e.target.innerHTML))
    // console.log(typeof e.target.innerHTML);
    // console.log(currentPage);
    document.querySelectorAll('.fenye>ul>li')[parseInt(e.target.innerHTML)].style.backgroundColor = 'black'
    document.querySelectorAll('.fenye>ul>li')[parseInt(e.target.innerHTML)].style.color = 'white'
    window.scrollTo(0, 0)

  }
  // console.log(currentPage);
  // console.log(arr);

  if (!isLoaded) {
    return <div className='loading'>Loading</div>
  } else {

    return (
      <div className='RightContentLeft'>
        <div className='head'>
          <div className='title'>夜月归途</div>
          <div className='summary'>恰沐春风共同游，终只叹，木已舟。</div>
        </div>
        <div className='articles'>
          <ul>
            {/* 每次只截取10个数据 */}
            {articles.slice((currentPage - 1) * 10, currentPage * 10).map((item, index) => {
              return <li key={index}>
                <Link onClick={toTop} to={`/detailed/${item._id}`} >
                  {item.title}
                </Link>
                <p> {item.intruduce} </p>
                <hr></hr>
                <p>
                  <span className='iconfont icon-user1'></span>{item.author}
                  <span className='iconfont icon-shizhong'></span> {item.time}
                  <span className='iconfont icon-liaotianchat521'></span> {item.comment}条评论
                </p>
              </li>
            })}
          </ul>
          <div className='fenye'>
            <ul>
              <li className='iconfont icon-icon_arrowleft-01' onClick={backfn}></li>
              <li onClick={centerfn} style={{ color: 'white', backgroundColor: 'black' }}>1</li>
              <li onClick={centerfn}>2</li>
              <li onClick={centerfn}>3</li>
              <li onClick={centerfn}>4</li>
              <li onClick={centerfn}>5</li>
              <li onClick={centerfn}>6</li>
              <li onClick={centerfn}>7</li>
              <li className='iconfont icon-icon_arrowright' onClick={frontfn}></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}