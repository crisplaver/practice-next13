import Link from "next/link";

export default async function Page() {
    const data = await fetchData();

    return (
        <div>
            <h1>SSR Page</h1>
            <ul>
                <li>
                    <Link href="/">App</Link>
                </li>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </ul>
        </div>
    )
}


async function fetchData() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1`,
        { cache: 'no-store' },
    );
    const data = await res.json();

    await delay(1000);
    return data;
}

function delay(millis: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, millis)
    })
}