import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';


export default function Products(props) {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const activeCategory = useSelector((state) => state.categories.activeCategory);
    const dummyText = useSelector((state) => state.categories.dummyText);

    const products = useSelector((state) =>
        state.products.filter((product) => product.category === activeCategory)
    );

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image={product.image}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                                </Typography>
                                {/* <Typography>
                                Price: ${product.price}
                                Inventory: {product.inventoryCount}
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">ADD TO Cart</Button>
                                <Button size="small">VIEW DETAILS</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}