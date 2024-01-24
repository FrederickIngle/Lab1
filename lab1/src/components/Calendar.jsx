import React from "react";
import Event from "./Event";

const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                <tr>
                    <th> </th> 
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
            </tr>

                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 AM</td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <Event event='Starbucks ☕️' color ='green'/>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green'/>
                    </tr>
                    <tr>
                        <td className="time">9 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 AM</td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 AM</td>
                        <td></td>
                        <td></td>
                        <Event event='Class' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 PM</td>
                        <Event event='Workout' color ='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Riverwalk' color ='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Dinner' color ='green'/>
                    </tr>


                </tbody>
            </table>
        </div>

    )
}

export default Calendar;