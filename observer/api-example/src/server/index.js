const express = require("express");
const routers = require("../routes");
const AppStore = require("../models/app-store");

class Server {
  constructor() {
    console.log("Initializing server...");

    // init app
    this._app = express();

    // init app level middlewares
    this.initMiddlewares();

    // init routers
    this._routers = routers;
    this.initRouters();

    // Setting error middleware
    // this._app.use(ErrorMiddleware);
  }

  start = () => {
    this._app.listen(process.env.PORT, () => {
      console.log(
        `${process.env.APP_NAME} APP running on port ${process.env.PORT}`
      );
    });
  };

  initMiddlewares = () => {
    console.log("Initializing middlewares...");
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(express.json());

    this._app.use((req, res, next) => {
      const appStore = new AppStore();
      appStore.addRequestCount();
      appStore.logRequestCount();
      next()
    });
  };

  initRouters = () => {
    console.log("Initializing routes...");
    this._app.use("/products", this._routers.productRoutes);
  };
}

module.exports = Server;
