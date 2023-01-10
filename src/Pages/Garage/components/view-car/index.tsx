import { FC, useState } from 'react';
import { ICar } from '../../../../Types/userInterfaces';
import { ViewContent } from './viewContent';
import { EditingContent } from './editingContent';

type Props = {
  cars: ICar[];
  selectedCar: string;
  setCars: React.Dispatch<any>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const GarageModalContent: FC<Props> = ({
  cars,
  selectedCar,
  setCars,
  setShow,
}) => {
  const [data, setData] = useState(cars.filter((e) => e.id === selectedCar));
  const [editing, setEditing] = useState(false);

  console.log(data);


  return (
    <>
      {editing && (
        <EditingContent
          data={data}
          selectedCar={selectedCar}
          setCars={setCars}
          setShow={setShow}
        />
      )}
      {!editing && <ViewContent data={data} setEditing={setEditing} />}
    </>
  );
};

export default GarageModalContent;
