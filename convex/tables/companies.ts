import { defineTable } from "convex/server";
import { v } from "convex/values";

export const companiesTables = {
  companies: defineTable({
    name: v.string(),
    slug: v.string(),
    logoUrl: v.optional(v.string()),
    about: v.optional(v.string()),
    website: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_created", ["createdAt"]),
};
