
import { Card, CardContent } from "@/components/ui/card";

type Restaurant = {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
};

// Sample data
const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Best burgers in town with a variety of options",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Authentic Italian pizzas with fresh ingredients",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Fast and delicious Japanese cuisine",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Authentic Mexican tacos and quesadillas",
    rating: 4.6,
  },
];

const TopRestaurants = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Top Restaurants</h2>
          <p className="text-sm text-gray-600">Explore restaurants, bars, and cafés by locality</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-44 relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-sm font-semibold text-foodonline-primary">
                  {restaurant.rating} ★
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{restaurant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRestaurants;
