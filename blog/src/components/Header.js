import React, { useEffect } from 'react'
import '../style/header.css'
import img1 from '../assets/1.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'

let isopen = false
let isopenGossip = false
let isopenLogin = false
export default function Header() {
  const icon1Blockfn = function () {
    if (isopen) {
      document.querySelector('.icon1Block').style.display = 'none'
      isopen = false
    }
    else {
      document.querySelector('.icon1Block').style.display = 'block'
      isopen = true
    }
  }
  const gossipflexfn = function () {
    if (isopenGossip) {
      document.querySelector('.gossipflex').style.display = 'none'
      isopenGossip = false
    }
    else {
      document.querySelector('.gossipflex').style.display = 'block'
      isopenGossip = true
    }
  }
  const loginfn = function () {
    if (isopenLogin) {
      document.querySelector('.login').style.display = 'none'
      isopenLogin = false
    }
    else {
      document.querySelector('.login').style.display = 'block'
      isopenLogin = true
    }
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = (d) => {
    // alert(JSON.stringify(d))
    // setName(d.username)
    // setPassword(d.password)
    axios.post('/homeapi/login', {
      name: d.username,
      password: d.password
    })
      .then(function (response) {
        console.log(response);
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //登录功能实现

  return (
    <div className='header'>
      <img src={img1} className='icon1Block' />
      <div className='logo'>
        <a >
          <span className='iconfont icon-home'></span>
          <span>guitu18.com</span>
        </a>
      </div>
      <div className='icon ' onClick={icon1Blockfn}>
        <span className='iconfont icon-time'></span>
        <span className='iconfont icon-xiala'></span>
      </div>
      <div className='search'>
        <input placeholder='输入关键词搜索...' />
        <span className='iconfont icon-fenxiang'></span>
      </div>
      <div className='icon' onClick={gossipflexfn}>
        <span className='iconfont icon-duihuaxinxitianchong'></span>
      </div>
      <div className='icon' onClick={loginfn}>
        <span className='iconfont icon-keyyuechi'></span>
        <span className='iconfont icon-xiala'></span>
      </div>
      <div className='new'>
        新
      </div>
      <div className='gossipflex'>
        <div className='gossip'>
          <div className='gossipTitle'>闲言碎语</div>
          <span className='gossipContent'>博客放养了一年多，今天迁移到腾讯云了，不得不说腾讯的无忧计划是真的香，以后再也不搬家了。迁移过来后，主题出了不少问题，索性从v6.0升级到最新版v8.2.1了，开始还担心又要重新配置主题了，一堆东西挺闹心的。后面发现无需修改任何配置，上传新版后直接无缝升级，以前7.0升级的时候会出现各种问题，干脆降回去了。看来后期版本，作者开始重视版本升级的用户体验了，所有配置自动兼容，很赞！
            <div className='gossipDate'>September 29th, 2021 at 09:03 pm</div>
          </span>

          <span className='gossipContent'>最近这雨是包月了啊，还是连续包月那种
            <div className='gossipDate'>September 29th, 2021 at 09:03 pm</div>
          </span>
          <span className='gossipContent'>端午节后的第一周比平常多了一天，不巧的是这一周的我还特别的闲，更加让我感觉这一周特别长。上班又不能老划水以浪费时间，所以利用这段时间进行自我提升。只是最近发生的事情比较多，又是刚收假，所以进入深度学习状态的速度比较慢，效率不高。学习还是一件比较吃自制力的事情，加油吧。
            <div className='gossipDate'>September 29th, 2021 at 09:03 pm</div>
          </span>
        </div>
      </div>
      <div className='login' >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>用户名</div>
          <input type='text' placeholder='用户名或电子邮箱' {...register('username')}></input>
          <div>密码</div>
          <input type='password' placeholder='密码' {...register('password')}></input>
          <input type='submit' value='登录' className='submit' />
        </form>
      </div>
    </div>
  )
}
