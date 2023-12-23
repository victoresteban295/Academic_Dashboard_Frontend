# Academic Dashboard: Frontend

## Table of Content
- [About Project](#about-project) 
  - [Product Vision](#product-vision)
  - [Development Stack](#development-stack)
  - [Project Structure](#project-structure)
- [Web Pages](#web-pages)
  - [Login Page](#login-page)
  - [Register Page](#register-page)
  - [Dashboard Page](#dashboard-page) 🚧
    - [Professor's Dashboard Page](#professors-dashboard-page) 🚧
    - [Student's Dashboard Page](#students-dashboard-page) 🚧
  - [Course Page](#course-page) 🚧
    - [Professor's Course Page](#professors-course-page) 🚧
    - [Student's Course Page](#students-course-page) 🚧
  - [Calendar Page](#calendar-page) 🚧
  - [Checklist Page](#checklist-page)
  - [Reminders Page](#reminders-page) 🚧 
  - [Error Handling](#error-handling)

## About Project
### Product Vision
For educational institutions looking to boost academic performance, Academic Dashboard is a web application that improves how students interact with course-related work assigned by professors. Unlike other similar products that are uniquely designed for a single institution, our software product was built to be adopted across different campuses and to provide a sense of familiarity to all students. Its built-in calendar, checklist, and reminders allows user to become more organized without the need to switch applications. 

### Development Stack
- [React](https://react.dev/) - Frontend Javascript Library for Building User Interfaces
- [Nextjs 13](https://nextjs.org/) - React Web Development Framework
- [Material UI](https://mui.com/material-ui/) - React Component Library
- [React Hook Form](https://react-hook-form.com/) - Form Management Library
- [Zod](https://zod.dev/) - Input Validation
- [Dnd-Kit](https://dndkit.com/) - Drag & Drop Toolkit for React

### Project Structure

```
src
├── app
├── components
├── lib
│   ├── actions
│   ├── schemas
│   ├── actions
│   └── utils 
│       └── 'page'
│           ├── frontend 
│           └── backend 
├── theme
└── middleware.js
```

- `app` directory - Nextjs Routes
- `components` directory - React Components
- `lib/actions` directory - Nextjs Server Actions
- `lib/schemas` directory - Zod Schemas
- `lib/utils/'page'/frontend` directory - Methods to Manipulate Data on the Client-Side
- `lib/utils/'page'/backend` directory - Fetch Methods Connects to REST API's Endpoints
- `theme` directory - Project's Custom Material UI Theme
- `middleware.js` file - Nextjs Middleware

## Web Pages

### Login Page
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/loginpage.png" />

### Features
- Homepage for logged-out users
- The "Create an Account" button redirects users to the register page
- The "Forgot Password" button redirects users to the change-password page
- Username and Password are required to login
- Entering the wrong username or password will alert users

  
