# Server Control
Server control is a small project intended to give sysads, devs, etc. easier way to run commands on their servers. 

## Story Behind
I was deploying a NodeJS application on a shared web hosting server that uses Cpanel. Using the UI I ran the application just fine and a script that crashed and made not to stop the application.
I came to conclusion that there's a `node` deamon process running in the backgoroud and I had to kill it in order to stop the app and delete it and that's where the app came from.

##  How to use

1. Clone the repo and navigate to the folder.
```bash
git clone https://github.com/abdelsalamshahlol/Server-Control.git
```
2. Install node dependencies. 
```bash 
 npm i 
```
3.  Create `.env` file and define the port for the app to use.
4. Send HTTP request to your server.

## Endpoints

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|  Endpoint              |HTTP Method          |Request Body     | Use                         |
|------------------------|---------------------|-----------------|-----------------------------|
|`https://yourdomain.com:6969`| `POST`         |**command** ` e.g: `ls, dir`| **Runs** command and returns result|
|`https://yourdomain.com:6969/commands`| `GET`         |N/A| Returns list of **commands** based on server system (Linux or Windows)|
|`https://yourdomain.com:6969`| `GET` |N/A| Returns the server **Operating System** e.g. Linux, Windows, etc.|