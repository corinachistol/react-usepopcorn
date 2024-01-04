import { useState } from "react";

//structural components
export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

//presentational component, stateless
export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

//statefull compo
export function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)} />
  );
}

//presentational compo
export function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
