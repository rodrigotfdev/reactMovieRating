# Project Documentation for usePopcorn

The **usePopcorn** project is a React application designed to allow users to search and access movie information. Additionally, it provides functionality for users to add movies to their watched list while assigning personal ratings to each movie.

## Key Features

### Main Components

1. **`App` Component**: The primary component responsible for managing the core state of the application. It oversees movie queries, displays, management of watched movies, and interaction with the OMDB API.

2. **`NavBar` Component**: A navigation bar housing the logo and search box for discovering movies.

3. **`Search` Component**: An input component enabling users to search for movies.

4. **`NumResults` Component**: Provides a count of the results found after conducting a search.

5. **`Main` Component**: The principal component encapsulating the primary sections of the application.

6. **`Box` Component**: Utilized to create expandable sections within the interface.

7. **`MovieList` Component**: Displays the movies retrieved from the search, allowing users to select a movie for detailed viewing.

8. **`Movie` Component**: Renders basic movie information such as image, title, and year.

9. **`MovieDetails` Component**: Offers comprehensive details about a selected movie, including ratings, plot, cast, and more.

10. **`WatchedSummary` Component**: Summarizes statistics for watched movies, such as average rating, total watched movies, etc.

11. **`WatchedMoviesList` Component**: Lists the movies watched by the user.

12. **`WatchedMovie` Component**: Presents detailed information about a watched movie, including ratings and duration.

### Key Functionalities

✅ **Movie Search**: Users can search for movies based on their titles.

✅ **Movie Details**: Clicking on a movie in the search results displays specific details about that movie.

✅ **Add to Watched List**: Users have the capability to add movies to their watched list and assign personal ratings.

✅ **Display Watched Movies**: Watched movies are showcased along with details and ratings provided by the user.

## Code Structure and Logic

- **useState**: Used for managing states such as movie queries, displayed movies, watched movies, etc.
- **useEffect**: Handles side effects such as API calls, state updates, etc.
- **Local Storage**: Utilized for storing the list of watched movies persistently across sessions.

This project makes use of the OMDB API to retrieve movie details, employs React hooks for managing component states, and delivers an interactive interface for searching, viewing, and rating movies.

---

*Note: This documentation outlines the structure and functionalities of the project based on the provided code.*
