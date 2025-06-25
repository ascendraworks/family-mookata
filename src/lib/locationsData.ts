export interface LocationDetail {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  lat: number;
  lng: number;
  mapX: string;
  mapY: string;
  operatingHours?: string;
  phone?: string;
  details?: string;
}

export const locationsData: LocationDetail[] = [
  {
    id: "yishun",
    name: "Yishun Branch",
    address: "6 Yishun Industrial Street 1 Northview Bizhub",
    postalCode: "Singapore 768090",
    lat: 1.4405,
    lng: 103.843,
    mapX: "48%",
    mapY: "10%",
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 8927 2782",
    details:
      "Located in Northview Bizhub, offering a spacious dining experience.",
  },
  {
    id: "bedok",
    name: "Bedok Branch",
    address: "509 Bedok North Street 3, #01-77",
    postalCode: "Singapore 460509",
    lat: 1.3313,
    lng: 103.935,
    mapX: "67%",
    mapY: "50%",
    operatingHours:
      "Tuesday - Friday : 3pm - 11pm, Saturday - Sunday & PH : 1pm - 11pm",
    phone: "+65 8188 4738",
    details: "Your friendly neighborhood mookata spot in the heart of Bedok.",
  },
  {
    id: "amk",
    name: "Ang Mo Kio Branch",
    address: "Blk 215 Ang Mo Kio Ave 1, #01-877",
    postalCode: "Singapore 560215",
    lat: 1.3668,
    lng: 103.8389,
    mapX: "50%",
    mapY: "30%",
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 8927 2782",
    details: "Conveniently located near Ang Mo Kio Hub.",
  },
];
