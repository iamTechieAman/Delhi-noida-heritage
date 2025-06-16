// Monument Types
export interface Monument {
  id: string;
  name: string;
  century: string;
  location: string;
  coordinates: string;
  address: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  builtYear: string;
  builtBy: string;
  visitingHours: string;
  entryFee: string;
  bestTime: string;
  visitDuration: string;
  photography: string;
  unesco: boolean;
  history: string;
  historyTimeline: {
    year: string;
    event: string;
  }[];
  architecture: string;
  architecturalFeatures: string[];
  architectureImage: string;
  materialsUsed: string;
  gallery: {
    url: string;
    alt: string;
  }[];
  nearbyAttractions: {
    name: string;
    distance: string;
    description: string;
    imageUrl: string;
  }[];
}

// Tour Types
export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
  rating: number;
  groupSize: number;
  availability: string;
  language: string;
  includes: string[];
}