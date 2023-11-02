# password-genny
a password generator

# 03 JavaScript: Password Generator

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
``

to do
 --design genny w/ html and css
    --create box to hold the following elements
        ALREADY THERE--add no input text field for password generation
        ALREADY THERE--add button to generate password
        DONE--add buttonn to copy password
        DONE--have fun with colors
        --consider other fun design choices

 --build genny w/ javascript
    --set up a series of prompts for the following criteria
        --lowercase
        --uppercase
        --numbers
        --special characters
        --length of at least 8 characters
