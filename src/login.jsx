import axios from 'axios';
import React from 'react'

const login = () => {
    const [data, setData] = useState({email:"", password: ""});
    const [loading, setLoading] = useState(false);

    const changeHandler = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

        console.log(data);

    const login = async()=>{
        setLoading(true);
        try {
            const res = await axios.post("https://rescuebackend.vercel.app/v1/rescue/login", data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

  return (
    <div>
      <input type="email" name='email' value={data.email} onChange={changeHandler}/>
      <input type="text" name='password' value={data.password} onChange={changeHandler} />
      <button onClick={login}>{loading ? "loading" : "login"}</button>
    </div>
  )
}

export default login
