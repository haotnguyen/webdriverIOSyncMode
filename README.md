# webdriverIOSyncMode
This is a demo project on how to use WebdriverIO using Sync Mode (**Node version 14.17.5**).

**Before cloning this project to your local, make sure you have these requirements installed:**
  * Node version 14.17.5: If many node versions are installed, make sure system is using version 14.17.5. Else, please download [here](https://nodejs.org/en/).
  * Has basic knowledge about Javascript: OOP, basic function, Array method,...
  * Download and install [Jenkins](https://www.jenkins.io/download/). LTS version is recommended.
  
**After all reqruirements are met, clone the project.**

**After cloning, run this command to install all packages in package.json file:**
```
npm install
```

**To run all test file in spec folder run this command:**
```
npx wdio run ./wdio.conf.js
```

**To run specific test file, run this command:**
```
npx wdio run ./wdio.conf.js --spec <name of Test File>
```

**To run specific test suite, make sure variable "suites" is created in the project. Then run this command:**
```
npx wdio run ./wdio.conf.js --suite <Test suite name>
```

**To run a group of test cases, add the unique text in the description of those test cases. Then run this command:**
```
npx wdio run ./wdio.conf.js --mochaOtps.grep <unique text>
```
**Note:** This project demonstrates Web Aplication, to learn how to automate Mobile App using WebdriverIO, read more [here](https://webdriver.io/docs/api/appium/).

**If you have any questions, please contact me at: haotnguyen@kms-technology.com. If the response is too long, please contact me with my personal email: nguyentanhao2013@gmail.com**

**Note:** Node version above 14.17.5 must use Asyn Mode because of changing in Chromium. To know more about this and how to use Async Mode, please read [here](https://webdriver.io/docs/sync-vs-async).

**For more information, please check WebdriverIO [Home Page](https://webdriver.io/).**
