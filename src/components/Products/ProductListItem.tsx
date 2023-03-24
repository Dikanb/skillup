import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductListItem.scss"

type Props = {
    title: string
    description: string
    capacity: number
    type:string
    price:number

}
const ProductListItem = ({
    title,
    description,
    capacity,
    type,
    price
}: Props) => {
  return (
    <Card variant="outlined" className="product">
        <CardContent>
            <h4 className="product-title">{title}</h4>
            <p className="product-description">{description}</p>
            <div className="product-features">Type:{type}</div>
            <div className="product-features">Capacity:{capacity}GB</div>
            <div className="product-prise">Price: <strong>{price}$</strong> </div>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to card</Button>
            </CardActions>
        </CardContent>
    </Card>
  )
}
export default ProductListItem