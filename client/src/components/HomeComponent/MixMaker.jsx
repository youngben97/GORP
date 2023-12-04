import * as React from 'react';
import { Checkbox, TextField, Autocomplete, Box, Button, Stack} from '@mui/material';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_INGREDIENTS, QUERY_ME } from '../../utils/queries';
import { ADD_MIX } from '../../utils/mutation';
import { useMixContext } from '../../MixContext';

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

export default function MixMaker() {
    const { totals, updateTotals } = useMixContext();
    const [mixName, setMixName] = React.useState('');
    const [ingredientList, setIngredientList] = React.useState([])
    const [addMix, {error}] = useMutation
    (ADD_MIX, {
        refetchQueries: [
          QUERY_ME,
          'me'
        ]
    });

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

            const initialTotals = {
                calories: 0,
                protein: 0,
                fats: 0,
                carbs: 0,
                sodium: 0,
            };
            updateTotals(initialTotals);
        } catch (error) {
            console.error('Mutation error:', error);
        }
    };

    const handleIngredientChange = (event, newValue) => {
        console.log('Selected ingredients:', newValue);
        setIngredientList(newValue);

        const newTotals = {
            calories: newValue.reduce((total, ingredient) => total + ingredient.calories, 0),
            protein: newValue.reduce((total, ingredient) => total + ingredient.protein, 0),
            fats: newValue.reduce((total, ingredient) => total + ingredient.fats, 0),
            carbs: newValue.reduce((total, ingredient) => total + ingredient.carbs, 0),
            sodium: newValue.reduce((total, ingredient) => total + ingredient.sodium, 0),
          };

        updateTotals(newTotals);
    };

    const { loading, data } = useQuery(QUERY_INGREDIENTS);
    const ingredients = data?.getIngredients || [];

    //add a conditional render for the save button
    //"login to save your mix" if user is not logged in

    return (
        <Stack sx={{ direction: 'column', alignItems: 'center', justifyContent: 'center', m: 2, bgcolor: 'error.main', p:2, borderRadius: 1, border:2, borderColor: 'background.default' }}>
            <TextField
                  id='mix-name-input'
                  label='Mix Name'
                  variant='outlined'
                  value={mixName}
                  onChange={(e) => setMixName(e.target.value)}
                  sx={{
                        color: 'text.primary',
                        bgcolor: 'background.default',
                        borderRadius: 1
                  }}
            />
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
            sx={{ width: '80%', m:2, bgcolor: 'background.default'}}
            renderInput={(params) => (
                <TextField
                  {...params}
                  label='Select Ingredients'
                  placeholder='My Ingredients'
                  sx={{
                    '& label': {
                        color: 'text.primary',
                      },
                  }}
                  />
            )}
            />
            <Button variant='contained' sx={{ m: 1 }} onClick={handleFormSubmit}>Save Mix</Button>
        </Stack>
    );
}