import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';

// Ícone personalizado para os marcadores
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function MapWithClusters() {
    const mapRef = useRef();

    useEffect(() => {
        // Definir pontos dentro do useEffect para evitar re-renderizações desnecessárias
        const points = [
            [40.7128, -74.0060], // Nova York, EUA
            [34.0522, -118.2437], // Los Angeles, EUA
            [41.8781, -87.6298], // Chicago, EUA
            [29.7604, -95.3698], // Houston, EUA
            [33.4484, -112.0740], // Phoenix, EUA
        ];

        // Criar o grupo de clusters
        const markerCluster = L.markerClusterGroup({
            iconCreateFunction: (cluster) => {
                const count = cluster.getChildCount();
                return L.divIcon({
                    html: `<div style="background-color: rgba(0, 123, 255, 0.8); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; font-size: 14px;">${count}</div>`,
                    className: '',
                });
            },
        });

        // Adicionar marcadores ao cluster
        points.forEach((point) => {
            L.marker(point, { icon: customIcon }).addTo(markerCluster);
        });

        // Verificar se a referência do mapa foi definida antes de adicionar o grupo de clusters
        if (mapRef.current) {
            markerCluster.addTo(mapRef.current);
        }
    }, []); // Apenas uma vez, quando o componente for montado

    return (
        <MapContainer
            center={[39.8283, -98.5795]} // Centralizado nos EUA
            zoom={4}
            style={{ height: '500px', width: '900px' }}
            whenCreated={(mapInstance) => {
                mapRef.current = mapInstance; // Atribuindo o mapa à referência
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL do OpenStreetMap
                attribution="© OpenStreetMap contributors"
            />
        </MapContainer>
    );
}
