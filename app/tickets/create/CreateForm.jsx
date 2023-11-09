"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

// client component
export default function TicketForm() {
    const router = useRouter();

    const [form, setForm] = useState({
        title: '',
        body: '',
        priority: 'low'
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const ticket={...form,user_email:"testmail@gmail.com"};

        const res=await fetch('http://localhost:4000/tickets',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(ticket)
        });

        if(res.status===201){
            router.refresh();
            router.push('/tickets');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title</span>
                <input
                    required
                    typer="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
            </label>
            <label>
                <span>Body</span>
                <textarea
                    required
                    typer="text"
                    value={form.body}
                    onChange={(e) => setForm({ ...form, body: e.target.value })}
                />
            </label>
            <label>
                <span>Priority</span>
                <select
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
                type="submit"
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add</span>}
            </button>
        </form>
    )
}