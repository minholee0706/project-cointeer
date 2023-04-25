import './CSS/Body.css';
import React from 'react';
import Sidebar from './6_sidebar';
import Footer from './Footer'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import Button from "@mui/material/Button";


const Body=()=>{
    return (
    <div className='Body_All' id="Body_All">
        
        <div className='Body_Home'>
            <Sidebar />
            <div className='Body_Text_div'>
                <div className='Body_Text'>
                    <a className='Body_Text_Name'>CoinTeer</a> <br/>
                    <a className='Body_Text_word'>Donate your coins to those in need!</a>
                </div>
            </div>
        </div>
        <div>
            <div className='Body_Service' id="Body_Service">
                <div className='Body_Service_Text'>
                    <div className='Body_Service_Text_Line1'>COINTEER is a site where you can donate with coins!</div> 
                    <div className='Body_Service_Text_Line2'>You can check your property, donate, and check the current exchange rate! </div>
                    <div><a href="#Body_Project_All" style={{textDecoration:"none"}}><Button variant="outlined">Go Contents</Button></a></div>
                </div>

                <div className='Body_Service_List'>
                    <div className='Body_Service_List_Text1'>SERVICE! </div>
                    <div className='Body_Service_List_Text2'>What we Offer.</div>

                    <div className='Body_Service_List1'>
                        <div className='Body_Service_List2'><CurrencyBitcoinOutlinedIcon  style={{fontSize :"5em", color : "rgb(8, 129, 160)"}}/></div> <br/>
                        <div className='Body_Service_List3'>DONATION</div>
                        <div className='Body_Service_List4'> Try Your Coin Donation.</div>
                    </div>

                    <div className='Body_Service_List1'>
                        <div className='Body_Service_List2'><CampaignOutlinedIcon style={{fontSize :"5em", color : "rgb(8, 129, 160)" }}/> </div> <br/>
                        <div className='Body_Service_List3'>ALERT</div>
                        <div className='Body_Service_List4'>Alarm at the set price.</div>
                    </div>

                    <div className='Body_Service_List1'>
                        <div className='Body_Service_List2'><BarChartOutlinedIcon style={{fontSize :"5em", color : "rgb(8, 129, 160)" }} /></div> <br/>
                        <div className='Body_Service_List3'>CHECK</div>
                        <div className='Body_Service_List4'>Check coins in real time.</div>
                    </div>

                    <div className='Body_Service_List1'>
                        <div className='Body_Service_List2'><ImagesearchRollerOutlinedIcon style={{fontSize :"5em", color : "rgb(8, 129, 160)" }}/></div> <br/>
                        <div className='Body_Service_List3'>NFT</div>
                        <div className='Body_Service_List4'>Create and issue NFTs.</div>
                    </div>
                </div>
            </div>
            <div className='Body_Service_plus'></div>
            </div>
            
            <div className='Body_Project_All' id="Body_Project_All"> <br/> <br/> 
                <div className='Body_Project_Box1' > Contents!</div> <br/>
                <div className='Body_Project_Box2'>
                    <div className='Body_Project_Inbox1'>
                        <div className='Box_inText1'>Graph</div> <br/> 
                        <div className='Box_inText2'>Check real-time fluctuations!</div>
                    </div>
                    <div className='Body_Project_Inbox2'>
                        <div className='Box_inText1'>Donate</div> <br/> 
                        <div className='Box_inText2'>Donate your Coins!</div>
                    </div>
                    <div className='Body_Project_Inbox3'>
                        <div className='Box_inText1'>NFT</div> <br/> 
                        <div className='Box_inText2'>Have your own NFT!</div>
                    </div>
                    <div className='Body_Project_Inbox4'>
                        <div className='Box_inText1'>ALERT</div> <br/> 
                        <div className='Box_inText2'>Keep your Coins!</div>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
    );
};

export default Body;