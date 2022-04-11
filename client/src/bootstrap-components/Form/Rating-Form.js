import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <form className="form">
                <b-row className="my-1">
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Enter event name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row className="my-2">
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Enter your name"></b-form-input>
                    </b-col>
                </b-row>
                <b-input-group>
                    <b-form-rating v-model="value" color="#ff8800"></b-form-rating>
                    <b-input-group-append>
                        <b-input-group-text className="justify-content-center" style="min-width: 3em;">{{ value }}
                        </b-input-group-text>
                    </b-input-group-append>
                </b-input-group>
                <b-form-textarea id="textarea" v-model="text" placeholder="text" rows="3" max-rows="6"></b-form-textarea>
                <button className="btn btn-outline-submit" type="submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default Form;