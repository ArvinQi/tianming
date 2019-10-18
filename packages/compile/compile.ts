// TODO:compile app into static files
import * as path from 'path';
import * as process from 'process';
import {execSync} from 'child_process';

export default function() {
//   const path = require("path");
//   const process = require("process");
//   const execSync = require("child_process").execSync;
  const stdout = execSync("sdf", {
    // stdio: 'stdio' ,
    cwd: path.join(process.cwd(), "scripts")
  });
  console.log(`stdout: ${stdout}`);
}
