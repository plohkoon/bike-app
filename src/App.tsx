import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Container, CssBaseline, Fab } from '@mui/material';
import { useState } from 'react';
import BikeInformation from './components/bike_information';
import Configuration from './components/configuration';
import SideBar from './components/side_bar';
import TopBar from './components/top_bar';
import UserInformation from './components/user_information';

export interface DataType {
  "Height": null | number;
  "Weight": null | number;
  "Skill Level": null | string;
  "Inseam": null | number;
  "Ape Index": null | number;
  "Weight Bias": null | string;
  "Frame": null | string;
  "Fork": null | string;
  "Shock": null | string;
}

function App() {
  const [data, setData] = useState<DataType>({
    "Height": null,
    "Weight": null,
    "Skill Level": null,
    "Inseam": null,
    "Ape Index": null,
    "Weight Bias": null,
    "Frame": null,
    "Fork": null,
    "Shock": null
  });

  const [page, setPage] = useState<number>(0);

  const updateKey = (key: keyof DataType) => (newValue: DataType[typeof key]) => {
    setData(old => ({ ...old, [key]: newValue}));
  }

  return (
    <>
      <CssBaseline />
      <TopBar page={page} />
      <SideBar data={data} />
      <Container sx={theme => ({
        height: `calc(100vh - 64px)`,
        width: `calc(100vw - 250px)`,
        position: 'fixed',
        bottom: 0,
        right: 0,
        overflow: 'scroll'
      })}>
        {page === 0 ? (
          <UserInformation data={data} update={updateKey} />
        ) : page === 1 ? (
          <BikeInformation data={data} update={updateKey} />
        ) : (
          <Configuration data={data} />
        )}
      </Container>
      <Fab disabled={page <= 0} onClick={e => setPage(old => old - 1)} style={{
        position: 'fixed',
        bottom: 20,
        left: 270
      }}>
        <ArrowBack />
      </Fab>
      <Fab disabled={page > 1} onClick={e => setPage(old => old + 1)} style={{
        position: 'fixed',
        bottom: 20,
        right: 20
      }}>
        <ArrowForward />
      </Fab>

    </>
  );
}

export default App;
