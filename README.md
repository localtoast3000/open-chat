## React Native Template

Welcome to this React Native template, tailored for developers looking to jumpstart their mobile app development journey with the power of TypeScript and the styling capabilities of NativeWind.

### TypeScript

TypeScript brings static typing to JavaScript, enhancing code quality, readability, and reducing potential runtime errors. By integrating TypeScript, this template ensures a more robust codebase right from the start.

### NativeWind

NativeWind is a utility-first CSS framework for building custom UI components and layouts in React Native. It brings the power and flexibility of utility-first CSS (like TailwindCSS) to the React Native ecosystem. With NativeWind, you can rapidly prototype and build mobile interfaces with reusable classes.

## Scripts

This React Native template provides a set of utility scripts to streamline your development process. Below is a description of each script:

- **rename-project-win**: 
  - Executes the `rename-project.bat` script located in the `./scripts/shell/` directory.
  - Use this on Windows to rename your project.

- **rename-project-unix**: 
  - Makes the `rename-project.sh` script executable and then runs it.
  - Use this on Unix-like systems (e.g., Linux, macOS) to rename your project.

- **clean-android**: 
  - Cleans the Android build, removes the `node_modules` directory, and reinstalls the project dependencies.
  - Useful for resolving build-related issues on Android.

- **clean-ios**: 
  - Deletes the iOS build, reinstalls the iOS pods, removes the `node_modules` directory, and reinstalls the project dependencies.
  - Useful for resolving build-related issues on iOS.

- **exports-gen**: 
  - Executes a node script to generate exports for various source directories.
  - Helps in organizing and managing imports in your project.

- **type-check**: 
  - Runs the TypeScript compiler to check for type errors.
  - Ensures type safety in your project.

- **link-assets**: 
  - Links assets for your React Native project.
  - Ensures that all your static assets (like images) are correctly linked and accessible.

- **reactotron**: 
  - Sets up a reverse connection for Reactotron on Android.
  - Useful for debugging with Reactotron.

- **android**: 
  - Runs your React Native project on an Android device or emulator.

- **ios**: 
  - Runs your React Native project on an iOS device or simulator.

- **lint**: 
  - Runs ESLint on your project to check for code quality and style issues.

- **start**: 
  - Starts the React Native Metro bundler.

- **reset-cache**: 
  - Starts the React Native Metro bundler with cache reset.
  - Useful when facing caching issues.

- **test**: 
  - Runs Jest tests for your project.

## Exports Generator CLI Utility

- class ExportsGenerator
- Searches for all ES6 export default modules within the given directory
- and generates an exports directory with an index file containing
- all export statements of the default exports at the same directory.
- Support for JavaScript and TypeScript.
  
####   Example 1:
 - Result at given directory path /directory
 -    + /directory-1
 -         module-1.ts
 -         module-2.ts
 -         module-3.ts
 -           + /exports
 -             index.ts
 -  Content in index.ts:
 -  export { default as Module1 } from '../module-1'
 -  export { default as Module2 } from '../module-2' e
 -  export { default as Module3 } from '../module-3'

 ####  Example 2:
 -  Result at given directory path /directory
 *-    -- + /directory-2
 *-    ------ + /module-1
 *-    ---------- index.jsx
 *-    ------ + /module-2
 *-    ---------- index.jsx
 *-    ------ + /module-3
 *-    ---------- index.jsx
 *-    ------  + /exports
 *-    ----------- index.js
 *-  Content in index.ts:
 *-  -------- export { default as Module1 } from '../module-1'
 *-  -------- export { default as Module2 } from '../module-2'
 *-  -------- export { default as Module3 } from '../module-3'
 *-  <--------------------------------------------------------->
 *-  It will only generate an exports file on either root level export default modules or one level down
 *-  sub-directorys containing an export default module named index.
 *-  <--------------------------------------------------------->
 *- Valide file types are:
 *- ------------ .js
 *- ------------ .jsx
 *- ------------ .ts
 *- ------------ .tsx
 *- <---------------------------------------------------------->
 *- An exports file will only be generated if all valid file types are of one type, so if there are js files with ts files
 *- the exports file will not be generated and a conflict error will be displayed in the console.
 *- Any other file that is not ts, tsx, js or jsx will be ignored.

### Overview

This script provides a CLI interface to the `ExportsGenerator` class. It allows you to generate export files for directories directly from the command line or via npm scripts.

### How to Use

1. **Setup**:
   - Ensure the script has execute permissions.
   - Place the `ExportsGenerator` class file in the same directory as this script or adjust the `require` path accordingly.

2. **Run Directly**:
   - From the command line, navigate to the directory containing the script.
   - Run the script using:
     ```
     ./exports-generator-cli.js <path1> <path2> ...
     ```

3. **Run via npm scripts**:
   - Add the script to your project's `package.json` scripts section. For example:
     ```json
     "scripts": {
       "exports-gen": "node scripts/exports-generator-cli.js src/pages"
     }
     ```
   - Run the script using npm:
     ```
     npm run exports-gen
     ```

4. **Multiple Paths**:
   - You can provide multiple directory paths separated by spaces. The script will generate export files for each directory.
     ```
     npm run exports-gen src/pages src/lib
     ```

### Notes

- If no paths are provided, the script will display an error message and provide usage instructions.
- For each provided path, the script will create an instance of `ExportsGenerator` and call its `generate` method to produce the export files.
- If you want to update the export files later, simply run the command again.






