# Library Management System

Yoobee Colleges Integrated Studio II Assesment 2

Team assignment completed by Alistair Trotter & Jordan Wall


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description
The project is a library information system designed to manage all the in-house functions of the client’s library. This system will be an online web application and its primary purpose is to allow the library's customers the ability to undertake the activity of browsing books at the library, checking them out, and returning them in an online space. This tool will improve the efficiency of library employees and members. 


### Administrator functionality
Administrators will be able to log into a administrative account where they will have the functionality to:
* Add New books to the catalogue
* Edit & remove books from the catalogue
* Edit & remove user accounts from the system
* View all overdue books
* View all loaned items
* View entire loan history 
* View all users
* Sign in / Sign out

### User Functionality

members of the library will be able to log into a standard user account where they will have the functionality to:
* View the libraries entire catalogue
* View the books that are currently checked out, on hold, or available
* Check out available books from the catalogue
* Request holds on books that are checked out
* Check out books they placed on hold once they are returned
* Return their checked out and overdue books
* View their profile
* View their entire loan history
* Edit their basic information
* View their books checked out
* View their books that are overdue
* View their books that are on hold
* Sign in / Sign out

## Technology Stack
React.JS
Json-server
Tanstack react query
Axios
Fuse.js
React Router


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder Structure:

* Library-Information-System
  * Data
    * db.json
  * node_modules
  * public
    * index.html
    * manifest.json
    * robots.txt
  * src
    * assets
      * images
        * arrow.png
        * bin.png
        * crossPrompt.png
        * emailPrompt.png
        * holdPrompt.png
        * profile_bg.png
        * tickPrompt.png
        userImage.png
    * components
      * Cards
        * CardLarge.jsx
        * CardMedium.jsx
        * CardPopup.jsx
        * CardSmall.jsx
        * CardStyles.css
      * Footer
        * Footer.css
        * Footer.jsx
      * Navbar
        * NavBar.css
        * NavBar.jsx
    * context
      * AuthContext.js
    * hooks
      * Auth.js
      * UseLocalStorage.js
    * pages
      * AddBook
        * AddBook.jsx
        * AddBookSuccess.jsx
      * Admin Catalogue
        * AdminBookItem.jsx
        * AdminCatalogue.jsx
      * AdminDashboard
        * AdminDashboard.css
        * AdminDashboard.jsx
      * Catalogue
        * BookItem.jsx
        * BookOnHold.jsx
        * Catalogue.jsx
        * LoanFailed.jsx
        * LoanSuccess.jsx
      * EditBook
        * BookEditSuccess.jsx
        * EditBook.jsx
      * EditProfile
        * ConfirmationFailed.jsx
        * EditProfile.jsx
        * EditSuccess.jsx
        * SendTempPass.jsx
      * LoanedBooks
        * LoanedBooks.jsx
        * LoanedItem.jsx
      * LoanHistory
        * LoanHistory.jsx
        * LoanHistoryItem.jsx
      * Login
        * Login.jsx
      * OverdueBooks
        * OverdueBooks.jsx
        * OverdueItem.jsx
        * UserContacted.jsx
      * Profile
        * ConfirmationFailed.jsx
        * EditPassword.jsx
        * EditSuccess.jsx
        * LoanHistory.jsx
        * LoanHistoryItem.jsx
        * PersonalInfo.jsx
        * Profile.jsx
      * SignUp
        * Signup.jsx
      * UserDashboard
        * BooksOnHold.jsx
        * CheckedOutItem.jsx
        * RequestHoldItem.jsx
        * ReturnSuccess.jsx
        * UserDashboard.jsx
        * UserOverdueItem.jsx
      * ViewUserProfiles
        * UserItem.jsx
        * ViewUserProfiles.jsx
    * App.css
    * App.js
    * App.test.js
    * index.css
    * reportWebVitals.js
    * setupTests.js
  * .gitignore
  * package-lock.json
  * package.json
  * README.md
