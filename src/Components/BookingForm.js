import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Box,InputLabel,FormControl,Select,MenuItem} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import image_reservasion from '../assets/reserve.jpg';


const validationSchema = yup.object({
  fullname: yup
    .string('Enter your full name')
    .required('Full name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone:yup
    .string('Enter a phone number')
    .required('Phone number is reqired'), 
  occasion:yup
    .string('Choose your occasion'), 
  guests:yup
    .number('Enter the no of guests')
    .required('No of guests required.'),
  reservasion_date:yup
    .string()
    .required('Reservasion date required'),
  reservasion_time:yup
    .string()
    .required('Reservasion time required'),

    
});

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone:'',
      occasion:'',
      guests:'',
      reservasion_date: null,
      reservasion_time: ''
    },
    validationSchema: validationSchema,
   // onSubmit: (values) => {
   //   alert(JSON.stringify(values, null, 2));
   // },
   onSubmit: async (values, { setSubmitting }) => {
    try {
      // Log the data being sent as JSON
      console.log('Sending data:', JSON.stringify(values));
  
      const response = await fetch('https://littlelemondataapi.azurewebsites.net/api/Booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Data posted successfully:', result);
    } catch (error) {
      console.error('Error posting data:', error);
    } finally {
      // Reset the form submission status
      setSubmitting(false);
    }
  },
  
    
  });
  const [occasion, setOccasion] = React.useState('');
  const [reservasion_date, setReservasionDate] = React.useState(dayjs('2022-04-17'))
  const [reservasion_time, setReservasionTime] = React.useState(dayjs('2022-04-17T15:30'));

  const handleChangeOccasion = (event) => {
    setOccasion(event.target.value);
    const value = event.target.value;
    formik.setFieldValue('occasion', value); 
    
   
  };


  const handleChangeReservasionDate =(newValue)=>{
  
    formik.setFieldValue('reservasion_date',newValue);
  }

  const handleChangeReservasionTime =(newValue)=>{
  
    formik.setFieldValue('reservasion_time',newValue)
  }

  return (
    <div className="reservasion_container" >
      <div className="reservasion_img">
      <img src={image_reservasion} alt="reserve" />
      
      </div>
      <div className="reservasion_form">
      <form onSubmit={formik.handleSubmit}>
        <div>
        <TextField
          fullWidth
          id="fullname"
          name="fullname"
          label="Full name"
          value={formik.values.fullnsame}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />

        </div>
 
        <div>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        </div>

        <div>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone No"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        </div>

        <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Occasion</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={occasion}
              label="Occasion"
              onChange={handleChangeOccasion}
            >
              <MenuItem value='Wedding'>Wedding</MenuItem>
              <MenuItem value='Birthday'>Birthday</MenuItem>
              <MenuItem value='Anniversary'>Anniversary</MenuItem>

            </Select>
          </FormControl>
        </Box>

        </div>

        <div>
        <TextField
          fullWidth
          id="guests"
          name="guests"
          label="No of guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.guests && Boolean(formik.errors.guests)}
          helperText={formik.touched.guests && formik.errors.guests}
        />
        </div>

        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                label="Date"
                value={reservasion_date}
                onChange={(newValue) => {
                  handleChangeReservasionDate(newValue);
                  setReservasionDate(newValue); 
                }}
                
                
              />
            </DemoContainer>
          </LocalizationProvider>

        </div>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
              
                <TimePicker
                  label="Time"
                  value={reservasion_time}
                  onChange={(newValue) => {
                    handleChangeReservasionTime(newValue);
                    setReservasionTime(newValue); 
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
        </div>
        
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
      
    </div>

    
    
  );
};

export default BookingForm;
