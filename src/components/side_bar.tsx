import { ArrowRight } from "@mui/icons-material";
import { Container, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { DataType } from "../App";


const SideBar: React.FC<Props> = ({ data }) => {
  return (
    <Drawer variant="permanent">
      <div style={{ width: 300 }}>
        <Container sx={theme => theme.mixins.toolbar} />
        <List style={{ paddingTop: 20 }}>
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
      </div>
    </Drawer>
  )
}

interface Props {
  data: DataType
}

export default SideBar;
