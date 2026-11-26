# Tint & Tone

A single-page portfolio app for Tint & Tone, a fictional paint company that customizes color, finish, and texture for interior and exterior spaces. Built with React and Vite.

## Features

- **Project list:** a landing page showing past projects as cards, each with an image, name, category, finish, description, and color swatches.
- **Add projects:** a form that adds a new project to the page immediately, with no reload.
- **Search:** filters projects as you type, by name, category, finish, or description.
- **Responsive design:** the sidebar, title, and card grid adapt from desktop to phone.

## Getting started

```bash
git clone <your-repo-url>
cd tint-and-tone-spa
npm install
npm run dev
```

Then open the local address shown in the terminal (usually http://localhost:5173).

## Project structure

```
src/
  components/
    projectCard.jsx   # one project card
    ProjectForm.jsx   # add-project form
    SearchBar.jsx     # search input
  data/
    projects.js       # starting projects
  App.jsx             # state, search filter, page layout
  index.css           # all styles
public/images/        # project photos
```

## How it works

- `App.jsx` holds the project list and the search text in React state.
- The form calls a function from `App` to add a project at the top of the list.
- The search input filters the list before it is displayed.

## Notes

- Projects added through the form live in memory, so they reset when the page is refreshed.
- Project images are used for educational purposes and credited to their original creators.
