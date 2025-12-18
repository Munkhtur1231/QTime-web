// random.ts

// Random number between min (inclusive) and max (exclusive)
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Random integer between min (inclusive) and max (inclusive)
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random boolean
export function randomBool(probability = 0.5): boolean {
  return Math.random() < probability;
}

// Random element from array
export function randomChoice<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

// Shuffle array (Fisher-Yates)
export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Generate random string of given length
export function randomString(
  length: number,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset.charAt(randomInt(0, charset.length - 1));
  }
  return result;
}

// Generate random UUID v4
export function randomUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Random date between two dates
export function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Random item with weights
export function weightedRandom<T>(items: T[], weights: number[]): T {
  const total = weights.reduce((a, b) => a + b, 0);
  const threshold = Math.random() * total;
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += weights[i];
    if (threshold < sum) return items[i];
  }
  return items[items.length - 1]; // fallback
}

export function RandomBDCAccountID(): number {
  const min = 10000; // 5 digits minimum
  const max = 999999999999; // 12 digits maximum
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomBDCAccountNumber(): number {
  const isEightDigits = Math.random() < 0.5;
  const min = isEightDigits ? 10000000 : 1000000;
  const max = isEightDigits ? 99999999 : 9999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
