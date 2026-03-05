import techData from "@/utils/tech.json";
import TechTooltip from "../components/TechToolTip";
import { JSX } from "react";

export function parseDescription(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let remainingText = text;

  const sortedTechs = techData
    .map((t) => t.name)
    .sort((a, b) => b.length - a.length);

  while (remainingText.length > 0) {
    let bestMatch: {
      type: "tech" | "percent";
      value: string;
      index: number;
      length: number;
    } | null = null;
    let earliestIndex = Infinity;

    // 1. Check for Tech Matches
    for (const tech of sortedTechs) {
      const escapedTech = tech.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
      const regex = new RegExp(
        `(^|[^a-zA-Z0-9])${escapedTech}(?=$|[^a-zA-Z0-9])`,
        "i",
      );
      const match = remainingText.match(regex);

      if (match && match.index !== undefined) {
        const matchStartIndex = match.index + (match[1]?.length || 0);
        if (matchStartIndex < earliestIndex) {
          earliestIndex = matchStartIndex;
          bestMatch = {
            type: "tech",
            value: tech,
            index: matchStartIndex,
            length: tech.length,
          };
        }
      }
    }

    // 2. Check for Percentage Matches (e.g., "40 %" or "40%")
    const percentRegex = /\d+\s?%/;
    const percentMatch = remainingText.match(percentRegex);
    if (percentMatch && percentMatch.index !== undefined) {
      if (percentMatch.index < earliestIndex) {
        earliestIndex = percentMatch.index;
        bestMatch = {
          type: "percent",
          value: percentMatch[0],
          index: percentMatch.index,
          length: percentMatch[0].length,
        };
      }
    }

    if (bestMatch) {
      // Push text before the match
      if (bestMatch.index > 0) {
        parts.push(remainingText.slice(0, bestMatch.index));
      }

      // Push the specific element based on type
      if (bestMatch.type === "tech") {
        parts.push(<TechTooltip key={parts.length} tech={bestMatch.value} />);
      } else {
        parts.push(
          <strong key={parts.length} className="text-gray-900 dark:text-gray-100 font-bold">
            {bestMatch.value}
          </strong>,
        );
      }

      remainingText = remainingText.slice(bestMatch.index + bestMatch.length);
    } else {
      parts.push(remainingText);
      break;
    }
  }

  return parts;
}
