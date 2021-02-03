import mysql from 'mysql';
import enviroment from '../config/enviroment';

export default class MySQL {
    private _cnn: mysql.Connection;
    private static _instance: MySQL;

    private constructor(){
        this._cnn = mysql.createConnection({
            host: enviroment.DB_HOST,
            database: enviroment.DB_NAME,
            user: enviroment.DB_USER,
            password: enviroment.DB_PASS,
        });
        this._cnn.connect();
    }

    private static get instance(){
        return this._instance || (this._instance = new this());
    }

    private static get connection(){
        return this.instance._cnn;
    }

    public static doQuery(query: string, values: any){
        return new Promise<any>((resolve, reject) => {
            this.instance._cnn.query(query, values, (err, results) => {
                if(err) reject(err);
                else resolve(results);
            });
        });
    }


}