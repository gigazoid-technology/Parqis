// import React, { useState } from "react";

// // Tailwind-based UI components
// function Button({
//   children,
//   className = "",
//   variant = "default",
//   size = "md",
//   ...props
// }) {
//   const base =
//     "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 bg-white hover:bg-gray-50",
//     ghost: "bg-transparent hover:bg-gray-100",
//     secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
//   };
//   const sizes = {
//     md: "px-4 py-2 text-sm",
//     sm: "px-3 py-1.5 text-sm",
//     icon: "p-2",
//   };
//   return (
//     <button
//       className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
// function Card({ className = "", children }) {
//   return (
//     <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
//       {children}
//     </div>
//   );
// }
// function CardHeader({ className = "", children }) {
//   return <div className={`p-4 border-b ${className}`}>{children}</div>;
// }
// function CardTitle({ className = "", children }) {
//   return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
// }
// function CardContent({ className = "", children }) {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// }
// function Input({ className = "", ...props }) {
//   return (
//     <input
//       className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//       {...props}
//     />
//   );
// }
// function Badge({ className = "", children }) {
//   return (
//     <span
//       className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 ${className}`}
//     >
//       {children}
//     </span>
//   );
// }
// function Sheet({ children }) {
//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
//       {children}
//     </div>
//   );
// }
// function SheetContent({ children, className = "" }) {
//   return (
//     <div className={`w-80 bg-white h-full shadow-lg ${className}`}>
//       {children}
//     </div>
//   );
// }
// function SheetHeader({ children }) {
//   return <div className="p-4 border-b">{children}</div>;
// }
// function SheetTitle({ children }) {
//   return <h2 className="text-lg font-semibold">{children}</h2>;
// }
// function Tabs({ children }) {
//   return <div>{children}</div>;
// }
// function TabsList({ children }) {
//   return <div className="flex space-x-2 border-b mb-4">{children}</div>;
// }
// function TabsTrigger({ children, isActive, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-3 py-1.5 text-sm ${
//         isActive
//           ? "border-b-2 border-blue-500 text-blue-600"
//           : "text-gray-600 hover:text-blue-500"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }
// function TabsContent({ children }) {
//   return <div>{children}</div>;
// }
// function Slider({ value, onChange, min = 0, max = 100 }) {
//   return (
//     <input
//       type="range"
//       min={min}
//       max={max}
//       value={value}
//       onChange={(e) => onChange([+e.target.value])}
//       className="w-full"
//     />
//   );
// }
// function Label({ children }) {
//   return (
//     <label className="text-sm font-medium text-gray-700">{children}</label>
//   );
// }
// function Separator() {
//   return <hr className="my-4 border-gray-200" />;
// }

// // Rest of the ShopHub component logic goes here, using the above components instead of shadcn/ui

// import { toast } from "sonner";
// import {
//   ShoppingCart,
//   Heart,
//   Search,
//   Star,
//   Minus,
//   Plus,
//   X,
//   Home,
//   User,
//   Settings,
//   Filter,
//   ChevronRight,
//   Tag,
//   Truck,
//   ShieldCheck,
// } from "lucide-react";

// /**
//  * ShopHub App — React + Tailwind + shadcn/ui
//  * This single-file component provides a polished, interactive prototype inspired by a typical commerce app.
//  * It includes:
//  * - Home feed with categories, featured, trending
//  * - Search with filters (price range, rating, availability)
//  * - Product details (modal) with gallery, specs, reviews snapshot
//  * - Cart drawer with quantity controls and checkout summary
//  * - Wishlist (Favorites)
//  * - Profile stub and settings
//  *
//  * You can drop this into any React project with Tailwind + shadcn/ui configured.
//  */

