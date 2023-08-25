import React, { useState } from 'react';
import styled from 'styled-components'
import "../App.css"
const places = [
    {
      title: "[역사] 오사카 성",
      imageUrl: "/오사카성.png",
      description: "토요토미 히데요시는 1592년과 1598년 사이에 임진왜란이라 알려진 한국 침공을 주도했습니다. 이 침공은 조선시대 한국과 당시의 일본 정권 사이에 큰 충돌을 일으켰고, 많은 사람들이 이 과정에서 희생되었습니다. 히데요시의 목표 중 하나는 중국 명나라로의 진출이었으나, 이를 위해서는 먼저 한국을 지배해야 했습니다. 그러나 이 침공은 결국 실패로 끝나고, 히데요시의 사망 이후에 일본군은 철수했습니다. 오사카 성은 히데요시가 건설했던 성 중 하나로, 그의 야심적인 계획과 군사적 업적을 대표하는 유산 중 하나입니다. 성이 지어진 이후로 여러 차례의 전투와 수리를 겪었으나, 히데요시의 역사와 그의 한국 침공 등에 대한 정보도 오사카 성 박물관에서 다루고 있습니다. 이러한 역사적 배경 때문에, 일부 한국인 방문객들은 오사카 성을 방문할 때 그의 한국 침공에 대한 복잡한 감정을 느낄 수 있습니다."
    },
    {
      title: "[역사] 오사카 역사박물관",
      imageUrl: "/오사카 역사박물관.png",
      description: "오사카 역사박물관은 오사카의 깊은 역사를 담당하며, 방문객에게 고대 오사카의 삶과 문화를 소개합니다. 박물관은 고대의 도시 계획, 중세의 상업 활동, 그리고 근대의 산업화까지 오사카의 변천사를 포괄적으로 다룹니다. 여기에는 오사카와 한국 간의 초기 교류와 거래에 대한 섹션도 포함되어 있습니다. 방문객은 또한 박물관의 전망대에서 현대의 오사카 도시 풍경을 감상할 수 있습니다."
    },
    {
      title: "[문화] 한국젤리 일본 상륙",
      imageUrl: "/한글젤리.jpg",
      description: "최근 몇 년 동안 한국의 젤리, 과자, 소주 등 다양한 간식과 음료가 일본 시장에서 눈에 띄는 성과를 보이고 있습니다. 실제로, 여러 시장 조사에 따르면 한국 간식류의 일본 내 판매 증가율은 약 20~30%에 달하며, 이는 전년 대비 매출의 상당한 증가를 의미합니다. 이러한 성과는 여러 요인에 의해 가능해졌습니다. 먼저, 한류(K-pop, K-drama 등)의 영향으로 한국 문화에 대한 일본 내 관심이 증가한 것이 큰 역할을 했습니다. 더불어, 소셜 미디어를 통한 마케팅 전략 역시 한국 간식류의 일본 내 인지도를 높이는 데 중요한 역할을 했습니다. 또한, 한국과 일본 간의 지리적 가까움은 물류와 유통 측면에서 유리한 조건을 제공했습니다. 이러한 상황은 문화교류뿐만 아니라 경제적 이익에도 상당한 영향을 미치고 있습니다. 일본 시장에 진출한 한국 기업들은 현지 소비자의 니즈에 빠르게 대응하고, 다양한 특산품을 지속적으로 선보이면서 시장 점유율을 확대하고 있습니다. 한국 간식류의 일본 내 인기는 단순한 판매 증가로만 끝나지 않고, 한국과 일본 간의 문화적 유대를 강화하는 결과를 가져옵니다. 이는 두 나라 간의 경제적 및 문화적 관계에 긍정적인 영향을 미칠 것으로 예상됩니다."
    },
    {
      title: "[문화] 이쿠노 코리아타운",
      imageUrl: "/이쿠노 코리아타운.png",
      description: "이쿠노 코리아타운은 오사카에서 한국 문화의 본격적인 체험을 할 수 있는 곳입니다. 이 거리에는 한국 음식점, 상점, 그리고 공예품 가게가 밀집되어 있습니다. 방문객은 진짜 한국 음식을 즐기거나, 한국의 전통 공예품과 기념품을 구매할 수 있습니다. 이쿠노 코리아타운은 한국의 명절 때마다 특별한 이벤트와 축제가 열리며, 한국의 전통을 체험할 수 있는 기회를 제공합니다."
    },
    {
      title: "[문화] 유니버셜 스튜디오 재팬",
      imageUrl: "/유니버셜.png",
      description: "유니버셜 스튜디오 재팬은 전세계에서 인기 있는 영화나 TV 프로그램을 기반으로 한 다양한 어트랙션과 공연을 제공하는 대형 테마 파크입니다. 특히 '해리 포터의 마법의 세계', '주라기 월드', 그리고 '미니언 파크'는 방문객들 사이에서 큰 인기를 끌고 있습니다. 방문객은 이곳에서 영화 속의 세계에 잠시 들어가 환상적인 경험을 할 수 있습니다. 또한 파크 안에는 다양한 레스토랑과 상점도 있어, 하루 종일 즐길 것이 많습니다."
    },
    {
      title: "[역사] 교토 후시미 이나리 신사",
      imageUrl: "/신사.jpg",
      description: "후시미 이나리 신사는 일본의 가장 유명하고 인기 있는 신사 중 하나입니다. 이 신사는 이나리 신을 숭배하는 곳이며, 이나리는 농업, 특히 쌀과 곡물에 관련된 신입니다. 백여 개의 붉은 토리 게이트가 특징적인 이 신사는 많은 관광객과 순례자들이 찾는 명소입니다. 이나리 신은 쌀과 농업을 지배하는 신으로, 쌀은 일본에서도 중요한 먹거리입니다. 한국에서도 쌀은 기본적인 식량으로, 농업 신앙이 존재합니다. 이 점에서 두 나라의 신앙이 역사적으로 비슷한 모양새를 띄고 있다고 할 수 있습니다."
    }
  ];
  
  const Place = ({ place }) => {
    const [showMore, setShowMore] = useState(false);
  
    const placeStyle = {
      fontFamily: 'SUIT-Regular',
      margin: '20px auto',
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '90%',
    };
  
    const descriptionStyle = {
      fontSize: '20px',
      color: 'gray',
    };
  
    const imageStyle = {
      display: 'block',
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      margin: '0 auto',
      borderRadius: '10px',
    };
  
    const buttonStyle = {
      marginTop: '10px',
      width: '100%',
      textAlign: 'center',
      padding: '8px 16px',
      backgroundColor: '#FA9CC0',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    };
  
    return (
      <div style={placeStyle}>
        <h2>{place.title}</h2>
        <img src={place.imageUrl} alt={place.title} style={imageStyle} />
        {showMore && <p style={descriptionStyle}>{place.description}</p>}
        <button style={buttonStyle} onClick={() => setShowMore(!showMore)}>
          {showMore ? '숨기기' : '펼치기'}
        </button>
      </div>
    );
  };
  
  const History = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const containerStyle = { padding: '0 10px' };
    const titleStyle = {
      fontFamily: 'GangwonState',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
      fontWeight: 'bold',
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      margin: '5px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ccc',
      color: '#fff',
      fontWeight: 'bold',
    };
  
    const activeButtonStyle = {
      ...buttonStyle,
      backgroundColor: '#666',
    };
  
    const changeCategory = (category) => {
      setSelectedCategory(category);
    };
  
    const historyPlaces = places.filter((place) => place.title.includes('역사'));
    const culturePlaces = places.filter((place) => place.title.includes('문화'));
    let displayPlaces = places;
  
    if (selectedCategory === 'history') {
      displayPlaces = historyPlaces;
    } else if (selectedCategory === 'culture') {
      displayPlaces = culturePlaces;
    }
  
    return (
      <HistoryBox>
      <div style={containerStyle}>
        <h1 style={titleStyle}>한국과 일본의 문화와 역사</h1>
        <button style={selectedCategory === 'all' ? activeButtonStyle : buttonStyle} onClick={() => changeCategory('all')}>
          모두 보기
        </button>
        <button style={selectedCategory === 'history' ? activeButtonStyle : buttonStyle} onClick={() => changeCategory('history')}>
          역사
        </button>
        <button style={selectedCategory === 'culture' ? activeButtonStyle : buttonStyle} onClick={() => changeCategory('culture')}>
          문화
        </button>
  
        {displayPlaces.map((place) => (
          <Place key={place.title} place={place} />
        ))}
      </div>
      </HistoryBox>
    );
  };
  
  export default History;

  const HistoryBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;