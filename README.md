# Rock, Paper, Scissors, Lizard, Spock

- Rock, Paper, Scissors, Lizard, Spock is a game of chance that is an extended version of the traditional game Rock, Paper, Scissors. This extended version increases the choices from three to five options. This game was first seen in the television show The Big Bang Theory where two of the main characters, Sheldon and Raj, use this to settle a dispute in deciding what to watch on television.
- This game is a brilliant decision maker for families, friends and colleagues and the benefit of playing against the computer is that the results of your opponent are completely random and therefore are always impartial and unpredictable.

## Features

### Header

- Within the header at the top of the page the title of the website: Rock, Paper, Scissors, Lizard, Spock can be seen along with an image illustrating the game itself.
- The font colour stands out clearly from the background and can be easily seen. The font colour also matches the background colour in the image which sets up the website well.

### Game Options

- The options area consists of an instruction to tell the user to make a choice from the five interactive buttons as their options: Rock, Paper, Scissors, Lizard or Spock. These interactive buttons allow them to be selected by a user to confirm their choice.
- These buttons are also interactive that the border on these buttons when hovered over increases in size making it very clear for the user to see which option they are considering.

### Game Choices

- When the user selects their option it is displayed as a choice below the buttons with a label saying My Choice:.
- As a result of the user selecting their option the JavsScript Code has been programmed to display a computer choice. This was done by generating a random number between 1 and 5 and assigning the values from 1 to 5 to each of these options. The computer choice is displayed simultaneously with the users choice.
- By displaying both the users choice and computer choice it is very clear to the user who has chosen what option.

### Game Results

- Below the choices there is a Result area. This area displays the winner of the game.
  -The JavaScript code has been programmed with an event listener so that at the same time the user selects their o ption, their choice and the computer choice displays and the result of who won the game displays in an understandable format, for example, 'Lizard poisions Spock'. Each potential user and computer choice has been assigned so that a result displays for every choice including if both the user and computer select the same option.

### Game Scores Tally

- This function is called simultaneously with all of the above functions. The JavaScript code has been programmed to match each possible option the user could select with each option the computer could select and added a score to either the computer or the user based on the outcome. The code also includes adding a score to both the user and the computer if the users selection matches the computer one.

### Tries Remaining

The tries remaining function has been set up by targeting the total number of tries remaining which begin at 10. The function then decreases the tries remaining by 1 after each selection the user makes until the tries remaining reaches 1. After the last attempt has been made a pop up alert appears stating 'GAME OVER, please try again :D'. Once this message display the page then reloads to reset the game and make it available to play once again.

### Display Winner

### Footer

- The footer continues the style of the page with the same font and background colour to maintain uniformity throughout this webpage.
- The footer contains the rules of Rock, Paper, Scissors, Lizard, Spock so that the user can refer to these rules to understand the scoring of this game and to provide clarity.

## Features Left to Implement

- When I have more time I may expand this game further by trying to display the choices the user and computer select as the buttons that are selected as users choice, so that a button displays rather than words so that it may appear clearer for the user and may provided further interactivity to the game.
- I also had seen a tutorial which utilised emojis for user options to select which I would like to expand on further for this project in time.

## Testing

- I have tested the game on the following different browsers: Google Chrome, Safari and Mozilla Firefox and the game works as expected on each.
- The results are always correct and the correct message displays as a result.
- The scores are increasing for the user and the computer as expected.
- The tries remaining is tallying correctly.
- The alert messages are appearing when they should with the correct message.
- I have verified that the header, footer, choices, results and tries remaining are all displaying as expected and are easy to understand for all users.
- The colours selected for the background colours and fonts are easy to read and the contrast is sufficient so that it can be easily read. I validated my thoughts by running the webpage through Lighthouse in DevTools.
- I am pleased to say this webpage is responsive and works well on all screen sizes. I have added a media query to allow for the resizing of the header image on smaller screen widths.

## Bugs

### Solved Bugs

- I found that when I ran the triesRemaining function that it would call 'GAME OVER' when there was still one try left remaining. I temporarily solved this issue by setting the code to execute when tries === -1 however I had a feeling this still wasn't correct.
- I noted that I had used tries-- instead of the --tries for this function.
- In using tries-- the code was executing the value and it was reading the value after the increment so it was jumping ahead of the code as opposed to when it was changed to --tries the value was read correctly as it was reading the value after the decrement.

## Validator Testing

### HTML

- I ran the HTML code through the W3C Markup Validation Service and no errors were found.

### CSS

- I ran the CSS code through the W3C CSS Validation Service and no errors were found.

## Unfixed Bugs

- There are no unfixed bugs.

### Deployment

- This site was deployed through GitHub by completing the following steps:
- Sign into GutHub
- From homepage select on repository to be deployed
- From repository select Settings
- On the settings page select Pages from the menu of the left of the page
- On the GitHub Pages under Build and Deployment ensure source reads Deploy from a Branch and branch drop down menus read main and root respectively
- Select Save
- It may take a few moments for the wedpage to be deployed and for a box to appear under GitHub pages but once it appears the link can be copied and used as needed.
- The live link can be found

### Credits

- The set up and design of this website was bassed upon the Love Maths and Ultimate Rock, Paper, Scissors webpages to get a idea for how the webpage should operate and be set up. From here I added my own styling, JavaScript functions and HTML code.
- I watched the following [video tutorials](https://www.youtube.com/watch?v=RwFeg0cEZvQ)(https://www.youtube.com/watch?v=fIBOydve2f8) on YouTube for ideas on how best to go about creating a Rock, Paper, Scissors, Lizard, Spock Game and also how best to expand the game from its basic features.
- I used this [Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win) to help with the triesRemaining function in order to get the page to reload and reset once the 10 tries had been attempted by the user.
- I used fonts from [Google Fonts](https://fonts.google.com/)
- I used [Coloors](https://coolors.co/) to source a colour that would match with the background colour in the header image to maintain consistency in the website.
- I sourced the icons for Rock, Paper, Lizard, Spock from [Font Awesome](https://fontawesome.com/v5/search).
- I sourced the header image for the webpage from [Google Images](https://www.google.com/imghp?hl=en&ogbl) from Vertex Graphics.
