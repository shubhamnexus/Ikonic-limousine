export type BookingType = 'transfer' | 'hourly';

export interface Location {
  address: string;
  placeId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'Sedan' | 'SUV' | 'Luxury' | 'Electric' | 'Electric SUV';
  capacity: number;
  imageUrl: string;
  pricePerKm: number;
  pricePerHour: number;
  features: string[];
  availableCars: number;
  baggageCapacity: number;
}

export interface BookingDetails {
  type: BookingType;
  pickupLocation: Location;
  dropoffLocation?: Location;
  date: string;
  time: string;
  vehicle?: Vehicle;
  duration?: number;
  price: number;
  estimatedDistance?: number;
  estimatedDuration?: number;
}