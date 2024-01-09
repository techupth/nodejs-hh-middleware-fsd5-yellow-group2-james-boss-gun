import fs from "fs/promises";

const logging = async (req, res, next) => {
  try {
    const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`;
    await fs.appendFile("log.txt", text);
  } catch {
    await fs.appendFile(
      "log.txt",
      `\nLogging Error on IP: ${req.ip}, Method ${rqe.method}, Endpoint ${req.originalUrl}`
    );
  }

  next();
};

export default logging;
