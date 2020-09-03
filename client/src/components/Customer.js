import React from 'react';
import TableRaw from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "./CustomerDelete"; 

class Customer extends React.Component{
    render(){ 
        return(
           <TableRaw>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt="profile"/></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
               <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
           </TableRaw>
        );
    }
}

export default Customer;