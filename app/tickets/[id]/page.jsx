async function getTicketDetails(id) {
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 30
        }
    })
    return response.json();
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicketDetails(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created By :{ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority[0].toUpperCase() + ticket.priority.substring(1)} Priority
                </div>
            </div>
        </main>
    )
}