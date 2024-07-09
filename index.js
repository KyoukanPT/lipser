import express from "express"
import axios from "axios"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const url = "https://secrets-api.appbrewery.com/random"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {;
        try {
            const response = await axios.get(url);

            res.render("index.ejs", {
                secret : response.data.secret,
                user : response.data.username
            })
        } catch (error) {
            console.error(error);
        }
    });

app.listen(port, () => {
    console.log(`App is up and running on port ${port}`);
});
