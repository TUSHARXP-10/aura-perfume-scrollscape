
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'casual' | 'premium' | 'luxury';
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
};

export const products: Product[] = [
  // Casual Perfumes (20)
  {
    id: 'casual-1',
    name: 'Fresh Breeze',
    description: 'Light and airy fragrance with notes of citrus and ocean breeze.',
    price: 35.99,
    image: '/placeholder.svg',
    category: 'casual',
    bestseller: true
  },
  {
    id: 'casual-2',
    name: 'Urban Day',
    description: 'Modern scent for everyday wear with subtle woody undertones.',
    price: 32.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-3',
    name: 'Summer Splash',
    description: 'Refreshing blend of tropical fruits and light floral notes.',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'casual',
    new: true
  },
  {
    id: 'casual-4',
    name: 'Sport Active',
    description: 'Energizing fragrance with mint and green tea extracts.',
    price: 34.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-5',
    name: 'Morning Dew',
    description: 'Fresh and clean scent inspired by nature after rain.',
    price: 31.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-6',
    name: 'Casual Weekend',
    description: 'Relaxed fragrance with notes of vanilla and soft musk.',
    price: 36.99,
    image: '/placeholder.svg',
    category: 'casual',
    featured: true
  },
  {
    id: 'casual-7',
    name: 'Spring Walk',
    description: 'Light floral scent with green notes and a touch of citrus.',
    price: 28.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-8',
    name: 'Everyday Charm',
    description: 'Balanced fragrance suitable for work and casual outings.',
    price: 33.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-9',
    name: 'Pure Cotton',
    description: 'Clean and fresh scent reminiscent of fresh laundry.',
    price: 30.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-10',
    name: 'Light Breeze',
    description: 'Airy composition with hints of white flowers and amber.',
    price: 37.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-11',
    name: 'Aqua Fresh',
    description: 'Water-inspired scent with marine notes and light woods.',
    price: 34.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-12',
    name: 'Simple Pleasure',
    description: 'Easy-wearing fragrance with fruity top notes.',
    price: 29.50,
    image: '/placeholder.svg',
    category: 'casual',
    new: true
  },
  {
    id: 'casual-13',
    name: 'Soft Touch',
    description: 'Gentle blend of powder notes and subtle florals.',
    price: 31.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-14',
    name: 'Daily Essence',
    description: 'Versatile fragrance for everyday moments.',
    price: 32.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-15',
    name: 'Clear Sky',
    description: 'Fresh and uplifting scent with ozonic qualities.',
    price: 35.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-16',
    name: 'Green Leaf',
    description: 'Natural fragrance inspired by forest walks.',
    price: 33.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-17',
    name: 'Breezy Day',
    description: 'Light and casual scent perfect for daytime wear.',
    price: 30.99,
    image: '/placeholder.svg',
    category: 'casual',
    bestseller: true
  },
  {
    id: 'casual-18',
    name: 'Minimal',
    description: 'Subtle and understated fragrance for all occasions.',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-19',
    name: 'Crisp Air',
    description: 'Clean and fresh with a hint of citrus zest.',
    price: 34.50,
    image: '/placeholder.svg',
    category: 'casual'
  },
  {
    id: 'casual-20',
    name: 'Gentle Whisper',
    description: 'Soft musk with delicate floral undertones.',
    price: 32.50,
    image: '/placeholder.svg',
    category: 'casual'
  },

  // Premium Perfumes (20)
  {
    id: 'premium-1',
    name: 'Azure Nights',
    description: 'Sophisticated blend of amber, spice, and woody notes.',
    price: 79.99,
    image: '/placeholder.svg',
    category: 'premium',
    featured: true
  },
  {
    id: 'premium-2',
    name: 'Velvet Orchid',
    description: 'Rich floral fragrance with vanilla and exotic spices.',
    price: 85.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-3',
    name: 'Amber Romance',
    description: 'Warm and sensual fragrance with amber and musk.',
    price: 82.99,
    image: '/placeholder.svg',
    category: 'premium',
    bestseller: true
  },
  {
    id: 'premium-4',
    name: 'Modern Elegance',
    description: 'Contemporary scent with rose, patchouli, and sandalwood.',
    price: 88.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-5',
    name: 'Midnight Bloom',
    description: 'Mysterious blend of dark flowers and oriental spices.',
    price: 92.99,
    image: '/placeholder.svg',
    category: 'premium',
    new: true
  },
  {
    id: 'premium-6',
    name: 'Golden Sunset',
    description: 'Warm, radiant fragrance with amber and vanilla.',
    price: 84.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-7',
    name: 'Silk Road',
    description: 'Exotic composition inspired by ancient trade routes.',
    price: 89.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-8',
    name: 'Opulent Rose',
    description: 'Luxurious rose fragrance with deeper woody base notes.',
    price: 94.99,
    image: '/placeholder.svg',
    category: 'premium',
    featured: true
  },
  {
    id: 'premium-9',
    name: 'Urban Sophisticate',
    description: 'Modern and sleek scent for the contemporary individual.',
    price: 79.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-10',
    name: 'Royal Oud',
    description: 'Rich and smoky fragrance with precious oud wood.',
    price: 99.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-11',
    name: 'Crystal Iris',
    description: 'Elegant iris fragrance with powdery and woody facets.',
    price: 86.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-12',
    name: 'Noble Leather',
    description: 'Sophisticated leather accord with spicy undertones.',
    price: 92.50,
    image: '/placeholder.svg',
    category: 'premium',
    new: true
  },
  {
    id: 'premium-13',
    name: 'Vetiver Elixir',
    description: 'Premium vetiver fragrance with earthy depth.',
    price: 88.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-14',
    name: 'Amber Noir',
    description: 'Dark amber composition with smoky vanilla.',
    price: 95.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-15',
    name: 'Cedar Mystique',
    description: 'Rich cedar fragrance with incense and spice notes.',
    price: 84.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-16',
    name: 'Urban Legend',
    description: 'Bold and distinctive scent for confident personalities.',
    price: 89.50,
    image: '/placeholder.svg',
    category: 'premium',
    bestseller: true
  },
  {
    id: 'premium-17',
    name: 'Mediterranean Bloom',
    description: 'Inspired by flowering gardens along the Mediterranean coast.',
    price: 82.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-18',
    name: 'Suede Accord',
    description: 'Velvety suede notes with amber and musk.',
    price: 94.99,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-19',
    name: 'Spiced Tonka',
    description: 'Warm tonka bean with spicy cinnamon and cardamom.',
    price: 87.50,
    image: '/placeholder.svg',
    category: 'premium'
  },
  {
    id: 'premium-20',
    name: 'Violet Dream',
    description: 'Sophisticated violet fragrance with iris and soft woods.',
    price: 91.50,
    image: '/placeholder.svg',
    category: 'premium'
  },

  // Luxury Perfumes (20)
  {
    id: 'luxury-1',
    name: 'Celestial Oud',
    description: 'Exquisite blend of rare oud, rose, and precious spices.',
    price: 249.99,
    image: '/placeholder.svg',
    category: 'luxury',
    featured: true
  },
  {
    id: 'luxury-2',
    name: 'Imperial Elixir',
    description: 'Opulent composition with aged sandalwood and amber.',
    price: 279.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-3',
    name: 'Divine Orris',
    description: 'Rare iris root extract combined with precious florals.',
    price: 295.99,
    image: '/placeholder.svg',
    category: 'luxury',
    bestseller: true
  },
  {
    id: 'luxury-4',
    name: 'Sovereign',
    description: 'Majestic fragrance with royal notes of saffron and leather.',
    price: 320.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-5',
    name: 'Rare Amber',
    description: 'Exclusive amber fragrance with aged whiskey accords.',
    price: 289.99,
    image: '/placeholder.svg',
    category: 'luxury',
    new: true
  },
  {
    id: 'luxury-6',
    name: 'Grand Reserve',
    description: 'Limited edition fragrance with rare botanical extracts.',
    price: 350.00,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-7',
    name: 'Prestige Noir',
    description: 'Sophisticated dark fragrance with truffle and aged woods.',
    price: 275.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-8',
    name: 'Opulent Saffron',
    description: 'Lavish saffron fragrance with leather and smoky notes.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'luxury',
    featured: true
  },
  {
    id: 'luxury-9',
    name: 'Platinum Reserve',
    description: 'Elite composition with precious woods and spices.',
    price: 325.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-10',
    name: 'Eternal Rose',
    description: 'Extraordinary rose fragrance with 24k gold infusion.',
    price: 399.99,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-11',
    name: 'Royal Tribute',
    description: 'Majestic fragrance inspired by ancient royal courts.',
    price: 310.99,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-12',
    name: 'Noble Essence',
    description: 'Timeless luxury with rare botanical extracts.',
    price: 285.50,
    image: '/placeholder.svg',
    category: 'luxury',
    new: true
  },
  {
    id: 'luxury-13',
    name: 'Exclusive Oud',
    description: 'Pure oud oil from sustainable ancient trees.',
    price: 375.00,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-14',
    name: 'Legacy',
    description: 'Heritage fragrance crafted with century-old techniques.',
    price: 290.99,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-15',
    name: 'Regal Amber',
    description: 'Sumptuous amber composition with royal history.',
    price: 315.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-16',
    name: 'Velvet Nobility',
    description: 'Ultra-premium fragrance with depth and character.',
    price: 329.50,
    image: '/placeholder.svg',
    category: 'luxury',
    bestseller: true
  },
  {
    id: 'luxury-17',
    name: 'Pristine Iris',
    description: 'Rare iris absolute with precious vanilla from Madagascar.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-18',
    name: 'Sublime Essence',
    description: 'Extraordinary composition with rare botanical extracts.',
    price: 340.99,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-19',
    name: 'Majestic Musk',
    description: 'Rare musk essence aged to perfection.',
    price: 309.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
  {
    id: 'luxury-20',
    name: 'Timeless Elixir',
    description: 'Ageless luxury fragrance that transcends trends.',
    price: 289.50,
    image: '/placeholder.svg',
    category: 'luxury'
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
