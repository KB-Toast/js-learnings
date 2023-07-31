const task3Element = document.getElementById('task-3');

function showAlert() {
  alert('works !');
}

function showName(a) {
  alert(a);
}

showAlert();
showName('Kevin');

task3Element.addEventListener('click', showAlert);

function concateAll(a, b, c) {
  return `${a} ${b} ${c}`;
}

const theResult = concateAll('Hi', 'I am', 'Kevin');

alert(theResult);
