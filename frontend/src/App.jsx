import ClientList from "./components/custom/ClientList.jsx";

function App() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Client Overview</h1>
			<ClientList />
		</div>
	);
}

export default App;
