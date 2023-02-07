import React from 'react'

const Page = ({ totalData, setCurrentPage }) => {
    const dataPerPage = 10;
    const totalPage = Math.ceil(totalData / dataPerPage);


  return (
    //아래 코드 이해하기
    //? 페이지를 클릭하면 자꾸 화면 랜덤한 곳으로 이동함.. -> 스크롤고정 
    <div id="pageList">
        {Array(totalPage) // [empty * 5 ]
          .fill()  // [undefined, undefined, undefined, undefined, undefined]
          .map((val, i) => (
          <button key={i + 1 } className={`page${i}`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
          ))
          }
    </div>
  )
}

export default Page

