import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react"
import "./posts.scss"
import { postData } from '../../mock/index';

function InitDetail () {
  const [obj, setObj] = useState({});
  let params = useParams();
  console.log(params, 'params===');
  const { id } = params;

  useEffect(() => {
    async function fetchData () {
      const obj = postData.find(item=>item._id === id)
      setObj(obj);
    }
    fetchData()
  }, [id])

  return (
    <div className="posts-detail">
      <h1 className="posts-title">
        <span className="title">{obj.title}</span>
        <span className="time">发布时间：{obj.createTime || '暂无'}</span>
      </h1>
      <p className="posts-content">
        {obj.contents}
      </p>
    </div>

  )
}


export default InitDetail


