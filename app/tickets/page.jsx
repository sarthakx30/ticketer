import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
    return (
        <div>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Open Tickets</small></p>
                </div>
            </nav>

            <Suspense fallback={<Loading/>}>
                <TicketList />
            </Suspense>
        </div>
    )
}