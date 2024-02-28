import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./result.css"; // App.css 파일 import

const App = () => {
  const [resultData, setResultData] = useState([
    { label: "Front_end", percentage: 30 },
    { label: "Design", percentage: 30 },
    { label: "Back_end", percentage: 40 },
  ]);

  useEffect(() => {}, []);

  const ResultScore = -3;

  if (ResultScore < -1) {
    return (
      <div className="App">
        <div className="main">
          <h2>당신의 유형: Front_end</h2>
          <div className="middle">
            <div className="photo_guard">
              <div className="only_photo">
                <img className="photo" src="" alt="컴퓨터 사진" />{" "}
                {/*프론트사진*/}
              </div>
              {resultData.map((data, index) => (
                <div key={index} className="bar-container">
                  <div className="bar-label">{data.label}</div>
                  <div
                    className="bar"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="exp_box">
              <h1>Front_end</h1>
              <div className="explain">
                <p>
                  프론트엔드 개발자는 사용자가 사용자가 빠르고 편리하게 서비스를
                  이용할 수 있도록 웹사이트나 어플리케이션 등의 사용자
                  인터페이스(UI)를 구현하는 일을 합니다. <br></br> 이 밖에도
                  시장 점유율을 높이기 위해 다양한 운영 체제, 브라우저에서 모두
                  작동되는 사이트를 만들거나, 각각의 운영체제, 브라우저에
                  최적화된 웹사이트나 앱을 만드는 일을 합니다.<br></br>{" "}
                  <br></br>
                  사용언어:<br></br> HTML, CSS, JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="go">
            <ul className="explain_a">
              <li className="">
                <a href="">
                  {" "}
                  {/*시작링크*/}
                  <button className="explainAdd_a " type="button">
                    다시하기
                  </button>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  {/*지원링크넣기*/}
                  <button className="explainAdd_a " type="button">
                    지원하러가기
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (ResultScore >= -1 && ResultScore <= 1) {
    // 디자인 화면
    return (
      <div className="App">
        <div className="main">
          <h2>당신의 유형: Design</h2>
          <div className="middle">
            <div className="photo_guard">
              <div className="only_photo">
                <img className="photo" src="" alt="컴퓨터 사진" />{" "}
                {/*디자인 사진*/}
              </div>
              {resultData.map((data, index) => (
                <div key={index} className="bar-container">
                  <div className="bar-label">{data.label}</div>
                  <div
                    className="bar"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="exp_box">
              <h1>Design</h1>
              <div className="explain">
                <p>
                  웹디자이너는 웹사이트를 제작하고 관리하는 일을 합니다.
                  <br></br>
                  웹사이트를 개발하고 매력적으로 디자인을 더해 웹사이트의 반응
                  속도와 직관적인 사용자 인터페이스를 구현해야 하며 웹 디자인
                  이론을 통해 오늘날의 웹이 어떤 방식으로 작동되는지 이해하는
                  과정이 필요합니다. <br></br>
                  <br></br>필요 자격증:<br></br> 정보처리기능사, 컴퓨터 그래픽스
                  운용기능사
                </p>
              </div>
            </div>
          </div>
          <div className="go">
            <ul className="explain_a">
              <li className="">
                <a href="">
                  {" "}
                  {/*시작페이지 링크넣기*/}
                  <button className="explainAdd_a " type="button">
                    다시하기
                  </button>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  {/*지원링크넣기*/}
                  <button className="explainAdd_a " type="button">
                    지원하러가기
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    // 백엔드 화면
    return (
      <div className="App">
        <div className="main">
          <h2>당신의 유형: Back_end</h2>
          <div className="middle">
            <div className="photo_guard">
              <div className="only_photo">
                <img className="photo" src="" alt="컴퓨터 사진" />{" "}
                {/*백엔드사진*/}
              </div>
              {resultData.map((data, index) => (
                <div key={index} className="bar-container">
                  <div className="bar-label">{data.label}</div>
                  <div
                    className="bar"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="exp_box">
              <h1>Back_end</h1>
              <div className="explain">
                <p>
                  {" "}
                  Back-end는 우리가 볼 수 없는 영역으로 서버에서 실행됩니다.{" "}
                  <br></br>주로 웹 사이트의 서버관리와 개발 업무를 담당하며 DB와
                  OS관리도 담당합니다. <br></br>
                  주로 자바(JAVA)언어를 사용하며 사용자의 요구사항을
                  데이터화하여 요구사항에 맞게 가공한 뒤 데이터를 Front-end로
                  되돌려주는 역할을 합니다.
                  <br></br>
                  <br></br>
                  사용언어:<br></br>
                  JAVA, Python, Ruby 등
                </p>
              </div>
            </div>
          </div>
          <div className="go">
            <ul className="explain_a">
              <li className="">
                <a href="">
                  {" "}
                  {/*시작링크*/}
                  <button className="explainAdd_a " type="button">
                    다시하기
                  </button>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  {/*지원링크넣기*/}
                  <button className="explainAdd_a " type="button">
                    지원하러가기
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default result;