const express = require('express');
const cors = require('cors');

const { ServerConfig, DbConnect } = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors({
    origin: `${ServerConfig.ORIGIN}`,
}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is listening to http://localhost:${ServerConfig.PORT}`);
    DbConnect();
});