// const PRODUCTS = [
//   {
//     id: "p1",
//     name: "AirLite Wireless Headphones",
//     brand: "Auralab",
//     price: 129.99,
//     rating: 4.6,
//     reviews: 842,
//     image:
//       "https://images.unsplash.com/photo-1518441798251-b4c3b4f406d0?q=80&w=1200&auto=format&fit=crop",
//     category: "Audio",
//     tags: ["wireless", "noise-cancel", "fast-charge"],
//     stock: 22,
//     delivery: "2–4 days",
//   },
//   {
//     id: "p2",
//     name: "Nimbus Smartwatch 2",
//     brand: "Tempo",
//     price: 199.0,
//     rating: 4.4,
//     reviews: 1203,
//     image:
//       "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop",
//     category: "Wearables",
//     tags: ["GPS", "sleep", "waterproof"],
//     stock: 8,
//     delivery: "Tomorrow",
//   },
//   {
//     id: "p3",
//     name: "ArcPad Pro 11” Tablet",
//     brand: "Paperkite",
//     price: 499.99,
//     rating: 4.7,
//     reviews: 654,
//     image:
//       "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
//     category: "Tablets",
//     tags: ["stylus", "120Hz", "256GB"],
//     stock: 15,
//     delivery: "3–5 days",
//   },
//   {
//     id: "p4",
//     name: "Pulse Mechanical Keyboard",
//     brand: "Keebly",
//     price: 89.99,
//     rating: 4.2,
//     reviews: 312,
//     image:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
//     category: "Accessories",
//     tags: ["hot-swap", "RGB", "low-latency"],
//     stock: 30,
//     delivery: "2–3 days",
//   },
//   {
//     id: "p5",
//     name: "Lumina 27” 4K Monitor",
//     brand: "PixelSmith",
//     price: 349.0,
//     rating: 4.5,
//     reviews: 980,
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
//     category: "Monitors",
//     tags: ["IPS", "60–144Hz", "VESA"],
//     stock: 6,
//     delivery: "5–7 days",
//   },
// ];

// const CATEGORIES = [
//   { id: "c1", name: "Audio" },
//   { id: "c2", name: "Wearables" },
//   { id: "c3", name: "Tablets" },
//   { id: "c4", name: "Accessories" },
//   { id: "c5", name: "Monitors" },
// ];

// function useLocalState(key, initial) {
//   const [value, setValue] = useState(() => {
//     try {
//       const v = localStorage.getItem(key);
//       return v ? JSON.parse(v) : initial;
//     } catch {
//       return initial;
//     }
//   });
//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch {}
//   }, [key, value]);
//   return [value, setValue];
// }

// function Price({ value }) {
//   return (
//     <span className="tabular-nums">
//       ₹
//       {value.toLocaleString(undefined, {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//       })}
//     </span>
//   );
// }

// function Rating({ value }) {
//   return (
//     <div className="flex items-center gap-1">
//       <Star className="h-4 w-4" />
//       <span className="text-sm font-medium">{value}</span>
//     </div>
//   );
// }

// function ProductCard({ p, onOpen }) {
//   return (
//     <Card className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
//       <CardContent className="p-0">
//         <button onClick={() => onOpen(p)} className="w-full text-left">
//           <div className="aspect-[4/3] w-full overflow-hidden">
//             <img
//               src={p.image}
//               alt={p.name}
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="p-3 flex flex-col gap-1">
//             <div className="text-sm text-muted-foreground">{p.brand}</div>
//             <div className="font-medium leading-tight line-clamp-2">
//               {p.name}
//             </div>
//             <div className="flex items-center justify-between pt-2">
//               <Price value={p.price} />
//               <Rating value={p.rating} />
//             </div>
//             <div className="flex flex-wrap gap-1 pt-2">
//               {p.tags.slice(0, 3).map((t) => (
//                 <Badge key={t} variant="secondary" className="rounded-full">
//                   {t}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </button>
//       </CardContent>
//     </Card>
//   );
// }

