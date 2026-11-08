export const branches = [
  { id:'b1', name:'فرع مدينة نصر', area:'القاهرة', manager:'أحمد محمود' },
  { id:'b2', name:'فرع التجمع الخامس', area:'القاهرة الجديدة', manager:'سارة علي' },
  { id:'b3', name:'فرع الإسكندرية', area:'الإسكندرية', manager:'محمود حسن' },
];
export const categories=['الكل','ملابس رجالي','ملابس حريمي','أطفال','أحذية','إكسسوارات'];
export const products=[
 {id:'p1',image:'/assets/shirt-blue.webp',name:'قميص كتان كلاسيك',sku:'DRS-1042',barcode:'6223000104218',category:'ملابس رجالي',brand:'Dress House',price:1250,cost:720,stock:24,minimum:8,color:'#e5d9c8',icon:'👔',sizes:['M','L','XL'],colors:['بيج','أبيض','كحلي']},
 {id:'p2',image:'/assets/hoodie-beige.webp',name:'فستان صيفي مزهر',sku:'DRS-2087',barcode:'6223000208712',category:'ملابس حريمي',brand:'Luna',price:1890,cost:1060,stock:12,minimum:5,color:'#efdde8',icon:'👗',sizes:['S','M','L'],colors:['وردي','أزرق']},
 {id:'p3',image:'/assets/tee-black.webp',name:'تيشيرت قطني أساسي',sku:'DRS-3014',barcode:'6223000301425',category:'ملابس رجالي',brand:'Urban',price:650,cost:320,stock:48,minimum:12,color:'#dce5ee',icon:'👕',sizes:['S','M','L','XL'],colors:['أبيض','أسود','رمادي']},
 {id:'p4',image:'/assets/jacket-black.webp',name:'جاكيت جينز يومي',sku:'DRS-4110',barcode:'6223000411054',category:'ملابس حريمي',brand:'Luna',price:2350,cost:1420,stock:6,minimum:8,color:'#dce3ec',icon:'🧥',sizes:['M','L'],colors:['أزرق فاتح','كحلي']},
 {id:'p5',image:'/assets/sneaker-white.webp',name:'حذاء رياضي خفيف',sku:'DRS-5026',barcode:'6223000502642',category:'أحذية',brand:'Step',price:1650,cost:920,stock:18,minimum:6,color:'#e4e1dc',icon:'👟',sizes:['38','39','40','41','42'],colors:['أبيض','أسود']},
 {id:'p6',image:'/assets/backpack-black.webp',name:'حقيبة كتف جلد',sku:'DRS-6033',barcode:'6223000603389',category:'إكسسوارات',brand:'Luna',price:2100,cost:1250,stock:9,minimum:5,color:'#e7ded2',icon:'👜',sizes:['واحد'],colors:['بني','أسود']},
 {id:'p7',image:'/assets/hoodie-gray.webp',name:'طقم أطفال قطني',sku:'DRS-7049',barcode:'6223000704958',category:'أطفال',brand:'Mini',price:890,cost:480,stock:31,minimum:10,color:'#e8e5fa',icon:'🧸',sizes:['2Y','4Y','6Y'],colors:['ليلكي','أخضر']},
 {id:'p8',image:'/assets/shirt-blue.webp',name:'بلوزة ساتان أنيقة',sku:'DRS-8091',barcode:'6223000809177',category:'ملابس حريمي',brand:'Luna',price:1420,cost:780,stock:3,minimum:6,color:'#e8deee',icon:'👚',sizes:['S','M','L'],colors:['موف','كريمي']},
];
export const customers=[
 {id:'c1',name:'نورهان أحمد',phone:'0101 234 5678',email:'norhan@example.com',type:'ذهبي',points:1240,total:28450,visits:18,avatar:'ن'},
 {id:'c2',name:'مريم خالد',phone:'0112 345 6789',email:'mariam@example.com',type:'فضي',points:680,total:16300,visits:11,avatar:'م'},
 {id:'c3',name:'سلمى إبراهيم',phone:'0122 456 7890',email:'salma@example.com',type:'برونزي',points:210,total:7800,visits:6,avatar:'س'},
 {id:'c4',name:'عمر مصطفى',phone:'0100 567 8901',email:'omar@example.com',type:'ذهبي',points:980,total:22100,visits:14,avatar:'ع'},
 {id:'c5',name:'ياسمين علي',phone:'0155 678 9012',email:'yasmin@example.com',type:'فضي',points:450,total:11900,visits:9,avatar:'ي'},
];
export const suppliers=[
 {id:'s1',name:'شركة النسيج المصري',contact:'خالد عبد الرحمن',phone:'02 2456 7890',email:'sales@egytextile.com',category:'أقمشة وملابس',total:184500,balance:12750},
 {id:'s2',name:'مصنع الأناقة للملابس',contact:'منى فؤاد',phone:'02 2345 6789',email:'info@elegance.eg',category:'ملابس جاهزة',total:126800,balance:8400},
 {id:'s3',name:'مؤسسة خطوة للأحذية',contact:'عمرو سامي',phone:'03 4567 8901',email:'orders@khotwa.eg',category:'أحذية',total:78600,balance:0},
];
export const users=[
 {id:'u1',name:'أحمد محمود',email:'ahmed@dresspos.com',role:'مدير فرع',branch:'مدينة نصر',status:'نشط',last:'اليوم، 10:42 ص'},
 {id:'u2',name:'سارة علي',email:'sara@dresspos.com',role:'كاشير',branch:'التجمع الخامس',status:'نشط',last:'اليوم، 09:15 ص'},
 {id:'u3',name:'محمود حسن',email:'mahmoud@dresspos.com',role:'مسؤول مخزون',branch:'الإسكندرية',status:'نشط',last:'أمس، 06:30 م'},
 {id:'u4',name:'دينا سمير',email:'dina@dresspos.com',role:'محاسب',branch:'مدينة نصر',status:'معلق',last:'05 نوفمبر، 02:10 م'},
];
export const invoices=[
 {id:'INV-2084',customer:customers[0],branch:branches[0],date:'08 نوفمبر 2026، 10:32 ص',payment:'بطاقة بنكية',status:'مكتملة',total:3140,items:[{product:products[0],qty:1},{product:products[5],qty:1}]},
 {id:'INV-2083',customer:customers[1],branch:branches[1],date:'08 نوفمبر 2026، 09:48 ص',payment:'نقدي',status:'مكتملة',total:2540,items:[{product:products[1],qty:1},{product:products[2],qty:1}]},
 {id:'INV-2082',customer:customers[3],branch:branches[0],date:'07 نوفمبر 2026، 06:20 م',payment:'محفظة إلكترونية',status:'مكتملة',total:4000,items:[{product:products[3],qty:1},{product:products[4],qty:1}]},
 {id:'INV-2081',customer:customers[2],branch:branches[2],date:'07 نوفمبر 2026، 04:15 م',payment:'نقدي',status:'مستردة',total:890,items:[{product:products[6],qty:1}]},
 {id:'INV-2080',customer:customers[4],branch:branches[1],date:'06 نوفمبر 2026، 01:05 م',payment:'بطاقة بنكية',status:'مكتملة',total:3310,items:[{product:products[7],qty:1},{product:products[4],qty:1}]},
];
export const movements=[
 {id:'ST-1042',product:products[3],type:'صرف مبيعات',qty:-2,branch:branches[0].name,date:'08 نوفمبر، 10:14 ص'},
 {id:'ST-1041',product:products[0],type:'استلام مشتريات',qty:12,branch:branches[1].name,date:'08 نوفمبر، 09:50 ص'},
 {id:'ST-1040',product:products[7],type:'تحويل مخزني',qty:4,branch:branches[0].name,date:'07 نوفمبر، 05:32 م'},
 {id:'ST-1039',product:products[4],type:'صرف مبيعات',qty:-1,branch:branches[2].name,date:'07 نوفمبر، 03:20 م'},
];
export const kpis=[{label:'إجمالي المبيعات',value:'872,400',unit:'ج.م',delta:'+12.8%',icon:'TrendingUp',tone:'violet'},{label:'الطلبات اليوم',value:'326',unit:'طلب',delta:'+8.2%',icon:'ShoppingBag',tone:'blue'},{label:'المنتجات',value:'684',unit:'منتج',delta:'+24 جديد',icon:'Package',tone:'orange'},{label:'العملاء',value:'1,428',unit:'عميل',delta:'+6.4%',icon:'UsersRound',tone:'green'}];
export const salesSeries=[{day:'السبت',current:38,previous:28},{day:'الأحد',current:52,previous:35},{day:'الإثنين',current:43,previous:32},{day:'الثلاثاء',current:67,previous:41},{day:'الأربعاء',current:56,previous:39},{day:'الخميس',current:78,previous:50},{day:'الجمعة',current:64,previous:44}];
export const formatMoney=(n)=>new Intl.NumberFormat('ar-EG').format(n)+' ج.م';
