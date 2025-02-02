import { FormEvent, useRef } from "react";
import { Form } from "react-bootstrap";
import { useFetchImages } from "./utils";

const App = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const { images } = useFetchImages(searchInput.current?.value);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchInput.current?.value);
  };

  const handleSelection = (selection: string) => {
    if (searchInput.current) {
      searchInput.current.value = selection;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      <div className="filters">
        <div onClick={() => handleSelection("nature")}>Nature</div>
        <div onClick={() => handleSelection("birds")}>Birds</div>
        <div onClick={() => handleSelection("cats")}>Cats</div>
        <div onClick={() => handleSelection("shoes")}>Shoes</div>
      </div>
      {images.length > 0 && (
        <div className="images">
          {images.map((image: any) => (
            <img
              key={image.id}
              src={image.urls.regular}
              alt={image.alt_description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
