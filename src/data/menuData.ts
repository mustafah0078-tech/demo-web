export interface LocalizedText {
  en: string;
  ar: string;
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  image: string;
  price: number;
  tags: string[];
  isSignature?: boolean;
  name: LocalizedText;
  description: LocalizedText;
}

export const categories: MenuCategory[] = [
  { id: 'soup', name: { en: 'Soup', ar: 'الشوربات' } },
  { id: 'salads', name: { en: 'Salads', ar: 'السلطات' } },
  { id: 'cold-appetizers', name: { en: 'Cold Appetizers', ar: 'مقبلات باردة' } },
  { id: 'hot-appetizers', name: { en: 'Hot Appetizers', ar: 'مقبلات ساخنة' } },
  { id: 'charcoal-grills', name: { en: 'Charcoal Grills', ar: 'مشاوي الفحم' } },
  { id: 'main-course', name: { en: 'Main Course', ar: 'الأطباق الرئيسية' } },
  { id: 'fatteh', name: { en: 'Fatteh', ar: 'فتات' } },
  { id: 'pide', name: { en: 'Pide', ar: 'فطائر تركية (بيدا)' } },
  { id: 'manaqish', name: { en: 'Manaqish', ar: 'مناقيش' } },
  { id: 'oven', name: { en: 'Oven', ar: 'من الفرن' } },
  { id: 'sargon-new', name: { en: 'AURUM New', ar: 'جديد أوروم' } },
  { id: 'sandwiches', name: { en: 'Sandwiches', ar: 'سندويشات' } },
  { id: 'desserts', name: { en: 'Desserts', ar: 'الحلويات' } },
  { id: 'drinks', name: { en: 'Drinks', ar: 'المشروبات' } },
  { id: 'signature-drinks', name: { en: 'Signature Drinks', ar: 'مشروبات أوروم المميزة' } },
];

