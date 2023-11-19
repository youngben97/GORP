# GORP
An app that allows the user to order custom trail mix.

# User Story

AS a fan of trail mix
I WANT to try find new mixes and come up with my own
SO THAT I can enjoy even more trail mix

# Acceptance Criteria

GIVEN a trail-mix-centric social app
WHEN I load the app
THEN I am presented with a description of the app(with picture) and a menu with the options to Explore Mixes and login/signup
WHEN I select login/signup
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, and email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account's email address and password and click on the login button
THEN the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Explore Mixes, Mix It Up, My Mixes, and Logout
WHEN I select Explore mixes
THEN I am presented with a list of user mixes, with each list item displaying the name of the mix, the creator, calorie count, protein, and an upvote count.
WHEN I select My Mixes
THEN I am presented with a list of mixes I have made
IF I don't have any mixes
THEN I am presented with a message to visit Mix It Up
WHEN I select a list item in Explore Mixes or My Mixes
THEN I am presented with a card that contains the name of the trail mix, an ingredient list, nutrition facts(see this for reference: https://www.nutritionix.com/food/trail-mix), a list of comments, and the option to upvote or leave a comment.
IF I am viewing a mix I made
THEN I am also presented with a button to delete or edit my mix (edit is stretch goal)
WHEN I select Mix it up
THEN I am presented with a card that contains an input box for the mix name, a dropdown box to select ingredients, and a nutritional calculator that responds to what ingredients I select.
WHEN I select an ingredient
THEN it appears in a list to the side of the main card and a save button appears at the bottom of the the card.
WHEN I save a mix
THEN I am presented with the message "Mix made!" and the option to make another.
WHEN I navigate to MY MIXES
THEN I see that my new mix has been added to the list
WHEN I click on the logout button
THEN I am logged out of the site and presented with the landing page along with a menu with the options Explore Mixes and Login/Signup.