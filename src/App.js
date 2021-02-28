import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import { createProvider } from "./graphql/mutations";
import { listProviders } from "./graphql/queries";

const initialProviderState = { name: '' }

function App() {

  const [formState, setFormState] = useState(initialProviderState)
  const [providers, setProviders] = useState([])

  useEffect(() => { fetchProviders() }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchProviders() {
    try {
      const todoData = await API.graphql(graphqlOperation(listProviders))
      const todos = todoData.data.listTodos.items
      setProviders(todos)
    } catch (err) { console.log('error fetching data') }
  }

  async function addProvider() {
    try {
      if (!formState.name) return
      const provider = { ...formState }
      setProviders([...providers, provider])
      setFormState(initialProviderState)
      await API.graphql(graphqlOperation(createProvider, { input: provider }))
    } catch (err) { console.log('error creating: ', err) }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Providers</h2>
          <input
            onChange={event => setInput('name', event.target.value)}
            value={formState.name}
            placeholder="Name"
          />
          <button onClick={addProvider}>Create Provider</button>
          {
            providers.map((provider, index) => (
              <div key={provider.id ? provider.id : index} >
                <p>{provider.name}</p>
              </div>
            ))
          }
        </div>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
