import { weightLossSurgeryPages } from "./weight-loss-surgery";
import { herniaPages } from "./hernia";
import { colorectalPages } from "./colorectal";
import { proctologyPages } from "./proctology";
import { misPages } from "./mis-laparoscopic-surgery";
import type { ConditionPage } from "./types";

export const allConditionPages: ConditionPage[] = [
  ...weightLossSurgeryPages,
  ...herniaPages,
  ...colorectalPages,
  ...proctologyPages,
  ...misPages,
];

export const conditionBySlug = new Map(allConditionPages.map((p) => [p.slug, p]));

export const clusterHubBySlug: Record<string, string> = {
  "weight-loss-surgery": "weight-loss-surgery",
  hernia: "hernia",
  colorectal: "colorectal",
  proctology: "proctology",
  "mis-laparoscopic-surgery": "mis-laparoscopic-surgery",
};

export function getConditionPage(slug: string): ConditionPage | undefined {
  return conditionBySlug.get(slug);
}

export function getClusterSiblings(cluster: string, currentSlug: string): ConditionPage[] {
  return allConditionPages.filter((p) => p.cluster === cluster && p.slug !== currentSlug && !p.isHub);
}

export type { ConditionPage, ConditionSection } from "./types";
