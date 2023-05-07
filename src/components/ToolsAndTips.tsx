import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function ToolsAndTips() {
  return (
    <div className='p-1 '>
        <div>
      
            <Accordion>
                
                <Accordion.Item eventKey="0" className="hover-shadow">
                    <Accordion.Header><u>How to Zoom</u></Accordion.Header>
                    <Accordion.Body className='bg-light'>
                    To move simply scroll up and down the chart on your mouse or keypad.

                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                    <Accordion.Header><u>How to Change Chart Types</u></Accordion.Header>
                    <Accordion.Body className='bg-light'>
                    Click on the box with the down arrow on the top right and you will be able to cloose between the following, in order:
                    <ul>
                        <li>Auto</li>
                        <li>Bar</li>
                        <li>Line</li>
                        <li>Candle</li>
                        <li>Column</li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" >
                    <Accordion.Header><u>How to Move Left and Right</u></Accordion.Header>
                    <Accordion.Body className='bg-light'>
                    In order to move left and right the chart must be zoomed into. After it is zoomed in, click 
                    on the map and move the mouse and keypad left to right.
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>

    </div>


    </div>
  )
}

export default ToolsAndTips
