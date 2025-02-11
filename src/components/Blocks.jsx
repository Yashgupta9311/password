import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blocks = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [dataarray, setdataarray] = useState([]);

    const navigate=useNavigate()

    // Fetch password function
    const fetchpassword = async () => {
        const response = await fetch('http://localhost:3000/api/userpas/fetchuserpas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'jwttoken': localStorage.getItem("jwttoken"), 
            }
        });

        const data = await response.json();
        setdataarray(data);
        console.log(data)
    };

    useEffect(() => {
        if(localStorage.getItem("jwttoken")){

            fetchpassword();
        }
        else{
            navigate('/login')
        }
    }, []);  

    const savepassword = async () => {
        // Check if all fields are filled
        if (!form.site || !form.username || !form.password) {
            alert("Please fill all the required fields");
            return; // Don't proceed if any field is missing
        }
    
        // Log the data to be sent to the server
        console.log("Sending data:", {
            url: form.site,
            username: form.username,
            passwordmaneged: form.password
        });
    
        // Send POST request to backend
        const response = await fetch('http://localhost:3000/api/userpas/adduup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'jwttoken': localStorage.getItem("jwttoken")
            },
            body: JSON.stringify({
                url: form.site,
                username: form.username,
                passwordmaneged: form.password
            })
        });
    
        const result = await response.json();
        console.log("Server response:", result); // Log the result for debugging
    
        if (response.ok) {
            // On success, update the state and localStorage
            setdataarray([...dataarray, result]);
            localStorage.setItem("userdata", JSON.stringify([...dataarray, result]));
            setform({ site: "", username: "", password: "" }); // Clear form after saving
            alert("Password saved successfully");
        } else {
            // Show error message from backend
            alert(result.errors?.[0]?.msg || "Error saving password");
        }
    };
    

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const deletepasword = async (id) => {
        let conf = confirm("Are you sure you want to delete");
        if (conf) { const response = await fetch(`http://localhost:3000/api/userpas/deleteuup/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'jwttoken': localStorage.getItem("jwttoken")  
            }
        })
        if (response.ok) {
            setdataarray(dataarray.filter(item => item._id !== id));  
            localStorage.setItem("userdata", JSON.stringify(dataarray.filter(item => item._id !== id)));
            
        } else {
            alert("Error deleting password");
        }
            // console.log("Deleting item of id", id);
            // setdataarray(dataarray.filter(item => item.id !== id));
            // localStorage.setItem("userdata", JSON.stringify(dataarray.filter(item => item.id !== id)));
        }
    };

    const editpasword = (id) => {
        console.log("Editing the item, of id", id);
        setform(dataarray.filter(item => item.id === id)[0]);
        setdataarray(dataarray.filter(item => item.id !== id));
    };

    return (
        <div className="container m-auto w-full p-5 ">
            <h1 className="logo font-bold text-center text-2xl">Password manager</h1>
            <p className="text-center text-xs">Manage your passwords easily</p>
            <div className='text-black flex flex-col p-10 gap-7'>
                <input onChange={handlechange} value={form.site} name='site' placeholder='Enter the url' className='border-orange-500 border w-full' type="text" />
                <div className='flex gap-5 '>
                    <input onChange={handlechange} value={form.username} name='username' placeholder='Enter the username' className='border-orange-500 border w-3/5' type="text" />
                    <input onChange={handlechange} value={form.password} name='password' placeholder='Enter the password' className='border-orange-500 border w-2/5' type="text" />
                </div>
                <button onClick={savepassword} className='flex justify-center items-center'>
                    <lord-icon src="https://cdn.lordicon.com/tsrgicte.json" trigger="hover"></lord-icon>
                    Save passwords
                </button>
            </div>
            <div className="paslists">
                <h2 className='p-3 font-bold text-2xl'>List of passwords</h2>
                {dataarray.length === 0 && <div className='text-red-600 flex justify-center text-xl'>No passwords saved</div>}
                {dataarray.length !== 0 &&
                    <table className="table-auto w-full bg-orange-100">
                        <thead className='bg-orange-500'>
                            <tr>
                                <th>URL</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataarray.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td className='text-center'>
                                            <a href={item.url} target='_blank' rel="noopener noreferrer">{item.url}</a>
                                        </td>
                                        <td className='text-center'>{item.username}</td>
                                        <td className='text-center'>{item.passwordmaneged}</td>
                                        <td className='flex justify-center'>
                                            <span onClick={() => { editpasword(item._id) }} className='editbtn hover:cursor-pointer'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#000000,secondary:#000000"
                                                    style={{ width: "25px", height: "25px" }}
                                                />
                                            </span>
                                            <span onClick={() => { deletepasword(item._id) }} className='deltebtn hover:cursor-pointer'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/hwjcdycb.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#000000,secondary:#000000"
                                                    style={{ width: "25px", height: "25px" }}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default Blocks;
