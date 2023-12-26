# Academic Dashboard

## Table of Content
> 🚧 Under Development
- [About Project](#about-project) 
  - [Product Vision](#product-vision)
  - [Development Stack](#development-stack)
  - [Project Structure](#project-structure)
- [Web Pages](#web-pages)
  - [Login Page](#login-page)
  - [Register Page: Academic Institution](#register-page-academic-institution)
  - [Register Page: Profile](#register-page-profile)
  - [Register Page: Review](#register-page-review)
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
For educational institutions looking to boost academic performance, Academic Dashboard is a web application that improves how students interact with course-related work assigned by professors. Unlike similar products that are uniquely designed for a single institution, our software product was built to be adopted across different campuses and provide all students with a sense of familiarity. Its built-in calendar, checklist, and reminders allow users to become more organized without switching applications. 

### Development Stack
- [React](https://react.dev/) - Frontend Javascript Library for Building User Interfaces
- [Nextjs 13](https://nextjs.org/) - React Web Development Framework
- [Material UI](https://mui.com/material-ui/) - React Component Library
- [React Hook Form](https://react-hook-form.com/) - Form Management Library
- [Zod](https://zod.dev/) - Input Validation
- [Dnd-Kit](https://dndkit.com/) - Drag & Drop Toolkit for React
- [Icons8](https://icons8.com/) - Provided Icons Used In Project

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

### Register Page: Academic Institution
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/acadinstitpage.png" />

### Features
- Each academic institution will have a unique identification code for students and professors
- Zod and React Hook Form are used to collect and validate user input for all forms
- Errors will be thrown if: 
    - The identification code doesn't match the profile type (professor/student)
    - Users provided the wrong identification code

### Register Page: Profile
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/profilepage.png" />

### Features
- Students and professors will be presented with the same 'Personal Information' and 'Account Information' Form
- Students will be presented with a 'Student Information' Form
- Professors will be presented with a 'Professor Information' Form
- Input Validation checks if the email, phone or username provided are already taken

### Register Page: Review 
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/reviewpage.png" />

### Features
- Allows users to review all the information they've provided before submitting and creating an account
- Users can revisit and edit any inputed information

### Checklist Page
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/checklistpage.png" />

### Features
- Users can create checklists to keep track of todo items
- Each checklist can be made up of checkpoints and subpoints
- Checklists can be organized into groups
- Checkpoints and subpoints can be marked as Complete or Incomplete
- "My Checklists" right-side menu is composed of two sections
    - Non-grouped checklists
    - Groups with their corresponding checklists
- Groups, checklists, checkpoints, and subpoints all have draggable functionality to allow users to re-organize them
- Users have the following constraints
    - 20 Non-grouped checklists
    - 20 Groups
    - 20 Checklists under a group

## Error Handling
<img align="center" src="https://github.com/victoresteban295/Academic_Dashboard_Frontend/blob/main/public/images/readme/errorhandling.png" />

### Common Errors Academic Dashboard Handles
- Users attempting to access unauthorized or nonexistent pages are met with a 404 (Not Found) Page
- A popup alert will be displayed to users who’ve reached a constraint (eg. exceeded the number of checklists allowed per user)
- An error page displaying a 500 status code will be shown to users attempting to access a web page during an Internal Server Error (eg. loses communication with REST API's endpoint)
- If a Internal Server Error occurs after the web page has loaded, a popup alert will be displayed any time new changes are made
- If an Internal Server Error occurs after the web page has loaded, a popup alert will notify users about the error each time they attempt to make any changes.

