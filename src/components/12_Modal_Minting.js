import React, { useEffect, useState } from "react";
import './CSS/Modal_Minting.css';
import Abi from "../Abi";
import Abi2 from '../Abi2';
import Web3 from "web3";
import Modal from 'react-modal';
import {create as ipfsHttpClient} from "ipfs-http-client";


const Modal_Minting =({donateId})=>{

    const [web3, setWeb3] = useState(''); // web 저장
    const [modal, setModal] = useState(false); // 모달 스위치
    const [image,setImage] = useState(""); // ipfs 경로 저장
    const [account, setAccount] = useState(''); // 계좌 저장
    const [str , setStr] = useState(); 
    const [pressStart, setPressStart] = useState(false);
    const [errorMessage,setErrorMessage] = useState("추가적인 수수료가 듭니다.");

    // ipfs 인증
    const projectId = process.env.REACT_APP_IPFS_PROJECT_ID;
    const projectSecret = process.env.REACT_APP_IPFS_PROJECT_SECRET;
    const authorization = "Basic " + btoa(projectId + ":" + projectSecret);
    
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

           // 메타마스크로부터 계정을 연결 && 계정 주소를 상태로 저장
            const connectWallet = async () =>{ 
              const accounts = await window.ethereum.request({ // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
                method: "eth_requestAccounts",
              })
              setAccount(accounts[0]);
            }
              const ipfs = ipfsHttpClient({
              url: "https://ipfs.infura.io:5001/api/v0",
              headers:{
                  authorization
                  }
            })

        //이미지 ipfs에 올리기
        const onSubmitHandler = async(event)=>{
            event.preventDefault();
            const form = event.target;
            const files = (form[0]).files;
      
            if(!files || files.length === 0){
              return alert("No files selected");
            }
            const file = files[0];
    
            //upload files
            const result = await ipfs.add(file);
            setImage("https://hongsi.infura-ipfs.io/ipfs/"+result.path);
            form.reset();
        };

        // 민팅 후 기부내역에서 삭제
          const DeleteDonate = async(e) =>{
            const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
            const Contract = await new web3.eth.Contract(Abi,ContractAddress);
            //donate 삭제함수 
            await Contract.methods.deleteSay(parseInt(donateId),true).send({from: account}).on()
          }

          // 민팅 함수
          const minting = async(e) =>{
          e.preventDefault();
          const ContractAddress = process.env.REACT_APP_MINTTING_CONTRACT_ADDRESS;
          const Contract = await new web3.eth.Contract(Abi2,ContractAddress);

          //민팅함수 만들기
          await Contract.methods.safeMint(account,image).send({from: account}).on(
              "receipt",(receipt)=>{
                  setStr("민팅 성공했습니다.");    
              }
          )
          DeleteDonate();
        }
        
    return(
        <div id="modal">
        <button onClick={()=> {setModal(true)}} className='Donate_Card_button' modal={modal}> Minting! </button>
        { modal && 
        <Modal isOpen={true} className='Donate_modal' ariaHideApp={false} > 
        {ipfs && (
          <div className="Minting_Img_Upload_div">
                    <div className="Minting_Img_Upload">
                    <form onSubmit={onSubmitHandler} >
                            <input className="Minting_Upload_Btn1" type = "file" name = "file" onClick={()=>{
                              connectWallet();
                              setPressStart(true);
                              }} />                       
                            <button className="Minting_Upload_Btn2"type = "submit" >Ipfs Upload file</button>
                            <img  src={image} style={{maxWidth:"400px", margin: "10px"}} />
                         </form>
                         <button onClick={()=> setModal(false)} className="modal_close_Button" >X</button>
                    </div>
                    <br/>
                    <button className="Minting_Upload_Btn2" onClick={minting}> Minting! </button>
                    {/* <button className="Minting_Upload_Btn2" onClick={console.log(parseInt(donateId))}> Minting! </button> */}
                    
                  
                    <span>{errorMessage}</span>
                    <span>  {str}</span>
                </div>
                )}
        </Modal>
         }
        </div>
    );
};

export default Modal_Minting;