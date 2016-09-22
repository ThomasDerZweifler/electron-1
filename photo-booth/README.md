# electron

electron is a framework developed by Github to create native standalone apps using web technologies like HTML, Javascript and CSS.

This example is a Photo Booth app. It has the following features
- Show a video of the person
- Capture a photo
- Save it in a file location
- Delete a photo
- Have multiple image filters
- Creating a menu and actions

This was created following one of the chapters in the Pluralsight Tutorial **_"Electron Fundamentals"_**

## Steps
- Download the app
- Go to the desired folder and run npm install
- npm start will lauch the app
- npm run build will create the necessary files for launching as an app

## Notes
- On windows it may not build for Mac. Gives the following error: Cannot create symlinks; skipping darwin platform.
  Can download ConEmu and run as Admin. No execute the build it should work else try the command
  .\node_modules\.bin\electron-packager . --out=dist/osx --platform=darwin --arch=x64 - This builds to output directory dist
- npm install electron-packager rimraf -D might not work. Try npm install electron-packager rimraf --save-dev
- npm run build might not work. Try npm build or npm run build again.
