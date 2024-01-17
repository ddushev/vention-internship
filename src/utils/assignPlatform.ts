export default function assignPlatform({ pc, ps5, xbox }: { [key: string]: boolean }) {
  const platforms: string[] = [];
  if (pc) {
    platforms.push("pc");
  }
  if (ps5) {
    platforms.push("ps5");
  }
  if (xbox) {
    platforms.push("xbox");
  }
  return platforms;
}
