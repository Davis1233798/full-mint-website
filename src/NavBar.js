import React from 'react';
import { Box,Button,Flex,Link,Spacer} from '@chakra-ui/react';

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
        <Flex justify="space-between" align="center" padding="20px ">
            {/*Leftside*/}
            {/* <div>Facebook</div> */}
            {/* <Flex justify="space-around" width="40%" padding="0 35px"> */}
            <Link  width="20%" href="https://www.linkedin.com/in/jack-chen-2b3383229/">
               <img 
                    height="40%"
                    width="20%"                    
                    src="https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png"
                    alt="LinkedIn"                                        
                />
            </Link>
            {/* </Flex> */}
            <Link  filter="invert(100%)" width="20%" href="https://github.com/Davis1233798/">
               <img 
                    height="40%"
                    width="20%"                    
                    src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d7e4e1e509c728d.png"
                    alt="GitHub"                                        
                />
            </Link>
            <Link  width="20%" href="mailto:joijoijoi2001@jack6203.onmicrosoft.com">
               <img 
                    height="40%"
                    width="20%"                    
                    src="https://cdn-icons-png.flaticon.com/512/732/732068.png"
                    boxShadow="0.3em 0.3em 0.3em black"
                    alt="new"                                        
                />
            </Link>
            {/*Rightside*/}
            <Flex justify="space-around" align="center" width="40%" padding="30px">
            <Box margin="0 15px">About</Box>
            <Spacer />
            <Box margin="0 15px">Mint</Box>
            <Spacer />
            <Box margin="0 15px">Token</Box>
            <Spacer />
            </Flex>
            {/* <div>About</div>
            <div>Mint</div>            
            <div>Team</div>            
            <div>Token</div>             */}
            {/*isConnected*/}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <Button 
                backgroundColor="#D6517D"
                borderRadius="15px"
                boxShadow="0px 3px 3px 1.5px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Wallet Connect</Button>
            )} 
        </Flex>
    );
};

export default NavBar;