import React from "react";
import { useEffect } from 'react';
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom"

const Auth =()=>{
      // 본인의 REST API KEY 값. 요약 정보에서 확인 가능하다.
      // 테스트
        // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_TEST; // .env
        // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
      // 본인의 CLIENT SECRET 값
        // const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET_TEST; // .env

      // 네트리파이
      const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_NET;
      const REDIRECT_URI = "https://coin-teer.netlify.app/oauth/kakao/callback";
      const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET_NET;

      // callback으로 받은 인가코드
      const code = new URL(window.location.href).searchParams.get("code");
      const navigate = useNavigate();
      const getToken = async () => {
          const payload = qs.stringify({
              grant_type : "authorization_code",
              client_id : REST_API_KEY,
              redirect_uri : REDIRECT_URI,
              code : code,
              client_secret : CLIENT_SECRET,
          });
  
          try {
              //access token 가져오기
              const res = await axios.post(
                  "https://kauth.kakao.com/oauth/token",
                  payload
              );
  
              // kakao javascript SDK 초기화
              window.Kakao.init(REST_API_KEY);
              // access token 설정
              window.Kakao.Auth.setAccessToken(res.data.access_token);
              navigate("/Check_Coin");
  
          }catch (err) {
              console.log(err);
          }
      };
  
      useEffect(()=>{
          getToken();
      },[]);
      return null;
  };
  
  export default Auth;

// 코드 내용 Redirect 주소로 전달받은 code값을 추출하여 보여주는 코드이다.
