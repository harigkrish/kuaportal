import React, { useState } from 'react';
//import "D://reactexamples/auakuaportal/node_modules/bootstrap/dist/css/bootstrap.css";
// import axios from 'axios';;

const AuaOtp = () => {

  const [uidData, setUidData] = useState(
    {
      udiNum : "",
      
  }) ;

  const [otpData, setOtpData] = useState(
    {
      
      otpNum : "",
  }) ;

  const {udiNum}=uidData;
  const {otpNum}=otpData;

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
        const re = /^[0-9\b]+$/;
        
        if (e.target.value === '' || re.test(e.target.value)) {
          setUidData({udiNum: e.target.value})
       }
      };

      const onOtpInputChange = e => {
        const rex = /^[0-9\b]+$/;
        
        if (e.target.value === '' || rex.test(e.target.value)) {
          setOtpData({otpNum: e.target.value})
       }
      };
     
        const onSubmit = async (e) => {
          e.preventDefault();
          alert(udiNum.length)
          // if(udiNum.length === 12 || udiNum.length === 16){
          //   validateVerhoeff1(udiNum);
          // }else if(udiNum.length !== 12 || udiNum.length !== 16){
            
          //   alert("uid is not valid");
          //  }

          validateVerhoeff1(udiNum);
        //   try {
        //     const response = await  axios
        //      .post("http://localhost:8080/api/v1/demographic", uidData)
             
        //    console.log("response "+response)
       
        //    return response;
        //  } catch (error) {
        //      throw error;
        //  }
       
    }

  return (
    <div className="container">
  
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Otp Verification</h2>
      <form onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <label>Aadhaar Number</label>
        <input type={Number} className="form-control form-control-lg" size={16} autoComplete='off'
          placeholder="Enter Aadhaar number" id="udiNum" name="udiNum" value={udiNum} maxLength={16}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="form-group">
        <label>Otp</label>
        <input type="text" className="form-control form-control-lg" 
          placeholder="Enter otp number"  name="otpNum" value={otpNum}
          onChange={e => onOtpInputChange(e)}
        />
      </div>
      <button className="btn btn-primary btn-block">Authenticate</button>
      </form>
      </div>
    </div>
  )
}


export default AuaOtp
