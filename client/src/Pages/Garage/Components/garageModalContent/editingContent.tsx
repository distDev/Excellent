// import { FC, useState } from 'react';

// export const EditingContent: FC<Props> = ({ car, setEditing }) => {
//   const [inputs, setInputs] = useState({
//     brand: data.brand,
//     model: data.model,
//     vin: data.vin,
//     year: data.year,
//     mileage: data.mileage,
//   });

//   const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     setData!(inputs);
//     setEditing(false);
//   };

//   return (
//     <>
//       <GarageModalContentItem>
//         <ModalSubtitle>Бренд</ModalSubtitle>
//         <ModalInput
//           value={inputs.brand}
//           name='brand'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Модель</ModalSubtitle>
//         <ModalInput
//           value={inputs.model}
//           name='model'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>VIN номер</ModalSubtitle>
//         <ModalInput value={inputs.vin} name='vin' onChange={onInputChange} />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Год</ModalSubtitle>
//         <ModalInput value={inputs.year} name='year' onChange={onInputChange} />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Пробег</ModalSubtitle>
//         <ModalInput
//           value={inputs.mileage}
//           name='mileage'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Пробег</ModalSubtitle>
//         <ModalInput
//           value={inputs.mileage}
//           name='mileage'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Пробег</ModalSubtitle>
//         <ModalInput
//           value={inputs.mileage}
//           name='mileage'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Пробег</ModalSubtitle>
//         <ModalInput
//           value={inputs.mileage}
//           name='mileage'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <GarageModalContentItem>
//         <ModalSubtitle>Пробег</ModalSubtitle>
//         <ModalInput
//           value={inputs.mileage}
//           name='mileage'
//           onChange={onInputChange}
//         />
//       </GarageModalContentItem>
//       <ModalFixButton primary onClick={handleSave}>
//         Сохранить
//       </ModalFixButton>
//     </>
//   );
// };
