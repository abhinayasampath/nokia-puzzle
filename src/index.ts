import express from 'express';
import routes from './routes';


const apiRoutes = express();
apiRoutes.use(routes);

const port =  4000;
apiRoutes.listen(port, () => {
    console.log(`Server is running at the ${port}`);
});

export default apiRoutes;
