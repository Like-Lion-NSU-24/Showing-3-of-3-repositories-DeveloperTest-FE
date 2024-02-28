import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../test/Input.css';

const Input = () => {
  const sliderRef = useRef(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const SampleNextArrow = ({ onClick }) => {
    return (
      <div className={`arrow next arrow ${isLastSlide ? 'hidden' : ''}`} onClick={onClick}>
        <button><i className="xi-angle-right"></i></button>
      </div>
    );
  };

  

  const SamplePrevArrow = ({ onClick }) => {
    const slider = sliderRef.current;

    const isFirstSlide = slider ? slider.innerSlider.state.currentSlide === 0 : false;

    return (
      <div className={`arrow prev arrow ${isFirstSlide ? 'hidden' : ''}`} onClick={onClick}>
        <button><i className="xi-angle-left"></i></button>
      </div>
    );
  };

  const handleAfterChange = (currentSlide) => {
    const slider = sliderRef.current;

    if (slider) {
      const slideCount = slider.props.children.length;

      // 중복 슬라이드 체크
      if (currentSlide === slideCount - 1) {
        setIsLastSlide(true);
      } else if (currentSlide === 0) {
        setIsLastSlide(false);
      } else {
        setIsLastSlide(false);
      }
    }
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: handleAfterChange,
  };
  var choice = document.querySelector('.result_choice');

if (choice) { // choice 요소가 존재하는지 확인
  choice.addEventListener('click', function() {
    var itemValue = document.querySelector('input[name="답변1"]:checked').value;
    var itemValue2 = document.querySelector('input[name="답변2"]:checked').value;
    var itemValue3 = document.querySelector('input[name="답변3"]:checked').value;
    var itemValue4 = document.querySelector('input[name="답변4"]:checked').value;
    var itemValue5 = document.querySelector('input[name="답변5"]:checked').value;
    var itemValue6 = document.querySelector('input[name="답변6"]:checked').value;
    var itemValue7 = document.querySelector('input[name="답변7"]:checked').value;
    var result=parseInt(itemValue);
    var result2=parseInt(itemValue2);
    var result3=parseInt(itemValue3);
    var result4=parseInt(itemValue4);
    var result5=parseInt(itemValue5);
    var result6=parseInt(itemValue6);
    var result7=parseInt(itemValue7);

var allresult=result+result2+result3+result4+result5+result6+result7;
    alert("답:" +allresult);
});
  
}

  return (
    <form action='post'>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
        <div className="slide ">
          <div className='inner '>
          <p>1. 동물모양 쿠키 반죽을 만들던 도중, 모양이 이상한 반죽을 발견한다. 이때, 나의 행동은?</p>
          <input type='radio' value={-1} name='답변1' id='rd1' className='radio'></input>
          <label htmlFor='rd1' className='label1'>1. 반죽을 다시 보기 좋게 만든다.</label>

          <input type='radio' value={0} name='답변1' id='rd2' className='radio'></input>
          <label htmlFor='rd2' className='label1'>2. 이것도 어쩌면 예술작품? 가만보면 이쁠지도?</label>

          <input type='radio' value={1} name='답변1' id='rd3' className='radio'></input>
          <label htmlFor='rd3' className='label1'>3. 처음부터 모양틀을 이용했기 때문에, 이상하게 나올 일이 없다.</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>2. 내일 당장 소개팅을 나가야만 한다. 내가 선택할 코디는?</p>
          <input type='radio' value={-1} name='답변2' id='rd1-2' className='radio2'></input>
          <label htmlFor='rd1-2' className='label2'>1. 깔끔한 소개팅의 정석룩 코디</label>

          <input type='radio' value={0} name='답변2' id='rd2-2' className='radio2'></input>
          <label htmlFor='rd2-2' className='label2'>2. 나의 개성을 보여주게 홍대 코디룩</label>

          <input type='radio' value={1} name='답변2' id='rd3-2' className='radio2'></input>
          <label htmlFor='rd3-2' className='label2'>3. 후줄근한 후드티/후드집업 동네 한 바퀴 코디룩</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>3. 여행을 가기로 했습니다. 어느 곳으로 여행을 가고 싶나요?</p>
          <input type='radio' value={-1} name='답변3' id='rd1-3' className='radio3'></input>
          <label htmlFor='rd1-3' className='label3'>1. 새로운 문화와 기술적인 경험을 즐길 수 있는 신비롭고 독특한 여행</label>

          <input type='radio' value={0} name='답변3' id='rd2-3' className='radio3'></input>
          <label htmlFor='rd2-3' className='label3'>2. 아름다운 건축물과 자연, 문화 등을 담고 있는 예쁜 풍경의 여행지</label>

          <input type='radio' value={1} name='답변3' id='rd3-3' className='radio3'></input>
          <label htmlFor='rd3-3' className='label3'>3. 안전하고 신뢰할 수 있는 호텔, 교통 시스템 등 안정적인 인프라가 갖추어진 여행지</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>4. 친구 생일 파티에 참석하기로 했습니다. 어떤 유형의 선물을 준비할 건가요?</p>
          <input type='radio' value={-1} name='답변4' id='rd1-4' className='radio4'></input>
          <label htmlFor='rd1-4' className='label4'>1. 요즘 유행인 세련되고 스타일리쉬한 선물</label>

          <input type='radio' value={0} name='답변4' id='rd2-4' className='radio4'></input>
          <label htmlFor='rd2-4' className='label4'>2. 친구가 가지고 있을 것 같지 않는 독특한 선물</label>

          <input type='radio' value={1} name='답변4' id='rd3-4' className='radio4'></input>
          <label htmlFor='rd3-4' className='label4'>3. 일상생활에서 유용하게 사용할 수 있는 선물</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>5. 분위기 좋은 카페에 갔습니다. 무슨 음료를 시킬건가요?</p>
          <input type='radio' value={-1} name='답변5' id='rd1-5' className='radio5'></input>
          <label htmlFor='rd1-5' className='label5'>1. 맛은 잘 모르겠지만 도전해보고 싶게 생긴 신비한 느낌의 카페 시그니쳐</label>

          <input type='radio' value={0} name='답변5' id='rd2-5' className='radio5'></input>
          <label htmlFor='rd2-5' className='label5'>2. 카페 주인이 공들여 플레이팅한 이쁜 프라페</label>

          <input type='radio' value={1} name='답변5' id='rd3-5' className='radio5'></input>
          <label htmlFor='rd3-5' className='label5'>3. 실패할 확률이 없는 깔끔한 근본 아메리카노</label>
          </div>
        </div>

        <div className="slide">
        <div className='inner'>
        <p>6. 친구들끼리 재밌는 기계를 하나 만들어보려고 할 때 가장 끌리는 분야는</p>
        <input type='radio' value={-1} name='답변6' id='rd1-6' className='radio6'></input>
          <label htmlFor='rd1-6' className='label6'>1. 기계의 외관을 만드는 분야 시그니쳐</label>

          <input type='radio' value={0} name='답변6' id='rd2-6' className='radio6'></input>
          <label htmlFor='rd2-6' className='label6'>2. 기계를 어떤 모습으로 만들지 구상하는 분야</label>

          <input type='radio' value={1} name='답변6' id='rd3-6' className='radio6'></input>
          <label htmlFor='rd3-6' className='label6'>3. 기계가 동작하는 것을 만드는 분야</label>
              </div>
             </div>


        <div className="slide">
        <div className='inner'>
        <p>7. 분위기 좋은 카페에 갔습니다. 무슨 음료를 시킬건가요?</p>
          <input type='radio' value={-1} name='답변7' id='rd1-7' className='rd7'></input>
          <label htmlFor='rd1-7' className='lb7'>1. 맛은 잘 모르겠지만 도전해보고 싶게 생긴 신비한 느낌의 카페 시그니쳐</label>

          <input type='radio' value={0} name='답변7' id='rd2-7' className='rd7'></input>
          <label htmlFor='rd2-7' className='lb7'>2. 카페 주인이 공들여 플레이팅한 이쁜 프라페</label>

          <input type='radio' value={1} name='답변7' id='rd3-7' className='rd7'></input>
          <label htmlFor='rd3-7' className='lb7'>3. 실패할 확률이 없는 깔끔한 근본 아메리카노</label>
          <div><a href='./result.js' className='result_choice'>제출</a></div>
          </div>
        </div>
      </Slider>
    </div>
    </form>
  );
}
export default Input;