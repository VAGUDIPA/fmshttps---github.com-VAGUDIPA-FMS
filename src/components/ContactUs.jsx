import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

 export default function contactUs() {

  return (
    <Box 
    textAlign="center">
          <div  textAlign="center" style={{padding:"200px"}}>
          <style>{'body { background: linear-gradient(#CCFF99,#FF99FF); }'}</style>
            <h1 style={{color:"#663300"}} >CONTACT US</h1>
            <form  noValidate>
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
                {" "}
                <b>
                   Name: FMS Team
                </b>
              </Typography>
              
              <br />
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
              <b>Contact: +91 9898765431</b>
              </Typography>
              <br/>
              <Typography textAlign="center" style={{fontfamily:"Times New Roman"}}>
              <b>Email: fmsteam2021@gmail.com</b>
              </Typography>
              
            </form>
          </div>
    </Box>
  );
}

