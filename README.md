# Bedrock Bot ([Fork](https://github.com/PrismarineJS/bedrock-protocol))

## Features

- Chat
- Move (AutoMove with OwnerUsername)
- BreakBlock

## Installation

`git clone https://github.com/Zwuiix-cmd/Bedrock-Bot/`


# In start.js
## Connect

```js
start();
function start() {
    const Player = require('./player/Player');

    Player.connect("Username", "SERVER ADDRESS", 19132, "OWNER NAME");
}
```

### Chat

```js
start();
function start() {
    const Player = require('./player/Player');
    Player.connect("Username", "SERVER ADDRESS", 19132, "OWNER NAME");
    setInterval(function () {
        if(Player.getLastMessage().includes("YOUR MESSAGE")){
            Player.sendMessage("Response!");
            Player.resetMessage(); // RESET A LAST MESSAGE (AVOIDS REPETITION)
        }
    }, 1000*1);
    // 1000 = 1 second
}
```

### Move

```js
start();
function start() {
    const Player = require('./player/Player');
    Player.connect("Username", "SERVER ADDRESS", 19132, "OWNER NAME");
    
    // Player.moveTo(x, y, z);
}
```

## Testing

```npm test```

## Debugging

You can enable some protocol debugging output using `DEBUG` environment variable.
Through node.js, add `process.env.DEBUG = 'minecraft-protocol'` at the top of your script.
