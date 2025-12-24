'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Rate, Tag } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

type Business = {
  id: number;
  name: string;
  email: string;
  photo: string;
  summary: string | null;
  link: string | null;
  category?: { id: number; name: string };
  addresses?: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
  }[];
  _count?: { reviews: number };
  averageReviewRating?: number;
};

type MapViewProps = {
  businesses: Business[];
  hoveredBusiness: number | null;
  selectedBusiness: Business | null;
  onBusinessHover: (id: number | null) => void;
  onBusinessSelect: (business: Business | null) => void;
};

// Custom marker icon
const createIcon = (isHovered: boolean, isSelected: boolean) => {
  const color = isSelected ? '#f97316' : isHovered ? '#fbbf24' : '#6366f1';
  const size = isHovered || isSelected ? 40 : 32;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      ">
        <span style="
          transform: rotate(45deg);
          color: white;
          font-size: ${isHovered || isSelected ? '16px' : '14px'};
        ">📍</span>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

// Component to handle map center changes
function MapController({
  selectedBusiness,
}: {
  selectedBusiness: Business | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedBusiness?.addresses?.[0]) {
      const { latitude, longitude } = selectedBusiness.addresses[0];
      map.flyTo([latitude, longitude], 16, { duration: 0.5 });
    }
  }, [selectedBusiness, map]);

  return null;
}

export default function MapView({
  businesses,
  hoveredBusiness,
  selectedBusiness,
  onBusinessHover,
  onBusinessSelect,
}: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Default center: Ulaanbaatar
  const defaultCenter: [number, number] = [47.9184676, 106.9177016];
  const defaultZoom = 13;

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate bounds based on all businesses
  const getBounds = () => {
    if (businesses.length === 0) return undefined;

    const coordinates = businesses
      .filter((b) => b.addresses?.[0]?.latitude && b.addresses?.[0]?.longitude)
      .map(
        (b) =>
          [b.addresses![0].latitude, b.addresses![0].longitude] as [
            number,
            number
          ]
      );

    if (coordinates.length === 0) return undefined;
    return L.latLngBounds(coordinates);
  };

  if (!isClient) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Газрын зургийг ачаалж байна...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      className="h-full w-full"
      ref={mapRef}
      bounds={getBounds()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController selectedBusiness={selectedBusiness} />

      {businesses.map((business) => {
        const address = business.addresses?.[0];
        if (!address?.latitude || !address?.longitude) return null;

        const isHovered = hoveredBusiness === business.id;
        const isSelected = selectedBusiness?.id === business.id;

        return (
          <Marker
            key={business.id}
            position={[address.latitude, address.longitude]}
            icon={createIcon(isHovered, isSelected)}
            eventHandlers={{
              mouseover: () => onBusinessHover(business.id),
              mouseout: () => onBusinessHover(null),
              click: () => onBusinessSelect(business),
            }}
          >
            <Popup className="business-popup" maxWidth={300}>
              <div className="p-2">
                <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={business.photo || '/placeholder-business.jpg'}
                    alt={business.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{business.name}</h3>
                {business.category && (
                  <Tag color="gold" className="mb-2">
                    {business.category.name}
                  </Tag>
                )}
                {business.averageReviewRating && (
                  <div className="flex items-center gap-2 mb-2">
                    <Rate
                      disabled
                      defaultValue={business.averageReviewRating}
                      allowHalf
                      className="text-sm"
                    />
                    <span className="text-gray-500 text-sm">
                      ({business._count?.reviews || 0} сэтгэгдэл)
                    </span>
                  </div>
                )}
                {business.summary && (
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {business.summary}
                  </p>
                )}
                <p className="text-gray-500 text-xs flex items-center gap-1 mb-3">
                  <EnvironmentOutlined />
                  {address.address}
                </p>
                <Link href={`/yellow-books/${business.id}`}>
                  <Button
                    type="primary"
                    block
                    className="bg-amber-500 hover:bg-amber-600 border-none"
                  >
                    Дэлгэрэнгүй үзэх
                  </Button>
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
