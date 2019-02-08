# Wedding Site

vBeloved is your one-stop-shop for all things wedding planning

## Getting Started

For this project, you will need your own Stripe API keys. You can sign up for a Stripe account here: https://dashboard.stripe.com/register

### Front-End Setup
After cloning this respository to your local machine, `cd` into the `front-end` folder and run `yarn install` to install all needed dependencies.<br/>
Set up a front-end .env file with the following environment variables, and replace the value for `REACT_APP_STRIPE_API_KEY` with your own key.<br/>
    ```
    REACT_APP_LOCAL_URL='http://localhost:8888'
    REACT_APP_LOCAL_CLIENT='http://localhost:3000'
    REACT_APP_STRIPE_API_KEY='your-key-here'
    ```<br/>
We used PORT 8888 for our server and PORT 3000 for our app, but you can replace these with whatever you wish.<br/>
To start the development app, run the command `yarn start`.


### Back-End Setup
In a separate terminal, `cd` into the `back-end` folder and run `yarn install` to install all needed dependencies.<br/>
Set up a back-end .env file with the following environment variables, and replace the value for `STRIPE_TEST_KEY` with your own key.<br/>
    ```
    LOCAL_URL='localhost:8888'
    LOCAL_CLIENT='localhost:3000'
    STRIPE_TEST_KEY='your-key-here'
    ```<br/>
To run the development server, run the command `yarn server`.


## Front-End Dependencies

### Material-UI
https://material-ui.com/

### Ant Design
https://ant.design/

### Axios
https://github.com/axios/axios

### Chart.js
https://github.com/reactjs/react-chartjs

### React Chart.js 2
https://github.com/jerairrest/react-chartjs-2

### Next
https://github.com/zeit/next.js/

### React
https://reactjs.org/

### React Bootstrap
https://react-bootstrap.github.io/

### React Draggable
https://www.npmjs.com/package/react-draggable

### React Dropzone
https://react-dropzone.netlify.com/

### React Images
https://jossmac.github.io/react-images/

### React Materialize
https://react-materialize.github.io/#/

### React Moment Countdown
https://www.npmjs.com/package/react-moment-countdown

### React Perfect Scrollbar
https://www.npmjs.com/package/react-perfect-scrollbar

### React Photo Gallery
https://github.com/neptunian/react-photo-gallery

### React Responsive Modal
https://www.npmjs.com/package/react-responsive-modal

### React Router
https://reacttraining.com/react-router/

### React Router Bootstrap
https://github.com/react-bootstrap/react-router-bootstrap

### React Router Dom
https://www.npmjs.com/package/react-router-dom

### React Spring
https://react-spring.surge.sh/

### React Stripe Elements
https://github.com/stripe/react-stripe-elements

### React Swipeable Views
https://github.com/oliviertassinari/react-swipeable-views

### Styled Components
https://www.styled-components.com/


## Back-End Dependencies

### Bcryptjs
https://www.npmjs.com/package/bcryptjs

### Body Parser
https://www.npmjs.com/package/body-parser

### Cors
https://github.com/expressjs/cors

### CSV Parse
https://www.npmjs.com/package/csv-parse

### Dotenv
https://www.npmjs.com/package/dotenv

### Express
https://expressjs.com/

### Faker
https://www.npmjs.com/package/faker

### Knex
https://knexjs.org/

### Multer
https://www.npmjs.com/package/multer

### Mysql (Production)
https://www.mysql.com/

### Passport
http://www.passportjs.org/

### Passport Google OAuth 2.0
https://github.com/jaredhanson/passport-google-oauth2

### Sqlite3 (Development)
https://www.npmjs.com/package/sqlite3

### Stripe
https://stripe.com/docs/api?lang=node


## Third-Party APIs

### Stripe

Platform that handles secure user payments. | https://stripe.com/

### Google OAuth

Authentication through Google OAuth 2.0 | https://developers.google.com/identity/protocols/OAuth2

## Media

Images through https://www.pexels.com/, and https://unsplash.com/
