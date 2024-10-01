'use client'
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Check if the map is already initialized
    const mapContainer = document.getElementById('map');
    if (mapContainer && mapContainer._leaflet_id) {
      return; // If the map already exists, do nothing
    }

    // Initialize the map if not already initialized
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    return () => {
      // Clean up the map instance when the component is unmounted
      map.remove();
    };
  }, []);

  return <div id="map" className="h-full w-full" />;
};

export default MapComponent;
