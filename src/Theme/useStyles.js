import { createTheme, makeStyles } from "@material-ui/core/styles"

const theme = createTheme();

const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card:{
        padding: 30
    },
    avatar:{
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80
    },
    icon:{
        fontSize: 60
    },
    form:{
        marginTop: 40,
        marginBottom: 10
    },
    gridmb:{
        marginBottom:20
    },
    link:{
        marginTop: 8,
        fontSize : "1.1rem",
        fontFamily : "Roboto",
        lineHeight: 1.5,
        color : theme.palette.primary.main,
        textDecoration : "none"
    },
    Appbar:{
        paddingTop: 8,
        paddingBottom: 8
    },
    grow:{
        flexGrow: 0,
        [theme.breakpoints.up('md')] : {
            flexGrow: 1
        }
    },
    LinkBarLogo :{
        display : "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration :"none"
    },
    mr:{
        marginRight: 3
    },
    ButtonIcon :{
        fontSize: 14,
        padding: 0
    },
    linkBarDesktop :{
        display : "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration: "none"

    },
    list:{
        width: 250
    },
    listItem:{
        padding : 0
    },
    LinkBarmobile:{
        display : "inline-flex",
        alignItems: "center", 
        width : "100%",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    listItemIcon :{
        minWidth : 35
    },
    sectionDesktop :{
        display :"none",
        [theme.breakpoints.up('md')] : {
            display:"flex"
        }
    },
    sectionMobile:{
        display:"flex",
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display:"none"
        }

    },
    text_title : {
        fontWeight: 600,
        color: '#494949',
        marginBottom: 10
    },
    media:{
        height: 250,
        backgroundColor: '#F2F2F2',
        margin: '15px 15px 0 15px'
    },
    price:{
        float : 'right',
        padding: '0 20px 0 20px',
        backgroundColor : '#0f80aa'
    },
    text_card: {
        fontWeight : 'bold',
        color : '#656565',
        marginBottom: 8
    },
    PaperImg: {
        backgroundColor: "#f2f2f2"
    },
    mediaDetail:{
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_details:{
        fontWeight: 500,
        color: "#494949",
        marginBottom: 5
    },
    imgproductoCC : {
        backgroundColor: "#f2f2f2",
        width : 80,
        height: 70
    },
    paperPadding:{
        padding: 20
    },
    gridPC : {
        margin: "auto",
        marginTop: 20
    }
})

export default useStyles;