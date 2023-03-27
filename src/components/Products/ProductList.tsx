import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"
import productsArray from "utils/productsArray"

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component='h1'
                sx={{
                    marginBottom: "30px",
                    textTransform: "uppercase",
                    textAlign: 'center'
                }}
            >
                List of products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(({ id,title, description, type, capacity, price,image }, ) => (
                    <Grid item xs={12} sm={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price} 
                            image={image}
                            />
                    </Grid>
                ))}


            </Grid>

        </>
    )
}
export default ProductList