# &#128640; Launchbreak  &#128752;
Launchbreak is a MERN-stack application for launch lovers and space fanactics. 

Using real-time data from two robust APIs, the idea is that Launchbreak is somewhere you can visit on your lunchbreak (or whenever) and catch up on recent space news and upcoming launches in just a few clicks.

![launchbreak-mockup](https://user-images.githubusercontent.com/98293872/235309568-a75dbab7-8c03-4b1c-b04b-e5f2635823e8.png)


## Technologies Used
- React.js
- TailwindCSS
- Node.js
- Mongoose
- Express.js
- Flowbite
- jwt-simple
- vite
- country-flags-svg


## Installation Instructions
No need to install, as this app is hosted and live on Heroku [HERE](https://launchbreak.herokuapp.com/).

If you'd like to fork the repo, you'll need to set up an `.env` file at the root level like this:

```
PORT='<PORT_FOR_BACKEND_SERVER>'
MONGODBURI='<YOUR_MONGODBURI>'
JWT_SECRET_KEY='<YOUR_JWT_KEY>'
```

Both the [Launch Library API](https://ll.thespacedevs.com/docs/) and [Spaceflight News API](https://api.spaceflightnewsapi.net/v4/documentation/) are FREE and do not require a key to access. However, the Launch Library is subject to rate limiting of 15 calls per hour for non-authenticated requests. Please use [THIS](https://lldev.thespacedevs.com/docs/) for dev testing by simply removing 'dev' from links in the useEffects in the App component and all DetailPage components. 

## User Stories
- As a space enthusiast, I want to be able to easily find upcoming rocket launches so that I can plan to watch them live or online.
- As a fan of space fanatic, I want to be able to browse through news articles related to space so that I can stay informed on the latest discoveries and developments.
- As a curious learner, I want to be able to read detailed information about each space mission, including crew members and objectives, so that I can expand my knowledge about space exploration.


## Wireframes
[Figma File](https://www.figma.com/file/c5LCXxIIhAaIRdMJU0wonK/Launch-Break-Wireframes?node-id=0%3A1&t=jL5RdWMsaq4mtmci-1)

## Hurdles
- Had some struggles getting JWT implemented. In my comments controller, the userId tied to comments failed validation because the operation was comparing a returned object to a string, even though the tokens matched. 
- Because the launchId was quite long, I tried using the 'slug' from the launch object for the url displayed in the browser. To do this I needed to save the slug as an id and use the actual launchId set the detail page each time the card was clicked. Doing this caused problems on page refreshes, and I was unable to use useParams. I ended up refactoring to just use the id.

## Unsolved Problems
- Nothing unsolved as much as they are next steps...

## Next Steps
- Build out user model for account page, have the ability to create a watchlist for upcoming launches
- Pagination/infinite scroll the index pages
- Change the launch time and date to a countdown clock
- Create a dropdown filter the index pages by using different API endpoint query params
- Intro animation for home page
- Improve UI and how data is displayed
- And more!