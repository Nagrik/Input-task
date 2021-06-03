import React from 'react';
import mammoth from 'mammoth'
import DocFile from "./uploads/29052021-230125_181-test.doc";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '',
            wordDoc: '',
            bool: false
        }
    }

    onFileUpload = (event) => {
        const file = event.target.files[0]
        this.setState({
            wordDoc: file
        })

        const reader = new FileReader()

        reader.readAsDataURL(file)
        console.log(this.state.wordDoc)

    }
    componentDidMount() {
        let currentComponent = this;
        fetch(DocFile).then(res => res.arrayBuffer()).then(ab =>
            mammoth.convertToHtml({arrayBuffer: ab}).then(function (result) {
                var html = result.value;
                currentComponent.setState({html: html})
            })
                .done()
        )
        console.log(this.state.wordDoc)

    }


    render() {
        console.log(this.state.wordDoc)

        return (

            <div>
                <div dangerouslySetInnerHTML={{__html: this.state.html}}/>

            </div>
        );
    }
};

export default Test;
