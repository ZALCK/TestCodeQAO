function rgb(r, g, b) {
  const colorsCode = (value) => Math.min(255, Math.max(0, Math.round(value)));

  const hexR = colorsCode(r).toString(16).padStart(2, "0");
  const hexG = colorsCode(g).toString(16).padStart(2, "0");
  const hexB = colorsCode(b).toString(16).padStart(2, "0");

  const result = `${hexR}${hexG}${hexB}`;

  return result.toUpperCase();
}
