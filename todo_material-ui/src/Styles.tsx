import {makeStyles, createMuiTheme} from "@material-ui/core"

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(219,3,0,0.9)',
        },
        secondary: {
            main: '#b9bdc0',
        }
    },
})

export const useStyles = makeStyles((theme) => ({
    emptyBox: {
        display: 'flex',
        justifyContent: 'center',
    },
    emptyBox__text: {
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 35,
    },

    header__info: {
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 35,
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    button: {
        borderRadius: 10,
        width: 65,
        height: 30,
        fontFamily: 'Caveat',
        fontWeight: 'bold',
        fontSize: 18,
    },

    todoList: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 20,
        overflow: 'auto',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10,
        },
    },
    todoList__button: {
        height: 25,
        marginTop: 5,
        marginBottom: 5,
    },
    todoList__buttonDelete: {
        marginLeft: -12,
    },
    todoList__checkbox: {
        marginLeft: -30,
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
    todoList__inputField: {
        width: '95%'
    },
    todoList__addButton: {
        marginLeft: 5
    },
}))
