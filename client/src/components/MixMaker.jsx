import * as React from 'react';
import { Checkbox, TextField, Autocomplete, Box, Button, Stack} from '@mui/material';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_INGREDIENTS } from '../utils/queries';
import { ADD_MIX } from '../utils/mutation';

import Auth from '../utils/auth';

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

//needs useState to save values for mutation
//addMix mutation goes here too

export default function MixMaker() {
    const [mixName, setMixName] = React.useState('');
    const [ingredientList, setIngredientList] = React.useState([])
    const [addMix, {error}] = useMutation(ADD_MIX);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('Submitting mix:', mixName, 'with ingredients:', ingredientList);
            const { data } = await addMix({
                variables: { mixName, ingredients: ingredientList.map(ingredient => ingredient._id) }
            });
            console.log('Mutation result:', data);
            setMixName('');
            setIngredientList([]);
        } catch (error) {
            console.error('Mutation error:', error);
        }
    };

    const handleIngredientChange = (event, newValue) => {
        console.log('Selected ingredients:', newValue);
        setIngredientList(newValue);
    }

    const { loading, data } = useQuery(QUERY_INGREDIENTS);
    const ingredients = data?.getIngredients || [];

    return (
        <Stack sx={{ direction: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Box
              component='form'
              sx={{
                '& :not(style)': {m: 1, width: '25ch'},
              }}
              noValidate
              autoComplete="off"
              >
                <TextField
                  id='mix-name-input'
                  label='Mix Name'
                  variant='outlined'
                  value={mixName}
                  onChange={(e) => setMixName(e.target.value)}
                />
            </Box>
            <Autocomplete
            multiple
            id='ingredients-tags'
            options={ingredients}
            disableCloseOnSelect
            getOptionLabel={(ingredient) => ingredient.name}
            value={ingredientList}
            onChange={handleIngredientChange}
            isOptionEqualToValue={(option, value) => option._id === value._id}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    />
                    {option.name}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label='Select Ingredients' placeholder='My Ingredients' />
            )}
            />
            <Button variant='contained' sx={{ m: 2}} onClick={handleFormSubmit}>Save Mix</Button>
        </Stack>
    );
}