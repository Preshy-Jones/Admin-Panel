# Application routes

Login page /login
Users Page /users
User details page : /users/user-details/:id

# Pages:

## Dashboard

### Users:

- Description:
  Loads users data from a mock api, displays a table skeleton loading state while the data is being fetched. Pagination is also implemented to navigate between certain number of users per page, a select box to change the number of users displayed per page ranging from 10,20,50,100 and 500. A popover modal can also be toggled for each user record to link to page displaying the user details.

- Components:

  - Table
  - Pagination
  - Stats

### Userdetails:

Loads a user's data from a mock api using the id passed as a route parameter, displays several information about the user and a button to go back to the users page.

- Components:
  - Summary
  - User bio stats
  - Userdetails table

### Login

A simple login page with a form to enter email and password, a button to submit the form and a link to go back to the users page. A button under the password input field can also be toggled to show or hide the password.

