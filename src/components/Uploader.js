import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Uploader=()=> {
let formdata=new FormData();

  const onfilechange=(e)=>{
    console.log(e.target.files[0])
    if(e.target && e.target.files){
      formdata.append('file',e.target.files[0])
    }
  }

  const submitfile=(e)=>{
    formdata.append('file',e.target.files)
    axios.post(
      'https://v2.convertapi.com/upload',
      formdata
      )
      .then(res=>{
        console.log('file Uploaded',res)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  return (
    <div className="App">
      <div>
        <input type="file" name="file_upload" onChange={onfilechange}/>
      </div>
      <div>
        <button onClick={submitfile}>Submit</button>
      </div>
    </div>
  );
}

export default Uploader;
