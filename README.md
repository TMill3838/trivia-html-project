# 🤖Transformers Trivia Game
A little trivia game with random transformers with an easy and hard mode now featuring a login system

Date Started: April 8, 2026

# 📃Authorship
Code was developed by <a href="https://github.com/TMill3838">Tylan Miller</a>
Tools: HTML5, CSS3, JavaScript, Bootstrap 5.0.2
Images sourced from TFWiki along information

©️ All characters belong to Hasbro



# 👾Game Objective
Testing a player's knowledge in Transformers media 

# ℹ️Game info
User can either login or play as a guest 
Once in the game click the right answer until the trivia is finished

Easy Mode: 5 Questions

Hard Mode: 10 Questions

Hard Mode scores more points

# ❗Changes
A login feature was installed

# 🥚EASTER EGG
Type in Autobot or Decepticon as a username

# 📃Logins
user: Autobot | password: TillAllAreOne

user: Decepticon | password: PeaceThroughTyranny

note: Must be typed exactly

# Links
Repo: https://github.com/TMill3838/trivia-html-project

Page: https://tmill3838.github.io/trivia-html-project/

Dev Page: https://github.com/TMill3838

HTML Validator: https://validator.w3.org/nu/?doc=https://tmill3838.github.io/trivia-html-project/

WAVE Checker: https://wave.webaim.org/report#/https://tmill3838.github.io/trivia-html-project/

# ⚠️Concerns
I have discvoered that the GCP link to my repository does not save any recent changes made prior to the GitHub link. This may cause for an outdated webpage to be loaded instead of the updated webpage.

I have failed to correct the issue as it seems to have provided some problems with updating the GCP Github link. I refollowed the steps on the fix however the link did not update.

The error being I could not delete my cloned GitHub link despite redoing the steps.

I apologize in advance for not being able to correct this issue.

# ⌨️Code Snippets

```js
 const body = document.body;
        body.classList.remove('theme-autobot', 'theme-decepticon');

        if (currentPlayer.toLowerCase() === "autobot") {
            body.classList.add('theme-autobot');
        } else if (currentPlayer.toLowerCase() === "decepticon") {
            body.classList.add('theme-decepticon');
        }
```
This snippet of code allows for the user to input a specific set of words to triggr a change in colors for the interface.

