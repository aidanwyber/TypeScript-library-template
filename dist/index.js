"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Euclid: () => euclid_exports,
  Poetry: () => poetry_exports
});
module.exports = __toCommonJS(index_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Euclid,
  Poetry
});
