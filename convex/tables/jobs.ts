import { defineTable } from "convex/server";
import { v } from "convex/values";

export const jobsTables = {
  jobs: defineTable({
    title: v.string(),
    slug: v.string(),
    companyId: v.id("companies"),
    erpSystem: v.union(v.literal("sap"), v.literal("oracle"), v.literal("workday")),
    description: v.string(),
    requirements: v.optional(v.string()),
    nathansTake: v.optional(v.string()),
    location: v.optional(v.string()),
    locationType: v.union(v.literal("remote"), v.literal("hybrid"), v.literal("onsite")),
    salaryMin: v.optional(v.number()),
    salaryMax: v.optional(v.number()),
    currency: v.optional(v.string()),
    applyUrl: v.string(),
    status: v.union(v.literal("draft"), v.literal("published"), v.literal("expired")),
    publishedAt: v.optional(v.number()),
    expiresAt: v.optional(v.number()),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"])
    .index("by_company", ["companyId"])
    .index("by_company_and_status", ["companyId", "status"])
    .index("by_status_and_erp", ["status", "erpSystem"])
    .index("by_status_and_type", ["status", "locationType"])
    .index("by_published_at", ["publishedAt"]),
};
