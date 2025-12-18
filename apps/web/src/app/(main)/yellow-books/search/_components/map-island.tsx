'use client';
import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import type * as L from 'leaflet';

export interface BusinessLocation {
  id: string | number; // Can be composite key (businessId-addressId) or addressId
  businessId?: number; // Original business ID (optional)
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
  address: string;
}

interface MapIslandProps {
  points: BusinessLocation[];
}

export default function MapIsland({ points }: MapIslandProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapRef.current) return;

    // Dynamically import Leaflet only on client
    const initMap = async () => {
      const L = (await import('leaflet')).default;

      // Clean up existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Ensure mapRef is available
      if (!mapRef.current) return;

      // Default center to Ulaanbaatar if no points
      let centerLat = 47.8864;
      let centerLng = 106.9057;
      const zoom = 13;

      if (points.length > 0) {
        // Calculate bounds
        const lats = points.map((p) => p.latitude);
        const lngs = points.map((p) => p.longitude);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLng = Math.min(...lngs);
        const maxLng = Math.max(...lngs);

        centerLat = (minLat + maxLat) / 2;
        centerLng = (minLng + maxLng) / 2;
      }

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [centerLat, centerLng],
        zoom: zoom,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add markers with business logos
      if (points.length > 0) {
        points.forEach((point) => {
          // Create custom icon with business logo
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
                <div style="position: relative;">
                  <img 
                    src="${point.photo}" 
                    alt="${point.name}"
                    style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); object-fit: cover;"
                  />
                  <div style="
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid white;
                  "></div>
                </div>
              `,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
          });

          const marker = L.marker([point.latitude, point.longitude], {
            icon: customIcon,
          }).addTo(map);

          // Add popup with business info
          marker.bindPopup(`
              <div style="min-width: 150px;">
                <strong>${point.name}</strong><br/>
                <small style="color: #666;">${point.address}</small>
              </div>
            `);
        });

        // Fit map to show all markers
        if (points.length > 1) {
          const bounds = L.latLngBounds(
            points.map((p) => [p.latitude, p.longitude] as [number, number])
          );
          map.fitBounds(bounds, { padding: [20, 20] });
        }
      }

      mapInstanceRef.current = map;
    };

    initMap();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isMounted, points]);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary text-white">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="size-5" />
          <h3 className="font-semibold">
            Газрын зураг {points.length > 0 && `(${points.length} байршил)`}
          </h3>
        </div>
      </div>
      <div className="h-96 w-full relative">
        {!isMounted ? (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 animate-pulse">
            <p className="text-muted">Газрын зураг ачаалж байна...</p>
          </div>
        ) : (
          <div ref={mapRef} className="h-full w-full" />
        )}
      </div>

      {/* Points List */}
      {points.length > 0 && (
        <div className="p-4 border-t border-border bg-gray-50 max-h-48 overflow-y-auto">
          <p className="text-xs font-semibold mb-2">Байршил:</p>
          <div className="space-y-1">
            {points.slice(0, 5).map((point) => (
              <div
                key={point.id}
                className="text-xs text-muted flex items-center gap-2"
              >
                <Image
                  src={point.photo}
                  alt={point.name}
                  width={16}
                  height={16}
                  className="rounded-full object-cover"
                />
                <span className="truncate">{point.name}</span>
              </div>
            ))}
            {points.length > 5 && (
              <p className="text-xs text-muted">+{points.length - 5} нэмэлт</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
