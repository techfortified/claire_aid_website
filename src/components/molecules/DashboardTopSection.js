
'use client'

import { Box, Container, Unstable_Grid2 as Grid, IconButton, Paper, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const overViewData = [
  {
    title: "DONATIONS",
    total: "325",
    suffix: "K",
    prefix: "$",
    icon: <AttachMoneyIcon />
  },
  {
    title: "USERS",
    total: "27",
    suffix: "",
    prefix: "",
    icon: <PeopleOutlineIcon />
  },
  {
    title: "VOLUNTEERS",
    total: "100",
    suffix: "",
    prefix: "",
    icon: <GroupsOutlinedIcon />
  },
  {
    title: "HOUSEHOLDS",
    total: "500",
    suffix: "",
    prefix: "",
    icon: <FamilyRestroomIcon />
  },



]


const OverviewPaper = ({ data }) => {
  return (
    <Paper elevation={4} sx={{ minHeight: 120, height: "100%", p: 4 }}>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <Typography>{data.title}</Typography>
          <VisibilitySensor partialVisibility offset={{ top: 1 }}>
            {({ isVisible }) => (
              <Typography sx={{ textAlign: "center", height: 50, fontFamily: "Playfair Display" }} variant="h3">
                {isVisible && <CountUp duration={2} delay={0} end={data.total} prefix={data.prefix} suffix={data.suffix} />}
              </Typography>
            )}
          </VisibilitySensor>
        </Grid>
        <Grid item lg={4}>
          <IconButton sx={{ borderRadius: 30, backgroundColor: '#F1F5F9' }}>
            {data.icon}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

const DashboardTopSection = () => (
  <>

    <Container maxWidth="xl">
      <Grid
        container
        spacing={3}
      >
        {
          overViewData.map((d, i) => (
            <Grid
              key={i}
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewPaper data={d} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  </>
);

export default DashboardTopSection;
