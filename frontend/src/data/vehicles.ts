import type { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'bmw-520i',
    name: 'BMW 520i',
    type: 'Sedan',
    capacity: 4,
    imageUrl: 'https://cdn-nexlink.s3.us-east-2.amazonaws.com/DSC08109_882dd768-3766-48ff-957d-122074d2bb4a.jpg',
    pricePerKm: 5,
    pricePerHour: 250,
    features: [
      'Refined luxury design',
      'Cutting-edge technology',
      'Smooth responsive drive',
      'Premium comfort',
      'Precision engineering'
    ],
    availableCars: 3,
    baggageCapacity: 3
  },
  {
    id: 'bmw-735i',
    name: 'BMW 735i',
    type: 'Sedan',
    capacity: 4,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_12.45.41 PM_d7a7274c-7247-432e-8595-f79263d164a7.png',
    pricePerKm: 6,
    pricePerHour: 300,
    features: [
      'Ultimate luxury interior',
      'Advanced technology',
      'Powerful smooth ride',
      'Prestige design',
      'Commanding presence'
    ],
    availableCars: 2,
    baggageCapacity: 3
  },
  {
    id: 'gmc-yukon-sle',
    name: 'GMC Yukon SLE',
    type: 'SUV',
    capacity: 7,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_1.15.09 PM_86fa38ad-10c0-441c-8ad5-798fe15d3705.png',
    pricePerKm: 7,
    pricePerHour: 350,
    features: [
      'Bold styling',
      'Versatile capability',
      'Spacious interior',
      'Advanced safety features',
      'Powerful performance'
    ],
    availableCars: 2,
    baggageCapacity: 5
  },
  {
    id: 'honda-accord-e-hev',
    name: 'Honda Accord E-HEV EXL',
    type: 'Sedan',
    capacity: 4,
    imageUrl: '',
    pricePerKm: 4.5,
    pricePerHour: 225,
    features: [
      'Refined hybrid powertrain',
      'Premium interiors',
      'Smart technology',
      'Eco-conscious performance',
      'Sophisticated design'
    ],
    availableCars: 3,
    baggageCapacity: 3
  },
  {
    id: 'infiniti-qx60',
    name: 'Infiniti QX60',
    type: 'SUV',
    capacity: 5,
    imageUrl: '',
    pricePerKm: 6.5,
    pricePerHour: 325,
    features: [
      'Refined luxury design',
      'Family-friendly versatility',
      'Spacious upscale interior',
      'Advanced safety tech',
      'Smooth powerful drive'
    ],
    availableCars: 1,
    baggageCapacity: 3
  },
  {
    id: 'lexus-es-300h',
    name: 'Lexus ES 300H',
    type: 'Sedan',
    capacity: 4,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_1.16.32 PM_a34ca4d2-7052-454f-8079-c465e25afe70.png',
    pricePerKm: 5.5,
    pricePerHour: 275,
    features: [
      'Luxury design',
      'Serene hybrid performance',
      'Meticulously crafted interior',
      'Eco-conscious driving',
      'Timeless elegance'
    ],
    availableCars: 35,
    baggageCapacity: 3
  },
  {
    id: 'lincoln-navigator',
    name: 'Lincoln Navigator',
    type: 'SUV',
    capacity: 7,
    imageUrl: '',
    pricePerKm: 8,
    pricePerHour: 400,
    features: [
      'Commanding presence',
      'Lavish interior',
      'Advanced technology',
      'Powerful performance',
      'First-class comfort'
    ],
    availableCars: 1,
    baggageCapacity: 5
  },
  {
    id: 'mercedes-s500',
    name: 'Mercedes Benz S500',
    type: 'Sedan',
    capacity: 4,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_1.17.46 PM_a4e2d96d-c1f1-4b17-af42-51ffed02caff.png',
    pricePerKm: 7.5,
    pricePerHour: 375,
    features: [
      'Pinnacle of luxury',
      'Powerful refined drive',
      'Cutting-edge technology',
      'Opulent cabin',
      'Excellence in detail'
    ],
    availableCars: 3,
    baggageCapacity: 3
  },
  {
    id: 'mercedes-v-class',
    name: 'Mercedes Benz V-Class',
    type: 'Luxury',
    capacity: 6,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_1.18.47 PM_11c9b835-be39-4023-9ddb-93bdb6ba8154.png',
    pricePerKm: 8.5,
    pricePerHour: 425,
    features: [
      'Premium comfort',
      'Versatile functionality',
      'Spacious seating',
      'Advanced technology',
      'Smooth refined ride'
    ],
    availableCars: 3,
    baggageCapacity: 5
  },
  {
    id: 'tesla-model-3',
    name: 'Tesla Model 3',
    type: 'Electric',
    capacity: 4,
    imageUrl: '',
    pricePerKm: 5.5,
    pricePerHour: 275,
    features: [
      'Sleek modern design',
      'Cutting-edge electric performance',
      'Eco-friendly drive',
      'Advanced technology',
      'Innovative features'
    ],
    availableCars: 5,
    baggageCapacity: 3
  },
  {
    id: 'tesla-model-y',
    name: 'Tesla Model Y',
    type: 'Electric SUV',
    capacity: 4,
    imageUrl: 'https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_1.20.09 PM_52df349c-9bf0-4782-951d-71b4bb791dc1.png',
    pricePerKm: 6,
    pricePerHour: 300,
    features: [
      'Electric performance',
      'SUV practicality',
      'Spacious interior',
      'Impressive range',
      'Futuristic tech'
    ],
    availableCars: 8,
    baggageCapacity: 4
  },
  {
    id: 'tesla-model-x',
    name: 'Tesla Model X',
    type: 'Electric SUV',
    capacity: 5,
    imageUrl: '',
    pricePerKm: 7.5,
    pricePerHour: 375,
    features: [
      'Dual-motor electric performance',
      'Falcon-wing doors',
      'Advanced autopilot',
      'Spacious comfort',
      'Zero-emission power'
    ],
    availableCars: 1,
    baggageCapacity: 4
  },
  {
    id: 'toyota-highlander-vxr',
    name: 'Toyota Highlander VXR',
    type: 'SUV',
    capacity: 6,
    imageUrl: 'https://cdn-nexlink.s3.us-east-2.amazonaws.com/ChatGPT_Image_Apr_25,_2025,_01_26_20_PM_1b5a912c-0a41-4d58-a580-41f5c04a8841.png',
    pricePerKm: 6.5,
    pricePerHour: 325,
    features: [
      'Bold design',
      'Premium comfort',
      'Powerful engine',
      'Advanced safety systems',
      'Refined spacious interior'
    ],
    availableCars: 8,
    baggageCapacity: 5
  }
];