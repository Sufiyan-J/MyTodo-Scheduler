import React from 'react'

export const About = () => {
    let styles={
        color:"Blue",

    }
    return (
        <div className="container my-3" style={styles} >
            <h3 ><strong>About MyTodo Scheduler</strong></h3>

            <p>
                MyTodo Scheduler is developed to help the individual plan and line up the tasks in a scheduled manner to make it easy for him/her to visually traverse through tasks and complete it further on. 
            </p>

            <p>
                <h3>Build Info</h3>
                MyTodo Scheduler is built using React framework which helps the user to move through pages without reloading the tab each time.
                This is possible due to the React-Router-Dom package for React. 
            </p>
        </div>
    )
}
