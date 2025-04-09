import { useState, useEffect } from "react";
import ClientCard from "./ClientCard";
import axios from "../../../axios.js";
import { ClipLoader } from "react-spinners";

const ClientList = () => {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const response = await axios.get("/data");
				console.log(response.data);
				setClients(response.data.data);
			} catch (err) {
				setError("Failed to load clients");
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchClients();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				{/* Loading Spinner */}
				<ClipLoader color={"#000000"} size={50} />
			</div>
		);
	}

	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<div className="space-y-4">
			{clients.map((client, idx) => (
				<ClientCard key={idx} client={client} />
			))}
		</div>
	);
};

export default ClientList;
