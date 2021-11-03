import { DataType } from "../App";

const BikeInformation: React.FC<Props> = () => {
  return <></>
}

interface Props {
  data: DataType;
  update: (key: keyof DataType) => (value: DataType[typeof key]) => void;
}

export default BikeInformation;
