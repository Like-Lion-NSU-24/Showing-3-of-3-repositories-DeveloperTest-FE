import React from "react";
import { Link } from "react-router-dom";
import nsulogo from "./nsulogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
const Main = () => {
  return (
    <div>
      <div id="content">
        <img src={nsulogo} alt="로고" id="nsulogo" />
        <div id="contentFlex">
          <div className="title">NSU LIKELION 2024</div>
          <div className="title">개발자 성향 테스트</div>
          <div id="btnWrapper">
            <Link to="/test" className="title ">
              <span className="mainBtn testBtn">
                테스트 <FontAwesomeIcon icon={faLocationArrow} />
              </span>
            </Link>
            <Link to="/inquiry" className="title ">
              <span className="mainBtn inquiryBtn">
                문의 <FontAwesomeIcon icon={faLocationArrow} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
