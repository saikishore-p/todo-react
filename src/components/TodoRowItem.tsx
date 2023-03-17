import React from "react";

// Added export here so that we don't have to export default at the bottom
// Changed to const instead of function using an arrow function
// We are mentioning TodoRowItem to be of type react functional component (FC) so that typescript is able to verify we are exporting the correct thing.
// and in our functional component, we are expecting a row number, row description, a rwo assigned and deleteTodo
// And we're going to make sure this is all props and then we're going to pass in all the information to return it. 
 
export const TodoRowItem: React.FC<{
    rowNumber: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}> = (props) =>{

    // const rowNumber =1;
    // const rowDescription = "Feed Dogg";
    // const rowAssigned = "Eric";

    //return should be only one component....so we cannot return two rows....instead we can return one div which has two rows
    return ( 
        <tr onClick = {() => props.deleteTodo(props.rowNumber )}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}