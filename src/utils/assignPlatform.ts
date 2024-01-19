export default function assignPlatform({ pc, ps5, xbox }: { [key: string]: boolean }) {
  const platforms: string[] = [];

  pc && platforms.push("pc");
  ps5 && platforms.push("ps5");
  xbox && platforms.push("xbox");

  return platforms;
}
