import { spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

const port = process.env.PORT || 3000;
const nodeExe = process.execPath; // full path to current node.exe
const nextCli = join(__dirname, "node_modules", "next", "dist", "bin", "next");

const child = spawn(nodeExe, [nextCli, "dev", "-p", String(port)], {
  stdio: "inherit",
  cwd: __dirname,
  env: { ...process.env, PATH: dirname(nodeExe) + ";" + (process.env.PATH || "") },
});

child.on("exit", (code) => process.exit(code ?? 1));
