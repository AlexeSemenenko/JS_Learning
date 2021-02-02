import {makeStyles} from "@material-ui/core"
import {createMuiTheme} from "@material-ui/core"

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(219,3,0,0.9)',
        },
        secondary: {
            main: '#b9bdc0',
        }
    }
})

export const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: 10,
        width: 65,
        height: 30,
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 18,
    },

    addForm__editButton: {
        marginLeft: 5,
        '@media only screen and (max-width: 660px)': {
            marginTop: 7,
            marginLeft: 28,
        }
    },
    addForm__saveButton: {
        '@media only screen and (max-width: 660px)': {
            marginLeft: 28,
        }
    },
    addForm__inputField: {
        width: '95%',
        marginBottom: 7,
    },
    addForm__label: {
        fontFamily: 'Caveat',
        fontSize: 20,
    },

    todoList__button: {
        marginLeft: 30,
        height: 25,
    },
    todoList__buttonDelete: {
        marginLeft: -10,
    },
    todoList__checkbox: {
        marginLeft: 30,
        marginBottom: -10,
    },
    decorationDone: {
        textDecoration: 'line-through',
    },
    todoList_label: {
        fontFamily: 'Caveat',
        fontSize: 30,
        fontWeight: 500,
    },

    footer__info: {
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 20,
    },

    header__info: {
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 35,
    }
}))