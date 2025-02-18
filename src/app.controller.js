import userRouter from "./modules/users/user.controller.js";
import cors from "cors";

const bootstrap = async (express, app) => {
  // corse orgin
  app.use(cors());
  // parsing data
  app.use(express.json());
  //Routing user
  app.use("/users", userRouter);
};

export default bootstrap;
