import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button, Container, FormControl, Input, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";
import { DataType } from "../App";

const UserInformation: React.FC<Props> = ({ data, update }) => {
  const [advanced, setAdvanced] = useState<boolean>(false)
  console.log(advanced)
  return (
    <>
      <Stack spacing={10}>
        <Stack spacing={10}>
          <div></div>
          <FormControl>
            <InputLabel>Height</InputLabel>
            <Input
              type='number'
              placeholder='Height'
              value={data['Height']}
              onChange={update("Height")}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Weight</InputLabel>
            <Input
              type='number'
              placeholder='Weight'
              value={data['Weight']}
              onChange={update("Weight")}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Skill Level</InputLabel>
            <Select
              value={data["Skill Level"]}
              label="Skill Level"
              placeholder="Skill Level"
              onChange={update("Skill Level")}
            >
              <MenuItem value='beginner'>beginner</MenuItem>
              <MenuItem value='intermediate'>intermediate</MenuItem>
              <MenuItem value='expert'>expert</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      { advanced ? (
        <>
          <Stack spacing={10}>
            <FormControl>
              <InputLabel>Inseam</InputLabel>
              <Input
                type='number'
                placeholder='Inseam'
                value={data['Inseam']}
                onChange={update("Inseam")}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Ape Index</InputLabel>
              <Input
                type='number'
                placeholder='Ape Index'
                value={data['Ape Index']}
                onChange={update("Ape Index")}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Weight Bias</InputLabel>
              <Select
                value={data["Weight Bias"]}
                label="Weight Bias"
                placeholder="Weight Bias"
                onChange={update("Weight Bias")}
              >
                <MenuItem value='back'>back</MenuItem>
                <MenuItem value='neutral'>neutral</MenuItem>
                <MenuItem value='front'>front</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </>
      ) : null}
      <Button
        variant="contained"
        startIcon={advanced ? <ArrowUpward /> : <ArrowDownward />}
        endIcon={advanced ? <ArrowUpward /> : <ArrowDownward />}
        onClick={e => setAdvanced(current => !current)}
      >
        Advanced Options
      </Button>
      </Stack>
    </>
  )
}

interface Props {
  data: DataType;
  update: (key: keyof DataType) => (e: {target: { value: number | string }}) => void;
}

export default UserInformation;
