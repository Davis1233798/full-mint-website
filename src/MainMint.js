import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import WatsonMetaNFT from './WatsonMetaNFT.json';
import { Text, Box, Button, Flex } from '@chakra-ui/react';

const WatsonMetaNFTAddress = "0x2339Db6b7E45597e367eC257225942eE5f1f727A";


const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmounts] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.etheruem) {
            const provider = new ethers.providers.Web3Provider(window.etheruem);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                WatsonMetaNFTAddress,
                WatsonMetaNFT.abi,
                signer
            );

            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response : ', response);

        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmounts(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmounts(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px,700p,900px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px 5px #00000">WatsonMetaNFT</Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex>
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="15px"
                                boxShadow="0px 3px 3px 1.5px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margin="0 15px"
                                onClick={handleDecrement}>-
                            </Button>
                            <input type="number" value={mintAmount} />
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="15px"
                                boxShadow="0px 3px 3px 1.5px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margin="0 15px"
                                onClick={handleIncrement}>+
                            </Button>
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="15px"
                                boxShadow="0px 3px 3px 1.5px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margin="0 15px"
                                onClick={handleMint}>Mint
                            </Button>
                        </Flex>
                    </div>
                ) : (
                    <p>You Must Connected To Mint</p>
                )}
            </Box>
        </Flex>
    );
};

export default MainMint;



