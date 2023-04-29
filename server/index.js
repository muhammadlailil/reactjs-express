import app from './app/bootstrap.js'
const port = _config.app.port;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));