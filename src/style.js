// import { makeStyles } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>({
  container:{
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:'#FFFFFF',
    // padding: theme.spacing(8,0,6)
    padding: '0 30px'
  },
  icon:{
    marginRight: '20px',
  },
  buttons:{
    marginTop: '40px',
  },
  cardGrid:{
    padding: '20px 0'
  },
  card:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia:{
    paddingTop:'56.25%'
  },
  cardContent:{
    flexGrow: 1
  },
  footer:{
    backgroundColor:'#F5F5F5',
    padding:'50px 0'
  }
}))

export default useStyles;