
import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: linear-gradient(
      to bottom,
      #DDAF94,
      #E8CEBF,
      #FDF8F5
    ); 
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '15%'
});

const Footer = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} alt='empty' />
                <Typography>Your page is empty!</Typography>
                <Typography component="span">You are able to see orders releated to delivery ,once you login.</Typography>
            </Container>
        </Component>
    )
}

export default Footer;


