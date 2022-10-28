import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h1>App Page</h1>
            <ul>
                <li>
                    <Link href="/ssr">SSR</Link>
                </li>
            </ul>
        </div>
    )
}

