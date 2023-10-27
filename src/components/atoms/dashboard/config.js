import { SettingsAccessibilityOutlined as CogIcon, Lock as  LockClosedIcon, BarChart as ChartBarIcon, Person as UserIcon, People as  UsersIcon, ShoppingBag as ShoppingBagIcon   } from '@mui/icons-material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const items = [
  {
    title: 'Overview',
    path: '/dashboard',
    icon: (
      
        <ChartBarIcon />
      
    )
  },
  {
    title: 'Volunteers',
    path: '/dashboard/volunteers',
    icon: (
      
        <UsersIcon />
      
    )
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: (
      
        <ShoppingBagIcon />
      
    )
  },
  {
    title: 'Blog',
    path: '/dashboard/blog',
    icon: (
      
        <EditOutlinedIcon />
      
    )
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: (
      
        <UserIcon />
      
    )
  },
  {
    title: 'Logout',
    path: '#',
    icon: (
      
        <LockClosedIcon />
      
    )
  }
];
