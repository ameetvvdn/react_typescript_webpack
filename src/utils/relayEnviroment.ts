import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';


const fetchQuery = (
    operation: any,
    variables: any,
) => {
    return fetch('http://localhost:3080/graphql', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 1',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': 'Authorization, Content-Type, X-Requested-With',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
    network,
    store,
});
