import express from 'express';
import ProductRoutes from './routes/products.routes';
import UserRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';
import LoginRoutes from './routes/login.routes';
import erro from './middlewares/err';

const app = express();

app.use(express.json());
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);
app.use('/login', LoginRoutes);

app.use(erro);

export default app;