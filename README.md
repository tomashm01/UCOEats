Para desplegar el proyecto se necesitan las siguientes dependencias:
- Npm
- Nodejs
- Desplegar un servicio como Xampp en local o una base de datos mysql en linea para importar el fichero de la base de datos.

# Backend
## Instalación
Para instalar el proyecto de backend se debe ejecutar el siguiente comando:
```bash
npm install
```

Ahora nos traemos el modelo en prisma con el siguiente comando:
```bash
npx prisma generate
```

Y debemos crear una cadena de conexion en un fichero .env con lo siguiente:
```bash
DATABASE_URL="mysql://user:password@host:port/nameBBDD"
```

## Ejecución
Para ejecutar el proyecto de backend se debe ejecutar el siguiente comando:
```bash
npm run dev
```

# Frontend

## Instalación
Para instalar el proyecto de frontend se debe ejecutar el siguiente comando:
```bash
npm install
```

## Ejecución
Para ejecutar el proyecto de frontend se debe ejecutar el siguiente comando:
```bash
npm run dev
```




