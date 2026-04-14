import express from "express";

export class NetworkServer {
  private app = express();
  private port = 3000;

  start() {
    this.app.get("/", (req, res) => {
      res.send("Horyn OS is running 🚀");
    });

    this.app.listen(this.port, () => {
      console.log(`[Network] Server running on port ${this.port}`);
    });
  }
}
