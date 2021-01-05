let notes = ['дело по стандарту']
let counter = 0

const createItem = i => {
    const form = document.createElement("form")


    const checkbox = document.createElement("input")
    checkbox.className = 'todolist__checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = '' + counter

    form.append(checkbox)


    const label = document.createElement("label")
    label.className = 'todolist__label'
    label.htmlFor = '' + counter
    label.append(notes[i])

    form.append(label)


    form.innerHTML += '<br>'


    const edit = document.createElement("input")
    edit.className = 'todolist__edit-button button'
    edit.type = 'button'
    edit.value = 'Edit'

    form.append(edit)


    const del = document.createElement("input")
    del.className = 'todolist__delete-button button'
    del.type = 'button'
    del.value = 'Delete'

    form.append(del)


    return form
}

const createAllItems = () => {
    let todolist = document.querySelector('.todolist')

    for (let i = 0; i < notes.length; i++) {
        todolist.append(createItem(i))
        counter++
    }
}

const addNewItem = index => {
    let todolist = document.querySelector('.todolist')
    todolist.append(createItem(index))
}

const getItemData = () => {
    const item = document.querySelector('.add-form__input-field')

    if (item.value !== '') {
        notes.push(item.value)
        addNewItem(notes.length - 1)
        item.value = ''
        counter++
    }
}

const deleteItem = (event) => {
    const target = event.target

    if (target.className !== 'todolist__delete-button button') {
        return
    }

    const deleteValue = target.parentNode.querySelector('.todolist__label').innerHTML

    const index = notes.indexOf(deleteValue)

    notes.splice(index, 1)

    const deleteForm = target.parentNode
    const mainList = deleteForm.parentNode

    mainList.removeChild(deleteForm)
}

// const editItem = (event) => {
//     const target = event.target
//
//     if (target.className !== 'todolist__edit-button button') {
//         return
//     }
//
//     const editId = target.parentNode.querySelector('.todolist__checkbox').id
//
//     const editForm = target.parentNode
//
//     document.querySelector('.add-form__input-field').value = editForm.querySelector('.todolist__label').innerHTML
//
//
// }

window.onload = () => {
    createAllItems()
    document.querySelector('.add-form__save-button').addEventListener('click', getItemData)
    document.querySelector('.todolist').addEventListener('click', deleteItem)
    //document.querySelector('.todolist').addEventListener('click', editItem)
}
