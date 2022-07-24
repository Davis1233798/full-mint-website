import React from 'react';
import { Box,Button,Flex,Image,Link,Spacer} from '@chakra-ui/react';

// eslint-disable-next-line no-unused-vars
const NavBar = ( { accounts , setAccounts } )=>{
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum){
            const accounts  = await window.ethereum.request(
                {method: "eth_requestAccounts",}
            )
            setAccounts(accounts);
        }
    }

    return(
        <Flex justify="space-between" align="center" padding="2% 3% ">
            {/*Leftside*/}
            {/* <div>Facebook</div> */}
            <Flex justify="space-around" align="-moz-initial" padding="1% 2%">
            <Link>
            <image src="https://icon-library.com/images/pixel-facebook-icon/pixel-facebook-icon-8.jpg" />
            </Link>
            </Flex>
            <div>Twitter</div>
            <div>Email</div>
            {/*Rightside*/}
            <div>About</div>
            <div>Mint</div>            
            <div>Team</div>            
            <div>Token</div>            
            {/*isConnected*/}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )} 
        </Flex>
    );
};

export default NavBar;