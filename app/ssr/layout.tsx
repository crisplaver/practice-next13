/* eslint-disable @next/next/no-head-element */

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <title>SSR Layout</title>
            </head>
            <body style={{ padding: 0, margin: 0 }}>
                <div style={{ borderBottom: '1px solid', padding: 12, background: 'lightgrey' }}>SSR Layout</div>
                {children}
            </body>
        </html>
    );
}
