import React from 'react'
import '../index.css'


const Discussion = ({obj}) => {
  return (
    <li className='discussion__container'>
        <div className='discussion__avatar--wrapper'>
            <img className='discussion__avatar--image' alt={`avatar of ${obj.author}`} src={obj.avatarUrl}></img>
        </div>
        <div className='discussion__content'>
            <h2><a href={obj.url}>{obj.title}</a></h2>
            <div className='discussion__information'>{`${obj.author}. ${new Date(obj.createdAt).toLocaleString()}`}</div>
        </div>
        <div className='discussion__answered'>
            <p> {obj.answer === null ? '❎': '✅'}</p>
        </div>
    </li>
  )
}
// html로 리턴하는 부분에서 1) 변수 2) JS문법인 경우  -> bracket을 쓴다. 
export default Discussion

