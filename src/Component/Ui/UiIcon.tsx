import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsIcon from '@mui/icons-material/Apps';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SellIcon from '@mui/icons-material/Sell';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import StarIcon from '@mui/icons-material/Star';

// These icons should be arranged alphabetically for easy sorting
const icons = {
  ArrowCircleRightIcon: <ArrowCircleRightIcon/>,
  ArrowCircleLeftIcon:<ArrowCircleLeftIcon/>,
  AppsIcon:<AppsIcon/>,
  CircleNotificationsIcon: <CircleNotificationsIcon />,
  DateRangeIcon:<DateRangeIcon />,
  EmailIcon:<EmailIcon />,
  ExpandMoreIcon:<ExpandMoreIcon/>,
  FavoriteIcon:<FavoriteIcon />,
  HomeOutlinedIcon:<HomeOutlinedIcon />,
  LocationOnIcon:<LocationOnIcon/>,
  LogoutIcon :<LogoutIcon />,
  PermIdentityIcon :<PermIdentityIcon />,
  SearchIcon:<SearchIcon />,
  SettingsIcon:<SettingsIcon/>,
  SellIcon:<SellIcon />,
  StarIcon :<StarIcon />
};

export type Icons = keyof typeof icons;

interface Props {
  /** Name of the icon as stored in the icons object */
  icon: Icons;
  size?: number;
  onClick?: () => void
}

export default function UiIcon({ icon, size = 18, onClick}: Props) {
  return <IconStyle size={size} onClick={onClick}>{icons[icon]}</IconStyle>;
}

const IconStyle = styled.span<{ size: number }>`
  font-size: ${({ size }) => size}px;
  svg {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
  }
`;