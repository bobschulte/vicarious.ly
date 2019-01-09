# vicarious.ly
*Travel planning, tracking, and sharing for backpackers, digital nomads, and their loved ones*

### Frameworks & Dependencies
##### NERP stack:
* Node.js
* Express
* React
* Postgres

##### State Management: Redux

##### Styling Library: Material UI

##### External API: Google Maps API's

##### Hardware: N/A

##### Other Dependencies:
* Sequelize
* Passport
* Body Parser
* Google Maps React
* Node HTML Parser
* Faker (for development environment)

### User Stories
The app will have two user categories:
1. Travelers - primary users of the app
    * As a Traveler, I can toggle my profile public/private, so that only desired people can follow me.

    * As a Traveler, I can invite others to follow me, so that they can view my whereabouts.

    * As a Traveler, I can "check in" to a city, so that the app renders relevant location-related content. ***ADD AN "EXPERIENCE"*** (content needs to be tied directly to the location, the experience would have its own location but also belong to a user)

    * As a Traveler, within a city I can input a restaurant/place of interest that I want to visit, so that my wish list will be populated. (boolean attribute)

    * As a Traveler, I can "check out" of a city when I leave, so that I can check into a new city and view relevant content for my new location.

    * As a Traveler, I can select cities and dates, so that I can build a loose travel itinerary/plan.


2. Followers - secondary users of the app
    * As a Follower, I can login, so that I can view the whereabouts and activities of Travelers I know.

    * As a Follower, I can leave a note/comment for a Traveler, so that the Traveler can see it.

### Features
##### Primary:
* Saved places exportable into a Google Maps list
* Google sign-in option
* use geolocation to prompt a user to change cities

##### Stretch:
* Tutorial for using the app
* Photo upload?