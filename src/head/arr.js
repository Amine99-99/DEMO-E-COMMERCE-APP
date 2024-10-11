
const productsA = [
  { id: 1, name: "Gaming Console", category: "Electronics", price: 499, quantity: 352 },
  { id: 2, name: "Wireless Earbuds", category: "Electronics", price: 149, quantity: 276 },
  { id: 3, name: "Yoga Mat", category: "Fitness", price: 35, quantity: 189 },
  { id: 4, name: "Blender", category: "Kitchen", price: 70, quantity: 451 },
  { id: 5, name: "E-book Reader", category: "Electronics", price: 129, quantity: 324 },
  { id: 6, name: "Sunglasses", category: "Accessories", price: 85, quantity: 367 },
  { id: 7, name: "Portable Charger", category: "Electronics", price: 40, quantity: 494 },
  { id: 8, name: "Sneakers", category: "Footwear", price: 95, quantity: 213 },
  { id: 9, name: "Laptop Stand", category: "Furniture", price: 55, quantity: 145 },
  { id: 10, name: "Fitness Tracker", category: "Fitness", price: 100, quantity: 475 },
  { id: 11, name: "Bluetooth Speaker", category: "Electronics", price: 89, quantity: 289 },
  { id: 12, name: "Smart Thermostat", category: "Home", price: 200, quantity: 153 },
  { id: 13, name: "Instant Pot", category: "Kitchen", price: 150, quantity: 312 },
  { id: 14, name: "Duffel Bag", category: "Bags", price: 70, quantity: 269 },
  { id: 15, name: "Action Camera", category: "Electronics", price: 299, quantity: 456 },
  { id: 16, name: "Smart Light Bulbs", category: "Home", price: 60, quantity: 361 },
  { id: 17, name: "Electric Kettle", category: "Kitchen", price: 50, quantity: 298 },
  { id: 18, name: "Running Tights", category: "Apparel", price: 45, quantity: 172 },
  { id: 19, name: "Tablet", category: "Electronics", price: 350, quantity: 412 },
  { id: 20, name: "Desk Lamp", category: "Furniture", price: 40, quantity: 273 }
];
const productsB = [
  { id: 1, name: "Vacuum Cleaner", category: "Home", price: 150, quantity: 132 },
  { id: 2, name: "Electric Grill", category: "Kitchen", price: 130, quantity: 453 },
  { id: 3, name: "Mountain Bike", category: "Fitness", price: 400, quantity: 225 },
  { id: 4, name: "Leather Wallet", category: "Accessories", price: 60, quantity: 495 },
  { id: 5, name: "Digital Camera", category: "Electronics", price: 550, quantity: 104 },
  { id: 6, name: "Smart Speaker", category: "Electronics", price: 99, quantity: 376 },
  { id: 7, name: "Gaming Mouse", category: "Electronics", price: 70, quantity: 184 },
  { id: 8, name: "Waterproof Jacket", category: "Apparel", price: 120, quantity: 229 },
  { id: 9, name: "Electric Razor", category: "Personal Care", price: 80, quantity: 323 },
  { id: 10, name: "Camping Tent", category: "Outdoors", price: 250, quantity: 167 },
  { id: 11, name: "Smartwatch", category: "Electronics", price: 180, quantity: 269 },
  { id: 12, name: "Noise-Canceling Headphones", category: "Electronics", price: 220, quantity: 482 },
  { id: 13, name: "Electric Scooter", category: "Outdoors", price: 350, quantity: 196 },
  { id: 14, name: "Espresso Machine", category: "Kitchen", price: 300, quantity: 376 },
  { id: 15, name: "Crossbody Bag", category: "Bags", price: 80, quantity: 144 },
  { id: 16, name: "Air Purifier", category: "Home", price: 150, quantity: 221 },
  { id: 17, name: "Laptop Backpack", category: "Bags", price: 90, quantity: 413 },
  { id: 18, name: "Gaming Keyboard", category: "Electronics", price: 110, quantity: 307 },
  { id: 19, name: "Bluetooth Headset", category: "Electronics", price: 85, quantity: 385 },
  { id: 20, name: "Running Shorts", category: "Apparel", price: 35, quantity: 238 }
];

