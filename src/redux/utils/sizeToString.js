export default function sizeToString(size) {
  return `${(size / 1000000).toFixed()}MB`;
}
