import React, { useState } from 'react'
import codestatesLogo from '../codestatesLogo.png'
import '../index.css'

const Form = ({setBackendData}) => {

    const [isActive, setIsActive] = useState(false)
    const handleClick = e => {
        setIsActive(true)
    }

    const [name, setName] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const [title, setTitle] = useState('')
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const [question, setQuestion] = useState('')
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    
    
    const handleSubmit = (e) => {
        // setName('')
        // setTitle('')
        // setQuestion('')


        e.preventDefault()

        const submittedData = {
            // ! key로 유니크한 아이디 꼭 주기! 아니면 렌더링에 문제가 있음
            id: parseInt(Math.random() * 10000),
            createdAt: new Date(),
            updatedAt: "2022-05-16T01:02:17Z",
            title: title,
            url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45',
            author: name,
            answer: null,
            bodyHTML: question,
            avatarUrl: "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4"
        }


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submittedData)
        };
        fetch('http://localhost:4000/discussions', requestOptions)
        .then(response => response.json())
        .then(data => setBackendData(data))

        //setName('')은 안됌 ㅠ 
        // 선언한 변수의 값(서버에 보내지는값)은 비워졌지만, 실제 input값을 clear하려면 event.target으로 되어야함. 

        e.target.reset();

    }

    
  return (
    <React.Fragment>
        <header>
        <img src={codestatesLogo} alt="codestates logo"></img>
            <nav>
                <ul>
                    <li><a href="www.google.com">Agora</a></li>
                    <li><a href="www.google.com">Coplit</a></li>
                    <li><a href="www.google.com">Help</a></li>
                    <li><a href="www.google.com">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section className="notices">
            <div className="notice1">좋은 질문 하는 법</div>
            <div className="notice2">좋은 답변 하는 법</div>
            <div className="notice3">아고라스테이츠 규칙</div>
            <div className="notice4">오늘의 베스트 질문</div>
        </section>

        <main>
            <section className={isActive === false ? "display1" : "display1 hide"}>
                <h1>코드스테이츠 개발자들에게<br />질문하세요</h1>
                <button id="askQuestionButton" onClick={handleClick}>질문하기</button>
            </section>

            <section className={isActive === true ? "display2" : "display2 hide"}>
                <form action="" method="get" className="form" onSubmit={handleSubmit}>
                    <div className="form__input--name">
                        <input type="text" name="name" placeholder="Name" onChange={handleNameChange} required/>
                    </div>
                    <div className="form__input--title">
                        <input type="text" name="title" placeholder="Title" onChange={handleTitleChange} required/>
                    </div>
                    <div className="form__textbox">
                        <textarea name="question" placeholder="Question" id="question" onChange={handleQuestionChange} required></textarea>
                    </div>
                    <div className="form__submit">
                        <input type="submit" value="submit" id="submitButton"/>
                    </div>
                </form>
            </section>
        </main>
    </React.Fragment>
  )
}

export default Form


