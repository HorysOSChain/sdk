import { Kernel } from "./core/kernel";
import { NetworkServer } from "./network/server";
import { RuntimeEngine } from "./runtime/engine";
import { ExampleModule } from "./modules/example.module";
import { Logger } from "./utils/logger";

const kernel = new Kernel();
const network = new NetworkServer();
const runtime = new RuntimeEngine();
const module = new ExampleModule();

Logger.log("Starting Horyn OS...");

kernel.init();
kernel.boot();

runtime.start();
runtime.execute("Initial Task");

module.run();

network.start();