const allProducts = [
  {
    category: 'Electronics',
    products: [
      {
        id: 1,
        name: 'Laptop Mockup',
        price: 1000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1463.jpg?size=626&ext=jpg',
      },
      {
        id: 2,
        name: 'Realistic MacBook Mockup',
        price: 1200,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-psd/realistic-macbook-mock-up_1022-57.jpg?size=626&ext=jpg',
      },
      {
        id: 3,
        name: 'Smartphone Mockup',
        price: 800,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/smartphone-mock-up_81761-26.jpg?w=740',
      },
      {
        id: 4,
        name: 'Smart TV',
        price: 1500,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/tv-that-has-picture-buffalo-it_1095889-4438.jpg?w=1380',
      },
      {
        id: 5,
        name: 'Computer Monitor Display',
        price: 400,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757327.jpg',
      },
      {
        id: 6,
        name: 'Laptop Holder Stand',
        price: 60,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/running-laptop-is-installed-notebook-holder-stand_351981-1088.jpg?w=996',
      },
      {
        id: 7,
        name: 'Kitchen Appliances Set',
        price: 250,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-vector/white-household-kitchen-appliances-transparent-set_1284-26015.jpg',
      },
      {
        id: 8,
        name: 'Mixer',
        price: 80,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-vector/kitchen-appliances-electric-blender-whisk-household-equipment-cooking-food-mixer_107791-6644.jpg',
      },
      {
        id: 9,
        name: 'Blender with Fresh Fruits',
        price: 100,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/metal-food-blender-close-up-with-fresh-exotic-tropic-fruits-it-kitchen-background-with-empty-space-blender-wooden-table-kitchen_639032-170.jpg',
      },
      {
        id: 10,
        name: 'Coffee Machine',
        price: 120,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-vector/coffee-drinks-realistic-illustration-with-coffee-machine-cup_1284-58702.jpg',
      },
    ],
  },
  {
    category: 'Sports',
    products: [
      {
        id: 1,
        name: 'Sneakers',
        price: 50,
        quantity: 10,
        imageSrc:
          'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        name: 'Sneakers',
        price: 50,
        quantity: 10,
        imageSrc:
          'https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        name: 'Sneakers',
        price: 50,
        quantity: 10,
        imageSrc:
          'https://images.pexels.com/photos/998883/pexels-photo-998883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      },
      {
        id: 4,
        name: 'T-shirt',
        price: 50,
        quantity: 10,
        imageSrc:
          'https://img.freepik.com/free-vector/soccer-jersey-front-back-design_52683-44070.jpg',
      },
      {
        id: 5,
        name: 'T-shirt',
        price: 50,
        quantity: 10,
        imageSrc:
          'https://img.freepik.com/free-vector/soccer-jersey-template-sport-t-shirt-design_29096-1299.jpg',
      },
      {
        id: 6,
        name: 'T-shirt',
        price: 35,
        quantity: 10,
        imageSrc:
          'https://img.freepik.com/premium-vector/vector-vector-modern-trendy-sports-jersey-template-design-football-gaming-jersey_795261-21.jpg',
      },
      {
        id: 7,
        name: 'T-shirt',
        price: 35,
        quantity: 10,
        imageSrc:
          'https://img.freepik.com/free-vector/soccer-jersey-pattern-design_23-2150294664.jpg',
      },
      {
        id: 8,
        name: 'T-shirt',
        price: 35,
        quantity: 10,
        imageSrc:
          'https://img.freepik.com/free-vector/sports-shirt-design-ready-print-football-shirt-sublimation_29096-4134.jpg',
      },
      {
        id: 9,
        name: 'Sneakers',
        price: 35,
        quantity: 10,
        imageSrc:
          'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260',
      },
      {
        id: 10,
        name: 'Sneakers',
        price: 35,
        quantity: 10,
        imageSrc:
          'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260',
      },
    ],
  },
  {
    category: 'Motors',
    products: [
      {
        id: 1,
        name: 'Motorcycle - 3D Rendering',
        price: 8000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/motorcycle-transparent-background-3d-rendering-illustration_494250-61443.jpg',
      },
      {
        id: 2,
        name: 'Motorcycle - Indoor Presentation',
        price: 7500,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/cool-motorcycle-presentation-indoors_23-2150849583.jpg',
      },
      {
        id: 3,
        name: 'Yellow Sportbike',
        price: 8500,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/isolated-realistic-metal-yellow-sportbike-motorcycle-from-left-front-view_16145-1925.jpg',
      },
      {
        id: 4,
        name: 'Motorcycle - Outdoors',
        price: 7000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/cool-motorcycle-outdoors_23-2150849447.jpg',
      },
      {
        id: 5,
        name: 'Offroader Jeep',
        price: 30000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg',
      },
      {
        id: 6,
        name: 'Black Mini Coupe',
        price: 25000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/black-mini-coupe-road_114579-5056.jpg',
      },
      {
        id: 7,
        name: 'Luxury Car - 3D Rendering',
        price: 45000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/luxury-car-transparent-background-3d-rendering-illustration_494250-32501.jpg',
      },
      {
        id: 8,
        name: 'White Sport Car',
        price: 50000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/white-sport-car-isolated_798986-2262.jpg',
      },
      {
        id: 9,
        name: 'Blue Sport SUV',
        price: 42000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/isolated-realistic-matte-blue-sport-city-suv-car-from-left-front-view_16145-4922.jpg',
      },
      {
        id: 10,
        name: 'Luxury Car - 3D Rendering',
        price: 46000,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/luxury-car-transparent-background-3d-rendering-illustration_494250-32501.jpg',
      },
    ],
  },
  {
    category: 'Jewelry',
    products: [
      {
        id: 1,
        name: 'Gold Chain 1',
        price: 200,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/display-shiny-elegant-gold-chain_23-2149635331.jpg',
      },
      {
        id: 2,
        name: 'Gold and Silver Jewelry Display',
        price: 250,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg',
      },
      {
        id: 3,
        name: 'Jewelry Photography',
        price: 220,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/jewelry-photography_808279-7.jpg',
      },
      {
        id: 4,
        name: 'Earrings with Blue Precious Stones',
        price: 180,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/model-shows-earrings-ring-with-beautiful-blue-precious-stones_8353-5043.jpg',
      },
      {
        id: 5,
        name: 'Luxurious Gold Chain 2',
        price: 210,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/display-shiny-luxurious-golden-chain_23-2149635270.jpg',
      },
      {
        id: 6,
        name: 'Luxury Necklace Display',
        price: 230,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7946.jpg',
      },
      {
        id: 7,
        name: 'Abstract Gold Chain Presentation',
        price: 190,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599059.jpg',
      },
      {
        id: 8,
        name: 'Gold Necklace Stand',
        price: 260,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/gold-necklace-necklace-display-stand_28549-329.jpg',
      },
      {
        id: 9,
        name: 'Gold Jewelry on White Background',
        price: 240,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/gold-jewelry-white-background_237502-499.jpg',
      },
      {
        id: 10,
        name: 'Gold Wedding Rings',
        price: 270,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/two-gold-wedding-rings-with-blue-background_176841-63571.jpg',
      },
    ],
  },
  {
    category: 'Beauty',
    products: [
      {
        id: 1,
        name: 'Beauty Products Set',
        price: 30,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/close-up-beauty-products-white-background_1048944-30689032.jpg',
      },
      {
        id: 2,
        name: 'Watercolor Wellness Design',
        price: 20,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-psd/watercolor-wellness-design-template_23-2149549911.jpg',
      },
      {
        id: 3,
        name: 'Cosmetic Treatment Kit',
        price: 40,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/cosmetic-treatment-with-copy-space_23-2148574963.jpg',
      },
      {
        id: 4,
        name: 'Natural Cosmetic Banner',
        price: 25,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-vector/natural-cosmetic-banner_23-2148971922.jpg',
      },
      {
        id: 5,
        name: 'Cosmetic Bottle with Ginkgo Leaves',
        price: 35,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-vector/cosmetics-skincare-product-bottle-mockup-ginkgo-leaves_148899-221.jpg',
      },
      {
        id: 6,
        name: 'Bath Concept with Marble Background',
        price: 28,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/free-photo/flat-lay-bath-concept-marble-background_23-2148295951.jpg',
      },
      {
        id: 7,
        name: 'Organic Cosmetics with Spa Products',
        price: 30,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-photo/organic-cosmetics-with-spa-products-flatlay-plants-pink-background_124507-33952.jpg',
      },
      {
        id: 8,
        name: 'Beauty Concept with Organic Cosmetics',
        price: 22,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/beauty-concept-with-organic-cosmetics_23-2148608250.jpg',
      },
      {
        id: 9,
        name: 'Argan Oil Products Mockup',
        price: 45,
        quantity: 50,
        imageSrc:
          'https://img.freepik.com/premium-psd/argan-oil-products-mockup_23-2149287504.jpg',
      },
    ],
  },
];
export default allProducts

const products_ = allProducts.flatMap(categoryObj =>
  categoryObj.products.map(product => ({
    ...product,
    category: categoryObj.category,
  }))
);

const newProducts=(products)=>{
  let nextId = 1 
  let updated=[]
  for (const product of products){
    const updatedProduct ={...product,id:nextId++}
    updated.push(updatedProduct)
    
    
  }
  return updated
}
const newList = newProducts(products_)
const createUnique=(product,listName)=>{
  return `${listName}-${product.id}-${product.name}-${product.category}`
}
export const store_1 = newList.map((product)=>({
  ...product,
  fob:createUnique(product,'store_1')
}))
export const store_2 = productsB.map((product)=>({
  ...product,
  fob:createUnique(product,'store_2')
  
}))
export const store_3= productsA.map((product)=>({
  ...product,
  fob:createUnique(product,'store_3')

}))

