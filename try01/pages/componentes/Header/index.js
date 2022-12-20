import Head from "next/head";


export default function Header(props) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.titulo}</title>
            </Head>
        </>
    )
}

