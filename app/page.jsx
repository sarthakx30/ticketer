import Link from "next/link"
export default function Home(){
    return(
      <main>
        <h2>Dashboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>

        <div className="flex justify-center my-8">
          <Link href='/tickets'>
            <button className="btn-primary">View Tickets</button>
          </Link>
        </div>

        <h2>Company Updates</h2>

        <div className="card">
          <h3>New Team Member</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="card">
          <h3>New Website Live!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </main>
    )
}