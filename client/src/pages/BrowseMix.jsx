import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MixCard from '../components/MixCard';
import { Container, Grid } from '@mui/material';

// {/* <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
// </Grid> */}

export default function BrowseMix() {
    return (
        <Container>
            <Grid container spacing={5}>
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
            </Grid>
        </Container>
    )
}

//use code for iterating user mixes into grid items

// import React from 'react';
// import { Grid, Typography, Box } from '@mui/material';
// import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
// import useStyles from '../styles/styles';

// const Section = () => {
//   const classes = useStyles();

//   const sectionItems = [
//     {
//       id: 1,
//       icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence:
//         'Solving world problems through various web applications using efficient programs and tools',
//     },
//     {
//       id: 2,
//       icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence:
//         'Through team work, we collaborate and deliver quality projects of high standards',
//     },
//     {
//       id: 3,
//       icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence: 'Flexible payment plan is applicable to all our services',
//     },
//   ];
//   return (
//     <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
//       <Grid container className={classes.sectionGridContainer}>
//         {sectionItems.map((item) => (
//           <Grid
//             item
//             xs={12}
//             md={3.5}
//             minHeight={300}
//             key={item.id}
//             className={classes.sectionGridItem}
//           >
//             {item.icon}
//             <Typography>{item.sentence}</Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Section;