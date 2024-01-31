import "./platform.scss";

const Platforms = () => {
  return (
    <div className="Platform-container">
      <div className="Container-title">
        <div>Top Platform</div>
        <div style={{ color: "#34CAA5" }}>See All</div>
      </div>
      <div className="Container-info">
        <div className="Info-item">
          <label>Book Bazaar</label>
          <progress value="65" max="100"></progress>
          <p>
            $2,500,000 <span>+15%</span>
          </p>
        </div>
        <div className="Info-item">
          <label>Artisan Aisle</label>
          <progress value="55" max="100"></progress>
          <p>
            $1,800,000 <span>+10%</span>
          </p>
        </div>
        <div className="Info-item">
          <label>Toy Troop</label>
          <progress value="45" max="100"></progress>
          <p>
            $1,200,000 <span>+8%</span>
          </p>
        </div>
        <div className="Info-item">
          <label>XStore</label>
          <progress value="35" max="100"></progress>
          <p>
            $600,000 <span>+5%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
