# Ben 10 API

A RESTful API for retrieving information about aliens and characters from the Ben 10 cartoon series. This API allows users to fetch detailed information and attributes for each character and alien.

## Live Link App

You can access the live API at: [Ben 10 API](http://ben10restapi-fl6k4l0g.b4a.run/)

## Available Routes

### Aliens

- **Get All Aliens**
  - **Route:** `/api/alien`
  - **Method:** `GET`
  - **Description:** Retrieve a list of all aliens.

- **Get Random Alien**
  - **Route:** `/api/alien/random`
  - **Method:** `GET`
  - **Description:** Retrieve a random alien.

- **Get Alien by ID**
  - **Route:** `/api/alien/id/:id`
  - **Method:** `GET`
  - **Description:** Retrieve an alien by its specific ID.
  - **Example:** `/api/alien/id/1`

### Characters

- **Get All Characters**
  - **Route:** `/api/character`
  - **Method:** `GET`
  - **Description:** Retrieve a list of all characters.

- **Get Random Character**
  - **Route:** `/api/character/random`
  - **Method:** `GET`
  - **Description:** Retrieve a random character.

- **Get Character by ID**
  - **Route:** `/api/character/id/:id`
  - **Method:** `GET`
  - **Description:** Retrieve a character by its specific ID.
  - **Example:** `/api/character/id/1`

## Usage

To use this API, make HTTP GET requests to the appropriate routes listed above. The API will return JSON data containing the requested information.

### Example Request using JavaScript Fetch

```javascript
// Get Random Alien
fetch('http://yourapiurl/api/alien/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
