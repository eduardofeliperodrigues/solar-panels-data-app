import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MUISelect } from '@mui/material';



export default function Select({ list, handleChange, selected }) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecione ...</InputLabel>
                <MUISelect
                    labelId="select"
                    id="select"
                    value={selected}
                    label="Condominio..."
                    onChange={(event) => { handleChange(event) }}
                >
                    {list?.map((element, index) => (
                        <MenuItem key={index} value={element}>{element}</MenuItem>
                    ))}
                </MUISelect>
            </FormControl>
        </Box>
    );
}
