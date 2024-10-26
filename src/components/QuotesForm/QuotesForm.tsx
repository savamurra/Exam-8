import { useState } from 'react';
import { IQuoteForm } from '../../types';
import Grid from "@mui/material/Grid2";
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import * as React from 'react';

const initialForm = {
  author: '',
  content: '',
  category: '',
};

interface Props {
  submitForm: (quote: IQuoteForm) => void;
}



const QuotesForm: React.FC<Props> = ({submitForm}) => {
  const [form, setForm] = useState<IQuoteForm>(initialForm);
  const select = [
    {value: 'Star Wars', id: "star-wars"},
    {value: 'Famous People', id: "famous-people"},
    {value: 'Saying', id: "saying"},
    {value: 'Humour', id: "humour"},
    {value: 'Motivational', id: "motivational"},
  ];

  const changeField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({...form});

    setForm({ ...initialForm });
  };


  return (
    <form onSubmit={onSubmit}>
      <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center" }}>
        New Quote
      </Typography>
      <Grid container spacing={2} sx={{ mx: "auto", width: "50%", mt: 4 }}>
        <Grid size={12}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-select-currency"
            name="category"
            select
            label="Select"
            value={form.category}
            onChange={changeField}
          >
            {select.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Author"
            name="author"
            value={form.author}
            variant="outlined"
            onChange={changeField}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Content"
            name="content"
            value={form.content}
            multiline
            rows={4}
            onChange={changeField}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%"}}
          >
            Add Quote
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default QuotesForm;