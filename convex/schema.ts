import { defineSchema } from "convex/server";

import { companiesTables } from "./tables/companies";
import { jobsTables } from "./tables/jobs";

export default defineSchema({
  ...companiesTables,
  ...jobsTables,
});
