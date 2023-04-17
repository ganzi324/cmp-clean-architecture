import userRouter from './users';
import productRouter from './products';

export default (app) => {
  app.use('/user', userRouter);
  app.use('/product', productRouter);
};