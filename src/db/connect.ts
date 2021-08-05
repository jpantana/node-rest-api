import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("dbUri") as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      (log as any).info("Database connected");
    })
    .catch((error) => {
      (log as any).error("db error", error);
      process.exit(1);
    });
}

export default connect;