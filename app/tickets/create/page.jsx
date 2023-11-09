import TicketForm from "./CreateForm";

// client component nested within server component
export default function CreateTicket() {
    return (
        <main>
            <h2 className="text-primary text-center text-3xl">
                Add a new ticket
            </h2>
            <TicketForm/>
        </main>
    )
}