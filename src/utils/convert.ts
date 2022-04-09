const codes = [
  // { code: '&#033;', char: `!` },
  { code: '&#034;', char: `"` },
  // { code: '&#035;', char: `#` },
  // { code: '&#037;', char: `%` },
  // { code: '&#038;', char: `&` },
  { code: '&#039;', char: `'` },
  // { code: '&#040;', char: `(` },
  // { code: '&#041;', char: `)` },
  // { code: '&#042;', char: `*` },
  // { code: '&#044;', char: `,` },
  // { code: '&#046;', char: `.` },
  { code: '&#047;', char: `/` },
  // { code: '&#058;', char: `:` },
  // { code: '&#059;', char: `;` },
  // { code: '&#063;', char: `?` },
  // { code: '&#064;', char: `@` },
  // { code: '&#091;', char: `[` },
  { code: '&#092;', char: `\\` },
  // { code: '&#093;', char: `]` },
  // { code: '&#094;', char: `^` },
  // { code: '&#095;', char: `_` },
  { code: '&#096;', char: '`' },
  // { code: '&#123;', char: `{` },
  // { code: '&#124;', char: `|` },
  // { code: '&#125;', char: `}` },
  { code: '&#126;', char: `~` },
  // { code: '&#160;', char: ` ` },
  // { code: '&#161;', char: `¡` },
  // { code: '&#166;', char: `¦` },
  // { code: '&#167;', char: `§` },
  { code: '&#168;', char: `¨` },
  // { code: '&#169;', char: `©` },
  // { code: '&#170;', char: `ª` },
  // { code: '&#171;', char: `«` },
  // { code: '&#172;', char: `¬` },
  // { code: '&#173;', char: `­` },
  // { code: '&#174;', char: `®` },
  // { code: '&#175;', char: `¯` },
  // { code: '&#178;', char: `²` },
  // { code: '&#179;', char: `³` },
  { code: '&#180;', char: `´` },
  // { code: '&#181;', char: `µ` },
  // { code: '&#182;', char: `¶` },
  // { code: '&#183;', char: `·` },
  // { code: '&#184;', char: `¸` },
  // { code: '&#185;', char: `¹` },
  // { code: '&#186;', char: `º` },
  // { code: '&#187;', char: `»` },
  // { code: '&#191;', char: `¿` },
  // { code: '&#8208;', char: `‐` },
  // { code: '&#8209;', char: `‑` },
  // { code: '&#8210;', char: `‒` },
  // { code: '&#8211;', char: `–` },
  // { code: '&#8212;', char: `—` },
  // { code: '&#8213;', char: `―` },
  // { code: '&#8214;', char: `‖` },
  // { code: '&#8215;', char: `‗` },
  { code: '&#8216;', char: `‘` },
  { code: '&#8217;', char: `’` },
  { code: '&#8218;', char: `‚` },
  { code: '&#8219;', char: `‛` },
  { code: '&#8220;', char: `“` },
  { code: '&#8221;', char: `”` },
  { code: '&#8222;', char: `„` },
  { code: '&#8223;', char: `‟` },
  // { code: '&#8224;', char: `†` },
  // { code: '&#8225;', char: `‡` },
  // { code: '&#8226;', char: `•` },
  // { code: '&#8227;', char: `‣` },
  // { code: '&#8228;', char: `․` },
  // { code: '&#8229;', char: `‥` },
  // { code: '&#8230;', char: `…` },
  // { code: '&#8231;', char: `‧` },
  // { code: '&#8240;', char: `‰` },
  // { code: '&#8241;', char: `‱` },
  { code: '&#8242;', char: `′` },
  { code: '&#8243;', char: `″` },
  { code: '&#8244;', char: `‴` },
  { code: '&#8245;', char: `‵` },
  { code: '&#8246;', char: `‶` },
  { code: '&#8247;', char: `‷` },
  // { code: '&#8248;', char: `‸` },
  // { code: '&#8249;', char: `‹` },
  // { code: '&#8250;', char: `›` },
  // { code: '&#8251;', char: `※` },
  // { code: '&#8252;', char: `‼` },
  // { code: '&#8253;', char: `‽` },
  // { code: '&#8254;', char: `‾` },
  // { code: '&#8255;', char: `‿` },
  // { code: '&#8256;', char: `⁀` },
  // { code: '&#8257;', char: `⁁` },
  // { code: '&#8258;', char: `⁂` },
  // { code: '&#8259;', char: `⁃` },
  { code: '&#8260;', char: `⁄` },
  // { code: '&#8261;', char: `⁅` },
  // { code: '&#8262;', char: `⁆` },
  // { code: '&#8263;', char: `⁇` },
  // { code: '&#8264;', char: `⁈` },
  // { code: '&#8265;', char: `⁉` },
  // { code: '&#8266;', char: `⁊` },
  // { code: '&#8267;', char: `⁋` },
  // { code: '&#8268;', char: `⁌` },
  // { code: '&#8269;', char: `⁍` },
  // { code: '&#8270;', char: `⁎` },
  // { code: '&#8271;', char: `⁏` },
  // { code: '&#8272;', char: `⁐` },
  // { code: '&#8273;', char: `⁑` },
  // { code: '&#8274;', char: `⁒` },
  { code: '&#8275;', char: `⁓` },
  // { code: '&#8276;', char: `⁔` },
  // { code: '&#8277;', char: `⁕` },
  // { code: '&#8278;', char: `⁖` },
  // { code: '&#8279;', char: `⁗` },
  // { code: '&#8280;', char: `⁘` },
  // { code: '&#8281;', char: `⁙` },
  // { code: '&#8282;', char: `⁚` },
  // { code: '&#8283;', char: `⁛` },
  // { code: '&#8284;', char: `⁜` },
  // { code: '&#8285;', char: `⁝` },
  // { code: '&#8286;', char: `⁞` },
  // { code: '&#8482;', char: `™` },
];

export const snakeToCamelCase = (string: string): string =>
  string
    .split('_')
    .map((string, index) => (index !== 0 ? string[0].toUpperCase() + string.slice(1) : string))
    .join('');

export const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const htmlCodesToChar = (string: string): string => {
  let newString = string;

  codes.forEach(({ char, code }) => {
    newString = newString.replaceAll(code, char);
  });

  return newString;
};

export const charToHtmlCode = (string: string): string => {
  let newString = string;

  codes.forEach(({ char, code }) => {
    newString = newString.replaceAll(char, code);
  });

  return newString;
};
