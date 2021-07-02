const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script abc="stu-test" src="http://127.0.0.1:8080/main.js"></script>,
    ])
}
