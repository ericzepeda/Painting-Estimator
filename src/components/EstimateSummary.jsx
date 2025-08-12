function calculateEstimate(area, quality) {
    const multiplier = QUALITY_MULTIPLIERS[quality] || 1.0;
    const base = area * UNIT_COST_PER_SQFT * multiplier;
    const min = Number((base * (1 - COST_VARIABILITY)).toFixed(2));
    const max = Number((base * (1 + COST_VARIABILITY)).toFixed(2));
    return { min, max };
  }