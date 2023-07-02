## Node/Typescript Microservices Template

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

This template is designed to kickstart your Node.js microservice development with a robust set of features and tools. This template utilizes Typescript for type-safety, MongoDB for data storage, Eslint for code linting, Prettier for code formatting, and Awilix for dependency injection.

By using this template, you'll ensure that your microservice has a solid foundation of best practices and scalability right from the get-go.

### Features:

- **Typescript**: Enables strong type-checking which can prevent many trivial bugs in your code.
- **MongoDB**: A NoSQL database that provides high performance, high availability, and easy scalability.
- **Eslint**: A tool to identify and fix problems in your JavaScript code.
- **Prettier**: An opinionated code formatter, ensuring that your code is consistently formatted.
- **Awilix**: A Dependency Injection library for JavaScript/Typescript, helping you to manage your dependencies in a clean and efficient manner.

### Getting Started

#### Prerequisites

- Node.js >= 16.x
- Yarn or NPM (Package Manager)

#### Clone Repository

Clone this repository to your local machine and change into the directory.

```sh
git clone https://github.com/YOUR_USERNAME/node-typescript-microservice-template.git
cd node-typescript-microservice-template
```

#### Install Dependencies

Install the dependencies using Yarn or NPM:

Using Yarn:

```sh
yarn install
```

Using NPM:

```sh
npm install
```

#### Configuration

Before running the service, make sure you have set the necessary environment variables or have a `.env` file with the following variables:

```makefile
# Server
NODE_ENV=dev
PORT=3000
LOG_LEVEL=debug

# Database
DB_HOST=127.0.0.1
DB_DATABASE=dnName
DB_USER=
DB_PASSWORD=
DB_PORT=27017

# Logger
LOGFLARE_API_KEY = xxx
LOGFLARE_SOURCE_TOKEN = xxxx-xxxx-xxxx-xxxx-xxxxxxxx
```

#### Running the service

After configuration, run the service using:

```sh
yarn start
```

#### Development mode

For development purposes, you might want to watch for changes and recompile. You can do this by running:

```sh
yarn dev
```

### Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/MemoryGlow/node-ts-template/issues) if you want to contribute.

### License

This project is licensed under the MIT License. See `LICENSE` for more information.

### Contact

[Danny Almeida](mailto:danny89@zoho.com)
