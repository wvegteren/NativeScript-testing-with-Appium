# NativeScript testing with Appium

Here you can find the slides and demo code that I used for my talk at the NativeScript Developer Day Europe 2017.

Before running the demo tests you should ...

 1. Build the demo app using ```tns build ios```  and  ```tns build android```
 1. Check ```demo/e2e/config/appium.capabilities.json``` and ajust the file to match the emulators/simulators you want to use
    
To run the testcases use 
```bash
npm run e2e -- --runType <desired capability>
``` 
where ```<desired capability>``` is one of your emulators in ```appium.capabilities.json```
For example 
```bash
npm run e2e -- --runType sim.iPhone6.iOS-10.3
```


Enjoy !