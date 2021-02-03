import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import enviroment from '../config/enviroment';
import routers from '../routers/app.router';
export default class Server {
    private _app: express.Application;
    private _port: number | string;

    public constructor(){
        this.initApp();
        this._port = enviroment.APP_PORT;
    }

    private initApp(){
        this._app = express();
        this._app
            .use(bodyParser.urlencoded({extended: true}))
            .use(bodyParser.json())
            .use(cors())
            .use(helmet())
            .use(compression())

            .use('/api',routers)
    }

    public start(){
        this._app.listen(this._port, () => {
            console.log(`Yeeii Server running in the port ${this._port}!!`);
        });
    }
}