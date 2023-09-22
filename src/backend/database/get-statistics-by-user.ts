import { ratingValues, UserStatistics } from "@/types";
import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { database } from "@/backend/database/database";

export async function getStatisticsByUser(
  userId: string,
): Promise<UserStatistics> {
  const reference = collection(database, "users", userId, "todos");
  const totalCompletedQuery = query(
    reference,
    where("completionDate", "!=", null),
  );

  const totalRatingsQueries = ratingValues.map((rating) =>
    query(reference, where("rating", "==", rating)),
  );

  const queries = [
    query(reference),
    totalCompletedQuery,
    ...totalRatingsQueries,
  ];

  const promises = queries.map(async (item) => {
    const response = await getCountFromServer(item);
    return response.data().count;
  });

  const [totalCreated, totalCompleted, happy, veryHappy, mad, sad, love] =
    await Promise.all(promises);

  return {
    totalCreated,
    totalCompleted,
    totalRatings: {
      happy,
      veryHappy,
      mad,
      sad,
      love,
    },
  };
}
