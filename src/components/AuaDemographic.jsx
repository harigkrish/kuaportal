import React, { useState } from 'react';

// import axios from 'axios';;
import { Box,  useTheme,  } from "@mui/material";
import { tokens } from "../theme";


const AuaDemographic = () => {

  const [uidData, setUidData] = useState(
    {
      udiNum : "",
      aadhaarName : ""
  }) ;

  const {udiNum, aadhaarName}=uidData;

  const [authType, setAuthType] = useState(
    {
      type : "",
      
  }) ;

  const {type,}=authType;



            const d  = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
                [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], 
                [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], 
                [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], 
                [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], 
                [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], 
                [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], 
                [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], 
                [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];

	
            // The permutation table
            const p =[
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], 
                [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], 
                [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], 
                [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], 
                [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], 
                [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], 
                [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
    
	
            // The inverse table
          //  const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

          function validateVerhoeff1(num){
            alert("number is "+num);
            let cc;
            let c = 0;
            let myArray = StringToReversedIntArray(num);
            alert("myArray is "+myArray);
            for (let i = 0; i < myArray.length; i++)
            {
               c = d[c][p[(i % 8)][myArray[i]]];
              
            }
           
            cc=c;
            
            if(cc===0){
          //                    alert("Valid UID")
            } else{
              alert("Invalid UID");
              setUidData({udiNum: ''});
              return false;
            }
        }     
        
        function StringToReversedIntArray(num){
          var myArray = [num.length];
          for(var i = 0; i < num.length; i++)
          {
               myArray[i] = (num.substring(i, i + 1));	
          }
          myArray = Reverse(myArray);
          return myArray;
        }
       function Reverse(myArray)
       {
          var reversed = [myArray.length];
          for(var i = 0; i < myArray.length ; i++)
          {
            reversed[i] = myArray[myArray.length - (i + 1)];	
          }
          return reversed;
       }
        
      const onInputChange = e => {
        setUidData({ ...uidData, [e.target.name]: e.target.value });
      };

      const handleChange = e => {
        setAuthType({ type : e.target.value });
      };
     
        const onSubmit = async (e) => {
          e.preventDefault();
          alert(udiNum.length);
          alert("auth type is "+type)
          if(type.length === 0 ){
            alert("please select the authentication type");
            return false;
          }
          if(window.confirm( 'Are you sure you want to proceed with '+ type +' Authentication or not?' ) === true){
          if(udiNum.length === 12 || udiNum.length === 16){
            validateVerhoeff1(udiNum);

          }else if(udiNum.length !== 12 || udiNum.length !== 16){
            setUidData({udiNum: ''});
            alert("uid is not valid");
           }

          // validateVerhoeff1(udiNum);
        //   try {
        //     const response = await  axios
        //      .post("http://localhost:8080/api/v1/demographic", uidData)
             
        //    console.log("response "+response)
       
        //    return response;
        //  } catch (error) {
        //      throw error;
        //  }
          }
    }
   
    
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    
  
    

      <div >

<div className="container">



<Box m="70px">
      {/* HEADER */}
      
      {/* GRID & CHARTS */}
      <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* ROW 1 */}
      
        {/* ROW 2 */}
        

        {/* ROW 3 */}
        <Box gridColumn="span 6" gridRow="span 3" p="30px" backgroundColor="white" >
          <Box height="250px"  mt="-20px">
            <div backgroundColor="#fff">
          <form onSubmit={e => onSubmit(e)}>
          <table>
            <tr style={{backgroundColor:"#2A5537" , color:"ButtonFace"}}>
               <h3>Demographic Verification    </h3> 
            </tr>
            <tr>
                <div>
                  <input type="radio" value="aua" id="aua"
                      onChange={e => handleChange(e)} name="type" />
                      <label for="aua" >AUA</label> &nbsp;&nbsp;&nbsp;
                  <input type="radio" value="kua" id="kua"
                    onChange={e => handleChange(e)} name="type"/>
                    <label for="kua">KUA</label>
                  </div>
            </tr>
            <tr>
                <div>
                    <label> <b>UID/VID </b></label>
                    <input type="text" className="form-control form-control-lg"
                      style={{width:"340px"}} size={16} autoComplete='off'
                      placeholder="Enter Aadhaar number" id="udiNum" name="udiNum" value={udiNum} maxLength={16}
                      onChange={e => onInputChange(e)}
                    />
                  </div>
            </tr>
            <tr>
                <div className="form-group">
                  <label><b>Aadhaar Name</b></label>
                  <input type="text" className="form-control form-control-lg" 
                    placeholder="Enter Aadhaar name"  id="aadharName" name="aadharName" value={aadhaarName}
                    style={{width:"340px"}}  onChange={e => onInputChange(e)}
                  />
                </div>
            </tr>
            <tr style={{padding:"5px"}}>
                  <button  style={{padding:"5px"}} className="btn btn-primary btn-block">Authenticate</button>
            </tr>
          </table>
            
          </form>    
          </div>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Box height="250px"  width="350px"mt="-20px">
          
          </Box>
        </Box>
        {/* <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} padding="30px" >
           
          <Box height="250px" mt="-20px">
          
          </Box>
        </Box> */}
      </Box>
    </Box>
  

  
</div>
      </div>
    )
}

export default AuaDemographic
