const arr = [1, 0, 12, 3, 0];

function modifyArr(): number[] {
  const first: number[] = [];
  const second: number[] = [];

  arr.forEach((a) => {
    if (a === 0) {
      first.push(a);
    } else {
      second.push(a);
    }
  });

  return [...second, ...first];
}

console.log(modifyArr());
