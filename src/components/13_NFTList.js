import React, { useEffect, useState } from "react";
import './CSS/NFTList.css';
import Web3 from 'web3';
import Abi from '../Abi';
import Abi2 from '../Abi2';
import Profile from "./4_Profile";


const NFTList =()=>{
    const [web3, setWeb3] = useState(); // web 저장
    const [cards, setCards] = useState([]); // card 저장
    const [ethers, setEthers] = useState(false);
    const [info, setInfo] = useState([]);

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

      // getMyInfo 가져오기
      const GetInfo = async()=>{
        const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const addInfo = await new web3.eth.Contract(Abi,ContractAddress);
        let infos = await addInfo.methods.getMyInfo().call();
  
        setInfo(infos);
      }

      // nftlist 가져오기
     const NftList = async() =>{
        const ContractAddress = process.env.REACT_APP_MINTTING_CONTRACT_ADDRESS;
        const tokenContract = await new web3.eth.Contract(Abi2,ContractAddress);
        console.log(tokenContract);

        // const tokenId = await tokenContract.methods.ownerOf().call();
        const name = await tokenContract.methods.name().call();
        const symbol = await tokenContract.methods.symbol().call();
        const totalSupply = await tokenContract.methods.totalSupply().call();
        console.log(totalSupply);
        let arr = [];

        for(let i=0; i<totalSupply; i++){
            arr.push(i);
        }
        for(let tokenId of arr){

            const tokenURI= await tokenContract.methods.tokenURI(tokenId).call();

            setCards((prev)=>{
                return [...prev,{name,symbol , tokenId, tokenURI}];
            })
        }
        setEthers(true);    
    } 
    
    return(
        <div className="NFTList_DIV_All">
            <Profile />
            <div className="NFTList_Body">
            
                <h1>기부NFT 리스트(NFT List)</h1>
                {ethers ? <h1>"기부해주셔서 감사합니다"</h1> : <button onClick={NftList} className='NFTList_Button'>전체 보기</button>}
                    <div className='NFTList_Card_div'>                
                        {
                            cards.map((card,i)=>(
                                <div key={i}>
                                    <img className='NFTList_Card' src={card.tokenURI} onClick={GetInfo}/> 
                                </div>
                            ))
                        }
                
                    </div>
            </div> 
        </div>
    );
};

export default NFTList;