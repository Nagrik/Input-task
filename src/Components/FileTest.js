import {useEffect, useState} from "react";
import './style.scss'
import axios from "axios";
import mammoth from 'mammoth'

function App() {
    const [wordFile, setWordFile] = useState('');
    const [imagePreview, setImagePreview] = useState(false);
    const [html, setHtml] = useState('');


    const onFileUpload = (event) => {
        const file = event.target.files[0]
        setWordFile(file)

        const reader = new FileReader()

        reader.readAsDataURL(file)
        setImagePreview(true)
    }
    console.log(wordFile)




    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', wordFile)
        axios.post("http://localhost:5000/api/category", formData, {
        }).then(res => {
            console.log(res)
        })

    }


    if(imagePreview){
        mammoth.convertToHtml(wordFile).then(function (result){
            this.html = result.value
            this.message = result.message
        })
            .done()
    }





    return (
        <div className="App">
            <input type="file" onChange={onFileUpload} />
            {/*<TestMamoth/>*/}
        </div>
    );
}

export default App;
