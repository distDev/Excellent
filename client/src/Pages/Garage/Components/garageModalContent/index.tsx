import React, { FC, useState } from 'react';
import {
  ModalFixButton,
  ModalInput,
  ModalSubtitle,
  ModalTitle,
} from '../../../../Components/modal/styles/modal';
import { GarageModalContentItem } from './styles/garageModalContent';
type Props = {
  data: {
    brand: string;
    model: string;
    vin: string;
    year: string;
    mileage: string;
  };
  setData?: React.Dispatch<
    React.SetStateAction<{
      brand: string;
      model: string;
      vin: string;
      year: string;
      mileage: string;
    }>
  >;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const GarageModalContent = () => {
  const [data, setData] = useState({
    brand: 'Reno',
    model: 'Logan',
    vin: 'Пусто',
    year: '2014',
    mileage: '1000',
  });

  const [editing, setEditing] = useState(false);

  // Данные автомобиля
  const MainContent: FC<Props> = ({ data, setEditing }) => {
    return (
      <>
        <GarageModalContentItem>
          <ModalSubtitle>Бренд</ModalSubtitle>
          <ModalTitle>{data.brand}</ModalTitle>
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Модель</ModalSubtitle>
          <ModalTitle>{data.model}</ModalTitle>
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>VIN номер</ModalSubtitle>
          <ModalTitle>{data.vin}</ModalTitle>
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Год</ModalSubtitle>
          <ModalTitle>{data.year}</ModalTitle>
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalTitle>{data.mileage} км</ModalTitle>
        </GarageModalContentItem>
        <ModalFixButton onClick={() => setEditing(true)}>
          Изменить
        </ModalFixButton>
      </>
    );
  };

  // Редактирование данных автомобиля
  const EditingContent: FC<Props> = ({ data, setData, setEditing }) => {
    const [inputs, setInputs] = useState({
      brand: data.brand,
      model: data.model,
      vin: data.vin,
      year: data.year,
      mileage: data.mileage,
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSave = () => {
      setData!(inputs);
      setEditing(false);
    };

    console.log(inputs);

    return (
      <>
        <GarageModalContentItem>
          <ModalSubtitle>Бренд</ModalSubtitle>
          <ModalInput
            value={inputs.brand}
            name='brand'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Модель</ModalSubtitle>
          <ModalInput
            value={inputs.model}
            name='model'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>VIN номер</ModalSubtitle>
          <ModalInput value={inputs.vin} name='vin' onChange={onInputChange} />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Год</ModalSubtitle>
          <ModalInput
            value={inputs.year}
            name='year'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalInput
            value={inputs.mileage}
            name='mileage'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalInput
            value={inputs.mileage}
            name='mileage'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalInput
            value={inputs.mileage}
            name='mileage'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalInput
            value={inputs.mileage}
            name='mileage'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <GarageModalContentItem>
          <ModalSubtitle>Пробег</ModalSubtitle>
          <ModalInput
            value={inputs.mileage}
            name='mileage'
            onChange={onInputChange}
          />
        </GarageModalContentItem>
        <ModalFixButton primary onClick={handleSave}>
          Сохранить
        </ModalFixButton>
      </>
    );
  };

  // Модальное окно
  return (
    <>
      {editing ? (
        <>
          <EditingContent
            data={data}
            setData={setData}
            setEditing={setEditing}
          />
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
