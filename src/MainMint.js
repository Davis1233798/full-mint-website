import { useState } from 'react';
import { ethers , BigNumber } from 'ethers';
import WatsonMetaNFT from './WatsonMetaNFT.json';

const WatsonMetaNFTAddress = "0x1B56c4C7E421973b2c3b4bFDBE492d6c8E09B1F4";


const MainMint = ({accounts,setAccounts})=>{
        const [mintAmount , setMintAmounts] = useState(1);
        const isConnected = Boolean(accounts[0]);

        async function handleMint(){
            if(window.etheruem){
                const provider  = new ethers.providers.Web3Provider(window.etheruem);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                        WatsonMetaNFTAddress,
                        WatsonMetaNFT.abi,
                        signer
                );
                try{
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response : '+response);
                }catch(err){
                    console.log("Error:"+err);
                }
            }
        }

        const handleDecrement = ()=>{
            if(mintAmount <= 1 )return;
            setMintAmounts(mintAmount -1 );
        };

        const handleIncrement = ()=>{
            if(mintAmount >= 3 )return;
            setMintAmounts(mintAmount +1 );
        };

        return(
        <div> 
        <h1>WatsonMetaNFT</h1>
        {isConnected ? (
            <div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={mintAmount} />
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        ) : (
        <p>You Must Connected To Mint</p>        
        )}        
        </div>
        );
};

export default MainMint;



