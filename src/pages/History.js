import React, { useState } from 'react';
import "../App.css"
const places = [
    {
      title: "오사카 성",
      imageUrl: "/오사카성.png",
      description: "오사카 성은 일본의 대표적인 성으로, 매년 수많은 관광객들이 찾는 명소 중 하나이다. 성 내부에는 역사적인 유물들과 함께 성의 역사를 알 수 있는 전시관이 있다."
    },
    {
      title: "오사카 역사박물관",
      imageUrl: "/오사카 역사박물관.png",
      description: "오사카의 역사를 체험하고 탐색할 수 있는 박물관. 다양한 전시와 함께 오사카의 과거부터 현재까지의 변천사를 살펴볼 수 있다."
    },
    {
      title: "오사카 한국문화원",
      imageUrl: "/오사카 한국문화원.png",
      description: "한국의 문화와 예술을 소개하는 공간. 다양한 문화 프로그램과 함께 한국어 교육도 진행되며, 한일 문화 교류의 중심지로 활약하고 있다."
    },
    {
      title: "이쿠노 코리아타운",
      imageUrl: "/이쿠노 코리아타운.png",
      description: "오사카의 한인 거리로, 다양한 한국 음식과 상품들을 만나볼 수 있다. 골목골목 특색 있는 상점들이 모여 있어 탐방이 즐겁다."
    },
    {
      title: "유니버셜 스튜디오 재팬",
      imageUrl: "/유니버셜.png",
      description: "오사카에 위치한 대형 테마파크. 해리 포터, 주라기 월드, 미니언 등 유명 프랜차이즈의 세계를 체험할 수 있다. 연중 다양한 이벤트와 퍼레이드가 진행된다."
    },
    {
      title: "교토 아라시야마",
      imageUrl: "/교토 아라시야마.png",
      description: "교토의 유명한 관광지로, 아름다운 풍경과 역사적인 유적들이 어우러져 있다. 특히 가을의 단풍은 방문객들에게 인기가 있다."
    },
  ];
  const Place = ({ place }) => {
    const [showMore, setShowMore] = useState(false);
  
    const placeStyle = {
      fontFamily:"GangwonState",
      margin: '20px auto',
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '90%',
    };

    const descriptionStyle = {
        fontSize: '20px',
        color:'gray'
      };
  
    const imageStyle = {
      display: 'block',
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      margin: '0 auto',
      borderRadius: '10px'
    };
  
    const buttonStyle = {
      marginTop: '10px',
      padding: '8px 16px',
      backgroundColor: '#009900',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    };
  
    return (
      <div style={placeStyle}>
        <h2 >{place.title}</h2>
        <img src={place.imageUrl} alt={place.title} style={imageStyle} />
        {showMore && <p style={descriptionStyle}>{place.description}</p>}
        <button style={buttonStyle} onClick={() => setShowMore(!showMore)}>
          {showMore ? '숨기기' : '더보기'}
        </button>
      </div>
    );
  };
  
  const History = () => {
    const containerStyle = {
      padding: '0 10px'
    };
  
    const titleStyle = {
      fontFamily: 'GangwonState',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
      fontWeight: 'bold'
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>오사카, 교토의 한국역사적</h1>
        <h1 style={titleStyle}>건물과 문화</h1>
        {places.map(place => (
          <Place key={place.title} place={place} />
        ))}
      </div>
    );
  }
  
  export default History;