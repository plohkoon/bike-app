import { ArrowRight } from "@mui/icons-material";
import { Container, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { DataType } from "../App";


const SideBar: React.FC<Props> = ({ data }) => {
  return (
    <Drawer variant="permanent">
      <Container sx={theme => theme.mixins.toolbar} />
      <List>
        { Object.entries(data)
                .map(([key, value]) => {
                  return (
                    <ListItem key={key}>
                      <ListItemIcon>
                        <ArrowRight />
                      </ListItemIcon>
                      <Grid container spacing={3}>
                        <Grid item>
                          <ListItemText primary={key} />
                        </Grid>
                        <Grid item>
                          <ListItemText primary={value ?? "n/a"} />
                        </Grid>
                      </Grid>
                    </ListItem>
                  )
                })
        }
      </List>
    </Drawer>
  )
}

interface Props {
  data: DataType
}

export default SideBar;
