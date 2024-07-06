'use client'

import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { css } from 'styled/css'

export default function Map() {
  return (
    <MapContainer
      className={css({ width: '100%', height: '100vh' })}
      center={[-44.4763, 168.6218]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url={providers['Thunderforest.Landscape']} detectRetina />
      <Marker position={[-44.4763, 168.6218]}>
        test
        <Popup>This is a popup</Popup>
      </Marker>
    </MapContainer>
  )
}

const providers = {
  'Thunderforest.OpenCycleMap':
    'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}',
  'Thunderforest.Landscape':
    'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=fc096d96016d4ea388beb33b5e3fd63b',
}
