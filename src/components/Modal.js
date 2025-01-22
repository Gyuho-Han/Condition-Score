import React, { useEffect, useState} from 'react';
import axios from "axios";
import "../style/modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close} = props;
  const [scores, setScores] = useState(null);

  function getDataFromJSONFile() {
    return axios.get(`https://678f220a49875e5a1a90a2cf.mockapi.io/conditions/${2}`)
        .then((response) => {
            //scores = response.data;
            //console.log(scores);

            setScores(response.data); 
            console.log(response.data); 
        })
        .catch((error) => {
            console.error("에러: ", error);
        });
  }

  useEffect(() => {
    if (open) {
      getDataFromJSONFile();
    }
  }, [open]);
  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <div className='modalHeaderBox'>
              <div className='modalProfilePic'> </div>
              <h2 className='modalProfileName'>{scores ? scores.userName : "Loading..."}</h2>
              <h5 className='modalProfileDate'>2025.01.21</h5>
              <button className="close" onClick={close}>
              &times;
            </button>
            </div>
          </header>
          <main>
            <span>몸 컨디션 : </span>
            {[1,1,1,1].map(function(){
              return <span>⭐️</span>;
            })}
            <p>{scores ? scores.bodyReason : "Loading..."}</p>
            <span>마음 컨디션 : </span>
            {[1,1].map(function(){
              return <span>⭐️</span>;
            })}
            <p>{scores ? scores.emoReason : "Loading..."}</p>

            <div className='modalMusicBox'>{scores ? scores.recomMusic : "Loading..."}</div>

          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal; 
