import { AppDataSource } from "./data-source"
import * as express from 'express'
// import cors = require("cors");
import  {router}  from "./routes/inventoryRoutes";
// import {}
AppDataSource.initialize().then(async () => {
    require("dotenv").config();

    const app = express();

    app.use(express.json())
    // app.use(cors())
    // route
    app.use('/api',router)
    let PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`server is running  ${PORT}`)
    })

}).catch(error => console.log(error))

