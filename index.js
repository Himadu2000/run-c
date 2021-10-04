const CronJob = require("cron").CronJob;
const { exec } = require("child_process");
const job = new CronJob(
  "*/1 11-14 * * 1-5",
  () => {
    if (job.lastDate()?.getHours() === 2) process.exit(0);
    if (
      job.lastDate()?.getHours() === 1 &&
      job.lastDate()?.getMinutes() === 50
    ) {
      console.log("last 10");
      exec("node ms.js");
    }
    console.log("Running every minute.");
    exec("yarn start");
  },
  null,
  true,
  "Asia/Colombo"
);
job.start();
