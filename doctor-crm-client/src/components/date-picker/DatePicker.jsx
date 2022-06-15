import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateFnsUtils from "@date-io/date-fns";
import { ru } from "date-fns/locale";
export default function BasicDatePicker({width, valueDate, setValueDate, labelDatePicker}) {

  return (
    <LocalizationProvider  locale={ru} utils={DateFnsUtils} dateAdapter={AdapterDateFns}>
      <DatePicker
        label={labelDatePicker}
        inputFormat="dd-MMMM-yyyy"
        value={valueDate}
        onChange={(newValue) => {
          setValueDate(newValue);
        }}
        renderInput={(params) => <TextField {...params}   sx={{width: width, background:'white',  margin: '5px 0'}} />}
      
      />
    </LocalizationProvider>
  );
}
