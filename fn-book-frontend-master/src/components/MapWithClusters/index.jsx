import React, { useRef, useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet.markercluster'
import icon from '../../assets/vectors/location.svg'

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: null,
  shadowSize: null,
})

const MapWithClusters = () => {
  const map = useMap()

  useEffect(() => {
    const points = [
      [-23.5505, -46.6333], // São Paulo
      [-22.9068, -43.1729], // Rio de Janeiro
      [-15.7801, -47.9292], // Brasília
      [-30.0346, -51.2177], // Porto Alegre
      [-19.8157, -43.9542], // Belo Horizonte
      [-8.0476, -34.8770],  // Recife
      [-12.9714, -38.5014], // Salvador
      [-3.7172, -38.5437],  // Fortaleza
      [-9.6656, -35.7350],  // Maceió
      [-1.4558, -48.4903],  // Belém
      [-23.1896, -46.8978], // Campinas
      [-10.1855, -48.3442], // Palmas
      [-16.6869, -49.2643], // Goiânia
      [-25.4284, -49.2670], // Curitiba
      [-9.1896, -40.3140],  // Teresina
      [-7.1159, -34.8610],  // João Pessoa
      [-5.8143, -35.2110],  // Natal
      [-13.0020, -38.5126], // Feira de Santana
      [-19.8180, -43.9730], // Juiz de Fora
      [-13.0061, -38.5092], // Santo Antônio de Jesus
      [-29.6887, -53.8060], // Santa Maria
      [-21.2577, -47.8515], // Ribeirão Preto
      [-8.0344, -34.9280],  // Jaboatão dos Guararapes
      [-18.9170, -48.2742], // Uberaba
      [-22.2696, -47.6468], // Sorocaba
      [-3.1193, -60.7019],  // Rio Branco
      [-15.7887, -47.8797], // Taguatinga
      [-19.8192, -43.9704], // Montes Claros
      [-4.9622, -39.3034],  // Caxias
      [-7.1643, -34.8526],  // Campina Grande
      [-17.7389, -41.7427], // Vitoria da Conquista
      [-10.1733, -48.5933], // Araguaína
      [-21.1349, -47.3989], // Barretos
      [-3.2357, -58.4026],  // Boa Vista
      [-13.5940, -38.4791], // Ilhéus
      [-19.9373, -43.9511], // Divinópolis
      [-5.7700, -35.5330],  // Caicó
      [-22.9112, -43.2096], // Niterói
      [-13.3000, -42.5900], // Santa Cruz
      [-17.7875, -39.5174], // Vitória da Conquista
      [-8.0209, -35.1800],  // Paulista
      [-5.7771, -35.2191],  // Mossoró
      [-27.5954, -48.5480], // Florianópolis
      [-23.7000, -53.3800], // Cascavel
      [-10.5316, -37.3587], // Aracaju
      [-9.7443, -35.6814],  // Recife
      [-21.1573, -49.3619], // Catanduva
      [-2.8275, -60.7118],  // Porto Velho
      [-14.7532, -43.2030], // Paracatu
      [-18.8810, -48.2760], // Patos de Minas
    ]

    const markerCluster = L.markerClusterGroup({
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        return L.divIcon({
          html: `<div style="background-color: rgba(0, 123, 255, 0.8); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; font-size: 14px;">${count}</div>`,
          className: '',
        })
      },
    })

    points.forEach((point) => {
      L.marker(point, { icon: customIcon }).addTo(markerCluster)
    })

    markerCluster.addTo(map)

  }, [map])

  return null
}

const MapPage = () => (
  <MapContainer center={[-22.9099384, -47.0626332]} zoom={6} className='map-content'>
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions">CartoDB</a>'
    />

    <MapWithClusters />
  </MapContainer>
)

export default MapPage
