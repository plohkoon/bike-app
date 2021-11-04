import { Button, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { DataType } from "../App";

const DataDisplay: React.FC<{title: string, data: Record<string, string>}> = ({title, data}) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs={6}>
            { Object.entries(data).map(([key, value]) => {
              return (
                <Typography variant="body1">
                  - {key}: {value}
                </Typography>
              )
            })}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>
          Expand
        </Button>
      </CardActions>
    </Card>
  )
}

const Configuration: React.FC<Props> = () => {
  return (
    <Stack spacing={4}>
      <DataDisplay
        title="Cockpit"
        data={{
          "Handlebar Width": "780 mm",
          "Handlebar Rise": "20 mm",
          "Stem Length": "50 mm",
          "Stem Spacers": "10 mm"
        }}
        />
      <DataDisplay
        title="Fork"
        data={{
          "Air Pressure": "98 PSI",
          "Volume Spacers": "3",
          "HSC": "2 out",
          "LSC": "3 out",
          "HSR": "8 out",
          "LSR": "6 out"
        }}
        />
      <DataDisplay
        title="Shock"
        data={{
          "Air Pressure": "260 PSI",
          "Volume Spacers": "2",
          "HSC": "4 out",
          "LSC": "1 out",
          "HSR": "5 out",
          "LSR": "8 out"
        }}
        />
      <DataDisplay
        title="Wheels"
        data={{
          "Front Tire Pressure": "22 PSI",
          "Rear Tire Pressure": "25 PSI",
          "Inserts?": "Yes",
          "Tubes?": "No"
        }}
        />
    </Stack>
  )
}

interface Props {
  data: DataType;
}

export default Configuration;
