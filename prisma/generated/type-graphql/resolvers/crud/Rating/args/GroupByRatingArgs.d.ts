import { RatingOrderByWithAggregationInput } from "../../../inputs/RatingOrderByWithAggregationInput";
import { RatingScalarWhereWithAggregatesInput } from "../../../inputs/RatingScalarWhereWithAggregatesInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
export declare class GroupByRatingArgs {
    where?: RatingWhereInput | undefined;
    orderBy?: RatingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "rate" | "count" | "createdAt" | "updatedAt" | "productId">;
    having?: RatingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
