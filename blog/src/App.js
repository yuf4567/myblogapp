import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//组件引入
import Header from './components/Header';
import LeftContent from './components/LeftContent';
import RightContentRight from './components/RightContentRight'
import RightContentLeft from './components/RightContentLeft'
import RightContentFooter from './components/RightContentFooter';
import Detailed from './components/Detailed';
import Guidang from './components/nav/Guidang';
import Cross from './components/nav/Cross';
import About from './components/nav/About';
import Images from './components/nav/Images';
import Life from './components/nav/Life';
import Links from './components/nav/Links';
import Massage from './components/nav/Massage';
import Study from './components/nav/Study';
import Tag from './components/Tag';


function App() {
  return (
    <div className="App">
      <Header />
      {/* 解决塌陷问题 */}
      <div id='taxian'></div>
      <div className='content'>
        <BrowserRouter>
          <LeftContent />
          <Routes>
            {/* 关于react路由传参：https://www.jianshu.com/p/bbd9c38a3bfd */}
            <Route path="/" element={<RightContentLeft />} />
            <Route path="/tags/:name" element={<Tag />} />
            <Route path="/detailed/:id" element={<Detailed />} />
            <Route path="/guidang" element={<Guidang />} />
            <Route path="/cross" element={<Cross />} />
            <Route path="/about" element={<About />} />
            <Route path="/images" element={<Images />} />
            <Route path="/life" element={<Life />} />
            <Route path="/links" element={<Links />} />
            <Route path="/message" element={<Massage />} />
            <Route path="/study" element={<Study />} />
          </Routes>
          <RightContentRight />
          <RightContentFooter />
        </BrowserRouter>


      </div>

      <div className='toTop' onClick={window.scrollTo(0, 0)}>
        <span className='iconfont icon-huidingbu' style={{ color: '#58666e' }}></span>
      </div>
    </div>
  );
}

export default App;
