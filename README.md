# User Management Application

This project is a simple **User Management Application** built with React. It demonstrates how to fetch, display, and manage user data using JSONPlaceholder as a mock API. The app includes features like user listing, adding new users, editing existing users, and deleting users.

---

## Project Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps to Run the Project

1. Clone the Repository:
   ```bash
   git clone <repository-url>
   cd user-management-app
   ```

2. Install Dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the Development Server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Directory Structure

Here’s an overview of the project directory structure:

```
user-management-app/
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # Reusable React components
│   │   ├── UserList.js     # Component for displaying the list of users
│   │   ├── UserForm.js     # Component for adding/editing users
│   │   └── styles/         # CSS files for components
│   │       ├── UserList.css
│   │       └── UserForm.css
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point for the app
│   └── index.css       # Global styles
├── .gitignore          # Git ignored files and folders
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

### Key Components

1. **UserList.js**
   - Displays a table of users fetched from the API.
   - Includes functionality for deleting users.
   - Provides "Add User" and "Edit User" buttons to interact with `UserForm`.

2. **UserForm.js**
   - Handles user addition and editing functionality.
   - Includes form validation and API integration.

3. **Styles**
   - `UserList.css` and `UserForm.css` define responsive and user-friendly layouts using plain CSS with media queries.

---

## Challenges Faced

1. **API Constraints**:
   - JSONPlaceholder is a mock API, so changes (like adding or deleting users) are not persistent.
   - This limits the app's ability to fully demonstrate real-world data management.

2. **Handling Mock Data**:
   - The API structure required adjusting the data (e.g., splitting names into first and last names).
   - Managing nested objects like `company.name` added some complexity.

3. **Responsive Design**:
   - Designing a form layout that works seamlessly on both desktop and mobile devices required extra attention.

---

## Potential Improvements

1. **Backend Integration**:
   - Replace JSONPlaceholder with a real backend API to make data management persistent.

2. **State Management**:
   - Introduce a global state management tool like Redux or Context API for better scalability.

3. **Validation**:
   - Use a library like `Formik` or `React Hook Form` for more robust and reusable form validation.

4. **Improved UI/UX**:
   - Add modals for form interactions instead of navigating to a separate page.
   - Introduce a notification system for success/error messages.

5. **Testing**:
   - Add unit and integration tests using tools like Jest and React Testing Library to ensure reliability.

---

Thank you for checking out this project! Feel free to contribute or suggest additional improvements.

