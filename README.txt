VS CODE: GO TO REFERENCES DEMO

1. Extract this ZIP file.
2. Open the extracted vscode_references_demo folder in Visual Studio Code:
   File > Open Folder...
3. Open src/app.js or src/calculator.js.
4. Click a symbol such as calculateTotal, TAX_RATE, or showReceipt.
5. Right-click the symbol and choose Go to References.
   Shortcut: Shift + F12
6. The References panel should show the places where that symbol is used.

Good examples to demonstrate:
- calculateTotal: declared in calculator.js and used in app.js and display.js.
- TAX_RATE: declared in calculator.js and used in app.js.
- showReceipt: declared in display.js and used in app.js.

Tip:
Use Go to References on calculateTotal in calculator.js to show references across multiple files.
You can also use Find All References from the context menu if that wording appears in your VS Code version.

To run the sample (optional):
Open a terminal in the project folder and run:
node src/app.js

This project uses JavaScript ES modules. A recent Node.js version is recommended.
