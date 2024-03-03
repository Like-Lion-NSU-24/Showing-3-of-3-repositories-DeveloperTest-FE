import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./inquiry.css"; 
import { createRoot } from 'react-dom/client';


function Inquiry() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
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
      const response = await axios.post('http://115.85.182.23:8080/form/submit', { 
        user: email,
        userName: name,
        userDetail: content
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        setSubmitMessage('질문이 성공적으로 전송되었습니다.');
      } else {
        setSubmitMessage('질문 전송 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('질문 전송 실패:', error);
      setSubmitMessage('질문 전송 실패했습니다. 다시 시도해주세요.');
    }
  
    setEmail('');   
    setName('');
    setContent('');
  };
  
  return (
    <div className="custom-body">
      <main className="custom-main">
      <section className="custom-question">
          <h2>질문 남겨주세요 !</h2>
          <div>
          성향 테스트의 질문도 동아리에 대한 질문도 괜찮아요! <br />
          편하게 질문해주세요! 지원 링크는 맨 아래에 있습니다 !
        </div>
          <br/>
          <div>
            <form onSubmit={(event) => handleSubmitQuestion(event)}>
            <div className="custom-input-container">
              <div aria-label="이메일 또는 전화번호">이메일 또는 전화번호</div>
              <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} className="custom-email-input text-input"  placeholder="답변받을 이메일이나 전화번호를 입력해주세요!" />
            </div>
            <div className="custom-input-container">
              <div aria-label="이름">이름</div>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="custom-name-input text-input"  placeholder="실명이 아니어도 괜찮습니다!" />
            </div>
            <div className="custom-input-container">
              <div aria-label="질문 내용">질문 내용</div>
              <textarea id="content" name="content" rows="10" value={content} onChange={handleContentChange} className="custom-content-input"  placeholder="질문 내용을 입력해주세요!"></textarea>
            </div>
            <div className="custom-input-container">
                <input type="submit" value="질문 등록" className="custom-orange-button" />
              </div>
            </form>
          </div>
          <div>{submitMessage}</div>
        </section>
      </main>

      <footer className="custom-footer">
        <p><a href="https://forms.gle/qBpKFssmeNsykVij6" target="_blank" rel="noopener noreferrer">프론트엔드, 백엔드 지원하러 가기</a></p>
        <p><a href="https://forms.gle/DMoXt3VEBqEivE6U9" target="_blank" rel="noopener noreferrer">디자인 파트 지원하러 가기</a></p>
      </footer>
    </div>
  );
}

export default Inquiry;
