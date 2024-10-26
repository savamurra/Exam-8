import { IQuote } from '../../types';
import * as React from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: 20 }}>
            {quote.author}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography gutterBottom sx={{ fontSize: 20 }}>
            {quote.category}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default QuoteItem;