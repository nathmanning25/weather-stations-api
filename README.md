## Description

The API provides access to weather station data from renewable energy facilities (solar farms, wind farms) operated by companies like Enel Green Power, NEOEN, AGL, and Atmos across different Australian states (VIC, SA, NSW, QLD).

## Project setup

```bash
$ npm install
$ npm run start:dev
docker-compose up   # Start in development mode

```

## Services

API: http://localhost:3000
pgAdmin: http://localhost:5050
PostgreSQL: localhost:5432

## Configuration

Development: Connects to localhost:5432 PostgreSQL
Docker: Connects to db service within Docker network
Database credentials: weather_user/weather_pass for weather_db

Connect to the database in pgAdmin:

Click "Add New Server"
General tab: Name it "Weather DB"
Connection tab:
Host: db (or localhost if connecting from outside Docker)
Port: 5432
Database: weather_db
Username: weather_user
Password: weather_pass

## Databases

PostgreSQL - Primary database for storing weather station and measurement data
TypeORM - Object-Relational Mapping for database interactions
MySQL2 & pg drivers - Database connectivity

## Endpoints

GET http://localhost:3000/weather-stations - All stations
GET http://localhost:3000/weather-stations?state=VIC - Filter by state
GET http://localhost:3000/weather-stations/states/all - All states
GET http://localhost:3000/weather-stations/1 - Specific station