export const menuItems: MenuItem[] = [
  // Soups
  {
    id: 'lentil-soup',
    categoryId: 'soup',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
    price: 35,
    tags: ['vegetarian'],
    name: { en: 'Lentil Soup', ar: 'شوربة عدس' },
    description: { en: 'Traditional Middle Eastern lentil soup served with crispy bread.', ar: 'شوربة العدس التقليدية تقدم مع الخبز المحمص.' },
  },
  
  // Salads
  {
    id: 'fattoush',
    categoryId: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    price: 45,
    tags: ['vegetarian'],
    name: { en: 'Fattoush', ar: 'فتوش' },
    description: { en: 'Fresh mixed greens, tomatoes, cucumber, radish with pomegranate molasses and crispy bread.', ar: 'خضار طازجة، طماطم، خيار، فجل مع دبس الرمان والخبز المحمص.' },
  },
  {
    id: 'tabbouleh',
    categoryId: 'salads',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=800',
    price: 45,
    tags: ['vegetarian'],
    name: { en: 'Tabbouleh', ar: 'تبولة' },
    description: { en: 'Finely chopped parsley, tomatoes, mint, onion, bulgur, seasoned with olive oil and lemon juice.', ar: 'بقدونس مفروم ناعم، طماطم، نعناع، بصل، برغل، متبلة بزيت الزيتون وعصير الليمون.' },
  },

  // Cold Appetizers
  {
    id: 'hummus-sargon',
    categoryId: 'cold-appetizers',
    image: 'https://images.unsplash.com/photo-1577905886361-1279efb50720?auto=format&fit=crop&q=80&w=800',
    price: 38,
    tags: ['vegetarian'],
    name: { en: 'AURUM Signature Hummus', ar: 'حمص أوروم المميز' },
    description: { en: 'Creamy chickpea purée with tahini, lemon juice, and extra virgin olive oil.', ar: 'حمص مهروس مع الطحينة وعصير الليمون وزيت الزيتون البكر الممتاز.' },
  },
  {
    id: 'mutabbal',
    categoryId: 'cold-appetizers',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    price: 40,
    tags: ['vegetarian'],
    name: { en: 'Mutabbal', ar: 'متبل' },
    description: { en: 'Roasted eggplant mashed with tahini, garlic, and yogurt.', ar: 'باذنجان مشوي مهروس مع الطحينة والثوم واللبن.' },
  },

  // Hot Appetizers
  {
    id: 'batata-harra',
    categoryId: 'hot-appetizers',
    image: 'https://images.unsplash.com/photo-1588137330759-9988225585d9?auto=format&fit=crop&q=80&w=800',
    price: 35,
    tags: ['vegetarian'],
    name: { en: 'Batata Harra', ar: 'بطاطا حرة' },
    description: { en: 'Spicy roasted potatoes with garlic, coriander, and chili.', ar: 'مكعبات بطاطا مقلية مع الثوم والكزبرة والفلفل الحار.' },
  },

  // Charcoal Grills
  {
    id: 'sargon-special-grills',
    categoryId: 'charcoal-grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    price: 220,
    tags: ['grills', 'beef', 'chicken', 'lamb'],
    isSignature: true,
    name: { en: 'AURUM Special Grills', ar: 'مشاوي أوروم المميزة' },
    description: { en: 'A luxurious assortment of premium meat cuts, shish tawook, kebab, and lamb chops, served with grilled vegetables and saffron rice.', ar: 'تشكيلة فاخرة من قطع اللحم الممتازة، شيش طاووق، كباب، وريش الغنم، تقدم مع الخضار المشوية وأرز الزعفران.' },
  },
  {
    id: 'mixed-grills',
    categoryId: 'charcoal-grills',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=800',
    price: 150,
    tags: ['grills', 'beef', 'chicken', 'lamb'],
    isSignature: true,
    name: { en: 'Mixed Grills', ar: 'مشاوي مشكلة' },
    description: { en: 'Selection of our finest skewers: lamb kebab, chicken kebab, and beef tikka.', ar: 'تشكيلة من أسياخنا المميزة: كباب لحم، كباب دجاج، وتكا لحم.' },
  },
  {
    id: 'cherry-kabab',
    categoryId: 'charcoal-grills',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
    price: 120,
    tags: ['grills', 'lamb'],
    isSignature: true,
    name: { en: 'Cherry Kabab', ar: 'كباب بالكرز' },
    description: { en: 'Authentic Aleppian lamb meatballs cooked in a rich, sweet and sour cherry sauce, topped with pine nuts.', ar: 'كرات لحم الغنم الحلبية الأصيلة مطبوخة بصلصة الكرز الحلوة والحامضة الغنية، مغطاة بالصنوبر.' },
  },
  {
    id: 'lamb-chops',
    categoryId: 'charcoal-grills',
    image: 'https://images.unsplash.com/photo-1514516872583-04e760c384bf?auto=format&fit=crop&q=80&w=800',
    price: 140,
    tags: ['grills', 'lamb'],
    isSignature: true,
    name: { en: 'Lamb Chops', ar: 'ريش غنم' },
    description: { en: 'Premium marinated lamb chops grilled to perfection.', ar: 'ريش غنم متبلة ممتازة مشوية بامتياز.' },
  },

  // Main Course
  {
    id: 'sayadiyah',
    categoryId: 'main-course',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    price: 95,
    tags: ['seafood'],
    name: { en: 'Fish Sayadiyah', ar: 'صيادية سمك' },
    description: { en: 'Spiced rice cooked with caramelized onions, topped with fresh grilled fish fillet.', ar: 'أرز مبهر مطبوخ مع البصل المكرمل، يعلوه فيليه سمك طازج مشوي.' },
  },

  // Fatteh
  {
    id: 'fatteh-makdous',
    categoryId: 'fatteh',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    price: 45,
    tags: ['vegetarian'],
    name: { en: 'Eggplant Fatteh', ar: 'فتة مكدوس' },
    description: { en: 'Crispy pita layered with warm chickpeas, garlic yogurt, and sautéed eggplant.', ar: 'خبز محمص مع حمص، لبن بالثوم، وباذنجان مقلي.' },
  },

  // Pide
  {
    id: 'cheese-pide',
    categoryId: 'pide',
    image: 'https://images.unsplash.com/photo-1594998964585-8bf8c874f664?auto=format&fit=crop&q=80&w=800',
    price: 55,
    tags: ['vegetarian', 'oven'],
    name: { en: 'Cheese Pide', ar: 'بيدا بالجبنة' },
    description: { en: 'Traditional Turkish flatbread baked with a blend of premium cheeses.', ar: 'خبز تركي تقليدي مخبوز مع مزيج من الأجبان الفاخرة.' },
  },

  // Manaqish
  {
    id: 'zaatar-manaqish',
    categoryId: 'manaqish',
    image: 'https://images.unsplash.com/photo-1588137330759-9988225585d9?auto=format&fit=crop&q=80&w=800',
    price: 25,
    tags: ['vegetarian', 'oven'],
    name: { en: 'Zaatar Manaqish', ar: 'منقوشة زعتر' },
    description: { en: 'Freshly baked flatbread topped with wild thyme, sesame, and olive oil.', ar: 'خبز طازج مغطى بالزعتر البري والسمسم وزيت الزيتون.' },
  },

  // Oven
  {
    id: 'lahm-bi-ajin',
    categoryId: 'oven',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    price: 35,
    tags: ['beef', 'oven'],
    name: { en: 'Lahm Bi Ajin', ar: 'لحم بعجين' },
    description: { en: 'Thin crust topped with minced lamb, tomatoes, onions, and pine nuts.', ar: 'عجينة رقيقة مغطاة بلحم الغنم المفروم والطماطم والبصل والصنوبر.' },
  },

  // AURUM New
  {
    id: 'sargon-truffle-hummus',
    categoryId: 'sargon-new',
    image: 'https://images.unsplash.com/photo-1577905886361-1279efb50720?auto=format&fit=crop&q=80&w=800',
    price: 50,
    tags: ['vegetarian'],
    name: { en: 'Truffle Hummus', ar: 'حمص بالكمأة' },
    description: { en: 'Our signature hummus infused with black truffle oil and topped with wild mushrooms.', ar: 'حمص أوروم المميز بنكهة زيت الكمأة السوداء ومغطى بالفطر البري.' },
  },

  // Sandwiches
  {
    id: 'shawarma-wrap',
    categoryId: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800',
    price: 35,
    tags: ['chicken'],
    name: { en: 'Chicken Shawarma Wrap', ar: 'سندويش شاورما دجاج' },
    description: { en: 'Marinated chicken roasted on a spit, wrapped with garlic sauce and pickles.', ar: 'دجاج متبل مشوي على السيخ، ملفوف مع صوص الثوم والمخلل.' },
  },

  // Desserts
  {
    id: 'kunafa',
    categoryId: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    price: 65,
    tags: ['desserts', 'vegetarian'],
    isSignature: true,
    name: { en: 'AURUM Kunafa', ar: 'كنافة أوروم' },
    description: { en: 'Warm cheese pastry soaked in sweet sugar-based syrup, served with crushed pistachios.', ar: 'معجنات الجبن الدافئة المنقوعة في شراب السكر الحلو، تقدم مع الفستق المطحون.' },
  },
  
  // Drinks
  {
    id: 'mint-lemonade',
    categoryId: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    price: 30,
    tags: ['drinks', 'vegetarian'],
    name: { en: 'Mint Lemonade', ar: 'ليمون بالنعناع' },
    description: { en: 'Refreshing blend of fresh lemon juice, mint leaves, and a touch of sweetness.', ar: 'مزيج منعش من عصير الليمون الطازج وأوراق النعناع ولمسة من الحلاوة.' },
  },

  // Signature Drinks
  {
    id: 'sargon-breeze',
    categoryId: 'signature-drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    price: 45,
    tags: ['drinks', 'vegetarian'],
    isSignature: true,
    name: { en: 'AURUM Breeze', ar: 'نسيم أوروم' },
    description: { en: 'A luxurious mocktail featuring pomegranate, rose water, and sparkling water with edible gold leaf.', ar: 'موكتيل فاخر يضم الرمان وماء الورد والمياه الفوارة مع ورقة الذهب الصالحة للأكل.' },
  }
];

export const filters = [
  { id: 'all', name: { en: 'All', ar: 'الكل' } },
  { id: 'vegetarian', name: { en: 'Vegetarian', ar: 'نباتي' } },
  { id: 'grills', name: { en: 'Grills', ar: 'مشاوي' } },
  { id: 'chicken', name: { en: 'Chicken', ar: 'دجاج' } },
  { id: 'beef', name: { en: 'Beef', ar: 'لحم بقر' } },
  { id: 'lamb', name: { en: 'Lamb', ar: 'لحم غنم' } },
  { id: 'seafood', name: { en: 'Seafood', ar: 'مأكولات بحرية' } },
  { id: 'desserts', name: { en: 'Desserts', ar: 'حلويات' } },
  { id: 'drinks', name: { en: 'Drinks', ar: 'مشروبات' } },
];
