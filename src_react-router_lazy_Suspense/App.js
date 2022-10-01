import { lazy, Suspense} from "react";
import { Link, NavLink, Route, Switch, Redirect } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import './App.css'
import Header from "./components/Header";
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
function App () {

  return (
    <div>
      <Header />
      {/* 
      NavLink可以实现路由标签的高亮 activeClassName指定样式名
      Switch提高路由匹配效率，标签匹配到不会再向下检索。不加的话，会匹配的所有组件都展示，且匹配到还会继续向下匹配
      Route exact 属性开启严格匹配
      children 属性可以放子组件
      Redirect一般写在路由的最下方，当所有的路由都无法匹配时，跳转到Redirect指定的路由
      */}
      <MyNavLink to="/about" children="About" />
      <MyNavLink to="/home" children="Home" />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Redirect to="/about" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
