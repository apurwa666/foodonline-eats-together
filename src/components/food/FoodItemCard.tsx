
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

type FoodItemProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  categories?: string[];
  tags?: string[];
  isLiked: boolean;
  onLikeToggle: (id: string) => void;
};

const FoodItemCard = ({
  id,
  name,
  image,
  description,
  price,
  rating,
  categories = [],
  tags = [],
  isLiked,
  onLikeToggle
}: FoodItemProps) => {
  return (
    <Card className="overflow-hidden food-item hover:shadow-lg transition-shadow duration-300">
      <div className="h-44 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-sm font-semibold text-foodonline-primary">
          {rating} ★
        </div>
        <button 
          className={`absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors like-button ${isLiked ? 'liked' : ''}`}
          onClick={() => onLikeToggle(id)}
          aria-label={isLiked ? "Unlike" : "Like"}
          data-item-id={id}
        >
          <Heart
            className={`h-5 w-5 ${isLiked ? "fill-foodonline-primary text-foodonline-primary" : "text-gray-500"}`}
          />
        </button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="font-medium text-foodonline-primary">${price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {categories.map((category, idx) => (
              <span key={idx} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodItemCard;
