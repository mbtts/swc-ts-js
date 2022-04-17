import v8 from 'v8';

export function main() {
  return 'JS Test';
}

export function getHeapStatistics() {
  return v8.getHeapStatistics();
}
