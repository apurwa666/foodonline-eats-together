
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

/**
 * Content-based filtering recommendation algorithm that suggests food items
 * based on categories and tags of items a user has liked
 * 
 * In a real Django implementation, this would be a Python function that:
 * 1. Queries the database for a user's liked items
 * 2. Extracts categories and tags from those items
 * 3. Finds similar items in the database using those attributes
 * 4. Returns a ranked list of recommendations
 */
export function getRecommendations(
  likedItems: FoodItem[],
  allItems: FoodItem[],
  limit: number = 10
): FoodItem[] {
  // If no liked items, return popular items sorted by rating
  if (likedItems.length === 0) {
    return [...allItems]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
  
  // Extract categories and tags from liked items
  const likedCategories: Record<string, number> = {};
  const likedTags: Record<string, number> = {};
  
  // Count occurrences of each category and tag in liked items
  likedItems.forEach(item => {
    item.categories.forEach(category => {
      likedCategories[category] = (likedCategories[category] || 0) + 1;
    });
    
    item.tags.forEach(tag => {
      likedTags[tag] = (likedTags[tag] || 0) + 1;
    });
  });
  
  // Compute similarity scores
  const scoredItems = allItems.map(item => {
    let score = 0;
    
    // Add weighted points for matching categories (higher weight)
    item.categories.forEach(category => {
      if (likedCategories[category]) {
        score += 2 * likedCategories[category]; 
      }
    });
    
    // Add points for matching tags
    item.tags.forEach(tag => {
      if (likedTags[tag]) {
        score += likedTags[tag];
      }
    });
    
    // Add points for high ratings (normalized to same scale)
    score += item.rating;
    
    // Avoid recommending items the user has already liked
    const isAlreadyLiked = likedItems.some(likedItem => likedItem.id === item.id);
    if (isAlreadyLiked) {
      score = -1; // Push already liked items to the end
    }
    
    return { item, score };
  });
  
  // Sort by score and return top recommendations
  return scoredItems
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
    .slice(0, limit);
}

/**
 * In a Django implementation, this would be replaced by an AJAX call to the server
 * 
 * Example Django view:
 *
 * @login_required
 * def toggle_food_like(request, food_id):
 *     if request.method == 'POST':
 *         food_item = get_object_or_404(FoodItem, id=food_id)
 *         like, created = FoodLike.objects.get_or_create(
 *             user=request.user,
 *             food_item=food_item
 *         )
 *         if not created:
 *             like.delete()
 *             return JsonResponse({'liked': False})
 *         return JsonResponse({'liked': True})
 *     return JsonResponse({'error': 'Invalid request'}, status=400)
 */
export function toggleLikeFood(foodId: string): Promise<boolean> {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      console.log(`Toggled like for food item ${foodId}`);
      resolve(true);
    }, 300);
  });
}
