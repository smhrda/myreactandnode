import './App.css';

// layout
import Header from './layout/Header';
import Navbar from './layout/Navbar';

// page
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';

// 라우터
import {Routes, Route} from 'react-router-dom';


function App() {
  // 1. 고정되어 있는 Header를 하나 제작
  // -> JS라는 내용의 h3태그
  // -> 클릭 시, 메인으로 이동

  // 2. 고정되어 있는 Navbar를 하나 제작
  // -> 로그인, 회원가입 버튼
  // -> 클릭 시, 각각의 페이지로 이동
  
  return (
    <div>
    <Header></Header>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/join' element={<Join></Join>}></Route>
    </Routes>
    </div>
  );
}

export default App;
