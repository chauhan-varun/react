import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import usePrev from "../../hooks/usePrev";
import useDebounce from "../../hooks/useDebounce";

function HooksDemo() {
  // useFetch example
  const { data: userData, loading } = useFetch("https://jsonplaceholder.typicode.com/users/1");

  // usePrev example
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  // useDebounce example
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for:", debouncedSearchTerm);
      // In a real app, you would fetch search results here
      setSearchResults([`Result for "${debouncedSearchTerm}"`]);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Hooks Demo</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3>useFetch Example</h3>
        {loading ? (
          <p>Loading user data...</p>
        ) : (
          <div>
            <p><strong>User:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>usePrev Example</h3>
        <p>Current count: {count}</p>
        <p>Previous count: {prevCount !== undefined ? prevCount : 'None yet'}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>useDebounce Example</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search..."
          style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
        />
        <p><small>Search will run 500ms after you stop typing</small></p>
        <div style={{ marginTop: '10px' }}>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          ) : (
            <p>No search results</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HooksDemo;
