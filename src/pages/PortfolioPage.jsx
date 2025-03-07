import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import SoundCloudPlayer from "../components/SoundCloudPlayer";

const genres = ["All", "Accoustic", "Dubstep", "Jazz", "Pop", "Progressive", "Sundanese"];

// eslint-disable-next-line no-empty-pattern
const PortfolioPage = ({ }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:1000/portfolios");
        console.log("Fetched portfolios:", response.data); // 🔹 Debugging output
        setPortfolios(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching portfolios:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPortfolios();
  }, []);
  

  const filteredPortfolios =
    selectedGenre === "All"
      ? portfolios
      : portfolios.filter((item) => item.genre === selectedGenre);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="homePage portfolio">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-3" style={{ letterSpacing: "2px" }}>
                Portfolio
              </h1>
            </Col>
          </Row>
          <Row className="mb-4 text-center">
            {genres.map((genre) => (
              <Col key={genre}>
                <Button
                  variant={selectedGenre === genre ? "success" : "outline-success"}
                  onClick={() => setSelectedGenre(genre)}
                  className="m-1"
                >
                  {genre}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="header-content g-4">
            {filteredPortfolios.map((item) => (
              <Col key={item.id} sm={6} md={4}>
                <div className="video-card shadow-sm rounded p-3 bg-dark text-light">
                  <h4 className="fw-bold my-2 text-uppercase" style={{ letterSpacing: "2px" }}>
                    {item.name}
                  </h4>
                  <SoundCloudPlayer embedUrl={item.link} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
};

PortfolioPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default PortfolioPage;