var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/poetry.ts
var poetry_exports = {};
__export(poetry_exports, {
  capitalise: () => capitalise,
  splitWords: () => splitWords
});
function capitalise(text) {
  if (text === "") return "";
  return text[0]?.toUpperCase() + text.slice(1);
}
function splitWords(text) {
  if (text === "") return [];
  return text.trim().split(/\s+/);
}

// src/euclid.ts
var euclid_exports = {};
__export(euclid_exports, {
  triangleArea: () => triangleArea
});
function triangleArea(base, height) {
  if (base < 0 || height < 0) {
    throw new Error("Base and height must be non-negative");
  }
  return 0.5 * base * height;
}
export {
  euclid_exports as Euclid,
  poetry_exports as Poetry
};