// function ProductModal({ product, onClose, onAdd, isFav, toggleFav }) {
//   if (!product) return null;
//   return (
//     <AnimatePresence>
//       <motion.div
//         key={product.id}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 md:p-6"
//       >
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 40, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 200, damping: 24 }}
//           className="bg-background w-full md:max-w-3xl rounded-t-3xl md:rounded-3xl overflow-hidden"
//         >
//           <div className="relative">
//             <button
//               onClick={onClose}
//               className="absolute right-3 top-3 p-2 rounded-full bg-background/80 backdrop-blur border"
//             >
//               <X className="h-5 w-5" />
//             </button>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//           <div className="p-5 space-y-4">
//             <div className="flex items-start justify-between gap-3">
//               <div>
//                 <div className="text-sm text-muted-foreground">
//                   {product.brand}
//                 </div>
//                 <h3 className="text-xl font-semibold leading-tight">
//                   {product.name}
//                 </h3>
//               </div>
//               <button
//                 onClick={() => toggleFav(product.id)}
//                 className={`p-2 rounded-full border ${
//                   isFav ? "bg-foreground text-background" : "bg-background"
//                 }`}
//               >
//                 <Heart className="h-5 w-5" />
//               </button>
//             </div>
//             <div className="flex items-center gap-4">
//               <Price value={product.price} />
//               <Separator orientation="vertical" className="h-6" />
//               <Rating value={product.rating} />
//               <span className="text-sm text-muted-foreground">
//                 ({product.reviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center gap-3 text-sm">
//               <Tag className="h-4 w-4" /> <span>In stock: {product.stock}</span>
//               <Truck className="h-4 w-4" />{" "}
//               <span>Delivery: {product.delivery}</span>
//               <ShieldCheck className="h-4 w-4" /> <span>1-year warranty</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {product.tags.map((t) => (
//                 <Badge key={t} variant="outline" className="rounded-full">
//                   {t}
//                 </Badge>
//               ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-3 pt-2">
//               <Button className="w-full" onClick={() => onAdd(product)}>
//                 <ShoppingCart className="h-4 w-4 mr-2" /> Add to cart
//               </Button>
//               <Button
//                 variant="secondary"
//                 onClick={onClose}
//                 className="w-full md:w-auto"
//               >
//                 Close
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// function CartSheet({ open, setOpen, items, setItems }) {
//   const totals = useMemo(() => {
//     const subtotal = items.reduce((s, it) => s + it.qty * it.price, 0);
//     const shipping = subtotal > 500 ? 0 : subtotal === 0 ? 0 : 49;
//     const tax = subtotal * 0.05;
//     const total = subtotal + shipping + tax;
//     return { subtotal, shipping, tax, total };
//   }, [items]);

//   function updateQty(id, delta) {
//     setItems((prev) =>
//       prev
//         .map((it) =>
//           it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
//         )
//         .filter((it) => it.qty > 0)
//     );
//   }

//   function removeItem(id) {
//     setItems((prev) => prev.filter((it) => it.id !== id));
//   }

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetContent side="right" className="w-full sm:max-w-md">
//         <SheetHeader>
//           <SheetTitle>Your cart</SheetTitle>
//         </SheetHeader>
//         <div className="mt-4 space-y-4">
//           {items.length === 0 && (
//             <div className="text-sm text-muted-foreground">
//               Your cart is empty.
//             </div>
//           )}
//           {items.map((it) => (
//             <div key={it.id} className="flex gap-3 items-center">
//               <img
//                 src={it.image}
//                 alt={it.name}
//                 className="h-16 w-16 rounded-xl object-cover"
//               />
//               <div className="flex-1 min-w-0">
//                 <div className="font-medium truncate">{it.name}</div>
//                 <div className="text-sm text-muted-foreground">{it.brand}</div>
//                 <div className="mt-1">
//                   <Price value={it.price} />
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button
//                   size="icon"
//                   variant="outline"
//                   onClick={() => updateQty(it.id, -1)}
//                 >
//                   <Minus className="h-4 w-4" />
//                 </Button>
//                 <div className="w-8 text-center">{it.qty}</div>
//                 <Button
//                   size="icon"
//                   variant="outline"
//                   onClick={() => updateQty(it.id, 1)}
//                 >
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </div>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => removeItem(it.id)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 space-y-3">
//           <div className="flex justify-between text-sm">
//             <span>Subtotal</span>
//             <span>
//               <Price value={totals.subtotal} />
//             </span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span>Shipping</span>
//             <span>
//               {totals.shipping === 0 ? "Free" : `₹${totals.shipping}`}
//             </span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span>Tax</span>
//             <span>
//               <Price value={totals.tax} />
//             </span>
//           </div>
//           <Separator />
//           <div className="flex justify-between font-semibold text-lg">
//             <span>Total</span>
//             <span>
//               <Price value={totals.total} />
//             </span>
//           </div>
//         </div>
//         <Button className="w-full mt-6">Checkout</Button>
//       </SheetContent>
//     </Sheet>
//   );
// }

