try {
  let a = 10;
  let b = 0;

  if (b === 0) throw new Error("Divisible by zero");

  console.log("Result : " + a / b);
} catch (error) {
  console.log("Error ocuured : " + (error as Error).message);
}
