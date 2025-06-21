// src/pages/AvailableTransporters.jsx
import React from "react";
import TransporterCard from "../components/Cards/TransportedCard";
import "../styles/AvailableTransporters.css";
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";


  const transporters = [
  {
    orgName: "SwiftTrans Logistics",
    transporterName: "Rajesh Kumar",
    description: "We specialize in long-haul cargo and fast delivery across India.",
    rating: 4.5,
    quotationPdf: "/quotations/swifttrans.pdf",
    image: "data:image/jpeg;base64,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",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "NorthEast Hauliers",
    transporterName: "Pema Tamang",
    description: "Expertise in mountainous terrain logistics and secure packaging.",
    rating: 4.2,
    quotationPdf: "/quotations/northeast.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "CargoExpress Pvt Ltd",
    transporterName: "Anjali Mehta",
    description: "Fast and reliable transport with refrigerated and container trucks.",
    rating: 4.7,
    quotationPdf: "/quotations/cargoexpress.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "SouthWay Movers",
    transporterName: "Muthu Krishnan",
    description: "Leading transporter in South India with temperature-controlled trucks.",
    rating: 4.3,
    quotationPdf: "/quotations/southway.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "UrbanFreight Solutions",
    transporterName: "Karan Bhatt",
    description: "Focused on intra-city quick logistics with 24/7 support.",
    rating: 4.1,
    quotationPdf: "/quotations/urbanfreight.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "ExpressLink Cargo",
    transporterName: "Simranjeet Singh",
    description: "Fast cargo movement pan-India with excellent safety standards.",
    rating: 4.6,
    quotationPdf: "/quotations/expresslink.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "HighLand Logistics",
    transporterName: "Tashi Norbu",
    description: "Specialized in border area and high-altitude logistics operations.",
    rating: 4.4,
    quotationPdf: "/quotations/highland.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "DesertLine Transporters",
    transporterName: "Imran Sheikh",
    description: "Trusted cargo service across Rajasthan and western regions.",
    rating: 4.0,
    quotationPdf: "/quotations/desertline.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "GreenRoute Hauliers",
    transporterName: "Neha Patil",
    description: "Eco-friendly logistics using electric and hybrid cargo vehicles.",
    rating: 4.8,
    quotationPdf: "/quotations/greenroute.pdf",
    image:"/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "SteelTrack Freight",
    transporterName: "Amit Dey",
    description: "Heavy-load and industrial cargo specialists with pan-India coverage.",
    rating: 4.3,
    quotationPdf: "/quotations/steeltrack.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "BlueSky Logistics",
    transporterName: "Ravi Thakur",
    description: "Air-conditioned cargo delivery with real-time tracking features.",
    rating: 4.6,
    quotationPdf: "/quotations/bluesky.pdf",
    image:"/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  },
  {
    orgName: "MetroMove Transport",
    transporterName: "Shalini Reddy",
    description: "Top-rated urban and semi-urban cargo movers with competitive pricing.",
    rating: 4.5,
    quotationPdf: "/quotations/metromove.pdf",
    image: "/public/assets/Transporter Images/swifttrans.jpg",
    eta: "2-3 days",
    estimatedCost: "₹8,500"
  }
];

const AvailableTransporters = () => {
  return (
    <div className="transporter-page">

      <h1>Available Transporters Near You</h1>
      <div className="transporter-list">
        {transporters.map((t, index) => (
          <TransporterCard key={index} transporter={t} />
        ))}
      </div>
    </div>
  );
};

export default AvailableTransporters;
