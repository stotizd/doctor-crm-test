import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function ControllableStates({labelAuto,width, value, options, setValue, inputValue, setInputValue }) {
   
    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                }}
                id='controllable-states-demo'
                options={options}
                style={{ width: width, background:'white', marginBottom:'10px' }} 
                renderInput={(params) => <TextField {...params}    label={labelAuto} />}
            />
        </div>
    )
}
