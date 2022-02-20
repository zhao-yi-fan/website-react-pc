import { NavLink } from "react-router-dom";
import './top.css'
import { Avatar, Popover } from 'antd';

const content = (
  <div className="avatar-pop">
    <p>我的主页</p>
    <p>设置</p>
    <p>退出</p>
  </div>
);

function Top () {
  return (
    <div className="top-f">
      <div className="top">
        <div className="nav-list">
          <NavLink to="/index" className="link">主页</NavLink>
          <NavLink to="/message-board" className="link">留言板</NavLink>
          <Popover content={content} trigger="click">
            <Avatar className="top-avatar" size="large" src={require('../../static/avatar.jpg')} />
          </Popover>
        </div>
      </div>
    </div>
  )
}

export {
  Top
}