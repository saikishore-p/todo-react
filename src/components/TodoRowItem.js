function TodoRowItem(props){

    // const rowNumber =1;
    // const rowDescription = "Feed Dogg";
    // const rowAssigned = "Eric";

    //return should be only one component....so we cannot return two rows....instead we can return one div which has two rows
    return ( 
        <tr onClick = {() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem