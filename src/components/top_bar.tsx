import { AppBar, Stack, Toolbar, Typography } from '@mui/material';

const TopBar: React.FC<Props> = ({ page }) => {
  let title: string = [
    "User Information",
    "Bike Information",
    "Configuration"
  ][page];

  return (
    <AppBar position='absolute' sx={theme => ({ zIndex: theme.zIndex.drawer + 1 })}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Stack>
          <Typography variant="h5">
            MTB Tuning Guide
          </Typography>
          <Typography variant="caption">
            Page { page + 1 } of 3: { title }
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

interface Props {
  page: number;
}

export default TopBar;
