const compactFormatter = new Intl.NumberFormat('en-GB', {
  notation: 'compact',
});

export function toCompactString(number) {
  return compactFormatter.format(number);
}
