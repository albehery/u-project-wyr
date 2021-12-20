import React from "react";

class AddQuestion extends React.Component {
    render() {
        return (
            <div className='card'>
                <h3>Add a new question</h3>
                <form>
                    <input type="text" name="option1" id="option1" placeholder="enter first option here" />
                    <br />
                    <input type="text" name="option2" id="option2" placeholder="enter secode option here" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddQuestion