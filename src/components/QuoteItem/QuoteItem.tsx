import { IQuote } from "../../types";
import * as React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  quote: IQuote;
  deleteQuote: (id: string) => void;
}

const QuoteItem: React.FC<Props> = ({ quote, deleteQuote }) => {
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography gutterBottom sx={{ fontSize: 20, maxWidth: "800px" }}>
              {quote.content}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }}>
              <strong>Автор: {quote.author}</strong>
            </Typography>
          </div>
          <div>
            <Button
              size="small"
              onClick={() => deleteQuote(quote.id)}
              color="warning"
            >
              Delete
            </Button>
            <Button
              size="small"
              component={NavLink}
              to={`/quotes/${quote.id}/edit`}
            >
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default QuoteItem;