// function TopBar({ onCartOpen, onSearch, query, setQuery }) {
//   return (
//     <div className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
//         <div className="flex items-center gap-2 font-semibold text-lg">
//           <Home className="h-5 w-5" /> ShopHub
//         </div>
//         <div className="flex-1" />
//         <div className="hidden md:block w-[420px]">
//           <div className="relative">
//             <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" />
//             <Input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search products, brands…"
//               className="pl-10 rounded-full"
//             />
//           </div>
//         </div>
//         <Button variant="outline" onClick={onCartOpen} className="rounded-full">
//           <ShoppingCart className="h-4 w-4 mr-2" /> Cart
//         </Button>
//       </div>
//     </div>
//   );
// }

// function BottomNav({ tab, setTab, cartCount, favCount }) {
//   const items = [
//     { key: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
//     { key: "search", label: "Search", icon: <Search className="h-5 w-5" /> },
//     { key: "favorites", label: "Saved", icon: <Heart className="h-5 w-5" /> },
//     { key: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
//   ];
//   return (
//     <div className="fixed bottom-0 inset-x-0 z-30 border-t bg-background/90 backdrop-blur md:hidden">
//       <div className="grid grid-cols-4">
//         {items.map((it) => (
//           <button
//             key={it.key}
//             onClick={() => setTab(it.key)}
//             className={`py-3 flex flex-col items-center gap-1 ${
//               tab === it.key ? "text-foreground" : "text-muted-foreground"
//             }`}
//           >
//             <div className="relative">
//               {it.key === "favorites" && favCount > 0 && (
//                 <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 text-xs rounded-full bg-foreground text-background grid place-content-center">
//                   {favCount}
//                 </span>
//               )}
//               {it.key === "search" && cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 text-xs rounded-full bg-foreground text-background grid place-content-center">
//                   {cartCount}
//                 </span>
//               )}
//               {it.icon}
//             </div>
//             <span className="text-xs">{it.label}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Filters({ price, setPrice, rating, setRating, inStock, setInStock }) {
//   return (
//     <div className="rounded-2xl border p-4 space-y-4">
//       <div className="flex items-center gap-2">
//         <Filter className="h-4 w-4" />{" "}
//         <div className="font-medium">Filters</div>
//       </div>
//       <div className="space-y-2">
//         <Label>Price range (₹0 – ₹50000)</Label>
//         <Slider
//           value={price}
//           onValueChange={setPrice}
//           min={0}
//           max={50000}
//           step={500}
//           className="py-4"
//         />
//         <div className="text-sm text-muted-foreground">
//           Selected: ₹{price[0]} – ₹{price[1]}
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Label>Min. rating</Label>
//         <Slider
//           value={[rating]}
//           onValueChange={(v) => setRating(v[0])}
//           min={0}
//           max={5}
//           step={0.5}
//           className="py-4"
//         />
//         <div className="text-sm text-muted-foreground">{rating}+ stars</div>
//       </div>
//       <div className="flex items-center justify-between">
//         <Label htmlFor="stock">In stock only</Label>
//         <input
//           id="stock"
//           type="checkbox"
//           checked={inStock}
//           onChange={(e) => setInStock(e.target.checked)}
//           className="h-5 w-5"
//         />
//       </div>
//     </div>
//   );
// }

// function CategoryChips({ active, setActive }) {
//   return (
//     <div className="flex gap-2 overflow-x-auto pb-2">
//       <Button
//         size="sm"
//         variant={active === "All" ? "default" : "outline"}
//         className="rounded-full"
//         onClick={() => setActive("All")}
//       >
//         All
//       </Button>
//       {CATEGORIES.map((c) => (
//         <Button
//           key={c.id}
//           size="sm"
//           variant={active === c.name ? "default" : "outline"}
//           className="rounded-full"
//           onClick={() => setActive(c.name)}
//         >
//           {c.name}
//         </Button>
//       ))}
//     </div>
//   );
// }

// export default function ShopHubApp() {
//   const [tab, setTab] = useState("home");
//   const [query, setQuery] = useState("");
//   const [activeCat, setActiveCat] = useState("All");
//   const [price, setPrice] = useState([0, 50000]);
//   const [rating, setRating] = useState(3.5);
//   const [inStock, setInStock] = useState(true);
//   const [selected, setSelected] = useState(null);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cart, setCart] = useLocalState("sh_cart", []);
//   const [favs, setFavs] = useLocalState("sh_favs", []);

