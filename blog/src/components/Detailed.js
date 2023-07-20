import React, { useEffect } from 'react'
import '../style/detailed.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Detailed() {
  //评论区展示（模拟数据）
  const comment = [{
    "logo": "https://q2.qlogo.cn/g?b=qq&nk=2713315169&s=100",
    "name": "joe1111",
    "descri": "2022.2.24",
    "email": "123@qq.com",
    "adress": "shanghai",
    "time": "2022-3-27"
  }, {
    "logo": "https://q2.qlogo.cn/g?b=qq&nk=2713315169&s=100",
    "name": "joe1111",
    "descri": "2022.2.24",
    "email": "123@qq.com",
    "adress": "shanghai",
    "time": "2022-3-27"
  }, {
    "logo": "https://q2.qlogo.cn/g?b=qq&nk=2713315169&s=100",
    "name": "joe1111",
    "descri": "2022.2.24",
    "email": "123@qq.com",
    "adress": "shanghai",
    "time": "2022-3-27"
  }]

  //评论区提交
  const { register, handleSubmit } = useForm()
  const onSubmit = (d) => {
    alert(JSON.stringify(d))
  }
  // const [isLoaded, setisLoaded] = React.useState(false);
  //传参
  const [articles, setArticles] = React.useState([]);
  const params = useParams();
  const [isLoaded, setisLoaded] = React.useState(false);
  const [error, setError] = React.useState('');

  useEffect(
    //从后端获取数据
    () => {
      axios.get('/homeapi/article')
        .then(function (response) {
          setArticles(response.data)
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
  // console.log(articles);
  let id = articles.findIndex((el) => {
    return el._id === params.id
  })
  if (!isLoaded) {
    return <div className='loading'>Loading</div>
  } else {

    return (
      <div className='detailed'>
        <div className='top'>
          <p>
            {articles[id].title}
            <span className='iconfont icon-bianji-ziti' title='点击该表文章字体大小' style={{ cursor: 'pointer' }}></span>
            <span className='iconfont icon-huatong'></span>
            <span className='iconfont icon-book'></span>
          </p>
          <span>
            <span className='iconfont icon-user2'></span> {articles[id].author}
            <span className='iconfont icon-shizhong1'></span>{articles[id].time}
            <span className='iconfont icon-yanjing'></span>3081次浏览
            <span className='iconfont icon-24gl-bubble2'></span>{articles[id].comment} 条评论
            <span className='iconfont icon-bianji-gangbi'></span>4488字数
            <span className='iconfont icon-hashjinghao'></span>技能学习
          </span>
        </div>
        <div className='navDetail'>
          <span className='iconfont icon-home1'></span>&nbsp;
          <span>
            <Link to='/'>首页</Link>
            &nbsp;/ &nbsp;正文  </span>
          <span className='navDetailRight'>分享到： &nbsp;
            <span className='iconfont icon-062qqkongjian'></span>&nbsp;/&nbsp;
            <span className='iconfont icon-xinlangweibo'></span>&nbsp;/&nbsp;
            <span className='iconfont icon-xiangji'></span>
          </span>
        </div>
        <div className='navDetailText'>
          <h1>{articles[id].title}</h1>
          <span>
            {articles[id].content}
          </span>
        </div>
        <button className='nextPassage'>下一篇</button>
        <form className='articleComment' onSubmit={handleSubmit(onSubmit)}>
          发表评论<span title='使用cookie技术保留您的个人信息以便您下次快速评论，继续评论发表代表您已同意该条款' className='iconfont icon-tishi' style={{ paddingLeft: '5px' }}></span>
          <div className='articleCommentpinglun'>评论*</div>
          <input className='articleCommentInput' placeholder='说点什么吧...' {...register('descri')}></input>
          <div style={{ height: '24px', lineHeight: '24px' }}>
            <span className='biaoqing'> <span className='iconfont icon-xiaolian'></span>表情</span>
            <input type='checkbox' className='switch'></input>
            <span className='simi'>私密评论 </span>
          </div>

          <div className='mingchen'>
            名称<br />
            <input type='text' placeholder='姓名或昵称'></input>
          </div>
          <div className='youxiang'>
            邮箱<br />
            <input type='text' placeholder='邮箱（必填，将保密）'></input>
          </div>
          <div className='dizhi'>
            地址<br />
            <input type='text' placeholder='网站或博客'></input>
          </div>
          <input type='submit' value='发表评论' className='articleCommentsubmit' />
        </form>
        <div style={{ fontSize: '20px', color: '#777777', paddingLeft: '20px', margin: '20px 0', fontWeight: '700s' }}>
          4条评论
        </div>
        <ul className='commentArea'>
          {
            comment.map((item, index) => {
              return <li key={index}>
                <img src={item.logo}></img>
                <span>
                  <span style={{ fontSize: '14px', color: '#877777' }}>{item.name}</span>
                  <span style={{ fontSize: '10px', color: '#a0a0b3' }}> {item.time} </span>
                </span>
                <span className='commentDescri' style={{ fontSize: '14px', color: '#7b818f' }}>{item.descri}</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
