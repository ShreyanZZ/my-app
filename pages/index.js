import * as React from 'react';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, colors, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MobileStepper from '@mui/material/MobileStepper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function App() {

    return(
  
      <Box 
      sx={{
        width: 1280, height:735

      }}
    > 
    <CardMedia   sx={{ width: 1280, height:735}}  image='https://png.pngtree.com/thumb_back/fh260/background/20210224/pngtree-blue-abstract-background-business-image_564246.jpg' >

    <Box
    
      >
    
     <Typography  sx={{mt:0 , ml:45 ,pt:3 ,fontSize: 50,color:'gold',fontFamily: 'fantasy'} }><WorkspacePremiumIcon fontSize='50'></WorkspacePremiumIcon> Achievements </Typography>
     </Box>
     <Box
     sx={{
        backgroundColor:'transparent',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
        },
      }}>
        <Paper elevation={0} sx={{backgroundColor:'transparent',width:700}}>
        <Box
     sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
        },
      }}>
         <Paper square='true' elevation={20} sx={{ height: 175,width:325,ml:4,mt:5 }}><Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {},}}><Paper elevation={0} square='true' sx={{height:150}}><CheckCircleIcon  sx={{fontSize:40,mt:2,ml:2}} color= "success"></CheckCircleIcon></Paper><Paper square='true' elevation={0} sx={{height:150,width:225}}><Typography sx={{mt:2,ml:1,fontFamily: 'serif',fontSize:20,fontWeight: '600'}} variant="h6">First team to build an autonomous walking humanoid made by any undergraduate team in India.</Typography> </Paper></Box></Paper>

        <Paper square='true' elevation={20} sx={{height: 175,width:300,ml:2,mt:5,mr:0 }}>
        <Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {},}}>
        <Paper square='true' elevation={0}><CheckCircleIcon sx={{fontSize:40,mt:2,ml:2}} color= "success" ></CheckCircleIcon ></Paper><Paper square='true' sx={{width:200}} elevation={0}><Typography sx={{mt:2,ml:1,fontFamily: 'serif',fontSize:22,fontWeight: '600'}} variant="h6">Winner of TIC(Techkriti innovation challenge) 2016</Typography> </Paper></Box></Paper>
        
        
        <Paper square='true'  elevation={20} sx={{height: 300,width:325,ml:4,mt:5 }}><Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {},}}><Paper square='true' elevation={0}><CheckCircleIcon  sx={{fontSize:40,mt:2,ml:2}} color= "success"></CheckCircleIcon></Paper><Paper square='true' elevation={0} sx={{width:200}}><Typography sx={{mt:2,ml:1,fontFamily: 'serif',fontSize:22,fontWeight: '600'}} variant="h6">Best summer project of SNT council 2015
</Typography> </Paper></Box></Paper>

        <Paper square='true' elevation={20} sx={{height: 300,width:300,ml:2,mt:5 }}><Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {},}}><Paper elevation={0}><CheckCircleIcon  sx={{fontSize:40,mt:2,ml:2}} color= "success"></CheckCircleIcon></Paper><Paper elevation={0} square='true' sx={{width:200,height:300}}><Typography sx={{mt:2,ml:1,fontFamily: 'serif',fontSize:22,fontWeight: '600'}} variant="h6">We have published several Technical Papers on humanoid-
        <Link href="https://drive.google.com/file/d/122A9QLY2KIyULo2l-Hij5_H2vxc4qtCY/view" underline="always">
  {'Mechanical analysis,'}
</Link>
<Link href="https://drive.google.com/file/d/1Sxskfh7mdGsjHIldxQo1CkyzhXbAd9ZL/view" underline="always">
  {'Material analysis,'}
</Link>
<Link href="https://drive.google.com/file/d/1XX5zDYLJik6A3ZQy-AVuvzIHWrEf1b5u/view" underline="always">
  {'electrical architecture'}
</Link>
</Typography> </Paper></Box></Paper>
        
        </Box>
        </Paper>
     <Paper elevation={4} sx={{height: 450,width:500,ml:0,mt:5 }}>
     <CardMedia
        sx={{ height: 450,width:525,ml:0,mt:0 }}
        image="https://humanoid-try.vercel.app/_next/static/media/Screenshot1.551467ad.png"
        title="Aiming for Excellence"    
      />
     
      </Paper>

     
     
        {/* <Divider  sx={{mt:20 ,ml:20,mr:20 ,pt:0}  } color={'grey'} ></Divider> */}

     


    </Box>
    </CardMedia>
    </Box>
    );


}
