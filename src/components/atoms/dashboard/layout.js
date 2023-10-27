'use client'
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
// import { withAuthGuard } from 'src/hocs/with-auth-guard';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import { Box, Typography } from '@mui/material';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

const Layout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
              pl: 2
            }}
          >
            {children}
          </Box>
        </LayoutContainer>
        <Typography sx={{ textAlign: 'center' }}>&copy; Claire Aid Foundation</Typography>
    </LayoutRoot >
    </>
  );
}
export default Layout