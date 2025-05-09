
import { useState, useEffect } from "react";
import FoodItemCard from "@/components/food/FoodItemCard";
import { getRecommendations, toggleLikeFood } from "@/utils/recommendationEngine";

type FoodItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  restaurantId: string;
  categories: string[];
  tags: string[];
  rating: number;
  isLiked: boolean;
};

// Mock recommended food items data
const mockRecommendedFood: FoodItem[] = [
  {
    id: "r1",
    name: "Grilled Chicken Sandwich",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Grilled chicken with avocado, lettuce and special sauce",
    price: 8.99,
    restaurantId: "1",
    categories: ["sandwich", "healthy"],
    tags: ["grilled", "protein"],
    rating: 4.7,
    isLiked: false,
  },
  {
    id: "r2",
    name: "Veggie Supreme Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Fresh vegetables on a thin crust with mozzarella",
    price: 12.99,
    restaurantId: "2",
    categories: ["pizza", "vegetarian"],
    tags: ["veggies", "cheese"],
    rating: 4.5,
    isLiked: false,
  },
  {
    id: "r3",
    name: "Spicy Tuna Roll",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Fresh tuna with spicy mayo and cucumber",
    price: 9.99,
    restaurantId: "3",
    categories: ["sushi", "seafood"],
    tags: ["spicy", "raw"],
    rating: 4.8,
    isLiked: false,
  },
  {
    id: "r4",
    name: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Three soft shell tacos with seasoned beef and toppings",
    price: 10.99,
    restaurantId: "4",
    categories: ["tacos", "mexican"],
    tags: ["beef", "spicy"],
    rating: 4.6,
    isLiked: false,
  }
];

const RecommendedFoodItems = () => {
  const [recommendedItems, setRecommendedItems] = useState<FoodItem[]>([]);
  const [likedItems, setLikedItems] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching recommendations
    const loadRecommendations = async () => {
      setIsLoading(true);
      
      // In a real Django app, this would be a fetch call to an API endpoint
      // that returns personalized recommendations
      setTimeout(() => {
        const recommendations = getRecommendations(likedItems, mockRecommendedFood);
        setRecommendedItems(recommendations);
        setIsLoading(false);
      }, 500);
    };
    
    loadRecommendations();
  }, [likedItems]);

  const handleLikeToggle = async (id: string) => {
    // Update UI immediately for better user experience
    setRecommendedItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );

    // Simulate API call to toggle like
    await toggleLikeFood(id);
    
    // Update liked items collection
    const itemToToggle = recommendedItems.find(item => item.id === id);
    if (itemToToggle) {
      setLikedItems(prev => {
        const wasLiked = prev.some(item => item.id === id);
        if (wasLiked) {
          return prev.filter(item => item.id !== id);
        } else {
          return [...prev, { ...itemToToggle, isLiked: true }];
        }
      });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Recommended For You</h2>
          <p className="text-sm text-gray-600">Personalized recommendations based on your preferences</p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foodonline-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedItems.map((item) => (
              <FoodItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
                rating={item.rating}
                categories={item.categories}
                tags={item.tags}
                isLiked={item.isLiked}
                onLikeToggle={handleLikeToggle}
              />
            ))}
          </div>
        )}
        
        {!isLoading && recommendedItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No recommendations available yet. Try liking some items!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedFoodItems;
