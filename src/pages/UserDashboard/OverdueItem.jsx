import React from "react";

const OverdueItem = () => {
    return(
        <tr className="t-row">
            <td className="t-data__book">Lord of the rings</td>
            <td className="t-data">18/09/22</td>
            <td className="t-data">18/10/22</td>
            <td className="t-data">2 days</td>
            <td className="flex justify-center"><button className="table-button">Return</button></td>
        </tr>
    )
}

export default OverdueItem;