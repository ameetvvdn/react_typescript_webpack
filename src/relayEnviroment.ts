import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

interface IOperation {
    text: string;
}

const fetchQuery = (
    operation: IOperation,
    variables: object,
) => {
    return fetch('http://localhost:3080/graphql', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 1'
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
