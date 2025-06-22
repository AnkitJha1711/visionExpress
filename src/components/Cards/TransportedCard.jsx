import React from "react";
import "../../styles/AvailableTransporters.css";

const TransporterCard = ({ transporter }) => {
  const { orgName, transporterName, description, rating, quotationPdf, image, eta, estimatedCost } = transporter;

  return (
    <div className="transporter-card">
      <img src={image} alt={orgName} className="transporter-img" />
      <h2>{orgName}</h2>
      <div className="transporter-name">Transporter: {transporterName}</div>
      <p className="description">{description}</p>
      <p className="eta"><strong>ETA:</strong> {eta}</p>
      <p className="cost"><strong>Estimated Cost:</strong> {estimatedCost}</p>
      <div className="card-actions">
        <a href={quotationPdf} target="_blank" rel="noopener noreferrer" className="btn-pdf">View Quotation</a>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star ${star <= Math.round(rating) ? "filled" : ""}`}>★</span>
          ))}
          <span className="rating-number">{rating}</span>
        </div>
      </div>
      <button className="book-btn">Book Now</button>
    </div>
  );
};

export default TransporterCard;
