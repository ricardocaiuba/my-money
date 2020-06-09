import React from 'react';
import Rest from "./rest"

const baseURL = "https://mymoney-rrsantos.firebaseio.com/";
const { useGet, usePost, useDelete } = Rest(baseURL);

const resource = "movimentacoes/2020-06";
const resourceRemove = `${resource}/-M9P5UqwuAdEm40X5VmF`;

function App() {
  const data = useGet(resource);
  const [postData, post] = usePost(resource)
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({
      valor: 22.45,
      descricao: "Picanha"
    });
  }

  const doRemove = () => {
    remove(resourceRemove);
  }

  return (
    <div>
      <h1>MyMoney</h1>
      <pre>{JSON.stringify(data)}</pre>
      {data.loading && <p>Loading...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Remover</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;
