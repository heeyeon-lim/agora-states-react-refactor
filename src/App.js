import React, {useEffect, useState} from "react";
import Form from './components/Form'
import Discussions from './components/Discussions'

function App() {
    //데이터 가져오기
    const [backendData, setBackendData] = useState([])

    //? 백엔드 데이터가 바뀔 예정이니까 dependency array에 [backendData]를 넣어줘야할까?
  
    useEffect(() => {
      console.log('useEffect called')
        fetch('http://localhost:4000/discussions')
          .then(res => res.json())
          .then(data => setBackendData(data))
    }, [])

  return (
    <React.Fragment>
      <Form setBackendData={setBackendData}/>
      <Discussions backendData={backendData} />
    </React.Fragment>
  );
}

export default App;