//   const results = useMemo(() => {
//     return PRODUCTS.filter((p) => {
//       const q = query.trim().toLowerCase();
//       const qMatch =
//         !q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q);
//       const catMatch = activeCat === "All" || p.category === activeCat;
//       const priceMatch = p.price >= price[0] / 100 && p.price <= price[1] / 100; // since prices are smaller than 50k
//       const ratingMatch = p.rating >= rating;
//       const stockMatch = inStock ? p.stock > 0 : true;
//       return qMatch && catMatch && priceMatch && ratingMatch && stockMatch;
//     });
//   }, [query, activeCat, price, rating, inStock]);

//   function addToCart(p) {
//     setCart((prev) => {
//       const found = prev.find((it) => it.id === p.id);
//       if (found)
//         return prev.map((it) =>
//           it.id === p.id ? { ...it, qty: it.qty + 1 } : it
//         );
//       return [
//         ...prev,
//         {
//           id: p.id,
//           name: p.name,
//           brand: p.brand,
//           price: p.price,
//           image: p.image,
//           qty: 1,
//         },
//       ];
//     });
//     toast.success("Added to cart");
//     setCartOpen(true);
//   }

//   function toggleFav(id) {
//     setFavs((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <TopBar
//         onCartOpen={() => setCartOpen(true)}
//         onSearch={() => setTab("search")}
//         query={query}
//         setQuery={setQuery}
//       />

