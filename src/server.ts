import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  AppDataSource.initialize()
    .then(() => console.log("Database initilized"))
    .catch((err) => console.error(err));

  console.log(`Server is running on localhost:${PORT}`);
});
