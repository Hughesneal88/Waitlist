# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Setting Up the Server and Frontend

### Server Setup
1. Navigate to the server directory:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm run start
    ```
4. The server should now be running on `http://localhost:5000` (or the port specified in your configuration).

### Frontend Setup
Open a new terminal in the parent directory for the repository
1. Install dependencies:
    ```bash
    npm install
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```
3. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite) to view the application.

You will need to connect a mongo database. To do that:
1. Create a new mongodb account
2. Create a database on the website
3. Copy the connection string
4. Put the connection string in `server/.env` as `MONGO_URI=CONNECTION-STRING`
