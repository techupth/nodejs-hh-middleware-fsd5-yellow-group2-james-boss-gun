import fs from 'fs'

function logging(req, res, next) {
  const { ip, method, originalUrl: route } = req;
  const requestDetails = `IP: ${ip}, Method: ${method}, Endpoint: ${route}\n`
  console.log(process.cwd());
  try {
    const fd = fs.openSync('./data/logs.txt', 'a');
    fs.writeSync(fd, requestDetails);
    fs.closeSync(fd)
  } catch (err) {
    console.error(err);
  }
  next();
}

export default logging;