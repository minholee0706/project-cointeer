import React, { useState, useEffect, useRef } from "react";
import Profile from "./4_Profile";
import {ReactComponent as MintImg} from './IMG/star_img.svg';
import './CSS/Minting.css';
import Abi from "../Abi";
import Web3 from "web3";
import Modal_Minting from "./12_Modal_Minting";

const Minting =()=>{
    const [web3, setWeb3] = useState(''); // web 저장
    const [textInput, setTextInput] = useState(''); // nft 이미지 텍스트
    const [textInColor, setTextInColor] = useState(''); // nft 이미지 텍스트 색상
    const [colorInput, setColorInput] = useState(''); // nft 이미지 도형 선 색상
    const [outcolorInput, setOutColorInput] = useState(''); // nft 이미지 도형 선 테두리 색상
    const [backcolorInput, setBackColorInput] = useState(''); // nft 이미지 배경 색상
    const [mykakaoUserId, setUserId] = useState(''); // 카카오 userid 저장 
    const [contractFilter, setContractFilter] = useState([]); // 입력값 필터링데이터 저장
    
    // 카카오톡API 에서  UserId를 가져와 setUserId에 저장
    // List up 렌더링 시 true 비교에 사용
    const getProfile = async () => {
        try {
          // Kakao SDK API를 이용해 사용자 정보 획득
          let data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          // 사용자 정보 변수에 저장
          setUserId(String(data.id));
        } catch (err) {
          console.log(err);
        }
      };

      // 컴포넌트 렌더링 시 작업 실행.
      // 맨 마지막줄 getProfile(); 로 카카오톡 userid를 가져옴
        useEffect(()=>{
            if(typeof window.ethereum != "undefined"){
              try{
                const web = new Web3(window.ethereum);
                setWeb3(web);
              }catch(err){
                console.log(err);
              }
            }
            getProfile();
          },[]);

    // 내가 만든 nft 이미지 파일 저장
    const download = () => {
        const $svg = document.querySelector("svg");
      
        // svg의 텍스트 데이터 추출
        const data = new XMLSerializer().serializeToString($svg);
      
        // 다운로드를 위한 blob 객체 생성
        const blob = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
      
        // 그려줄 캔버스 생성
        const $canvas = document.createElement("canvas"); 
        const {width, height} = $svg.getBoundingClientRect();
         
        // width, height 지정
        $canvas.width = width; 
        $canvas.height = height;
        
        const ctx = $canvas.getContext('2d');
        const img = new Image();
         
        img.onload = (e) => {
          // svg 그려주기
          ctx.drawImage(e.target, 0, 0);
        
          // 다운로드
          const $link = document.createElement("a");
      
          $link.download = "Mint_Img.png";
          $link.href = $canvas.toDataURL("image/png");
      
          $link.click();
        };
        
        // blob 파일을 이미지 URL로
        img.src = URL.createObjectURL(blob);
    
      }
    
    

     // input 입력 값 저장
     const [donateSearchInput, setDonateSearchInput] = useState('');
     const DonateInputValue = (e) => {
        setDonateSearchInput(e.target.value.toUpperCase())
     };

    // 기부내역 가져오기
    const GetMyDonateInfo = async()=>{
        const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const addInfo = await new web3.eth.Contract(Abi,ContractAddress);

        let infos = await addInfo.methods.getMyInfo().call();
        console.log(infos);
        const Contractfiltered = infos.filter((con) => {
            return con.kakaoUserId.toUpperCase().includes(donateSearchInput.toUpperCase())
          });
          
          setContractFilter(Contractfiltered);
          {Contractfiltered && Contractfiltered.map((conInfo)=>{
            <div Contractfiltered={Contractfiltered} >
            <b> {conInfo.kakaoUserId} <br/> 
                {conInfo.username} <br/>
                {conInfo.userText}  
                </b>
            </div> 
            })}
    }

    
    const [MintImgselect, setMintImgSelect] = useState(true);// mint 이미지 변경
    // 별이미지
    const Mint_startImg =()=>{
      return(
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" stroke={outcolorInput} viewBox="-10 -15 70 70" fill={colorInput} style={{background : `${backcolorInput}`}} >
        <path d="m35.4 31.6 8.65-7.45 6.35.55-9.9 8.45 3.05 13-5.6-3.5Zm-5.45-16.8-2.7-6.35 2.4-5.5 5.25 12.3Zm-16.2 22.1L21 32.55l7.3 4.4-2-8.2 6.4-5.55-8.4-.7-3.3-7.75-3.25 7.7-8.4.7 6.4 5.5ZM6.9 46.4l3.75-16-12.5-10.85 16.5-1.4L21 2.95l6.4 15.2 16.45 1.4-12.5 10.85 3.8 16L21 37.85ZM21 26.8Z"/>
        <text x={-5} y={-1} fill={textInColor} strokeWidth="0" style={{fontSize : "0.5em", fontWeight : "900"}} >{textInput}</text>
        </svg>
      );
    };
    // 하트 이미지
    const Mint_HeartImg =()=>{
      return(
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" stroke={outcolorInput} stroke-width="10" fill={colorInput}viewBox="0 -200 1000 1300" style={{background : `${backcolorInput}`}}>
          <path d="M662 578q-51-45-96.558-87.438-45.557-42.439-79.847-82.733-34.289-40.294-54.442-79.021Q411 290.081 411 252.844q0-58.602 40.22-98.723Q491.439 114 550.341 114q28.659 0 57.791 14.54Q637.263 143.08 662 167q24.737-23.92 53.868-38.46Q745 114 773.659 114q58.902 0 99.122 40.121Q913 194.242 913 252.993q0 37.327-20.065 75.721-20.066 38.394-54.5 78.84Q804 448 758.09 490.805 712.18 533.61 662 578Zm0-114q64-58 116-114.861 52-56.86 52-96.588 0-23.974-15.683-40.263Q798.634 196 773.758 196 758 196 742.5 204T711 232l-49 61-50-61q-15-19.5-31-27.75T549.756 196q-25.044 0-40.4 16.3Q494 228.6 494 252.835 494 291 546 348.5 598 406 662 464Zm-103 564-299-86v53H10V555h336l259 98q33 12 56 40t23 78h91q50.917 0 85.958 26.5Q896 824 896 882v44l-337 102ZM93 912h82V638H93v274Zm462 30 256-78q-7-19-15.729-26-8.728-7-20.418-7H567q-27 0-55-4t-47-10l-82-26 22-58 69 23q29 9 51.147 12T597 771q0-12-4.5-23.5T577 731l-245-93h-72v217l295 87ZM175 775Zm422-4Zm-422 4Zm85 0Zm402-445Z"/>
          <text x={1} y={40} fill={textInColor} strokeWidth="0" style={{fontSize : "10em", fontWeight : "900"}} >{textInput}</text>
          </svg>
      );
    };

    return(
        <div className="Minting_AllDiv">
        <Profile />
            <div className="Minting_Mint">
                {/* fill : 선 색상, stroke : 라인 색상 */}
                <br/>
                    <div className="Minting_Img_div">
                      <div>
                      <button className="Minting_Img_Button" onClick={()=>setMintImgSelect(true)}>STAR</button>
                      <button className="Minting_Img_Button" onClick={()=>setMintImgSelect(false)}>HEART</button>
                      </div>
                        {MintImgselect ? <Mint_startImg className="Minting_Img" /> : <Mint_HeartImg className="Minting_Img"/> }
                    
                        <br />
                        <a className="Minting_Img_Text">ex) red , rgb(255,255,255,255), #000000</a>
                        <input className="Minting_Img_Input" onChange={e=>setTextInput(e.target.value)} placeholder="텍스트" />
                        <input className="Minting_Img_Input" onChange={e=>setTextInColor(e.target.value)} placeholder="텍스트 색상" /> <br/>
                        {/* <input onChange={e=>setTextOutColor(e.target.value)} placeholder="텍스트 테두리 색상" /> <br/> */}
                        <input className="Minting_Img_Input" onChange={e=>setColorInput(e.target.value)} placeholder="선 색상" /> 
                        <input className="Minting_Img_Input" onChange={e=>setOutColorInput(e.target.value)} placeholder="선 테두리 색상" /><br/>
                        <input className="Minting_Img_Input" onChange={e=>setBackColorInput(e.target.value)} placeholder="배경 색상"/> <br/>
                        <button className="Minting_Download_Btn"onClick={()=>download()}>DownLoad Image</button>
                </div>
                <br/>
                <input onChange={DonateInputValue} placeholder="search" className='Minting_searchbar'/> <br/>
                <button onClick={GetMyDonateInfo} className = "Minting_List_Btn">List Up</button> <br/>
                <div>
                {donateSearchInput == mykakaoUserId ?
                          contractFilter && contractFilter.map((conInfo, i)=>{
                          return(

                            <div key={i} className='Minting_Card' >
                
                            <div className="DonateList_title">{conInfo.Donate_title}</div>
                            <div className="DonateList_DonateName">기부자 성함 : {conInfo.username} </div>
                            <div className="DonateList_DonateText"> 한마디 : {conInfo.userText} </div>
                                <Modal_Minting donateId={conInfo.id}/>
                            </div>
                          
                          )}) : null}
                </div>
            </div>
        </div>
    );
};

export default Minting;