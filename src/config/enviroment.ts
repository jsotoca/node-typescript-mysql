if(process.env.NODE_ENV != 'production') require('dotenv').config();

const enviroment = {
    APP_NAME                : process.env.APP_NAME,
    APP_URL                 : process.env.APP_URL,
    APP_PORT                : process.env.APP_PORT,
    TOKEN_SECRET            : process.env.TOKEN_SECRET,
    DB_HOST                 : process.env.DB_HOST,
    DB_NAME                 : process.env.DB_NAME,
    DB_USER                 : process.env.DB_USER,
    DB_PASS                 : process.env.DB_PASS,
    MAIL                    : process.env.MAIL,
    SMTP_HOST               : process.env.SMTP_HOST,
    SMTP_PORT               : parseInt(process.env.SMTP_PORT),
    SMTP_SECURE             : process.env.SMTP_SECURE,
    SMTP_USER               : process.env.SMTP_USER,
    SMTP_PASSWORD           : process.env.SMTP_PASSWORD,
    AWS_BUCKET              : process.env.AWS_BUCKET,
    AWS_LOCATION            : process.env.AWS_LOCATION,
    AWS_ACCESS_KEY_ID       : process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_KEY          : process.env.AWS_SECRET_KEY,
    COMPANY_NAME            : process.env.COMPANY_NAME,
    COMPANY_ADDRESS         : process.env.COMPANY_ADDRESS,
    COMPANY_EMAIL           : process.env.COMPANY_EMAIL,
};

export default enviroment;