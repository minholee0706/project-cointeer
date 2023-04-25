import React, { useEffect, useState } from "react";
import Profile from "./4_Profile";
import Abi from "../Abi";
import Web3 from "web3";
import './CSS/DonateList.css'


const DonateList =()=>{
    
    const [info, setInfo] = useState([]); // getMyInfo 저장
    const [web3, setWeb3] = useState(''); // web 저장
    const [balance,setBalance] = useState(); // getBalance 저장 , total donation

    useEffect(()=>{
      if(typeof window.ethereum != "undefined"){
        try{
          const web = new Web3(window.ethereum);
          setWeb3(web);
        }catch(err){
          console.log(err);
        }
      }
    },[]);

    // 기부내역 가져오기
    const GetInfo = async()=>{
      const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
      const addInfo = await new web3.eth.Contract(Abi,ContractAddress);
      let infos = await addInfo.methods.getMyInfo().call();
      setInfo(infos);
    }

    // 코인 잔고 확인 , total donation
    const getBalance = async()=>{
      let balance = await web3.eth.getBalance(process.env.REACT_APP_TOTAL_COIN_CONTRACT_ADDRESS);
      balance = web3.utils.fromWei(balance,'ether');
      setBalance(balance);
    }; 



    return(
        <div className="DonateList_All">
            <div className="DonateList_Profile">
                <Profile /> <br/>
            </div>
            <div className="DonateList_getBalance">  
                <button onClick={getBalance} className='DonateList_Total_Coin'> Total Donation</button>
                <div className = "DonateList_Balance"><h3>{balance} ETH</h3></div>
                <button onClick={GetInfo} className = "DonateList_ListButton">리스트</button>
            </div>
            
            <div className='DonateList_Donate_UsersList'>
            {
              info.map((info1,i)=>(
                <div key ={i} className='DonateList_Card' >
                
                <div className="DonateList_title">{info1.Donate_title}</div>
                <div className="DonateList_DonateName">기부자 성함 : {info1.username} </div>
                <div className="DonateList_DonateText"> 한마디 : {info1.userText} </div>
                
                </div>
                
              ))
            }
          </div>
        </div>
    );
}

export default DonateList;