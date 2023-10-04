import React from "react";
import {AppBar,Box,Toolbar, Typography, styled} from '@mui/material';
import Search from "./search";
import CustomButtons from "./custombuttons";
import { Link } from "react-router-dom";
const StyleHeader = styled(AppBar)`
background: #141414;
height: 55px;
`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () =>{
    
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
    <StyleHeader>
    
    <Toolbar style={{ minHeight: 55 }}>
            <Component to='/'>
                <Typography alt="logo" style={{width:75}}>
                Delivery
                </Typography>
                <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
    </Toolbar>
    </StyleHeader>
    )
    
}
export default Header;