# SportCal

A responsive web application calendar for sport events.

## Features

- List of sports events
- Add new events to the calendar
- Filter events by sport

## Tech Stack

- Next.js
- JS / TypeScript / React
- REST API
- PostgreSQL
- Ley for migrations
- Emotion CSS
- Jest for unit testing
- Playwright for E2E testing


## Screenshots

#### Home Page
![App Homepage](https://github.com/N2late/sport-events-calendar/blob/main/public/home_screenshot.png?raw=true)

#### Add Event
![App Add Event](https://github.com/N2late/sport-events-calendar/blob/main/public/addEvent_screenshot.png?raw=true)

#### Mobile
<img src="https://github.com/N2late/sport-events-calendar/blob/main/public/mobile_screenshot.png?raw=true" data-canonical-src="/N2late/sport-events-calendar/blob/main/public/mobile_screenshot.png?raw=true" width="200" height="400"/>

#### Database Schema

![Db Schema](https://github.com/N2late/sport-events-calendar/blob/main/public/database_schema.png?raw=true)

## Setup instructions

Clone the repository and install all dependencies

```bash
git clone https://github.com/N2late/sport-events-calendar.git
cd sport-events-calendar
yarn
```

## Setup the database by downloading and installing PostgreSQL

- Create a user and a database
- Create a .env file. Check .env.example file to see what info should be provided
- Copy the environment variables from .env-example into .env
- Replace the placeholders xxxxx with your username, password and name of the database
- Install dotenv-cli with yarn add dotenv-cli
- Run the migrations with yarn migrate up
- Start the server by running yarn dev.








