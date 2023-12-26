let array = []

function executeTask() {
    let input = document.getElementById('input').value
    array.push(input)
    console.log(array)
    let itemsContainer = document.getElementById('itemsContainer')







    let todoItems = document.createElement('div')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'


    let para = document.createElement('p')
    para.innerHTML = input
    let button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.classList.add('btn1')
    todoItems.classList.add('todo-flex')
    checkbox.classList.add('box')
    todoItems.appendChild(checkbox)
    todoItems.appendChild(para)
    todoItems.appendChild(button)
    itemsContainer.appendChild(todoItems)
    document.getElementById('input').value = ''
    // itemsContainer.addEventListener('click', () => {
    //     itemsContainer.remove();
    // });
    let removeDiv = document.getElementById('itemsContainer');

    button.addEventListener('click', () => {
        //* to avoid error, you can check with condition statement OR try..catch
        if (removeDiv) {
            removeDiv.remove();
        }
    });


}