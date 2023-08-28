const express = require("express")
const path = require("path")

const app = express()


/**
 * Install Static Files
 */
app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))



/**
 * Define Routing
 */


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/summary", (req, res) => {

    res.write(" Summary URL is executed");
    res.end();
}
)


/**
 * Start server
 */

app.listen(8080, () => {
    console.log("Listening on port " + 8080)
})