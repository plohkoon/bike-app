import { DataType } from "../App";

const BikeInformation: React.FC<Props> = () => {
  return <></>
}

interface Props {
  data: DataType;
  update: (key: keyof DataType) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default BikeInformation;
