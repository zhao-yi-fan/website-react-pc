import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import 'antd';
import "./App.css";
import Home from './pages/home'
import MessageBoard from './pages/messageBoard'
import Posts from './pages/posts/index'
import { Top } from './pages/Top'

function App () {
  return (
    <Router>
      <Top></Top>
      <Routes>
        <Route path="/index" element={<Home />}></Route>
        <Route path="/message-board" element={<MessageBoard />}></Route>
        <Route path="/posts/:id" element={<Posts />}></Route>
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
  );
}

export default App;
