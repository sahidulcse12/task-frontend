const GRAPHQL_ENDPOINT = "http://localhost:5000/graphql/";

export async function fetchGraphQL(query: string, variables?: any) {
    const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables })
    });

    const json = await response.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("GraphQL error");
    }
    return json.data;
}
