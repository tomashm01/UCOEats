import express from "express";
import cors from "cors";
import userRouter from "./usuarios/infraestructure/usuarioRouter";
import productRouter from "./productos/infraestructure/productoRouter";
import categoryRouter from "./categorias/infraestructure/categoriaRouter"
//require("dotenv").config();

async function bootstrap(){
    const app = express();
    const port = process.env.PORT || 3000;
    const env= process.env.NODE_ENV || "development";
    
    app.use(cors());
    app.use(express.json());

    app.get("/", function (req, res) {
        res.send("<h1>Hello !</h1>");
    });

    app.use("/api/user", userRouter);
    app.use("/api/product", productRouter);
    app.use("/api/category", categoryRouter);

    app.listen(port, () => {
        return console.log(`server is listening ${port}`);
    });
}

bootstrap();