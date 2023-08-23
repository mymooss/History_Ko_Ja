import React, { useState } from 'react';
import "../App.css"
const places = [
    {
      title: "오사카 성",
      imageUrl: "/오사카성.png",
      description: "오사카 성은 일본의 가장 유명한 성 중 하나로, 1583년에 토요토미 히데요시에 의해 건축되었습니다. 이 성은 일본 전쟁의 시대 동안 중요한 역할을 했으며, 특히 1615년의 오사카 여름 전쟁에서 주요 사건이 발생했습니다. 성 자체는 화려한 금 장식, 다층 구조, 그리고 중앙의 주 타워로 이루어져 있습니다. 이 타워 내부에는 오사카 성 박물관이 있어, 방문객은 성의 역사와 아티팩트를 볼 수 있습니다. 주변의 공원도 넓게 펼쳐져 있어 방문객들이 산책하거나 휴식을 취하기 좋습니다. 또한 성의 정원에서는 다양한 계절별 행사와 축제가 열립니다."
    },
    {
      title: "오사카 역사박물관",
      imageUrl: "/오사카 역사박물관.png",
      description: "오사카 역사박물관은 오사카의 깊은 역사를 담당하며, 방문객에게 고대 오사카의 삶과 문화를 소개합니다. 박물관은 고대의 도시 계획, 중세의 상업 활동, 그리고 근대의 산업화까지 오사카의 변천사를 포괄적으로 다룹니다. 여기에는 오사카와 한국 간의 초기 교류와 거래에 대한 섹션도 포함되어 있습니다. 방문객은 또한 박물관의 전망대에서 현대의 오사카 도시 풍경을 감상할 수 있습니다."
    },
    {
      title: "오사카 한국문화원",
      imageUrl: "/오사카 한국문화원.png",
      description: "오사카 한국문화원은 한일 문화 교류의 중심지로, 한국의 다양한 예술과 전통을 일본에 소개합니다. 방문객은 전통적인 한국 무용, 음악, 그리고 예술 작품 전시를 감상할 수 있습니다. 또한, 여기서는 한국어 강좌와 워크샵도 제공되며, 한국의 전통 명절과 축제에 대한 이벤트도 자주 개최됩니다. 문화원은 한국과 일본 사이의 다리 역할을 하여, 양국의 이해와 친목을 증진시키는 데 기여하고 있습니다."
    },
    {
      title: "이쿠노 코리아타운",
      imageUrl: "/이쿠노 코리아타운.png",
      description: "이쿠노 코리아타운은 오사카에서 한국 문화의 본격적인 체험을 할 수 있는 곳입니다. 이 거리에는 한국 음식점, 상점, 그리고 공예품 가게가 밀집되어 있습니다. 방문객은 진짜 한국 음식을 즐기거나, 한국의 전통 공예품과 기념품을 구매할 수 있습니다. 이쿠노 코리아타운은 한국의 명절 때마다 특별한 이벤트와 축제가 열리며, 한국의 전통을 체험할 수 있는 기회를 제공합니다."
    },
    {
      title: "유니버셜 스튜디오 재팬",
      imageUrl: "/유니버셜.png",
      description: "유니버셜 스튜디오 재팬은 전세계에서 인기 있는 영화나 TV 프로그램을 기반으로 한 다양한 어트랙션과 공연을 제공하는 대형 테마 파크입니다. 특히 '해리 포터의 마법의 세계', '주라기 월드', 그리고 '미니언 파크'는 방문객들 사이에서 큰 인기를 끌고 있습니다. 방문객은 이곳에서 영화 속의 세계에 잠시 들어가 환상적인 경험을 할 수 있습니다. 또한 파크 안에는 다양한 레스토랑과 상점도 있어, 하루 종일 즐길 것이 많습니다."
    },
    {
      title: "교토 아라시야마",
      imageUrl: "/교토 아라시야마.png",
      description: "교토 아라시야마는 그 아름다운 풍경과 역사적인 유적으로 유명합니다. 아라시야마에는 '토게쓰 다리'와 같은 고대의 다리부터 '텐류지'나 '바람의 숲'과 같은 아름다운 정원과 사원까지 다양한 관광 명소가 있습니다. 특히 가을에는 단풍이 아라시야마의 강과 산을 물들여 방문객들에게 잊지 못할 경험을 선사합니다. 봄에는 벚꽃이 만발하여 아라시야마 전체가 분홍색으로 물들며, 이 풍경은 교토를 방문하는 많은 관광객들에게 인기가 있습니다."
    }
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