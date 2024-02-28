import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./inquiry.css"; 
import { createRoot } from 'react-dom/client';


function App() {
  const [content, setContent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:8080/api/questions');
        setQuestions(response.data); 
      } catch (error) {
        console.error('질문 목록을 가져오는 데 실패했습니다:', error);
      }
    }
  
    fetchQuestions(); 
  
  }, []); 
  
  const handleDesignSupportClick = () => {
    window.open('https://forms.gle/DMoXt3VEBqEivE6U9', '_blank'); 
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitQuestion = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/form/submit', { 
        userDetail: {
          name: name,
          phoneNumber: phoneNumber,
          email: email,
          content: content
        }
      });
  
      setSubmitMessage('질문이 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('질문 전송 실패:', error);
      setSubmitMessage('질문 전송 실패했습니다. 다시 시도해주세요.');
    }
  
    setContent('');
    setPhoneNumber('');
    setName('');
    setEmail('');
  };
  
  
  return (
    <div className="App">
      <header>
        <h1>질문 남겨주세요!!</h1>
      </header>

      <main>
        <section className="question">
          <h2>질문</h2>
          <div>
          성향 테스트의 질문도 괜찮고 동아리에 대한 질문도 괜찮아요! <br />
          편하게 질문해주세요! <br />
          질문이 없으시다면 넘어가도 좋아요 !
        </div>
          <br/>
          <div>
            <form onSubmit={handleSubmitQuestion}>
            <div className="input-container">
  <label htmlFor="name">이름:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="name-input" placeholder="실명이 아니어도 괜찮습니다!" />
        </div>
        <div className="input-container">
          <label htmlFor="email">이메일 또는 전화번호:</label>
          <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} className="email-input" placeholder="답변받을 이메일이나 전화번호를 입력해주세요!" />
        </div>
        <div className="input-container">
          <label htmlFor="content">질문 내용:</label>
          <textarea id="content" name="content" rows="10" value={content} onChange={handleContentChange} className='input-container textarea' placeholder="질문 내용을 입력해주세요!"></textarea>
        </div>
        <div className="input-container">
              <input type="submit" value="질문 등록" className="orange-button" />
            </div>

            </form>
          </div>
          <div>{submitMessage}</div>
        </section>



        <section className="question-list">
          <h2>질문 목록</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question.content}</li> 
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p><a href="https://forms.gle/qBpKFssmeNsykVij6" target="_blank" rel="noopener noreferrer">프론트엔드, 백엔드 지원하러 가기</a></p>
        <p><a href="https://forms.gle/DMoXt3VEBqEivE6U9" target="_blank" rel="noopener noreferrer">디자인 파트 지원하러 가기</a></p>
      </footer>
    </div>
  );
}

export default inquiry;