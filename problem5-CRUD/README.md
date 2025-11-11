# Backend CRUD Server Project (Express.js + TypeScript + Prisma)

This is a simple backend server that provides CRUD (Create, Read, Update, Delete) APIs for managing a "Task" resource.

## Technologies Used

-   **Node.js**
-   **Express.js**
-   **TypeScript**
-   **Prisma**
-   **SQLite**

## Configuration

1.  **Install dependencies:**
    
    npm install
    

2.  **Database Migration:**
    Run the following command to create the SQLite database file (dev.db) and the tables (based on prisma/schema.prisma):

    npx prisma migrate dev --name init
    

## How to Run the Application

After installation and database migration, run the server in development mode:


npm run dev