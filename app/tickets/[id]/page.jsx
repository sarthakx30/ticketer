import { notFound } from "next/navigation";

// this gives a default 404 page if ticket 'id' 
// does not exist for a specific ticket - false 
// Used to control what happens when a dynamic segment 
// is visited that was not 
// generated with generateStaticParams
export const dynamicParams=true;  


// function used with dynamic route segments to 
// statically generate routes at build time 
// instead of at request time.
export async function generateStaticParams(){
    // [ {id:'1'} , {id:'2} ] -- return type of this fn. where 
    // each object represents the populated dynamic 
    // segments of a single route.
    const res=await fetch('http://localhost:4000/tickets');
    const tickets=await res.json();

    return tickets.map((ticket)=>({
        id:ticket.id
    }))
    // Each property in the object is a dyamic
    // segment to be filled in for the route.
}

async function getTicketDetails(id) {
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 30
        }
    })

    if(!response.ok){
        notFound(); // returns 404 page
    }

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