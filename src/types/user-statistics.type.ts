import { Rating } from "@/types/rating.type";

export type UserStatistics = {
  totalCreated: number;
  totalCompleted: number;
  totalRatings: {
    [key in Rating]: number;
  };
};
