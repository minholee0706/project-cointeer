import React, { useState } from "react";
import Profile from "./4_Profile";
import './CSS/Donate.css';
import Modal_DONATE from "./9_Modal_DONATE";

const Donate =()=>{

    // Donate 매핑 재단 리스트
    const DonateArray =[
        // Donate_title : 재단이름
        // Donate_target : 사업대상 
        // Donate_area : 사업 영역
        // Donate_address : 재단 주소
        // Donate_url : 재단 url
        // Donate_year : 설립 연도
        {
            Donate_title : "사회복지법인 실로암시각장애인복지관",
            Donate_target : "장애인",
            Donate_area : "사회복지, 예술, 문화, 교육연구, 경제산업, 고용 ",
            Donate_address : "서울특별시 관악구 남부순환로 1717",
            Donate_url : "http://www.silwel.or.kr/v2/index.php",
            Donate_year : "1997",
        },
        {
            Donate_title : "사회복지법인 한국시각장애인복지재단",
            Donate_target : "아동,장애인,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학교경영 및 교육연구,사회복지",
            Donate_address : "서울특별시 강도구 구천면로 645",
            Donate_url : "http://www.hsb.or.kr/kwfvh/",
            Donate_year : "1973",
        },
        {
            Donate_title : "사회복지법인 홍이회 태백장애인종합복지관",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "강원도 태백시 금천길 179",
            Donate_url : "http://www.tbrehab.or.kr/",
            Donate_year : "2012",
        },
        {
            Donate_title : "사단법인 해밝음장애인복지회",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "경기도 남양주시 사릉로 620번길 132",
            Donate_url : "http://www.sunflower365.co.kr/mall/index.php",
            Donate_year : "2006",
        },
        {
            Donate_title : "사단법인 서울장애인부모회",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "	서울특별시 동작구 여의대방로54길 18 서울여성플라자　엔지오센터4층",
            Donate_url : "http://www.sebumo.com/",
            Donate_year : "2008",
        },
        {
            Donate_title : "사회복지재단 한국청각장애인복지회",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 강남구 도곡로25길 6",
            Donate_url : "http://www.chungeum.co.kr/",
            Donate_year : "1960",
        },
        {
            Donate_title : "재단법인 한국장애인재단",
            Donate_target : "장애인,기타(일반대중)",
            Donate_area : "사회복지,모금 및 배분",
            Donate_address : "서울특별시 중구 통일로 86 207호",
            Donate_url : "https://www.herbnanum.org/",
            Donate_year : "2004",
        },
        {
            Donate_title : "사단법인 한국장애인자립생활센터총연합회",
            Donate_target : "장애인",
            Donate_area : "사회복지,지역개발, 주거/자원봉사",
            Donate_address : "서울특별시 영등포구 의사당대로 22 이룸센터 6동 602호",
            Donate_url : "https://koil.or.kr/",
            Donate_year : "2009",
        },
        {
            Donate_title : "사단법인 한국장애인연맹",
            Donate_target : "아동,청소년,장애인,기타(일반대중)",
            Donate_area : "사회복지,국제개발, 해외원조,기타",
            Donate_address : "	서울특별시 영등포그 의사당대로 22 이룸센터 4층 405호",
            Donate_url : "https://dpikorea.org/",
            Donate_year : "2003",
        },
        {
            Donate_title : "사단법인 한국장애인단체총연맹",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 영등포구 의사당대로 22 이룸센터4층",
            Donate_url : "http://kodaf.or.kr/",
            Donate_year : "1998",
        },
        {
            Donate_title : "사단법인 한국시각장애인연합회",
            Donate_target : "기타(일반대중)",
            Donate_area : "기타",
            Donate_address : "서울특별시 금천구 서부샛길 632 대륭테크노타운 5차 903-1호",
            Donate_url : "http://www.kdwa.or.kr/",
            Donate_year : "1981",
        },
        {
            Donate_title : "사단법인 한국산재장애인협회",
            Donate_target : "장애인",
            Donate_area : "사회복지",
            Donate_address : "	대구광역시 남구 장전1길 26-1",
            Donate_url : "http://www.kiao.org/",
            Donate_year : "2010",
        },
        {
            Donate_title : "사단법인 장애인직업안정연구원",
            Donate_target : "아동,청소년,장애인,기타(일반대중)",
            Donate_area : "학교경영 및 교육연구,사회복지,지역개발, 주거/자원봉사,기",
            Donate_address : "서울특별시 강남구 개포로20길 17 연빌딩 4층",
            Donate_url : "http://www.kjdi.re.kr/home/main.php",
            Donate_year : "2001",
        },
        {
            Donate_title : "재단법인 KPX문화재단",
            Donate_target : "아동,청소년,다문화(외국인)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,기타",
            Donate_address : "서울특별시 마포구 마포대로 137",
            Donate_url : "http://kpxfoundation.com/",
            Donate_year : "2009",
        },
        {
            Donate_title : "사단법인 휴먼인러브",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,사회복지,환경, 동식물보존, 유물",
            Donate_address : "서울특별시 구로구 디지털로 271 벽산 디지털밸리 3 1110호",
            Donate_url : "http://hil.or.kr/",
            Donate_year : "2011",
        },
        {
            Donate_title : "재단법인 휘선문화재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠",
            Donate_address : "서울특별시 구로구 오류로8라길 44",
            Donate_url : "http://hui-sun.com/",
            Donate_year : "1999",
        },
        {
            Donate_title : "재단법인 환경재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,환경, 동식물보존, 유물,모금 및 배분",
            Donate_address : "서울특별시 중구 서소문로 106 동화빌딩 3층",
            Donate_url : "https://www.greenfund.org/",
            Donate_year : "2002",
        },
        {
            Donate_title : "재단법인 홍천문화재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠",
            Donate_address : "강원도 홍천군 설악로 1792",
            Donate_url : "https://www.hccf.or.kr/Home/index",
            Donate_year : "2016",
        },
        {
            Donate_title : "재단법인 홍익인간재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,기타",
            Donate_address : "서울특별시 서초구 반포대로 30길 39 덕촌빌딩 7F",
            Donate_url : "http://hongikf.org/",
            Donate_year : "2010",
        },
        {
            Donate_title : "사단법인 함께하는 사랑밭",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,병원경영, 의료, 보건,사회복지,모금 및 배분,국제개발, 해외원조,기타",
            Donate_address : "서울특별시 구로구 경인로 75",
            Donate_url : "https://www.withgo.or.kr/index.do",
            Donate_year : "2004",
        },
        {
            Donate_title : "사회복지법인 함께 걷는 아이들",
            Donate_target : "아동,청소년",
            Donate_area : "예술, 문화, 스포츠,학교경영 및 교육연구,사회복지",
            Donate_address : "서울시 서초구 서초대로 74길 23 801호",
            Donate_url : "https://www.withu.or.kr/USR_main.asp??=Main/index",
            Donate_year : "2010",
        },
        {
            Donate_title : "사회복지법인 한길재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,병원경영, 의료, 보건",
            Donate_address : "인천광역시 부평구 부평문화로53번길 16 2층",
            Donate_url : "https://hangil2008.kr/",
            Donate_year : "2011",
        },
        {
            Donate_title : "사회복지법인 한길",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "학교경영 및 교육연구,사회복지",
            Donate_address : "경기도 안성시 고삼호수로 31-25 한길학교",
            Donate_url : "https://hgjob-s.goean.kr/hgjob-s/main.do",
            Donate_year : "2008",
        },
        {
            Donate_title : "사단법인 한국아시아우호재단",
            Donate_target : "아동,청소년,다문화(외국인)",
            Donate_area : "예술, 문화, 스포츠,학교경영 및 교육연구,기타",
            Donate_address : "서울특별시 강남구 테헤란로 83길 11 하남빌딩 10층",
            Donate_url : "http://www.korea-asia.com/main/main.php",
            Donate_year : "2011",
        },
        {
            Donate_title : "사회복지법인 희연",
            Donate_target : "노인",
            Donate_area : "사회복지",
            Donate_address : "경상남도 창원시 성산구 원이대로393번길 25 케이프타운4층 4008호",
            Donate_url : "",
            Donate_year : "2013",
        },
        {
            Donate_title : "사회복지법인 희망의복지재단",
            Donate_target : "청소년,노인",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 구로구 중앙로 79 1층",
            Donate_url : "https://www.gurohope.or.kr/",
            Donate_year : "2006",
        },
        {
            Donate_title : "사회복지법인 희망세상",
            Donate_target : "노인,장애인",
            Donate_area : "사회복지",
            Donate_address : "경상북도 상주시 배목길 138-14",
            Donate_url : "http://www.xn--2z2b29jgkl74e.kr/",
            Donate_year : "2004",
        },
        {
            Donate_title : "의료법인 행복나눔의료재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "병원경영, 의료, 보건",
            Donate_address : "전라남도 장성군 역전로 171",
            Donate_url : "http://www.skhappiness.org/main.do",
            Donate_year : "2016",
        },
        {
            Donate_title : "재단법인 케이디비나눔재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "학자금, 장학금지원,사회복지,지역개발, 주거/자원봉사,기타",
            Donate_address : "서울특별시 영등포구 은행로 14",
            Donate_url : "https://foundation.kdb.co.kr/index.jsp",
            Donate_year : "2007",
        },
        {
            Donate_title : "재단법인 청소년을위한나눔문화재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 강동구 동남로71길 32",
            Donate_url : "",
            Donate_year : "2005",
        },
        {
            Donate_title : "재단법인 천사나눔장학재단",
            Donate_target : "기타(일반대중)",
            Donate_area : "학자금, 장학금지원",
            Donate_address : "대구광역시 서구 달서로 115",
            Donate_url : "",
            Donate_year : "2016",
        },
        {
            Donate_title : "사단법인 지구촌사랑나눔",
            Donate_target : "다문화(외국인),기타(일반대중)",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 구로구 남부순환로 1307",
            Donate_url : "http://www.g4w.net/",
            Donate_year : "2000",
        },
        {
            Donate_title : "사회복지법인 열매나눔재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 중구 퇴계로20길 37 열매나눔빌딩",
            Donate_url : "https://merryyear.org/",
            Donate_year : "2007",
        },
        {
            Donate_title : "사단법인 에너지나눔과평화",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "학자금, 장학금지원,사회복지,환경, 동식물보존, 유물,모금 및 배분",
            Donate_address : "서울특별시 종로구 새문안로5가길 28 광화문플래티넘",
            Donate_url : "http://www.ep.or.kr/",
            Donate_year : "2006",
        },
        {
            Donate_title : "재단법인 아이비케이행복나눔재단",
            Donate_target : "아동",
            Donate_area : "사회복지",
            Donate_address : "전라북도 고창군 동리로 126-9",
            Donate_url : "http://ibkfoundation.or.kr/main.do",
            Donate_year : "2004",
        },
        {
            Donate_title : "사단법인 아시아사랑나눔",
            Donate_target : "아동,청소년,다문화(외국인)",
            Donate_area : "학자금, 장학금지원",
            Donate_address : "서울특별시 영등포구 가마산로 562 모든벤처타운빌딩 4층 402호",
            Donate_url : "http://www.acckorea.or.kr/",
            Donate_year : "2007",
        },
        {
            Donate_title : "사회복지법인 씨제이나눔재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 중구 필동로 26 CJ인재원",
            Donate_url : "https://www.donorscamp.org/index.do",
            Donate_year : "2005",
        },
        {
            Donate_title : "사회복지법인 세정나눔재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠,학자금, 장학금지원,사회복지,지역개발, 주거/자원봉사",
            Donate_address : "부산광역시 금정구 무학송로 158",
            Donate_url : "http://www.sejung.co.kr/main.do",
            Donate_year : "2011",
        },
        {
            Donate_title : "사단법인 사랑의연탄나눔운동",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성",
            Donate_area : "사회복지,지역개발, 주거/자원봉사,국제개발, 해외원조",
            Donate_address : "대구광역시 서구 달서로 26길 41",
            Donate_url : "https://www.dglovecoal.org/",
            Donate_year : "2016",
        },
        {
            Donate_title : "재단법인 비앤케이금융그룹희망나눔재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,기타(일반대중)",
            Donate_area : "예술, 문화, 스포츠",
            Donate_address : "부산광역시 남구 문현금융로 30 부산은행본점",
            Donate_url : "http://www.bnknanum.com/",
            Donate_year : "2007",
        },
        {
            Donate_title : "재단법인 강서희망나눔복지재단",
            Donate_target : "아동,청소년,노인,장애인,다문화(외국인),가족, 여성,북한,기타(일반대중)",
            Donate_area : "사회복지",
            Donate_address : "서울특별시 강서구 강서로5길 50 곰달래문화복지센터 204호",
            Donate_url : "https://www.gangseo-nanum.or.kr/",
            Donate_year : "2012",
        },
        
    ];

    // 인풋 박스 안 입력 정보를 toUppercase로 대문자로 변형하여 setUserInput에 저장
    const [userInput, setUserInput] = useState('');
    const getValue = (e) => {
        setUserInput(e.target.value.toUpperCase())
    };
    
    // DonateArray 안 필터링
    const filtered = DonateArray.filter((item) => {
        return item.Donate_title.toUpperCase().includes(userInput.toUpperCase()) || item.Donate_target.toUpperCase().includes(userInput.toUpperCase()) || item.Donate_area.toUpperCase().includes(userInput.toUpperCase())
    });  

    return(
        <div className="Donation_All">
        <div>
            <Profile />
        </div>
        <div className="Donation_All_Div">
            <br/>
        <input onChange={getValue} placeholder="search" className='Donation_searchbar'/> <br/>
                {filtered && filtered.map((dn, i)=>{
                    return(
                        <div className='Donation_Card' key={i}>
                            <div>
                            <div className="Donate_title">{dn.Donate_title}</div>    
                            <div className="Donate_target_area"><a className="Donate_a">사업대상 : </a>{dn.Donate_target} <br/> <a className="Donate_a">사업영역 : </a>{dn.Donate_area}</div>      
                            <div className="Donate_address_year"><a className="Donate_a">주소 : </a>{dn.Donate_address} <br/> <a className="Donate_a">설립연도 : </a>{dn.Donate_year}</div>    
                            <div className="Donate_url">
                                <button className="Donate_url_button">
                                    <a href={dn.Donate_url} className="Donate_url_Link"> 
                                    홈페이지 보기
                                    </a>
                                </button>
                                <Modal_DONATE Donate_title={dn.Donate_title} />
                            </div>    
                            </div>
                            
                        </div>           
                    )
                })}
            </div>
        </div>
    );
};

export default Donate;