* Package Manager:
Q-1:What is a package manager?
Anser: A package manager is a tool for developers to install, manage,maintain, externallibraries or packages.
Example: npm is a default package manger

Q-2 Why do we need package managers in backend development?
Answer: When we build real projects we use external packages to reuse there code in our projects instead of writing everything from scratch.Like react,axios,express.tailwind,ets.., are external packages.
A package manager helps us get them, keep them organized,keep correct versions and update them safely.

Q-3 Problems faced if package managers are not used.
Answer: When we build modern applications, we depend on many external libraries (React, Express, Axios, etc.).If we do not use a package manager, managing these libraries becomes very difficult and risky.
Problems faced if package manager are not used:
1. Everything Must Be Done Manually:
-Without a package manager, the developer has to:
-search for required libraries on the internet
-download files manually
-copy them into the project
-connect them properly
-repeat the same process for every dependency of that library
This wastes time and increases chances of mistakes.

2. Version Confusion and Errors:
-Different libraries need different versions of the same dependency.
-Without a package manager:
-You cannot easily track which version is required
-One library may stop working after another library update
-Bugs appear suddenly and are hard to fix
With a package manager, versions are handled and locked automatically.

3. Teamwork Becomes Difficult:
When multiple developers work on the same project:
*Without package manager:Everyone must manually install the same files in the same order — which often fails.
*With package manager:Everyone just runs npm install and the project is ready.
This keeps the whole team on the same setup.

4. Inconsistent Results Across Systems:
Without a package manager, the project might:
-work on one computer
-fail on another computer
-crash in production
This happens because dependencies are not consistent.
Package managers ensure the project behaves the same everywhere.

5. Security Risks:
Many libraries may contain security issues.
*Package managers:
-detect vulnerable packages
-warn developers
-allow quick updates
Without them, our application becomes unsafe.

6. Difficult Updates and Maintenance:
Updating libraries manually:
-delete old files
-replace new ones
-hope nothing breaks
With a package manager using -npm update(command)
Everything stays organized and tracked.

7. Slow Project Setup:
New developer joining our team:
Without package manager → setup takes hours
With package manager → setup takes minutes

* NPM(Node Package Manager)
Q-1: What is NPM?
Answer:NPM (Node Package Manager) is the default package manager for Node.js.
It is a tool that allows developers to:
-download external libraries (called packages)
-install them into their project
-manage their versions
-update them easily
-remove them when not needed
NPM also provides an online registry where millions of JavaScript packages are stored.NPM is like an app store for Node.js projects.

Q-2:Why is NPM important for Node.js applications?
Answer: Node.js applications are not built with just plain JavaScript.
They heavily depend on external libraries such as:
-Express
-Axios
-Mongoose
-JWT
-bcrypt
-React (for frontend projects)
Without NPM, managing all these libraries manually would be very difficult.
NPM is important because it:
  1. Saves development time:Developers don’t have to write everything from scratch.
  2. Makes projects scalable:Large projects with hundreds of dependencies become manageable.
  3. Ensures consistent environment:The project behaves the same on all computers.
  4. Improves collaboration:Team members can set up projects quickly with one command.
  5. Keeps projects secure and updated:NPM warns about security issues and outdated packages.

Q-3:How NPM helps in manging dependies?
Answer: A dependency is any external package our project needs to work.
NPM manages dependencies using these main components:
1. package.json:
This file stores:
-project information
-list of dependencies
-required versions
Example:"dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
    }

2. node_modules folder:
This folder contains:
-all installed packages
-sub-dependencies of each package
NPM automatically builds this entire structure. 

3. package-lock.json:
This file locks the exact versions of every package to ensure the project works the same everywhere.

4. NPM Commands
Command	Purpose
npm install:	installs all dependencies
npm install axios:	adds a new dependency
npm uninstall axios:	removes a dependency
npm update:	updates packages
npm audit:	checks security issues

Dependency Resolution:When we install a package, NPM automatically:
-finds required sub-dependencies
-downloads correct versions
-avoids conflicts
-builds a complete dependency tree
All of this happens without manual effort
     * NPM is the backbone of modern Node.js development
     It simplifies dependency management, ensures stability, improves security, and enables fast collaboration.

* Backend Project Initialization:
Q-1: What is the command used to initialize a backend (Node.js) project?
Answer: the command used to initialize a backend (Node.js) project is npm init.
Q-2 Explain what npm init and npm init -y do.
Answer: When we run npm init ion terminal, NPM asks several question like:
- project name
- version
- description
- entry file
- author
- license
After we answer them, NPM creates a packacge.json file based on our inputs.This file stores:
- project information
- dependies
- scripts
- configuration
npm init sets up our node.js project and prepares it for dependency mangement.

When we run npm init -y in terminal it does the same thing as npm init but automatically without asking any questions.
This is useful when we want fast setup.

* Files and Folders Created After Project Initialization:
Q-1: Explain the purpose and importance of:
- package.json
- node_modules
- package-lock.json
Also mention:
- Which files/folders should not be pushed to GitHub and why?
- Which files must be committed and why?
Answer: After running npm init and installing packages, three very important things appear:
- package.json
- node_modules/
- package-lock.json
1. package.json:
This is the main configuration file of your Node.js project.It contains:
- Project name, version, description
- Scripts to run the app
- List of dependencies required for the project
Example:"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.0.0"
}
It tells NPM:
- what your project needs
- how your project should run
Without package.json, NPM cannot manage your project.

2. node_modules/ folder:
This folder contains all installed libraries and their internal dependencies.Every package you install using npm install goes inside node_modules.
It allows your application to run because the actual code of dependencies lives here.

3. package-lock.json:
It records the exact versions of every dependency and sub-dependency installed.
This guarantees:
- same versions
- same behavior
- same results on every machine
It prevents “it works on my computer” problems.

- Q: Which files/folders should not be pushed to GitHub and why?
Answer:node_modules should not be pushed to Github because it is extremely large in size, it can be recreated anytime using npm install, it makes repository slow and messy.Instead of it we add it to .gitignore.

- Q: Which files must be committed and why?
Answer: package.json and package-lock.json must be committed ti github because package.json defines project structure, it lists required dependencies, allows others to install dependencies and package-lock.json locks exact dependency versions and ensures consistent builds across all systems.

After initializing a Node.js project, package.json manages project configuration and dependencies, node_modules contains installed packages, and package-lock.json locks exact dependency versions.
node_modules should not be pushed to GitHub because it is large and can be regenerated.
package.json and package-lock.json must be committed to ensure consistent dependency management and project setup.
