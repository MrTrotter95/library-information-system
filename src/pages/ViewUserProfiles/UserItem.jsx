import React from "react";

const UserItem = () => {
    return (
        <tr className="t-row">
            <td className="t-data">0001</td>
            <td className="t-data__book">SMITH, John</td>
            <td className="t-data">4</td>
            <td className="t-data red">2</td>
            <td className="flex justify-center"><button className="table-button">Edit User</button></td>
        </tr>
    )
}

export default UserItem;