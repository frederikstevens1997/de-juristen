import { useState } from 'react'

const FillForm = () => {
    let dateObj = new Date()
    let year = dateObj.getFullYear()
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();

    const[text, setName] = useState('')
    const[descrip, setDescription] = useState('')
    const[calender, setDate] = useState(year + "-" + month + "-" + day);
    const[type, setType] = useState(["audio", "videographic", "digital", "other"])

    const Add = type.map(Add => Add)

    const handleAddrTypeChange = (e) => { 
        console.clear(); 
        console.log((type[e.target.value])); 
        setType(type[e.target.value]) 
    }

    return (
        <form className="add-form">
            <div className='form-control'>
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={text}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input 
                    type="text" 
                    placeholder="description" 
                    value={descrip}
                    onChange={(e) => setDescription(e.target.value)}
                    />
            </div>
            <div className='form-control'>
                <label>Date Created</label>
                <input 
                    type="date" 
                    placeholder="calender" 
                    value={calender}
                    onChange={(e) => setDate(e.currentTarget.value)}
                    />
            </div>
            <div>
                <label>Type</label>
                <select 
                    onChange={e => handleAddrTypeChange(e)}
                    className='form-select'
                    >
                        {
                            Add.map((address, key) => <option key={key} value={key}> {address} 
                            </option>)
                        }
                        
                    {/* <option value="audio">audio</option>
                    <option value="videographic">videographic</option>
                    <option value="digital">digital</option>
                    <option value="other">other</option> */}
                </select>
            </div>
            <div>
                <label>Upload file:</label>
                <input type="file" className='form-type'></input>
            </div>
        </form>
    )
}

export default FillForm
