import Head from "next/head"

function Meta({title, keywords, description}) {
    return (
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
    );
}

Meta.defaultProps = {
    title: "Trucker App", 
    keywords: "trucker app featured",
    description: ""
}

export default Meta
