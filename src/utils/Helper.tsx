export default function swap(arr: any[], pos: number) {
    if (pos < arr.length - 1) {
      const temp = arr[pos];
      arr[pos] = arr[pos + 1];
      arr[pos + 1] = temp;
    }
}