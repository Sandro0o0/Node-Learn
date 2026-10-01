// OS Module

const os = require("os");

// info about Current user
const user = os.userInfo();
const SystemUpTime = os.uptime();

const IntoHour = Number(SystemUpTime) / 60;
// console.log(user);

const CurrentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
// ======================================>

const path = require("path");
console.log(path.sep);

// ======================================>
// FS Module
const { readFileSync, writeFileSync } = require("fs");
