# Color Flipper

This is a simple web application that allows users to change the background color of the page by either selecting from a predefined color palette or by entering a hex color code. The project is built with HTML, CSS, and JavaScript.

## Features
- Users can click on color buttons to instantly change the background color to red, orange, black, blue, or yellow.
- Users can input a custom hex color code (e.g., #FF5733) to change the background color.
- The app validates the hex code entered by the user, ensuring it follows the correct format.

## Technologies Used
- **HTML**: For structuring the content of the page.
- **CSS**: For styling the page and color buttons.
- **JavaScript**: For the functionality of changing the background color and validating user input.

## How to Use
 1. Clone the repository:
   ```sh
   git clone https://github.com/Abhimannu09dev/Begineers-JS/color-flipper.git
   ```
2. Open the `index.html` file in a web browser.
3. You will see a color palette with color buttons and an input field for entering a hex code.
4. Click on any of the color buttons to change the background color.
5. To apply a custom color, enter a valid hex code (e.g., `#ff5733`) in the input field and click the "Apply" button.
6. The background will change to the entered color if it's valid.

## Code Explanation

- **HTML Structure**: The page contains two sections:
  - The first section allows the user to enter a hex code to apply a custom color.
  - The second section contains predefined color buttons for quick selection.
  
- **CSS Styling**: The buttons are styled to reflect their respective colors, and the background of the body changes based on the button clicked or the hex code entered.

- **JavaScript Functionality**:
  - The `Apply` button listens for clicks, retrieves the hex code from the input field, and changes the background color of the page if the code is valid.
  - Each color button has an event listener that changes the background color of the body to the respective color when clicked.
  - Special handling is included for dark colors (black) to adjust the text color for better readability.

## Example

When the user clicks on the "Blue" button:
- The background color of the page changes to blue.
- The button borders turn white for better visibility.

## Requirements
- A modern web browser that supports JavaScript and CSS.
  
## License
This project is open-source and available for personal and educational use.
