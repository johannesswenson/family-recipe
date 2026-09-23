# Family Recipe

Family Recipe is a full-stack recipe application built as a personal development project.

The goal of the project is to explore modern web development with Next.js and TypeScript while building something practical that can be used to collect and share family recipes.

## Features

* Create and view recipes
* Add ingredients and cooking instructions dynamically
* Server-side form validation
* User-friendly validation and error handling
* Persistent recipe data using Prisma and a relational database
* Automatic recipe slugs for readable URLs

## Tech stack

* **Next.js** – React framework and application structure
* **TypeScript** – Type-safe application code
* **Prisma** – Database ORM
* **PostgreSQL** – Relational database
* **React** – Interactive form components
* **Git & GitHub** – Version control and development workflow

## What I'm exploring

This project is also a way for me to learn and practice full-stack development.

Some of the areas I'm currently working with include:

* Server Actions in Next.js
* Form handling and validation
* Client and server component boundaries
* Database modelling and persistence
* Error handling
* Dynamic form fields
* Accessible and user-friendly form interfaces
* Git branches, pull requests and code review workflows

## Screenshots

*Screenshots will be added here.*

## Getting started

### Prerequisites

* Node.js 22
* PostgreSQL

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd family-recipe
npm install
```

Set up the required environment variables in `.env`, generate the Prisma client, and apply the database migrations:

```bash
npx prisma generate
npx prisma migrate deploy
```

Start the development server:

```bash
npm run dev
```

The application will then be available at:

```text
http://localhost:3000
```

## Project status

Family Recipe is an ongoing personal project.

The core recipe creation flow is currently being developed, with additional features and UX improvements planned.

## Future plans

Some ideas for future development include:

* Recipe editing and deletion
* Image uploads
* Recipe categories and filtering
* Improved recipe browsing
* Authentication and user accounts
* Sharing recipes with family members

---

Built as a learning project with Next.js, TypeScript and Prisma.
