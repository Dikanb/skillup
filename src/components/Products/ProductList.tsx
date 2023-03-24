import { Grid, Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"

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
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="iPhone 14 Pro" description="This is iPhone 14 Pro" capacity={256} type=" phone" price={1200}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="iPhone 13 Pro" description="This is iPhone 13 Pro" capacity={128} type=" phone" price={800}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="iPhone 12 Pro" description="This is iPhone 12 Pro" capacity={64} type=" phone" price={500}/>
                </Grid>
            </Grid>

        </>
    )
}
export default ProductList