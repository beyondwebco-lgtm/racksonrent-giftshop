export interface TestimonialSample {
  id: string;
  quote: string;
  authorTitle: string;
  category: "Gift Shop Owner" | "Gift Entrepreneur";
  location: string;
}

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: "sample-1",
    quote: "Racks on Rent helped us turn an unused display corner inside our gift shop into a steady extra income stream while bringing our customers unique handmade products from local artists.",
    authorTitle: "Gift Boutique Owner",
    category: "Gift Shop Owner",
    location: "Hyderabad"
  },
  {
    id: "sample-2",
    quote: "Displaying our handmade candles and stationery on an eye-level shelf in a busy gift shop gave us instant retail exposure without the massive cost of opening our own store.",
    authorTitle: "Gift Brand Founder",
    category: "Gift Entrepreneur",
    location: "Vijayawada"
  },
  {
    id: "sample-3",
    quote: "A brilliant platform bridging popular local gift stores with passionate creators looking for high-footfall display space to sell handcrafted products.",
    authorTitle: "Curio Shop Manager",
    category: "Gift Shop Owner",
    location: "Bengaluru"
  }
];


