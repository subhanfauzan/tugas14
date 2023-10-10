const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('halo dek')
})

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const motorrouter = require("./routes/motor");
app.use("/api/motor", motorrouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})