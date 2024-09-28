"use client"; // To ensure this is a client-side component

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure to import the Leaflet CSS
import L from "leaflet";

const MapComponent = () => {
  useEffect(() => {
    // Clean up when the component unmounts to avoid the "already initialized" error
    return () => {
      if (document.querySelector('.leaflet-container')) {
        const mapContainers = document.querySelectorAll('.leaflet-container');
        mapContainers.forEach(container => {
          container._leaflet_id = null;
        });
      }
    };
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center position
      zoom={13}
      scrollWheelZoom={false}
      className="h-96 w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
