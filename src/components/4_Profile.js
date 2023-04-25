import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './CSS/Profile.css';


const Profile =()=> {
    // 카카오에서 받아온 userID 저장, 이후 기부내역 조회로 사용
    const [user_id, setUserId] = useState('');
    // 카카오에서 받아온 내 이름 저장
    const [nickName, setNickName] = useState('');
    // 카카오에서 받아온 프로필 사진 저장
    const [profileImage, setProfileImage] = useState('');
    
     // 내 REST API KEY 값. 요약 정보에서 확인 가능.

     //테스트
        // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_TEST;
        // const REDIRECT_URI = "http://localhost:3000";

    //네트리파이
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_NET;
    const REDIRECT_URI = "https://coin-teer.netlify.app";
    
    // 로그아웃 
    const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`;

    // 카카오에서 프로필 가져오기 함수
    const getProfile = async()=>{
        try{
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url : "/v2/user/me",
            });
            // 사용자 정보 변수에 저장
            setUserId(data.id);
            setNickName(data.properties.nickname);
            setProfileImage(data.properties.profile_image);
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        getProfile();
    },[]);
    
    return(
        <div className="Profile_All">
            <div className="Profile_Home"><Link to='/' className="Link_Home">CoinTeer</Link></div>
            <div className="Progile_Gragh_Alert"><Link to='/Check_Coin' className="Link_Check_Coin">Gragh & Alert</Link></div>
            <div className="Profile_Donate"><Link to='/Donation' className='Link_Donate'> Donate</Link></div>
            <div className="Profile_DonateList"><Link to='/DonateList' className='Link_DonateList'> DonateList</Link></div>
            <div className="Profile_DonateList"><Link to='/Minting' className='Link_DonateList'> Minting</Link></div>
            <div className="Profile_DonateList"><Link to='/NFTList' className='Link_DonateList'> NFTList</Link></div>
            <div className="Profile_UserInfo">
            <img src={profileImage} className="Profile_UserImage"></img> 
            <div className="Profile_UserName">
            <a className="Profile_UserNickName">{nickName} </a>님 <br/>
            <a>UserId : {user_id}</a>
            </div>
           
            <Link to={KAKAO_LOGOUT_URL} className="Profile_logout">LogOut</Link>
         
            </div>
        </div>
    );
};

export default Profile;