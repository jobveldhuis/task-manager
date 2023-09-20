import { Rating } from "@/types/rating.type";

export function mapRatingToEmoji(rating: Rating): string {
  switch (rating) {
    case "happy":
      return "👍";
    case "veryHappy":
      return "😊";
    case "mad":
      return "😡";
    case "sad":
      return "😢";
    case "love":
      return "💕";
  }
}
