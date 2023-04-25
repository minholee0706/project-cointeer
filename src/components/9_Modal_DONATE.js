import React from 'react';
import { useState, useEffect } from 'react';
import Abi from '../Abi';
import Web3 from "web3";
import Modal from 'react-modal';
import './CSS/Modal.css';



const Modal_DONATE = ({Donate_title}) => {
    
    const [web3, setWeb3] = useState(''); // useEffect web 저장
    const [account, setAccount] = useState(''); // 이더 보내기 account 저장

    // donate user 저장
    const [username, setUserName] = useState("");
    const [userText, setUserText] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMoney, setUserMoney] = useState("");

    const [str, setStr] = useState(); // 이더 보낸 후 표시 문장

    const [ethers, setEthers] = useState(false);

    const [kakaoUserId, setUserId] = useState('');   // 카카오 프로필 userid 저장
    const [modal, setModal] = useState(false); // 모달 스위치

    // 카카오 프로필 가져오기
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
    
    //이더보내기
    const SendEth = async(e)=>{
      
            const accounts = await window.ethereum.request({
                method : "eth_requestAccounts",
            })
            setAccount(accounts[0]);
            await web3.eth.sendTransaction({
                from : account,
                to : process.env.REACT_APP_TOTAL_COIN_CONTRACT_ADDRESS,
                value : web3.utils.toWei(String(userMoney),"ether")
            }).then(function(receipt){
                
            });
            e.preventDefault(); //새로고침 안하도록
        
        //metamask
        const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const Contract = await new web3.eth.Contract(Abi, ContractAddress);
        
        Contract.methods.addInfo(kakaoUserId, Donate_title, username, userPhone, userText, false).send({from : account}).on(
            "receipt", (receipt) => {
                setStr("기부해주셔서 감사합니다. \n MyDonation에서 기부내역을 확인하세요.");
            }
        )
        setEthers(true);
    }

    

  return (
    <div id="modal">
            <button onClick={()=> {setModal(true)}} className='Donate_Card_button' modal={modal}> 기부하기 </button>
            { modal && 
            <Modal isOpen={true} className='Donate_modal' ariaHideApp={false} > 
                <div className='modal_TEXT'>Please enter correct information. <br/>UserId는 기부내역 확인 시 필요한 정보입니다. </div>
                <label className='modal_label'> UserId : </label>{kakaoUserId}  <b style={{color : "red"}}>공백 시 재접속 해주세요.</b>
                <div className='modal_info'>
                <label className='modal_label'>{Donate_title} </label><br/><br/>

                <label className='modal_label'>기부 금액</label> <br/>
                <input className="modal_UserInfo_UserMoney" name="usermoney" placeholder = "기부할 금액" onChange={e=> setUserMoney(e.target.value)} /> <br/>
                <label className='modal_label'>기부자 성함</label> <br/>
                <input className="modal_UserInfo_UserName" name="username" placeholder = "구매자 성함" onChange={e=> setUserName(e.target.value)} /> <br/>
                <label className='modal_label'>기부자 연락처</label> <br/>
                <input className="modal_UserInfo_UserPhone" name="userPhone" placeholder = "구매자 연락처" onChange={e=> setUserPhone(e.target.value)} /><br/>
                <label className='modal_label'>기부자 한마디</label> <br/>
                <input className="modal_UserInfo_UserPhone" name="userText" placeholder = "구매자 한마디" onChange={e=> setUserText(e.target.value)} /><br/>
                </div>
                <button onClick={()=> setModal(false)} className="modal_close_Button" >X</button>
                
               
                <button onClick={SendEth} className='modal_submitt_Button' > 제출하기 </button> 
                {ethers ==true ? str : null}
                

            </Modal>
             }
            </div>
            
  );
};

export default Modal_DONATE;