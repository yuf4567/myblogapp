import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../style/RightContentRight.css'

export default function RightContentRight() {

  const hotArticlefn = function (e) {
    document.querySelector('.hotArticle').style.display = 'block';
    document.querySelector('.topIcon1').style.borderBottom = '2px black solid';
    document.querySelector('.topIcon2').style.borderBottom = 'none';
    document.querySelector('.topIcon3').style.borderBottom = 'none';
    document.querySelector('.newComment').style.display = 'none';
    document.querySelector('.randomArticle').style.display = 'none';

  }
  const newCommentfn = function (e) {
    // console.log(document.querySelector('.newComment'));
    document.querySelector('.hotArticle').style.display = 'none';
    document.querySelector('.newComment').style.display = 'block';
    document.querySelector('.topIcon1').style.borderBottom = 'none';
    document.querySelector('.topIcon2').style.borderBottom = '2px black solid';
    document.querySelector('.topIcon3').style.borderBottom = 'none';
    document.querySelector('.randomArticle').style.display = 'none';

  }
  const randomArticlefn = function (e) {
    // console.log(document.querySelector('.newComment'));
    document.querySelector('.hotArticle').style.display = 'none';
    document.querySelector('.newComment').style.display = 'none';
    document.querySelector('.topIcon1').style.borderBottom = 'none';
    document.querySelector('.topIcon2').style.borderBottom = 'none';
    document.querySelector('.topIcon3').style.borderBottom = '2px black solid';
    document.querySelector('.randomArticle').style.display = 'block';

  }

  const [articles, setArticles] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [isLoaded, setisLoaded] = React.useState(false);
  const [error, setError] = React.useState('');
  const toTop = () => {//返回顶部
    // console.log(111)
    window.scrollTo(0, 0)
  }
  useEffect(
    //从后端获取数据
    () => {
      //获取article
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

      //获取comment
      axios.get('/homeapi/comment')
        .then(function (response) {
          setComments(response.data)
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

      //获取tag
      axios.get('/homeapi/tag')
        .then(function (response) {
          setTags(response.data)
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

  return (
    <div className='RightContentRight'>
      <div className='topIcon topIcon1' onClick={hotArticlefn}>
        <a href='#' className='iconfont icon-dianzan'></a>
      </div>
      <div className='topIcon topIcon2' onClick={newCommentfn}>
        <a href='#' className='iconfont icon-liaotianchat52'></a>
      </div>
      <div className='topIcon topIcon3'>
        <a href='#' className='iconfont icon-liwuhuodong' onClick={randomArticlefn}></a>
      </div>
      <div className='hotArticle'>
        <span >热门文章</span>
        <ul>
          {articles.map((item, index) => {
            //判断是否为热门文章
            if (item.isHot === true) {
              return <Link onClick={toTop} to={`/detailed/${item._id}`} key={index}>
                <li key={index}>
                  <img src={item.logo} />
                  <span>{item.intruduce}
                    <br />
                    <i className='iconfont icon-24gl-bubble2'></i>
                    <i>{item.comment}</i>
                  </span>
                </li>
              </Link>

            }
          })}
        </ul>
      </div>
      <div className='newComment hotArticle'>
        <span>最新评论</span>
        <ul>
          {comments.map((item, index) => {
            return <li key={index}>
              <img src={item.logo} />
              <span>{item.name}
                <br />
                {item.descri}</span>
            </li>
          })}
        </ul>
      </div>
      <div className='hotArticle randomArticle'>
        <span>随机文章</span>
        <ul>
          {articles.map((item, index) => {
            //判断是否为随机文章
            if (item.isRandom === true) {
              return <Link onClick={toTop} to={`/detailed/${item._id}`} key={index}>
                <li key={index}>
                  <img src={item.logo} />
                  <span>{item.intruduce}
                    <br />
                    <i className='iconfont icon-24gl-bubble2'></i>
                    <i>{item.comment}</i>
                  </span>
                </li>
              </Link>

            }
          })}
        </ul>
      </div>

      <div className='blogInfo'>
        <span className='blogInfoTitle'>博客信息</span>
        <div>
          <i className='iconfont icon-jinpai'></i>
          文章数目
          <span className='dot' style={{ backgroundColor: '#67a1d3' }}>63</span>
        </div>
        <div>
          <i className='iconfont icon-24gl-bubble2'></i>
          评论数目
          <span className='dot' style={{ backgroundColor: '#bde2bd' }}>284</span>
        </div>
        <div>
          <i className='iconfont icon-rili'></i>
          运行天数
          <span className='dot' style={{ backgroundColor: '#dfc6ac' }}>4年48天</span>
        </div>
        <div>
          <i className='iconfont icon-xitongtuisong'></i>
          最后活动
          <span className='dot' style={{ backgroundColor: '#bde2bd' }}>一年前</span>
        </div>
      </div>
      <div className='biaoqianyun'>
        <span className='blogInfoTitle'>标签云</span>
        <div className='biaoqianyunflex' >
          {
            tags.map((item, index) => {
              return <Link onClick={toTop} to={`/tags/${item.name}`} key={index}>
                <span key={index} className='dot' style={{ backgroundColor: `#${item.color}` }}>
                  {item.name}
                </span>
              </Link>
            })
          }
          {/* <span className='dot' style={{ backgroundColor: '#aedcae' }}>Java</span>
          <span className='dot' style={{ backgroundColor: '#da99ff' }}>Linux</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>数据库</span>
          <span className='dot' style={{ backgroundColor: '#ffb380' }}>源码</span>
          <span className='dot' style={{ backgroundColor: '#aedcae' }}>Shiro</span>
          <span className='dot' style={{ backgroundColor: '#428bca' }}>框架</span>
          <span className='dot' style={{ backgroundColor: '#eca9a7' }}>JDK</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>动态代理</span>
          <span className='dot' style={{ backgroundColor: '#428bca' }}>Apache</span>
          <span className='dot' style={{ backgroundColor: '#428bca' }}>PHP</span>
          <span className='dot' style={{ backgroundColor: '#da99ff' }}>MySQL</span>
          <span className='dot' style={{ backgroundColor: '#eca9a7' }}>生活</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>随笔</span>
          <span className='dot' style={{ backgroundColor: '#aedcae' }}>博客</span>
          <span className='dot' style={{ backgroundColor: '#428bca' }}>RocketMQ</span>
          <span className='dot' style={{ backgroundColor: '#eca9a7' }}>Jenkins</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>Maven</span>
          <span className='dot' style={{ backgroundColor: '#aedcae' }}>Nginx</span>
          <span className='dot' style={{ backgroundColor: '#ffb380' }}>Servlet</span>
          <span className='dot' style={{ backgroundColor: '#eca9a7' }}>JavaWeb</span>
          <span className='dot' style={{ backgroundColor: '#ffb380' }}>Spring</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>MongoDB</span>
          <span className='dot' style={{ backgroundColor: '#eca9a7' }}>Discuz</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>Cglib</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>SVN</span>
          <span className='dot' style={{ backgroundColor: '#aedcae' }}>Class</span>
          <span className='dot' style={{ backgroundColor: '#da99ff' }}>ClassLoader</span>
          <span className='dot' style={{ backgroundColor: '#ffb380' }}>SpringBoot</span>
          <span className='dot' style={{ backgroundColor: '#aedcae' }}>设计模式</span>
          <span className='dot' style={{ backgroundColor: '#d9b999' }}>单例模式</span> */}

        </div>
      </div>

    </div >
  )
}
