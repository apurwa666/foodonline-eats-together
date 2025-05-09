
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PopularRestaurant = {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  deliveryTime: string;
  rating: number;
  featured?: boolean;
};

// Sample data
const popularRestaurants: PopularRestaurant[] = [
  {
    id: "1",
    name: "BBQ Nation",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "BBQ, Grill",
    deliveryTime: "25-30 min",
    rating: 4.9,
    featured: true,
  },
  {
    id: "2",
    name: "Pancake World",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "Breakfast, American",
    deliveryTime: "15-20 min",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "Italian, Pasta",
    deliveryTime: "30-35 min",
    rating: 4.6,
    featured: true,
  },
  {
    id: "4",
    name: "Green Garden",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "Vegan, Healthy",
    deliveryTime: "20-25 min",
    rating: 4.8,
  },
  {
    id: "5",
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "Indian, Spicy",
    deliveryTime: "35-40 min",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Fresh Seafood",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    cuisine: "Seafood, Grill",
    deliveryTime: "30-40 min",
    rating: 4.7,
    featured: true,
  },
];

const PopularRestaurants = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Choose From Most Popular Restaurants
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">{restaurant.name}</h3>
                    <Badge variant="outline" className="bg-white text-foodonline-primary">
                      {restaurant.rating} ★
                    </Badge>
                  </div>
                </div>
                {restaurant.featured && (
                  <Badge className="absolute top-3 right-3 bg-foodonline-primary">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                  <p className="text-sm font-medium">{restaurant.deliveryTime}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;
