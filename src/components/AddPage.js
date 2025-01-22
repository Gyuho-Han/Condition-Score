import React, { useRef, useState } from 'react';
import styles from "../style/addpage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {

  const[data, setData] = useState({
    userName: "",
    bodyScore: "",
    bodyReason: "",
    emoScore: "",
    emoReason: "",
    recomMusic: "",
    emoProfile: ""
  });

  const navigate = useNavigate();
  const userName = useRef();
  const bodyScoreRef = useRef();
  const bodyReasonRef = useRef();
  const emoScoreRef = useRef();
  const emoReasonRef = useRef();
  const recomMusic = useRef();
  const emoProfile = useRef();

  const onClickBtn = () => {
    navigate(`/`);
  };

  const onChangeInput = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value,
    });
  };

  function postDataToJSONFile(e) {
    e.preventDefault();
    if(!data.userName) {
      alert("이름을 입력해 주세요!");
      bodyScoreRef.current.focus();
      return;
  }

  if(!data.bodyReason) {
      alert("몸 컨디션에 대한 이유를 입력해 주세요!");
      bodyReasonRef.current.focus();
      return;
  }
    if(!data.bodyScore) {
        alert("몸의 점수를 입력해 주세요!");
        bodyScoreRef.current.focus();
        return;
    }

    if(!data.bodyReason) {
        alert("몸 컨디션에 대한 이유를 입력해 주세요!");
        bodyReasonRef.current.focus();
        return;
    }

    if(!data.emoScore) {
        alert("감정의 점수를 입력해 주세요!");
        emoScoreRef.current.focus();
        return;
    }

    console.log(data);
    
    axios.post("https://678f220a49875e5a1a90a2cf.mockapi.io/conditions", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        alert("입력이 완료되었습니다.");
        navigate('/');
      })
      .catch((error) => {
        alert("에러가 발생했습니다.");
        console.error(error);
      });
  }

  return (
    <div className='mainContainer'>
      <div className='secondContainer'>
        <h2>프로필 이름</h2>
        <input onChange={onChangeInput} placeholder="이름을 작성해주세요" type="text" name="userName" />
        <h2>프로필 이모지</h2>
        <select name="userEmotion" className="userEmotion" onChange={onChangeInput}>
          <option value="happy" className="userEmotionOption">😄</option>
          <option value="excitied" className="userEmotionOption">😆</option>
          <option value="cry" className="userEmotionOption">🥲</option>
          <option value="yummy" className="userEmotionOption">😋</option>
          <option value="study" className="userEmotionOption">🤓</option>
          <option value="angry" className="userEmotionOption">😡</option>
          <option value="sick" className="userEmotionOption">🤒</option>

        </select>
        <h2>몸의 점수</h2>
        <input onChange={onChangeInput} placeholder="5점 만점" type="number" name="bodyScore" />
        <div className={styles.padding_10}>
          <input onChange={onChangeInput} placeholder="이유를 작성해주세요!" className={styles.text_box} type="text" name="bodyReason" />
        </div>  

        <h2>마음의 점수</h2>
        <input onChange={onChangeInput} placeholder="5점 만점" type="number" name="emoScore" />
        <div className={styles.padding_10}>
          <input onChange={onChangeInput} placeholder="이유를 작성해주세요!" className={styles.text_box} type="text" name="emoReason" />
        </div>
        <h2>나의 오늘의 노래 추천</h2>
        <input onChange={onChangeInput} placeholder="노래 제목을 작성해주세요 (선택) " type="text" name="recomMusic" />
      </div>
        <button type="button" onClick={onClickBtn}>
          Close
        </button>
        <button onClick={(e) => postDataToJSONFile(e)} className={styles.submitButton} type="submit">
          제출
        </button>
    </div>
  )
}

export default Home
