export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  // strict to disable next line
    const task = true;
	  // strict to disable next line
    const task2 = false;
  }
  return [task, task2];

}
