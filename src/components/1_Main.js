import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Body from './2_Body';
import Auth from "./3_Auth";
import Check_Coin from "./5_Check_Coin";
import Donate from "./8_Donate";
import DonateList from "./10_DonateList";
import Minting from "./11_Minting";
import NFTList from "./13_NFTList";



function Main() {
     // 내 REST API KEY 값. 요약 정보에서 확인 가능.
     // 테스트
        // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_TEST; // .env
        // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
        // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        
    // 네트리파이
        const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_NET; // .env
        const REDIRECT_URI = "https://coin-teer.netlify.app/oauth/kakao/callback";
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div>
            <Router >
                <Routes>
                    
                    <Route exact path="/" element={<Body />} />
                    <Route path="/oauth/kakao/callback" element={<Auth />} />
                    <Route path="/Check_Coin" element={<Check_Coin />} />
                    <Route path="/Donation" element={<Donate />} />
                    <Route path="/DonateList" element={<DonateList />} />
                    <Route path="/Minting" element={<Minting />} />
                    <Route path="/NFTList" element={<NFTList />} />
                </Routes>
            </Router>
        </div>
        );
  };
  
  export default Main;
  