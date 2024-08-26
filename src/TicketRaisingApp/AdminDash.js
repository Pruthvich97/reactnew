import React, { Component } from 'react';
import axios from 'axios';
import './TicketApp.css'

class AdminDash extends Component {
  state = {
    tickets: [],
    adminComments: {} // Store admin comments for each ticket
  };

  componentDidMount() {
    axios.get('http://localhost:3001/tickets')
      .then(response => this.setState({ tickets: response.data }));
  }

  handleStatusChange = (id) => {
    const { adminComments } = this.state;
    axios.patch(`http://localhost:3001/tickets/${id}`, { 
      status: 'closed', 
      adminComment: adminComments[id] || '' // Add admin comment before closing
    })
      .then(response => {
        const updatedTickets = this.state.tickets.map(ticket =>
          ticket.id === id ? { ...ticket, status: 'closed', adminComment: adminComments[id] || '' } : ticket
        );
        this.setState({ tickets: updatedTickets });
      });
  };

  handleCommentChange = (e, id) => {
    const { value } = e.target;
    this.setState(prevState => ({
      adminComments: {
        ...prevState.adminComments,
        [id]: value
      }
    }));
  };

  render() {
    return (
      <div className='admindash'>
        <h2>Admin Dashboard</h2>
        <ul>
          {this.state.tickets.map(ticket => (
            <li key={ticket.id} className={`ticket priority-${ticket.priority}`}>
              <p><strong>Description:</strong> {ticket.description}</p>
              <p><strong>Status:</strong> {ticket.status}</p>
              {ticket.status === 'open' && (
                <div className='txtareaclsbtn'>
                  <textarea className='textarea' placeholder='Solution...'
                    onChange={(e) => this.handleCommentChange(e, ticket.id)}
                  />
                  <button onClick={() => this.handleStatusChange(ticket.id)}>Close Ticket</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminDash;