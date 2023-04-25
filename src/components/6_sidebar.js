import './CSS/sidebar.css';
import React from 'react';


const Sidebar =()=>{
    //테스트
    // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_TEST;
    // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    //네트리파이
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_NET;
    const REDIRECT_URI = "https://coin-teer.netlify.app/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    return(
        <div className="menu">
            <label ><div className='Sidebar_Logo'>CoinTeer</div></label>
            {/* <input type="checkbox" id="expand-menu" name="expand-menu" /> */}
                <ul>
                    <li><a href="#Body_Service" className="item"><div>About</div></a></li>
                    <li><a href="#Body_Project_All" className="item"><div>Contents</div></a></li>
                    <li><a href={KAKAO_AUTH_URL} className="item"><div>Kakao Login</div></a></li>
                   
                </ul>
        </div>
    );
}

export default Sidebar;