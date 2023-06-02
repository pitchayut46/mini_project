
# GOT7

This web application is a fan club platform for Got7, South Korean boy band. It provides various features to enhance the fan experience and interact with other fans.


## Features

| Feature                                           | Description                                                                                                      |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Information about the group members               | Provides biographies, photos, and social media links for each member of Got7.                                    |
| User interaction                                  | Enables users to interact with each other through chat rooms, forums, or social media integration.                 |
| Got7 discography                                  | Displays a comprehensive list of Got7's albums, singles, and music videos.                                        |
| Music playback                                    | Allows users to listen to Got7's music through embedded audio players or links to popular music streaming services. |
| Tour dates and ticket sales information           | Provides information about upcoming tour dates and links to purchase tickets.                                     |

## To run the frontend and backend

### FrontEnd / BackEnd

```
npm start
```

## API Name: Verify User Token

**HTTP Method:** GET

**Endpoint:** `/api/verify-token`

**Requirements:**
- Middleware: The request must contain a valid JWT token in the "user" cookie.

**Response:**
- Success Response (200 OK):
  - Body:
    ```json
    {
      "success": true,
      "message": "User is logged in"
    }
    ```

- Error Responses:
  - Invalid Token (401 Unauthorized):
    - Body:
      ```json
      {
        "success": false,
        "message": "Invalid token"
      }
      ```
  - Expired Token (401 Unauthorized):
    - Body:
      ```json
      {
        "success": false,
        "message": "Token has expired"
      }
      ```
  - User Not Logged In (401 Unauthorized):
    - Body:
      ```json
      {
        "success": false,
        "message": "User is not logged in"
      }
      ```


## API Name: User Login

**Endpoint:** /api/login

**HTTP Method:** POST

**Requirements:**
- Request body parameters:
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.

**Response:**
- Success Response (200 OK):
  - Body:
    ```
    {
      success: true,
      message: "Login credential is correct"
    }
    ```

- Error Responses:
  - Username Not Found (200 OK):
    - Body:
      ```
      {
        success: false,
        message: "Username not found in the system"
      }
      ```

  - Incorrect Login Credential (200 OK):
    - Body:
      ```
      {
        success: false,
        message: "Login credential is incorrect"
      }
      ```

  - Server Error (200 OK):
    - Body:
      ```
      {
        success: false,
        data: null,
        error: <error message>
      }
      ```


## API Name: Create User

**Endpoint:** /api/create-user

**HTTP Method:** POST

**Requirements:**
- Middleware: None
- Request Body Parameters:
  - `username` (string): User's username
  - `password` (string): User's password
  - `email` (string): User's email

**Response:**
- Success Response (200 OK):
  - Body:
    ```
    {
      success: true,
      message: "User has been created"
    }
    ```

- Error Response (400 Bad Request):
  - Body:
    ```
    {
      success: false,
      data: null,
      error: "Error message"
    }
    ```
  - Description: Returns an error message if there was an issue creating the user.
