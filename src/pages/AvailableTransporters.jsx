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
    image: "",
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
