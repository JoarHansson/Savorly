# Savorly

A web application that simplifies cooking by decluttering recipes. Users can access clean, distraction-free recipes, save them, and organize their favorites. Built with **Next.js** and **TypeScript**.

## Features

- 🧹 **Declutter Recipes**: Remove unnecessary content and focus on ingredients and instructions.  
- 📂 **Save, Edit & Organize Recipes**: Manage your favorite recipes in one place.  


## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js**
- **npm**, **yarn** or similar


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JoarHansson/Savorly.git
   cd Savorly
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Install playwright browsers and dependencies

   ```bash
   npx playwright install && npx playwright install-deps
   ```

4. Set up the environment:

Create a `.env` file in the root directory and include the necessary environment variables:
- `DATABASE_URL` and `DIRECT_URL`, for database connection (We use [Supabase](https://supabase.com/) - easy to setup)
- `NEXTAUTH_SECRET` for NextAuth (A hash used to encrypt the JWT)
- `NEXTAUTH_URL` for app URL (`http://localhost:3000` for development)

### Running the app

Run the development server:

   ```bash
   npm run dev
   ```

Visit http://localhost:3000 to see the app in action.

### Technologies used

- **Next.js**: Framework for server-rendered React applications.
- **Prisma**: Database ORM.
- **NextAuth**: Authentication library.
- **Playwright**: Web scraping.
- **TypeScript**: For type-safe code.
- **Mantine**: UI library.

### License

This project is licensed under the MIT License.
