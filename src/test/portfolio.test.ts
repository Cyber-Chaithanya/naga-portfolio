import { describe, expect, it } from "vitest";

import { projects } from "@/lib/portfolio";

describe("portfolio GitHub projects", () => {
  it("includes the featured calculator and all three remaining public repositories", () => {
    expect(projects.map(({ source }) => source)).toEqual([
      "https://github.com/Cyber-Chaithanya/Smart-Calculator",
      "https://github.com/Cyber-Chaithanya/password_strength_checker",
      "https://github.com/Cyber-Chaithanya/Vigana-Feedback",
      "https://github.com/Cyber-Chaithanya/my-first-website",
    ]);
  });

  it("assigns a visual type and project details to every repository", () => {
    expect(projects.every(project => project.visual && project.details && project.features.length > 0)).toBe(true);
  });
});