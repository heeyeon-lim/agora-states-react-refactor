import React, { useState } from 'react'
import Discussion from '../components/Discussion'
import Page from './Page'

const Discussions = ({backendData}) => {

  // 총 질문 갯수 
  const totalData = backendData.length

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1)


  // 해당 페이지의 첫 데이터의 인덱스 
  const firstIdx = (currentPage-1) * 10 

    
  return (
    <React.Fragment>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
            {backendData.slice(firstIdx, firstIdx + 10).map( (discussion) => <Discussion key={discussion.id} obj={discussion}/>)}
        </ul>
      </section>

      <section className="page">
        <Page setCurrentPage={setCurrentPage} totalData={totalData}/>
      </section>
    </React.Fragment>
  )
}

export default Discussions

// form 
// discussions -- 데이터 import 
   // discussion