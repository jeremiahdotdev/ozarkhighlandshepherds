export function toLitterSlug(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "litter";
}

export function getLitterPath(name = "") {
  return `/litters/${toLitterSlug(name)}`;
}
