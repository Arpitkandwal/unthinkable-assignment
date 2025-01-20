This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Created An Recipe Generator Application to generate savouring recipe ideas in just One Click!

## Approach
 ## 1) Objective:
- Build a user-friendly web application that generates recipes based on user-provided inputs like ingredients, category, difficulty level, and cooking time. Optionally, users can upload images for more personalized experiences.

## 2) Frontend:

- Framework: Utilize React.js to create a dynamic and responsive user interface.
- User Input Handling:
- Accept user input for ingredients (prompt) via a text box.
- Provide dropdown menus for selecting recipe preferences such as:
- Category: Vegan, Vegetarian, Non-Vegetarian.
- Difficulty: Easy, Medium, Hard.
- Cooking Time: 15 min, 30 min, or 45 min+.
- Enable image uploads via file input for optional recipe customization.
- Dynamic Recipe Display:
- Render generated recipes dynamically as cards.
- Include save functionality with local storage to persist saved recipes.
- Loading State:
- Display a loading animation while the backend processes the recipe generation.

  
## 3) Backend:

- API Integration:
- Use a POST API (/api/generate) to send user input (ingredients, preferences, and images) to the backend for processing.
- Recipe Generation Logic
- Recipe Saving
- Implement local storage to allow users to save their favorite recipes:

## 4) Image Upload Handling:

- Enable multi-image uploads.
- Accessibility and User Experience
- 
## 5) Error Handling:
Display meaningful error messages in case of API failure or invalid user input.
Ensure the application remains stable with proper error boundaries.

## 6) Tech Stack:
- NextJs, TailwindCSS.

  
## 7) Future Enhancements:

Integrate AI/ML models to generate more personalized recipes based on uploaded images and ingredients.
Implement user authentication to save recipes across devices.
Enable cloud storage for image uploads.
Add a search and filter functionality to browse saved recipes.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
