// import * as React from 'react';
// import { FC } from 'react';
// import PageTemplate from '../Common/PageTemplate';
// <<<<<<< Updated upstream
// import EventForm from '../EventForm/EventForm';

// const AddEvent: FC = () => {
//   const defaultValues = {
//     type: '',
//     title: '',
//     begin: '2023-10-17',
//     shortDesc: '',
//     description: '',
//     image: '',
//   };
//   return (
//     <PageTemplate title="Додати подію">
//       <EventForm defaultValues={defaultValues} />
//     </PageTemplate>
//   );
// };
// =======
// import { Button, Box } from '@mui/material'
// import { styled } from '@mui/material/styles';
// import { FormControl, useFormControlContext } from '@mui/base/FormControl';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// //---------------------Form--------------------------
// >>>>>>> Stashed changes

// function CustomInput() {
//   const formControlContext = useFormControlContext();

//   if (formControlContext === undefined) {
//     return null;
//   }

//   const { value, required, onChange, disabled, onFocus, onBlur } =
//     formControlContext;

//   return (
//     <input
//       value={value as string}
//       required={required}
//       onChange={onChange}
//       disabled={disabled}
//       onFocus={onFocus}
//       onBlur={onBlur}
//     />
//   );
// }

// function ControlStateDisplay() {
//   const formControlContext = useFormControlContext();
//   if (formControlContext === undefined) {
//     return null;
//   }

//   const { filled, focused } = formControlContext;

//   return (
//     <p>
//       {filled ? 'filled' : 'empty'}&nbsp;|&nbsp;
//       {focused ? 'focused' : 'not focused'}
//     </p>
//   );
// }




// //------------------------------------------------------------

// export default function FullWidthGrid() {
//   return <>
//         <PageTemplate title="Додати подію">
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={6} sm={12} md={6}>
//                   <FormControl defaultValue="" required>
//       <CustomInput />
//       <ControlStateDisplay />
//     </FormControl>
//             </Grid>
//             <Grid item xs={6} sm={12} md={6}>
//               <Item>xs=6 md=4</Item>
//             </Grid>
//             <Grid item xs={6} sm={12} md={6}>
//               <Item>xs=6 md=4</Item>
//             </Grid>
//             <Grid item xs={6} sm={12} md={6}>
//               <Item>xs=6 md=8</Item>
//             </Grid>
//              <Grid item xs={6} sm={12} md={12}>
//               <Item>xs=6 md=8</Item>
//             </Grid>
//             <Grid item xs={6} sm={12} md={12}>
//               <Item>xs=6 md=8</Item>
//             </Grid>
//             <Grid item xs={6} sm={12} md={12}>
//               <Item>xs=6 md=8</Item>
//             </Grid>
//             <Grid item xs={6} sm={12} md={6}>
//               <Button variant="outlined">Опублікувати </Button>
//             </Grid>
//             <Grid item xs={6} sm={12} md={6}>
          
//               <Button variant="outlined" >Скасувати</Button>
//             </Grid>
//           </Grid>
//         </Box>
//     </PageTemplate>;

  
//   </>

//   ;
// }