//       <main className="max-w-7xl mx-auto px-4 pb-24 md:pb-10">
//         {/* Tabs for desktop */}
//         <div className="hidden md:block py-4">
//           <Tabs value={tab} onValueChange={setTab}>
//             <TabsList className="rounded-full">
//               <TabsTrigger value="home" className="rounded-full">
//                 Home
//               </TabsTrigger>
//               <TabsTrigger value="search" className="rounded-full">
//                 Search
//               </TabsTrigger>
//               <TabsTrigger value="favorites" className="rounded-full">
//                 Saved
//               </TabsTrigger>
//               <TabsTrigger value="profile" className="rounded-full">
//                 Profile
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         {tab === "home" && (
//           <section className="py-4 space-y-6">
//             <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <h2 className="text-xl font-semibold">Featured</h2>
//                   <Button variant="ghost" onClick={() => setTab("search")}>
//                     See all <ChevronRight className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {PRODUCTS.map((p) => (
//                     <ProductCard key={p.id} p={p} onOpen={setSelected} />
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="rounded-2xl border p-4 bg-muted/30">
//                   <div className="font-semibold mb-2">Quick search</div>
//                   <div className="relative">
//                     <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" />
//                     <Input
//                       value={query}
//                       onChange={(e) => setQuery(e.target.value)}
//                       placeholder="Find gadgets you love"
//                       className="pl-10 rounded-full"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="font-semibold">Browse by category</div>
//                   <CategoryChips active={activeCat} setActive={setActiveCat} />
//                 </div>
//                 <Filters
//                   price={price}
//                   setPrice={setPrice}
//                   rating={rating}
//                   setRating={setRating}
//                   inStock={inStock}
//                   setInStock={setInStock}
//                 />
//               </div>
//             </div>
//           </section>
//         )}

//         {tab === "search" && (
//           <section className="py-4 space-y-6">
//             <div className="flex items-end gap-4">
//               <div className="flex-1">
//                 <Label>Search</Label>
//                 <div className="relative mt-1">
//                   <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" />
//                   <Input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search products, brands…"
//                     className="pl-10 rounded-full"
//                   />
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <Button
//                   variant="outline"
//                   className="rounded-full"
//                   onClick={() => setQuery("")}
//                 >
//                   Clear
//                 </Button>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-[240px_1fr] gap-6 items-start">
//               <Filters
//                 price={price}
//                 setPrice={setPrice}
//                 rating={rating}
//                 setRating={setRating}
//                 inStock={inStock}
//                 setInStock={setInStock}
//               />
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="text-sm text-muted-foreground">
//                     {results.length} results
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Label htmlFor="sort" className="text-sm">
//                       Sort
//                     </Label>
//                     <select
//                       id="sort"
//                       className="border rounded-full px-3 py-1 text-sm"
//                     >
//                       <option>Relevance</option>
//                       <option>Price: Low to High</option>
//                       <option>Price: High to Low</option>
//                       <option>Rating</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {results.map((p) => (
//                     <ProductCard key={p.id} p={p} onOpen={setSelected} />
//                   ))}
//                 </div>
//                 {results.length === 0 && (
//                   <div className="text-sm text-muted-foreground">
//                     No products match your filters.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </section>
//         )}

//         {tab === "favorites" && (
//           <section className="py-6">
//             <h2 className="text-xl font-semibold mb-4">Saved items</h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {PRODUCTS.filter((p) => favs.includes(p.id)).map((p) => (
//                 <Card key={p.id} className="rounded-2xl overflow-hidden">
//                   <CardContent className="p-0">
//                     <div className="aspect-[4/3] w-full overflow-hidden">
//                       <img
//                         src={p.image}
//                         alt={p.name}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <div className="p-3 space-y-2">
//                       <div className="font-medium leading-tight">{p.name}</div>
//                       <div className="flex items-center justify-between">
//                         <Price value={p.price} />
//                         <div className="flex items-center gap-2">
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             onClick={() => addToCart(p)}
//                           >
//                             <ShoppingCart className="h-4 w-4 mr-1" /> Add
//                           </Button>
//                           <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => toggleFav(p.id)}
//                           >
//                             <Heart className="h-5 w-5" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//             {PRODUCTS.filter((p) => favs.includes(p.id)).length === 0 && (
//               <div className="text-sm text-muted-foreground">
//                 You haven't saved any items yet.
//               </div>
//             )}
//           </section>
//         )}

//         {tab === "profile" && (
//           <section className="py-6 grid md:grid-cols-2 gap-6">
//             <Card className="rounded-2xl">
//               <CardHeader>
//                 <CardTitle>Profile</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="grid grid-cols-3 gap-3 items-center">
//                   <Label>Name</Label>
//                   <Input className="col-span-2" defaultValue="Alex Gupta" />
//                 </div>
//                 <div className="grid grid-cols-3 gap-3 items-center">
//                   <Label>Email</Label>
//                   <Input
//                     className="col-span-2"
//                     defaultValue="alex@example.com"
//                   />
//                 </div>
//                 <div className="grid grid-cols-3 gap-3 items-center">
//                   <Label>Phone</Label>
//                   <Input
//                     className="col-span-2"
//                     defaultValue="+91 99999 12345"
//                   />
//                 </div>
//                 <Button className="w-full">Save changes</Button>
//               </CardContent>
//             </Card>
//             <Card className="rounded-2xl">
//               <CardHeader>
//                 <CardTitle>Settings</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Settings className="h-4 w-4" /> Dark mode
//                   </div>
//                   <input type="checkbox" className="h-5 w-5" />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <ShieldCheck className="h-4 w-4" /> Two-factor auth
//                   </div>
//                   <input type="checkbox" className="h-5 w-5" />
//                 </div>
//                 <Button variant="outline">Sign out</Button>
//               </CardContent>
//             </Card>
//           </section>
//         )}
//       </main>

//       <BottomNav
//         tab={tab}
//         setTab={setTab}
//         cartCount={cart.reduce((s, i) => s + i.qty, 0)}
//         favCount={favs.length}
//       />

//       <ProductModal
//         product={selected}
//         onClose={() => setSelected(null)}
//         onAdd={addToCart}
//         isFav={selected ? favs.includes(selected.id) : false}
//         toggleFav={toggleFav}
//       />

//       <CartSheet
//         open={cartOpen}
//         setOpen={setCartOpen}
//         items={cart}
//         setItems={setCart}
//       />

//       <footer className="hidden md:block border-t mt-8">
//         <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-muted-foreground flex items-center gap-6">
//           <span>© {new Date().getFullYear()} ShopHub</span>
//           <span>•</span>
//           <a href="#" className="hover:underline">
//             Privacy
//           </a>
//           <a href="#" className="hover:underline">
//             Terms
//           </a>
//           <a href="#" className="hover:underline">
//             Help
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }
