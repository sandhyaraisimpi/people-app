# Angular People Management Application

This is a single-page application built with Angular 7/8 to manage a list of people. The application allows users to view, edit, and delete person records through a user-friendly interface.

## Features

- **List of People**: View all people in a structured list format.
- **Edit Person**: Modify the details of a selected person.
- **Delete Person**: Confirm and delete a person from the list.

## Project Structure

The project is organized as follows:

```
angular-people-app
├── e2e                     # End-to-end testing files
├── src                     # Source files for the application
│   ├── app                 # Main application module
│   │   ├── components      # Components for listing, editing, and deleting people
│   │   ├── services        # Service for handling API requests
│   │   ├── app-routing.module.ts  # Routing configuration
│   │   ├── app.component.ts       # Root component
│   ├── assets              # Static assets
│   ├── environments        # Environment configurations
│   ├── index.html         # Main HTML file
│   ├── main.ts            # Entry point for the application
│   ├── styles.scss        # Global styles
├── angular.json           # Angular CLI configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd angular-people-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:
```
ng serve
```
Then, open your browser and navigate to `http://localhost:4200`.

## Testing

To run unit tests, use:
```
ng test
```

For end-to-end tests, use:
```
ng e2e
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.