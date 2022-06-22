import { FC, useState } from 'react';
import { ICar } from '../../../../Types/userInterfaces';
import { MainContent } from './mainContent';

type Props = {
  cars: ICar[];
  selectedCar: string;
};

const GarageModalContent: FC<Props> = ({ cars, selectedCar }) => {
  const data = cars.filter((e) => e.id === selectedCar);
  const [editing, setEditing] = useState(false);

  // Модальное окно
  return (
    <>
      {editing ? (
        <>
          {/* <EditingContent
            data={data}
            setData={setData}
            setEditing={setEditing}
          /> */}
        </>
      ) : (
        <>
          <MainContent data={data} setEditing={setEditing} />
        </>
      )}
    </>
  );
};

export default GarageModalContent;
