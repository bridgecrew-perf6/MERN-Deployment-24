const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");

//allows to take in post request
app.use(express.json(),express.urlencoded({extended:true}));

//brings in routes to server
require("./server/routes/pirate.routes")(app);

app.listen(port, () =>console.log(`running on port ${port}`));

