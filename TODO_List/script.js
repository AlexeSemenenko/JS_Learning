let notes = ['First created by Aleksei Semenenko || contact t.me/alexei_']

const createItem = i => {
    const form = document.createElement("form")


    const checkbox = document.createElement("input")
    checkbox.className = 'todolist__checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = 'cb' + i

    form.append(checkbox)


    const label = document.createElement("label")
    label.className = 'todolist__label'
    label.htmlFor = 'cb' + i
    label.append(' ' + notes[i])

    form.append(label)


    form.innerHTML += '<br>'


    const edit = document.createElement("input")
    edit.className = 'todolist__edit-button button'
    edit.type = 'submit'
    edit.value = 'Edit'

    form.append(edit)


    const del = document.createElement("input")
    del.className = 'todolist__delete-button button'
    del.type = 'submit'
    del.value = 'Delete'

    form.append(del)


    return form
}

const createAllItems = () => {
    let todolist = document.querySelector('.todolist')

    for (let i = 0; i < notes.length; i++) {
        todolist.append(createItem(i))
    }
}

const addNewItem = index => {
    let todolist = document.querySelector('.todolist')
    todolist.append(createItem(index))
}

const getItemText = () => {
    const item = document.querySelector('.add-form__input-field').value
    notes.push(item)
    addNewItem(notes.length - 1)
}

window.onload = () => {
    createAllItems()
    document.querySelector('.add-form__save-button').addEventListener('click', getItemText)

}
