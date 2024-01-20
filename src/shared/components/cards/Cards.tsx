import * as React from "react";
import Mediacard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ICard {
    title: string,
    description: string,
    image?:string,
    quantite?:number;

}
export const  Card: React.FC<ICard> =({title, description,quantite})=> {
  return (
    <Mediacard sx={{ maxWidth: 345, marginX:1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
         <Typography>QUANTIDADE:{quantite}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDITAR</Button> 
        <Button size="small">EXCLUIR</Button>
      </CardActions>
    </Mediacard>
  );
}
