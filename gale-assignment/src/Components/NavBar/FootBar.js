import AppBar from "@mui/material/AppBar";
import { Container } from "@material-ui/core";
import './FootBar.css'

export default function FootBar() {
    return (<div  className='main-footbar-view'>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
                <div className='footer-wrap'>
              <h4 variant="body1" color="inherit" href="#">
                LOREM
              </h4>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              </div>
              <div className='footer-wrap'>
              <h4 variant="body1" color="inherit" href="#">
                LOREM
              </h4>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              </div>
              <div className='footer-wrap'>
              <h4 variant="body1" color="inherit" href="/#">
                LOREM
              </h4>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              </div>
          </Container>
        </AppBar></div>
    )
}