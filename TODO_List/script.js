let counter = 0
let position

const createItem = value => {
    const form = document.createElement("form")


    const checkbox = document.createElement("input")
    checkbox.className = 'todolist__checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = 'todolist_item_id_' + counter

    form.append(checkbox)


    const label = document.createElement("label")
    label.className = 'todolist__label'
    label.htmlFor = 'todolist_item_id_' + counter
    label.append(value)

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

const saveItemData = () => {
    const item = document.querySelector('.add-form__input-field')

    if (item.value !== '') {
        let todolist = document.querySelector('.todolist')
        todolist.append(createItem(item.value))

        item.value = ''

        counter++
    } else {
        alert('Enter anything')
    }
}

const deleteItem = (event) => {
    const target = event.target

    if (target.className !== 'todolist__delete-button button') {
        return
    }

    const deleteForm = target.parentNode
    const mainList = deleteForm.parentNode

    mainList.removeChild(deleteForm)
}

const editItem = (event) => {
    const target = event.target

    if (target.className !== 'todolist__edit-button button') {
        return
    }

    document.querySelector('.add-form__save-button').disabled = true
    document.querySelector('.add-form__edit-button').disabled = false

    const editForm = target.parentNode
    document.querySelector('.add-form__input-field').value = editForm.querySelector('.todolist__label').innerHTML

    position = editForm.querySelector('.todolist__checkbox').id
}

const refreshItem = () => {
    const newValue = document.querySelector('.add-form__input-field').value

    if (newValue !== '') {
        document.getElementById(position).closest('form').querySelector('.todolist__label').innerHTML = newValue

        document.querySelector('.add-form__save-button').disabled = false
        document.querySelector('.add-form__edit-button').disabled = true

        document.querySelector('.add-form__input-field').value = ''
    } else {
        alert('Enter anything')
    }
}

window.onload = () => {
    document.querySelector('.add-form__edit-button').disabled = true

    document.querySelector('.add-form__save-button').addEventListener('click', saveItemData)
    document.querySelector('.add-form__edit-button').addEventListener('click', refreshItem)

    document.querySelector('.todolist').addEventListener('click', deleteItem)
    document.querySelector('.todolist').addEventListener('click', editItem)
}
