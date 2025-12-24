const commandInput = document.getElementById("commandInput");
const output = document.getElementById("output");
const commands = [
  "help",
  "clear",
  "whoami",
  "accounts",
  "about",
  "about-mt",
  "x9qt", // secret command
];

function printLine(text, isCommand = false) {
  const div = document.createElement("div");

  if (isCommand) {
    div.innerHTML = `<span class="prompt">Guest@MT:~$</span> ${text}`;
  } else {
    div.innerHTML = text;
  }

  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function executeCommand(command) {
  if (!command) {
    return;
  }

  printLine(command, true);

  if (!commands.includes(command)) {
    printLine(`Command "${command}" not found. Type "help" for a list.`);
  } else {
    if (command === "help") {
      printLine(
        "Available commands: help, clear, whoami, accounts, about, about-mt"
      );
    }
    if (command === "clear") {
      output.innerHTML = "";
    }
    if (command === "whoami") {
      printLine("MT's Guest");
    }
    if (command === "accounts") {
      printLine(
        '<a href="https://github.com/mtmtmtmtmtmtmtmtmtmtmtmtmtmtmtmtmtmtmt">GitHub</a> | <a href="https://www.youtube.com/channel/UCev4LZl_QOEp1w_o49H4Ing">Youtube</a> | <a href="https://www.reddit.com/u/PleaseCallMeMT">Reddit (InActive)</a> | <a href="https://discord.com/users/1438538902574075995">Discord</a> | <a href="https://roblox.com/users/10172446993/profile">Roblox</a> | <a href="https://www.instagram.com/mtmtmtmtmtmtmtmtmtmtmtmtmtmt/">Instagram (Private)</a> | <a href="https://osu.ppy.sh/users/38933390">Osu</a>'
      );
    }
    if (command === "about") {
      printLine("MT's personal terminal-style website. Created for fun.");
    }
    if (command === "about-mt") {
      printLine(
        `Hello, im MT, its pronounced as 'Em-Tee'. im a developer and content creator, im ${
          new Date().getFullYear() - 2010
        } years old. coding is my hobby but i would accept your project if its paid. i mainly code in typescript and rust. my native language is persian (farsi) but i mostly speak english online. my love for coding started when i was 7 years old and saw my first hacking movie, since then i always wanted to learn how to code but of course since i was just a kid and my brain was barely developed i couldn't understand anything from it, once i turned 13 i started learning html css javascript from <a href="https://sabzlearn.ir/">sabzlearn</a> (when i was learning their courses were free but i believe now they're paid ) it taught me a lot about programming and helped me a lot, if you know persian a highly recommend it, welp, thats all i have to say, hope we meet again and until then, have a great day/night, also, as a reward for reading until here, this site has a secret command, good luck finding it :>`
      );
    }
    if (command === "x9qt") {
      printLine(
        `<span style="color: #ff0000ff;">i was born disabled and i had to go through 20 surgeries to be able to walk.</span>`
      );
    }
  }
}

commandInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = commandInput.value.trim();
    executeCommand(cmd);
    commandInput.value = "";
  }
});
