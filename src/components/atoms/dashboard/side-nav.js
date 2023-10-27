import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

import { ArrowDropUp as ChevronUpDownIcon } from '@mui/icons-material';

import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import Image from 'next/image';
import { clearCache, logoutUser } from '@/lib/auth';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const theme = useTheme()
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'));
  const router = useRouter()
  const logoutCurrentUser = async() => {
    await logoutUser()
    clearCache()
    return router.push("/login")
  }

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: 'rgb(28, 37, 54)'
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: 'inline-flex',
            height: 32,
            width: 32
          }}
        >
          <Image src="/logo.png" height={70} width={70} />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#2b2b2b',
            borderRadius: 1,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
            p: '12px'
          }}
        >
          <div>
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              Claire Aid
            </Typography>
            <Typography
              color="neutral.400"
              variant="body2"
            >
              Dashboard
            </Typography>
          </div>
          <SvgIcon
            fontSize="small"
            sx={{ color: 'neutral.500' }}
          >
            <ChevronUpDownIcon />
          </SvgIcon>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'rgb(47, 55, 70)' }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0
          }}
        >
          {items.map((item) => {
            const active = item.path ? (pathname === item.path) : false;

            return (
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
                handler={item.title === "Logout" ? logoutCurrentUser : undefined}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
    // </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
