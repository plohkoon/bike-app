import { Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, Typography, Grid, Divider, Button } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { DataType } from "../App";

const frameOptions: string[] = [
  "frame 1",
  "frame 2",
  "frame 3"
]

const forkOptions: string[] = [
  "fork 1",
  "fork 2",
  "fork 3"
]

const shockOptions: string[] = [
  "shock 1",
  "shock 2",
  "shock 3"
]

const PhotoUpload: React.FC<{ photoUploaded: () => void, title: string }> = ({ photoUploaded, title }) => {
  const [photo, setPhoto] = useState<boolean>(false)

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        { photo ?
          null : (
          <Button
            sx={theme => ({height: 200, width: '100%'})}
            onClick={e => {
              if (window.confirm("This is a file dialog, confirm to \"upload file\""))
                setPhoto(prev => !prev);
                photoUploaded();
            }}
          >
            <AddAPhoto />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

const BikeInformation: React.FC<Props> = ({ data, update }) => {
  const [frameUploaded, setFrameUploaded] = useState<boolean>(false);
  const [forkUploaded, setForkUploaded] = useState<boolean>(false);
  const [shockUploaded, setShockUploaded] = useState<boolean>(false);

  useEffect(() => {
    if (frameUploaded && forkUploaded && shockUploaded) {
      update("Frame")({target: {value: frameOptions[0]}});
      update("Fork")({target: {value: forkOptions[1]}});
      update("Shock")({target: {value: shockOptions[2]}});
    }
  }, [frameUploaded, forkUploaded, shockUploaded]);

  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PhotoUpload
            photoUploaded={() => {
              setFrameUploaded(true)
            }}
            title={"Front"} />
        </Grid>
        <Grid item xs={4}>
          <PhotoUpload
            photoUploaded={() => {
              setForkUploaded(true)
            }}
            title={"Side"} />
        </Grid>
        <Grid item xs={4}>
          <PhotoUpload
            photoUploaded={() => {
              setShockUploaded(true)
            }}
            title={"Top"} />
        </Grid>
      </Grid>
      <Divider sx={theme => ({marginTop: 5, marginBottom: 5})} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Frame</Typography>
              {/* <Typography variant="body1">{data["Frame"]}</Typography> */}
            </CardContent>
            <CardActions>
              <FormControl>
                <InputLabel>Frame</InputLabel>
                <Select
                  value={data["Frame"]}
                  label="Frame"
                  placeholder="Frame"
                  onChange={update("Frame")}
                >
                  { frameOptions.map(option => <MenuItem value={option} key={option}>{option}</MenuItem>)}
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Fork</Typography>
              {/* <Typography variant="body1">{data["Fork"]}</Typography> */}
            </CardContent>
            <CardActions>
              <FormControl>
                <InputLabel>Fork</InputLabel>
                <Select
                  value={data["Fork"]}
                  label="Fork"
                  placeholder="Fork"
                  onChange={update("Fork")}
                >
                  { forkOptions.map(option => <MenuItem value={option} key={option}>{option}</MenuItem>)}
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Shock</Typography>
              {/* <Typography variant="body1">{data["Shock"]}</Typography> */}
            </CardContent>
            <CardActions>
              <FormControl>
                <InputLabel>Shock</InputLabel>
                <Select
                  value={data["Shock"]}
                  label="Shock"
                  placeholder="Shock"
                  onChange={update("Shock")}
                >
                  { shockOptions.map(option => <MenuItem value={option} key={option}>{option}</MenuItem>)}
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

interface Props {
  data: DataType;
  update: (key: keyof DataType) => (e: {target: { value: number | string }}) => void;
}

export default BikeInformation;
