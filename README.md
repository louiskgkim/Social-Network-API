# Social-Network-API

## Description
This is a API back-end database designed for social networking. As a command line application, that uses Mongoose, Express, and Moment to enable users to seamlessly view, create, update, and delete data from the database. Whether you prefer Insomnia or MongoDB Compass, this tool allows you to work with your social network data more efficiently and effectively.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demovideo)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation
Some files will be needed in order for this generator to operate:

- Insomnia
- MongoDB Compass
- npm i express @4.16.14
- mongoose @6.8.0
- moment @2.29.4


## Usage
1. Clone the repository
2. Open terminal in the right file path
3. Run npm init -y into terminal to create a new .json file
4. Run npm i into terminal
5. Run npm i express into terminal
6. Run npm i mongoose into terminal
7. Run npm i moment into terminal
8. Run npm start into the terminal
9. Once you see the now Listening indication, open up MongoDB Compass and Insomnia.

## Demo Video
- [Demo Video](https://drive.google.com/file/d/1KkXn56cNIBMwTgzsONWFjNWirejueDc5/view)

## Screenshots
GET /api/users
![GET :api:users](https://user-images.githubusercontent.com/115679155/226144020-5f1d1df7-aef1-40b4-970b-77635bf83b65.png)

GET /api/users/userID
![GET :api:users:userID](https://user-images.githubusercontent.com/115679155/226144023-8654cbfe-cd33-4211-9d2f-9dd783d06f9d.png)

POST /api/users
![POST :api:users](https://user-images.githubusercontent.com/115679155/226144026-af26d752-88bc-41c6-99e6-27c59ed72957.png)

PUT /api/users/userID
![PUT :api:users:userID](https://user-images.githubusercontent.com/115679155/226144028-ef9fd68f-441d-46d2-bc4e-8c7565094f1e.png)

DELETE /api/users/userID
![DELETE :api:users:userID](https://user-images.githubusercontent.com/115679155/226144031-1954713c-b1bf-4aaf-a78e-9fac3227fe97.png)

POST /api/users/userID/friends/friendID
![POST :api:users:userID:friends:friendID](https://user-images.githubusercontent.com/115679155/226144034-69766aed-15fa-4347-b4df-27c7e1aed3af.png)

DELETE /api/users/userID/friends/friendID
![DELETE :api:users:userID:friends:friendID](https://user-images.githubusercontent.com/115679155/226144035-8c076add-fedb-4e25-b2df-2678f20460e9.png)

GET /api/thoughts
![GET :api:thoughts](https://user-images.githubusercontent.com/115679155/226144037-b0d77ea7-e7f4-4624-8161-6cddfcc0f62d.png)

GET /api/thoughts/thoughtID
![GET :api:thoughts:thoughtID](https://user-images.githubusercontent.com/115679155/226144038-98895e84-35fa-43ab-ac44-a6082e30a6d7.png)

POST /api/thoughts
![POST :api:thoughts](https://user-images.githubusercontent.com/115679155/226144039-4922d21f-350a-4988-8258-7454ee48f234.png)

PUT /api/thoughts/thoughtID
![PUT :api:thoughts:thoughtID](https://user-images.githubusercontent.com/115679155/226144040-5d67a0d8-5a4a-40c8-bb85-d48e1c238fd6.png)

DELETE /api/thoughts/thoughtID
![DELETE :api:thoughts:thoughtID](https://user-images.githubusercontent.com/115679155/226144053-181da4e8-d0de-4c27-85af-8bf21650d402.png)

POST /api/thoughts/thoughtID/reactions
![POST :api:thoughts:thoughtID:reactions](https://user-images.githubusercontent.com/115679155/226144065-7dc0000e-0ae9-415d-83f0-2a41e41c4372.png)

DELETE /api/thoughts/thoughtID/reactions/reactionID
![DELETE :api:thoughts:thoughtID:reactions:reactionID](https://user-images.githubusercontent.com/115679155/226144073-59fa67cb-1ce2-459f-b2d4-a7078ac77705.png)

MongoDB Compass for socialnetworkDB
![SocialnetworkDB](https://user-images.githubusercontent.com/115679155/226144102-3ed72dd6-32cf-40d8-8b2f-62cef893b776.png)

MongoDB Compass for socialnetworkDB users
![Mongo users](https://user-images.githubusercontent.com/115679155/226144115-86ddcdda-90fe-4826-87eb-86df34dd2941.png)

MongoDB Compass for socialnetworkDB thoughts
![Mongo thoughts](https://user-images.githubusercontent.com/115679155/226144125-c30c8e16-2ad4-417f-a210-880ce0930673.png)


### Repository:
```
https://github.com/louiskgkim/Social-Network-API
```


## Credits

No collaborators for this project. But some references are listed below:

- [Node Installation Guide](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs/)
- [Express.js Installation Guide](https://expressjs.com/en/starter/installing.html)
- [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
- [Moment.js Installation Guide](https://momentjs.com/)
- [Mongoose Installation Guide](https://www.npmjs.com/package/mongoose)


## License

MIT License

Copyright (c) [2023] [Louis Kim]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
