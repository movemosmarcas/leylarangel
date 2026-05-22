import themeData from '../metadata/theme.json';

export async function getTheme() {
  // Simulating async fetch
  return themeData;
}

export function getColor(colorName: keyof typeof themeData.colors) {
  return themeData.colors[colorName];
}
