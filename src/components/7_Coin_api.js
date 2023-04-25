import React, { useEffect, useState } from "react";
import './CSS/Coin_api.css';

const Coin_Api =()=>{
    // 코인 api 데이터 저장
    const [coindata, setCoinData] = useState();
    
    // 리스트 펼치기, map
    const [onList, setOnList] = useState(false);
    

    const getApi =()=>{
        const options = {method: 'GET', headers: {accept: 'application/json'}};
            fetch('https://api.bithumb.com/public/ticker/ALL_KRW', options)
            .then(response => response.json())
            .then((data) => {
                setCoinData(data.data);
            })
            .catch(err => console.error(err));   
    }
    
    // getApi 1초마다 실행
    useEffect(()=>{
        getApi();
        setInterval(() => {
            getApi();
        }, 1001);
        
    },[]);
 
    // 상한 설정 가격 저장
    const [upInput , setUpInput] = useState('');
    //하한 설정 가격 저장
    const [lowInput , setLowInput] = useState('');
    // 알람 내부 setInterval 함수 변수 저장
    const [runAlert , setRunAlert] = useState();
  
    return(
        
        <div className="Coin_api">
            
            <br/> 
                <div className="Coin_Button_div">
                    <button onClick={()=>setOnList(true)} className="Coin_Button"> List </button> 
                </div>
            <br/> <br/> 
          
            <div className="Coin_div_bar">
                <div className="Coin_list_type">가산자산명</div>
                <div  className="Coin_list_type">현재가</div>
                <div  className="Coin_list_type">변동가</div>
                <div  className="Coin_list_type">변동률</div>
                <div  className="Coin_list_type">총 거래금액</div>
                <div  className="Coin_list_type">거래량</div>
                <div  className="Coin_list_type"> 알람</div>
            </div>
            
             {onList ? Object.entries(coindata).map(([key,value], i) =>{
                return(
                    <div className="Coin_div" key={i}>
                            <div  className="Coin_list">{key}</div> 
                            <div  className="Coin_list" >{value.closing_price} won</div> 
                            <div  className="Coin_list"><a style={ `${value.fluctate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_24H}  {`${value.fluctate_24H}`< 0 ?   'won ▼' : 'won ▲' }</a></div>
                            <div  className="Coin_list"><a style={ `${value.fluctate_rate_24H}` < 0 ? { color:'blue'} : {color : 'red'} } >{value.fluctate_rate_24H}  {`${value.fluctate_rate_24H}`< 0 ?   '% ▼' : '% ▲' }</a></div>
                            <div  className="Coin_list">{value.acc_trade_value_24H} </div>
                            <div  className="Coin_list">{value.units_traded} </div>
                        <div className="Coin_Alert">
                            <div className="Coin_UserInput_div">
                                <input placeholder="상한 가격"  className="Coin_UserInput" onChange={e=>setUpInput(e.target.value)} />
                                <input placeholder="하한 가격"  className="Coin_UserInput" onChange={e=>setLowInput(e.target.value)} />
                            </div>
                            <button className="Coin_Alert_Button" value={value.closing_price} onClick={(e)=>{
                                
                                let AlertRun = setInterval(()=>{
                                    clearInterval(runAlert);
                                    let ClosingPrice = e.target.value;
                    
                                    if ( upInput == '' && lowInput ==''){
                                        clearInterval(AlertRun);
                                        alert('설정한 가격이 없어 알람이 중지 됩니다.')
                                    }else if( parseInt(ClosingPrice) >= parseInt(upInput)){
                                            alert('설정한 상한 가격입니다.');
                                            clearInterval(AlertRun);
                                    }else if( parseInt(ClosingPrice) <= parseInt(lowInput)){
                                            alert('설정한 하한 가격입니다.');
                                            clearInterval(AlertRun);
                                    }
                                    console.log('현재가격' +parseInt(ClosingPrice))
                                    console.log('상한설정가격' +parseInt(upInput))
                                    console.log('하한설정가격' + parseInt(lowInput))
                                    setRunAlert(AlertRun);
                                },1001);}} >
                                Alert On
                            </button>
                            <button className="Coin_Alert_Button" onClick={()=>clearInterval(runAlert)}>
                                Alert Off
                            </button>
                           
                            
                        </div>
                    </div>
            )})
             : null }
        
        </div>
    );
};

export default Coin_Api;