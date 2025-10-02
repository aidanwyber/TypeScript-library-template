declare function capitalise(text: string): string;
declare function splitWords(text: string): string[];

declare const poetry_capitalise: typeof capitalise;
declare const poetry_splitWords: typeof splitWords;
declare namespace poetry {
  export { poetry_capitalise as capitalise, poetry_splitWords as splitWords };
}

/**
 * Compute area of a triangle given base and height.
 */
declare function triangleArea(base: number, height: number): number;

declare const euclid_triangleArea: typeof triangleArea;
declare namespace euclid {
  export { euclid_triangleArea as triangleArea };
}

export { euclid as Euclid, poetry as Poetry };
