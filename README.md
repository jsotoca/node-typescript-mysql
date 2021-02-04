# NODE-TYPESCRIPT-MYSQL

_Proyecto base REST API hecho con Node JS, Typescript, Express y Mysql._

## Descripción 🚀

_Esta aplicación incluye el código y modulos necesarios para el despliegue de un proyecto Rest API incluyendo servicios de alojamiento de archivos de AWS S3 y envio de emails con Nodemailer._

### Instalación 📋

_Despues de haber descargado o clonado el repositorio lo primero que tienes que hacer es instalar las dependencias necesarias_

```
npm init
```

_Antes de iniciar la aplicación necesitas crear un archivo .env en el root con la siguiente información_

```
APP_NAME            = demo
APP_URL             = http://localhost:4000/api
APP_PORT            = 4000
TOKEN_SECRET        = 43efgg677hffg

DB_HOST             = localhost
DB_NAME             = tu_bd_name
DB_USER             = tu_bd_user
DB_PASS             = tu_bd_pass

MAIL                = test@tuemail.com
SMTP_HOST           = mail.tuemail.com
SMTP_PORT           = 465
SMTP_SECURE         = true
SMTP_USER           = test@tuemail.com
SMTP_PASSWORD       = tu_password

AWS_BUCKET          = tu_bucket
AWS_LOCATION        = tu_location
AWS_ACCESS_KEY_ID   = tu_key_id
AWS_SECRET_KEY      = tu_secret_key

COMPANY_NAME        = Google
COMPANY_ADDRESS     = Las delicias #123 Urb. San Francisco
COMPANY_EMAIL       = info@google.com
```

_Corriendo el proyecto en modo de desarrollo_

```
npm run dev
```

_Corriendo el proyecto en modo de produción_

```
npm run start
```

## Dependencias 🛠️

_Dependencias_

```
"aws-sdk": "^2.834.0",
"bcrypt": "^5.0.0",
"body-parser": "^1.19.0",
"compression": "^1.7.4",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"express-validator": "^6.9.2",
"helmet": "^4.4.1",
"jsonwebtoken": "^8.5.1",
"multer": "^1.4.2",
"mysql": "^2.18.1",
"nodemailer": "^6.4.17",
"uuid": "^8.3.2"
```

_Dependencias de desarollo_

```
"@types/bcrypt": "^3.0.0",
"@types/compression": "^1.7.0",
"@types/cors": "^2.8.9",
"@types/express": "^4.17.11",
"@types/jsonwebtoken": "^8.5.0",
"@types/multer": "^1.4.5",
"@types/mysql": "^2.15.17",
"@types/nodemailer": "^6.4.0",
"@types/uuid": "^8.3.0",
"ts-node-dev": "^1.1.1",
"typescript": "^4.1.3"
```
## Autores ✒️

* **Juan Antonio Soto Cabrera** - *Desarrollador* - [jsotoca](https://github.com/jsotoca)


## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢.
* Invitame un café ☕. 
* Da las gracias públicamente 🤓.