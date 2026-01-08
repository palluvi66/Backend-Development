1. Node.js Architecture:
- Javascript Engine(V8): JavaScript Engine allows javascript to execute code in the browser.Every programming language needs an engine to execute there code in the browser as browser's backend does not have th same language in their backend to understand their code.So Javascript engine is V8 which converts Javascript code into the language which is used in the browser's backend.

- Node.js Core APIs: Node.js Core APIs are built-in modules provided by Node.js. We don't need to install them we can use them directly by import/export method in ECS(modern way) and can also use by using require() in CJS(common js: traditional way).
Example: fs,os,htttps, events,etc, are the example of node.js core apis.

*Examples how to use Node.js Core APIs in ECS:
import os from 'os';
writeFile('./anu.txt', 'Hello, Welcome to Javascript')

*Example how to use Node.js APIs in CJS(common js):
const fs = require('os')
writeFile('data.txt','utf-8','Hi, I am Data',()=>{})

- Native bindings: Native bindings is the connection between Javascript code and C/C++ code inside Node.js.
Node.js is written mostly in C/C++, but we write code in Javascript. Native binding is the layer that lets Javascript talk to that low-level C/C++ engine.

We need Native binding because Javascript is slow for low-level system tasks. C/C++ is very fast and can directly access OS,memory,CPU,files. So, Node.js uses C/C++ for filesystem, networking, crypto,streams,event loops
And native bindings connect them to javascript.

- Event Loop: Event Loop is a process in Node.js that allows it to perform operations asynchronously, without blocking other operations to execute which are ready to execute using a single thread.Node.js has multiple tasks to handle at the same time but it has only one main thread so it sends time taking to be processing in callback Queue and allow ready to execute tasks to be executed first till the remaining task is being processed and then executes the other task.

It works Like:Call Stack -> Web APIs -> Callback Queue -> Event Loop -> Call Stack

2. Libuv
- What is libuv?
Answer: libuv is a C library that provides Node.js with an event loop and asynchronous I/O capabilities.It is the engine under the hood that makes Node.js non-blocking,asynchronous,fast and scalable.
JavaScript alone cannot do this — libuv makes it possible.

- Why Node.js needs libuv?
Answer: Javascript is single-threaded, it cannot handle file system, network, or OS tasks efficiently.Node.js wants something that can handle the required tasks such as can manage background threads, communicate with the OS,schedules async tasks and runs the event loop.Libuv solves all this problem. Without libuv node.js would be slow, blocking, and useless for servers.

- Responsibilities of libuv: 
  - libuv is responsible for management of: Event Loop,  thread pool, Asynchronous I/O handling, OS Interaction, Timer Handling

3. Thread Pool: 
- What is a thread pool?
Answer: A thread pool is a group of background worker threads that execute heavy or blocking tasks so the main thread stays free.Node.js itself runs javascript on one thread, but it uses a thread pool (from libuv) to offload expensive work.

- Why Node.js uses a thread pool?
Answer: Node.js uses thread pool because it handles execution of heavy and blocking tasks and prevent from freezing the event loop. So, Node.js sends them to the thread pool and continues handling requests. Without the thread pool - Node.js would block and loose performance.

- Which operation are handled by the thread pool?
Answer: Main operations handled by the thread pool are :
   FileSystem Operations, Crypto Operations, DNS Operations, Compression

4. Worker Threads:
- What are worker threads?
Answer: Worker thread are seperate threads in Node.js that allow running Javascript code in parallel to the main thread.Worker thread was introduced in Node.js v10.5.0. Workers thread is useful for CPU-intensive tasks. Each worker thread has its own event loop, memory, and V8 instance.
   
- Why are worker threads needed?
Answer: Node.js is single-threaded for JS, so CPU-intensive tasks block the main thread: 
   - image processing 
   - Video encoding
   - Large JSON computations
   - Complex algorithms

Without worker threads event loop freezes and server becomes unresponsive.With worker threads heavy tasks run in parallel and main thread remains free for input and output.

- Difference between thread pool and worker threads
Answer: Thread pool handles I/O in background; worker threads run JS computations in parallel.

5. Event Loop Queues:

- Macro Task Queue:
Answer: Macro tasks are scheduled to run after the current stack is empty.These tasks are executed after the current executing code completes.Event loop picks them one by one in each iteration.
Examples: timers- setTimeOut(),setIntervals()
          Input/Output callbacks- fs.readFIle(),network requests
          setImmediate- setImmediate()

- Micro TAsk Queue
Answer: Micro tasks are executed before the macro task, immediately after the current stack finishes.They have higher priority than macro tasks.They are executed in the same tick of event loop.
Example: Promise callback- Promise.then(), Primise.catch(),Promise.finally()

- Execution priority between Macro tasks and Micro tasks:
Answer: Micro tasks always run first before any macro task.Macro tasks wait until micro tasks are done.